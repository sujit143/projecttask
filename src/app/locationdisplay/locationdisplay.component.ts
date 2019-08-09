import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LocationService } from './location.service';
import { Form } from './formclass';
@Component({
  selector: 'app-locationdisplay',
  templateUrl: './locationdisplay.component.html',
  styleUrls: ['./locationdisplay.component.css']
})
export class LocationdisplayComponent implements OnInit {
   Name: string="";
   Dec: string="";
   Address1: string="";
   Address2: string="";
   City: string="";
   State: string="";
   Zip: string="";
   Country: string="";
   Phone1: string="";
   Phone2: string="";
   Fax: string="";
   Website: string="";

    arrform:Form[]=[];

    // arr:Form[]=[
    //   new Form("abc","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
    //   new Form("pqr","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
    //   new Form("xyz","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com")
    // ];
  router: any;
  constructor(private _router:Router, private _data:LocationService) { }


  ngOnInit() {

    this.arrform = this._data.getAllLocations();

    // this._data.getAllLocations().subscribe(
    //   (data:Form[]) => {
    //     this.arr = data;
    //   }
    // );
  }
  // onAddDetail(f) {
  //   this.arr.push(new Form(this.Name,this.Dec,this.Address1,this.Address2,this.City,this.State,this.Zip,this.Country,this.Phone1,this.Phone2,this.Fax,this.Website));
  //   alert("successfully add")
  //   }
  deleteTask(item1:Form){
  // console.log(item1);
  this.arr.splice(this.arr.indexOf(item1),1);
  alert("Are You Sure");
}
onEditTaskClick(item:Form){

  this.router.navigate(['editdisplay']);

}
search(value) {
  if (value != "") {
    this.arr = this.arr.filter(x => x.Name.indexOf(value) != -1);
  }
  }
}

