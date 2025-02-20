import { Component, OnInit, ViewChild } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator/paginator';
import { MatSort } from '@angular/material/sort/sort';
import { MatTableDataSource } from '@angular/material/table/table-data-source';



export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.scss']
})



export class PatientsTableComponent implements OnInit {
applyFilter: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

}



/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


  constructor() { 

      // Create 100 users
      const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
  }

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


function createNewUser(id: number): any {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';


    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function constructor() {
  throw new Error('Function not implemented.');
}

function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

function applyFilter(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }) {
  throw new Error('Function not implemented.');
}
