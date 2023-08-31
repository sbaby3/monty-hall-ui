import { Component } from '@angular/core';
import { ResultsService } from 'src/app/services/results-service.service';


@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
})
export class MainGameComponent {

  totalGames: number = 100;
  totalGamesResult: number = -1;
  winsWithoutSwitching: number = -1;
  winsWithSwitching: number = -1;

  displayResults: boolean = false;
  displaySpinner: boolean = false;


  constructor(private resultsService: ResultsService) {
    this.ngOnInit();
  };

  ngOnInit() {

  }

  onSubmit() {
    this.displayResults = true;
    this.displaySpinner = true;
    this.resultsService.getResults(this.totalGames).subscribe((resultsResponse) => {
        this.displayResults = true;
        this.totalGamesResult = resultsResponse.totalGamesResult;
        this.winsWithoutSwitching = resultsResponse.winsWithoutSwitching;
        this.winsWithSwitching = resultsResponse.winsWithSwitching;
        this.displaySpinner = false;
      }
    );
  }

  onClear() {
    this.displayResults = false;
  }
}
