import { Component } from '@angular/core';
import { ExclusiveService } from '../exclusive.service';

@Component({
  selector: 'app-semi-exclusive',
  templateUrl: './semi-exclusive.component.html',
  styleUrls: ['./semi-exclusive.component.css']
})
export class SemiExclusiveComponent {
  constructor(private exc:ExclusiveService){
  }
    ngOnInit() {
      this.exc.exclusive.next(false);
    }
}
