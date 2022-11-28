import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'endPoints_Data';
  list:any;
 constructor(public data:DataServiceService){}
  ngOnInit(){
    this.getData();
  }
 

  getData(){
    this.data.getList().subscribe(res=>{
      this.list=res  ;
    })
  }






  list2: any = of(
    {
    data:[
      {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }]
}
)


}
