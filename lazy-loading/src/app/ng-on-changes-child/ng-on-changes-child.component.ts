import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-ng-on-changes-child',
  templateUrl: './ng-on-changes-child.component.html',
  styleUrls: ['./ng-on-changes-child.component.css']
})
export class NgOnChangesChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  counter: number = 0;
  interval: any;
  @Input() dataValue: string = '';
  @Input() product: Product = new Product();
  @ContentChild("child") contentChild?: ElementRef;
  @ViewChild("viewChild") viewChild?: ElementRef;
  constructor() {
    console.log("constructor works");
    // this.interval = setInterval(() => {
    //   this.counter++;
    //   console.log("counter : " + this.counter);
    // }, 1000)
  }
  ngOnInit(): void {
    console.log("OnINitworks");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges Called", changes);
  }
  ngDoCheck(): void {
    console.log("Coming from Do check", this.product)
  }
  ngAfterContentInit(): void {
    console.log("I am Coming From ngAfterContentInit ", this.contentChild);
  }
  ngAfterContentChecked(): void {
    console.log("I am from AfterContentChecked")
    this.contentChild?.nativeElement.setAttribute("style", `color:${this.dataValue}`);
  }
  ngAfterViewInit(): void {
    console.log("I am from AfterViewInit Changed", this.viewChild)
  }
  ngAfterViewChecked(): void {
    console.log("I am from AfterViewChecked ")
    this.viewChild?.nativeElement.setAttribute("style", `background-color:${this.dataValue}`)
  }
  ngOnDestroy(): void {
    console.log("is On Destroy");
    clearInterval(this.interval);
  }
}
