import { Page , NavController } from 'ionic/ionic';
import {FormBuilder,Validators,Control,ControlGroup,FORM_DIRECTIVES} from 'angular2/common'
import { CandidateValidator } from './candidateValidator.js'
import {ScheduleInterviewPage} from '../scheduleInterviewPage/scheduleInterviewPage'



@Page({
	templateUrl: 'build/pages/addCandidateProfilePageFormBuilder/addCandidateProfilePageFormBuilder.html',
  directives: [FORM_DIRECTIVES]
})
export class AddCandidateProfilePageFormBuilder {

	constructor(builder: FormBuilder, nav:NavController) {
		this.nav = nav;

    this.name = new Control("", Validators.compose([Validators.required, CandidateValidator.pattern]));
		this.experience = new Control("", Validators.compose([Validators.required, Validators.min, CandidateValidator.numeric]));
 		this.skills = ['Java', 'Python', 'C#', 'Ruby'];
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
