import {trigger, animate, transition, style, query, group} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [

  transition('* => *', [

    query(':enter',
      [
        /* Modified the css here so to push the new element on top while its transitioning */
        style({opacity: 0, position: 'absolute',width: '100%',
          height: '100%'})
      ],
      {optional: true}
    ),

    query(':leave',
      [
        style({opacity: 1,  position: 'absolute', width: '100%',
          height: '100%'}),
        animate('0.3s', style({opacity: 0, position: 'absolute',
          width: '100%', height: '100%'}))
      ],
      {optional: true}
    ),

    query(':enter',
      [
        style({opacity: 0, position: 'absolute', width: '100%',
          height: '100%'}),
        animate('0.3s', style({opacity: 1, position: 'absolute', width: '100%',
          height: '100%'}))
      ],
      {optional: true}
    )

  ])
]);
