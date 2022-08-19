import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  userData=[
    {id:1, name:'Rahul', gender: 'male'},
    {id:2, name:'Neha', gender: 'female'},
    {id:3, name:'Sam', gender: 'male'},
    {id:4, name:'Chandni', gender: 'female'},
    {id:5, name:'Priyanka', gender: 'female'},
    {id:6, name:'Ginny', gender: 'female'},
    {id:7, name:'Ayush', gender: 'male'},
    {id:8, name:'Rupak', gender: 'male'},
    
  ]
  constructor() { }
  data:any;
  data2:any;
  data3:any;

  ngOnInit(): void {
    const source= from(this.userData)

    // filter by name length
    source.pipe(
      filter(member=>member.name.length>4),
      toArray()
    ).subscribe(res =>{
      console.log(res);
      this.data=res
      
    })

    // filter by gender
    source.pipe(
      filter(member=>member.gender=='female'),
      toArray()
    ).subscribe(res =>{
      console.log(res);
      this.data2=res
      
    })

    // filter by nth data
    source.pipe(
      filter(member=>member.id<=5),
      toArray()
    ).subscribe(res =>{
      console.log(res);
      this.data3=res
      
    })
  }

}
