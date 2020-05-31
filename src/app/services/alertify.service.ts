import { Injectable } from '@angular/core';
declare let alertify:any;
//global servis olduğunu gösteren satır.
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    //alertify.success(message)
    alert(message);
  }
}
