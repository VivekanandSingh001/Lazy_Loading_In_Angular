import { Component, OnInit } from '@angular/core';
import { ExclusiveService } from '../exclusive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  exxclusive: boolean = false;
  constructor(public exc: ExclusiveService) { }
  ngOnInit() {
    this.exc.exclusive.subscribe(res => {
      this.exxclusive = res;
      console.log("service setvsi", this.exxclusive)
    })
  }

}
