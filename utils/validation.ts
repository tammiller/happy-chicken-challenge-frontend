import { Validator } from "react";

export class ValidationUtils{

   // let validator = require('validator');

    public static isValidName(name: String){
        return name.length==0;
    }

    public static isValidEmail(email: String){
       // return validator.isValidEmail(email);
    }
}