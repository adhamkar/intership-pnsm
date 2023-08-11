import { Component,Injectable } from '@angular/core';

@Component({
  selector: 'app-share-population-data',
  templateUrl: './share-population-data.component.html',
  styleUrls: ['./share-population-data.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class SharePopulationDataComponent {
  private populationData: any[] = [];
  constructor(){}

  setData(data: any[]) {
    this.populationData = data;
  }

  getData() {
    return this.populationData;
  }
}
