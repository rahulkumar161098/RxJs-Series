import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitesService {

  constructor() { }

  apiData:any= from([
    {'name': 'Rahul'},
    {'name': 'Abhi'},
    {'name': 'Shayam'},
    {'name': 'Rupak'},
    {'name': 'Aayush'},
    {'name': 'Rohit'},
    {'name': 'Chandu'},

  ])

  printVal(val:any, dataId:string){
    let el:any= document.createElement('li');
    // set dynamically class in div
    el.setAttribute('class', 'item')
    el.innerText=val;
    document.getElementById(dataId)?.appendChild(el)
  }
  apiSearch():Observable<any>{
    return this.apiData
    // console.log(this.apiData);
    
  }
  
}
