import { NgModule } from '@angular/core';
import { SampleComponent } from './components/sample-component/sample.component';
import { UiKitLibComponent } from './ui-kit-lib.component';

@NgModule({
  declarations: [UiKitLibComponent, SampleComponent],
  imports: [],
  exports: [UiKitLibComponent, SampleComponent],
})
export class UiKitLibModule {}
