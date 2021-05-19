import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'progress-counter',
    templateUrl: './progress-counter.component.html',
    styleUrls: ['./progress-counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressCounterComponent {
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