import { Component,Injectable  } from '@angular/core';

@Component({
  selector: 'app-shared-button-service',
  templateUrl: './shared-button-service.component.html',
  styleUrls: ['./shared-button-service.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SharedButtonServiceComponent {
  private buttonClicked = false;

  setButtonClicked(clicked: boolean) {
    this.buttonClicked = clicked;
  }

  getButtonClicked() {
    return this.buttonClicked;
  }
}
