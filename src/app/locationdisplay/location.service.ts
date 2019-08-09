import { Injectable } from '@angular/core';
import { Form } from "./formclass";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url:Form[] =[
    new Form("abc","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
    new Form("pqr","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
    new Form("xyz","offshoredep","39 pipline","jhkgg","bangalor","kar","560086","india","080-614586","1234567898","","www.com")
  ];

  private arr = 'app/api/apidata';
  constructor(private _http: HttpClient) { }

  getAllLocations() {
    return this.arr;
  }

  addProduct(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.arr, body, { headers: head });
  }
}
0.
