import { Component } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [],
  templateUrl: './react.component.html',
  styleUrl: './react.component.css',
})
export class ReactComponent {
  title = 'React';

  constructor(private _enrollService: EnrollService)
  {

  }

  enroll() {
    this._enrollService.onEnrollClick(this.title);
  }
}
