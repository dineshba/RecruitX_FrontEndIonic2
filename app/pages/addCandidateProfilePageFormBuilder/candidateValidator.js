import { Control } from "angular2/common";

interface ValidationResult{
   [key:string]:boolean;
}

export class CandidateValidator {

    static pattern(control: Control): ValidationResult {
      if (control.value!= "" && !/^[a-z'-\,]+[\sa-z.'-\,]*$/i.test(control.value)){
        return {"pattern": true};
      }
      return null;
    }

    static numeric(control: Control): ValidationResult {
      if (control.value !="" && !/^[0-9]+([\.,][0-9]+)?$/.test(control.value)){
        return {"numeric": true};
      }
      return null;
    }
}
