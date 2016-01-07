import {Page, NavController} from 'ionic/ionic';
import {ScheduleInterviewPage} from '../scheduleInterviewPage/scheduleInterviewPage'

class Candidate {
  constructor(
    public name: string,
    public role: string
  ){ }
}
@Page({
  templateUrl: 'build/pages/addCandidateProfilePage/addCandidateProfilePage.html',
})
export class AddCandidateProfilePage {
  constructor(nav:NavController) {
    this.roles = ['Dev', 'QA', 'BA', 'PM', 'UI/UX'];
    this.nav = nav;
    this.model =new Candidate();
  }
//  model = new Candidate("Recruiter");

 get diagnostic() {return JSON.stringify(this.model);}

  scheduleInterview(args) {
    if (args == true)
    this.nav.push(ScheduleInterviewPage);
  }
}
