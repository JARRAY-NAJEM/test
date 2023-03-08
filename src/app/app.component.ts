import { DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import * as moment from 'moment';









@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  click = false;

 mydate = moment().format( );
  btn(){
    return (this.mydate, console.log(this.mydate)
    )
  }











}
