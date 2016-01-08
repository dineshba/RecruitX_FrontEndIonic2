import { Page } from 'ionic/ionic';
import {FormBuilder,Validators,Control,ControlGroup,FORM_DIRECTIVES} from 'angular2/common'
import { UsernameValidator } from './usernameValidator.js'

@Page({
	templateUrl: 'build/pages/addCandidateProfilePageFormBuilder/addCandidateProfilePageFormBuilder.html',
  directives: [FORM_DIRECTIVES]
})

export class AddCandidateProfilePageFormBuilder {

	constructor(builder: FormBuilder) {
    this.name = new Control("",
      Validators.compose([Validators.required, UsernameValidator.pattern]));
		this.form = builder.group({
			name:  this.name
		});
	}

	submitData(){
     	console.log(JSON.stringify(this.form.value))
    }
};
