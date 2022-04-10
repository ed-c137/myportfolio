---
title: Add FontAwesome to Vue.js 3 project
date: "2022-02-24"
template: post
type: "post"
tags: ['fontawesome','vuejs3']
---

Lets be honest Adding fonts to a JS project shouldn't be that hard but i found it a bit confusing when i tried implementing it. This article should simplify the process.

Here im adding the latest fontawesome i.e fontawesome 6 to a vue js 3 project

1. Install `npm i --save @fortawesome/fontawesome-svg-core` this will give you the functions to import all icons

2. Add the required icon packages that may be needed to be used. check them out [here](https://fontawesome.com/docs/web/dig-deeper/styles).

Here are some eg.
```
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

3. Add the appropriate vue component 

    For Vuejs 2.x `npm i --save @fortawesome/vue-fontawesome@latest`

    For Vuejs 3.x `npm i --save @fortawesome/vue-fontawesome@prerelease`

4. In main.js before the app is mounted

eg.

```jsx
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';

const app = createApp(App)
library.add(fas, fab);
app.use(router);
app.component('fa', FontAwesomeIcon);
app.mount('#app')

//to use it in the template
<fa icon="plus"/>
<fa :icon="['fab', 'youtube']" />//the brand icons will only work this way
```

Or Maybe extract the icons indiviually like:
```jsx
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faYoutube, faGithub);

in Templates
<fa :icon="['fab', 'youtube']" />
<fa :icon="['fab', 'github']" />
```