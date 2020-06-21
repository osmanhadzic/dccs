import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Form } from "../entity/Form";

export class FormController{
    private formRepository = getRepository(Form);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.formRepository.findOne(request.params.id);
        await this.formRepository.remove(userToRemove);
    }


}