import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgEasingService {

    EasingFunctions = {
        // no easing, no acceleration
        linear: function (t) { return t; },
        // accelerating from zero velocity
        easeInQuad: function (t) { return t * t; },
        // decelerating to zero velocity
        easeOutQuad: function (t) { return t * (2 - t); },
        // acceleration until halfway, then deceleration
        easeInOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
        // accelerating from zero velocity
        easeInCubic: function (t) { return t * t * t; },
        // decelerating to zero velocity
        easeOutCubic: function (t) { return (--t) * t * t + 1; },
        // acceleration until halfway, then deceleration
        easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
        // accelerating from zero velocity
        easeInQuart: function (t) { return t * t * t * t; },
        // decelerating to zero velocity
        easeOutQuart: function (t) { return 1 - (--t) * t * t * t; },
        // acceleration until halfway, then deceleration
        easeInOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
        // accelerating from zero velocity
        easeInQuint: function (t) { return t * t * t * t * t; },
        // decelerating to zero velocity
        easeOutQuint: function (t) { return 1 + (--t) * t * t * t * t; },
        // acceleration until halfway, then deceleration
        easeInOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
        // elastic bounce effect at the beginning
        easeInElastic: function (t) { return (.04 - .04 / t) * Math.sin(25 * t) + 1; },
        // elastic bounce effect at the end
        easeOutElastic: function (t) { return .04 * t / (--t) * Math.sin(25 * t); },
        // elastic bounce effect at the beginning and end
        easeInOutElastic: function (t) { return (t -= .5) < 0 ? (.01 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1; }
    };

    constructor() {}

    /**
    * @params Object {duration, from, to, ease, delay}
    * duration microsecond
    * from
    * to
    * ease
    * delay microsecond
    * @Param CallBackFunciton onUpdate  fired on progressing
    * @Param CallBackFunciton onComplete fired on Finished;
    */
    startAnimation(params, onUpdate, onComplete) {
        // Linear interpolation

        const duration = params.duration;
        const from = params.from;
        const to = params.to;
        const ease = params.ease;
        const delay = params.delay;

        const lerp = (source, target, amount) => source + amount * (target - source);
        // Animation start time
        const start = Date.now() - delay;

        console.log(start);

        const animationFrame = () => {
            const now = Date.now();
            const t = duration > 0 ? (now - start) / duration : 1; // t는 0~1까지의 숫자
            const progress = ease(t, from, to, duration); // t만 넘어가도 상관없음
              // Update value
            const progressValue = lerp(from, to, progress);
            if ( t  <  1) {
                onUpdate(progressValue);
                requestAnimationFrame(animationFrame);
            } else {
                onComplete(progressValue);
            }
        };
        animationFrame();
    }

    /*
    *@params Object {duration, from, to, ease, delay}
    * duration : milisecond
    * delay : milisecond
    */
    anmaionStart(params, onUpdate, onComplete?) {
        params.ease = this.EasingFunctions[params.ease];
        params.delay = typeof params.delay === 'undefined' ? 0 : params.delay;
        this.startAnimation(
                params,
              (value) => {
                  onUpdate(value);
              },
              (value) => {
                  onComplete(value);
              });
    }
}
