import { Component, OnInit } from '@angular/core';
import { ExclusiveService } from '../exclusive.service';

@Component({
  selector: 'app-exclusive',
  templateUrl: './exclusive.component.html',
  styleUrls: ['./exclusive.component.css']
})
export class ExclusiveComponent implements OnInit{
  exclusive:boolean=true;
constructor(private exc:ExclusiveService){
}
  ngOnInit() {
    this.exc.exclusive.next(true);
  }
  ngOnDestroy(){
    this.exc.exclusive.next(false);
  }
}
