import { NgModule } from '@angular/core';
import { NgEasingComponent } from './ng-easing.component';
// reference : https://gist.github.com/gre/1650294
// reference : http://gizma.com/easing/#quint1
// reference : https://easings.net/ko
// reference : https://joshondesign.com/2013/03/01/improvedEasingEquations
// reference : https://gist.github.com/yukulele/2234731c0445dd5b1f4673889bf3330c
// reference : https://www.kirupa.com/html5/introduction_to_easing_in_javascript.htm
@NgModule({
  imports: [
  ],
  declarations: [NgEasingComponent],
  exports: [NgEasingComponent]
})
export class NgEasingModule { }
