(this["webpackJsonpgithub-dashboard"]=this["webpackJsonpgithub-dashboard"]||[]).push([[4],{106:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(39),c=n(105),i=n(18),l=n(25);n(107);t.a=function(e){var t=e.id,n=e.name,r=e.stargazers_count,s=e.updated_at,u=e.html_url,p=Object(c.a)().t,f=Object(i.d)((function(e){return e.i18n.currentLocale}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"repo-card"},a.a.createElement("h3",{className:"repo-card__name--title"},t?a.a.createElement(o.b,{to:t.toString(),className:"repo-card__name repo-card__name--link"},n):n),void 0!==r&&r>=0&&a.a.createElement("div",null,a.a.createElement("span",{className:"icon--purple"},"\u2605"),"\xa0",r),s&&a.a.createElement("div",null,a.a.createElement("span",{className:"icon--gray"},"\u270e"),"\xa0","".concat(p("last_update"),":"),"\xa0","".concat(Object(l.a)(s,f))),u&&a.a.createElement("div",null,a.a.createElement("span",null,"\ud83d\udd17"),"\xa0",a.a.createElement("a",{href:u,className:"repo-card__name repo-card__name--link"},u))),a.a.createElement("br",null))}},107:function(e,t,n){},108:function(e,t,n){var r=n(109);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},109:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},110:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},111:function(e,t,n){e.exports={parse:n(112),stringify:n(115)}},112:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,a=n(113),o=Object.create?Object.create(null):{};function c(e,t,n,r,a){var o=t.indexOf("<",r),c=t.slice(r,-1===o?void 0:o);/^\s*$/.test(c)&&(c=" "),(!a&&o>-1&&n+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,i=[],l=-1,s=[],u={},p=!1;return e.replace(r,(function(r,o){if(p){if(r!=="</"+n.name+">")return;p=!1}var f,m="/"!==r.charAt(1),d=0===r.indexOf("\x3c!--"),h=o+r.length,b=e.charAt(h);m&&!d&&(l++,"tag"===(n=a(r)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!b||"<"===b||c(n.children,e,l,h,t.ignoreWhitespace),u[n.tagName]=n,0===l&&i.push(n),(f=s[l-1])&&f.children.push(n),s[l]=n),(d||!m||n.voidElement)&&(d||l--,!p&&"<"!==b&&b&&c(f=-1===l?i:s[l].children,e,l,h,t.ignoreWhitespace))})),!i.length&&e.length&&c(i,e,0,0,t.ignoreWhitespace),i}},113:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,a=n(114);e.exports=function(e){var t,n=0,o=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return o=!0,void n++;o?0===n?((a[r]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=r):(c.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=r),n++,o=!1})),c}},114:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},115:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},116:function(e,t,n){"use strict";var r=n(0),a=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=n(108),f=n.n(p),m=n(110),d=n.n(m),h=n(27),b=n.n(h),y=n(111),v=n.n(y),g=n(17),E=n(20);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){return e&&(e.children||e.props&&e.props.children)}function x(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function k(e){return Array.isArray(e)?e:[e]}function w(e,t,n,r,o){if(""===t)return[];var c=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(c.join("|")).test(t);if(!e&&!i)return[t];var l={};!function e(t){k(t).forEach((function(t){"string"!==typeof t&&(_(t)?e(x(t)):"object"!==d()(t)||a.a.isValidElement(t)||Object.assign(l,t))}))}(e);var s=n.services.interpolator.interpolate(t,j({},l,{},o),n.language);var u=function e(t,n){var o=k(t);return k(n).reduce((function(t,n,l){var s=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var u=o[parseInt(n.name,10)]||{},p=0!==Object.keys(n.attrs).length?function(e,t){var n=j({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},u):u,f=a.a.isValidElement(p);if("string"===typeof p)t.push(p);else if(_(p)){var m=x(p),h=e(m,n.children),b=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return a.a.isValidElement(e)}))}(m)&&0===h.length?m:h;p.dummy&&(p.children=b),t.push(a.a.cloneElement(p,j({},p.props,{key:l}),b))}else if(i&&"object"===d()(p)&&p.dummy&&!f){var y=e(o,n.children);t.push(a.a.cloneElement(p,j({},p.props,{key:l}),y))}else if(Number.isNaN(parseFloat(n.name)))if(r.transSupportBasicHtmlNodes&&c.indexOf(n.name)>-1)if(n.voidElement)t.push(a.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var v=e(o,n.children);t.push(a.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},v))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var g=e(o,n.children);t.push("<".concat(n.name,">").concat(g,"</").concat(n.name,">"))}else if("object"!==d()(p)||f)1===n.children.length&&s?t.push(a.a.cloneElement(p,j({},p.props,{key:l}),s)):t.push(a.a.cloneElement(p,j({},p.props,{key:l})));else{var E=n.children[0]?s:null;E&&t.push(E)}}else"text"===n.type&&t.push(n.content);return t}),[])}([{dummy:!0,children:e}],v.a.parse("<0>".concat(s,"</0>")));return x(u[0])}function N(e){var t=e.children,n=e.count,o=e.parent,c=e.i18nKey,i=e.tOptions,l=e.values,s=e.defaults,u=e.components,p=e.ns,m=e.i18n,h=e.t,b=f()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),y=Object(r.useContext)(g.a)||{},v=y.i18n,O=y.defaultNS,_=m||v||Object(g.d)();if(!_)return Object(E.d)("You will need pass in an i18next instance by using i18nextReactModule"),t;var x=h||_.t.bind(_)||function(e){return e},N=j({},Object(g.c)(),{},_.options&&_.options.react),S=p||x.ns||O||_.options&&_.options.defaultNS;S="string"===typeof S?[S]:S||["translation"];var P=s||function e(t,n){if(!t)return"";var r="",o=k(t),c=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)r+="".concat(t);else if(a.a.isValidElement(t)){var i=Object.keys(t.props).length,l=c.indexOf(t.type)>-1,s=t.props.children;if(!s&&l&&0===i)r+="<".concat(t.type,"/>");else if(s||l&&0===i)if(t.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(l&&1===i&&"string"===typeof s)r+="<".concat(t.type,">").concat(s,"</").concat(t.type,">");else{var u=e(s,n);r+="<".concat(o,">").concat(u,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if("object"===d()(t)){var p=t.format,m=f()(t,["format"]),h=Object.keys(m);if(1===h.length){var b=p?"".concat(h[0],", ").concat(p):h[0];r+="{{".concat(b,"}}")}else Object(E.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(E.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,N)||N.transEmptyNodeValue||c,D=N.hashTransKey,F=c||(D?D(P):P),A=j({},i,{count:n},l,{},l?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},{defaultValue:P,ns:S}),R=w(u||t,F?x(F,A):P,_,N,A),V=void 0!==o?o:N.defaultTransParent;return V?a.a.createElement(V,b,R):R}var S=n(39),P=n(3),D=n(14),F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,n,r,s,p=(t=f,function(){var e,n=i(t);if(l()){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return u(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e)).state={error:null},t}return n=f,s=[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}],(r=[{key:"componentDidCatch",value:function(e){D.a.error(e)}},{key:"render",value:function(){var e=this.state.error,t=this.props.children;return e?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,a.a.createElement(N,null,"error"),":\xa0",e),a.a.createElement("h3",{className:"repo-details__link--main-page"},a.a.createElement(S.b,{to:P.h.MAIN},a.a.createElement(N,null,"to_main_page")))):t}}])&&o(n.prototype,r),s&&o(n,s),f}(r.Component);t.a=function(e){return function(t){return a.a.createElement(F,null,a.a.createElement(e,t))}}},122:function(e,t,n){},123:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),o=n(15),c=n(40),i=n(0),l=n.n(i),s=n(39),u=n(18),p=n(105),f=n(3),m=n(106),d=(n(122),function(e){var t=e.avatar_url,n=e.html_url,r=e.login,a=e.contributions,o=Object(p.a)(),i=Object(c.a)(o,1)[0];return l.a.createElement("div",{className:"profile__container"},l.a.createElement("a",{href:n},l.a.createElement("img",{src:t,alt:r,loading:"lazy",className:"profile__avatar"}),l.a.createElement("h3",{className:"profile__login"},r),a&&l.a.createElement("small",{className:"profile__contributions"},"".concat(i("contributions"),": ").concat(a))))}),h=n(54),b=n(116),y=n(53),v=(n(123),l.a.memo((function(e){var t=e.location.pathname.replace(/^\//,""),n=Object(i.useState)(),r=Object(c.a)(n,2)[1],b=Object(u.c)(),v=Object(p.a)().t,g=Object(u.d)((function(e){return e.repoDetails}),u.b),E=g.name,O=g.stargazers_count,j=g.updated_at,_=g.language,x=g.description,k=g.owner,w=g.contributors,N=g.html_url,S=g.isFetchingContributors;return Object(i.useEffect)((function(){return Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(Object(y.b)(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),r((function(){throw e.t0}));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))(),function(){b(Object(y.c)())}}),[b,t]),l.a.createElement("div",{className:"repo-details__container"},0===Object.keys(g).length?l.a.createElement(h.a,{text:v("loading")}):l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"repo-details__link--main-page"},l.a.createElement(s.b,{to:f.h.MAIN},v("to_main_page"))),l.a.createElement(m.a,{name:E,stargazers_count:O,updated_at:j,html_url:N}),k&&l.a.createElement("div",{className:"repo-details__owner"},v("owner"),l.a.createElement(d,k),_&&l.a.createElement("span",{className:"repo-details__language"},_)),l.a.createElement("div",{className:"repo-details__description"},x),S&&l.a.createElement("h3",null,v("fetching_contributors")),w&&w.length>1&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"repo-details__header--contributors"},v("top_contributors")),l.a.createElement("ul",{className:"contributors__container"},w.slice(0,f.i).map((function(e){return l.a.createElement("li",{key:e.login},l.a.createElement(d,e))}))))))})));t.default=Object(b.a)(v)}}]);
//# sourceMappingURL=4.3173c65f.chunk.js.map