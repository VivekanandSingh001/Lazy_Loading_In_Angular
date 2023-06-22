import { Component, OnInit } from '@angular/core';
import { ExclusiveService } from '../exclusive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
exclusive:boolean=false;
constructor(private exc:ExclusiveService){}
  ngOnInit() {
    this.exc.exclusive.subscribe(res=>{
      this.exclusive=res
    })
  }

}
