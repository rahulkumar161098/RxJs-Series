import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfAndFromComponent } from './observable/of-and-from/of-and-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path: '', component: ListComponent},
    {path: 'form_event', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of_and_from', component: OfAndFromComponent},
    {path: 'to_array', component: ToArrayComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
