import { NgModule } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterComponent } from './components/counter.component';
import { ProgressCounterComponent } from './components/progress-counter.component';
import { CounterTaskComponent } from './counter-task.component';

@NgModule({
  declarations: [
    CounterTaskComponent,
    CounterComponent,
    ProgressCounterComponent
  ],
  imports: [
    NgbProgressbarModule
  ],
  providers: [],
  bootstrap: [CounterTaskComponent]
})
export class CounterTaskModule { }
