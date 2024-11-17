/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Type = KeywordDefinedType | List | Enum | Number | Directive;
export type KeywordDefinedType = CssSyntax | ExtendedType | HtmlAttrRequirement;
export type CssSyntax =
	| "<'--*'>"
	| "<'-moz-appearance'>"
	| "<'-moz-background-clip'>"
	| "<'-moz-binding'>"
	| "<'-moz-border-bottom-colors'>"
	| "<'-moz-border-left-colors'>"
	| "<'-moz-border-radius-bottomleft'>"
	| "<'-moz-border-radius-bottomright'>"
	| "<'-moz-border-radius-topleft'>"
	| "<'-moz-border-radius-topright'>"
	| "<'-moz-border-right-colors'>"
	| "<'-moz-border-top-colors'>"
	| "<'-moz-context-properties'>"
	| "<'-moz-control-character-visibility'>"
	| "<'-moz-float-edge'>"
	| "<'-moz-force-broken-image-icon'>"
	| "<'-moz-image-region'>"
	| "<'-moz-orient'>"
	| "<'-moz-osx-font-smoothing'>"
	| "<'-moz-outline-radius'>"
	| "<'-moz-outline-radius-bottomleft'>"
	| "<'-moz-outline-radius-bottomright'>"
	| "<'-moz-outline-radius-topleft'>"
	| "<'-moz-outline-radius-topright'>"
	| "<'-moz-stack-sizing'>"
	| "<'-moz-text-blink'>"
	| "<'-moz-user-focus'>"
	| "<'-moz-user-input'>"
	| "<'-moz-user-modify'>"
	| "<'-moz-user-select'>"
	| "<'-moz-window-dragging'>"
	| "<'-moz-window-shadow'>"
	| "<'-ms-accelerator'>"
	| "<'-ms-block-progression'>"
	| "<'-ms-content-zoom-chaining'>"
	| "<'-ms-content-zoom-limit'>"
	| "<'-ms-content-zoom-limit-max'>"
	| "<'-ms-content-zoom-limit-min'>"
	| "<'-ms-content-zoom-snap'>"
	| "<'-ms-content-zoom-snap-points'>"
	| "<'-ms-content-zoom-snap-type'>"
	| "<'-ms-content-zooming'>"
	| "<'-ms-filter'>"
	| "<'-ms-flex-align'>"
	| "<'-ms-flex-item-align'>"
	| "<'-ms-flex-line-pack'>"
	| "<'-ms-flex-negative'>"
	| "<'-ms-flex-order'>"
	| "<'-ms-flex-pack'>"
	| "<'-ms-flex-positive'>"
	| "<'-ms-flex-preferred-size'>"
	| "<'-ms-flow-from'>"
	| "<'-ms-flow-into'>"
	| "<'-ms-grid-column-align'>"
	| "<'-ms-grid-columns'>"
	| "<'-ms-grid-row-align'>"
	| "<'-ms-grid-rows'>"
	| "<'-ms-high-contrast-adjust'>"
	| "<'-ms-hyphenate-limit-chars'>"
	| "<'-ms-hyphenate-limit-last'>"
	| "<'-ms-hyphenate-limit-lines'>"
	| "<'-ms-hyphenate-limit-zone'>"
	| "<'-ms-ime-align'>"
	| "<'-ms-interpolation-mode'>"
	| "<'-ms-overflow-style'>"
	| "<'-ms-scroll-chaining'>"
	| "<'-ms-scroll-limit'>"
	| "<'-ms-scroll-limit-x-max'>"
	| "<'-ms-scroll-limit-x-min'>"
	| "<'-ms-scroll-limit-y-max'>"
	| "<'-ms-scroll-limit-y-min'>"
	| "<'-ms-scroll-rails'>"
	| "<'-ms-scroll-snap-points-x'>"
	| "<'-ms-scroll-snap-points-y'>"
	| "<'-ms-scroll-snap-type'>"
	| "<'-ms-scroll-snap-x'>"
	| "<'-ms-scroll-snap-y'>"
	| "<'-ms-scroll-translation'>"
	| "<'-ms-scrollbar-3dlight-color'>"
	| "<'-ms-scrollbar-arrow-color'>"
	| "<'-ms-scrollbar-base-color'>"
	| "<'-ms-scrollbar-darkshadow-color'>"
	| "<'-ms-scrollbar-face-color'>"
	| "<'-ms-scrollbar-highlight-color'>"
	| "<'-ms-scrollbar-shadow-color'>"
	| "<'-ms-scrollbar-track-color'>"
	| "<'-ms-text-autospace'>"
	| "<'-ms-touch-select'>"
	| "<'-ms-user-select'>"
	| "<'-ms-wrap-flow'>"
	| "<'-ms-wrap-margin'>"
	| "<'-ms-wrap-through'>"
	| "<'-webkit-appearance'>"
	| "<'-webkit-background-clip'>"
	| "<'-webkit-border-before'>"
	| "<'-webkit-border-before-color'>"
	| "<'-webkit-border-before-style'>"
	| "<'-webkit-border-before-width'>"
	| "<'-webkit-box-reflect'>"
	| "<'-webkit-column-break-after'>"
	| "<'-webkit-column-break-before'>"
	| "<'-webkit-column-break-inside'>"
	| "<'-webkit-font-smoothing'>"
	| "<'-webkit-line-clamp'>"
	| "<'-webkit-mask'>"
	| "<'-webkit-mask-attachment'>"
	| "<'-webkit-mask-box-image'>"
	| "<'-webkit-mask-clip'>"
	| "<'-webkit-mask-composite'>"
	| "<'-webkit-mask-image'>"
	| "<'-webkit-mask-origin'>"
	| "<'-webkit-mask-position'>"
	| "<'-webkit-mask-position-x'>"
	| "<'-webkit-mask-position-y'>"
	| "<'-webkit-mask-repeat'>"
	| "<'-webkit-mask-repeat-x'>"
	| "<'-webkit-mask-repeat-y'>"
	| "<'-webkit-mask-size'>"
	| "<'-webkit-overflow-scrolling'>"
	| "<'-webkit-print-color-adjust'>"
	| "<'-webkit-tap-highlight-color'>"
	| "<'-webkit-text-fill-color'>"
	| "<'-webkit-text-security'>"
	| "<'-webkit-text-stroke'>"
	| "<'-webkit-text-stroke-color'>"
	| "<'-webkit-text-stroke-width'>"
	| "<'-webkit-touch-callout'>"
	| "<'-webkit-user-drag'>"
	| "<'-webkit-user-modify'>"
	| "<'-webkit-user-select'>"
	| "<'accent-color'>"
	| "<'align-content'>"
	| "<'align-items'>"
	| "<'align-self'>"
	| "<'align-tracks'>"
	| "<'alignment-baseline'>"
	| "<'all'>"
	| "<'anchor-name'>"
	| "<'anchor-scope'>"
	| "<'animation'>"
	| "<'animation-composition'>"
	| "<'animation-delay'>"
	| "<'animation-direction'>"
	| "<'animation-duration'>"
	| "<'animation-fill-mode'>"
	| "<'animation-iteration-count'>"
	| "<'animation-name'>"
	| "<'animation-play-state'>"
	| "<'animation-range'>"
	| "<'animation-range-end'>"
	| "<'animation-range-start'>"
	| "<'animation-timeline'>"
	| "<'animation-timing-function'>"
	| "<'appearance'>"
	| "<'aspect-ratio'>"
	| "<'azimuth'>"
	| "<'backdrop-filter'>"
	| "<'backface-visibility'>"
	| "<'background'>"
	| "<'background-attachment'>"
	| "<'background-blend-mode'>"
	| "<'background-clip'>"
	| "<'background-color'>"
	| "<'background-image'>"
	| "<'background-origin'>"
	| "<'background-position'>"
	| "<'background-position-x'>"
	| "<'background-position-y'>"
	| "<'background-repeat'>"
	| "<'background-size'>"
	| "<'baseline-shift'>"
	| "<'behavior'>"
	| "<'block-size'>"
	| "<'border'>"
	| "<'border-block'>"
	| "<'border-block-color'>"
	| "<'border-block-end'>"
	| "<'border-block-end-color'>"
	| "<'border-block-end-style'>"
	| "<'border-block-end-width'>"
	| "<'border-block-start'>"
	| "<'border-block-start-color'>"
	| "<'border-block-start-style'>"
	| "<'border-block-start-width'>"
	| "<'border-block-style'>"
	| "<'border-block-width'>"
	| "<'border-bottom'>"
	| "<'border-bottom-color'>"
	| "<'border-bottom-left-radius'>"
	| "<'border-bottom-right-radius'>"
	| "<'border-bottom-style'>"
	| "<'border-bottom-width'>"
	| "<'border-collapse'>"
	| "<'border-color'>"
	| "<'border-end-end-radius'>"
	| "<'border-end-start-radius'>"
	| "<'border-image'>"
	| "<'border-image-outset'>"
	| "<'border-image-repeat'>"
	| "<'border-image-slice'>"
	| "<'border-image-source'>"
	| "<'border-image-width'>"
	| "<'border-inline'>"
	| "<'border-inline-color'>"
	| "<'border-inline-end'>"
	| "<'border-inline-end-color'>"
	| "<'border-inline-end-style'>"
	| "<'border-inline-end-width'>"
	| "<'border-inline-start'>"
	| "<'border-inline-start-color'>"
	| "<'border-inline-start-style'>"
	| "<'border-inline-start-width'>"
	| "<'border-inline-style'>"
	| "<'border-inline-width'>"
	| "<'border-left'>"
	| "<'border-left-color'>"
	| "<'border-left-style'>"
	| "<'border-left-width'>"
	| "<'border-radius'>"
	| "<'border-right'>"
	| "<'border-right-color'>"
	| "<'border-right-style'>"
	| "<'border-right-width'>"
	| "<'border-spacing'>"
	| "<'border-start-end-radius'>"
	| "<'border-start-start-radius'>"
	| "<'border-style'>"
	| "<'border-top'>"
	| "<'border-top-color'>"
	| "<'border-top-left-radius'>"
	| "<'border-top-right-radius'>"
	| "<'border-top-style'>"
	| "<'border-top-width'>"
	| "<'border-width'>"
	| "<'bottom'>"
	| "<'box-align'>"
	| "<'box-decoration-break'>"
	| "<'box-direction'>"
	| "<'box-flex'>"
	| "<'box-flex-group'>"
	| "<'box-lines'>"
	| "<'box-ordinal-group'>"
	| "<'box-orient'>"
	| "<'box-pack'>"
	| "<'box-shadow'>"
	| "<'box-sizing'>"
	| "<'break-after'>"
	| "<'break-before'>"
	| "<'break-inside'>"
	| "<'caption-side'>"
	| "<'caret'>"
	| "<'caret-color'>"
	| "<'caret-shape'>"
	| "<'clear'>"
	| "<'clip'>"
	| "<'clip-path'>"
	| "<'clip-rule'>"
	| "<'color'>"
	| "<'color-interpolation-filters'>"
	| "<'color-scheme'>"
	| "<'column-count'>"
	| "<'column-fill'>"
	| "<'column-gap'>"
	| "<'column-rule'>"
	| "<'column-rule-color'>"
	| "<'column-rule-style'>"
	| "<'column-rule-width'>"
	| "<'column-span'>"
	| "<'column-width'>"
	| "<'columns'>"
	| "<'contain'>"
	| "<'contain-intrinsic-block-size'>"
	| "<'contain-intrinsic-height'>"
	| "<'contain-intrinsic-inline-size'>"
	| "<'contain-intrinsic-size'>"
	| "<'contain-intrinsic-width'>"
	| "<'container'>"
	| "<'container-name'>"
	| "<'container-type'>"
	| "<'content'>"
	| "<'content-visibility'>"
	| "<'counter-increment'>"
	| "<'counter-reset'>"
	| "<'counter-set'>"
	| "<'cue'>"
	| "<'cue-after'>"
	| "<'cue-before'>"
	| "<'cursor'>"
	| "<'cx'>"
	| "<'cy'>"
	| "<'d'>"
	| "<'direction'>"
	| "<'display'>"
	| "<'dominant-baseline'>"
	| "<'empty-cells'>"
	| "<'field-sizing'>"
	| "<'fill'>"
	| "<'fill-opacity'>"
	| "<'fill-rule'>"
	| "<'filter'>"
	| "<'flex'>"
	| "<'flex-basis'>"
	| "<'flex-direction'>"
	| "<'flex-flow'>"
	| "<'flex-grow'>"
	| "<'flex-shrink'>"
	| "<'flex-wrap'>"
	| "<'float'>"
	| "<'font'>"
	| "<'font-family'>"
	| "<'font-feature-settings'>"
	| "<'font-kerning'>"
	| "<'font-language-override'>"
	| "<'font-optical-sizing'>"
	| "<'font-palette'>"
	| "<'font-size'>"
	| "<'font-size-adjust'>"
	| "<'font-smooth'>"
	| "<'font-stretch'>"
	| "<'font-style'>"
	| "<'font-synthesis'>"
	| "<'font-synthesis-position'>"
	| "<'font-synthesis-small-caps'>"
	| "<'font-synthesis-style'>"
	| "<'font-synthesis-weight'>"
	| "<'font-variant'>"
	| "<'font-variant-alternates'>"
	| "<'font-variant-caps'>"
	| "<'font-variant-east-asian'>"
	| "<'font-variant-emoji'>"
	| "<'font-variant-ligatures'>"
	| "<'font-variant-numeric'>"
	| "<'font-variant-position'>"
	| "<'font-variation-settings'>"
	| "<'font-weight'>"
	| "<'forced-color-adjust'>"
	| "<'gap'>"
	| "<'glyph-orientation-horizontal'>"
	| "<'glyph-orientation-vertical'>"
	| "<'grid'>"
	| "<'grid-area'>"
	| "<'grid-auto-columns'>"
	| "<'grid-auto-flow'>"
	| "<'grid-auto-rows'>"
	| "<'grid-column'>"
	| "<'grid-column-end'>"
	| "<'grid-column-gap'>"
	| "<'grid-column-start'>"
	| "<'grid-gap'>"
	| "<'grid-row'>"
	| "<'grid-row-end'>"
	| "<'grid-row-gap'>"
	| "<'grid-row-start'>"
	| "<'grid-template'>"
	| "<'grid-template-areas'>"
	| "<'grid-template-columns'>"
	| "<'grid-template-rows'>"
	| "<'hanging-punctuation'>"
	| "<'height'>"
	| "<'hyphenate-character'>"
	| "<'hyphenate-limit-chars'>"
	| "<'hyphens'>"
	| "<'image-orientation'>"
	| "<'image-rendering'>"
	| "<'image-resolution'>"
	| "<'ime-mode'>"
	| "<'initial-letter'>"
	| "<'initial-letter-align'>"
	| "<'inline-size'>"
	| "<'input-security'>"
	| "<'inset'>"
	| "<'inset-block'>"
	| "<'inset-block-end'>"
	| "<'inset-block-start'>"
	| "<'inset-inline'>"
	| "<'inset-inline-end'>"
	| "<'inset-inline-start'>"
	| "<'interpolate-size'>"
	| "<'isolation'>"
	| "<'justify-content'>"
	| "<'justify-items'>"
	| "<'justify-self'>"
	| "<'justify-tracks'>"
	| "<'kerning'>"
	| "<'left'>"
	| "<'letter-spacing'>"
	| "<'line-break'>"
	| "<'line-clamp'>"
	| "<'line-height'>"
	| "<'line-height-step'>"
	| "<'list-style'>"
	| "<'list-style-image'>"
	| "<'list-style-position'>"
	| "<'list-style-type'>"
	| "<'margin'>"
	| "<'margin-block'>"
	| "<'margin-block-end'>"
	| "<'margin-block-start'>"
	| "<'margin-bottom'>"
	| "<'margin-inline'>"
	| "<'margin-inline-end'>"
	| "<'margin-inline-start'>"
	| "<'margin-left'>"
	| "<'margin-right'>"
	| "<'margin-top'>"
	| "<'margin-trim'>"
	| "<'marker'>"
	| "<'marker-end'>"
	| "<'marker-mid'>"
	| "<'marker-start'>"
	| "<'mask'>"
	| "<'mask-border'>"
	| "<'mask-border-mode'>"
	| "<'mask-border-outset'>"
	| "<'mask-border-repeat'>"
	| "<'mask-border-slice'>"
	| "<'mask-border-source'>"
	| "<'mask-border-width'>"
	| "<'mask-clip'>"
	| "<'mask-composite'>"
	| "<'mask-image'>"
	| "<'mask-mode'>"
	| "<'mask-origin'>"
	| "<'mask-position'>"
	| "<'mask-repeat'>"
	| "<'mask-size'>"
	| "<'mask-type'>"
	| "<'masonry-auto-flow'>"
	| "<'math-depth'>"
	| "<'math-shift'>"
	| "<'math-style'>"
	| "<'max-block-size'>"
	| "<'max-height'>"
	| "<'max-inline-size'>"
	| "<'max-lines'>"
	| "<'max-width'>"
	| "<'min-block-size'>"
	| "<'min-height'>"
	| "<'min-inline-size'>"
	| "<'min-width'>"
	| "<'mix-blend-mode'>"
	| "<'object-fit'>"
	| "<'object-position'>"
	| "<'offset'>"
	| "<'offset-anchor'>"
	| "<'offset-distance'>"
	| "<'offset-path'>"
	| "<'offset-position'>"
	| "<'offset-rotate'>"
	| "<'opacity'>"
	| "<'order'>"
	| "<'orphans'>"
	| "<'outline'>"
	| "<'outline-color'>"
	| "<'outline-offset'>"
	| "<'outline-style'>"
	| "<'outline-width'>"
	| "<'overflow'>"
	| "<'overflow-anchor'>"
	| "<'overflow-block'>"
	| "<'overflow-clip-box'>"
	| "<'overflow-clip-margin'>"
	| "<'overflow-inline'>"
	| "<'overflow-wrap'>"
	| "<'overflow-x'>"
	| "<'overflow-y'>"
	| "<'overlay'>"
	| "<'overscroll-behavior'>"
	| "<'overscroll-behavior-block'>"
	| "<'overscroll-behavior-inline'>"
	| "<'overscroll-behavior-x'>"
	| "<'overscroll-behavior-y'>"
	| "<'padding'>"
	| "<'padding-block'>"
	| "<'padding-block-end'>"
	| "<'padding-block-start'>"
	| "<'padding-bottom'>"
	| "<'padding-inline'>"
	| "<'padding-inline-end'>"
	| "<'padding-inline-start'>"
	| "<'padding-left'>"
	| "<'padding-right'>"
	| "<'padding-top'>"
	| "<'page'>"
	| "<'page-break-after'>"
	| "<'page-break-before'>"
	| "<'page-break-inside'>"
	| "<'paint-order'>"
	| "<'pause'>"
	| "<'pause-after'>"
	| "<'pause-before'>"
	| "<'perspective'>"
	| "<'perspective-origin'>"
	| "<'place-content'>"
	| "<'place-items'>"
	| "<'place-self'>"
	| "<'pointer-events'>"
	| "<'position'>"
	| "<'position-anchor'>"
	| "<'position-area'>"
	| "<'position-try'>"
	| "<'position-try-fallbacks'>"
	| "<'position-try-order'>"
	| "<'position-visibility'>"
	| "<'print-color-adjust'>"
	| "<'quotes'>"
	| "<'r'>"
	| "<'resize'>"
	| "<'rest'>"
	| "<'rest-after'>"
	| "<'rest-before'>"
	| "<'right'>"
	| "<'rotate'>"
	| "<'row-gap'>"
	| "<'ruby-align'>"
	| "<'ruby-merge'>"
	| "<'ruby-position'>"
	| "<'rx'>"
	| "<'ry'>"
	| "<'scale'>"
	| "<'scroll-behavior'>"
	| "<'scroll-margin'>"
	| "<'scroll-margin-block'>"
	| "<'scroll-margin-block-end'>"
	| "<'scroll-margin-block-start'>"
	| "<'scroll-margin-bottom'>"
	| "<'scroll-margin-inline'>"
	| "<'scroll-margin-inline-end'>"
	| "<'scroll-margin-inline-start'>"
	| "<'scroll-margin-left'>"
	| "<'scroll-margin-right'>"
	| "<'scroll-margin-top'>"
	| "<'scroll-padding'>"
	| "<'scroll-padding-block'>"
	| "<'scroll-padding-block-end'>"
	| "<'scroll-padding-block-start'>"
	| "<'scroll-padding-bottom'>"
	| "<'scroll-padding-inline'>"
	| "<'scroll-padding-inline-end'>"
	| "<'scroll-padding-inline-start'>"
	| "<'scroll-padding-left'>"
	| "<'scroll-padding-right'>"
	| "<'scroll-padding-top'>"
	| "<'scroll-snap-align'>"
	| "<'scroll-snap-coordinate'>"
	| "<'scroll-snap-destination'>"
	| "<'scroll-snap-points-x'>"
	| "<'scroll-snap-points-y'>"
	| "<'scroll-snap-stop'>"
	| "<'scroll-snap-type'>"
	| "<'scroll-snap-type-x'>"
	| "<'scroll-snap-type-y'>"
	| "<'scroll-timeline'>"
	| "<'scroll-timeline-axis'>"
	| "<'scroll-timeline-name'>"
	| "<'scrollbar-color'>"
	| "<'scrollbar-gutter'>"
	| "<'scrollbar-width'>"
	| "<'shape-image-threshold'>"
	| "<'shape-margin'>"
	| "<'shape-outside'>"
	| "<'shape-rendering'>"
	| "<'speak'>"
	| "<'speak-as'>"
	| "<'src'>"
	| "<'stroke'>"
	| "<'stroke-dasharray'>"
	| "<'stroke-dashoffset'>"
	| "<'stroke-linecap'>"
	| "<'stroke-linejoin'>"
	| "<'stroke-miterlimit'>"
	| "<'stroke-opacity'>"
	| "<'stroke-width'>"
	| "<'tab-size'>"
	| "<'table-layout'>"
	| "<'text-align'>"
	| "<'text-align-last'>"
	| "<'text-anchor'>"
	| "<'text-combine-upright'>"
	| "<'text-decoration'>"
	| "<'text-decoration-color'>"
	| "<'text-decoration-line'>"
	| "<'text-decoration-skip'>"
	| "<'text-decoration-skip-ink'>"
	| "<'text-decoration-style'>"
	| "<'text-decoration-thickness'>"
	| "<'text-emphasis'>"
	| "<'text-emphasis-color'>"
	| "<'text-emphasis-position'>"
	| "<'text-emphasis-style'>"
	| "<'text-indent'>"
	| "<'text-justify'>"
	| "<'text-orientation'>"
	| "<'text-overflow'>"
	| "<'text-rendering'>"
	| "<'text-shadow'>"
	| "<'text-size-adjust'>"
	| "<'text-spacing-trim'>"
	| "<'text-transform'>"
	| "<'text-underline-offset'>"
	| "<'text-underline-position'>"
	| "<'text-wrap'>"
	| "<'text-wrap-mode'>"
	| "<'text-wrap-style'>"
	| "<'timeline-scope'>"
	| "<'top'>"
	| "<'touch-action'>"
	| "<'transform'>"
	| "<'transform-box'>"
	| "<'transform-origin'>"
	| "<'transform-style'>"
	| "<'transition'>"
	| "<'transition-behavior'>"
	| "<'transition-delay'>"
	| "<'transition-duration'>"
	| "<'transition-property'>"
	| "<'transition-timing-function'>"
	| "<'translate'>"
	| "<'unicode-bidi'>"
	| "<'unicode-range'>"
	| "<'user-select'>"
	| "<'vector-effect'>"
	| "<'vertical-align'>"
	| "<'view-timeline'>"
	| "<'view-timeline-axis'>"
	| "<'view-timeline-inset'>"
	| "<'view-timeline-name'>"
	| "<'view-transition-name'>"
	| "<'visibility'>"
	| "<'voice-balance'>"
	| "<'voice-duration'>"
	| "<'voice-family'>"
	| "<'voice-pitch'>"
	| "<'voice-range'>"
	| "<'voice-rate'>"
	| "<'voice-stress'>"
	| "<'voice-volume'>"
	| "<'white-space'>"
	| "<'white-space-collapse'>"
	| "<'white-space-trim'>"
	| "<'widows'>"
	| "<'width'>"
	| "<'will-change'>"
	| "<'word-break'>"
	| "<'word-spacing'>"
	| "<'word-wrap'>"
	| "<'writing-mode'>"
	| "<'x'>"
	| "<'y'>"
	| "<'z-index'>"
	| "<'zoom'>"
	| '<(-token>'
	| '<)-token>'
	| '<-legacy-gradient>'
	| '<-legacy-linear-gradient-arguments>'
	| '<-legacy-linear-gradient>'
	| '<-legacy-radial-gradient-arguments>'
	| '<-legacy-radial-gradient-shape>'
	| '<-legacy-radial-gradient-size>'
	| '<-legacy-radial-gradient>'
	| '<-legacy-repeating-linear-gradient>'
	| '<-legacy-repeating-radial-gradient>'
	| '<-ms-filter-function-legacy>'
	| '<-ms-filter-function-list>'
	| '<-ms-filter-function-progid>'
	| '<-ms-filter-function>'
	| '<-non-standard-color>'
	| '<-non-standard-display>'
	| '<-non-standard-font>'
	| '<-non-standard-generic-family>'
	| '<-non-standard-image-rendering>'
	| '<-non-standard-overflow>'
	| '<-non-standard-size>'
	| '<-webkit-gradient()>'
	| '<-webkit-gradient-color-stop>'
	| '<-webkit-gradient-point>'
	| '<-webkit-gradient-radius>'
	| '<-webkit-gradient-type>'
	| '<-webkit-mask-box-repeat>'
	| '<CDC-token>'
	| '<CDO-token>'
	| '<[-token>'
	| '<]-token>'
	| '<abs()>'
	| '<absolute-color-base>'
	| '<absolute-color-function>'
	| '<absolute-size>'
	| '<acos()>'
	| '<age>'
	| '<alpha-value>'
	| '<an-plus-b>'
	| '<anchor()>'
	| '<anchor-element>'
	| '<anchor-name>'
	| '<anchor-side>'
	| '<anchor-size()>'
	| '<anchor-size>'
	| '<angle-percentage>'
	| '<angle>'
	| '<angular-color-hint>'
	| '<angular-color-stop-list>'
	| '<angular-color-stop>'
	| '<animateable-feature>'
	| '<any-value>'
	| '<asin()>'
	| '<at-keyword-token>'
	| '<atan()>'
	| '<atan2()>'
	| '<attachment>'
	| '<attr()>'
	| '<attr-fallback>'
	| '<attr-matcher>'
	| '<attr-modifier>'
	| '<attr-name>'
	| '<attribute-selector>'
	| '<auto-repeat>'
	| '<auto-track-list>'
	| '<axis>'
	| '<bad-string-token>'
	| '<bad-url-token>'
	| '<baseline-position>'
	| '<basic-shape>'
	| '<bcp-47>'
	| '<bg-clip>'
	| '<bg-image>'
	| '<bg-layer>'
	| '<bg-position>'
	| '<bg-size>'
	| '<blend-mode>'
	| '<blur()>'
	| '<bottom>'
	| '<box>'
	| '<brightness()>'
	| '<calc()>'
	| '<calc-constant>'
	| '<calc-product>'
	| '<calc-sum>'
	| '<calc-value>'
	| '<cf-final-image>'
	| '<cf-mixing-image>'
	| '<circle()>'
	| '<clamp()>'
	| '<class-selector>'
	| '<clip-source>'
	| '<cmyk-component>'
	| '<colon-token>'
	| '<color()>'
	| '<color-base>'
	| '<color-function>'
	| '<color-interpolation-method>'
	| '<color-mix()>'
	| '<color-space>'
	| '<color-stop-angle>'
	| '<color-stop-length>'
	| '<color-stop-list>'
	| '<color-stop>'
	| '<color>'
	| '<colorspace-params>'
	| '<combinator>'
	| '<comma-token>'
	| '<common-lig-values>'
	| '<compat-auto>'
	| '<complex-real-selector-list>'
	| '<complex-real-selector>'
	| '<complex-selector-list>'
	| '<complex-selector-unit>'
	| '<complex-selector>'
	| '<composite-style>'
	| '<compositing-operator>'
	| '<compound-selector-list>'
	| '<compound-selector>'
	| '<conic-gradient()>'
	| '<container-condition>'
	| '<container-name>'
	| '<content-distribution>'
	| '<content-list>'
	| '<content-position>'
	| '<content-replacement>'
	| '<contextual-alt-values>'
	| '<contrast()>'
	| '<coord-box>'
	| '<cos()>'
	| '<counter()>'
	| '<counter-name>'
	| '<counter-style-name>'
	| '<counter-style>'
	| '<counter>'
	| '<counters()>'
	| '<cross-fade()>'
	| '<cubic-bezier-timing-function>'
	| '<custom-color-space>'
	| '<custom-ident>'
	| '<custom-property-name>'
	| '<dashed-ident>'
	| '<decibel>'
	| '<declaration-list>'
	| '<declaration-value>'
	| '<declaration>'
	| '<delim-token>'
	| '<deprecated-system-color>'
	| '<device-cmyk()>'
	| '<dimension-token>'
	| '<dimension>'
	| '<discretionary-lig-values>'
	| '<display-box>'
	| '<display-inside>'
	| '<display-internal>'
	| '<display-legacy>'
	| '<display-listitem>'
	| '<display-outside>'
	| '<drop-shadow()>'
	| '<easing-function>'
	| '<east-asian-variant-values>'
	| '<east-asian-width-values>'
	| '<element()>'
	| '<ellipse()>'
	| '<ending-shape>'
	| '<env()>'
	| '<exp()>'
	| '<explicit-track-list>'
	| '<family-name>'
	| '<feature-tag-value>'
	| '<feature-type>'
	| '<feature-value-block-list>'
	| '<feature-value-block>'
	| '<feature-value-declaration-list>'
	| '<feature-value-declaration>'
	| '<feature-value-name>'
	| '<fill-rule>'
	| '<filter-function-list>'
	| '<filter-function>'
	| '<final-bg-layer>'
	| '<fixed-breadth>'
	| '<fixed-repeat>'
	| '<fixed-size>'
	| '<flex>'
	| '<font-stretch-absolute>'
	| '<font-variant-css21>'
	| '<font-variant-css2>'
	| '<font-weight-absolute>'
	| '<font-width-css3>'
	| '<forgiving-relative-selector-list>'
	| '<forgiving-selector-list>'
	| '<frequency-percentage>'
	| '<frequency>'
	| '<function-token>'
	| '<gender>'
	| '<general-enclosed>'
	| '<generic-complete>'
	| '<generic-family>'
	| '<generic-incomplete>'
	| '<generic-name>'
	| '<generic-script-specific>'
	| '<generic-voice>'
	| '<geometry-box>'
	| '<gradient>'
	| '<grayscale()>'
	| '<grid-line>'
	| '<hash-token>'
	| '<hex-color>'
	| '<historical-lig-values>'
	| '<hsl()>'
	| '<hsla()>'
	| '<hue-interpolation-method>'
	| '<hue-rotate()>'
	| '<hue>'
	| '<hwb()>'
	| '<hypot()>'
	| '<id-selector>'
	| '<ident-token>'
	| '<ident>'
	| '<image()>'
	| '<image-set()>'
	| '<image-set-option>'
	| '<image-src>'
	| '<image-tags>'
	| '<image>'
	| '<inflexible-breadth>'
	| '<inset()>'
	| '<inset-area>'
	| '<integer>'
	| '<invert()>'
	| '<keyframe-block-list>'
	| '<keyframe-block>'
	| '<keyframe-selector>'
	| '<keyframes-name>'
	| '<lab()>'
	| '<layer()>'
	| '<layer-name>'
	| '<lch()>'
	| '<leader()>'
	| '<leader-type>'
	| '<left>'
	| '<legacy-device-cmyk-syntax>'
	| '<legacy-pseudo-element-selector>'
	| '<length-percentage>'
	| '<length>'
	| '<light-dark()>'
	| '<line-name-list>'
	| '<line-names>'
	| '<line-style>'
	| '<line-width>'
	| '<linear-color-hint>'
	| '<linear-color-stop>'
	| '<linear-gradient()>'
	| '<log()>'
	| '<mask-layer>'
	| '<mask-position>'
	| '<mask-reference>'
	| '<mask-source>'
	| '<masking-mode>'
	| '<matrix()>'
	| '<matrix3d()>'
	| '<max()>'
	| '<media-and>'
	| '<media-condition-without-or>'
	| '<media-condition>'
	| '<media-feature>'
	| '<media-in-parens>'
	| '<media-not>'
	| '<media-or>'
	| '<media-query-list>'
	| '<media-query>'
	| '<media-type>'
	| '<mf-boolean>'
	| '<mf-name>'
	| '<mf-plain>'
	| '<mf-range>'
	| '<mf-value>'
	| '<min()>'
	| '<minmax()>'
	| '<mod()>'
	| '<modern-device-cmyk-syntax>'
	| '<name-repeat>'
	| '<named-color>'
	| '<namespace-prefix>'
	| '<ns-prefix>'
	| '<nth>'
	| '<number-one-or-greater>'
	| '<number-percentage>'
	| '<number-token>'
	| '<number-zero-one>'
	| '<number>'
	| '<numeric-figure-values>'
	| '<numeric-fraction-values>'
	| '<numeric-spacing-values>'
	| '<offset-path>'
	| '<oklab()>'
	| '<oklch()>'
	| '<opacity()>'
	| '<outline-radius>'
	| '<overflow-position>'
	| '<page-body>'
	| '<page-margin-box-type>'
	| '<page-margin-box>'
	| '<page-selector-list>'
	| '<page-selector>'
	| '<page-size>'
	| '<paint()>'
	| '<paint>'
	| '<palette-identifier>'
	| '<path()>'
	| '<percentage-token>'
	| '<percentage>'
	| '<perspective()>'
	| '<polar-color-space>'
	| '<polygon()>'
	| '<position-area>'
	| '<position>'
	| '<pow()>'
	| '<predefined-rgb-params>'
	| '<predefined-rgb>'
	| '<pseudo-class-selector>'
	| '<pseudo-compound-selector>'
	| '<pseudo-element-selector>'
	| '<pseudo-page>'
	| '<query-in-parens>'
	| '<quote>'
	| '<radial-gradient()>'
	| '<ratio>'
	| '<ray()>'
	| '<ray-size>'
	| '<rect()>'
	| '<rectangular-color-space>'
	| '<relative-real-selector-list>'
	| '<relative-real-selector>'
	| '<relative-selector-list>'
	| '<relative-selector>'
	| '<relative-size>'
	| '<rem()>'
	| '<repeat-style>'
	| '<repeating-conic-gradient()>'
	| '<repeating-linear-gradient()>'
	| '<repeating-radial-gradient()>'
	| '<resolution>'
	| '<reversed-counter-name>'
	| '<rgb()>'
	| '<rgba()>'
	| '<right>'
	| '<rotate()>'
	| '<rotate3d()>'
	| '<rotateX()>'
	| '<rotateY()>'
	| '<rotateZ()>'
	| '<round()>'
	| '<rounding-strategy>'
	| '<saturate()>'
	| '<scale()>'
	| '<scale3d()>'
	| '<scaleX()>'
	| '<scaleY()>'
	| '<scaleZ()>'
	| '<scope-end>'
	| '<scope-start>'
	| '<scroll()>'
	| '<scroller>'
	| '<selector-list>'
	| '<self-position>'
	| '<semicolon-token>'
	| '<semitones>'
	| '<sepia()>'
	| '<shadow-t>'
	| '<shadow>'
	| '<shape-box>'
	| '<shape-radius>'
	| '<shape>'
	| '<side-or-corner>'
	| '<sign()>'
	| '<simple-selector-list>'
	| '<simple-selector>'
	| '<sin()>'
	| '<single-animation-composition>'
	| '<single-animation-direction>'
	| '<single-animation-fill-mode>'
	| '<single-animation-iteration-count>'
	| '<single-animation-play-state>'
	| '<single-animation-timeline>'
	| '<single-animation>'
	| '<single-transition-property>'
	| '<single-transition>'
	| '<size-feature>'
	| '<size>'
	| '<skew()>'
	| '<skewX()>'
	| '<skewY()>'
	| '<sqrt()>'
	| '<step-position>'
	| '<step-timing-function>'
	| '<string-token>'
	| '<string>'
	| '<style-condition>'
	| '<style-feature>'
	| '<style-in-parens>'
	| '<style-query>'
	| '<subclass-selector>'
	| '<supports-condition>'
	| '<supports-decl>'
	| '<supports-feature>'
	| '<supports-in-parens>'
	| '<supports-selector-fn>'
	| '<svg-length>'
	| '<svg-writing-mode>'
	| '<symbol>'
	| '<system-color>'
	| '<system-family-name>'
	| '<tan()>'
	| '<target-counter()>'
	| '<target-counters()>'
	| '<target-text()>'
	| '<target>'
	| '<time-percentage>'
	| '<time>'
	| '<timeline-range-name>'
	| '<top>'
	| '<track-breadth>'
	| '<track-list>'
	| '<track-repeat>'
	| '<track-size>'
	| '<transform-function>'
	| '<transform-list>'
	| '<transition-behavior-value>'
	| '<translate()>'
	| '<translate3d()>'
	| '<translateX()>'
	| '<translateY()>'
	| '<translateZ()>'
	| '<try-size>'
	| '<try-tactic>'
	| '<type-or-unit>'
	| '<type-selector>'
	| '<urange>'
	| '<url-modifier>'
	| '<url-token>'
	| '<url>'
	| '<var()>'
	| '<view()>'
	| '<viewport-length>'
	| '<visual-box>'
	| '<whitespace-token>'
	| '<wq-name>'
	| '<x>'
	| '<xywh()>'
	| '<xyz-params>'
	| '<xyz-space>'
	| '<y>'
	| '<zero>'
	| '<{-token>'
	| '<}-token>';
