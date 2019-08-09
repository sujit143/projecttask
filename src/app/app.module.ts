import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LocationdisplayComponent } from './locationdisplay/locationdisplay.component';
import { EditdisplayComponent } from './locationdisplay/editdisplay/editdisplay.component';
import { routing } from './routing';
import { AdddisplayComponent } from './locationdisplay/adddisplay/adddisplay.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LocationdisplayComponent,
    EditdisplayComponent,
    AdddisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    InMemoryWebApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
