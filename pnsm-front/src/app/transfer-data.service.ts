import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  lastInsertedProgramId: number | null = null;

  getprogrammeId() {
    return this.lastInsertedProgramId;
  }

  setprogrammeId(programId: number) {
    this.lastInsertedProgramId = programId;
  }
}
