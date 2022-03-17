import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Angular 12.2.16</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
