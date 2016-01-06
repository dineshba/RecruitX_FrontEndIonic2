import {Page, NavController} from 'ionic/ionic';
import {ScheduleInterviewPage} from '../scheduleInterviewPage/scheduleInterviewPage'

@Page({
  templateUrl: 'build/pages/addCandidateProfilePage/addCandidateProfilePage.html',
})
export class AddCandidateProfilePage {
  constructor(nav:NavController) {
    this.nav = nav;
  }

  scheduleInterview() {
    this.nav.push(ScheduleInterviewPage);
  }
}
