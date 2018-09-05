# ng-easing
Ease Animation for angular [Tested for angular6]

## Installation
```
npm install ng-easing
```

## How to use

### imports

#### app.module.ts
```
import { NgEasingService } from 'ng-easing';
@NgModule({
  providers: [NgEasingService]
})
```
#### app.component.ts
```
import { NgEasingService } from 'ng-easing';

constructor(protected easeSvc: NgEasingService) {
}

this.easeSvc.anmaionStart({'duration': 10000, 'from': 0, 'to': 6800, 'ease': 'easeInQuart', 'delay': 0}, (v) => {
  console.log(v);//
  document.getElementById('a').style.transform = 'rotate('+ v +'deg)'
 },
  function(v) {
      console.log('anmateDone at :' + v);
  });
```

```
anmaionStart(params, onUpdate, onComplete);
params Object {duration, from, to, ease, delay}
duration : milisecond
ease: refer ease Sample below
delay : milisecond
onUpdate : CallBackFunciton;
onComplete:  CallBackFunciton;
```

#### ease Sample
##### linear: no easing, no acceleration
##### easeInQuad: accelerating from zero velocity
##### easeOutQuad: decelerating to zero velocity
##### easeInOutQuad: acceleration until halfway, then deceleration t) * t; },
##### easeInCubic: accelerating from zero velocity
##### easeOutCubic: decelerating to zero velocity
##### easeInOutCubic: acceleration until halfway, then deceleration
##### easeInQuart: accelerating from zero velocity
##### easeOutQuart: decelerating to zero velocity
##### easeInOutQuart: acceleration until halfway, then deceleration
##### easeInQuint: accelerating from zero velocity
##### easeOutQuint: decelerating to zero velocity
##### easeInOutQuint: acceleration until halfway, then deceleration
##### easeInElastic: elastic bounce effect at the beginning
##### easeOutElastic: elastic bounce effect at the end
##### easeInOutElastic: elastic bounce effect at the beginning and end
