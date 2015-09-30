# CSSTooltips
A no-frills CSS only library for creating elegant Tooltips

Features
-----------

 - LESS based builder which helps you replace variables and create your unique styled tooltips.
 - Uses pseudo elements, CSS3 Transistions and BEM naming conventions.
 - Create your unique styled templates in the DIY builder

Demo
-----------
Please visit http://yashatgit.github.io/CSSTooltips/ for a demo of all the features.

Usage
-----------
Firstly obtain the CSS file from Github.

 - [unminified] https://github.com/yashatgit/CSSTooltips/tree/master/dist
 - [minified] https://github.com/yashatgit/CSSTooltips/tree/master/dist

Now include the library in the HEAD of your page:

    <link rel="stylesheet" href="tooltip.css"></link>

Any element on which you have to show the tooltip needs to be given a `tt` class and the tooltip text should be written in the `data-title` attribute.

    This will show the default <span class="tt" data-title="Hello!">tooltip</span>

For further styling, you can use following modifiers:

 - `tt--t`
 - `tt--l`
 - `tt--r`
 - `tt--success`
 - `tt--error`
 - `tt--warn`
 - `tt--sticky`

Usage
-----------
Copyright (c) 2015 Yash Soni Licensed under the MIT license.
