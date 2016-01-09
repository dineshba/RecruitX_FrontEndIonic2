import { Page , NavController } from 'ionic/ionic';
import {FormBuilder,Validators,Control,ControlGroup,FORM_DIRECTIVES} from 'angular2/common'
import { UsernameValidator } from './usernameValidator.js'
import {ScheduleInterviewPage} from '../scheduleInterviewPage/scheduleInterviewPage'



@Page({
	templateUrl: 'build/pages/addCandidateProfilePageFormBuilder/addCandidateProfilePageFormBuilder.html',
  directives: [FORM_DIRECTIVES]
})
export class AddCandidateProfilePageFormBuilder {

	constructor(builder: FormBuilder, nav:NavController) {
		this.nav = nav;
		this.symptoms = [
								{checked: false, name:"Code Pairing"},
								{checked: false, name:"Technical 1"},
								{checked: false, name:"Technical 2"},
								{checked: false, name:"Leadership"},
								{checked: false, name:"P3"}
						];

    this.name = new Control("", Validators.compose([Validators.required, UsernameValidator.pattern]));
		this.experience = new Control("", Validators.compose([Validators.required, UsernameValidator.numeric]));
		// this.skills = new Control("", Validators.compose([Validators.required]));

    this.form = builder.group({
		  name:  this.name,
			experience: this.experience

  	});
	}

	submitData(){
     	console.log(JSON.stringify(this.form.value));
			  this.nav.push(ScheduleInterviewPage);

  }
};
