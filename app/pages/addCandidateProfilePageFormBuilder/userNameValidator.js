import { Control } from "angular2/common";

interface ValidationResult{
   [key:string]:boolean;
}

export class UsernameValidator {

    static pattern(control: Control): ValidationResult {
      if (control.value!= "" && !/^[a-z'-\,]+[\sa-z.'-\,]*$/i.test(control.value)){
        return {"pattern": true};
      }
      return null;
    }
}
