import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private lastInsertedDataSubject = new BehaviorSubject<any>(null);
  lastInsertedData$ = this.lastInsertedDataSubject.asObservable();
  private sharedData: any[]=[];
  constructor(private http: HttpClient) {}

  sendData(data: any[]) {
    this.lastInsertedDataSubject.next(data);
  }

  getData() {
    return this.sharedData;
  }
  getlastId(): Observable<any> {
    // Implement logic to retrieve the last program ID from your API.
    return this.http.get<any>('http://localhost:3000/programmes/lastId');
  }
}
