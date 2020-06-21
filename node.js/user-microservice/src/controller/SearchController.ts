import { getRepository } from "typeorm";
import { Form } from "../entity/Form";
import { Request, NextFunction, Response } from "express";



export class SearchController{
    private formRepository = getRepository(Form);


     async all(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.findOne(request.params.formName);
    }

}