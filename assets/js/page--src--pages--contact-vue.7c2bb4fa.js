(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6/3C":function(t,e,a){},GNM3:function(t,e,a){"use strict";a("6/3C")},tkto:function(t,e,a){var o=a("I+eb"),n=a("ewvW"),r=a("33Wh");o({target:"Object",stat:!0,forced:a("0Dky")((function(){r(1)}))},{keys:function(t){return r(n(t))}})},w981:function(t,e,a){"use strict";a.r(e);var o=a("VTBJ"),n=(a("oVuX"),a("2B1R"),a("tkto"),a("07d7"),{data:function(){return{formData:{}}},methods:{encode:function(t){return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")},handleSubmit:function(t){var e=this;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode(Object(o.a)({"form-name":t.target.getAttribute("name")},this.formData))}).then((function(){return e.$router.push("/success")})).catch((function(t){return alert(t)}))}}}),r=(a("GNM3"),a("7uw+")),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("Layout",[a("div",{staticClass:"contact-wrapper"},[a("div",{staticClass:"left-block"},[a("h1",[t._v("Get in Touch")]),a("p",[t._v("If you've got an inquiry for a job or project,drop me a line at "),a("a",{attrs:{href:"mailto:hello@hello.com"}},[t._v("hello@hello.com")]),t._v(" or fill the form right here.")])]),a("div",{staticClass:"right-block"},[a("form",{attrs:{name:"contact",method:"post",action:"/success/","data-netlify":"true","data-netlify-honeypot":"bot-field"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),a("p",{attrs:{hidden:""}},[a("label",[t._v("\n                Don’t fill this out: "),a("input",{attrs:{name:"bot-field"}})])]),a("div",{staticClass:"sender-info"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Your name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],attrs:{type:"text",name:"name"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Your email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"email",name:"email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group message-wrapper"},[a("label",{attrs:{for:"message"}},[t._v("Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],attrs:{name:"message"},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}})]),a("button",{attrs:{type:"submit"}},[t._v("Send")])])])])])],1)}),[],!1,null,"32711306",null);e.default=s.exports}}]);