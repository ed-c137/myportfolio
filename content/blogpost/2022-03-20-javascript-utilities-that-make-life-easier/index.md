---
title: Using javascript utilities to make life easier
date: "2022-03-20"
template: "post"
type: "post"
tags: ["javascript", "utility"]
source: ["null",""] #videolink, githublink, ariticle.links
---

One thing we can all agree on is that there the vanila js syntax is very long hence to save on some time here are some utility functions that i came across that make things easier and more clear 

Query a js element
```javascript

export function qs(selector, parent = document) {
  return parent.querySelector(selector)
}

export function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

```

Add an event listner
```javascript

export function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

```

Create a js element
```javascript
export function createElement(type, options = {}) {
  const element = document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(value)
      return
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
      return
    }

    if (key === "text") {
      element.textContent = value
      return
    }

    element.setAttribute(key, value)
  })
  return element
}
```
