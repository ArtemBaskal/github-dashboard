(this["webpackJsonpgithub-dashboard"]=this["webpackJsonpgithub-dashboard"]||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){},103:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(28),o=r.n(c),u=r(18),i=r(6),s=r(13),l=r(43),f=r(26),p=r(52),d=r(53),g=r(31),h=Object(s.c)({repos:l.a,pages:f.a,search:p.a,repoDetails:d.a,i18n:g.a});var b=Object(i.a)({reducer:h});r(91),r(19);!function(){var e=r(104).default;o.a.render(a.a.createElement(u.a,{store:b},a.a.createElement(e,null)),document.getElementById("root"))}()},104:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(39),o=r(2),u=r(3),i=r(40),s=r(105),l=r(19),f=r(18),p=r(31),d=(r(92),function(){var e=Object(s.a)().t,t=Object(f.c)(),r=Object(f.d)((function(e){return e.i18n.currentLocale}));return a.a.createElement("div",{className:"language-selector"},a.a.createElement("label",{htmlFor:"language-select"},e("language")),a.a.createElement("select",{value:r,onChange:function(e){var r=e.target.value;l.a.changeLanguage(r),t(Object(p.b)(r))},className:"select select--language",id:"language-select"},Object.entries(u.f).map((function(e){var t=Object(i.a)(e,2),r=t[0],n=t[1],c=n.name,o=n.emojiFlag;return a.a.createElement("option",{key:c,value:r},o,"\xa0",c)}))))}),g=(r(98),function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"footer__year"},a.a.createElement("a",{className:"icon--purple",href:u.g},"\xa9"),"\xa0",a.a.createElement("time",null,(new Date).getFullYear())),a.a.createElement(d,null))}),h=r(54),b=(r(100),r(101),Object(n.lazy)((function(){return r.e(3).then(r.bind(null,125))}))),m=Object(n.lazy)((function(){return r.e(5).then(r.bind(null,124))})),v=Object(n.lazy)((function(){return r.e(4).then(r.bind(null,126))}));t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement(c.a,null,a.a.createElement(n.Suspense,{fallback:a.a.createElement(h.a,null)},a.a.createElement(o.c,null,a.a.createElement(o.a,{path:u.i.MAIN,exact:!0,component:b}),a.a.createElement(o.a,{path:u.i.REPO_CARD,exact:!0,component:v}),a.a.createElement(o.a,{path:u.i.NOT_FOUND,component:m}))))),a.a.createElement(g,null))}},14:function(e,t,r){"use strict";var n,a,c=r(62);!function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.DEBUG=2]="DEBUG"}(n||(n={})),function(e){e.ERROR="error",e.WARN="warn",e.DEBUG="debug"}(a||(a={}));var o=function(e,t,r){var a;if(!(n.DEBUG<n[e])&&r&&0!==r.length&&r[0]){var o=new Date,u="".concat(o.toISOString(),":");(a=console)[t].apply(a,[u].concat(Object(c.a)(r)))}},u={debug:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o("DEBUG",a.DEBUG,t)},warn:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o("WARN",a.WARN,t)},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o("ERROR",a.ERROR,t)}};t.a=u},19:function(e,t,r){"use strict";var n=r(36),a=r(17),c=r(56),o=r(3),u=r(57),i=r(58),s={en:{translation:i},ru:{translation:u}};n.a.use(c.a).use(a.e).init({resources:s,fallbackLng:o.a,keySeparator:!1,interpolation:{escapeValue:!1}}),t.a=n.a},22:function(e,t,r){"use strict";r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return d}));var n=r(37),a=r(7),c=r.n(a),o=r(15),u=r(24),i=r.n(u),s=r(3),l=r(14),f=function(){var e=Object(o.a)(c.a.mark((function e(t,r){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={params:{q:t,page:r,sort:"stars",order:"desc",per_page:s.h},headers:{}},e.next=4,i.a.get("https://api.github.com/search/repositories",n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e.catch(0),l.a.error(e.t0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat("https://api.github.com/repositories","/").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),l.a.error(e.t0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),l.a.error(e.t0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();i.a.interceptors.request.use((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=r(90),a=t.GITHUB_OAUTH_TOKEN;if(!a)throw new Error("No Access Token provided. Read the README Access token section for more details: https");e.headers=Object(n.a)(Object(n.a)({},e.headers),{},{Authorization:"token ".concat(a)})}catch(c){l.a.error(c),l.a.error("Read the README Access token section for more details: https://github.com/ArtemBaskal/github-dashboard#access-token")}finally{return e}}))},25:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return u}));var n=r(3),a=r(14),c=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.h,a=Math.floor(r/2),c=e>a?e-a:0,o=c+r,u=o<t?o:t,i=u>r?u-n.h:u,s=c<i?c:i,l=[],f=s;f<u;f+=1)l.push(f+1);return l},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.language,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.b;return new Date(e).toLocaleString(t,r)},u=function(e,t){try{return sessionStorage[e]=t,t}catch(r){return a.a.error(r),a.a.error("The limit of sessionStorage is exceeded and it will be cleared."),localStorage.clear(),sessionStorage[e]=t,t}}},26:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l}));var n=r(6),a=r(3),c=r(25),o={totalPages:1,currentPage:parseInt(sessionStorage.currentPage,10)||1},u=Object(n.b)({name:"pages",initialState:o,reducers:{setCurrentPage:function(e,t){return e.currentPage=t.payload,Object(c.c)("currentPage",e.currentPage.toString()),e},setTotalPages:function(e,t){var r=t.payload;return e.totalPages=Math.ceil(r/a.h),e}}}),i=u.actions,s=i.setCurrentPage,l=i.setTotalPages;t.a=u.reducer},3:function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"h",(function(){return a})),r.d(t,"j",(function(){return c})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return i})),r.d(t,"i",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return p}));var n=500,a=10,c=10,o=1,u="stars:>100000",i={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1},s={MAIN:"/",REPO_CARD:"/:id",NOT_FOUND:"*"},l="ru",f={en:{name:"English",emojiFlag:"\ud83c\uddec\ud83c\udde7"},ru:{name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",emojiFlag:"\ud83c\uddf7\ud83c\uddfa"}},p="https://github.com/ArtemBaskal/github-dashboard"},31:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(6),a={currentLocale:r(19).a.language},c=Object(n.b)({name:"i18n",initialState:a,reducers:{setCurrentLocale:function(e,t){return e.currentLocale=t.payload,e}}}),o=c.actions.setCurrentLocale;t.a=c.reducer},43:function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));var n=r(7),a=r.n(n),c=r(15),o=r(6),u=r(22),i=r(26),s=Object(o.b)({name:"repos",initialState:[],reducers:{fetchRepos:function(e,t){return t.payload}}}),l=function(e,t){return function(){var r=Object(c.a)(a.a.mark((function r(n){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.c)(e,t);case 2:if("string"!==typeof(c=r.sent)){r.next=5;break}throw c;case 5:n(s.actions.fetchRepos(c.items)),n(Object(i.c)(c.total_count));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()};t.a=s.reducer},52:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s}));var n=r(6),a=r(25),c={isSearching:!1,searchTerm:sessionStorage.searchTerm||""},o=Object(n.b)({name:"search",initialState:c,reducers:{setIsSearching:function(e,t){return e.isSearching=t.payload,e},setSearchTerm:function(e,t){return e.searchTerm=t.payload,Object(a.c)("searchTerm",e.searchTerm),e}}}),u=o.actions,i=u.setIsSearching,s=u.setSearchTerm;t.a=o.reducer},53:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(7),a=r.n(n),c=r(15),o=r(6),u=r(22),i={isFetchingContributors:!0},s=Object(o.b)({name:"repoDetails",initialState:i,reducers:{getRepoDetails:function(e,t){var r=t.payload;return{id:r.id,name:r.name,stargazers_count:r.stargazers_count,updated_at:r.updated_at,language:r.language,description:r.description,owner:r.owner,contributors:r.contributors,html_url:r.html_url}},getRepoContributors:function(e,t){return e.contributors=t.payload,e.isFetchingContributors=!1,e},resetRepoDetails:function(e){return i}}}),l=s.actions.resetRepoDetails,f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.b)(e);case 2:if("string"!==typeof(n=t.sent)){t.next=7;break}throw n;case 7:r(s.actions.getRepoDetails(n));case 8:return t.next=10,Object(u.a)(n.contributors_url);case 10:if("string"!==typeof(c=t.sent)){t.next=15;break}throw c;case 15:r(s.actions.getRepoContributors(c));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=s.reducer},54:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(105);r(99);t.a=function(e){var t=e.text,r=Object(c.a)().t;return a.a.createElement("h4",{className:"loader__text"},t||r("loading"))}},57:function(e){e.exports=JSON.parse('{"repo_search":"\u041f\u043e\u0438\u0441\u043a \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f","repo":"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439","language":"\u042f\u0437\u044b\u043a","to_main_page":"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","page_is_not_found":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","last_update":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435","previous":"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f","next":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f","search":"\u041f\u043e\u0438\u0441\u043a...","owner":"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446","top_contributors":"\u0422\u043e\u043f \u043a\u043e\u043d\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u0435\u0440\u043e\u0432","nothing_is_found":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","contributions":"\u041b\u0438\u0447\u043d\u044b\u0439 \u0432\u043a\u043b\u0430\u0434","loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","repos_found_approximately":"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432: \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e","error":"\u041e\u0448\u0438\u0431\u043a\u0430","fetching_contributors":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u0435\u0440\u043e\u0432..."}')},58:function(e){e.exports=JSON.parse('{"repo_search":"Repository search","repo":"Repository","language":"Language","to_main_page":"To the main page","page_is_not_found":"Page is not found","last_update":"Last update","previous":"Previous","next":"Next","search":"Searching...","owner":"Owner","top_contributors":"Top contributors","nothing_is_found":"Nothing is found","contributions":"Contributions","loading":"Loading...","repos_found_approximately":"Repos found: approximately","error":"Error","fetching_contributors":"Fetching contributors..."}')},63:function(e,t,r){e.exports=r(103)},90:function(e){e.exports=JSON.parse('{"GITHUB_OAUTH_TOKEN":"0828981761075418fe4ca7fdd494909cea4ff24c"}')},91:function(e,t,r){},92:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[63,1,2]]]);
//# sourceMappingURL=main.e352e27e.chunk.js.map