export type ExtendedType =
	| "<'color-profile'>"
	| "<'color-rendering'>"
	| "<'enable-background'>"
	| '<animatable-value>'
	| '<begin-value-list>'
	| '<class-list>'
	| '<clock-value>'
	| '<color-matrix>'
	| '<css-declaration-list>'
	| '<dasharray>'
	| '<end-value-list>'
	| '<key-points>'
	| '<key-splines>'
	| '<key-times>'
	| '<list-of-lengths>'
	| '<list-of-numbers>'
	| '<list-of-percentages>'
	| '<list-of-svg-feature-string>'
	| '<list-of-value>'
	| '<number-optional-number>'
	| '<origin>'
	| '<points>'
	| '<preserve-aspect-ratio>'
	| '<rotate>'
	| '<svg-font-size-adjust>'
	| '<svg-font-size>'
	| '<svg-path>'
	| '<system-language>'
	| '<text-coordinate>'
	| '<view-box>'
	| 'AbsoluteURL'
	| 'Accept'
	| 'Any'
	| 'AutoComplete'
	| 'BCP47'
	| 'BaseURL'
	| 'BrowsingContextName'
	| 'BrowsingContextNameOrKeyword'
	| 'CustomElementName'
	| 'DOMID'
	| 'DateTime'
	| 'FunctionBody'
	| 'HTTPSchemaURL'
	| 'HashName'
	| 'IconSize'
	| 'Int'
	| 'ItemProp'
	| 'JSON'
	| 'MIMEType'
	| 'NavigableTargetName'
	| 'NavigableTargetNameOrKeyword'
	| 'NoEmptyAny'
	| 'Number'
	| 'OneCodePointChar'
	| 'OneLineAny'
	| 'Pattern'
	| 'SerializedPermissionsPolicy'
	| 'SourceSizeList'
	| 'Srcset'
	| 'TabIndex'
	| 'URL'
	| 'Uint'
	| 'ValidCustomCommand'
	| 'XMLName'
	| 'Zero';
