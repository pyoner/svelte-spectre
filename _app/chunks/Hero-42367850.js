import{S,i as j,s as y,_ as I,B as b,e as d,c as h,a as m,d as c,b as P,E as v,D as E,f as g,F as p,W as T,X as V,Y as q,p as B,x as C,u as F,J as H,L as J,t as k,k as L,g as D,n as W}from"./vendor-ff7ec535.js";/* empty css                                              */function X(r){let s,a,o,i,_;return{c(){s=d("h1"),a=k("Hero title"),o=L(),i=d("p"),_=k("This is a hero example")},l(l){s=h(l,"H1",{});var t=m(s);a=D(t,"Hero title"),t.forEach(c),o=W(l),i=h(l,"P",{});var f=m(i);_=D(f,"This is a hero example"),f.forEach(c)},m(l,t){g(l,s,t),p(s,a),g(l,o,t),g(l,i,t),p(i,_)},d(l){l&&c(s),l&&c(o),l&&c(i)}}}function Y(r){let s,a,o,i;const _=r[5].default,l=I(_,r,r[4],null),t=l||X();let f=[r[3],{class:o="hero "+(r[0]&&`hero-${r[0]}`)+" "+(r[1]&&`bg-${r[1]}`)}],u={};for(let e=0;e<f.length;e+=1)u=b(u,f[e]);return{c(){s=d("div"),a=d("div"),t&&t.c(),this.h()},l(e){s=h(e,"DIV",{class:!0});var n=m(s);a=h(n,"DIV",{class:!0});var z=m(a);t&&t.l(z),z.forEach(c),n.forEach(c),this.h()},h(){P(a,"class","hero-body svelte-sorgci"),v(a,"text-center",r[2]),E(s,u),v(s,"svelte-sorgci",!0)},m(e,n){g(e,s,n),p(s,a),t&&t.m(a,null),i=!0},p(e,[n]){l&&l.p&&(!i||n&16)&&T(l,_,e,e[4],i?q(_,e[4],n,null):V(e[4]),null),n&4&&v(a,"text-center",e[2]),E(s,u=B(f,[n&8&&e[3],(!i||n&3&&o!==(o="hero "+(e[0]&&`hero-${e[0]}`)+" "+(e[1]&&`bg-${e[1]}`)))&&{class:o}])),v(s,"svelte-sorgci",!0)},i(e){i||(C(t,e),i=!0)},o(e){F(t,e),i=!1},d(e){e&&c(s),t&&t.d(e)}}}function A(r,s,a){const o=["size","bg","center"];let i=H(s,o),{$$slots:_={},$$scope:l}=s,{size:t="xs"}=s,{bg:f=""}=s,{center:u=!1}=s;return r.$$set=e=>{s=b(b({},s),J(e)),a(3,i=H(s,o)),"size"in e&&a(0,t=e.size),"bg"in e&&a(1,f=e.bg),"center"in e&&a(2,u=e.center),"$$scope"in e&&a(4,l=e.$$scope)},[t,f,u,i,l,_]}class M extends S{constructor(s){super();j(this,s,A,Y,y,{size:0,bg:1,center:2})}}export{M as H};