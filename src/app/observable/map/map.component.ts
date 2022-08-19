import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { UtilitesService } from 'src/app/services/utilites.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private du: UtilitesService) { }
  subsVideo= interval(1000)
  sub1: Subscription;
  // sub1: Subscription;
  user=[
    {id: 1, name:'Rahul'},
    {id: 2, name:'Prem'},
    {id: 3, name:'Shayan'},
    {id: 4, name:'Rupak'},
    {id: 5, name:'Rohit'}
  ]

  ngOnInit(): void {

    // EX-01

    this.sub1=this.subsVideo.pipe(
      map(data=> 'video ' + data)
    )
    .subscribe(res =>{
      console.log(res)
      
    })
    setTimeout(()=>{
      this.sub1.unsubscribe()
    }, 10000);

    // EX-02
    let st= from(this.user);
    st.pipe(
      map(data=> data.name)
    ).subscribe(res=>{
      // console.log(res);
      this.du.printVal(res, 'map_element')
      
    })
  }


}
