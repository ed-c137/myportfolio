(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ZL64:function(t,e,i){},bMr2:function(t,e,i){"use strict";i.r(e);var s={emits:["day-night-mode"],props:["isLight"],data:function(){return{isLightmode:!0}},methods:{toggleDLM:function(){this.isLight=!this.isLight,this.isLight?localStorage.setItem("theme","light"):localStorage.setItem("theme","dark");var t=document.getElementsByTagName("body")[0];0===t.classList.length?t.classList.add("dark"):t.classList.remove("dark")}},created:function(){var t=document.getElementsByTagName("body")[0];null===localStorage.getItem("theme")?localStorage.setItem("theme","light"):"light"===localStorage.getItem("theme")?(this.isLightmode=!0,t.classList.remove("dark"),this.$emit("day-night-mode","light")):(t.classList.add("dark"),this.isLightmode=!1,this.$emit("day-night-mode","dark"))}},a=(i("irqV"),i("7uw+")),o=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"toggle-button header-nav-link",on:{click:this.toggleDLM}},[e("transition",[this.isLight?e("fa",{staticClass:"faico",attrs:{icon:"moon"}}):e("fa",{staticClass:"fasun",attrs:{icon:"sun"}})],1)],1)}),[],!1,null,"4be607aa",null);e.default=o.exports},irqV:function(t,e,i){"use strict";i("ZL64")}}]);