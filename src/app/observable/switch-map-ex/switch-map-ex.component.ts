import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounce, debounceTime, delay, distinctUntilChanged, from, map, of, pluck, switchAll, switchMap, toArray } from 'rxjs';
import { UtilitesService } from '../../services/utilites.service'

@Component({
  selector: 'app-switch-map-ex',
  templateUrl: './switch-map-ex.component.html',
  styleUrls: ['./switch-map-ex.component.css']
})
export class SwitchMapExComponent implements OnInit,AfterViewInit {

  constructor(private pr:UtilitesService) { }
  @ViewChild('serchForm')serchForm:NgForm



    // search example
    ngAfterViewInit(): void {
    
      const text= this.serchForm.valueChanges
      text.pipe(
        pluck('search_text'), 
        debounceTime(500),
        distinctUntilChanged()
        // map(res=>res['search_text'])
      ).subscribe(res=> {
        console.log(res);
        
      })

      this.pr.apiSearch().pipe(
        toArray()
      ).subscribe(res=> {
        console.log(res);
        
      })

    }

  getData(data){
    return of(data+ " Video Uploaded").pipe(delay(1000))
  }

  ngOnInit(): void {
    const source=from(['Tech', 'News', 'Vision'])

    // map ex
    source.pipe(
      map(data=> this.getData(data))
    ).subscribe(res=> {
      // console.log(res);
      this.pr.printVal(res, 'el')
    })

    // map + switchAll
    source.pipe(
      map(data=> this.getData(data)),
      switchAll()
    ).subscribe(res=> {
      // console.log(res);
      this.pr.printVal(res, 'el2')
      
    })

    // switchMap
    source.pipe(
      switchMap(data=> this.getData(data))
    ).subscribe(res=> {
      console.log(res);
      this.pr.printVal(res, 'el3')
    })

  }



}
