/**
 * The order of rules is heavily influenced by CSS usage metrics:
 * https://www.chromestatus.com/metrics/css/popularity
 */

export const PROPERTY_ACCEPTS_UNITLESS_VALUES = /^(-|f(ont.*[^e]|l.*[^s])$|li.*(t|mp)$|o[pr]|z|grid.*[^ps]$|an|bo.+im|ta|s(h.*d$|ca)|co.+[sc]|wido|ma(sk-b|x-l)|ini)/;

// TODO: Add tests to match everything below, without false positives
export const propertiesAcceptingUnitlessValues = [
  /* ^f[lo].*[^se]$ */
  'flex',
  'flex-grow',
  'flex-shrink',
  'font-size-adjust',
  'font-weight',

  /* ^li.*(t|mp)$ */
  'line-height',
  'line-clamp',

  /* ^o[pr] */
  'opacity',
  'order',
  'orphans',

  /* ^z */
  'z-index',
  'zoom',

  /* ^g.{6,}[^ps]$ */
  'grid-area',
  'grid-column',
  'grid-column-end',
  'grid-column-start',
  'grid-row',
  'grid-row-end',
  'grid-row-start',

  /* ^an */
  'animation',
  'animation-iteration-count',

  /* ^(bo|s).{5}im */
  'border-image',
  'border-image-outset',
  'border-image-slice',
  'border-image-width',
  'shape-image-threshold',

  /* ^ta */
  'tab-size',

  /* ^sca */
  'scale',

  /* ^c.*[st]$ */
  'columns',
  'column-count',

  /* ^wido */
  'widows',

  /* ^m.{4}[bi] */
  'mask-border',
  'mask-border-outset',
  'mask-border-slice',
  'mask-border-width',
  'max-lines',

  /* ^ini */
  'initial-letter',
];

// TODO: precedences.length - precedences.indexOf(...) == 4 - [-1..3]
// TODO: Add tests to match everything below, with no conflicting longhands
export const shorthandPropertiesByReversePrecedence = [
  [
    /* ^(mar|pa|bo).*[ptmd]$ */
    'margin-top',
    'margin-left',
    'margin-bottom',
    'margin-right',
    'margin-block-end',
    'margin-block-start',
    'margin-inline-end',
    'margin-inline-start',
    'padding-top',
    'padding-left',
    'padding-bottom',
    'padding-right',
    'padding-block-end',
    'padding-block-start',
    'padding-inline-end',
    'padding-inline-start',
    'border-top',
    'border-left',
    'border-bottom',
    'border-right',
    'border-block-end',
    'border-block-start',
    'border-inline-end',
    'border-inline-start',
  ],

  [
    /* ^[mpb].*(k|ne)$ */
    'mask',
    'margin-block',
    'margin-inline',
    'padding-block',
    'padding-inline',
    'border-block',
    'border-inline',
  ],

  [
    /* ^bo.{10}.?$ */
    'border-width',
    'border-color',
    'border-style',
    'border-image',
    'border-radius',

    /* ^gr.*[ae]$ */
    'grid-area',
    'grid-template',

    /* ^i.{10}.?$ */
    'inset-block',
    'inset-inline',
  ],

  [
    /* ^g..(d(.{4}(umn)?)?)?$ */
    'grid-column',
    'grid-gap', // Obsolete
    'grid-row',
    'grid',
    'gap',

    /* ^f.{3}(-fl..)?$ */
    'flex-flow',
    'flex',
    'font',

    /* ^p(l.{2,5})?.{6}$ */
    'place-self',
    'place-items',
    'place-content',
    'padding',

    /* ^m(.{5}|.*r)$ */
    'margin',
    'motion', // Obsolete
    'mask-border',

    /* ^b.*(er|d)$ */
    'border',
    'background',

    /* ^t.{9,14}$ */
    'transition',
    'text-emphasis',
    'text-decoration',

    /* ^a.{8}$ */
    'animation',

    /* ^l.{9}$ */
    'line-clamp',
    'list-style',

    /* ^o.{5,7}$ */
    'offset',
    'outline',
    'overflow',

    /* ^i.{4}$ */
    'inset',

    /* ^c.{6}(.{4})?$ */
    'column-rule',
    'columns',
  ],
];
