import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterTaskComponent } from './tasks/counter/counter-task.component';

const routes: Routes = [{
  path: 'counter',
  component: CounterTaskComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
