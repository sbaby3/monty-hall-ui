import { Component } from '@angular/core';
import { ResultsService } from 'src/app/services/results-service.service';


@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
})
export class MainGameComponent {

  value: String = '';

  constructor(private resultsService: ResultsService) {
    this.ngOnInit();
  };
  ngOnInit() {

  }
  onSubmit() {
    console.log("submit called");
    this.resultsService.getResults().subscribe();

  }
}
