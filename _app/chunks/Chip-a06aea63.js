import{S as V,i as W,s as X,w as Y,x as j,y as F,q as v,o as b,B as J,_ as O,e as S,c as T,a as U,d as g,b as p,g as G,U as K,E as L,C as k,k as q,m as C,G as E,H as d,I as z,n as Q,p as R,W as H,X as M,Y as N,z as Z,M as A,a7 as y,O as w}from"./index-da373a61.js";import{A as x}from"./Avatar-7fd8b49e.js";/* empty css                                              */const $=i=>({}),B=i=>({});function D(i){let e,l;return e=new x({props:{size:"sm",name:i[1],status:i[2],$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){Y(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,t){F(e,a,t),l=!0},p(a,t){const o={};t&2&&(o.name=a[1]),t&4&&(o.status=a[2]),t&1024&&(o.$$scope={dirty:t,ctx:a}),e.$set(o)},i(a){l||(v(e.$$.fragment,a),l=!0)},o(a){b(e.$$.fragment,a),l=!1},d(a){J(e,a)}}}function ee(i){let e;const l=i[8].avatar,a=O(l,i,i[10],B);return{c(){a&&a.c()},l(t){a&&a.l(t)},m(t,o){a&&a.m(t,o),e=!0},p(t,o){a&&a.p&&(!e||o&1024)&&H(a,l,t,t[10],e?N(l,t[10],o,$):M(t[10]),B)},i(t){e||(v(a,t),e=!0)},o(t){b(a,t),e=!1},d(t){a&&a.d(t)}}}function I(i){let e,l,a;return{c(){e=S("button"),this.h()},l(t){e=T(t,"BUTTON",{class:!0,"aria-label":!0}),U(e).forEach(g),this.h()},h(){p(e,"class","btn btn-clear mr--1 svelte-1lq3bpr"),p(e,"aria-label","Close")},m(t,o){G(t,e,o),l||(a=K(e,"click",i[9]),l=!0)},p:L,d(t){t&&g(e),l=!1,a()}}}function ae(i){let e,l,a,t,o,n=i[0]&&D(i);const m=i[8].default,r=O(m,i,i[10],null);let c=i[5]&&I(i),h=[i[7],{class:t="chip bg-"+i[3]}],_={};for(let s=0;s<h.length;s+=1)_=k(_,h[s]);return{c(){e=S("div"),n&&n.c(),l=q(),r&&r.c(),a=q(),c&&c.c(),this.h()},l(s){e=T(s,"DIV",{class:!0});var f=U(e);n&&n.l(f),l=C(f),r&&r.l(f),a=C(f),c&&c.l(f),f.forEach(g),this.h()},h(){E(e,_),d(e,"active",i[4]),d(e,"svelte-1lq3bpr",!0)},m(s,f){G(s,e,f),n&&n.m(e,null),z(e,l),r&&r.m(e,null),z(e,a),c&&c.m(e,null),o=!0},p(s,[f]){s[0]?n?(n.p(s,f),f&1&&v(n,1)):(n=D(s),n.c(),v(n,1),n.m(e,l)):n&&(Q(),b(n,1,1,()=>{n=null}),R()),r&&r.p&&(!o||f&1024)&&H(r,m,s,s[10],o?N(m,s[10],f,null):M(s[10]),null),s[5]?c?c.p(s,f):(c=I(s),c.c(),c.m(e,null)):c&&(c.d(1),c=null),E(e,_=Z(h,[f&128&&s[7],(!o||f&8&&t!==(t="chip bg-"+s[3]))&&{class:t}])),d(e,"active",s[4]),d(e,"svelte-1lq3bpr",!0)},i(s){o||(v(n),v(r,s),o=!0)},o(s){b(n),b(r,s),o=!1},d(s){s&&g(e),n&&n.d(),r&&r.d(s),c&&c.d()}}}function te(i,e,l){const a=["avatar","name","status","color","active","closable"];let t=A(e,a),{$$slots:o={},$$scope:n}=e;const m=y();let{avatar:r=!1}=e,{name:c=""}=e,{status:h=null}=e,{color:_=null}=e,{active:s=!1}=e,{closable:f=!1}=e;const P=()=>m("close","chip close");return i.$$set=u=>{e=k(k({},e),w(u)),l(7,t=A(e,a)),"avatar"in u&&l(0,r=u.avatar),"name"in u&&l(1,c=u.name),"status"in u&&l(2,h=u.status),"color"in u&&l(3,_=u.color),"active"in u&&l(4,s=u.active),"closable"in u&&l(5,f=u.closable),"$$scope"in u&&l(10,n=u.$$scope)},[r,c,h,_,s,f,m,t,o,P,n]}class ne extends V{constructor(e){super();W(this,e,te,ae,X,{avatar:0,name:1,status:2,color:3,active:4,closable:5})}}export{ne as C};
