import {Page, NavController} from 'ionic/ionic';
import {AddCandidateProfilePage} from '../addCandidateProfilePage/addCandidateProfilePage';

@Page({
  templateUrl: 'build/pages/candidateListingPage/candidateListingPage.html',
})
export class CandidateListingPage {
  constructor(nav:NavController) {
    this.nav = nav;
  }

  addCandidate() {
    this.nav.push(AddCandidateProfilePage);
  }
}
