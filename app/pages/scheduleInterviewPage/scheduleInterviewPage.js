import {Page} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/scheduleInterviewPage/scheduleInterviewPage.html'
})
export class ScheduleInterviewPage {
  constructor() {

    var options = {
    date: new Date(),
    minDate: Date.now(),
    allowOldDates: false,
    mode: 'datetime'
    };

    function onSuccess(date) {
    alert('Selected date: ' + date);
    }

    function onError(error) { // Android only
    alert('Error: ' + error);
    }

    datePicker.show(options, onSuccess, onError);
  }
}
