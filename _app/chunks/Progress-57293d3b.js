import{S as _,i as d,s as P,C as u,e as S,c as x,a as E,d as v,G as c,H as n,g as j,z as C,E as f,M as h,O as G}from"./index-da373a61.js";/* empty css                                              */function O(a){let e,t,i=[a[4],{class:t="progress "+(a[0]&&`text-${a[0]}`)},{value:a[2]},{max:a[3]}],o={};for(let s=0;s<i.length;s+=1)o=u(o,i[s]);return{c(){e=S("progress"),this.h()},l(s){e=x(s,"PROGRESS",{class:!0,max:!0}),E(e).forEach(v),this.h()},h(){c(e,o),n(e,"progress-invert",a[1]),n(e,"svelte-vg9jsd",!0)},m(s,r){j(s,e,r)},p(s,[r]){c(e,o=C(i,[r&16&&s[4],r&1&&t!==(t="progress "+(s[0]&&`text-${s[0]}`))&&{class:t},r&4&&{value:s[2]},r&8&&{max:s[3]}])),n(e,"progress-invert",s[1]),n(e,"svelte-vg9jsd",!0)},i:f,o:f,d(s){s&&v(e)}}}function R(a,e,t){const i=["color","invert","value","max"];let o=h(e,i),{color:s="light"}=e,{invert:r=!1}=e,{value:g}=e,{max:m=0}=e;return a.$$set=l=>{e=u(u({},e),G(l)),t(4,o=h(e,i)),"color"in l&&t(0,s=l.color),"invert"in l&&t(1,r=l.invert),"value"in l&&t(2,g=l.value),"max"in l&&t(3,m=l.max)},[s,r,g,m,o]}class z extends _{constructor(e){super();d(this,e,R,O,P,{color:0,invert:1,value:2,max:3})}}export{z as P};
