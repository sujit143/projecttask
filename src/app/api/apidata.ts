import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Form } from 'src/app/locationdisplay/formclass';


export class MobileData implements InMemoryDbService {
  createDb(){
    const users: Form[]=[

        {
          "Name": "abc",
          "Dec": "offshoredep",
          "Address1":"39 pipline",
          "Address2": "jhkgg",
          "City": "bangalor",
          "State": "kar",
          "Zip": "560086",
          "Country":"india",
          "Phone1": "080-614586",
          "Phone2": "1234567898",
          "Fax": "",
          "Website": "www.com"
          },
          {
            "Name": "pqr",
            "Dec": "offshoredep",
            "Address1":"39 pipline",
            "Address2": "jhkgg",
            "City": "bangalor",
            "State": "kar",
            "Zip": "560086",
            "Country":"india",
            "Phone1": "080-614586",
            "Phone2": "1234567898",
            "Fax": "",
            "Website": "www.com"
          },
          {
            "Name": "xyz",
          "Dec": "offshoredep",
          "Address1":"39 pipline",
          "Address2": "jhkgg",
          "City": "bangalor",
          "State": "kar",
          "Zip": "560086",
          "Country":"india",
          "Phone1": "080-614586",
          "Phone2": "1234567898",
          "Fax": "",
          "Website": "www.com"
          },
    ];
    return {users};
  }
}
