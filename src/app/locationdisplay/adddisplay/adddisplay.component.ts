import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Form } from '../formclass';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-adddisplay',
  templateUrl: './adddisplay.component.html',
  styleUrls: ['./adddisplay.component.css']
})
export class AdddisplayComponent implements OnInit {
  arr:Form[]=[];
  name: string="";
  dec: string="";
  address1: string="";
  address2: string="";
  city: string="";
  state: string="";
  zip: string="";
  country: string="";
  phone1: string="";
  phone2: string="";
  fax: string="";
  website: string="";


    // new Form("abc","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
    // new Form("pqr","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
    // new Form("xyz","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com")

  constructor(private _act:ActivatedRoute,private _data: LocationService) {

  }

  ngOnInit() {}
  // onSaveProduct(f) {
  //   this._data.addProduct(f.value).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }

}
