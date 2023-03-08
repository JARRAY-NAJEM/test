export interface PeriodicElement {

  name: string;

  age: number;
  prenome: string;
  departement : string
  ID:number;
  dateNaissance : any
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID:1001, name: 'Hydrogen',   prenome:    'H' ,    dateNaissance: '2/25/2000' ,      age: 22,     departement:'developpeur'   },
  {ID:1010, name: 'Helium',     prenome:    'He',    dateNaissance: '5/14/1999'   ,      age: 23,     departement:'testeur'     },
  {ID:1000, name: 'Lithium',    prenome:    'Li',    dateNaissance: '7/18/1998'  ,      age: 24,     departement:'graphiste'},
  // {ID:2002, name: 'Beryllium',  prenome:    'Be',    dateNaissance: '11/29/1997' ,      age: 25,     departement:'directeur'},
  // {ID:2020, name: 'Boron',      prenome:    'B' ,    dateNaissance: '3/17/1996'  ,      age: 26,     departement:'programmeur'},
  // {ID:2000, name: 'Carbon',     prenome:    'C' ,    dateNaissance: '12/2/1995'  ,      age: 27,     departement:'technicien'},
  // {ID:3003, name: 'Nitrogen',   prenome:    'N' ,    dateNaissance: '6/9/1994'   ,      age: 28,     departement:'administateur'},
  // {ID:3030, name: 'Oxygen',     prenome:    'O' ,    dateNaissance: '9/17/1993'  ,      age: 29,     departement:'designeur'},
  // {ID:3000, name: 'Fluorine',   prenome:    'F' ,    dateNaissance: '8/15/1992'  ,      age: 30,     departement:'developpeur'},
  // {ID:4004, name: 'Neon',       prenome:    'Ne' ,   dateNaissance: '1/11/1991'  ,      age: 31,     departement:'programmeur'},
]
