import { EditdisplayComponent } from './locationdisplay/editdisplay/editdisplay.component';
import { Routes, RouterModule } from "@angular/router";
import { LocationdisplayComponent } from './locationdisplay/locationdisplay.component';
import { AdddisplayComponent } from './locationdisplay/adddisplay/adddisplay.component';

const arr: Routes = [

  { path: "", component: LocationdisplayComponent },
  { path: "editdisplay", component: EditdisplayComponent },
  {path: "adddisplay",component:AdddisplayComponent}

];

export const routing = RouterModule.forRoot(arr);
