import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      /* buttons */
      'md-filled-button': any;
      'md-filled-tonal-button': any;
      'md-outlined-button': any;
      'md-text-button': any;
      'md-elevated-button': any;
      'md-icon-button': any;
      /* chips */
      'md-chip-set': any;
      'md-filter-chip': any;
      'md-assist-chip': any;
      /* fields */
      /* selection */
      'md-switch': any;
      'md-checkbox': any;
      'md-radio': any;
      'md-slider': any;
      /* cards */
      'md-outlined-card': any;
      'md-elevated-card': any;
      'md-filled-card': any;
      /* surfaces */
      'md-icon': any;
      'md-ripple': any;
      'md-divider': any;
      'md-dialog': any;
      'md-menu': any;
      'md-menu-item': any;
      'md-circular-progress': any;
      'md-linear-progress': any;
    }
  }
}
