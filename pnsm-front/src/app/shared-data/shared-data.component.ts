import { Component,Injectable } from '@angular/core';

@Component({
  selector: 'app-shared-data',
  templateUrl: './shared-data.component.html',
  styleUrls: ['./shared-data.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class SharedDataComponent {
  private tableData: any[] = [];
  constructor(){}

  setData(data: any[]) {
    this.tableData = data;
  }

  getData() {
    return this.tableData;
  }
}
