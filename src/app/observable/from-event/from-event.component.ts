import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilitesService } from '../../services/utilites.service';
// import { ser } from '../../services/utilites.service'

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit{
  
  constructor( private _printUtiltity: UtilitesService ) { };

  @ViewChild('addVideo')addVideo!:ElementRef

  countvideo= 0
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    fromEvent(this.addVideo.nativeElement, 'click').subscribe(res=>{
      // console.log(res);
      let video='video'+ this.countvideo++;
      // console.log(video, 'dataId2');
      // this.print(video, 'dataId')
      // this.print(video, 'dataId2')
      this._printUtiltity.printVal(video, 'dataId')
      this._printUtiltity.printVal(video, 'dataId2')
      
    })  
  }


}


