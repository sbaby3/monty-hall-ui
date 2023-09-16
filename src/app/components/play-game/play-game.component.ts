import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GameResultsDialogComponent } from '../game-results-dialog/game-results-dialog.component';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})


export class PlayGameComponent {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<GameResultsDialogComponent>) {}
  
  correctDoor: number = -1;
  enabledDoors: boolean[] = [true, true, true];
  initialClick: boolean = true;
  gameTextArray: String[] = [
    'Choose a door',
    'Interesting choice!',
    'Im gonna help you a little',
    'I have removed one of the other doors that is a wrong door',
    'Now choose a door from one of the remaining ones',
    'Correct! You Win',
    'Wrong Door. You Lose :('

  ];

  dialogText: String = '';

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialogRef = this.dialog.open(GameResultsDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: {dialogText: this.dialogText},
    });

    this.dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }

  ngOnInit() {
    this.correctDoor = Math.floor(Math.random() * (4-1) + 1);
    this.initialClick = true;
  }

  gameText: String = this.gameTextArray[0];

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onDoorClicked(doorNumber: number) {
    if (this.initialClick == true) {
      this.initialClick = false;
      this.initialButtonClick(doorNumber);
    }
    else if(this.initialClick == false) {
      this.secondButonClick(doorNumber);
    }

  }

  async initialButtonClick(doorNumber: number) {
    this.gameText = this.gameTextArray[1];
    await this.delay(2000);
    this.gameText = this.gameTextArray[2];
    await this.delay(2000);
    this.disableDoor(doorNumber);
    this.gameText = this.gameTextArray[3];
    await this.delay(2000);
    this.gameText = this.gameTextArray[4];
  }

  async secondButonClick(doorNumber: number) {
    if (doorNumber == this.correctDoor) {
      this.dialogText = this.gameTextArray[5];
    } else {
      this.dialogText = this.gameTextArray[6];
    }
    this.openDialog('750ms', '100ms');

  }

  disableDoor(selectedDoor: number) {
    let disabledDoor = -1;
    let doorList = new Array<number>();
    doorList.push(1);
    doorList.push(2);
    doorList.push(3);
    
    if (this.correctDoor == selectedDoor) {
      for (let i = 0; i < doorList.length; i++) {
        if (doorList[i] == selectedDoor) {
          doorList.splice((selectedDoor-1), 1);
          break;
        }
      }

      let removalIndex = Math.floor(Math.random() * (2-0) + 0);
      doorList.splice(removalIndex, 1);

      disabledDoor = doorList[0];
    } else {
      for (let i = 0; i < doorList.length; i++) {
        if (doorList[i] != this.correctDoor || doorList[i] != selectedDoor) {
          disabledDoor = doorList[i];
          break;
        }
      }
    }

    this.enabledDoors[disabledDoor-1] = false;

  }
}
