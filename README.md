# [Demo](https://css.gg) - [Figma](https://css.gg/fig) - [Twitter](https://twitter.com/astritmalsija)
Open-source CSS, SVG and Figma UI Icons \
Available in SVG Sprite, styled-components, NPM & API

![npm](https://img.shields.io/npm/v/css.gg) ![GitHub last commit](https://img.shields.io/github/last-commit/astrit/css.gg) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fcss.gg) ![npm](https://img.shields.io/npm/dt/css.gg) ![GitHub issues](https://img.shields.io/github/issues/astrit/css.gg) ![GitHub stars](https://img.shields.io/github/stars/astrit/css.gg) ![Twitter Follow](https://img.shields.io/twitter/follow/astritmalsija?label=follow&style=social)

![css.gg](https://css.gg/fav/ogit.png)
![css.gg icons](https://css.gg/img/all.png)

# New in 2.0
#### 🥳 200 New Icons
#### 🚀 SVG Icons
#### 🔥 SVG Sprite
#### 💅 Styled Components
#### ⚛️ React Local Styled Components
#### 🦄 Figma Components
#### 🔮 Adobe XD Components

# Table of Contents
* [Get Started](#get-started)
* [HTML include](#html-include)
  * [1. All icons](#1-all-icons)
  * [2. Single icon](#2-single-icon)
  * [3. Collection](#3-collection)
  * [4. Markup](#4-markup)
  * [5. Example](#5-example)
* [CSS @import](#css--import)
  * [1. All icons](#1-all-icons-1)
  * [2. Single icon](#2-single-icon-1)
  * [3. Collection](#3-collection-1)
  * [4. Resizing](#4-resizing)
  * [5. Coloring](#5-coloring)
* [SVG](#svg)
  * [1. SVG Sprite - Download Path](#1-svg-sprite---download-path)
    * [1.1. Example](#11-example)
  * [2. SVG Single Icon - Download Path](#2-svg-single-icon---download-path)
    * [2.1. Example - SVG Sprite](#21-example---svg-sprite)
    * [2.2. Example - Inline SVG Sprite/Symbol](#22-example---inline-svg-sprite-symbol)
    * [2.3. Example Single copy/paste icon](#23-example-single-copy-paste-icon)
  * [3. Encode SVG for CSS](#3-encode-svg-for-css)
    * [3.1. Example - Encoded SVG for CSS icon](#31-example---encoded-svg-for-css-icon)
  * [4. Coloring a SVG icon](#4-coloring-a-svg-icon)
    * [4.1. Directly on the icon](#41-directly-on-the-icon)
    * [4.2. using class](#42-using-class)
* [JSON - paths](#json---paths)
  * [1. All icons](#1-all-icons-2)
  * [2. Single icon](#2-single-icon-2)
  * [3. Collection](#3-collection-2)
* [XML - paths](#xml---paths)
  * [1. All icons](#1-all-icons-3)
  * [2. Single icon](#2-single-icon-3)
  * [3. Collection](#3-collection-3)
* [React](#react)
  * [1. Styled Components](#1-styled-components---)
  * [2. Local Single Icon as `styled-component`](#2-local-single-icon-as--styled-component-)
    * [2.1. Copy directly from the page](#21-copy-directly-from-the-page)
    * [2.2. Local Component Example](#22-local-component-example)
  * [3. SVG Sprite method](#3-svg-sprite-method)
  * [4. All CSS icons](#4-all-css-icons)
    * [4.1. Single CSS icon](#41-single-css-icon)
  * [5. All SCSS icons](#5-all-scss-icons)
    * [5.1. Single SCSS icon](#51-single-scss-icon)
  * [6. Combined import SVG, CSS, SCSS etc.](#6-combined-import-svg-css-scss-etc)
* [Design Tools](#design-tools)
  * [1. Figma](#1-figma---httpscssggfig)
  * [2. Adobe XD](#2-adobe-xd---httpscssggxd)
* [Contributors](#contributors)
* [Donate](#donate)
* [Support](#support)
* [v.1.0.6 or older](#v106-or-older)
* [TODO:](#todo)

# Get Started
Install the latest version via npm or yarn
```shell
npm i css.gg
```
```shell
yarn add css.gg
```

Using Package Manager \
This package contains the following directories and files:


| Path &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | What it is |
| :-| :-|
| /css         | individual *.css icons                                        |
| /scss        | individual *.scss icons                                       |
| /svg         | individual *.svg icons                                        |
| /tsx         | individual *.tsx icons `styled-components`                    |
| /all.css     | all icons compressed in a single file                         |
| /all.d.ts    |  `styled-components` |
| /all.fig      | local figma file same as https://css.gg/fig  |
| /all.js      | list of exported `styled-components`  |
| /all.js.map  | `styled-components`  |
| /all.json    | all icons *.css, *.svg, *.tsx including markup & public path  |
| /all.scss     | all icons in a single SCSS file `npm i node-sass` needed                         |
| /all.svg     | SVG Sprite with all icons                                     |
| /all.xd     | local adobe xd file same as https://css.gg/xd                                     |
| /all.xml     | all icons *.css, *.svg, *.tsx including markup & public path  |


# HTML include
#### 1. All icons
```html
<!-- css.gg -->
<link href='https://css.gg/css' rel='stylesheet'>

<!-- UNPKG -->
<link href='https://unpkg.com/css.gg/icons/all.css' rel='stylesheet'>

<!-- JSDelivr -->
<link href='https://cdn.jsdelivr.net/npm/css.gg/icons/all.css' rel='stylesheet'>
```

#### 2. Single icon
```html
<!-- css.gg -->
<link href='https://css.gg/ {ICONNAME} .css' rel='stylesheet'>

<!-- UNPKG -->
<link href='https://unpkg.com/css.gg/icons/css/ {ICONNAME} .css' rel='stylesheet'>

<!-- JSDelivr -->
<link href='https://cdn.jsdelivr.net/npm/css.gg/icons/css/ {ICONNAME} .css' rel='stylesheet'>
```
#### 3. Collection
```html
<!-- CSS Format -->
<link href='https://css.gg/css?= {ICONNAME} | {ICONNAME}' rel='stylesheet'>
```
#### 4. Markup
```html
<i class=" {ICONNAME} "></i>

<!-- reference icon using span -->
<span class=" {ICONNAME} "></span>

<!-- reference icon using div -->
<div class=" {ICONNAME} "></div>

<!-- reference icon using custom tag -->
<gg-icon class=" {ICONNAME} "></gg-icon>
```
##### 5. Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- You can add this link or any other CDN alternatives as mentioned above -->
    <link href='https://css.gg/css' rel='stylesheet'>

</head>
<body>

    <!-- Using i tag  -->
    <i class="gg- {ICONNAME} "></i>

    <!-- Using div tag  -->
    <div class="gg- {ICONNAME} "></div>

    <!-- Using custom tag  -->
    <gg-icon class="gg- {ICONNAME} "></gg-icon>

</body>
</html>
```


# CSS @import
#### 1. All icons
```css
/* css.gg */
@import url('https://css.gg/css');

/* UNPKG */
@import url('https://unpkg.com/css.gg/icons/all.css');

/* JSDelivr */
@import url('https://cdn.jsdelivr.net/npm/css.gg/icons/all.css');
```
#### 2. Single icon
```css
/* css.gg */
@import url('https://css.gg/ {ICONNAME} .css');

/* UNPKG */
@import url('https://unpkg.com/css.gg/icons/css/ {ICONNAME} .css');

/* JSDelivr */
@import url('https://cdn.jsdelivr.net/npm/css.gg/icons/css/ {ICONNAME} .css');
```
#### 3. Collection
```css
/* css.gg */
@import url('https://css.gg/css?= {ICONNAME} | {ICONNAME}');
```
#### 4. Resizing
> To resize an icon you just need to change the value of a css variable "--ggs" to any value you like if not specified it falls back to 1 or the actual size.
```css
.gg-{ICONNAME} {
    /* This value will multiple the actual size  */
    --ggs: 10;
}
```
> The variable can be added to the parent, custom class,body or root level if you want all icons same size.
```css
:root {
    --ggs: 6;
}
```
#### 5. Coloring
By default all the CSS, SCSS icons inherit the color from the parent by using `currentColor` attribute how ever you can apply any color you like.
```css
.gg-{ICONNAME} {
  color: teal;
}
```

# SVG
#### 1. SVG Sprite - Download Path
You can't use these paths, you must download since SVG doesn't allow external sources.
```html
<!-- css.gg -->
https://css.gg/svg

<!-- UNPKG -->
https://unpkg.com/css.gg/icons/all.svg

<!-- JSDelivr -->
https://cdn.jsdelivr.net/npm/css.gg/icons/all.svg
```
##### 1.1. Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!-- First copy all.svg to your project directory -->
<svg><use xlink:href="path/to/all.svg# {ICONNAME} "/></svg>

</body>
</html>
```

#### 2. SVG Single Icon - Download Path
```html
<!-- css.gg -->
https://css.gg/ {ICONNAME} .svg

<!-- UNPKG -->
https://unpkg.com/css.gg/icons/svg/ {ICONNAME} .svg

<!-- JSDelivr -->
https://cdn.jsdelivr.net/npm/css.gg/icons/svg/ {ICONNAME} .svg
```
##### 2.1. Example - SVG Sprite
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!-- First copy all.svg to your project directory -->
<svg><use xlink:href="path/to/all.svg# {ICONNAME} "/></svg>

</body>
</html>
```
##### 2.2. Example - Inline SVG Sprite/Symbol
You can add as symbol each or copy the entire file contents at one of the CDN alternatives as mentioned at 2.1
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;" >
    <symbol id="{ICONNAME}">
      <!-- here goes the icon path  -->
    </symbol>
  </svg>

  <!-- Afterward you can call the icons by id like this: -->
  <svg><use xlink:href="# {ICONNAME} "/></svg>

</body>
</html>
```

#### 2.3. Example Single copy/paste icon
You can go to `https://css.gg/{ICONNAME}` and copy the SVG icon directy and paste it on your project. \
You can also download a single icon by just visiting `https://css.gg/{ICONNAME}.svg`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

  <!-- Just paste it where you want the icon to be  -->
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9 13H15V17H9V13Z" fill="currentColor" fill-opacity="0.5" /> <path d="M6 7H18V11H6V7Z" fill="currentColor" /> </svg>

</body>
</html>
```

#### 3. Encode SVG for CSS
You need to define width and height in order for this to work.
Afterwards you can just create a div

```css
.gg-{ICONNAME} {

  background-image:
    url("data:image/svg+xml,<svg></svg>");

}
```
> To encode use this tool \
https://yoksel.github.io/url-encoder/

#### 3.1. Example - Encoded SVG for CSS icon
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- Using i tag  -->
    <i class="gg- {ICONNAME} "></i>

    <!-- Using div tag  -->
    <div class="gg- {ICONNAME} "></div>

    <!-- Using custom tag  -->
    <gg-icon class="gg- {ICONNAME} "></gg-icon>

</body>
</html>
```
#### 4. Coloring a SVG icon
By default all colors use `currentColor` as value in order to inherit the color from the parent. \
If you wish to change that color you can do the following.
#### 4.1. Directly on the icon
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <svg><path fill=" {COLOR} " /></svg>

</body>
</html>
```

#### 4.2. using class
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
      /* 1. You define the CSS class like this:  */

      .custom__color path {
        color: teal;
      }

    </style>
</head>
<body>

    <!-- 2. After that you have to apply the class to the icon -->
    <svg class="custom__color"><path /></svg>

</body>
</html>
```

# JSON - paths
#### 1. All icons
```html
<!-- All attributes -->
https://css.gg/json

<!-- Only Style -->
https://css.gg/json?=&op=css

<!-- Style & Markup -->
https://css.gg/json?=&op=css+markup

<!-- UNPKG -->
https://unpkg.com/css.gg/icons/all.json

<!-- JSDelivr -->
https://cdn.jsdelivr.net/npm/css.gg/icons/all.json
```
#### 2. Single icon
```html
<!-- All attributes -->
https://css.gg/json?= {ICONNAME}

<!-- Only Style -->
https://css.gg/json?= {ICONNAME} &op=css

<!-- Style & Markup -->
https://css.gg/json?= {ICONNAME} &op=css+markup

<!-- No CDN Alternatives -->
```
#### 3. Collection
```html
<!-- All attributes -->
https://css.gg/json?= {ICONNAME} | {ICONNAME}

<!-- Only Style -->
https://css.gg/json?= {ICONNAME} | {ICONNAME} &op=css

<!-- Style & Markup -->
https://css.gg/json?= {ICONNAME} | {ICONNAME} &op=css+markup

<!-- No CDN Alternatives -->
```
# XML - paths
#### 1. All icons
```html
<!-- All attributes -->
https://css.gg/xml

<!-- Only Style -->
https://css.gg/xml?=&op=css

<!-- Style & Markup -->
https://css.gg/xml?=&op=css+markup

<!-- UNPKG -->
https://unpkg.com/css.gg/icons/all.xml

<!-- JSDelivr -->
https://cdn.jsdelivr.net/npm/css.gg/icons/all.xml
```
#### 2. Single icon
```html
<!-- All attributes -->
https://css.gg/xml?= {ICONNAME}

<!-- Only Style -->
https://css.gg/xml?= {ICONNAME} &op=css

<!-- Style & Markup -->
https://css.gg/xml?= {ICONNAME} &op=css+markup

<!-- No CDN Alternatives -->
```
#### 3. Collection
```html
<!-- All attributes -->
https://css.gg/xml?= {ICONNAME} | {ICONNAME}

<!-- Only Style -->
https://css.gg/xml?= {ICONNAME} | {ICONNAME} &op=css

<!-- Style & Markup -->
https://css.gg/xml?= {ICONNAME} | {ICONNAME} &op=css+markup

<!-- No CDN Alternatives -->
```
# React
On a React project you can include a single icon as CSS, Styled Component, SCSS, SVG or call the contents using .json or .xml files.
\
Note that only `styled-components` icons can be called directly such as:
```js
import { ICONNAME } from 'css.gg'
```

#### 1. Styled Components 💅
After you install the package by using `npm i css.gg` or `yarn add css.gg` you can add a single icon like this:
```js
import React from 'react'
import { ICONNAME } from 'css.gg'

export default function() {
  return (
    <div>

      <ICONNAME />

    </div>
  )
}
```
#### 2. Local Single Icon as `styled-component`
If you need to download a single `typescript` or `styled-componment` format icon without downloading the entire package just visit the link like this:
```html
https://css.gg/{ICONNAME}.tsx
```
#### 2.1. Copy directly from the page
If you don't want to download at all but just copy paste visit the icon page and you have a special tab for it.
```html
https://css.gg/{ICONNAME}
```
#### 2.2. Local Component Example
```js
import React from 'react';

// local path
import { ICONNAME } from "./ {ICONNAME} "

function App() {
  return (
    <div>

      <ICONNAME />

    </div>
  );
}

export default App;
```
#### 3. SVG Sprite method
```js
import React from 'react';

// Import function from package
import { SVG } from 'css.gg'

function App() {
  return (
    <div>

      <svg width="24" height="24"><use xlinkHref={SVG + '#gg-ICONNAME'} /></svg>

    </div>
  );
}

export default App;
```

#### 4. All CSS icons
```js
import React from 'react';

// Import function from package
import { CSS } from 'css.gg'

function App() {
  return (
    <div>

        <!-- Using i tag  -->
        <i className="gg- {ICONNAME} "></i>

        <!-- Using div tag  -->
        <div className="gg- {ICONNAME} "></div>

        <!-- Using custom tag  -->
        <gg-icon className="gg- {ICONNAME} "></gg-icon>

    </div>
  );
}

export default App;
```

#### 4.1. Single CSS icon
```js
import React from 'react';

// Import path from package
import 'css.gg/icons/css/ {ICONNAME} .css'

function App() {
  return (
    <div>

        <!-- Using i tag  -->
        <i className="gg- {ICONNAME} "></i>

        <!-- Using div tag  -->
        <div className="gg- {ICONNAME} "></div>

        <!-- Using custom tag  -->
        <gg-icon className="gg- {ICONNAME} "></gg-icon>

    </div>
  );
}

export default App;
```

#### 5. All SCSS icons
SCSS format to work you need to have `node-sass` installed `npm i node-sass`
```js
import React from 'react';

// Import function from package
import { SCSS } from 'css.gg'

function App() {
  return (
    <div>

        <!-- Using i tag  -->
        <i className="gg- {ICONNAME} "></i>

        <!-- Using div tag  -->
        <div className="gg- {ICONNAME} "></div>

        <!-- Using custom tag  -->
        <gg-icon className="gg- {ICONNAME} "></gg-icon>

    </div>
  );
}

export default App;
```

#### 5.1. Single SCSS icon
SCSS format to work you need to have `node-sass` installed `npm i node-sass`
```js
import React from 'react';

// Import path from package
import 'css.gg/icons/scss/ {ICONNAME} .scss'

function App() {
  return (
    <div>

        <!-- Using i tag  -->
        <i className="gg- {ICONNAME} "></i>

        <!-- Using div tag  -->
        <div className="gg- {ICONNAME} "></div>

        <!-- Using custom tag  -->
        <gg-icon className="gg- {ICONNAME} "></gg-icon>

    </div>
  );
}

export default App;
```

#### 6. Combined import SVG, CSS, SCSS etc.
```js

import { SVG, CSS, SCSS, ICONNAME, ICONNAME } from 'css.gg'

```

# Design Tools
#### 1. Figma - https://css.gg/fig
All icons are available as components on assets from where you can search for a sigle icon or browse categories.
![css.gg figma](https://css.gg/img/pfig.png)


#### 2. Adobe XD - https://css.gg/xd
All icons are available as components \
![css.gg figma](https://css.gg/img/pxd.png)

# Contributors
1. [Astrit](https://github.com/astrit) - Author
2. [JiangWeixian](https://github.com/jiangWeixian) - Styled Components
3. [Lona](https://www.figma.com/@lona) - Figma/SVG Design

To become a contributor do a [new pull request](https://github.com/astrit/css.gg/pulls).

# Donate
| Source          | Link                               |
| :-------------- | :----------------------------------|
| Github Sponsor  | https://github.com/sponsors/astrit |
| Open Collective | https://opencollective.com/css-gg  |
| PayPal          | https://paypal.me/GjonMalsijaj     |

# Support
Discord - https://discord.gg/e7NDKFM

# v.1.0.6 or older
In order to access older versions you can use one of the provided CDN Alternatives
```html
<!-- UNPKG -  v.1.0.6 -->
https://unpkg.com/browse/css.gg@1.0.6/

<!-- JSDelivr -  v.1.0.6 -->
https://cdn.jsdelivr.net/npm/css.gg@1.0.6/
```

# TODO:
1. CSS Modules
2. Angluar
3. Vue.js

If you would like to contribute feel free to do a [new pull request](https://github.com/astrit/css.gg/pulls).