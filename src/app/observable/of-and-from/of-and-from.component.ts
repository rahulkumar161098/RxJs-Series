import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilitesService } from 'src/app/services/utilites.service';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.css']
})
export class OfAndFromComponent implements OnInit {

  constructor(private _designPrint: UtilitesService) { }
  obsData:any;
  ngOnInit(): void {
    const obs= of('rahul', 'shayam', 'rohit')
    const obs2= of({a:'rahul', b: 'rohit', c: 'rupak'})

    obs.subscribe(res=>{
      this._designPrint.printVal(res, 'ofData')
      console.log(res);
    })
    obs2.subscribe(res=>{
      this.obsData=res
      console.log(res);
      
    })

    // from
    // using array
    const arr=['rahul', 'rupak', 'Aayush']
    const obsArray= from(arr)
    obsArray.subscribe(res=>{
      this._designPrint.printVal(res, 'arrayData')
      console.log(res);
    })

    // from - promise

    const promise= new Promise(resolve =>{
      setTimeout(()=>{
        // console.log("Promise resolve dara");
        resolve(arr)
      },3000)
    });

    // promise.then(res=>{
    //   console.log(res);
    // })
    const obsArrayPromise= from(promise)
    obsArrayPromise.subscribe(res=>{
      // console.log(res);
      this._designPrint.printVal(res, 'promiseData')
      
    })

  }

}
