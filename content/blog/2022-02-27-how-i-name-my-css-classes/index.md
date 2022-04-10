---
title: How I Name my Css classes
date: "2022-02-27"
template: post
type: "post"
tags: ['css','scss']
---

1. **Naming style** : kebab case

```css
.header-top{ }, 
```

2. Using the BEM convention( BLOCK ELEMENT MODIFIER)

Basically means breaking down each part of a website into smaller manageable components the class names are then assigned to the component which then constitutes a **Block.** It should not contain any tag names or id names and should not have dependency on other components 

```css
eg. .header{}; .sutudent-list{}; .card{};
```

The **Element** will be anything that  will be a smaller part of that component which may not have any standalone meaning and they are semantically tied to its block

eg. .header__wrapper{}; .student-list__item{}; .card__title{}; .card__block

The **Modifier** classes will be anything that will be used to change the appearance, behaviour or state of a BLOCK or ELEMENT

```css
.block--hidden{};
.card__title--hidden{};
.student-list__item--dark{};
.header__wrapper--nopadding{};
```

*Note: Components can be nested in one another*

```css
.header{
	.brand-logo{
		.brand-logo__img{
		}
		.brand-logo__img--small{}
		.brand-logo__img--medium{}
	}
	.nav-menu{ //block
	.nav-menu__item{}; //element
	.nav-menu__item--active{}; //modifier
	}
}
```

3. Adding js-* for any classes only used by javascript. No Css classes should be attached to these type of classes 
    
4. Try to avoid using more than 2 word for naming components.
    
    
5. Using has- or is- prefix for an activated  state of a component
    
    eg. is-activated, is-large