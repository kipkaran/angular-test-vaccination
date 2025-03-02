import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(FormsComponent)
  }

}
