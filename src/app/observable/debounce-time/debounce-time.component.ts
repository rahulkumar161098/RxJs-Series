import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit{

  @ViewChild('search_item') search_item:ElementRef
  reqData:any= null;
  constructor() { }

  ngAfterViewInit(): void {
    const searchItem= fromEvent<any>(this.search_item.nativeElement, 'keyup' ).pipe(
      map(event=> event.target.value),
      debounceTime(500)
    )
    searchItem.subscribe(res=> {
      console.log(res);
      this.reqData=res
      
    })
  }

  ngOnInit(): void {
  }

}
