import { Component } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
})
export class AngularComponent {
  title = 'Angular';

  constructor(private _enrollServ: EnrollService)
  {

  }

  enroll () {
    this._enrollServ.onEnrollClick(this.title);
  }
}
