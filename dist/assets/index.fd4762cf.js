const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}};Xe();function T(){}function Qe(e){return e()}function We(){return Object.create(null)}function oe(e){e.forEach(Qe)}function Fe(e){return typeof e=="function"}function ae(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ge;function D(e,t){return ge||(ge=document.createElement("a")),ge.href=t,e===ge.href}function Ye(e){return Object.keys(e).length===0}function Ze(e,...t){if(e==null)return T;const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}function f(e,t){e.appendChild(t)}function v(e,t,s){e.insertBefore(t,s||null)}function h(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function $e(e){return document.createTextNode(e)}function y(){return $e(" ")}function W(e,t,s,r){return e.addEventListener(t,s,r),()=>e.removeEventListener(t,s,r)}function Ne(e){return function(t){return t.preventDefault(),e.call(this,t)}}function i(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function et(e){return Array.from(e.childNodes)}function q(e,t,s,r){s===null?e.style.removeProperty(t):e.style.setProperty(t,s,r?"important":"")}let Re;function re(e){Re=e}const le=[],X=[],we=[],ze=[],tt=Promise.resolve();let je=!1;function st(){je||(je=!0,tt.then(Ve))}function Ie(e){we.push(e)}const De=new Set;let _e=0;function Ve(){const e=Re;do{for(;_e<le.length;){const t=le[_e];_e++,re(t),it(t.$$)}for(re(null),le.length=0,_e=0;X.length;)X.pop()();for(let t=0;t<we.length;t+=1){const s=we[t];De.has(s)||(De.add(s),s())}we.length=0}while(le.length);for(;ze.length;)ze.pop()();je=!1,De.clear(),re(e)}function it(e){if(e.fragment!==null){e.update(),oe(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ie)}}const ye=new Set;let nt;function be(e,t){e&&e.i&&(ye.delete(e),e.i(t))}function He(e,t,s,r){if(e&&e.o){if(ye.has(e))return;ye.add(e),nt.c.push(()=>{ye.delete(e),r&&(s&&e.d(1),r())}),e.o(t)}}function Oe(e){e&&e.c()}function ke(e,t,s,r){const{fragment:o,on_mount:l,on_destroy:p,after_update:m}=e.$$;o&&o.m(t,s),r||Ie(()=>{const u=l.map(Qe).filter(Fe);p?p.push(...u):oe(u),e.$$.on_mount=[]}),m.forEach(Ie)}function Se(e,t){const s=e.$$;s.fragment!==null&&(oe(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function lt(e,t){e.$$.dirty[0]===-1&&(le.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Le(e,t,s,r,o,l,p,m=[-1]){const u=Re;re(e);const c=e.$$={fragment:null,ctx:null,props:l,update:T,not_equal:o,bound:We(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:We(),dirty:m,skip_bound:!1,root:t.target||u.$$.root};p&&p(c.root);let A=!1;if(c.ctx=s?s(e,t.props||{},(_,L,...k)=>{const w=k.length?k[0]:L;return c.ctx&&o(c.ctx[_],c.ctx[_]=w)&&(!c.skip_bound&&c.bound[_]&&c.bound[_](w),A&&lt(e,_)),L}):[],c.update(),A=!0,oe(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const _=et(t.target);c.fragment&&c.fragment.l(_),_.forEach(h)}else c.fragment&&c.fragment.c();t.intro&&be(e.$$.fragment),ke(e,t.target,t.anchor,t.customElement),Ve()}re(u)}class Te{$destroy(){Se(this,1),this.$destroy=T}$on(t,s){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(s),()=>{const o=r.indexOf(s);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var rt="/paving-over-south-parkdale/assets/top-logo.ac79f871.svg";function ot(e){let t,s,r,o;return{c(){t=a("div"),s=a("a"),r=a("img"),D(r.src,o=rt)||i(r,"src",o),i(r,"alt","School of Cities"),i(r,"class","svelte-1q3s23j"),i(s,"href","https://www.schoolofcities.utoronto.ca/"),i(t,"id","bar"),i(t,"class","svelte-1q3s23j")},m(l,p){v(l,t,p),f(t,s),f(s,r)},p:T,i:T,o:T,d(l){l&&h(t)}}}class at extends Te{constructor(t){super(),Le(this,t,null,ot,ae,{})}}const V=[];function dt(e,t=T){let s;const r=new Set;function o(m){if(ae(e,m)&&(e=m,s)){const u=!V.length;for(const c of r)c[1](),V.push(c,e);if(u){for(let c=0;c<V.length;c+=2)V[c][0](V[c+1]);V.length=0}}}function l(m){o(m(e))}function p(m,u=T){const c=[m,u];return r.add(c),r.size===1&&(s=t(o)||T),m(e),()=>{r.delete(c),r.size===0&&(s(),s=null)}}return{set:o,update:l,subscribe:p}}function ft(e){let t,s,r,o,l,p,m,u,c,A,_,L,k,w,M;return{c(){t=a("div"),s=a("img"),o=y(),l=a("img"),m=y(),u=a("div"),c=a("div"),A=y(),_=a("div"),L=y(),k=a("div"),D(s.src,r=e[0])||i(s,"src",r),i(s,"alt",e[1]),i(s,"class","left-img svelte-qgpj5s"),D(l.src,p=e[2])||i(l,"src",p),i(l,"alt",e[3]),i(l,"class","right-img svelte-qgpj5s"),i(c,"class","line svelte-qgpj5s"),i(_,"class","handle svelte-qgpj5s"),i(k,"class","line svelte-qgpj5s"),i(u,"class","slider svelte-qgpj5s"),i(u,"role","slider"),i(u,"aria-valuemin",0),i(u,"aria-valuemax",1),i(u,"aria-valuenow",e[12]),i(u,"aria-label","Compare image"),i(u,"tabindex","0"),i(t,"class","svelte-compare-image-container svelte-qgpj5s"),q(t,"--container-height",e[10]+"px"),q(t,"--container-width",e[9]+"px"),q(t,"--slider-position",e[12]),i(t,"data-testid","svelte-compare-image")},m(b,S){v(b,t,S),f(t,s),e[17](s),f(t,o),f(t,l),e[19](l),f(t,m),f(t,u),f(u,c),f(u,A),f(u,_),f(u,L),f(u,k),e[21](u),e[22](t),w||(M=[W(s,"load",e[18]),W(l,"load",e[20]),W(u,"keydown",e[16]),W(t,"touchstart",Ne(e[14])),W(t,"touchend",e[15],{passive:!0}),W(t,"mousedown",Ne(e[14])),W(t,"mouseup",e[15])],w=!0)},p(b,[S]){S&1&&!D(s.src,r=b[0])&&i(s,"src",r),S&2&&i(s,"alt",b[1]),S&4&&!D(l.src,p=b[2])&&i(l,"src",p),S&8&&i(l,"alt",b[3]),S&4096&&i(u,"aria-valuenow",b[12]),S&1024&&q(t,"--container-height",b[10]+"px"),S&512&&q(t,"--container-width",b[9]+"px"),S&4096&&q(t,"--slider-position",b[12])},i:T,o:T,d(b){b&&h(t),e[17](null),e[19](null),e[21](null),e[22](null),w=!1,oe(M)}}}function ct(e,t,s){let r,o,l=T,p=()=>(l(),l=Ze(r,d=>s(9,o=d)),r);e.$$.on_destroy.push(()=>l());let{imageLeftSrc:m=""}=t,{imageLeftAlt:u=""}=t,{imageRightSrc:c=""}=t,{imageRightAlt:A=""}=t;function _(d){return dt(0,x=>{if(!d)return;let I=new ResizeObserver(([O])=>{x(O.target.getBoundingClientRect().width)});return I.observe(d),()=>I.disconnect()})}let L=null,k=null,w=null,M,b,S=0,C=null,E=.5;function j(d){var Y;const x="touches"in d?d.touches[0].clientX:d.clientX,I=(Y=w==null?void 0:w.getBoundingClientRect().left)!=null?Y:0,O=x-I,R=Math.min(Math.max(O,0),o);s(12,E=R/o)}function B(d){C==null||C.focus(),j(d),window.addEventListener("mousemove",j),window.addEventListener("touchmove",j)}function N(){window.removeEventListener("mousemove",j),window.removeEventListener("touchmove",j)}function z(d){d.key==="ArrowLeft"||d.key==="ArrowDown"?(d.preventDefault(),s(12,E=Math.max((E*10-1)/10,0))):(d.key==="ArrowRight"||d.key==="ArrowUp")&&(d.preventDefault(),s(12,E=Math.min((E*10+1)/10,1)))}function G(d){X[d?"unshift":"push"](()=>{k=d,s(5,k)})}const H=()=>{s(7,M=!0)};function de(d){X[d?"unshift":"push"](()=>{w=d,s(6,w)})}const F=()=>{s(8,b=!0)};function P(d){X[d?"unshift":"push"](()=>{C=d,s(11,C)})}function U(d){X[d?"unshift":"push"](()=>{L=d,s(4,L)})}return e.$$set=d=>{"imageLeftSrc"in d&&s(0,m=d.imageLeftSrc),"imageLeftAlt"in d&&s(1,u=d.imageLeftAlt),"imageRightSrc"in d&&s(2,c=d.imageRightSrc),"imageRightAlt"in d&&s(3,A=d.imageRightAlt)},e.$$.update=()=>{var d,x;if(e.$$.dirty&16&&p(s(13,r=_(L))),e.$$.dirty&33&&s(7,M=(d=k==null?void 0:k.complete)!=null?d:!1),e.$$.dirty&68&&s(8,b=(x=w==null?void 0:w.complete)!=null?x:!1),e.$$.dirty&997&&k&&w){const I=k.naturalHeight/k.naturalWidth,O=w.naturalHeight/w.naturalWidth,R=Math.max(I,O);s(10,S=o*R)}},[m,u,c,A,L,k,w,M,b,o,S,C,E,r,B,N,z,G,H,de,F,P,U]}class ut extends Te{constructor(t){super(),Le(this,t,ct,ft,ae,{imageLeftSrc:0,imageLeftAlt:1,imageRightSrc:2,imageRightAlt:3})}}var ht="/paving-over-south-parkdale/assets/Q_1947.0cd50e3b.png",mt="/paving-over-south-parkdale/assets/Q_1964.3fea26ed.png";function pt(e){let t,s,r,o,l,p;return o=new ut({props:{imageLeftSrc:ht,imageLeftAlt:"left",imageRightSrc:mt,imageRightAlt:"right"}}),{c(){t=a("div"),s=a("div"),s.innerHTML=`<div id="left-year" class="svelte-1mietnf">1947</div> 
		<div id="right-year" class="svelte-1mietnf">1964</div>`,r=y(),l=a("div"),Oe(o.$$.fragment),i(s,"id","years"),i(s,"class","svelte-1mietnf"),q(l,"display","contents"),q(l,"--handle-size","3rem"),q(l,"--slider-color","white"),q(l,"--slider-width","0.17rem"),i(t,"id","compare-images"),i(t,"class","svelte-1mietnf")},m(m,u){v(m,t,u),f(t,s),f(t,r),f(t,l),ke(o,l,null),p=!0},p:T,i(m){p||(be(o.$$.fragment,m),p=!0)},o(m){He(o.$$.fragment,m),p=!1},d(m){m&&h(t),Se(o)}}}class vt extends Te{constructor(t){super(),Le(this,t,null,pt,ae,{})}}var gt="/paving-over-south-parkdale/assets/TA_1957_screenshot.3f063274.png",Ue="/paving-over-south-parkdale/assets/1955dec1globe.07fc442c.png",_t="/paving-over-south-parkdale/assets/mini-map.fc6682c4.png",Je="/paving-over-south-parkdale/assets/plan_1979_A.8880080b.jpg",Ke="/paving-over-south-parkdale/assets/plan_1979_B.7ba62ba7.jpg";function wt(e){let t,s,r,o,l,p,m,u,c,A,_,L,k,w,M,b,S,C,E,j,B,N,z,G,H,de,F,P,U,d,x,I,O,R,Y,fe,Ae,Z,ce,J,Pe,$,xe,ee,ue,he,te,K,Be,Ee,Me,Ce,se,me,pe,ie,Q,Ge,qe,ne,ve;return l=new at({}),J=new vt({}),{c(){t=a("link"),s=a("link"),r=a("meta"),o=y(),Oe(l.$$.fragment),p=y(),m=a("div"),u=y(),c=a("div"),A=a("div"),_=a("div"),L=a("img"),w=y(),M=a("h1"),M.textContent="Paving Over South Parkdale",b=y(),S=a("div"),S.innerHTML='<h3 class="svelte-2d07df">A series of maps documenting the loss of a neighbourhood</h3>',C=y(),E=a("div"),E.innerHTML=`<p class="svelte-2d07df">The mid-20th century was a time of contentious highway construction. By
		the mid-1950s, there were already several expressways in
		southern Ontario (Highways 400, 401, and the QEW), and Metro Toronto
		officials were in the process of planning five additional expressways to 
		connect to the downtown core.</p> 
	<p class="svelte-2d07df">Here&#39;s an excerpt from the The Globe and Mail from December 1, 1955,
		showing their approximate location and priority.</p>`,j=y(),B=a("div"),N=a("div"),z=a("div"),G=a("a"),H=a("img"),F=y(),P=a("div"),U=a("p"),U.textContent="The two top-priority highways, the Don Valley Parkway and The Lakeshore Expressway (later renamed after the first chair of the Metro Council, Frederick G. Gardiner), were built during the late 1950s and early 1960s. The routes of these expressways mostly traversed green space and industrial land, rather than primarily through residential neighbourhoods. (The other three planned expressways on this map were to pass through a number of residential neighbourhoods and were eventually halted due to strong public opposition.)",d=y(),x=a("img"),O=y(),R=a("p"),R.innerHTML='However, there was a neighbourhood along the route of the Lakeshore Expressway that was destroyed during this process:  <span class="bold svelte-2d07df">South Parkdale</span>,  located between the railway and Lake Ontario. The neighbourhood primarily consisted of single-detached homes, similar in style to those still found north of the railroad tracks.',Y=y(),fe=a("p"),fe.textContent=`The following air photos show South Parkdale in 1947, several years
		before the construction of the Lakeshore Expressway (built from 1957 to 1959), and what the newly
		finished roadway looked like in 1964. The 1947 image also shows how the
		neighbourhood had already undergone some destruction in the 1920s, when
		Lakeshore Boulavard was extended through the neighbourhood. By the early
		1960s, all houses below the railway were gone, replaced by 12+ lanes of
		traffic and swaths of manicured grass.`,Ae=y(),Z=a("div"),ce=a("div"),Oe(J.$$.fragment),Pe=y(),$=a("div"),$.innerHTML=`<p class="svelte-2d07df">In <span class="bold svelte-2d07df">1956</span>, South Parkdale was home to <span class="bold svelte-2d07df">634</span> residents living in <span class="bold svelte-2d07df">168</span> households. All residents were displaced and their dwellings destroyed to make way for the new expressway in the following years.</p> 


	<p class="svelte-2d07df">In 1979, <a href="https://en.wikipedia.org/wiki/John_Sewell" class="svelte-2d07df">John Sewell</a> (mayor of Toronto from 1978 to 1980) and his staff released a plan for
		covering the expressway in aims to reduce its noise, better connect Parkdale
		to the waterfront, as well as create space for residential development. Due
		to high costs, the plans never came to fruition, but they do illustrate how
		some of the detriments of the expressway could be converted into green
		space and public housing in the future.</p>`,xe=y(),ee=a("div"),ue=a("div"),he=a("div"),te=a("a"),K=a("img"),Ee=y(),Me=a("br"),Ce=y(),se=a("div"),me=a("div"),pe=a("div"),ie=a("a"),Q=a("img"),qe=y(),ne=a("div"),ne.innerHTML=`<p><b>More information:</b></p> 

	<p>This page and its content were compiled by <a href="https://jamaps.github.io" target="_blank" class="svelte-2d07df">Jeff Allen</a> in 2022. The
		<a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/access-city-information-or-records/city-of-toronto-archives/whats-online/maps/aerial-photographs/" target="_blank" class="svelte-2d07df">air photos</a>
		and the
		<a href="https://gencat4.eloquent-systems.com/webcat/request/Action?ClientSession=2de590be:18165c1105c:-7ec2&amp;UniqueID=6000_3355_2&amp;TemplateProcessID=6000_3355&amp;PromptID=&amp;ParamID=&amp;CMD_(DetailRequest)[0]=&amp;ProcessID=6000_3363(0)&amp;KeyValues=KEY_450943" target="_blank" class="svelte-2d07df">1979 plans</a> were sourced from the Toronto Archives. The image from the Globe and Mail
		was sourced from the University of Toronto Library. Check out the following
		links for further reading on South Parkdale and the history of the Lakeshore
		(Gardiner) Expressway:</p> 
	<ul><li><a href="https://www.ubcpress.ca/suburb-slum-urban-village" target="_blank" class="svelte-2d07df">Suburb, Slum, Urban Village: 
				Transformations in Toronto&#39;s Parkdale Neighbourhood, 1875-2002</a></li> 
		<li><a href="http://www.gettorontomoving.ca/gardiner-expressway.html" target="_blank" class="svelte-2d07df">The Gardiner Expressway</a></li> 
		<li><a href="https://torontoguardian.com/2012/07/south-parkdale-vintage-fitted-tees-dont-exist/" target="_blank" class="svelte-2d07df">\u201CSouth Parkdale\u201D vintage fitted tees don&#39;t exist</a></li> 
		<li><a href="http://spacing.ca/toronto/2017/03/04/lost-streets-south-parkdale/" target="_blank" class="svelte-2d07df">The lost streets of South Parkdale</a></li></ul> 
	<p>Also check out our <a href="https://schoolofcities.github.io/historical-aerial-imagery-toronto/" target="_blank" class="svelte-2d07df">interactive map</a> showing multiple years of historical air photos in Toronto (1939 to present day).</p>`,i(t,"href","https://fonts.googleapis.com/css2?family=Bitter&family=Playfair+Display&display=swap"),i(t,"rel","stylesheet"),i(s,"href","https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"),i(s,"rel","stylesheet"),i(r,"name","viewport"),i(r,"content","width=device-width, initial-scale=1, minimum-scale=1"),i(m,"id","top-space"),i(m,"class","svelte-2d07df"),D(L.src,k=gt)||i(L,"src",k),i(L,"alt","Air Photo 1957"),i(L,"class","svelte-2d07df"),i(M,"class","svelte-2d07df"),i(_,"id","title"),i(_,"class","svelte-2d07df"),i(A,"class","white svelte-2d07df"),i(c,"class","road svelte-2d07df"),i(S,"class","subtitle svelte-2d07df"),i(E,"class","body-text svelte-2d07df"),D(H.src,de=Ue)||i(H,"src",de),i(H,"alt","Globe and Mail, Dec 1, 1955"),i(H,"class","svelte-2d07df"),i(G,"href",Ue),i(G,"target","_blank"),i(z,"class","image svelte-2d07df"),i(N,"class","white svelte-2d07df"),i(B,"class","road svelte-2d07df"),i(U,"class","svelte-2d07df"),D(x.src,I=_t)||i(x,"src",I),i(x,"alt","Globe and Mail, Dec 1, 1955"),i(x,"class","svelte-2d07df"),i(R,"class","svelte-2d07df"),i(fe,"class","svelte-2d07df"),i(P,"class","body-text svelte-2d07df"),i(ce,"class","white svelte-2d07df"),i(Z,"class","road svelte-2d07df"),i($,"class","body-text svelte-2d07df"),D(K.src,Be=Ke)||i(K,"src",Be),i(K,"alt","1979 Plan for South Parkdale"),i(K,"class","svelte-2d07df"),i(te,"href",Ke),i(te,"target","_blank"),i(he,"class","image svelte-2d07df"),i(ue,"class","white svelte-2d07df"),i(ee,"class","road svelte-2d07df"),D(Q.src,Ge=Je)||i(Q,"src",Ge),i(Q,"alt","1979 Plan for South Parkdale"),i(Q,"class","svelte-2d07df"),i(ie,"href",Je),i(ie,"target","_blank"),i(pe,"class","image svelte-2d07df"),i(me,"class","white svelte-2d07df"),i(se,"class","road svelte-2d07df"),i(ne,"class","info svelte-2d07df")},m(n,g){f(document.head,t),f(document.head,s),f(document.head,r),v(n,o,g),ke(l,n,g),v(n,p,g),v(n,m,g),v(n,u,g),v(n,c,g),f(c,A),f(A,_),f(_,L),f(_,w),f(_,M),v(n,b,g),v(n,S,g),v(n,C,g),v(n,E,g),v(n,j,g),v(n,B,g),f(B,N),f(N,z),f(z,G),f(G,H),v(n,F,g),v(n,P,g),f(P,U),f(P,d),f(P,x),f(P,O),f(P,R),f(P,Y),f(P,fe),v(n,Ae,g),v(n,Z,g),f(Z,ce),ke(J,ce,null),v(n,Pe,g),v(n,$,g),v(n,xe,g),v(n,ee,g),f(ee,ue),f(ue,he),f(he,te),f(te,K),v(n,Ee,g),v(n,Me,g),v(n,Ce,g),v(n,se,g),f(se,me),f(me,pe),f(pe,ie),f(ie,Q),v(n,qe,g),v(n,ne,g),ve=!0},p:T,i(n){ve||(be(l.$$.fragment,n),be(J.$$.fragment,n),ve=!0)},o(n){He(l.$$.fragment,n),He(J.$$.fragment,n),ve=!1},d(n){h(t),h(s),h(r),n&&h(o),Se(l,n),n&&h(p),n&&h(m),n&&h(u),n&&h(c),n&&h(b),n&&h(S),n&&h(C),n&&h(E),n&&h(j),n&&h(B),n&&h(F),n&&h(P),n&&h(Ae),n&&h(Z),Se(J),n&&h(Pe),n&&h($),n&&h(xe),n&&h(ee),n&&h(Ee),n&&h(Me),n&&h(Ce),n&&h(se),n&&h(qe),n&&h(ne)}}}class yt extends Te{constructor(t){super(),Le(this,t,null,wt,ae,{})}}new yt({target:document.getElementById("app")});
