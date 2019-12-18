# css.gg
Minimalistic Icon library Designed by code. \
Customizable & Retina-Ready icons entirely build in CSS.

App: https://css.gg

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
#### 1. Access data on .json format

###### All data - Single Icon
```
https://css.gg/json?=|icon-name
```
###### All data - Multiple Icons
```
https://css.gg/json?=|icon-name|icon-name|icon-name
```

### Return style & markup only

You need to specify in the end of url if you wish to pull only style or markup by using **`&op=css`** or **`&op=css+markup`** variables respectively.


#### e.g Single Icon
###### Style
```
https://css.gg/json?=|icon-name&op=css
```

###### Style & Markup
```
https://css.gg/json?=|icon-name&op=css+markup
```

#### e.g Multiple Icons

###### Style
```
https://css.gg/json?=|icon-name|icon-name|icon-name&op=css
```

###### Style & Markup
```
https://css.gg/json?=|icon-name|icon-name|icon-name&op=css+markup
```

#### 2. Access data on .xml format
> All the above options apply to **xml** format.

# Donate
This library is entirely free and maintained by one person > [Astrit](https://github.com/astrit) \
If you like the work please consider donating at https://www.paypal.me/astrit

# Support
1. FAQ - https://css.gg/faq
2. Discord - https://discord.gg/e7NDKFM
3. Spectrum - https://spectrum.chat/css-gg