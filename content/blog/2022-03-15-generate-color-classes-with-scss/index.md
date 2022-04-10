---
title: Generate color classes with scss
date: "2022-03-15"
template: post
type: "post"
tags: ["frontend", "scss", "css"]
---

Lets be honest dealing with colors is a pain but things are simple when there are classes dedicated for colors and its also alot easy to remember as well like the way its being handled in tailwind css. So to generate such classes here is an scss function that does the job:

```scss
$color: rgb(141, 3, 3);
$color-name: 'grey';
@for $i from 10 through 100 {
    @if $i % 10 == 0 {
      $percentage: $i*1%;
      @if $i < 50{
        $k : 50 - $i;//change the first value to lighten the whites i.e between 50 to 80
        $kper : $k * 1%;
        .#{$color-name}-#{$i} {
             background-color: mix(white, $color, $kper);
        } 
    } @else if $i == 50{
        .#{$color-name}-#{$i} {
            background-color: $color;
        }
    }@else if $i > 50{
      $b : $i - 35;//change the second value to darken the blacks i.e between 20 to 50
      $bper : $b * 1%;
        .#{$color-name}-#{$i} {
          background-color: mix(black, $color, $bper);
        }

        }
    }
  }

```


#### Usage 

-Just put this function in a utility file that generates classes

-Plug in the color and the color-name that maybe required

-This can modified to be used to generate colors from an array

-Here is a working example i have worked on [Codepen](https://codepen.io/ed613/pen/LYembWJ)👈

