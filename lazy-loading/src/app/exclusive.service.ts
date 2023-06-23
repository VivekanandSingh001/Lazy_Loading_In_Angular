import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExclusiveService {
exclusive=new BehaviorSubject<boolean>(true);
  constructor() { 
  }
}
