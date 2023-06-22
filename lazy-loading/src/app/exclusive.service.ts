import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExclusiveService {
exclusive=new Subject<boolean>();
  constructor() { 
    console.log("service setvsi",this.exclusive)
  }
}
