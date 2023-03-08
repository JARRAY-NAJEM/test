import { Component, OnInit , Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog ,   } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { startWith, map, Observable,   } from 'rxjs';
import { FormUserComponent } from '../form-user/form-user.component';
import { PeriodicElement } from './liste';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  myForm= new FormGroup({
     name: new FormControl,
   prenome: new FormControl,
   age: new FormControl,
   departement: new FormControl,
    dateNaissance: new FormControl
  })
  displayedColumns: string[] = [ 'ID', 'name','prenome','dateNaissance' ,'age', 'departement','action'];
  tableperiode: PeriodicElement[] = [
    {ID:1001, name: 'Hydrogen',   prenome:    'H' ,    dateNaissance: '2/25/2000' ,      age: 22,     departement:'developpeur'   },
   {ID:1010, name: 'Helium',     prenome:    'He',    dateNaissance: '5/14/1999'   ,      age: 23,     departement:'testeur'     },
  {ID:1000, name: 'Lithium',    prenome:    'Li',    dateNaissance: '7/18/1998'  ,      age: 24,     departement:'graphiste'},
 ];
 dataSource = new MatTableDataSource<PeriodicElement>()

  constructor(public dialog: MatDialog , public updialog: MatDialog) {
    this.dataSource =new MatTableDataSource(this.tableperiode)

  }
  openDialog( ) {
   const dialogRef = this.dialog.open(FormUserComponent,{
    data: {
      action:"creates"
    },
  }  );

   dialogRef.afterClosed().subscribe((result: any) => {
    console.log(result,"result",this.dataSource);
    result.user.ID= Math.floor(Math.random() *9999);
    this.tableperiode.push(result.user)
    this.dataSource =new MatTableDataSource(this.tableperiode)
   //   console.log( this.tableperiode);
  })
  }



  ngOnInit(): void {}










   openUpDialog(element:PeriodicElement) {

   const dialogRef = this.updialog.open(FormUserComponent,{
    data: {
      element: element,action:"edit"
    },
  });
  dialogRef.afterClosed().subscribe((result: any) => {
 //   console.log(result,"result",this.dataSource);
    let index=this.tableperiode.findIndex((item:PeriodicElement)=>item.ID==result.user.ID)
   // console.log(index,"index"  );
    if(index>-1){
      this.tableperiode[index]=(result.user)
      this.dataSource =new MatTableDataSource(this.tableperiode)


    }


  })

  }











  myControl = new FormControl('');
  options: string[] = [ 'testeur',      'developpeur',   'designeur',     'programmeur',   'directeur',      'graphiste',    'administateur', 'technicien',  ];
  filteredOptions!: Observable<string[]>;


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;







}



