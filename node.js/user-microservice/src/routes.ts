import { FormController } from "./controller/FormController";
import { SearchController } from "./controller/SearchController";

export const Routes = [{
    
    method:"get",
    route:"/form",
    controller:FormController,
    action:"all"
},{
    method:"get",
    route:"/form/:id",
    controller:FormController,
    action:"one"
},
{
    method:"post",
    route:"/form",
    controller:FormController,
    action:"save"
},{
    method: "delete",
    route: "/form/:id",
    controller: FormController,
    action: "remove"
},
{
    method:"get",
    route:"/serach/:formName",
    controller:SearchController,
    action:"one"
},{
    method:"get",
    route:"/serach",
    controller:SearchController,
    action:"all"
}
];