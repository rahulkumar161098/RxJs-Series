import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { UtilitesService } from '../../services/utilites.service'

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor( private data: UtilitesService) { }

  ngOnInit(): void {

    const source_one= interval(1000).pipe(take(5),map(v=>'source_one_data # '+(v+1)))
    const source_second=interval(1000).pipe(take(3),map(v=>'source_second_data # '+(v+1)))
    const source_third= interval(1000).pipe(take(8),map(v=>'source_third_data # '+(v+1)))

    const final_data= concat(source_one, source_second, source_third)
    const merge_data= merge(source_one, source_second, source_third)

    final_data.subscribe(res=>{
      // console.log(res);
      this.data.printVal(res, 'el')
    })
    merge_data.subscribe(res=>{
      // console.log(res);
      this.data.printVal(res, 'el1')
    })

  }

}
