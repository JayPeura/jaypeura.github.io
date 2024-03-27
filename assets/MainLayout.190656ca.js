import{c as $,a as s,h,b as O,u as U,d as K,w as y,i as W,e as L,r as x,o as D,f as G,g as R,l as E,p as I,j as J,k as X,n as Y,m as Z,q as ee,s as te,t as oe,v as ae,x as B,y as C,z as ne,A as le,_ as re,B as ie,C as se,D as ue,E as S,F as v,Q as j,G as ce}from"./index.7794ccd5.js";import{u as de,a as fe,b as ve,Q as F,c as he}from"./QTabs.e8db77c9.js";var me=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:f}){const n=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},O(f.default))}}),N=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const n=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},O(f.default))}}),P=$({name:"QRouteTab",props:{...U,...de},emits:fe,setup(e,{slots:f,emit:n}){const o=K({useDisableForRouterLinkProps:!1}),{renderTab:a,$tabs:i}=ve(e,f,n,{exact:s(()=>e.exact),...o});return y(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{i.verifyRouteModel()}),()=>a(o.linkTag.value,o.linkAttrs.value)}}),ge=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:n}){const{proxy:{$q:o}}=R(),a=W(E,L);if(a===L)return console.error("QHeader needs to be child of QLayout"),L;const i=x(parseInt(e.heightHint,10)),c=x(!0),p=s(()=>e.reveal===!0||a.view.value.indexOf("H")>-1||o.platform.is.ios&&a.isContainer.value===!0),g=s(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return c.value===!0?i.value:0;const t=i.value-a.scroll.value.position;return t>0?t:0}),u=s(()=>e.modelValue!==!0||p.value===!0&&c.value!==!0),T=s(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),_=s(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=s(()=>{const t=a.rows.value.top,m={};return t[0]==="l"&&a.left.space===!0&&(m[o.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),t[2]==="r"&&a.right.space===!0&&(m[o.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),m});function r(t,m){a.update("header",t,m)}function b(t,m){t.value!==m&&(t.value=m)}function H({height:t}){b(i,t),r("size",t)}function V(t){T.value===!0&&b(c,!0),n("focusin",t)}y(()=>e.modelValue,t=>{r("space",t),b(c,!0),a.animate()}),y(g,t=>{r("offset",t)}),y(()=>e.reveal,t=>{t===!1&&b(c,e.modelValue)}),y(c,t=>{a.animate(),n("reveal",t)}),y(a.scroll,t=>{e.reveal===!0&&b(c,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const q={};return a.instances.header=q,e.modelValue===!0&&r("size",i.value),r("space",e.modelValue),r("offset",g.value),D(()=>{a.instances.header===q&&(a.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const t=G(f.default,[]);return e.elevated===!0&&t.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(h(F,{debounce:0,onResize:H})),h("header",{class:_.value,style:w.value,onFocusin:V},t)}}}),be=$({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:n}}=R(),o=W(E,L);if(o===L)return console.error("QPageContainer needs to be child of QLayout"),L;I(J,!0);const a=s(()=>{const i={};return o.header.space===!0&&(i.paddingTop=`${o.header.size}px`),o.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(i.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),i});return()=>h("div",{class:"q-page-container",style:a.value},O(f.default))}});const{passive:A}=ee,pe=["both","horizontal","vertical"];var ye=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>pe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:f}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,a,i;y(()=>e.scrollTarget,()=>{g(),p()});function c(){o!==null&&o();const _=Math.max(0,te(a)),w=oe(a),r={top:_-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&r.top===0||e.axis==="horizontal"&&r.left===0)return;const b=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";n.position={top:_,left:w},n.directionChanged=n.direction!==b,n.delta=r,n.directionChanged===!0&&(n.direction=b,n.inflectionPoint=n.position),f("scroll",{...n})}function p(){a=Z(i,e.scrollTarget),a.addEventListener("scroll",u,A),u(!0)}function g(){a!==void 0&&(a.removeEventListener("scroll",u,A),a=void 0)}function u(_){if(_===!0||e.debounce===0||e.debounce==="0")c();else if(o===null){const[w,r]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];o=()=>{r(w),o=null}}}const{proxy:T}=R();return y(()=>T.$q.lang.rtl,c),X(()=>{i=T.$el.parentNode,p()}),D(()=>{o!==null&&o(),g()}),Object.assign(T,{trigger:u,getPosition:()=>n}),Y}}),_e=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:n}){const{proxy:{$q:o}}=R(),a=x(null),i=x(o.screen.height),c=x(e.container===!0?0:o.screen.width),p=x({position:0,direction:"down",inflectionPoint:0}),g=x(0),u=x(ae.value===!0?0:B()),T=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),_=s(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),w=s(()=>u.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),r=s(()=>u.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function b(l){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};p.value=d,e.onScroll!==void 0&&n("scroll",d)}}function H(l){const{height:d,width:z}=l;let Q=!1;i.value!==d&&(Q=!0,i.value=d,e.onScrollHeight!==void 0&&n("scrollHeight",d),q()),c.value!==z&&(Q=!0,c.value=z),Q===!0&&e.onResize!==void 0&&n("resize",l)}function V({height:l}){g.value!==l&&(g.value=l,q())}function q(){if(e.container===!0){const l=i.value>g.value?B():0;u.value!==l&&(u.value=l)}}let t=null;const m={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:a,height:i,containerHeight:g,scrollbarWidth:u,totalWidth:s(()=>c.value+u.value),rows:s(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:p,animate(){t!==null?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{t=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,d,z){m[l][d]=z}};if(I(E,m),B()>0){let z=function(){l=null,d.classList.remove("hide-scrollbar")},Q=function(){if(l===null){if(d.scrollHeight>o.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(z,300)},k=function(M){l!==null&&M==="remove"&&(clearTimeout(l),z()),window[`${M}EventListener`]("resize",Q)},l=null;const d=document.body;y(()=>e.container!==!0?"add":"remove",k),e.container!==!0&&k("add"),ne(()=>{k("remove")})}return()=>{const l=le(f.default,[h(ye,{onScroll:b}),h(F,{onResize:H})]),d=h("div",{class:T.value,style:_.value,ref:e.container===!0?void 0:a,tabindex:-1},l);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:a},[h(F,{onResize:V}),h("div",{class:"absolute-full",style:w.value},[h("div",{class:"scroll",style:r.value},[d])])]):d}}});const we={};function xe(e,f){const n=ie("router-view");return se(),ue(_e,{view:"lHh Lpr lFf"},{default:S(()=>[v(ge,{elevated:""},{default:S(()=>[v(N,{class:"column items-center"},{default:S(()=>[v(me,null,{default:S(()=>[v(j,{name:"star_outline"}),ce(" Jay Peura "),v(j,{name:"star_outline"})]),_:1})]),_:1}),v(N,{class:"justify-center"},{default:S(()=>[v(he,{noCaps:""},{default:S(()=>[v(P,{icon:"home",label:"Home",to:"/"}),v(P,{icon:"person",label:"About",to:"/about"}),v(P,{icon:"phone",label:"Contact",to:"/contact"}),v(P,{icon:"folder",label:"Projects",to:"/projects"})]),_:1})]),_:1})]),_:1}),v(be,null,{default:S(()=>[v(n)]),_:1})]),_:1})}var Se=re(we,[["render",xe],["__scopeId","data-v-7dc73828"]]);export{Se as default};
