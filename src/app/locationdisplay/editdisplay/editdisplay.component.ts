import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editdisplay',
  templateUrl: './editdisplay.component.html',
  styleUrls: ['./editdisplay.component.css']
})
export class EditdisplayComponent implements OnInit  {
  name: string="";
  dec: string="";
  address: string="";
 city: string="";
  state: string="";
  zip: string="";
  country: string="";
  phone: string="";
  phone2: string="";
  fax: string="";
  website: string="";
  constructor(private _act:ActivatedRoute) {
   }

  ngOnInit() {

   }
   onEditdisplay(f){}

}
