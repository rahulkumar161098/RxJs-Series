import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitesService {

  constructor() { }

  printVal(val:any, dataId:string){
    let el:any= document.createElement('li');
    el.innerText=val;
    document.getElementById(dataId)?.appendChild(el)
  }
}
