(this["webpackJsonpgithub-dashboard"]=this["webpackJsonpgithub-dashboard"]||[]).push([[4],{106:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(24),o=a(105),i=a(2),l=(a(108),Object(n.memo)((function(){var e=Object(o.a)().t;return r.a.createElement(c.b,{to:i.k.MAIN,className:"link__main-page"},e("to_main_page"))})));t.a=l},107:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(105),o=a(106),i=(a(109),Object(n.memo)((function(e){var t=e.message,a=Object(c.a)().t;return r.a.createElement("div",{className:"error-message__container"},r.a.createElement("h1",{className:"error-message__header"},a("error"),": \xa0",a(t)),r.a.createElement(o.a,null))})));t.a=i},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(24),o=a(105),i=a(20),l=a(25),s=(a(111),Object(n.memo)((function(e){var t=e.id,a=e.name,n=e.stargazers_count,s=e.updated_at,u=e.html_url,m=Object(o.a)().t,f=Object(i.d)((function(e){return e.i18n.currentLocale}));return r.a.createElement("main",{className:"repo-card__container"},r.a.createElement("div",{className:"repo-card"},r.a.createElement("h3",{className:"repo-card__name--title"},t?r.a.createElement(c.b,{to:t.toString(),className:"repo-card__name","aria-label":a},a):a),void 0!==n&&n>=0&&r.a.createElement("div",{className:"repo-card__point"},r.a.createElement("span",{className:"icon--purple"},"\u2605"),"\xa0",n.toLocaleString(f)),s&&r.a.createElement("span",{className:"repo-card__point repo-card__point--last-edited"},"".concat(m("last_update"),":"),"\xa0","".concat(Object(l.a)(s,f))),u&&r.a.createElement("div",{className:"repo-card__point"},r.a.createElement("a",{href:u,className:"repo-card__name repo-card__name--link","aria-label":m("repo")},r.a.createElement("svg",{className:"repo-card__image--octocat"},r.a.createElement("image",{href:"".concat("/github-dashboard","/octocat.svg"),width:"17",height:"17"})),u))),r.a.createElement("br",null))}),i.b));t.a=s},111:function(e,t,a){},112:function(e,t,a){"use strict";var n=a(0),r=a.n(n);function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var m=a(14),f=a(107),p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(b,e);var t,a,n,s,p=(t=b,function(){var e,a=i(t);if(l()){var n=i(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return u(this,e)});function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=p.call(this,e)).state={error:null},t}return a=b,s=[{key:"getDerivedStateFromError",value:function(e){return sessionStorage.clear(),{error:e}}}],(n=[{key:"componentDidCatch",value:function(e){m.a.error(e)}},{key:"render",value:function(){var e=this.state.error,t=this.props.children;return e?r.a.createElement(f.a,{message:e}):t}}])&&c(a.prototype,n),s&&c(a,s),b}(n.Component);t.a=function(e){return Object(n.forwardRef)((function(t,a){return r.a.createElement(p,null,r.a.createElement(e,Object.assign({},t,{ref:a})))}))}},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(15),o=a(26),i=a(0),l=a.n(i),s=a(20),u=a(105),m=a(110),f=(a(118),Object(i.memo)((function(e){var t=e.avatar_url,a=e.html_url,n=e.login,r=e.contributions,c=Object(u.a)().t;return l.a.createElement("figcaption",{className:"profile__container"},l.a.createElement("a",{href:a},l.a.createElement("img",{src:t,alt:n,className:"profile__avatar"}),l.a.createElement("figure",{className:"profile__login"},n),r&&l.a.createElement("strong",{className:"profile__contributions"},"".concat(c("contributions"),":"),"\xa0","".concat(r))))}),s.b)),p=a(53),b=a(106),_=(a(119),Object(i.memo)((function(e){var t=e.tags;return l.a.createElement("section",{className:"tags__container"},t?t.map((function(e){return l.a.createElement("h6",{key:e,className:"tag",title:e},e)})):null)}),s.b)),d=a(112),h=a(52),g=(a(120),Object(i.memo)((function(e){var t=e.location.pathname.replace(/^\//,""),a=Object(s.c)(),n=Object(u.a)().t,d=Object(i.useState)(),g=Object(o.a)(d,2)[1],E=Object(s.d)((function(e){return e.repoDetails}),s.b),v=E.name,y=E.stargazers_count,O=E.updated_at,j=E.languages,N=E.description,w=E.owner,k=E.contributors,S=E.html_url,R=E.isFetchingContributors,x=E.isFetchingLanguages;return Object(i.useEffect)((function(){return Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(Object(h.b)(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),g((function(){throw e.t0}));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))(),function(){a(Object(h.c)())}}),[t]),l.a.createElement("div",{className:"repo-details__container"},0===Object.keys(E).length?l.a.createElement(p.a,{text:n("loading")}):l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null),l.a.createElement(m.a,{name:v,stargazers_count:y,updated_at:O,html_url:S}),l.a.createElement("section",{className:"repo-details__owner"},l.a.createElement("h3",{className:"repo-details__owner--header"},n("owner")),l.a.createElement(f,w),x?l.a.createElement("h3",null,n("fetching")):l.a.createElement(_,{tags:j}),l.a.createElement("p",{className:"repo-details__description"},N)),R?l.a.createElement("h3",null,n("fetching")):k&&k.length>1&&l.a.createElement("section",null,l.a.createElement("h3",{className:"repo-details__header--contributors"},n("top_contributors")),l.a.createElement("ul",{className:"contributors__container"},k.map((function(e){return l.a.createElement("li",{key:e.login},l.a.createElement(f,e))}))))))}),s.b));t.default=Object(d.a)(g)}}]);
//# sourceMappingURL=4.5d1e9b04.chunk.js.map