export type HtmlAttrRequirement = 'Boolean';

export interface TypesSchema {
	type?: Type;
}
/**
 * - [Space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens)
 * - [Comma-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens)
 */
export interface List {
	token: ExtendedType | Enum;
	disallowToSurroundBySpaces?: boolean;
	allowEmpty?: boolean;
	ordered?: boolean;
	unique?: boolean;
	caseInsensitive?: boolean;
	number?:
		| ('zeroOrMore' | 'oneOrMore')
		| {
				min: number;
				max: number;
		  };
	separator: 'space' | 'comma';
}
/**
 * [Enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)
 */
export interface Enum {
	/**
	 * @minItems 1
	 */
	enum: [string, ...string[]];
	disallowToSurroundBySpaces?: boolean;
	caseInsensitive?: boolean;
	invalidValueDefault?: string;
	missingValueDefault?: string;
	sameStates?: {
		[k: string]: unknown;
	};
}
/**
 * [Numbers](https://html.spec.whatwg.org/dev/common-microsyntaxes.html#numbers)
 */
export interface Number {
	type: 'float' | 'integer';
	gt?: number;
	gte?: number;
	lt?: number;
	lte?: number;
	clampable?: boolean;
}
/**
 * Allows separating and individually validating directives and tokens within attribute values. Ensures precise validation for complex attributes by checking each part according to its rules.
 */
export interface Directive {
	/**
	 * @minItems 1
	 */
	directive: [string, ...string[]];
	token: Type;
	ref?: string;
}
