import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { UtilitesService } from '../../services/utilites.service'

@Component({
  selector: 'app-merge-map-concat-map',
  templateUrl: './merge-map-concat-map.component.html',
  styleUrls: ['./merge-map-concat-map.component.css']
})
export class MergeMapConcatMapComponent implements OnInit {

  constructor(private du: UtilitesService) { }
  getData(data){
    return of( data+' video Uploaded')
  }
  getData2(data){
    return of( data+ ' video uploaded').pipe(delay(2000))
  }


  ngOnInit(): void {

    // getting observable an observable stream
    const source=from(['Tech', 'Comedy', 'Vision'])
    // const source2=from(['Tech', 'Comedy', 'Vision'])
    source.pipe(
      map(res=>this.getData(res))
    ).subscribe(res=> res.subscribe(res2=>{
      // console.log(res2); 
    }))

    // example of margeMap
    source.pipe(
      mergeMap(res=>this.getData(res))

    ).subscribe(res=>{
      console.log(res);
      this.du.printVal(res,'el')  
    })

    // concatmap
    source.pipe(
      concatMap(res=> this.getData2(res))
    ).subscribe(res=>{
      console.log(res);
      this.du.printVal(res,'el2')  
    })


  }

}
