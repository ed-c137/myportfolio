// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@/assets/styles/normalize.css';
import '@/assets/styles/main.scss';
import '@/assets/styles/styles.scss';
import '../prism-themes/themes/prism-dracula.css'
// import '../prism-themes'
// import DefaultLayout from '~/layouts/Default.vue'
import Bio from "@/components/Bio.vue";
import Layoutdefault from "@/layouts/MainLayout.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faEye, faHashtag, faSun, faMoon, faTag, faEnvelope, faChevronUp, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import VueCookie from 'vue-cookie';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
  library.add( faGithub, faEye, faHashtag, faMoon, faSun, faTag, faLinkedin, faEnvelope, faChevronUp, faFile  );
  Vue.component('fa', FontAwesomeIcon);
  Vue.use(VueCookie);
  Vue.component('Bio', Bio);
  Vue.component('Layout', Layoutdefault);
}
