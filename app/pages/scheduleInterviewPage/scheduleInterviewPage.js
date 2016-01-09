import {Page} from 'ionic/ionic';

@Page({
 templateUrl: 'build/pages/scheduleInterviewPage/scheduleInterviewPage.html'
})

export class ScheduleInterviewPage {
   constructor() {
     this.interviewRounds = [
                 {index: 0, name:"Code Pairing"},
                 {index: 1, name:"Technical 1"},
                 {index: 2, name:"Technical 2"},
                 {index: 3, name:"Leadership"},
                 {index: 4, name:"P3"}
             ];
   }


        getOptions(){
             options = {
             date: new Date(),
             minDate: Date.now(),
             allowOldDates: false,
             mode: 'datetime'
             };
             return options;
        }

          onSuccess(index){
             var that = this;
             var round_no = index;
             onSuccess = function(datetime){
               that.interviewRounds[round_no].time = datetime;
             };
             return onSuccess;
          }

          onError(){
            onError = function (error) { // Android only
               alert('Error: ' + error);
            };
             return onError;
          }

      onClick(args){
          datePicker.show(this.getOptions(), this.onSuccess(args.index), this.onError());
      }
}
