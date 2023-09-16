import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-results-dialog',
  templateUrl: './game-results-dialog.component.html',
  styleUrls: ['./game-results-dialog.component.css']
})
export class GameResultsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: {dialogText: string}) { }
}
