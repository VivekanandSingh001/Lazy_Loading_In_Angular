import { Injectable, HostListener } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: Subject<boolean> = new Subject<boolean>();
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private readonly checkInterval = 1000;
  private storageCheckTimer: any;

  constructor() {
    const storedValue = localStorage.getItem('isLoggedIn');
    this.myBooleanVariable = storedValue ? JSON.parse(storedValue) : false;
    this.isLoggedInSubject.next(this.myBooleanVariable);
    this.startStorageCheckTimer();
  }

  private myBooleanVariable: boolean;

  isUserLoggedIn(): boolean {
    return this.myBooleanVariable;
  }

  private startStorageCheckTimer() {
    this.storageCheckTimer = setInterval(() => {
      const storedValue = localStorage.getItem('isLoggedIn');
      const newValue = storedValue ? JSON.parse(storedValue) : false;
      if (this.myBooleanVariable !== newValue) {
        this.myBooleanVariable = newValue;
        console.log("LocalStorageVariable1", this.myBooleanVariable);
        this.isLoggedInSubject.next(this.myBooleanVariable);
      }
    }, this.checkInterval);
  }

  private stopStorageCheckTimer() {
    if (this.storageCheckTimer) {
      clearInterval(this.storageCheckTimer);
    }
  }

  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (event.key === 'isLoggedIn') {
      const newValue = event.newValue === 'true';
      if (this.myBooleanVariable !== newValue) {
        this.myBooleanVariable = newValue;
        console.log("LocalStorageVariable1", this.myBooleanVariable);
        this.isLoggedInSubject.next(this.myBooleanVariable);
      }
    }
  }

  ngOnDestroy() {
    this.stopStorageCheckTimer();
  }
}
