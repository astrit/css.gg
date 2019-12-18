# css.gg
Minimalistic icon library Designed by code.

## Features
1. API endpoint
2. Lightweight
3. Accesible
4. Agile
5. Retina Ready
6. Compilable


## Getting started
Access all the icons as package:

| Name         | Source                 |
| ------------ | ---------------------- |
| CLI          | npm i -S css-gg        |
| CSS          | https://css.gg/c       |
| JSON         | https://css.gg/json    |
| XML          | https://css.gg/xml     |


## Add icons in your project

#### 1. Markup
The class name starts always with "gg-" followed by icon name.
```html
<i class="gg-icon-name"></i>
```

#### 2. Style

###### HTML
```html
<!-- Uncompressed - Single Icon -->
<link href='https://css.gg/icon-name.css' rel='stylesheet'>

<!-- Compressed - Single Icon -->
<link href='https://css.gg/c?=|icon-name' rel='stylesheet'>

<!-- Multiple icons  -->
<link href='https://css.gg/c?=|icon-name|icon-name|icon-name' rel='stylesheet'>

<!-- All icons  -->
<link href='https://css.gg/c' rel='stylesheet'>
```

###### CSS
```css
/* Uncompressed - Single icon */
@import url('https://css.gg/icon-name.css');

/* Compressed - Single icon*/
@import url('https://css.gg/c?=|icon-name');

/* Multiple icons */
@import url('https://css.gg/c?=|icon-name|icon-name|icon-name');

/* All icons */
@import url('https://css.gg/c');
```

## API Reference
#### Access data on .json format

1. All data - Single Icon
```
https://css.gg/json?=|icon-name
```
2. All data - Multiple Icons
```
https://css.gg/json?=|icon-name|icon-name|icon-name
```

## Return style & markup only

You need to specify in url if you wish to pull only style or markup by using **`&op=css`** or **`&op=css+markup`** variables respectively in the end of url.


#### e.g Single Icon
 1. Style
```
https://css.gg/json?=|icon-name&op=css
```

2. Style & Markup
```
https://css.gg/json?=|icon-name&op=css+markup
```

#### e.g Multiple Icons

1. Style
```
https://css.gg/json?=|icon-name|icon-name|icon-name&op=css
```

2. Style & Markup
```
https://css.gg/json?=|icon-name|icon-name|icon-name&op=css+markup
```

## .xml
> All the above options apply to **xml** format.