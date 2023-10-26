import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }
  login(url:any): Observable<any>
  {
     return this.httpclient.get(url);
  }
  certificate(url:any): Observable<any>
  {
    return this.httpclient.get(url);
  }
  signer(url:any): Observable<any>
  {
    return this.httpclient.get(url);
  }
  app(id:Number, value:any): Observable<any>
  {
    return this.httpclient.put('https://docshield-docshield-offchain.apps.ocpdev.aramco.com.sa/docdet/statapp/'+id+'', value);
  }
  signed()
  {
    return this.httpclient.get('https://docshield-docshield-offchain.apps.ocpdev.aramco.com.sa/docdet/signed');
  }
  addc(body:any)
  {
    return this.httpclient.post('https://docshield-docshield-offchain.apps.ocpdev.aramco.com.sa/doctype/addc',body);
  }
  savedoc(body:any)
  {
    return this.httpclient.post('https://docshield-docshield-offchain.apps.ocpdev.aramco.com.sa/docdet/signed',body);
  }
  isssued_doc(url: any): Observable <any>
  {
    return this.httpclient.get(url);
  }
  approved_doc(url: any): Observable <any>
  {
    return this.httpclient.get(url);
  }
  login1(body: any): Observable <any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.post(`http://localhost:5000/userlogin/uselog`, body, { headers });
  }


}
