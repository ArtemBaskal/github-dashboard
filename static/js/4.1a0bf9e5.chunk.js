(this["webpackJsonpgithub-dashboard"]=this["webpackJsonpgithub-dashboard"]||[]).push([[4],{106:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(24),o=a(105),i=a(3);a(108);t.a=function(){var e=Object(o.a)().t;return n.a.createElement(c.b,{to:i.k.MAIN,className:"link__main-page"},e("to_main_page"))}},107:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(105),o=a(106);a(109);t.a=function(e){var t=e.message,a=Object(c.a)().t;return n.a.createElement("div",{className:"error-message__container"},n.a.createElement("h1",{className:"error-message__header"},a("error"),": \xa0",a(t)),n.a.createElement(o.a,null))}},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(24),o=a(105),i=a(18),l=a(25);a(111);t.a=function(e){var t=e.id,a=e.name,r=e.stargazers_count,s=e.updated_at,u=e.html_url,m=Object(o.a)().t,f=Object(i.d)((function(e){return e.i18n.currentLocale}));return n.a.createElement("main",{className:"repo-card__container"},n.a.createElement("div",{className:"repo-card"},n.a.createElement("h3",{className:"repo-card__name--title"},t?n.a.createElement(c.b,{to:t.toString(),className:"repo-card__name","aria-label":a},a):a),void 0!==r&&r>=0&&n.a.createElement("div",{className:"repo-card__point"},n.a.createElement("span",{className:"icon--purple"},"\u2605"),"\xa0",r),s&&n.a.createElement("span",{className:"repo-card__point repo-card__point--last-edited"},"".concat(m("last_update"),":"),"".concat(Object(l.a)(s,f))),u&&n.a.createElement("div",{className:"repo-card__point"},n.a.createElement("a",{href:u,className:"repo-card__name repo-card__name--link","aria-label":m("repo")},n.a.createElement("svg",{className:"repo-card__image--octocat"},n.a.createElement("image",{href:"".concat("/github-dashboard","/octocat.svg"),width:"17",height:"17"})),u))),n.a.createElement("br",null))}},111:function(e,t,a){},112:function(e,t,a){"use strict";var r=a(0),n=a.n(r);function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var m=a(14),f=a(107),p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(_,e);var t,a,r,s,p=(t=_,function(){var e,a=i(t);if(l()){var r=i(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return u(this,e)});function _(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),(t=p.call(this,e)).state={error:null},t}return a=_,s=[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}],(r=[{key:"componentDidCatch",value:function(e){m.a.error(e)}},{key:"render",value:function(){var e=this.state.error,t=this.props.children;return e?n.a.createElement(f.a,{message:e}):t}}])&&c(a.prototype,r),s&&c(a,s),_}(r.Component);t.a=function(e){return Object(r.forwardRef)((function(t,a){return n.a.createElement(p,null,n.a.createElement(e,Object.assign({},t,{ref:a})))}))}},118:function(e,t,a){},119:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a.n(r),c=a(15),o=a(39),i=a(0),l=a.n(i),s=a(18),u=a(105),m=a(3),f=a(110),p=(a(118),function(e){var t=e.avatar_url,a=e.html_url,r=e.login,n=e.contributions,c=Object(u.a)(),i=Object(o.a)(c,1)[0];return l.a.createElement("figcaption",{className:"profile__container"},l.a.createElement("a",{href:a},l.a.createElement("img",{src:t,alt:r,loading:"lazy",className:"profile__avatar"}),l.a.createElement("figure",{className:"profile__login"},r),n&&l.a.createElement("strong",{className:"profile__contributions"},"".concat(i("contributions"),":"),"\xa0","".concat(n))))}),_=a(53),b=a(106),d=a(112),h=a(52),E=(a(119),l.a.memo((function(e){var t=e.location.pathname.replace(/^\//,""),a=Object(i.useState)(),r=Object(o.a)(a,2)[1],d=Object(s.c)(),E=Object(u.a)().t,g=Object(s.d)((function(e){return e.repoDetails}),s.b),v=g.name,y=g.stargazers_count,O=g.updated_at,j=g.language,N=g.description,w=g.owner,k=g.contributors,S=g.html_url,R=g.isFetchingContributors;return Object(i.useEffect)((function(){return Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(Object(h.b)(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),r((function(){throw e.t0}));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))(),function(){d(Object(h.c)())}}),[d,t]),l.a.createElement("div",{className:"repo-details__container"},0===Object.keys(g).length?l.a.createElement(_.a,{text:E("loading")}):l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null),l.a.createElement(f.a,{name:v,stargazers_count:y,updated_at:O,html_url:S}),w&&l.a.createElement("section",{className:"repo-details__owner"},l.a.createElement("h3",{className:"repo-details__owner--header"},E("owner")),l.a.createElement(p,w),j&&l.a.createElement("span",{className:"repo-details__language"},j)),R?l.a.createElement("h3",null,E("fetching_contributors")):l.a.createElement("p",{className:"repo-details__description"},N),!R&&k&&k.length>1&&l.a.createElement("article",null,l.a.createElement("h3",{className:"repo-details__header--contributors"},E("top_contributors")),l.a.createElement("ul",{className:"contributors__container"},k.slice(0,m.l).map((function(e){return l.a.createElement("li",{key:e.login},l.a.createElement(p,e))}))))))})));t.default=Object(d.a)(E)}}]);
//# sourceMappingURL=4.1a0bf9e5.chunk.js.map