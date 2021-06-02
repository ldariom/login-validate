
import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { bounceIn, shake } from 'ng-animate';

export const errorLoginAnimation =
trigger('errorValidate', [
    state('true, false', style({})),
    transition('false => true', useAnimation(shake))
]);