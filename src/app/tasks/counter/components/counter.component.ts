import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
    maxValue = 10;
    minValue = 0;
    count: number = 0;

    increment() {
        this.count = Math.min(this.count + 1, this.maxValue);
    }

    decrement() {
        this.count = Math.max(this.count - 1, this.minValue);
    }
}