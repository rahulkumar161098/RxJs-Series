import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObsComponent } from './observable/custom-obs/custom-obs.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfAndFromComponent } from './observable/of-and-from/of-and-from.component';
import { RetryComponent } from './observable/retry/retry.component';
import { TakeOperatorComponent } from './observable/take-operator/take-operator.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path: '', component: ListComponent},
    {path: 'form_event', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of_and_from', component: OfAndFromComponent},
    {path: 'to_array', component: ToArrayComponent},
    {path: 'cusrom', component: CustomObsComponent},
    {path: 'map', component: MapComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'take', component: TakeOperatorComponent},
    {path: 'retry', component: RetryComponent},
    {path: 'debounce_time', component: DebounceTimeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
