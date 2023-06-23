import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  dataTable:any=[];
constructor(private http:HttpClient){
  http.get<any>("http://localhost:3000/profile").subscribe(res=>{
    this.dataTable=res;
    console.log("see for data table",res);
  })
}

}
