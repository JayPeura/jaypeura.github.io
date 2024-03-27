import{u as _e,a as xe,b as Se,c as ke}from"./QTabs.f6818144.js";import{c as B,a7 as we,a4 as Ce,a8 as M,n as Pe,a9 as qe,aa as N,ab as R,ac as le,J as j,ad as G,r as C,a as g,w as Te,g as me,O as Ie,h as _,a2 as Ae,ae as Qe,b as F,af as Ve,ag as Me,ah as Be,Q as De,ai as Ee,aj as Le,ak as Ne,al as ze,i as $e,am as Fe,C as P,D as z,E as l,V as u,F as n,G as m,an as K,ao as O,ap as U,aq as Je,ar as Re,as as je,X as oe,Y as $,I as ie,Z as se,$ as re,at as T}from"./index.2db755c4.js";import{Q as H,a as W,b as I}from"./QList.d004820d.js";import{a as ue,Q as de,C as ce}from"./ClosePopup.604c74ad.js";import{Q as Ge}from"./QPage.19f1ac6d.js";var k=B({name:"QTab",props:_e,emits:xe,setup(e,{slots:t,emit:r}){const{renderTab:c}=Se(e,t,r);return()=>c("div")}});const Y={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ke=Object.keys(Y);Y.all=!0;function ve(e){const t={};for(const r of Ke)e[r]===!0&&(t[r]=!0);return Object.keys(t).length===0?Y:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Oe=["INPUT","TEXTAREA"];function pe(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Oe.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Ue(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),we.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function He(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,c)=>{const d=parseFloat(r);d&&(t[c]=d)}),t}var We=Ce({name:"touch-swipe",beforeMount(e,{value:t,arg:r,modifiers:c}){if(c.mouse!==!0&&M.has.touch!==!0)return;const d=c.mouseCapture===!0?"Capture":"",a={handler:t,sensitivity:He(r),direction:ve(c),noop:Pe,mouseStart(i){pe(i,a)&&qe(i)&&(N(a,"temp",[[document,"mousemove","move",`notPassive${d}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(i,!0))},touchStart(i){if(pe(i,a)){const f=i.target;N(a,"temp",[[f,"touchmove","move","notPassiveCapture"],[f,"touchcancel","end","notPassiveCapture"],[f,"touchend","end","notPassiveCapture"]]),a.start(i)}},start(i,f){M.is.firefox===!0&&R(e,!0);const y=le(i);a.event={x:y.left,y:y.top,time:Date.now(),mouse:f===!0,dir:!1}},move(i){if(a.event===void 0)return;if(a.event.dir!==!1){j(i);return}const f=Date.now()-a.event.time;if(f===0)return;const y=le(i),v=y.left-a.event.x,o=Math.abs(v),b=y.top-a.event.y,h=Math.abs(b);if(a.event.mouse!==!0){if(o<a.sensitivity[1]&&h<a.sensitivity[1]){a.end(i);return}}else if(window.getSelection().toString()!==""){a.end(i);return}else if(o<a.sensitivity[2]&&h<a.sensitivity[2])return;const S=o/f,q=h/f;a.direction.vertical===!0&&o<h&&o<100&&q>a.sensitivity[0]&&(a.event.dir=b<0?"up":"down"),a.direction.horizontal===!0&&o>h&&h<100&&S>a.sensitivity[0]&&(a.event.dir=v<0?"left":"right"),a.direction.up===!0&&o<h&&b<0&&o<100&&q>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&o<h&&b>0&&o<100&&q>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&o>h&&v<0&&h<100&&S>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&o>h&&v>0&&h<100&&S>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(j(i),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ue(),a.styleCleanup=D=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const Q=()=>{document.body.classList.remove("no-pointer-events--children")};D===!0?setTimeout(Q,50):Q()}),a.handler({evt:i,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:f,distance:{x:o,y:h}})):a.end(i)},end(i){a.event!==void 0&&(G(a,"temp"),M.is.firefox===!0&&R(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),i!==void 0&&a.event.dir!==!1&&j(i),a.event=void 0)}};if(e.__qtouchswipe=a,c.mouse===!0){const i=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";N(a,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}M.has.touch===!0&&N(a,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const r=e.__qtouchswipe;r!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&r.end(),r.handler=t.value),r.direction=ve(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(G(t,"main"),G(t,"temp"),M.is.firefox===!0&&R(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Xe(){const e=new Map;return{getCache:function(t,r){return e[t]===void 0?e[t]=r:e[t]},getCacheWithFn:function(t,r){return e[t]===void 0?e[t]=r():e[t]}}}const Ye={name:{required:!0},disable:Boolean},fe={setup(e,{slots:t}){return()=>_("div",{class:"q-panel scroll",role:"tabpanel"},F(t.default))}},Ze={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},et=["update:modelValue","beforeTransition","transition"];function tt(){const{props:e,emit:t,proxy:r}=me(),{getCacheWithFn:c}=Xe();let d,a;const i=C(null),f=C(null);function y(s){const p=e.vertical===!0?"up":"left";V((r.$q.lang.rtl===!0?-1:1)*(s.direction===p?1:-1))}const v=g(()=>[[We,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),o=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),h=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),S=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),D=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Te(()=>e.modelValue,(s,p)=>{const x=E(s)===!0?J(s):-1;a!==!0&&te(x===-1?0:x<J(p)?-1:1),i.value!==x&&(i.value=x,t("beforeTransition",s,p),Ie(()=>{t("transition",s,p)}))});function Q(){V(1)}function Z(){V(-1)}function ee(s){t("update:modelValue",s)}function E(s){return s!=null&&s!==""}function J(s){return d.findIndex(p=>p.props.name===s&&p.props.disable!==""&&p.props.disable!==!0)}function he(){return d.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function te(s){const p=s!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(s===-1?o.value:b.value):null;f.value!==p&&(f.value=p)}function V(s,p=i.value){let x=p+s;for(;x>-1&&x<d.length;){const L=d[x];if(L!==void 0&&L.props.disable!==""&&L.props.disable!==!0){te(s),a=!0,t("update:modelValue",L.props.name),setTimeout(()=>{a=!1});return}x+=s}e.infinite===!0&&d.length!==0&&p!==-1&&p!==d.length&&V(s,s===-1?d.length:-1)}function ae(){const s=J(e.modelValue);return i.value!==s&&(i.value=s),!0}function ne(){const s=E(e.modelValue)===!0&&ae()&&d[i.value];return e.keepAlive===!0?[_(Ve,q.value,[_(D.value===!0?c(S.value,()=>({...fe,name:S.value})):fe,{key:S.value,style:h.value},()=>s)])]:[_("div",{class:"q-panel scroll",style:h.value,key:S.value,role:"tabpanel"},[s])]}function ge(){if(d.length!==0)return e.animated===!0?[_(Ae,{name:f.value},ne)]:ne()}function be(s){return d=Qe(F(s.default,[])).filter(p=>p.props!==null&&p.props.slot===void 0&&E(p.props.name)===!0),d.length}function ye(){return d}return Object.assign(r,{next:Q,previous:Z,goTo:ee}),{panelIndex:i,panelDirectives:v,updatePanelsList:be,updatePanelIndex:ae,getPanelContent:ge,getEnabledPanels:he,getPanels:ye,isValidPanelName:E,keepAliveProps:q,needsUniqueKeepAliveWrapper:D,goToPanelByOffset:V,goToPanel:ee,nextPanel:Q,previousPanel:Z}}var w=B({name:"QTabPanel",props:Ye,setup(e,{slots:t}){return()=>_("div",{class:"q-tab-panel",role:"tabpanel"},F(t.default))}}),X=B({name:"QAvatar",props:{...Me,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const r=Be(e),c=g(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),d=g(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const a=e.icon!==void 0?[_(De,{name:e.icon})]:void 0;return _("div",{class:c.value,style:r.value},[_("div",{class:"q-avatar__content row flex-center overflow-hidden",style:d.value},Ee(t.default,a))])}}}),A=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const r=g(()=>parseInt(e.lines,10)),c=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(r.value===1?" ellipsis":"")),d=g(()=>e.lines!==void 0&&r.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":r.value}:null);return()=>_("div",{style:d.value,class:c.value},F(t.default))}}),at=B({name:"QTabPanels",props:{...Ze,...Le},emits:et,setup(e,{slots:t}){const r=me(),c=Ne(e,r.proxy.$q),{updatePanelsList:d,getPanelContent:a,panelDirectives:i}=tt(),f=g(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(d(t),ze("div",{class:f.value},a(),"pan",e.swipeable,()=>i.value))}}),nt="/assets/Maiq.46dc3a90.jpg",lt="/assets/Kata.1ebe3f7b.jpg";function ot(){return $e(Fe)}const it=u("br",null,null,-1),st=u("div",{class:"text-h6 text-bold"},"Age",-1),rt=u("div",{class:"text-h6 text-bold"},"Hobbies",-1),ut=u("div",{class:"text-h6 text-bold"},[m(" Pets "),u("span",{class:"psst"},"(by clicking you can see them!!)")],-1),dt=u("div",{class:"text-h6 text-bold"},"History",-1),ct=u("b",null,"over 4 years",-1),vt=u("br",null,null,-1),pt=u("br",null,null,-1),ft=u("div",{class:"text-h6 text-bold"},"Favourite things",-1),mt=u("div",{class:"text-h6 text-bold"},"Languages",-1),ht=u("div",{class:"text-h6 text-bold"},"Skills",-1),gt=u("div",{class:"text-h6 text-bold"},"Experience",-1),bt=u("br",null,null,-1),yt=u("h6",null,[u("span",{class:"when"},"01/2023 - PRESENT"),m(" Junior Software Developer - "),u("span",{class:"company"},"Momio ApS")],-1),_t=u("p",null," Done some old syntax vanilla JavaScript, HTML + CSS and Java (+ .jsp). Familiar with Tomcat and SVN. ",-1),xt=u("h6",null,[u("span",{class:"when"},"04/2022 - 07/2022"),m(" Trainee Software Developer - "),u("span",{class:"company"},"Sofia Digital")],-1),St=u("p",null," Worked with TV streaming apps like C More or Jupiter. I did mostly HTML, CSS, Vue.js and vanilla JavaScript. I also tested with televisions. ",-1),kt=u("div",{class:"text-h6 text-bold"},"Education",-1),wt=u("br",null,null,-1),Ct=u("h6",null,[u("span",{class:"when"},"10/2021 - 07/2022"),m(" Trainee Academy - "),u("span",{class:"company"},"Buutti Oy")],-1),Pt=u("p",null," Studied mainly front-end coding with ReactJS and regular JavaScript. ",-1),Vt={__name:"AboutPage",setup(e){const t=ot(),r=C("age"),c=C(!1),d=C(!1),a=C([{skill:"JavaScript",level:"Good"},{skill:"HTML",level:"Good"},{skill:"CSS",level:"Good"},{skill:"Vue",level:"Great"},{skill:"React",level:"Good"},{skill:"Java",level:"Basics"},{skill:"Git",level:"OK"},{skill:"MySQL",level:"Basics"}]),i=C([{thing:"My friends",desc:"I love my friends, wouldn't be here without them!"},{thing:"Food",desc:"I absolutely love food, trying out new food and improving old dishes."},{thing:"Coffee",desc:"I don't believe I could function well without it."},{thing:"My pets",desc:"My precious pets provide me fulfillment in life <3"},{thing:"Computer stuff",desc:"I am nerd for computer stuff..!"},{thing:"Work",desc:"I really love what I do!"}]),f=C([{lang:"English",level:"Great"},{lang:"Finnish",level:"Native"}]);return(y,v)=>(P(),z(Ge,{class:"column items-center",padding:""},{default:l(()=>[u("div",{class:Re("funFactPanels"+(je(t).screen.lt.md?" isMobile":" isNotMobile"))},[n(ke,{modelValue:r.value,"onUpdate:modelValue":v[0]||(v[0]=o=>r.value=o),"mobile-arrows":"","outside-arrows":""},{default:l(()=>[n(k,{name:"age",icon:"cake",label:"Birthday"}),n(k,{name:"hobbies",icon:"gamepad",label:"Hobbies"}),n(k,{name:"pets",icon:"pets",label:"Pets"}),n(k,{name:"history",icon:"history",label:"History"}),n(k,{name:"favourites",icon:"favorite",label:"Favourites"}),n(k,{name:"languages",icon:"language",label:"Languages"}),n(k,{name:"skills",icon:"plus_one",label:"Skills"}),n(k,{name:"experience",icon:"star",label:"Experience"})]),_:1},8,["modelValue"]),it,n(at,{modelValue:r.value,"onUpdate:modelValue":v[3]||(v[3]=o=>r.value=o),animated:""},{default:l(()=>[n(w,{name:"age"},{default:l(()=>[st,m(" I am 26 years old. My birthday is on the 7th of February! ")]),_:1}),n(w,{name:"hobbies"},{default:l(()=>[rt,m(" I love video games, programming and reading! I also do a fair share of cooking and baking (: ")]),_:1}),n(w,{name:"pets"},{default:l(()=>[ut,m(" I have 2 pets; a 6-year-old tabby cat "),u("span",{class:"maiq",title:"Click me for a pic (;",onClick:v[1]||(v[1]=o=>c.value=!0)},"M'aiq the Liar"),m(' and an under 1 year old German Shepherd dog Katerina "'),u("span",{class:"kata",title:"Click me for a pic (;",onClick:v[2]||(v[2]=o=>d.value=!0)},"Kata"),m('" ')]),_:1}),n(w,{name:"history"},{default:l(()=>[dt,m(" I have always been excited about computers ever since my uncle and dad got me into it at a young age. I am a self-taught programmer ("),ct,m(" as a hobby), more than 1 year of work experience and I am either practicing programming or searching for information about it almost every day. "),vt,pt,m("I actually orginally studied to be an animal care attendant but found my true calling during my studies, decided to go through my studies of animals and then swap career paths and I have not regretted a single moment of it! ")]),_:1}),n(w,{name:"favourites"},{default:l(()=>[ft,n(H,{separator:""},{default:l(()=>[(P(!0),K(U,null,O(i.value,(o,b)=>(P(),z(W,{key:b},{default:l(()=>[n(I,{top:"",avatar:""},{default:l(()=>[n(X,{color:"black","text-color":"white",icon:"favorite",size:"md"})]),_:1}),n(I,null,{default:l(()=>[n(A,null,{default:l(()=>[m(T(o.thing),1)]),_:2},1024),n(A,{caption:"",lines:"2"},{default:l(()=>[m(T(o.desc),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),n(w,{name:"languages"},{default:l(()=>[mt,n(H,{separator:""},{default:l(()=>[(P(!0),K(U,null,O(f.value,(o,b)=>(P(),z(W,{key:b},{default:l(()=>[n(I,{top:"",avatar:""},{default:l(()=>[n(X,{color:"black","text-color":"white",icon:"translate",size:"md"})]),_:1}),n(I,null,{default:l(()=>[n(A,null,{default:l(()=>[m(T(o.lang),1)]),_:2},1024),n(A,{caption:"",lines:"2"},{default:l(()=>[m(T(o.level),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),n(w,{name:"skills"},{default:l(()=>[ht,n(H,{separator:""},{default:l(()=>[(P(!0),K(U,null,O(a.value,(o,b)=>(P(),z(W,{key:b},{default:l(()=>[n(I,{top:"",avatar:""},{default:l(()=>[n(X,{color:"black","text-color":"white",icon:"code",size:"md"})]),_:1}),n(I,null,{default:l(()=>[n(A,null,{default:l(()=>[m(T(o.skill),1)]),_:2},1024),n(A,{caption:"",lines:"2"},{default:l(()=>[m(T(o.level),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),n(w,{name:"experience"},{default:l(()=>[gt,bt,yt,_t,xt,St,n(Je,{spaced:"lg",inset:""}),kt,wt,Ct,Pt]),_:1})]),_:1},8,["modelValue"])],2),n(re,{modelValue:c.value,"onUpdate:modelValue":v[5]||(v[5]=o=>c.value=o)},{default:l(()=>[n(oe,null,{default:l(()=>[n($,{class:"row items-center q-pb-none"},{default:l(()=>[n(ue),ie(n(se,{icon:"close",flat:"",round:"",dense:"",onClick:v[4]||(v[4]=o=>y.imgModal=!1)},null,512),[[ce]])]),_:1}),n($,null,{default:l(()=>[n(de,{src:nt,width:"270px"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(re,{modelValue:d.value,"onUpdate:modelValue":v[7]||(v[7]=o=>d.value=o)},{default:l(()=>[n(oe,null,{default:l(()=>[n($,{class:"row items-center q-pb-none"},{default:l(()=>[n(ue),ie(n(se,{icon:"close",flat:"",round:"",dense:"",onClick:v[6]||(v[6]=o=>y.imgModal=!1)},null,512),[[ce]])]),_:1}),n($,null,{default:l(()=>[n(de,{src:lt,width:"270px"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{Vt as default};