import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

 private Data : String ="abc"; 
 
 public getData(){
   return this.Data;
 }
 public setData(databaru){
  //  console.log(databaru);
  this.Data= databaru;;
 }
  constructor() { }

}