import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }
  arraysub:any= Subscription;
  user =[
    {id: 101, name:'rahul', course:'CSE'},
    {id: 102, name:'aayush', course:'CSE'},
    {id: 103, name:'rohit', course:'CSE'},
    {id: 103, name:'rupak', course:'CSE'},
    
  ]

  ngOnInit(): void {
    const to_array= interval(1000)

    this.arraysub= to_array.pipe(
      take(5), //unsubscribe at 5th index
      toArray() //convert stream data to array type data
      )
    .subscribe(res=>{
      // console.log(res);
      
      // if(res>6){
      //   this.arraysub.unsubscribe()
      // }
    })

    // ex-02
    const source= from(this.user);
    source.pipe(
      toArray()
    ).subscribe(res=>{
      console.log(res);
      
    })

    // ex - 03
    const source2= of('aayush', 'rohit', 'shaym')
    source2.pipe(toArray())
    .subscribe(res=>{
      console.log(res);
      
    })
  }

}
