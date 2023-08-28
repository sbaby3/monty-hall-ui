import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResultsResponse } from 'src/app/models/ResultsResponse';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'http://localhost:8080';

  getResults(): Observable<ResultsResponse> {
    let params = new HttpParams();
    params = params.append('totalGames', 456789);
    return this.httpClient.get<ResultsResponse>(`${this.apiUrl}/getResults`, {params: params});
  }
}
