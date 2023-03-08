import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';




interface Departement {
  label: string;
}
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
      dataUser:any

    departements: Departement[] = [
      { label:'testeur' ,        },
      { label:'developpeur' ,    },
      { label:'designeur' ,      },
      { label:'programmeur' ,    },
      { label:'directeur' ,      },
      { label:'graphiste' ,      },
      { label:'administateur',   },
      { label:'technicien' ,     },
    ];
     pattern="^[ a-zA-Z][a-zA-Z ]*$";
  myForm= new FormGroup({
    // age           : new FormControl('',[Validators.required , Validators.pattern("^[0-9]*$"), Validators.min(18), Validators.max(60)]),
       name          : new FormControl('',[Validators.required , Validators.pattern(this.pattern)]),
    // prenome       : new FormControl('',[Validators.required , Validators.pattern(this.pattern)]),
    // departement   : new FormControl('', ),
    // dateNaissance : new FormControl('',[Validators.required ,Validators.min(18), Validators.max(60)]),
  });
   print(){
   // console.log(this.myForm.value)
    };
    datenaissance:any ;
    constructor(
      private dialogRef: MatDialogRef<FormUserComponent>,
      public dialog: MatDialog , @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.dataUser=data
    }

    //inject data in modal
    ngOnInit(): void {
   //  console.log (this.dataUser)
        if (this.dataUser.action=="edit"){
          console.log(this.dataUser.element);
            this.myForm= new FormGroup({
               ID            : new FormControl(this.dataUser.element.ID),
              //  age           : new FormControl(this.dataUser.element.age),
              name          : new FormControl(this.dataUser.element.name),
         //  prenome       : new FormControl(this.dataUser.element.prenome),
             // departement   : new FormControl(this.dataUser.element.departement),
            ////  dateNaissance : new FormControl(new Date(this.dataUser.element.dateNaissance)  ),
            });
            };}
            //close
  close(): void {
    this.dialogRef.close(false);
    }
    //ok
    confirm(): void {
       this.dialogRef.close({
        action:"edit",
        user:this.myForm.value
       });
    }



   mydate = moment(new Date( ) ).format(' MM-DD-YYYY"') ;
   diff!: string;
   age!:number;
   test!:any
      events: string[] = [];
     addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
         this.events.push(`${type}: ${(event.value  )} `)
            console.log( moment(  this.events  )  );

       console.log(moment(event.value).format(" MM-DD-YYYY") );
       var time_diff =moment(new Date(moment().format(" MM-DD-YYYY"))). diff(moment(new Date(moment(event.value).format(" MM-DD-YYYY"))), 'years' ) ;
       // afficher la différence
      console.log(time_diff);
       this.age = moment(new Date(moment().format(" MM-DD-YYYY"))).  diff(moment(new Date(moment(event.value).format(" MM-DD-YYYY"))), 'years' ) ;
       this.diff = moment(event.value).format(" MM-DD-YYYY") ;
       this.myForm.get('age')?.setValue(this.age);
 //  console.log(this.myForm );
       }
       getdate(){
  console.log(this.myForm.get("age"));
  const moonLanding = new Date( );
  let year = moonLanding.getFullYear() - parseInt(this.myForm?.get("age")?.value);
  let day =moonLanding.getDate()  ;
  let month = moonLanding.getMonth()+1
  // console.log(moonLanding.getFullYear());
  // console.log ( year );
  // console.log(day);
  // console.log(month);
  console.log(month +'/'+day+'/'+ year)
  this.myForm.get('dateNaissance')?.setValue(new Date(month +'/'+day+'/'+ year));
 console.log(this.myForm);
     }
}




