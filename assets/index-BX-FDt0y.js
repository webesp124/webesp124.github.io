import{r as x,q as ls,u as et,j as e,v as B,w as cs,x as f,g as Ee,y as _,F as ds,z as It,A as Pt,I as Mt,B as us,C as hs,D as ps,E as jt,H as St,J as xs,K as gs,L as ms,M as fs,N as Xe,O as G,Q as bs,S as js,U as Ss,V as Tt,W as vs,X as ys,Y as ws,Z as tt,$ as ge,a0 as Cs,a1 as ks,a2 as st,a3 as $s,a4 as me,a5 as Rs,a6 as Nt,a7 as Oe,a8 as Bt,a9 as Fs,aa as Et,ab as Ls,ac as Is,ad as Ps,ae as Ms,af as Ts,ag as Ns,ah as Bs,ai as Es,aj as Os,ak as zs,al as Us,am as Ae,an as _s,ao as As,ap as qs,aq as Ws,ar as Hs,as as Vs,at as Ds,au as Ks,av as Gs,aw as Xs,ax as Qs,ay as Ys,az as Zs,aA as Js,aB as eo,aC as to,aD as so,aE as oo,aF as no,aG as ro,aH as ao,aI as io}from"./vendor-D9ZbVt_x.js";import{m as lo}from"./vendor_mgba-wasm-BLfC_69t.js";import{S as qe,c as co}from"./vendor_react-joyride-BeiANMH_.js";import{u as ne,S as uo,I as D,B as T,A as ho,a as po,b as xo,F as Ot,C as ve,T as oe,c as go,d as mo,e as We,f as ot,s as fo,g as bo,t as He,h as jo,i as So,j as vo,k as nt,l as rt,m as zt,n as O,o as I,p as at,q as Qe,r as vt,v as Re,w as Ye,M as Me,D as xe,x as yo,y as wo}from"./vendor_@mui-B79W_0LT.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const Ut="currentEmulatorVolume",_t="currentEmulatorKeyBindings",At="currentGameName",qt="currentFastForward",it="currentCoreCallbacks",ye=({fetchFn:t,loadOnMount:o=!1,clearDataOnLoad:s=!1})=>{const[n,r]=x.useState(null),[i,d]=x.useState(null),[l,u]=x.useState(!1),a=()=>d(null),c=x.useCallback(async h=>{u(!0),d(null),s&&r(null);try{const g=await t(h);r(g),u(!1)}catch(g){d(g),u(!1)}},[s,t]);return x.useEffect(()=>{o&&c()},[]),{data:n,isLoading:l,error:i,clearError:a,execute:c}},Co=({loadOnMount:t=!1}={})=>{const s=x.useCallback(async()=>(await fetch("undefined/api/tokens/refresh",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"})).json(),[void 0]),{data:n,isLoading:r,error:i,clearError:d,execute:l}=ye({fetchFn:s,clearDataOnLoad:!0,loadOnMount:t});return{data:n,isLoading:r,error:i,clearError:d,execute:l}},Wt=x.createContext(null);Wt.displayName="AuthContext";const ko=({children:t})=>{const[n,r]=x.useState(null),[i,d]=x.useState(null),{data:l,isLoading:u,execute:a,error:c,clearError:h}=Co({loadOnMount:!1}),g=!u&&!!l;x.useEffect(()=>{g&&(r(l),d("refresh"))},[g,l]);const b=x.useCallback(()=>{if(n){const{exp:p}=ls(n);if(p&&Date.now()<=p*1e3)return!0}return!1},[n]),j=b()&&!l&&i!=="refresh";return x.useEffect(()=>{j&&h()},[j,h]),et(async()=>{await a()},b()&&!c?24e4:null),e.jsx(Wt.Provider,{value:{accessToken:n,setAccessToken:r,setAccessTokenSource:d,isAuthenticated:b},children:t})},lt=x.createContext(null);lt.displayName="DragContext";const $o=({children:t})=>{const[o,s]=x.useState(!1);return e.jsx(lt.Provider,{value:{areItemsDraggable:o,setAreItemsDraggable:s},children:t})},K=0,Ro=3,Fo=t=>{const o=t.filePaths(),s=(l,u)=>{var c,h;let a=(c=l==null?void 0:l.split("/"))==null?void 0:c.pop();if(u){const g="."+((h=a==null?void 0:a.split("."))==null?void 0:h.pop());a=a==null?void 0:a.replace(g,u)}return a},n=()=>{const l={path:o.root,isDir:!0,children:[]},u=[".",".."],a=({path:c,children:h})=>{for(const g of t.FS.readdir(c)){if(u.includes(g))continue;const b=`${c}/${g}`,{mode:j}=t.FS.lookupPath(b,{}).node,p={path:b,isDir:t.FS.isDir(j),children:[]};h==null||h.push(p),p.isDir&&a(p)}};return a(l),l},r=l=>{var g;const u=l.split(`
`),a=["cheats = ",""];if(!((g=u==null?void 0:u[0])!=null&&g.match("^cheats = [0-9]+$")))return[];const c={},h={desc:"desc",code:"code",enable:"enable"};for(const b of u){if(a.includes(b))continue;const j=b.match(/^cheat([0-9]+)_([a-zA-Z]+)\s*=\s*"?([a-zA-Z0-9\s+:_]+)"?$/);if(j){const[,p,S,k]=j,R=h[S];c[p]=c[p]||{desc:"",code:"",enable:!1},R&&(c[p][R]=R===h.enable?k.toLowerCase()==="true":k)}}return Object.values(c)},i=l=>{const u=l.map((h,g)=>`cheat${g}_desc = "${h.desc}"
cheat${g}_enable = ${h.enable}
cheat${g}_code = "${h.code}"
`),a=`cheats = ${u==null?void 0:u.length}

`,c=s(t.gameName,".cheats");if(u!=null&&u.length&&c){const h=a+u.join(`
`),g=new Blob([h],{type:"text/plain"});return new File([g],c)}return null},d=({key:l,location:u})=>{let a=u===Ro?`Keypad ${l}`:l;return a.toLowerCase().includes("enter")&&(a=a.replace(/enter/gi,"Return")),a.toLowerCase().includes("arrow")&&(a=a.replace(/arrow/gi,"")),a};return{addCoreCallbacks:t.addCoreCallbacks,autoLoadCheats:t.autoLoadCheats,createSaveState:t.saveState,defaultKeyBindings:()=>[{gbaInput:"A",key:"X",location:K},{gbaInput:"B",key:"Z",location:K},{gbaInput:"L",key:"A",location:K},{gbaInput:"R",key:"S",location:K},{gbaInput:"Start",key:"Enter",location:K},{gbaInput:"Select",key:"Backspace",location:K},{gbaInput:"Up",key:"ArrowUp",location:K},{gbaInput:"Down",key:"ArrowDown",location:K},{gbaInput:"Left",key:"ArrowLeft",location:K},{gbaInput:"Right",key:"ArrowRight",location:K}],loadSaveState:t.loadState,listSaveStates:()=>t.FS.readdir(o.saveStatePath),listRoms2:()=>t.FS.readdir(o.gamePath),listSaves:()=>t.FS.readdir(o.savePath),getStatSaves:l=>t.FS.stat("/data/saves/"+l),getStatRoms:l=>t.FS.stat("/data/games/"+l),listRoms:t.listRoms,setVolume:async l=>{(t.SDL2.audioContext.state==="suspended"||t.SDL2.audioContext.state==="interrupted")&&await t.SDL2.audioContext.resume(),t.setVolume(l)},getVolume:t.getVolume,enableKeyboardInput:()=>t.toggleInput(!0),disableKeyboardInput:()=>t.toggleInput(!1),simulateKeyDown:t.buttonPress,simulateKeyUp:t.buttonUnpress,setFastForwardMultiplier:t.setFastForwardMultiplier,isFastForwardEnabled:()=>t.getFastForwardMultiplier()>1,run:t.loadGame,getCurrentRom:()=>t.gameName?t.FS.readFile(t.gameName):null,getCurrentGameName:()=>s(t.gameName),setCurrentGameName:l=>{l&&!t.gameName&&(t.gameName=l)},getCurrentSave:()=>t.saveName?t.getSave():null,getCurrentSaveName:()=>s(t.saveName),getFile:l=>t.FS.readFile(l),uploadCheats:t.uploadCheats,uploadRom:t.uploadRom,uploadSaveOrSaveState:t.uploadSaveOrSaveState,deleteSaveState:l=>{const u=s(t.saveName,".ss"+l),a=`${o.saveStatePath}/${u}`;t.FS.unlink(a)},deleteFile:t.FS.unlink,pause:t.pauseGame,resume:t.resumeGame,quitGame:t.quitGame,quitEmulator:t.quitMgba,quickReload:t.quickReload,getCurrentCheatsFile:()=>{const l=s(t.gameName,".cheats"),u=`${o.cheatsPath}/${l}`;return t.FS.analyzePath(u).exists?t.FS.readFile(u):new Uint8Array},getCurrentCheatsFileName:()=>s(t.gameName,".cheats"),screenshot:t.screenshot,remapKeyBindings:l=>l.forEach(u=>t.bindKey(d(u),u.gbaInput)),filePaths:t.filePaths,fsSync:t.FSSync,listAllFiles:n,parseCheatsString:r,parsedCheatsToFile:i}},Lo=t=>{const[o,s]=x.useState(null);return x.useEffect(()=>{(async()=>{if(t){const r=await lo({canvas:t}),i=r.version.projectName+" "+r.version.projectVersion;console.log(i),await r.FSInit();const d=Fo(r);s(d)}})()},[t]),o},ct=x.createContext(null);ct.displayName="EmulatorContext";const Io=({children:t})=>{const[o,s]=x.useState(null),n=Lo(o);return e.jsx(ct.Provider,{value:{emulator:n,canvas:o,setCanvas:s},children:t})},dt=x.createContext(null);dt.displayName="ResizeContext";const Po=({children:t})=>{const[o,s]=x.useState(!1);return e.jsx(dt.Provider,{value:{areItemsResizable:o,setAreItemsResizable:s},children:t})},ut=x.createContext(null);ut.displayName="RunningContext";const Mo=({children:t})=>{const[o,s]=x.useState(!1);return e.jsx(ut.Provider,{value:{isRunning:o,setIsRunning:s},children:t})},To="componentLayouts",No=()=>{const[t,o]=B(To,{}),s=x.useCallback(()=>o({}),[o]),n=x.useMemo(()=>!!Object.values(t).some(r=>!!(r!=null&&r.position)||!!(r!=null&&r.size)),[t]);return{layouts:t,setLayouts:o,hasSetLayout:n,clearLayouts:s}},ht=x.createContext(null);ht.displayName="LayoutContext";const Bo=({children:t})=>{const{layouts:o,setLayouts:s,hasSetLayout:n,clearLayouts:r}=No(),i=x.useCallback((d,l)=>s(u=>({...u,[d]:{...u==null?void 0:u[d],...l}})),[s]);return x.useEffect(()=>{n||r()},[]),e.jsx(ht.Provider,{value:{layouts:o,hasSetLayout:n,clearLayouts:r,setLayout:i,setLayouts:s},children:t})},pt=x.createContext(null);pt.displayName="ModalContext";const Eo=({children:t})=>{const[o,s]=x.useState(null),[n,r]=x.useState(!1);return e.jsx(pt.Provider,{value:{modalContent:o,setModalContent:s,isModalOpen:n,setIsModalOpen:r},children:t})},fe=t=>{const o=t.displayName,s=x.useContext(t);if(!s)throw new Error(`${o??"This context"} must be loaded under the matching ${o?`${o}.Provider`:"Provider"}`);return s},ue=()=>fe(ht),q=()=>fe(pt),E=()=>fe(ct),ze=()=>fe(lt),Ht=()=>fe(dt),re=()=>fe(ut),Oo=({isPaused:t})=>{const o=cs(),{emulator:s}=E(),{isRunning:n}=re(),[r,i]=x.useState(!1),d=n&&!t;x.useEffect(()=>{d&&(!o&&!r?(s==null||s.pause(),i(!0)):o&&r&&(s==null||s.resume(),i(!1)))},[s,o,d,r])},zo=t=>{const o=t.getContext("webgl");o==null||o.clearColor(0,0,0,1),o==null||o.clear(o==null?void 0:o.COLOR_BUFFER_BIT)},Uo=t=>{const o=t.getContext("2d"),s=40,n=50;let r=0;if(!o)return;const i=t.width,d=t.height,l=i/2,u=d/2,a=o.getImageData(0,0,i,d),c=setInterval(()=>{r++;for(let h=0;h<d;++h)for(let g=0;g<i;++g){const b=Math.abs(g-l),j=Math.abs(h-u)*.8,p=(l-r-b)/l,S=(u-r-(h&1)*10-j+Math.pow(b,1/2))/u;a.data[(g+h*i)*4+3]*=Math.pow(p,1/3)*Math.pow(S,1/2)}o.putImageData(a,0,0),r>s&&(clearInterval(c),t.remove())},n)},_o=(t,o)=>{if(!t||!o)return;const s=document.createElement("canvas"),n=s.getContext("2d"),r=URL.createObjectURL(o);s.className=t.className,s.height=t.height,s.width=t.width,s.style.backgroundColor=t.style.backgroundColor,s.style.height=`${t.clientHeight}px`,s.style.imageRendering=t.style.imageRendering,s.style.margin=t.style.margin,s.style.objectFit=t.style.objectFit,s.style.width=`${t.clientWidth}px`,s.style.position="absolute",s.style.top="0",s.style.left="0",s.style.right="0";const i=new Image;i.onload=()=>{var d;n==null||n.drawImage(i,0,0),(d=t.parentElement)==null||d.appendChild(s),zo(t),Uo(s)},i.src=r},Ao=t=>{if(!t)return null;const o="fade-copy.png",s=(t==null?void 0:t.filePaths().screenshotsPath)+"/"+o;if(!t.screenshot(o))return null;const r=t.getFile(s);return t==null||t.deleteFile(s),new Blob([r],{type:"image/png"})},qo=()=>{const{canvas:t,emulator:o}=E(),{isRunning:s,setIsRunning:n}=re();return x.useCallback(()=>{s&&(_o(t,Ao(o)),o==null||o.quitGame()),n(!1)},[t,o,s,n])},Ue="completedProductTour",Wo={locale:{skip:e.jsx("strong",{"aria-label":"Skip",children:"Skip"})},placement:"auto",placementBeacon:"right-end",spotlightPadding:10},be=({completedProductTourStepName:t,steps:o,allowScrolling:s=!0,isNotInModal:n=!1,millisecondDelay:r=500,renderWithoutDelay:i=!1,skipIfIntroSkipped:d=!0,skipRenderCondition:l=!1,zIndex:u=500})=>{const[a,c]=B(Ue),{isModalOpen:h}=q(),[g,b]=x.useState(i);if(et(()=>{b(!0)},i?null:r),!g||a!=null&&a[t]||d&&(a==null?void 0:a.hasCompletedProductTourIntro)===qe.SKIPPED||!(a!=null&&a.hasCompletedProductTourIntro)||!n&&!h||l)return null;const j=o.map(p=>({...Wo,...p}));return e.jsx(co,{continuous:!0,disableScrollParentFix:s,hideCloseButton:!0,showProgress:!0,showSkipButton:!0,steps:j,styles:{options:{zIndex:u}},callback:({status:p})=>{[qe.FINISHED,qe.SKIPPED].includes(p)&&c(S=>({...S,[t]:p}))}})},Ho=f.button`
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  padding: inherit;
`,je=Ee.forwardRef(({children:t,...o},s)=>e.jsx(Ho,{ref:s,...o,children:t})),pe=({variation:t})=>{const o=_(),s=function(){switch(t){case"topLeft":return"-45deg";case"topRight":return"45deg";case"bottomLeft":return"45deg";case"bottomRight":return"-45deg";default:return"0deg"}}();return e.jsx(ds,{"data-testid":"gripper-handle",color:o.gbaThemeBlue,style:{transform:`rotate(${s})`}})},Vo=f.ul`
  background-color: ${({theme:t})=>t.panelBlueGray};
  list-style: none;
  padding: 10px;
  margin: 0;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    '. . . .'
    'volume volume fastForward fastForward';

  ${({$controlled:t,$isLargerThanPhone:o})=>(t||o)&&`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
  `}
`,Do=f.li`
  display: contents;
`,Vt=It`
  cursor: pointer;
  background-color: ${({theme:t})=>t.panelControlGray};
  border-radius: 0.25rem;
  min-width: 40px;
  min-height: 40px;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:t})=>t.pureBlack};
  width: ${({$controlled:t})=>t?"auto":"100%"};

  ${({$controlled:t,theme:o})=>!t&&`
    @media ${o.isLargerThanPhone} {
      width: auto;
    }
  `}
`,Ko=f(je).attrs({className:"noDrag"})`
  ${Vt}

  border: none;
  flex-grow: 1;
  margin: 0;
  padding: 0;

  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  &:active {
    color: ${({theme:t})=>t.gbaThemeBlue};
  }
`,Go=f.li`
  ${Vt}
  grid-area: ${({$gridArea:t})=>t};
  max-height: 40px;
`,Xo=f(uo)`
  flex-grow: 1;

  > .MuiSlider-markActive {
    opacity: 1;
    background-color: currentColor;
  }
`,Fe=({ariaLabel:t,children:o,controlled:s,id:n,onClick:r})=>e.jsx(Do,{children:e.jsx(Ko,{"aria-label":t,id:n,onClick:r,$controlled:s,children:o})}),Le=({icon:t,...o})=>{const s=_();return e.jsx(D,{size:"small",sx:{padding:0,color:s.pureBlack,"&:active":{color:s.gbaThemeBlue}},...o,children:t})},yt=({controlled:t,gridArea:o,id:s,maxIcon:n,minIcon:r,...i})=>e.jsxs(Go,{id:s,$gridArea:o,$controlled:t,children:[r,e.jsx(Xo,{marks:!0,sx:{width:"85px",margin:"0 10px",maxHeight:"40px"},valueLabelDisplay:"auto",...i}),n]}),Qo=()=>{var ie,he,Ce,ke;const{emulator:t}=E(),{isRunning:o}=re(),{areItemsDraggable:s,setAreItemsDraggable:n}=ze(),{areItemsResizable:r,setAreItemsResizable:i}=Ht(),{layouts:d,setLayout:l}=ue(),u=_(),a=ne(u.isLargerThanPhone),[c,h]=x.useState(!1),[g,b]=x.useState(!1),j=x.useId(),p=qo(),[S,k]=B(Ut,1),[R,$]=B(qt,1);Oo({isPaused:c});const v=x.useCallback(N=>{var V,L;!((V=d==null?void 0:d.controlPanel)!=null&&V.initialBounds)&&N&&l("controlPanel",{initialBounds:(L=N.resizableElement.current)==null?void 0:L.getBoundingClientRect()})},[l,d]),y=(ie=d==null?void 0:d.screen)==null?void 0:ie.initialBounds;if(!y)return null;const m=a?5:0,w=!!((he=d==null?void 0:d.controlPanel)!=null&&he.size)||g,C=()=>{o&&(c?t==null||t.resume():t==null||t.pause(),h(N=>!N))},F=N=>{t==null||t.setVolume(N),k(N)},P=N=>{var L;const V=Number((L=N.target)==null?void 0:L.value);F(V)},M=N=>{t==null||t.setFastForwardMultiplier(N),$(N)},Y=N=>{var L;const V=Number((L=N.target)==null?void 0:L.value);t==null||t.setFastForwardMultiplier(V),$(V)},Z=[{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use the control panel to quickly perform in game actions and reposition controls."}),e.jsx("p",{children:"Click next to take a tour of the controls!"})]}),placementBeacon:"bottom",target:`#${CSS.escape(j)}`},{content:e.jsx("p",{children:"Use the this button to pause and resume your game if it is running."}),placementBeacon:"bottom",target:`#${CSS.escape(`${j}--play`)}`},{content:e.jsx("p",{children:"Use this button to quit your current game."}),placementBeacon:"bottom",target:`#${CSS.escape(`${j}--quit-game`)}`},{content:e.jsx("p",{children:"Use this button to enable dragging and repositioning of the screen, controls, and control panel."}),placement:a?"auto":"right",placementBeacon:"bottom",target:`#${CSS.escape(`${j}--drag`)}`},{content:e.jsx("p",{children:"Use this button to resize the screen and control panel."}),placement:a?"auto":"right",placementBeacon:"bottom",target:`#${CSS.escape(`${j}--resize`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this slider to increase and decrease the emulator volume."}),e.jsx("p",{children:"Your volume setting will be saved between refreshes!"})]}),placementBeacon:"bottom",target:`#${CSS.escape(`${j}--volume-slider`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this slider to increase and decrease the fast forward speed."}),e.jsx("p",{children:"Your fast forward setting will be saved between refreshes!"})]}),placement:a?"auto":"right",placementBeacon:"bottom",target:`#${CSS.escape(`${j}--fast-forward`)}`}],J={x:Math.floor(y.left),y:Math.floor(y.bottom+m)},ee={width:a?"auto":"100dvw",height:"auto"},ae=((Ce=d==null?void 0:d.controlPanel)==null?void 0:Ce.position)??J,te=((ke=d==null?void 0:d.controlPanel)==null?void 0:ke.size)??ee,H={onFocus:t==null?void 0:t.disableKeyboardInput,onBlur:t==null?void 0:t.enableKeyboardInput,onClick:t==null?void 0:t.enableKeyboardInput};return e.jsxs(e.Fragment,{children:[e.jsx(Pt,{"data-testid":"control-panel-wrapper",id:j,disableDragging:!s,enableResizing:r,resizeHandleComponent:{bottomRight:e.jsx(pe,{variation:"bottomRight"}),bottomLeft:e.jsx(pe,{variation:"bottomLeft"})},resizeHandleStyles:{bottomRight:{marginBottom:"15px",marginRight:"15px"},bottomLeft:{marginBottom:"15px",marginLeft:"15px"}},ref:v,cancel:".noDrag",position:ae,size:te,onDragStop:(N,V)=>{l("controlPanel",{position:{x:V.x,y:V.y}})},onResizeStart:()=>b(!0),onResizeStop:(N,V,L,z,U)=>{l("controlPanel",{size:{width:L.clientWidth,height:L.clientHeight},position:{...U}}),b(!1)},default:{...J,...ee},children:e.jsx(Vo,{$controlled:w,$isLargerThanPhone:a,children:e.jsxs(Mt.Provider,{value:{size:"2em"},children:[e.jsx(Fe,{id:`${j}--play`,ariaLabel:c||!o?"Play":"Pause",onClick:C,controlled:w,children:c||!o?e.jsx(us,{}):e.jsx(hs,{})}),e.jsx(Fe,{id:`${j}--quit-game`,ariaLabel:"Quit Game",onClick:()=>{p(),h(!1)},controlled:w,children:e.jsx(ps,{})}),e.jsx(Fe,{id:`${j}--drag`,ariaLabel:s?"Anchor Items":"Drag Items",onClick:()=>{n(N=>!N)},controlled:w,children:s?e.jsx(jt,{color:u.gbaThemeBlue}):e.jsx(jt,{})}),e.jsx(Fe,{id:`${j}--resize`,ariaLabel:r?"Stop Resizing Items":"Resize Items",onClick:()=>{i(N=>!N)},controlled:w,children:r?e.jsx(St,{color:u.gbaThemeBlue}):e.jsx(St,{})}),e.jsx(yt,{id:`${j}--volume-slider`,"aria-label":"Volume Slider",gridArea:"volume",controlled:w,value:S,step:.1,min:0,max:1,minIcon:e.jsx(Le,{"aria-label":"Mute Volume",icon:e.jsx(xs,{style:{maxHeight:"100%"}}),onClick:()=>F(0)}),maxIcon:e.jsx(Le,{"aria-label":"Max Volume",icon:e.jsx(gs,{style:{maxHeight:"100%"}}),onClick:()=>F(1)}),valueLabelFormat:`${S*100}`,onChange:P,...H}),e.jsx(yt,{id:`${j}--fast-forward`,"aria-label":"Fast Forward Slider",gridArea:"fastForward",controlled:w,value:R,step:1,min:1,max:5,minIcon:e.jsx(Le,{"aria-label":"Regular Speed",icon:e.jsx(ms,{style:{maxHeight:"100%"}}),onClick:()=>M(1)}),maxIcon:e.jsx(Le,{"aria-label":"Max Fast Forward",icon:e.jsx(fs,{style:{maxHeight:"100%"}}),onClick:()=>M(5)}),valueLabelFormat:`x${R}`,onChange:Y,...H})]})})}),e.jsx(be,{steps:Z,completedProductTourStepName:"hasCompletedControlPanelTour",zIndex:a?160:0,renderWithoutDelay:!0,isNotInModal:!0})]})},Dt="currentSaveStateSlot",Kt="areVirtualControlsEnabled",Yo="virtualControlProfiles",Zo=f.section`
  position: absolute;
  background-color: red;
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  background: ${({theme:t})=>t.pureBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-color: ${({$areItemsDraggable:t=!1,theme:o})=>t?o.gbaThemeBlue:"rgba(255, 255, 255, 0.9)"};
  border-style: ${({$areItemsDraggable:t=!1})=>t?"dashed":"solid"};
  border-width: 2px;
  z-index: 12;

  ${({$initialPosition:t={top:"0",left:"0"}})=>`
    top: ${t.top};
    left: ${t.left};
    `};
`,Jo=f.div`
  position: absolute;
  height: 4rem;
  width: 4rem;
  border: 2px solid ${({theme:t})=>t.gbaThemeBlue};
  border-radius: 50%;
  background-color: ${({theme:t})=>t.pureBlack};
  transition: ${({$isControlled:t=!1})=>t?"transform 0.3s ease-in-out":"none"};

  &:before {
    position: absolute;
    content: '';
    top: -0.8rem;
    left: -0.8rem;
    right: -0.8rem;
    bottom: -0.8rem;
    border: 0.8rem solid ${({theme:t})=>t.gbaThemeBlue}50;
    border-radius: 50%;
  }
`,_e=f.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
`,en=f(_e)`
  border-width: 0 15px 25px 15px;
  border-color: transparent transparent ${({theme:t})=>t.pureWhite}
    transparent;
  top: 10px;
`,tn=f(_e)`
  border-width: 25px 15px 0 15px;
  border-color: ${({theme:t})=>t.pureWhite} transparent transparent
    transparent;
  bottom: 10px;
`,sn=f(_e)`
  border-width: 15px 25px 15px 0;
  border-color: transparent ${({theme:t})=>t.pureWhite} transparent
    transparent;
  left: 10px;
`,on=f(_e)`
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent
    ${({theme:t})=>t.pureWhite};
  right: 10px;
`,nn=({initialPosition:t})=>{var v;const{emulator:o}=E(),{areItemsDraggable:s}=ze(),{layouts:n,setLayout:r}=ue(),[i,d]=x.useState({x:0,y:0}),[l,u]=x.useState(!0),a=x.useRef(null),c=x.useRef(null),[h,g]=x.useState({});x.useEffect(()=>{Object.keys(h).forEach(y=>{h[y]?o==null||o.simulateKeyDown(y):o==null||o.simulateKeyUp(y)})},[h,o]);const b=x.useCallback((y,m)=>g(w=>({...w,[y]:m})),[]),j=x.useCallback(y=>g(m=>Object.fromEntries(Object.entries(m).map(([w,C])=>[w,C===y?void 0:C]))),[]),p=({x:y,y:m})=>{const w=y*Math.cos(Math.PI/4)-m*Math.sin(Math.PI/4),C=y*Math.sin(Math.PI/4)+m*Math.cos(Math.PI/4);return w>=0&&C>=0?"RIGHT":w<0&&C>=0?"DOWN":w<0&&C<0?"LEFT":w>=0&&C<0?"UP":null},S=x.useCallback(y=>{if(!a.current||!c.current)return;const m=a.current.getBoundingClientRect(),w=c.current.getBoundingClientRect(),C=Math.max(-m.width/2+w.width/2,Math.min(y.clientX-m.left-m.width/2,m.width/2-w.width/2)),F=Math.max(-m.height/2+w.height/2,Math.min(y.clientY-m.top-m.height/2,m.height/2-w.height/2));s||d({x:C,y:F});const P=p({x:C,y:F});P&&!h[P]&&(j(y.pointerId),b(P,y.pointerId))},[s,h,b,j]),k=x.useCallback(y=>{if(u(!1),!a.current)return;const m=a.current.getBoundingClientRect(),w=y.clientX-m.left-m.width/2,C=y.clientY-m.top-m.width/2;s||d({x:w,y:C});const F=p({x:w,y:C});F&&b(F,y.pointerId)},[s,b]),R=y=>{u(!0),d({x:0,y:0}),j(y.pointerId)},$=((v=n==null?void 0:n.oPad)==null?void 0:v.position)??{x:0,y:0};return e.jsx(Xe,{nodeRef:a,disabled:!s,position:$,onStop:(y,m)=>r("oPad",{position:{x:m.x,y:m.y}}),children:e.jsxs(Zo,{"aria-label":"O-Pad",ref:a,$initialPosition:t,$areItemsDraggable:s,onPointerDown:k,onPointerMove:S,onPointerUp:R,onPointerCancel:R,onPointerOut:R,onPointerLeave:R,children:[e.jsx(Xe,{disabled:!0,nodeRef:c,position:i,children:e.jsx(Jo,{ref:c,$isControlled:l})}),e.jsx(sn,{}),e.jsx(on,{}),e.jsx(en,{}),e.jsx(tn,{})]})})},Gt=f(je)`
  background-color: ${({theme:t})=>t.darkGray};
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  box-sizing: content-box;
  border-width: 2px;
`,rn=f(Gt)`
  width: ${({$diameter:t=60})=>t}px;
  height: ${({$diameter:t=60})=>t}px;
  border-radius: 100px;
  border-color: ${({$areItemsDraggable:t=!1,theme:o})=>t?o.gbaThemeBlue:"rgba(255, 255, 255, 0.9)"};
  border-style: ${({$areItemsDraggable:t=!1})=>t?"dashed":"solid"};

  ${({$initialPosition:t={top:"0",left:"0"}})=>`
    top: ${t.top};
    left: ${t.left};
    `}
`,an=f(Gt)`
  border-radius: 16px;
  width: fit-content;
  min-width: 85px;
  border-color: ${({$areItemsDraggable:t=!1,theme:o})=>t?o.gbaThemeBlue:"rgba(255, 255, 255, 0.9)"};
  border-style: ${({$areItemsDraggable:t=!1})=>t?"dashed":"solid"};

  ${({$initialPosition:t={top:"0",left:"0"}})=>`
    top: ${t.top};
    left: ${t.left};
    `}
`,ln=({isRectangular:t=!1,width:o=60,children:s,keyId:n,inputName:r,onClick:i,initialPosition:d,initialOffset:l,enabled:u=!1,ariaLabel:a})=>{var $;const{emulator:c}=E(),{areItemsDraggable:h}=ze(),{layouts:g,setLayout:b}=ue(),j=x.useRef(null);if(!u)return null;const p=i?{onClick:i}:{},S=n?{onPointerDown:()=>{c==null||c.simulateKeyDown(n)},onPointerUp:()=>{c==null||c.simulateKeyUp(n)},onPointerLeave:()=>{c==null||c.simulateKeyUp(n)},onPointerOut:()=>{c==null||c.simulateKeyUp(n)},onPointerCancel:()=>{c==null||c.simulateKeyUp(n)}}:{},k=n?{onKeyDown:v=>{(v.code=="Space"||v.key==" ")&&(c==null||c.simulateKeyDown(n))},onKeyUp:v=>{(v.code=="Space"||v.key==" ")&&(c==null||c.simulateKeyUp(n))}}:{},R=(($=g==null?void 0:g[r])==null?void 0:$.position)??{x:0,y:0};return e.jsx(Xe,{nodeRef:j,positionOffset:l,position:R,disabled:!h,onStop:(v,y)=>b(r,{position:{x:y.x,y:y.y}}),children:t?e.jsx(an,{ref:j,$initialPosition:d,$areItemsDraggable:h,"aria-label":a,...S,...p,...k,children:s}):e.jsx(rn,{ref:j,$initialPosition:d,$diameter:o,$areItemsDraggable:h,"aria-label":a,...S,...p,...k,children:s})})},se="https://raw.githubusercontent.com/webesp124/gb_data/refs/heads/main",Xt=["FLASH1M_V102","FLASH1M_V103","FLASH_V124","FLASH_V126","FLASH_ECLA","EEPROM_V122","EEPROM_V124","SRAM_V112","SRAM_V113","REPRO_FLASH1M","NONE"],xt=t=>(console.log("Save Type: "+t),t[0]=="N"?0:t[0]=="E"?1:t[0]=="S"?3:t[0]=="F"&&t[5]=="1"?5:t[0]=="F"?4:t[0]=="R"&&t[11]=="1"?55:(console.log("Invalid Save Type"),-1)),Ve=(t,o)=>{let s=Number(o.cartSize/1024/1024),n="";return s==1?n=t.checksum_1MB:s==2?n=t.checksum_2MB:s==4?n=t.checksum_4MB:s==8?n=t.checksum_8MB:s==16&&(n=t.checksum_16MB),n.toUpperCase()},cn=t=>new Promise(o=>setTimeout(o,t)),dn=async t=>{let o,s;s=null;let n=!1,r="";try{if(o=await(await fetch(`${t}/get_game_info`,{method:"GET",headers:{"Access-Control-Request-Private-Network":"true"}})).json(),o.romName=="")throw new Error("Error Reading Cartridge, ROM name empty");if(n=!0,o.is_gba){if(s=await(await fetch(se+`/information_rom_gba/${o.cartID}.json?updated=12345678901`)).json(),console.log(s),s||(s={saveType:"REPRO_FLASH1M",cartSize:16*1024*1024}),r=Ve(o,s),r!=s.checksum1000){console.log("Checksums do not match. Trying to get a different one...");try{const l=await fetch(se+`/information_rom_gba/${r}-${o.cartID}.json?updated=12345678901`);if(!l.ok||l.status!=200)throw new Error(`HTTP error! Status: ${l.status}`);let u=await l.json();u&&Object.keys(u).length>0?(console.log("Additional Data exists"),s=u):console.log("Additional Data does not exist or is empty")}catch(l){console.error("An error occurred while fetching additional data: ",l)}}}else s=await(await fetch(se+`/information_rom_gb/${o.romName}.json`)).json(),console.log(s),o.checksumStr!=s.global_checksum&&console.log("Checksums do not match. Trying to get a different one...");return o&&!s&&(s={saveType:"REPRO_FLASH1M",cartSize:16*1024*1024},r=Ve(o,s)),[o,s,r,n]}catch(i){console.error("Error fetching game information:",i)}finally{return o&&!s&&(s={saveType:"REPRO_FLASH1M",cartSize:16*1024*1024},r=Ve(o,s)),[o,s,r,n]}},un=(t,o)=>{let s=o.coverImage;return s?s.startsWith("/")?t.is_gba?se+s.replace("/covers/","/covers_gba/"):se+s.replace("/covers/","/covers_gb/"):s.startsWith(".")?t.is_gba?se+s.substring(1).replace("/covers/","/covers_gba/"):se+s.substring(1).replace("/covers/","/covers_gb/"):s:""},gt=(t,o,s)=>{const n=o==null?void 0:o.getCurrentSave(),r=o==null?void 0:o.getCurrentSaveName();if(n&&r){const d=new XMLHttpRequest;if(!t){console.log("No save type information.");return}var i=xt(t.saveType);if(i==-1){console.log("Invalid Save Type");return}console.log(i);const l=new Promise((u,a)=>{d.open("POST",`${s}/upload_save_file?saveType=${i}`,!0),d.onload=()=>{if(d.status>=200&&d.status<300){const c=new XMLHttpRequest;c.open("POST",`${s}/verify_save_file?saveType=${i}`,!0),c.onload=()=>{c.status>=200&&c.status<300?u("Uploaded  and verified save on cartridge"):a("Save on cartridge has errors")},c.onerror=()=>a("Failed to upload save for verification"),c.send(n)}else a("Failed to upload save to cartridge")},d.onerror=()=>a("Failed to upload save to cartridge"),d.send(n)});G.promise(l,{loading:"Uploading save to cartridge...",success:u=>`${u}`,error:u=>`${u}`},{success:{duration:5e3},error:{duration:5e3}})}else G.error("Current save not available")};async function hn(t,o){async function s(d){const u=await(await fetch(d+"?updated=12345678901")).text(),a=[];let c=0,h=null;const g=u.split(`
`),b=/Change Group \d+: Start = (0x[0-9a-fA-F]+), End = (0x[0-9a-fA-F]+)/,j=/Original: ([0-9a-fA-F]+) -> Modified: ([0-9a-fA-F*]+)/,p=/Checksum Changes: ([0-9a-fA-F]+)/;for(const S of g){const k=S.match(b);if(k){h&&a.push(h);const v=parseInt(k[1],16),y=parseInt(k[2],16);h={start:v,end:y,modifications:[]};continue}const R=S.match(j);R&&h&&h.modifications.push([R[1],R[2]]);const $=S.match(p);$&&(c=parseInt($[1],16))}return h&&a.push(h),console.log(`Checksum changes: ${c}`),{changes:a,checksumChanges:c}}function n(d,l,u){let a=0;return l.forEach(c=>{const{start:h,modifications:g}=c;g.forEach(([,b],j)=>{const p=d[h+j];b!=="*"&&(a=a+p&4294967295)})}),console.log(`Cumulative checksum full: ${a}`),a===u}function r(d,l){return d-l&255}async function i(d,l){let u=0;return l.forEach(a=>{const{start:c,modifications:h}=a;h.forEach(([g,b],j)=>{const p=d[c+j];b!=="*"&&(u=u+p&255),console.log(`Cumulative checksum: ${u.toString(16)}, Modified: ${b}`);const S=r(b!=="*"?p:u,parseInt(g,16));console.log(`New original: ${S.toString(16)}`),g!=="*"&&(d[c+j]=S)})}),d}try{const{changes:d,checksumChanges:l}=await s(t.patchFile),u=new Uint8Array(o);if(!n(u,d,l))throw new Error("Checksum mismatch; patch may not be compatible with the ROM.");const a=await i(u,d);return new File([a],t.fullName??t.fileName??"patched_file.gba")}catch(d){throw console.error("Failed to apply custom patch:",d),new Error(`Patch application failed: ${d.message}`)}}const pn=(t,o)=>t?o:null,Qt=()=>{const{isRunning:t}=re(),{emulator:o}=E(),[,s]=B(it),n=x.useCallback(i=>o==null?void 0:o.addCoreCallbacks({saveDataUpdatedCallback:pn(i.saveFileSystemOnInGameSave,()=>{window.additionalData&&window.esp32IP&&gt(window.additionalData,o,window.esp32IP)})}),[o]),r=x.useCallback(i=>{s(d=>({...d,...i})),t&&n(i)},[n,t,s]);return{addCallbacks:n,addCallbacksAndSaveSettings:r}},mt=()=>{const{emulator:t}=E(),{setIsRunning:o}=re(),[,s]=B(At),[n]=B(_t),[r]=B(Ut,1),[i]=B(qt,1),[d]=B(it,{saveFileSystemOnInGameSave:!1,notificationsEnabled:!0}),{addCallbacks:l}=Qt();return x.useCallback(a=>{const c=t==null?void 0:t.run(a);return o(!!c),s(a),t==null||t.setVolume(r),c&&(n&&(t==null||t.remapKeyBindings(n)),i>1&&!(t!=null&&t.isFastForwardEnabled())&&(t==null||t.setFastForwardMultiplier(i)),l(d)),!!c},[l,d,r,n,t,i,o,s])},Yt=()=>{const t=mt(),{isRunning:o,setIsRunning:s}=re(),{emulator:n}=E(),[r]=B(At);return x.useCallback(()=>{if(o)n==null||n.quickReload();else if(n!=null&&n.getCurrentGameName()){const d=t(n.filePaths().gamePath+"/"+n.getCurrentGameName());s(!!d)}else if(r){const d=t(r);s(!!d)}},[n,o,s,t,r])},wt=f.p`
  text-align: center;
  vertical-align: middle;
  line-height: 54px;
  color: ${({theme:t})=>t.pureWhite};
  margin: 0;
  font-size: 1.5em;
`,Ie=f.p`
  color: ${({theme:t})=>t.pureWhite};
  margin: 4px 5px;
`,xn=t=>t.replace("-"," ").replace(/\w\S*/g,o=>o.charAt(0).toUpperCase()+o.substring(1).toLowerCase()),gn=({additionalData:t,esp32IP:o})=>{var y;const s=_(),n=ne(s.isLargerThanPhone),r=ne(s.isMobileWithUrlBar),{emulator:i}=E(),{layouts:d}=ue(),l=x.useId(),u=Yt(),[a]=B(Dt,0),[c]=B(Kt),h=(y=d==null?void 0:d.controlPanel)==null?void 0:y.initialBounds;if(!h)return null;const g=m=>m===void 0&&!n||!!m,b=g(c==null?void 0:c.OpadAndButtons),j=(c==null?void 0:c.NotificationsEnabled)??!0,p=h.bottom,S=h.left,k={"a-button":{defaultMobile:{top:`calc(${p}px + 12%)`,left:"calc(100dvw - 25px)"},mobileWithUrlBar:{top:`calc(${p}px + 10%)`},largerThanPhone:{top:`calc(${p}px + 35px - 3%)`,left:`calc(${S}px + 450px)`}},"b-button":{defaultMobile:{top:`calc(${p}px + 15%)`,left:"calc(100dvw - 100px)"},mobileWithUrlBar:{top:`calc(${p}px + 13%)`},largerThanPhone:{top:`calc(${p}px + 35px)`,left:`calc(${S}px + 375px)`}},"start-button":{defaultMobile:{top:"88dvh",left:"25dvw"},mobileWithUrlBar:{top:"92dvh",left:"50dvw"},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`${S}px`}},"select-button":{defaultMobile:{top:"88dvh",left:"55dvw"},mobileWithUrlBar:{top:"92dvh",left:"75dvw"},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`calc(${S}px + 103px)`}},"l-button":{defaultMobile:{top:`${p+15}px`,left:"15px"},largerThanPhone:{top:`calc(${p}px + 15px)`,left:`${S}px`}},"r-button":{defaultMobile:{top:`${p+15}px`,left:"calc(100dvw - 15px)"},largerThanPhone:{top:`calc(${p}px + 15px)`,left:`calc(${S}px + 190px)`}},"quickreload-button":{defaultMobile:{top:`${p+10}px`,left:"135px"},largerThanPhone:{top:`calc(${p}px + 10px)`,left:`calc(${S}px + 205px)`}},"uploadsave-button":{defaultMobile:{top:`${p+10}px`,left:"calc(100dvw - 135px)"},largerThanPhone:{top:`calc(${p}px + 10px)`,left:`calc(${S}px + 300px)`}},"loadstate-button":{defaultMobile:{top:`calc(${p}px + 25%)`,left:"calc(100dvw - 40px)"},mobileWithUrlBar:{top:`calc(${p}px + 23%)`},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`calc(${S}px + 248px)`}},"savestate-button":{defaultMobile:{top:`calc(${p}px + 27%)`,left:"calc(100dvw - 100px)"},mobileWithUrlBar:{top:`calc(${p}px + 25%)`},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`calc(${S}px + 300px)`}},"o-pad":{defaultMobile:{top:`calc(${p}px + 11%)`,left:"10px"},largerThanPhone:{top:`calc(${p}px + 10px)`,left:`calc(${S}px + 450px)`}}},R=m=>{var C,F,P,M;let w;return r&&((C=k[m])!=null&&C.mobileWithUrlBar)?w=(F=k[m])==null?void 0:F.mobileWithUrlBar:n&&((P=k[m])!=null&&P.largerThanPhone)&&(w=(M=k[m])==null?void 0:M.largerThanPhone),{...k[m].defaultMobile,...w}},$=(m,w,C)=>{j&&G[m?"success":"error"](m?w:C,{id:l})},v=[{keyId:"A",children:e.jsx(wt,{children:"A"}),initialPosition:R("a-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"a-button",enabled:b},{keyId:"B",children:e.jsx(wt,{children:"B"}),initialPosition:R("b-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"b-button",enabled:b},{keyId:"START",isRectangular:!0,children:e.jsx(Ie,{children:"Start"}),initialPosition:R("start-button"),keyName:"start-button",enabled:b},{keyId:"SELECT",isRectangular:!0,children:e.jsx(Ie,{children:"Select"}),initialPosition:R("select-button"),keyName:"select-button",enabled:b},{keyId:"L",isRectangular:!0,children:e.jsx(Ie,{children:"L"}),initialPosition:R("l-button"),keyName:"l-button",enabled:b},{keyId:"R",isRectangular:!0,children:e.jsx(Ie,{children:"R"}),initialPosition:R("r-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"r-button",enabled:b},{children:e.jsx(bs,{}),onClick:()=>{u(),!(i!=null&&i.getCurrentGameName())&&j&&G.error("Load a game to quick reload",{id:l})},width:40,initialPosition:R("quickreload-button"),keyName:"quickreload-button",enabled:g(c==null?void 0:c.QuickReload)},{children:e.jsx(js,{}),onClick:()=>{gt(t,i,o)},width:40,initialPosition:R("uploadsave-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"uploadsave-button",enabled:g(c==null?void 0:c.SendSaveToServer)},{children:e.jsx(Ss,{}),onClick:()=>{const m=i==null?void 0:i.loadSaveState(a);$(!!m,`Loaded slot: ${a}`,`Failed to load slot: ${a}`)},width:40,initialPosition:R("loadstate-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"loadstate-button",enabled:g(c==null?void 0:c.LoadState)},{children:e.jsx(Tt,{}),onClick:()=>{const m=i==null?void 0:i.createSaveState(a);$(!!m,`Saved slot: ${a}`,`Failed to save slot: ${a}`)},width:40,initialPosition:R("savestate-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"savestate-button",enabled:g(c==null?void 0:c.SaveState)}];return e.jsxs(Mt.Provider,{value:{color:s.pureWhite,size:"2em"},children:[b&&e.jsx(nn,{initialPosition:R("o-pad")}),v.map(m=>e.jsx(ln,{ariaLabel:xn(m.keyName),inputName:m.keyName,...m},m.keyName))]})},mn={overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:400},content:{width:"calc(100dvw - 20px)",height:"fit-content",margin:"25px auto auto auto",backgroundColor:"#fff",inset:"10px",maxWidth:"500px",padding:"0",maxHeight:"90dvh",display:"flex",touchAction:"none",flexDirection:"column",userSelect:"text",WebkitUserSelect:"text"}},fn=()=>{const{modalContent:t,isModalOpen:o,setIsModalOpen:s}=q(),{emulator:n}=E();return e.jsx(vs,{appElement:document.getElementById("root")||void 0,closeTimeoutMS:400,isOpen:o,style:mn,onRequestClose:()=>s(!1),onAfterOpen:n==null?void 0:n.disableKeyboardInput,onAfterClose:n==null?void 0:n.enableKeyboardInput,aria:{labelledby:"modalHeader"},children:t})},de=250,bn=f.li`
  color: ${({theme:t})=>t.pureWhite};
  padding: 0 2px;

  ${({$disabled:t=!1,theme:o})=>t&&`color: ${o.disabledGray};
     pointer-events: none;
     cursor: default;
    `}
`,jn=f(je)`
  background-color: unset;
  border: none;
  color: inherit;
  cursor: pointer;
  height: 100%;
  padding: 0.5rem 1rem;
  text-align: inherit;
  width: 100%;

  &:hover {
    color: ${({theme:t})=>t.menuHover};
    background-color: ${({theme:t})=>t.menuHighlight};
  }
`,Sn=f.span`
  margin-left: 0.5rem;
`,vn=f.ul`
  padding-left: 2rem;
`,De=({title:t,icon:o,children:s,$isExpanded:n=!1,$disabled:r=!1})=>{const[i,d]=x.useState(n?"auto":0);return x.useEffect(()=>{d(n?"auto":0)},[n]),e.jsxs(bn,{$disabled:r,children:[e.jsxs(jn,{disabled:r,onClick:()=>{d(i===0?"auto":0)},children:[o,e.jsx(Sn,{children:t})]}),e.jsx(ys,{duration:350,easing:"ease-in-out",height:i,children:e.jsx(vn,{children:s})})]})},yn=f.li`
  cursor: pointer;
  color: ${({theme:t})=>t.pureWhite};
  list-style-type: none;
  padding: 0 2px;

  ${({$disabled:t=!1,theme:o})=>t&&`color: ${o.disabledGray};
     pointer-events: none;
     cursor: default;
    `}

  &:hover {
    color: ${({theme:t})=>t.menuHover};
    background-color: ${({theme:t})=>t.menuHighlight};
  }
`,wn=f(je)`
  background-color: unset;
  border: none;
  color: inherit;
  height: 100%;
  margin: 0;

  padding: 0.5rem
    ${({$withPadding:t=!1})=>t?"1rem":"0.5rem"};

  text-align: inherit;
  width: 100%;
  cursor: pointer;
`,Cn=f.span`
  margin-left: 0.5rem;
`,kn=f.a`
  display: block;
  text-decoration: none;
  color: unset;
  outline-offset: 0;

  padding: 0.5rem
    ${({$withPadding:t=!1})=>t?"1rem":"0.5rem"};
`,A=({title:t,icon:o,onClick:s=void 0,$link:n=void 0,$disabled:r=!1,$withPadding:i=!1})=>{const d=e.jsxs(e.Fragment,{children:[o,e.jsx(Cn,{children:t})]});return e.jsx(yn,{$disabled:r,children:n?e.jsx(kn,{href:n,$withPadding:i,target:"_blank",children:d}):e.jsx(wn,{disabled:r,onClick:s,$withPadding:i,children:d})})},$n=f.div`
  text-align: center;
`,ft=f.p`
  text-align: center;
  margin: 0;
`,Zt=f.h3`
  margin: 0;
`,Jt=f.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({theme:t})=>t.pattensBlue};
  padding: 1rem 1rem;
`,es=f.div`
  padding: 1rem;
  overflow-y: auto;
`,ts=f.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid ${({theme:t})=>t.pattensBlue};
  padding: 1rem 1rem;
`,bt=f(ws)`
  width: 25px;
  height: 25px;
`,X=({children:t,className:o})=>e.jsx(es,{className:o,children:t}),Q=({children:t})=>e.jsx(ts,{"data-testid":"modal-footer:wrapper",children:t}),Rn=f.button`
  width: 1em;
  height: 1em;
  padding: 1rem;
  margin: 0 0 0 auto;
  cursor: pointer;
  color: ${({theme:t})=>t.pureBlack};
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;

  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    opacity: 1;
  }

  &:hover {
    opacity: 0.75;
  }

  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
`,W=({title:t,showExitIndicator:o=!0,onClose:s})=>{const{setIsModalOpen:n}=q();return e.jsxs(Jt,{children:[e.jsx(Zt,{id:"modalHeader",children:t}),o&&e.jsx(Rn,{"aria-label":"Close",onClick:()=>{n(!1),s==null||s()}})]})},Fn=()=>{const t=x.useCallback(async i=>{var g,b,j;const d={method:"GET"};if(!i)return;const l=await fetch(i.url,d),u=(j=(b=(g=l.headers.get("Content-Disposition"))==null?void 0:g.split(";").pop())==null?void 0:b.split("=").pop())==null?void 0:j.replace(/"/g,""),a=decodeURIComponent(i.url.pathname.split("/").pop()??"unknown_external.gba");if(!l.ok)throw new Error(`Received unexpected status code: ${l.status}`);const c=await l.blob();return new File([c],u??a)},[]),{data:o,isLoading:s,error:n,execute:r}=ye({fetchFn:t,clearDataOnLoad:!0});return{data:o,isLoading:s,error:n,execute:r}},Ln=f.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,In=f.p`
  margin: 0;
  color: ${({theme:t})=>t.errorRed};
`,Se=({icon:t,text:o,className:s})=>e.jsxs(Ln,{"data-testid":"error-with-icon",className:s,children:[t,e.jsx(In,{children:o})]}),Pn=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 15px;
`,Mn=f.p`
  word-wrap: break-word;
  max-width: 100%;
`,Tn=t=>{const o=_();return e.jsx(tt,{color:o.gbaThemeBlue,cssOverride:{margin:"0 auto"},...t})},Nn=({children:t,currentName:o,indicator:s,isLoading:n,loadingCopy:r})=>n?e.jsxs(Pn,{children:[e.jsxs(Mn,{children:[r,e.jsx("br",{}),o]}),s]}):t,Bn=f.a`
  word-break: break-all;
`,En=f.p`
  margin: 0;
`,On=({url:t})=>e.jsxs(ho,{children:[e.jsx(po,{expandIcon:e.jsx(Cs,{}),children:e.jsx(En,{children:"View Full URL"})}),e.jsx(xo,{children:e.jsx(Bn,{href:t.href,target:"_blank",rel:"noopener",children:t.href})})]}),zn=({url:t,onLoadOrDismiss:o})=>{const s=_(),{setIsModalOpen:n}=q(),{emulator:r}=E(),[i,d]=x.useState(!1),[l,u]=x.useState(null),a=x.useId(),c=mt(),{data:h,isLoading:g,error:b,execute:j}=Fn();return x.useEffect(()=>{if(!g&&h&&l){const p=()=>{c((r==null?void 0:r.filePaths().gamePath)+"/"+h.name)&&(o("loaded"),n(!1))};r==null||r.uploadRom(h,p),u(null),d(!0)}},[o,c,l,r,h,g,n]),e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Upload Public Rom",onClose:()=>o("temporarily-dismissed")}),e.jsx(X,{children:e.jsxs(Nn,{isLoading:g,currentName:l,indicator:e.jsx(Tn,{}),loadingCopy:"Loading rom from url:",children:[!i&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"A public rom URL has been shared with you."}),e.jsx("p",{children:"You can load it using the upload button!"}),e.jsx("p",{children:"Make sure you trust the provider before uploading:"})]}),e.jsx(On,{url:t}),!!b&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:s.errorRed}}),text:"Loading rom from URL has failed"}),i&&e.jsx($n,{children:e.jsx("p",{children:"Upload complete!"})})]})}),e.jsxs(Q,{children:[e.jsx(T,{id:a,onClick:()=>{u(t.href),j({url:t})},type:"submit",variant:"contained",children:"Upload"}),e.jsx(T,{variant:"outlined",onClick:()=>{o(b?"skipped-error":"skipped"),n(!1)},children:"Don't ask again"})]})]})},Un="romURL",_n="hasLoadedPublicExternalRoms",ss=()=>{var l;const[t,o]=B(_n),[s]=B(Ue),n=ks(),i=new URLSearchParams((l=window==null?void 0:window.location)==null?void 0:l.search).get(Un),d=!!i&&(t==null?void 0:t[i])!="loaded"&&(t==null?void 0:t[i])!="skipped"&&(t==null?void 0:t[i])!="temporarily-dismissed"&&!!(s!=null&&s.hasCompletedProductTourIntro);return n&&o(u=>Object.fromEntries(Object.entries(u??{}).map(([a,c])=>[a,c==="temporarily-dismissed"?"pending":c]))),{shouldShowPublicRomModal:d,setHasLoadedPublicRoms:o,romURL:i}},An=()=>{const{setModalContent:t,isModalOpen:o,setIsModalOpen:s}=q(),{shouldShowPublicRomModal:n,setHasLoadedPublicRoms:r,romURL:i}=ss();x.useEffect(()=>{if(n&&i&&!o)try{const d=new URL(i),l=u=>{r(a=>({...a,[i]:u}))};t(e.jsx(zn,{url:d,onLoadOrDismiss:l})),s(!0)}catch{G.error("Invalid external rom URL"),r(d=>({...d,[i]:"error"}))}},[i,n,s,t,r,o])},qn=()=>{const{setIsModalOpen:t}=q(),[,o]=B(Ue);return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"About"}),e.jsxs(X,{children:[e.jsx("p",{children:"Gbajs3 is a full featured Game Boy Advance emulator meant to operate online and offline in the browser."}),e.jsx("p",{children:"We currently support the mGBA core through the use of webassembly."}),e.jsx("p",{children:"Getting Started:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using the ",e.jsx("i",{children:"Pre Game Actions"})," menu, upload a sav file if you have one available"]}),e.jsxs("li",{children:["Then, load a rom of your choice through the ",e.jsx("i",{children:"Upload Rom"})," or"," ",e.jsx("i",{children:"Load Local Rom"})," menu items"]}),e.jsx("li",{children:"Enjoy, your game will boot!"})]}),e.jsxs("p",{children:["See the"," ",e.jsx("a",{href:"https://github.com/thenick775/gbajs3/wiki",target:"_blank",children:"WIKI"})," ","and tour items for further information!"]})]}),e.jsxs(Q,{children:[e.jsx(T,{variant:"contained",onClick:()=>{o({}),t(!1)},children:"Take a tour"}),e.jsx(T,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]})]})},os=st`
  100% {
    stroke-dashoffset: 0;
  }
`,Wn=st`
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`,Hn=st`
  100% {
    box-shadow: inset 0 0 0 100vh var(--checkmark-fill-color);
  }
`,Vn=f.svg`
  position: absolute;
  width: 24px;
  height: 24px;

  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  stroke: ${({theme:t})=>t.pureWhite};
  stroke-width: 5;
  stroke-miterlimit: 10;
  animation: ${Hn} 0.2s ease-in-out 0.2s forwards,
    ${Wn} 0.12s ease-in-out 0.45s both;
`,Dn=f.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 5;
  stroke-miterlimit: 10;
  stroke: ${({theme:t})=>t.checkMarkGreen};
  fill: none;
  animation: ${os} 0.3s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`,Kn=f.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${os} 0.15s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
`,Gn=f.span`
  ${({$isSuccessCheckVisible:t=!1})=>t&&"visibility: hidden;"}
`,we=({copy:t,msDuration:o=1100,onClick:s,showSuccess:n=!0,...r})=>{const i=x.useId(),[d,l]=x.useState(!1),u=!!n&&d;return et(()=>l(!1),u?o:null),e.jsxs(T,{onClick:a=>{l(!0),s==null||s(a)},variant:"contained",...r,children:[u&&e.jsxs(Vn,{role:"graphics-symbol","aria-labelledby":i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[e.jsx("title",{id:i,children:"Circle Check"}),e.jsx(Dn,{cx:"26",cy:"26",r:"25",fill:"none"}),e.jsx(Kn,{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]}),e.jsx(Gn,{$isSuccessCheckVisible:u,children:t})]})},ce=Ee.forwardRef(({id:t,label:o,watcher:s,...n},r)=>e.jsx(Ot,{"data-testid":"managed-checkbox:label",id:t,control:e.jsx(ve,{ref:r,checked:!!s,...n}),label:o,style:{margin:0}})),Xn=f.ul`
  list-style: none;
  display: ${({$shouldHide:t=!1})=>t?"none":"flex"};
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin: 0;
  max-width: 100%;
`,Qn=f.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid ${({theme:t})=>t.pattensBlue};
  padding-bottom: 10px;
  width: 100%;
`,Yn=f($s)`
  min-height: 40px;
  min-width: 40px;
`,Ct=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${({$fullWidth:t=!1})=>t?"100%":"auto"};

  @media ${({theme:t})=>t.isLargerThanPhone} {
    flex-direction: row;
  }
`,Zn=f.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
`,Jn=f.p`
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: ${({$withMargin:t=!1})=>t?"5px":"0"};
`,er=()=>{var m;const t=_(),o=ne(t.isLargerThanPhone),{setIsModalOpen:s}=q(),{emulator:n}=E(),[r,i]=x.useState(!1),d=x.useId(),l={desc:"",code:"",enable:!1},[u,a]=x.useMemo(()=>{const w=n==null?void 0:n.getCurrentCheatsFile(),C=new TextDecoder().decode(w);return[C,n==null?void 0:n.parseCheatsString(C)]},[n]),{register:c,control:h,handleSubmit:g,watch:b,setValue:j,formState:{errors:p,isSubmitSuccessful:S}}=me({defaultValues:{rawCheats:u,cheats:a!=null&&a.length?a:[l]}}),{fields:k,append:R,remove:$}=Rs({control:h,name:"cheats"}),v=x.useCallback(()=>{const w=n==null?void 0:n.getCurrentCheatsFile(),C=new TextDecoder().decode(w),F=(n==null?void 0:n.parseCheatsString(C))??[];r?j("cheats",F):j("rawCheats",C)},[n,j,r]),y=[{content:e.jsx("p",{children:"Use this form to enter, add, and delete cheats."}),target:`#${CSS.escape(`${d}--cheats-form`)}`},{content:e.jsx("p",{children:"This form field is for the name of the cheat."}),target:`#${CSS.escape(`${d}--name`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Put your cheat code into this field."}),e.jsx("p",{children:"Remember to separate multi-line cheats with the '+' character!"})]}),target:`#${CSS.escape(`${d}--cheat-code`)}`},{content:e.jsx("p",{children:"Use the checkbox to enable/disable a cheat."}),placement:"right",target:`#${CSS.escape(`${d}--enabled`)}`},{content:e.jsx("p",{children:"Use the trash button to remove a cheat entirely."}),placement:"right",target:`#${CSS.escape(`${d}--remove`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"plus"})," button to add a new cheat."]}),target:`#${CSS.escape(`${d}--add-cheat`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"Submit"})," button to save your cheats, and convert them to libretro format."]}),target:`#${CSS.escape(`${d}--submit-button`)}`},{content:e.jsx("p",{children:"Use this button to toggle between viewing parsed cheats or raw cheats in libretro file format."}),placement:"right",target:`#${CSS.escape(`${d}--toggle-raw-cheats`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Manage Cheats"}),e.jsx(X,{children:e.jsxs("form",{"aria-label":"Cheats Form",id:`${d}--cheats-form`,onSubmit:g(w=>{const C=r?new File([new Blob([w.rawCheats],{type:"text/plain"})],(n==null?void 0:n.getCurrentCheatsFileName())??"unknown.cheats"):n==null?void 0:n.parsedCheatsToFile(w.cheats);C&&(n==null||n.uploadCheats(C,()=>{n.autoLoadCheats(),v()}))}),children:[e.jsx(oe,{error:!!(p!=null&&p.rawCheats),label:"Raw Libretro Cheats",InputLabelProps:{shrink:!0},multiline:!0,fullWidth:!0,minRows:6,variant:"outlined",InputProps:{sx:{textarea:{whiteSpace:"pre",overflowX:"auto !important"}}},helperText:(m=p==null?void 0:p.rawCheats)==null?void 0:m.message,style:{display:r?"block":"none"},...c("rawCheats")}),e.jsx(Xn,{$shouldHide:r,children:k.map((w,C)=>{var P,M,Y,Z,J,ee,ae,te,H,ie;const F=he=>C===0?he:void 0;return e.jsxs(Qn,{children:[e.jsxs(Ct,{$fullWidth:!0,children:[e.jsx(oe,{id:F(`${d}--name`),label:"Name",error:!!((M=(P=p==null?void 0:p.cheats)==null?void 0:P[C])!=null&&M.desc),size:"small",autoComplete:"Name",style:o?{maxWidth:100}:void 0,helperText:(J=(Z=(Y=p==null?void 0:p.cheats)==null?void 0:Y[C])==null?void 0:Z.desc)==null?void 0:J.message,...c(`cheats.${C}.desc`,{required:{value:!0,message:"required"}})}),e.jsx(oe,{id:F(`${d}--cheat-code`),label:"Cheat Code",error:!!((ae=(ee=p==null?void 0:p.cheats)==null?void 0:ee[C])!=null&&ae.code),size:"small",autoComplete:"Code",helperText:(ie=(H=(te=p==null?void 0:p.cheats)==null?void 0:te[C])==null?void 0:H.code)==null?void 0:ie.message,...c(`cheats.${C}.code`,{required:{value:!0,message:"required"}})})]}),e.jsxs(Ct,{children:[e.jsx(ce,{id:F(`${d}--enabled`),label:"Enabled",watcher:b(`cheats.${C}.enable`),...c(`cheats.${C}.enable`)}),e.jsx(D,{"aria-label":"Delete",id:F(`${d}--remove`),sx:{padding:0,marginRight:"auto","&:hover":{borderRadius:"10px"},"&:focus":{borderRadius:"10px"},"& .MuiTouchRipple-root .MuiTouchRipple-child":{borderRadius:"10px"}},onClick:()=>$(C),children:e.jsx(Yn,{})})]})]},w.id)})}),e.jsxs(Zn,{children:[e.jsx(D,{"aria-label":"Create new cheat",id:`${d}--add-cheat`,sx:{padding:0,display:r?"none":"flex"},onClick:()=>R(l),children:e.jsx(bt,{})}),e.jsx(Jn,{$withMargin:r,children:"Join multi-line codes with '+'"})]})]})}),e.jsxs(Q,{children:[e.jsx(we,{copy:"Submit",form:`${d}--cheats-form`,id:`${d}--submit-button`,showSuccess:S,type:"submit"}),e.jsx(T,{id:`${d}--toggle-raw-cheats`,color:"info",variant:"contained",onClick:()=>i(w=>!w),children:r?"Parsed":"Raw"}),e.jsx(T,{variant:"outlined",onClick:()=>s(!1),children:"Close"})]}),e.jsx(be,{steps:y,completedProductTourStepName:"hasCompletedCheatsTour"})]})},tr=f.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,sr=({id:t,onAfterSubmit:o})=>{const{emulator:s}=E(),{isRunning:n}=re(),{handleSubmit:r,setValue:i,control:d,formState:{errors:l}}=me(),u=s==null?void 0:s.defaultKeyBindings(),[a,c]=B(_t),h=b=>{const j=Object.entries(b).filter(([,p])=>!!p).map(([,p])=>p);n&&(s==null||s.remapKeyBindings(j)),c(j),o()},g=a??u;return e.jsx(tr,{"aria-label":"Key Bindings Form",id:t,onSubmit:r(h),children:g==null?void 0:g.map(b=>e.jsx(Nt,{control:d,name:b.gbaInput,defaultValue:b,rules:{validate:{noSpace:j=>j.key!==" "||"Space is reserved for accessibility requirements",noTab:j=>{var p;return((p=j.key)==null?void 0:p.toLowerCase())!=="tab"||"Tab is reserved for accessibility requirements"}}},render:({field:{value:j}})=>{var p;return e.jsx(oe,{variant:"outlined",label:j.gbaInput,value:j.key,onKeyDown:S=>{S.key.toLowerCase()!=="tab"&&(i(j.gbaInput,{gbaInput:j.gbaInput,key:S.key,location:S.location}),S.preventDefault())},error:!!l[b.gbaInput],helperText:(p=l==null?void 0:l[b.gbaInput])==null?void 0:p.message})}},`gba_input_${b.gbaInput.toLowerCase()}`))})},ns=Ee.forwardRef(({id:t,label:o,watcher:s,...n},r)=>e.jsx(Ot,{"data-testid":"managed-switch:label",id:t,control:e.jsx(go,{ref:r,checked:!!s,...n}),label:o,style:{margin:0}})),or=f.form`
  display: flex;
  flex-direction: column;
`,nr=({id:t,onAfterSubmit:o})=>{const[s,n]=B(Kt),r=_(),i=ne(r.isLargerThanPhone),d=h=>h===void 0&&!i||!!h,{register:l,handleSubmit:u,watch:a}=me({values:s??{OpadAndButtons:d(void 0),SaveState:d(void 0),LoadState:d(void 0),QuickReload:d(void 0),SendSaveToServer:d(void 0),NotificationsEnabled:!0},resetOptions:{keepDirtyValues:!0}}),c=async h=>{n(g=>({...g,...h})),o()};return e.jsxs(or,{"aria-label":"Virtual Controls Form",id:t,onSubmit:u(c),children:[e.jsx(ce,{label:"Virtual D-pad/Buttons",watcher:a("OpadAndButtons"),...l("OpadAndButtons")}),e.jsx(ce,{label:"Display 'Save State' button",watcher:a("SaveState"),...l("SaveState")}),e.jsx(ce,{label:"Display 'Load State' button",watcher:a("LoadState"),...l("LoadState")}),e.jsx(ce,{label:"Display 'Quick Reload' button",watcher:a("QuickReload"),...l("QuickReload")}),e.jsx(ce,{label:"Display 'Save to Cartridge' button",watcher:a("SendSaveToServer"),...l("SendSaveToServer")}),e.jsx(ns,{label:"Enable Notifications",watcher:a("NotificationsEnabled"),...l("NotificationsEnabled")})]})},Te=f.li`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 32px;
  gap: 10px;

  color: ${({theme:t})=>t.blueCharcoal};
  background-color: ${({theme:t})=>t.pureWhite};
  border: 1px solid rgba(0, 0, 0, 0.125);
`,rr=f.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  & > ${Te}:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & > ${Te}:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & > ${Te}:not(:first-child) {
    border-top-width: 0;
  }
`,ar=f(Oe)`
  height: 100%;
  width: 20px;
`,ir=f(Bt)`
  height: 100%;
  width: 20px;
`,lr=f(Tt)`
  height: 100%;
  width: 20px;
`,cr=f.button`
  padding: 0.5rem 0.5rem;
  width: 100%;
  color: ${({theme:t})=>t.blueCharcoal};
  background-color: ${({theme:t})=>t.pureWhite};
  border: none;
  text-align: left;
  font-size: 16px;
  height: 32px;

  &:hover {
    color: ${({theme:t})=>t.darkGrayBlue};
    background-color: ${({theme:t})=>t.aliceBlue1};
  }
`,dr=f.div`
  display: flex;
  gap: 10px;
`,ur=({condition:t,truthyIcon:o,falsyIcon:s,...n})=>e.jsx(D,{sx:{padding:0},...n,children:t?o:s}),hr=({name:t,loadProfile:o,onSubmit:s})=>{const[n,r]=x.useState(!1),[i,d]=x.useState(t),l=u=>{n&&u&&s(u),r(a=>!a)};return e.jsxs(dr,{children:[n?e.jsx(oe,{variant:"standard",sx:{width:"100%","& .MuiInputBase-input":{paddingLeft:"8px"}},error:!i,value:i,onChange:u=>d(u.target.value)}):e.jsx(cr,{onClick:o,children:t}),e.jsx(ur,{condition:n,truthyIcon:e.jsx(lr,{}),falsyIcon:e.jsx(ir,{}),"aria-label":`${n?"Save":"Edit"} ${t}'s name`,type:"submit",onClick:()=>l(i)})]})},pr=({id:t})=>{var u;const[o,s]=B(Yo),{layouts:n,setLayouts:r}=ue(),i=()=>{s(a=>[...a??[],{id:Fs(),name:`Profile-${((a==null?void 0:a.length)??0)+1}`,layouts:n,active:!0}])},d=(a,c)=>{s(h=>h==null?void 0:h.map(g=>g.id==a?{...g,name:c}:g))},l=a=>{s(c=>c==null?void 0:c.filter(h=>h.id!==a))};return e.jsxs(e.Fragment,{children:[e.jsxs(rr,{id:t,"aria-label":"Profiles List",children:[(u=o==null?void 0:o.map)==null?void 0:u.call(o,(a,c)=>e.jsxs(Te,{children:[e.jsx(hr,{name:a.name,loadProfile:()=>r(a.layouts),onSubmit:h=>d(a.id,h)}),e.jsx(D,{"aria-label":`Delete ${a.name}`,sx:{padding:0},onClick:()=>l(a.id),children:e.jsx(ar,{})})]},`${a.name}_${c}_action_list_item`)),!(o!=null&&o.length)&&e.jsx("li",{children:e.jsx(ft,{children:"No control profiles"})})]}),e.jsx(D,{"aria-label":"Create New Profile",sx:{padding:0},onClick:()=>i(),children:e.jsx(bt,{})})]})},xr=f(mo)`
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);

  & .MuiTabs-scrollButtons {
    width: fit-content;
  }
`,gr=f.div`
  padding: 24px;
`,Ne=t=>({id:`control-tab-${t}`,"aria-controls":`tabpanel-${t}`}),Ke=({children:t,index:o,value:s})=>e.jsx("div",{role:"tabpanel",hidden:s!==o,id:`tabpanel-${o}`,"aria-labelledby":`tab-${o}`,children:s===o&&e.jsx(gr,{children:t})}),mr=({setFormId:t,virtualControlsFormId:o,controlProfilesFormId:s,keyBindingsFormId:n,resetPositionsButtonId:r,setIsSuccessfulSubmit:i})=>{const{clearLayouts:d}=ue(),[l,u]=x.useState(0),a=g=>{switch(g){case 0:return o;case 1:return s;case 2:return n;default:return o}},c=(g,b)=>{u(b),t(a(b)),i(!1)},h=()=>i(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(xr,{variant:"scrollable",value:l,onChange:c,"aria-label":"Control tabs",allowScrollButtonsMobile:!0,children:[e.jsx(We,{label:"Virtual Controls",...Ne(0)}),e.jsx(We,{label:"Profiles",...Ne(1)}),e.jsx(We,{label:"Key Bindings",...Ne(2)})]}),e.jsxs(Ke,{value:l,index:0,children:[e.jsx(nr,{id:o,onAfterSubmit:h}),e.jsx(T,{id:r,sx:{marginTop:"10px"},onClick:d,children:"Reset All Positions"})]}),e.jsx(Ke,{value:l,index:1,children:e.jsx(pr,{id:s})}),e.jsx(Ke,{value:l,index:2,children:e.jsx(sr,{id:n,onAfterSubmit:h})})]})},fr=()=>{const{setIsModalOpen:t}=q(),o=x.useId(),[s,n]=x.useState(`${o}--virtual-controls-form`),[r,i]=x.useState(!1),d=[{content:e.jsx("p",{children:"Select which virtual controls you wish to enable in this form tab."}),target:`#${CSS.escape(`${o}--virtual-controls-form`)}`},{content:e.jsx("p",{children:"Use this button to reset the positions of the screen, control panel, and all virtual controls."}),target:`#${CSS.escape(`${o}--reset-positions-button`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use the tab panel to change which form you are seeing."}),e.jsxs("p",{children:["Select the ",e.jsx("i",{children:"KEY BINDINGS"})," tab above, then click next!"]})]}),placement:"right",target:`#${CSS.escape(Ne(1).id)}`,disableBeacon:!0,disableOverlayClose:!0,hideCloseButton:!1,spotlightClicks:!0},{content:e.jsx("p",{children:"Remap keybindings by selecting a form field and typing your desired input."}),placement:"top-end",target:`#${CSS.escape(`${o}--key-bindings-form`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"Save Changes"})," button to persist changes from the current form tab."]}),target:`#${CSS.escape(`${o}--save-changes-button`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Controls"}),e.jsx(X,{children:e.jsx(mr,{setFormId:n,virtualControlsFormId:`${o}--virtual-controls-form`,controlProfilesFormId:`${o}--control-profiles`,keyBindingsFormId:`${o}--key-bindings-form`,resetPositionsButtonId:`${o}--reset-positions-button`,setIsSuccessfulSubmit:i})}),e.jsxs(Q,{children:[s!==`${o}--control-profiles`&&e.jsx(we,{copy:"Save Changes",form:s,id:`${o}--save-changes-button`,type:"submit",showSuccess:r}),e.jsx(T,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]}),e.jsx(be,{steps:d,completedProductTourStepName:"hasCompletedControlsTour"})]})},br=()=>{const t=_(),{setIsModalOpen:o}=q(),{emulator:s}=E(),n=x.useId(),[r,i]=x.useState(!1),d=[{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this button to download your current save file."}),e.jsx("p",{children:"Remember to save in game before downloading!"})]}),placement:"right",target:`#${CSS.escape(n)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Download Save"}),e.jsx(X,{children:r?e.jsx(Se,{icon:e.jsx(ge,{style:{color:t.errorRed}}),text:"Load a rom to download its save file"}):e.jsx(ft,{children:"Remember to save in game before downloading your save file!"})}),e.jsxs(Q,{children:[e.jsx(T,{id:n,variant:"contained",onClick:()=>{const l=s==null?void 0:s.getCurrentSave(),u=s==null?void 0:s.getCurrentSaveName();if(l&&u){const a=new Blob([l],{type:"data:application/octet-stream"}),c=document.createElement("a");c.download=u,c.href=URL.createObjectURL(a),c.click(),c.remove()}else i(!0)},children:"Download"}),e.jsx(T,{variant:"outlined",onClick:()=>o(!1),children:"Close"})]}),e.jsx(be,{steps:d,completedProductTourStepName:"hasCompletedDownloadSaveTour"})]})},rs=t=>e.jsx(ot,{"data-testid":"action-box:minus",className:"minus",fontSize:"inherit",style:{width:14,height:14},...t,children:e.jsx("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"})}),as=t=>e.jsx(ot,{"data-testid":"action-box:plus",className:"plus",fontSize:"inherit",style:{width:14,height:14},...t,children:e.jsx("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"})}),jr=t=>e.jsx(ot,{"data-testid":"action-box:close",className:"close",fontSize:"inherit",style:{width:14,height:14},...t,children:e.jsx("path",{d:"M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"})}),Sr=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  > p {
    margin: 0;
    word-wrap: break-word;
    max-width: 100%;
  }
`,vr=f.div`
  display: flex;
  gap: 15px;
`,yr=fo(t=>e.jsx(bo,{...t}))(({theme:t})=>({marginTop:5,[`& .${He.iconContainer}`]:{"& .close":{opacity:.3}},[`& .${He.groupTransition}`]:{marginLeft:15,paddingLeft:10,borderLeft:`1px dashed ${jo(t.palette.text.primary,.4)}`},[`& .${He.content}`]:{width:"auto",alignItems:"baseline"}})),wr=({id:t,allFiles:o,deleteFile:s,downloadFile:n})=>{if(!o)return null;const r=i=>{const d=i.path.split("/").pop(),l=e.jsxs(Sr,{children:[e.jsx("p",{children:d}),e.jsxs(vr,{children:[e.jsx(D,{"aria-label":`Download ${d}`,sx:{padding:0,margin:0},onClick:()=>n(i.path),children:e.jsx(Et,{})}),e.jsx(D,{"aria-label":`Delete ${d}`,sx:{padding:0},onClick:()=>s(i.path),children:e.jsx(Oe,{})})]})]});return e.jsx(yr,{itemId:i.path,label:i.isDir?d:l,children:i.isDir&&i.children?i.children.map(u=>r(u)):null},i.path)};return e.jsx(So,{id:t,"aria-label":"File System",defaultExpandedItems:[o.path],slots:{collapseIcon:rs,endIcon:jr,expandIcon:as},sx:{height:"fit-content"},children:r(o)})},is=It`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`,Cr=f.form`
  display: flex;
  flex-direction: column;

  /* copying styles from the treeitem to match file system display */
  & p {
    ${is}
  }
`,kr=f.p`
  margin: 0;
  ${is}
`,$r=f(je)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: unset;
  border: none;
  color: inherit;
  margin: 0;
`,Rr=({id:t})=>{const[o]=B(it),{addCallbacksAndSaveSettings:s}=Qt(),[n,r]=x.useState(!1),{register:i,handleSubmit:d,watch:l}=me({values:o,resetOptions:{keepDirtyValues:!0}});return e.jsxs("div",{id:t,children:[e.jsxs($r,{onClick:()=>r(u=>!u),children:[e.jsx(kr,{children:"Options"}),n?e.jsx(rs,{}):e.jsx(as,{})]}),e.jsx(vo,{in:n,children:e.jsxs(Cr,{"aria-label":"File System Options Form",onSubmit:d(s),children:[e.jsx(ce,{label:"Save to cartridge on in-game save",watcher:l("saveFileSystemOnInGameSave"),...i("saveFileSystemOnInGameSave")}),e.jsx(ns,{label:"Enable Notifications",watcher:l("notificationsEnabled"),...i("notificationsEnabled")}),e.jsx(T,{sx:{width:"fit-content"},type:"submit",children:"Save Options"})]})})]})},Fr=f(X)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`,Lr=()=>{const{setIsModalOpen:t}=q(),{emulator:o}=E(),[s,n]=x.useState(),r=x.useId(),i=x.useCallback(a=>{o==null||o.deleteFile(a),n(o==null?void 0:o.listAllFiles())},[o]),d=a=>{const c=a.split("/").pop(),h=o==null?void 0:o.getFile(a);if(h&&c){const g=new Blob([h],{type:"data:application/octet-stream"}),b=document.createElement("a");b.download=c,b.href=URL.createObjectURL(g),b.click(),b.remove()}},l=s??(o==null?void 0:o.listAllFiles()),u=[{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this area to view your current file tree, download files, and delete files from the tree."}),e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"plus"})," and ",e.jsx("i",{children:"minus"})," icons to open and close file tree branches!"]})]}),target:`#${CSS.escape(`${r}--emulator-file-system`)}`},{content:e.jsxs("p",{children:["Click the ",e.jsx("i",{children:"Options"})," label to adjust and save settings related to the file system."]}),target:`#${CSS.escape(`${r}--file-system-options`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"SAVE FILE SYSTEM"})," button to persist all of your files to your device!"]}),target:`#${CSS.escape(`${r}--save-file-system-button`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"File System"}),e.jsxs(Fr,{children:[e.jsx(wr,{id:`${r}--emulator-file-system`,allFiles:l,deleteFile:i,downloadFile:d}),e.jsx(Rr,{id:`${r}--file-system-options`})]}),e.jsxs(Q,{children:[e.jsx(we,{copy:"Save File System",id:`${r}--save-file-system-button`,onClick:o==null?void 0:o.fsSync}),e.jsx(T,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]}),e.jsx(be,{steps:u,completedProductTourStepName:"hasCompletedFileSystemTour"})]})},Ir=f.button`
  padding: 0.5rem 0.5rem;
  width: 100%;
  color: ${({theme:t})=>t.blueCharcoal};
  background-color: ${({theme:t})=>t.pureWhite};
  border: none;
  text-align: left;

  &:hover {
    color: ${({theme:t})=>t.darkGrayBlue};
    background-color: ${({theme:t})=>t.aliceBlue1};
  }
`,Be=f.li`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 32px;
  gap: 10px;

  color: ${({theme:t})=>t.blueCharcoal};
  background-color: ${({theme:t})=>t.pureWhite};
  border: 1px solid rgba(0, 0, 0, 0.125);
`,Pr=f.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  & > ${Be}:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & > ${Be}:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & > ${Be}:not(:first-child) {
    border-top-width: 0;
  }
`,Mr=f(Oe)`
  height: 100%;
  width: 20px;
`,Tr=f.form`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.pattensBlue};
  margin-bottom: 16px;
  padding-bottom: 16px;
`,Nr=()=>{var $,v,y;const t=_(),{setIsModalOpen:o}=q(),{emulator:s}=E(),[n,r]=x.useState(),[i,d]=x.useState(null),[l,u]=B(Dt,0),a=x.useId(),{register:c,handleSubmit:h,setValue:g,formState:{errors:b,isSubmitSuccessful:j}}=me({defaultValues:{saveStateSlot:l}}),p=x.useCallback(()=>{var w;const m=(w=s==null?void 0:s.listSaveStates())==null?void 0:w.filter(C=>C!=="."&&C!=="..");r(m)},[s]);x.useEffect(()=>{g("saveStateSlot",l)},[l,g]);const S=async m=>{u(m.saveStateSlot)},k=n??(($=s==null?void 0:s.listSaveStates())==null?void 0:$.filter(m=>m!=="."&&m!=="..")),R=[{content:e.jsx("p",{children:"Use this input and button to manually update the current save state slot in use."}),placementBeacon:"bottom-end",target:`#${CSS.escape(`${a}--save-state-slot-form`)}`},{content:e.jsx("p",{children:"Tap a row to load a save state, or use the trash can icon to delete a save state."}),placementBeacon:"bottom-end",target:`#${CSS.escape(`${a}--save-state-list`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"plus"})," button to add a new save state. This will automatically increase the current save state number!"]}),placementBeacon:"bottom-end",target:`#${CSS.escape(`${a}--add-state-button`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Manage Save States"}),e.jsxs(X,{children:[e.jsxs(Tr,{id:`${a}--save-state-slot-form`,onSubmit:h(S),children:[e.jsx(oe,{label:"Current Save State Slot",type:"number",InputLabelProps:{shrink:!0},size:"small",error:!!(b!=null&&b.saveStateSlot),helperText:(v=b==null?void 0:b.saveStateSlot)==null?void 0:v.message,...c("saveStateSlot",{required:{value:!0,message:"Slot is required"},min:{value:0,message:"Slot must be >= 0"},valueAsNumber:!0})}),e.jsx(we,{copy:"Update Slot",showSuccess:j,size:"small",type:"submit",sx:{maxHeight:"40px"}})]}),e.jsxs(Pr,{id:`${a}--save-state-list`,children:[(y=k==null?void 0:k.map)==null?void 0:y.call(k,(m,w)=>e.jsxs(Be,{children:[e.jsx(Ir,{onClick:()=>{const C=m.split(".").pop(),F=C==null?void 0:C.replace("ss","");if(F){const P=parseInt(F);(s==null?void 0:s.loadSaveState(P))?(u(P),d(null)):d("Failed to load save state")}},children:m}),e.jsx(D,{"aria-label":`Delete ${m}`,sx:{padding:0},onClick:()=>{const C=m.split(".").pop(),F=C==null?void 0:C.replace("ss","");if(F){const P=parseInt(F);s==null||s.deleteSaveState(P),p()}},children:e.jsx(Mr,{})})]},`${m}_${w}`)),!(k!=null&&k.length)&&e.jsx("li",{children:e.jsx(ft,{children:"No save states"})})]}),e.jsx(D,{id:`${a}--add-state-button`,"aria-label":"Create new save state",sx:{padding:0},onClick:()=>{(s==null?void 0:s.createSaveState(l+1))?(p(),u(w=>w+1),d(null)):d("Failed to create save state")},children:e.jsx(bt,{})}),i&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:t.errorRed}}),text:i})]}),e.jsx(Q,{children:e.jsx(T,{variant:"outlined",onClick:()=>o(!1),children:"Close"})}),e.jsx(be,{steps:R,completedProductTourStepName:"hasCompletedSaveStatesTour"})]})},Br=()=>{const[t,o]=x.useState(0),s=x.useCallback(l=>l?new Promise((u,a)=>{console.log("Reflashing Cartridge...");let c=l.romFile.size;const h=new FileReader;h.onload=g=>{if(g.target&&g.target.result){let b=g.target.result;typeof b=="string"&&(b=new TextEncoder().encode(b));let j=new Uint8Array(b);const p=new XMLHttpRequest;p.open("POST",`${l.esp32IP}/upload_rom_file?cartSize=${c}`,!0),p.upload.onprogress=function(S){if(S.lengthComputable){const k=S.loaded/S.total*67;o(k)}},p.onload=()=>{if(p.status>=200&&p.status<300){const S=new XMLHttpRequest;S.open("POST",`${l.esp32IP}/verify_rom_file?cartSize=${c}`,!0),S.upload.onprogress=function(k){if(k.lengthComputable){const R=67+k.loaded/k.total*33;o(R)}},S.onload=()=>{S.status>=200&&S.status<300?u(!0):a("Rom on cartridge has errors")},S.onerror=()=>a("Failed to upload rom for verification"),S.send(j)}else a("Failed to upload rom to cartridge")},p.onerror=()=>a("Failed to upload rom to cartridge"),p.send(j)}},h.readAsArrayBuffer(l.romFile)}):Promise.reject(new Error("fetchProps is required")),[]),{data:n,isLoading:r,error:i,execute:d}=ye({fetchFn:s,clearDataOnLoad:!0});return{data:n,isLoading:r,error:i,execute:d,progress:t}},Er=f.div`
  cursor: pointer;
  border-color: ${({theme:t})=>t.blackRussian};
  background-color: ${({$isDragActive:t=!1,theme:o})=>t?o.arcticAirBlue:o.aliceBlue2};
  border-width: 1px;
  border-style: dashed;
  padding: 0.5rem;
  text-align: center;
`,Or=f(Ls)`
  height: 60px;
  width: auto;
`,zr=f.div`
  padding-top: 3px;
`,Ur=f.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0;
  max-width: 100%;
  padding: 10px 5px 5px 5px;

  > p {
    margin: 0;
  }
`,_r=f.li`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-between;

  > p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Ar=f.div`
  display: flex;
  gap: 15px;
`,qr=({fileNames:t,onDeleteFile:o})=>e.jsxs(Ur,{children:[e.jsxs("p",{children:["File",t.length>1&&"s"," to upload:"]}),t.map((s,n)=>e.jsxs(_r,{children:[e.jsx("p",{children:s}),e.jsx(Ar,{children:e.jsx(D,{"aria-label":`Delete ${s}`,sx:{padding:0},onClick:()=>o(s),children:e.jsx(Oe,{})})})]},`${s}_${n}`))]}),Wr=(t,o)=>{const s=`.${t.name.split(".").pop()}`;return o.some(n=>typeof n=="string"?n===s:!!n.regex.exec(s))},Ge=t=>typeof t=="string"?t:t.displayText,Hr=(t,o)=>{if(!t.length)return;const s=o?"At least one":"One";let n=`${s} `+t.slice(0,-1).map(Ge).join(", ")+`, or ${Ge(t.slice(-1)[0])} file is required`;return t.length==1&&(n=`${s} ${Ge(t[0])} file is required`),r=>!(r instanceof File)||r&&Wr(r,t)?null:{message:n,code:Ps.FileInvalidType}},Vr=({ariaLabel:t,children:o,error:s,hideAcceptedFiles:n,hideErrors:r,id:i,multiple:d=!1,name:l,onDrop:u,validFileExtensions:a})=>{const c=_(),[h,g]=x.useState([]),{getRootProps:b,getInputProps:j,isDragActive:p,fileRejections:S}=Is({multiple:d,onDrop:v=>{g(v),u(v)},validator:Hr(a,d)}),k=s?[s]:S.length&&h.length?["Some files were rejected"]:[...new Set(S.flatMap(v=>v.errors).map(v=>v.message))],R=v=>{const y=h.filter(m=>m.name!==v);g(y),u(y)},$=h.map(v=>v.name);return e.jsxs(e.Fragment,{children:[e.jsxs(Er,{...b({id:i,$isDragActive:p,"aria-label":t}),children:[e.jsx("input",{"data-testid":"hidden-file-input",...j({name:l})}),e.jsx(Or,{}),o]}),!!$.length&&!n&&e.jsx(qr,{fileNames:$,onDeleteFile:R}),!!k.length&&!r&&e.jsx(zr,{children:k.map(v=>e.jsx(Se,{icon:e.jsx(ge,{style:{color:c.errorRed}}),text:v},v))})]})},Dr=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 15px;
`,Kr=f.p`
  word-wrap: break-word;
  max-width: 100%;
`,Gr=[".gba",".gbc",".gb",".zip",".7z"],Xr=f.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  position: relative;
  height: 24px;
  width: 100%;
  margin-top: 16px;
  overflow: hidden;

  &::after {
    content: '';
    background-color: ${t=>t.theme.gbaThemeBlue};
    height: 100%;
    width: ${t=>t.progress}%;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.2s ease-in-out;
  }
`,Qr=({isLoading:t,children:o,indicator:s,progress:n})=>t?e.jsxs(Dr,{children:[e.jsx(Kr,{children:n<4?"Erasing Sectors...":n>67?"Verifying ROM...":"Flashing new ROM to cartridge..."}),s,e.jsx(Xr,{progress:n,children:e.jsxs("span",{style:{position:"relative",width:"100%",textAlign:"center",zIndex:600},children:[Math.round(n),"%"]})})]}):o,Yr=({esp32IP:t})=>{const o=_(),{setIsModalOpen:s}=q(),{handleSubmit:n,setValue:r,reset:i,control:d}=me(),{data:l,isLoading:u,error:a,execute:c,progress:h}=Br(),g=x.useId(),b=x.useCallback(p=>{i(),r("romFile",p[0],{shouldValidate:!0})},[i,r]),j=async({romFile:p})=>{if(console.log(l),p){await c({romFile:p,esp32IP:t});return}};return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Upload Rom"}),e.jsx(X,{children:e.jsxs(Qr,{isLoading:u,indicator:e.jsx(tt,{color:o.gbaThemeBlue,cssOverride:{margin:"0 auto"}}),progress:h,children:[!!a&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:o.errorRed}}),text:"Writing rom has failed"}),e.jsx("form",{id:g,"aria-label":"Upload Rom Form",onSubmit:n(j),children:e.jsx(Nt,{control:d,name:"romFile",rules:{validate:p=>!!p||"A rom file is required"},render:({field:{name:p},fieldState:{error:S}})=>e.jsx(Vr,{ariaLabel:"Upload Rom",id:`${g}--drag-and-drop`,onDrop:b,name:p,validFileExtensions:Gr,hideErrors:!!S,children:e.jsx("p",{children:"Drag and drop a rom or zipped rom file here, or click to upload a file"})})})})]})}),e.jsxs(Q,{children:[e.jsx(T,{form:g,type:"submit",variant:"contained",children:"Reflash Repro"}),e.jsx(T,{variant:"outlined",onClick:()=>s(!1),children:"Close"})]})]})},Zr=()=>{const[t,o]=x.useState(0),s=x.useCallback(l=>l?new Promise((u,a)=>{const c=new XMLHttpRequest;c.open("GET",l.url,!0),c.responseType="arraybuffer",c.overrideMimeType("text/plain; charset=x-user-defined"),c.onprogress=function(h){if(h.lengthComputable){const g=h.loaded/h.total*100;o(g)}},c.onload=async()=>{var h,g;if(c.status>=200&&c.status<300){const b=c.getResponseHeader("Content-Disposition"),j=(g=(h=b==null?void 0:b.split(";").pop())==null?void 0:h.split("=").pop())==null?void 0:g.replace(/"/g,""),p=decodeURIComponent(l.url.pathname.split("/").pop()??"unknown_external.gba"),S=new File([c.response],l.fullName??j??p);if(l.patchFile!=null&&l.patchFile!="")if(console.log("applying patch to file: "+l.patchFile),l.patchFile.startsWith(".")&&(l.patchFile=se+l.patchFile.substring(1)),l.patchFile.endsWith(".txt")){console.log("applying custom patch file");const k={fullName:l.fullName??j??p,patchFile:l.patchFile},R=new Uint8Array(c.response),$=await hn(k,R);u($)}else{const k=new XMLHttpRequest;k.open("GET",l.patchFile,!0),k.responseType="arraybuffer",k.overrideMimeType("text/plain; charset=x-user-defined"),k.onload=()=>{const R=new Uint8Array(k.response),{instructions:$,checksum:v}=Ms(R);console.log(v);const y=new Uint8Array(c.response),m=Ts($,y),w=new File([m],l.fullName??j??p);u(w)},k.onerror=()=>{console.error("Request for patch file failed"),a(new Error("Network error occurred: Patch File"))},k.send(null)}else console.log("resolved file"),u(S)}else console.error("Request failed2"),a(new Error(`Received unexpected status code: ${c.status}`))},c.onerror=()=>{console.error("Request failed"),a(new Error("Network error occurred"))},c.send(null)}):Promise.reject(new Error("fetchProps is required")),[]),{data:n,isLoading:r,error:i,execute:d}=ye({fetchFn:s,clearDataOnLoad:!0});return{data:n,isLoading:r,error:i,execute:d,progress:t}},Jr=()=>{const[t,o]=x.useState(0),s=x.useCallback(l=>l?new Promise((u,a)=>{console.log(l.fullName);const c=new XMLHttpRequest;c.open("GET",l.url,!0),c.responseType="arraybuffer",c.overrideMimeType("text/plain; charset=x-user-defined"),c.onprogress=function(h){if(h.lengthComputable){const g=h.loaded/h.total*100;o(g)}},c.onload=()=>{var h,g;if(c.status>=200&&c.status<300){const b=c.getResponseHeader("Content-Disposition"),j=(g=(h=b==null?void 0:b.split(";").pop())==null?void 0:h.split("=").pop())==null?void 0:g.replace(/"/g,""),p=decodeURIComponent(l.url.pathname.split("/").pop()??"unknown_external.sav"),S=new File([c.response],l.fullName??j??p);u(S)}else a(new Error(`Received unexpected status code: ${c.status}`))},c.onerror=()=>{console.error("Request failed"),a(new Error("Network error occurred"))},c.send(null)}):Promise.reject(new Error("fetchProps is required")),[]),{data:n,isLoading:r,error:i,execute:d}=ye({fetchFn:s,clearDataOnLoad:!0});return{data:n,isLoading:r,error:i,execute:d,progress:t}},kt=({gameData:t,checksum1000String:o,selectedSave:s,setSelectedSave:n,saveName:r})=>{var u;const{emulator:i}=E(),d=a=>{n(a)},l=((u=i==null?void 0:i.listSaves)==null?void 0:u.call(i).filter(a=>a.includes(t.cartID+"_"+o)))||[];return x.useEffect(()=>{for(const a of l)r===a&&n(a)},[]),e.jsx(e.Fragment,{children:e.jsx(nt,{children:e.jsxs(rt,{children:[e.jsx(zt,{children:e.jsxs(O,{children:[e.jsx(I,{children:"Select"}),e.jsx(I,{children:"Save"}),e.jsx(I,{children:"Last Saved"})]})}),e.jsxs(at,{children:[e.jsxs(O,{children:[e.jsx(I,{children:e.jsx(ve,{checked:s==="Cartridge Save",onChange:()=>d("Cartridge Save")})}),e.jsx(I,{children:"Cartridge Save"}),e.jsx(I,{children:"-"})]},"cartridge-save"),l.length>0?l.map((a,c)=>{var h;return e.jsxs(O,{sx:{borderBottom:c===l.length-1?"none":void 0},children:[e.jsx(I,{sx:{borderBottom:c===l.length-1?"none":void 0},children:e.jsx(ve,{checked:s===a,onChange:()=>d(a)})}),e.jsx(I,{sx:{borderBottom:c===l.length-1?"none":void 0},children:a}),e.jsx(I,{sx:{borderBottom:c===l.length-1?"none":void 0},children:(h=i==null?void 0:i.getStatSaves)==null?void 0:h.call(i,a).mtime.toLocaleString()})]},c)}):e.jsx(O,{children:e.jsx(I,{colSpan:3,children:"None"})})]})]})})})},Ze=({gameData:t,checksum1000String:o,selectedGame:s,setSelectedGame:n,romName:r})=>{var u,a;const{emulator:i}=E(),d=c=>{n(c)};let l;return t==null?l=((u=i==null?void 0:i.listRoms)==null?void 0:u.call(i).filter(c=>c!=="."&&c!==".."))||[]:l=((a=i==null?void 0:i.listRoms)==null?void 0:a.call(i).filter(c=>c.includes(t.cartID+"_"+o)))||[],x.useEffect(()=>{for(const c of l)r===c&&n(c)},[]),e.jsx(e.Fragment,{children:e.jsx(nt,{children:e.jsxs(rt,{children:[e.jsx(zt,{children:e.jsxs(O,{children:[e.jsx(I,{children:"Select"}),e.jsx(I,{children:"Rom File"}),e.jsx(I,{children:"Created"})]})}),e.jsxs(at,{children:[e.jsxs(O,{children:[e.jsx(I,{children:e.jsx(ve,{checked:s==="Cartridge Rom",onChange:()=>d("Cartridge Rom")})}),e.jsx(I,{children:"Cartridge Rom"}),e.jsx(I,{children:"-"})]},"cartridge-game"),l.length>0?l.map((c,h)=>{var g;return e.jsxs(O,{sx:{borderBottom:h===l.length-1?"none":void 0},children:[e.jsx(I,{sx:{borderBottom:h===l.length-1?"none":void 0},children:e.jsx(ve,{checked:s===c,onChange:()=>d(c)})}),e.jsx(I,{sx:{borderBottom:h===l.length-1?"none":void 0},children:c}),e.jsx(I,{sx:{borderBottom:h===l.length-1?"none":void 0},children:(g=i==null?void 0:i.getStatRoms)==null?void 0:g.call(i,c).mtime.toLocaleString()})]},h)}):e.jsx(O,{children:e.jsx(I,{colSpan:3,children:"None"})})]})]})})})},ea=f.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100dvw;
  max-width: fill-available;
  max-width: stretch;
  max-width: -webkit-fill-available;
  max-width: -moz-available;
`,Je=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 15px;
`,$t=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 0px;
`,Pe=f.img`
  max-width: 75%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 12px;
  border: 1px solid black;
`,ta=f.div`
display: flex;
gap: 10px;
width: 100%;
flex-direction: column;
`,Rt=f.p`
  word-wrap: break-word;
  max-width: 100%;
`,sa=f.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  position: relative;
  height: 24px;
  width: 100%;
  margin-top: 16px;
  overflow: hidden;

  &::after {
    content: '';
    background-color: ${t=>t.theme.gbaThemeBlue};
    height: 100%;
    width: ${t=>t.progress}%;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.2s ease-in-out;
  }
`,oa=({isLoading:t,isExternalRomLoading:o,children:s,indicator:n,progress:r})=>t?e.jsxs(Je,{children:[o&&e.jsx(Rt,{children:"Dumping Rom from cartridge..."}),!o&&e.jsx(Rt,{children:"Dumping Save from cartridge..."}),n,e.jsx(sa,{progress:r,children:e.jsxs("span",{style:{position:"relative",width:"100%",textAlign:"center",zIndex:600},children:[Math.round(r),"%"]})})]}):s,Ft=({additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i,setIsSideMenuExpanded:d})=>{const l=_(),{setIsModalOpen:u}=q(),{emulator:a}=E(),{data:c,isLoading:h,error:g,execute:b,progress:j}=Zr(),{data:p,execute:S}=Jr(),k=mt(),[R,$]=x.useState(!1),[v,y]=x.useState(!1),[m,w]=x.useState(!1),C=!h&&!!c,[F,P]=x.useState(null),[M,Y]=x.useState("Cartridge Save"),[Z,J]=x.useState("Cartridge Rom"),ee=ne(l.isLargerThanPhone),ae=L=>{const{name:z,value:U}=L.target;o(le=>({...le,[z]:U}))};x.useEffect(()=>{if(C){const L=()=>{k((a==null?void 0:a.filePaths().gamePath)+"/"+c.name)&&(u(!1),ee||d(!1))};a==null||a.uploadRom(c,L)}},[C,c,a,u,k]);const te=async()=>{try{w(!1),$(!0);const[L,z,U,le]=await dn([r]);w(!le),n(L),o(z),P(U),$(!1)}catch(L){console.error("Error fetching game info:",L)}};x.useEffect(()=>{p!=null&&(a==null||a.uploadSaveOrSaveState(p))},[p,a]),x.useEffect(()=>{R||te()},[]),x.useEffect(()=>{if(m&&!R){const L=setInterval(()=>{m&&!R&&te()},5e3);return()=>clearInterval(L)}},[m]);const H=()=>s.is_gba?t&&t.fullName?t.fullName+"_"+s.cartID+"_"+F:s.romName+"_"+s.cartID+"_"+F:t&&t.fullName?t.fullName+"_"+s.romName+"_"+s.checksumStr:s.romName+"_"+s.checksumStr,ie=async()=>{y(!0),console.log("Using save: "+M),console.log("Using save: "+M);let L=H()+".sav";M=="Cartridge Save"&&(s.is_gba?await ke(t.saveType,L):s.sramSize&&await N(L)),await cn(300),console.log("save loaded"),await Ce(),y(!1)},he=async L=>{var U;let z=(U=a==null?void 0:a.listRoms)==null?void 0:U.call(a);return console.log(z),z&&z.includes(L)?(console.log("rom exists locally"),k((a==null?void 0:a.filePaths().gamePath)+"/"+L),u(!1),y(!1),ee||d(!1),!0):!1},Ce=async()=>{if(y(!0),Z!="Cartridge Rom")await he(Z)||console.log("Unable to load local rom");else if(s.is_gba){let L=H()+".gba",z=t.cartSize,U=`${r}/get_current_game.gba?cartSize=${z}&saveType=4`;await b({url:new URL(U),fullName:L,patchFile:t.patchFile})}else{let L=H()+".gb",z=`${r}/get_current_game.gb`;await b({url:new URL(z),fullName:L,patchFile:null})}y(!1)},ke=async(L,z)=>{try{console.log(L);var U=xt(L);if(U==-1){console.log("Invalid Save Type");return}console.log(U);var le=`${r}/get_current_save?saveType=${U}`;await S({url:new URL(le),fullName:z})}catch($e){console.error("Error fetching save:",$e)}finally{}},N=async L=>{try{var z=`${r}/get_current_save`;await S({url:new URL(z),fullName:L})}catch(U){console.error("Error fetching save:",U)}finally{}},V=({title:L})=>{const[z,U]=x.useState("");return x.useEffect(()=>{const le=setInterval(()=>{U($e=>$e==="..."?"":$e+".")},500);return()=>clearInterval(le)},[]),e.jsx(W,{title:`${L}${z}`})};return e.jsxs(e.Fragment,{children:[m?e.jsx(W,{title:"Connection to cartridge reader failed!"}):e.jsx(e.Fragment,{children:s&&t&&t.fullName?e.jsx(W,{title:t.fullName}):s&&(!t||!t.fullName)?e.jsx(W,{title:s.romName==""||s.romName=="Error"?"Error Reading Cartridge":s.romName}):!s&&t&&t.fullName?e.jsx(W,{title:t.fullName}):e.jsx(V,{title:"Connecting to cartridge reader"})}),e.jsx(X,{children:e.jsxs(oa,{isLoading:v,isExternalRomLoading:h,indicator:e.jsx(tt,{color:l.gbaThemeBlue,cssOverride:{margin:"0 auto"}}),progress:j,children:[!!g&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:l.errorRed}}),text:"Loading rom from URL has failed"}),e.jsxs(e.Fragment,{children:[s&&e.jsxs(e.Fragment,{children:[t&&t.fullName?e.jsxs($t,{children:[e.jsx(Pe,{id:"cover-image",src:un(s,t),alt:`${t.fullName} Cover`}),s&&s.is_gba&&F!=t.checksum1000&&e.jsx(Qe,{mt:0,display:"flex",flexDirection:"column",alignItems:"center",children:e.jsxs(vt,{severity:"error",variant:"outlined",sx:{width:"100%",maxWidth:400,paddingTop:0,paddingBottom:0,fontSize:28,"& .MuiAlert-icon":{fontSize:28,paddingTop:"12px"}},children:[e.jsx(Re,{variant:"subtitle1",color:"error",fontWeight:"medium",children:"Checksum Mismatch"}),e.jsx(Re,{variant:"body2",color:"text.secondary",children:"The checksum of this file does not match the expected value. Please verify the ROM file integrity."})]})})]}):e.jsxs($t,{children:[e.jsx(Pe,{id:"cover-image",src:"./img/cover_img_missing.jpeg",alt:"Cover missing Image"}),e.jsx(Qe,{mt:0,display:"flex",flexDirection:"column",alignItems:"center",children:e.jsxs(vt,{severity:"error",variant:"outlined",sx:{width:"100%",maxWidth:400,paddingTop:0,paddingBottom:0,fontSize:28,"& .MuiAlert-icon":{fontSize:28,paddingTop:"12px"}},children:[e.jsx(Re,{variant:"subtitle1",color:"error",fontWeight:"medium",children:"ROM Information Not Found"}),e.jsx(Re,{variant:"body2",color:"text.secondary",children:"No information about the ROM found. Please verify the ROM size and save type."})]})})]}),e.jsx(nt,{id:"game-info",children:e.jsx(rt,{children:e.jsxs(at,{children:[t&&t.fullName&&e.jsxs(O,{children:[e.jsx(I,{children:"Full Name:"}),e.jsx(I,{children:t.fullName})]}),e.jsxs(O,{children:[e.jsx(I,{children:"ROM Name:"}),e.jsx(I,{children:s.romName})]}),e.jsxs(O,{children:[e.jsx(I,{children:"Cart Size:"}),e.jsx(I,{children:e.jsxs(Ye,{name:"cartSize",value:t.cartSize,onChange:ae,children:[e.jsxs(Me,{value:t.cartSize,children:[(t.cartSize/1024/1024).toFixed(2),"MB"]},(t.cartSize/1024/1024).toFixed(2)),[1,2,4,8,16,32,64].map(L=>e.jsxs(Me,{value:L*1024*1024,children:[L,"MB"]},L))]})})]}),s&&s.is_gba&&e.jsxs(O,{children:[e.jsx(I,{children:"Save Type:"}),e.jsx(I,{children:e.jsx(Ye,{name:"saveType",value:t?t.saveType:"REPRO_FLASH1M",onChange:ae,children:Xt.map(L=>e.jsx(Me,{value:L,children:L},L))})})]}),t&&t.patchFile!=null&&t.patchFile.length>0&&e.jsxs(O,{children:[e.jsx(I,{children:"Patch File:"}),e.jsx(I,{children:t.patchFile})]}),s&&s.is_gba&&e.jsxs(O,{children:[e.jsx(I,{children:"Cart ID:"}),e.jsx(I,{children:s.cartID})]}),e.jsxs(O,{children:[e.jsx(I,{children:"ROM Version:"}),e.jsx(I,{children:s.romVersion})]}),s&&s.is_gba&&e.jsxs(O,{children:[e.jsx(I,{children:"Checksum:"}),e.jsxs(I,{children:["0x",F]})]}),s&&!s.is_gba&&e.jsxs(O,{children:[e.jsx(I,{children:"Checksum:"}),e.jsxs(I,{children:["0x",s.checksum_gb]})]}),s&&!s.is_gba&&e.jsxs(O,{children:[e.jsx(I,{children:"Global Checksum:"}),e.jsxs(I,{children:["0x",s.checksumStr]})]}),t&&t.publisher&&t.releaseDate&&e.jsxs(e.Fragment,{children:[e.jsxs(O,{children:[e.jsx(I,{children:"Publisher:"}),e.jsx(I,{children:t.publisher})]}),e.jsxs(O,{children:[e.jsx(I,{style:{border:"none"},children:"Release Date:"}),e.jsx(I,{style:{border:"none"},children:t.releaseDate})]})]})]})})}),a&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Local Saves"}),s&&s.is_gba&&e.jsx(kt,{gameData:s,checksum1000String:F,selectedSave:M,setSelectedSave:Y,saveName:H()+".sav"}),s&&!s.is_gba&&e.jsx(kt,{gameData:s,checksum1000String:s.checksum_gb,selectedSave:M,setSelectedSave:Y,saveName:H()+".sav"}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Local Roms"}),s&&s.is_gba&&e.jsx(Ze,{gameData:s,checksum1000String:F,selectedGame:Z,setSelectedGame:J,romName:H()+".gba"}),s&&!s.is_gba&&e.jsx(Ze,{gameData:s,checksum1000String:s.checksum_gb,selectedGame:Z,setSelectedGame:J,romName:H()+".gb"})]}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Cart Reader"})]}),!s&&!t&&e.jsx(Je,{children:e.jsx(Pe,{src:"./img/connect.jpeg",alt:"waiting for cartridge reader response illustration"})}),s&&!t&&(s.romName==""||s.romName=="Error")&&e.jsx(Je,{children:e.jsx(Pe,{src:"./img/error_cart.jpeg",alt:"can not correctly read cartridge illustration"})})]}),e.jsxs(ea,{"aria-label":"Login Form",children:[e.jsx(oe,{label:"ESP32 IP Address",autoComplete:"esp32IPInputField",variant:"filled",style:{padding:"3px 8px 3px 8px",fontSize:"14px",marginLeft:"5px"},defaultValue:r,onChange:L=>{i(L.target.value)}}),e.jsxs(T,{variant:"outlined",style:{padding:"3px 8px 3px 8px",fontSize:"14px",marginLeft:"8px"},onClick:()=>{te()},children:[e.jsx(Ns,{style:{fontSize:"18px"}})," ","Refresh"]})]})]})}),e.jsx(Q,{children:!v&&e.jsxs(ta,{children:[s&&e.jsxs(T,{variant:"contained",color:"primary",style:{padding:"10px 20px 10px 10px",fontSize:"16px",display:"flex",alignItems:"center",gap:"5px"},onClick:()=>ie(),children:[e.jsx(Bs,{style:{fontSize:"30px",marginRight:"10px"}})," ","Start Game"]}),e.jsx(T,{variant:"outlined",style:{padding:"10px 20px 10px 20px",fontSize:"16px",display:"flex",alignItems:"center",gap:"5px"},onClick:()=>u(!1),children:"Close"})]})})]})},na=()=>{const{setIsModalOpen:t}=q(),{emulator:o}=E(),s=[{label:"Full Name",value:"fullName",setter:"setFullName"},{label:"Cover Image",value:"coverImage",setter:"setCoverImage"},{label:"Publisher",value:"publisher",setter:"setPublisher"},{label:"Release Date",value:"releaseDate",setter:"setReleaseDate"},{label:"CRC",value:"crc",setter:"setCrc"},{label:"Cart Size (Bytes)",value:"cartSize",setter:"setCartSize"},{label:"Save Type",value:"saveType",setter:"setSaveType"},{label:"Checksum 1000",value:"checksum1000",setter:"setChecksum1000"},{label:"Cart ID",value:"cartId",setter:"setCartId"},{label:"Patch File",value:"patchFile",setter:"setPatchFile"},{label:"Console",value:"console",setter:"setConsole"}],[n,r]=x.useState({fullName:"",coverImage:"",publisher:"",releaseDate:"",crc:"",cartSize:"",saveType:"",checksum1000:"",cartId:"",patchFile:"",console:".gba"}),[i,d]=x.useState(""),[l,u]=x.useState(""),[a,c]=x.useState(new Uint8Array);x.useEffect(()=>{i&&k(i)},[i]);const h=$=>{const v=$.target.files[0];if(v){u(v.name);let y=j(v.name).fileName;r(w=>({...w,fullName:y})),r(w=>({...w,patchFile:y+".bps"}));const m=new FileReader;m.onload=w=>{if(w.target&&w.target.result){let C=w.target.result;typeof C=="string"&&(C=new TextEncoder().encode(C)),c(new Uint8Array(C))}},m.readAsArrayBuffer(v)}},g=($,v)=>{r(y=>({...y,[v]:$.target.value}))},b=x.useId();function j($){const v=$.match(/\.(gb|gbc|gba)$/i);return v?{fileName:$.replace(/\.(gb|gbc|gba)$/i,""),removedExtension:v[0]}:{fileName:$,removedExtension:"gba"}}const p=async $=>{let y=await(await fetch(`./information_rom/${$}.json`)).json();r(m=>({...m,coverImage:y.coverImage})),r(m=>({...m,publisher:y.publisher})),r(m=>({...m,releaseDate:y.releaseDate})),r(m=>({...m,saveType:y.saveType}))},S=()=>{const $={fullName:n.fullName,coverImage:n.coverImage,publisher:n.publisher,releaseDate:n.releaseDate,crc:n.crc,cartSize:n.cartSize,saveType:n.saveType,checksum1000:n.checksum1000,patchFile:"./patches/"+n.patchFile,console:n.console},v=JSON.stringify($,null,2),y=new Blob([v],{type:"application/json"}),m=document.createElement("a");m.href=URL.createObjectURL(y),m.download=n.checksum1000+"-"+n.cartId+".json",document.body.appendChild(m),m.click(),URL.revokeObjectURL(m.href),document.body.removeChild(m)},k=$=>{const v=$.split("/").pop();if(v){r(P=>({...P,console:j(v).removedExtension})),r(P=>{var M;return{...P,cartSize:(M=o==null?void 0:o.getStatRoms)==null?void 0:M.call(o,$).size}});const y=/_([A-Z0-9]{1,4})_([A-Z0-9]{1,8})\./,m=v.match(y);if(!m){console.log("No match found");return}const w=m[1],C=m[2];console.log("CartID:",w),console.log("Checksum1000:",C),r(P=>({...P,checksum1000:C})),r(P=>({...P,cartId:w}));const F=o==null?void 0:o.getFile("/data/games/"+$);if(F){let P=(Es.buf(F)>>>0).toString(16).toUpperCase();r(M=>({...M,crc:P}))}p(w)}},R=()=>{const $=o==null?void 0:o.getFile("/data/games/"+i),v=a;if($&&v){const y=Os($,v),{buffer:m,checksum:w}=zs(y);console.log("Patch Checksum: "+w);const C=new Blob([m],{type:"application/octet-stream"}),F=document.createElement("a");F.href=URL.createObjectURL(C),F.download=n.patchFile,document.body.appendChild(F),F.click(),URL.revokeObjectURL(F.href),document.body.removeChild(F),S()}};return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"File System"}),e.jsxs(X,{children:[e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Base Rom"}),e.jsx(Ze,{gameData:null,checksum1000String:null,selectedGame:i,setSelectedGame:d,romName:".gba"}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Patched Rom"}),e.jsx("input",{type:"file",onChange:h,accept:".gba"}),l&&e.jsxs("p",{children:["Selected File: ",l]}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Information"}),s.map($=>$.value!="saveType"?e.jsx(oe,{label:$.label,variant:"filled",style:{padding:"3px 8px 3px 8px",fontSize:"14px",marginLeft:"5px",width:"98%"},value:n[$.value],onChange:v=>g(v,$.value)},$.value):null),e.jsx(Qe,{sx:{minWidth:120},children:e.jsxs(yo,{fullWidth:!0,style:{padding:"3px 8px 3px 8px",marginLeft:"5px",width:"98%",marginTop:"5px"},children:[e.jsx(wo,{id:"demo-simple-select-label",children:"Save Type"}),e.jsx(Ye,{name:"saveType",value:n.saveType,onChange:$=>g($,"saveType"),label:"Save Type",style:{fontSize:"14px"},children:Xt.map($=>e.jsx(Me,{value:$,children:$},$))})]})})]}),e.jsxs(Q,{children:[e.jsx(we,{copy:"Create Patch File",id:`${b}--create-patch-button-button`,onClick:()=>R()}),e.jsx(T,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]})]})},ra=f.div`
  display: flex;
  flex-direction: column;
  width: ${de}px;
  height: 100dvh;
  position: fixed;
  background-color: ${({theme:t})=>t.mediumBlack};
  transition: 0.4s ease-in-out;
  -webkit-transition: 0.4s ease-in-out;
  z-index: 150;
  text-align: left;
  left: 0;
  top: 0;
  touch-action: none;
  border-right: 1px solid ${({theme:t})=>t.borderBlue};

  ${({$isExpanded:t=!1})=>!t&&`left: -${de+5}px;
  `};
`,aa=f.h2`
  color: ${({theme:t})=>t.pureWhite};
  padding: 0.5rem 1rem;
  font-size: calc(1.3rem + 0.6vw);
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${({theme:t})=>t.borderBlue};

  &:hover {
    background-color: ${({theme:t})=>t.menuHighlight};
  }
`,ia=f.ul`
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  padding: 0;
  overflow-y: auto;
  overscroll-behavior: none;
  touch-action: pan-y;

  &::-webkit-scrollbar {
    display: none;
  }
`,la=f(je)`
  background-color: ${({theme:t})=>t.mediumBlack};
  color: ${({theme:t})=>t.pureWhite};
  z-index: 200;
  position: fixed;
  left: ${de-50}px;
  top: 12px;
  transition: 0.4s ease-in-out;
  -webkit-transition: 0.4s ease-in-out;
  cursor: pointer;
  padding: 0.05rem 0.3rem;
  border-radius: 0.35rem;
  border: none;
  min-height: 36px;
  min-width: 36px;

  ${({$isExpanded:t=!1})=>!t&&`left: 5px;
    `}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`,ca=f.button`
  position: absolute;
  width: calc(100dvw - ${de}px);
  left: ${de}px;
  height: 99%;
  background: 0 0;
  z-index: 140;
  border: none;
`,da=({additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i})=>{const[d,l]=x.useState(!0),{setModalContent:u,setIsModalOpen:a}=q(),{canvas:c,emulator:h}=E(),{isRunning:g}=re(),b=_(),j=ne(b.isLargerThanPhone),p=x.useId(),S=Yt(),[k,R]=x.useState(null);x.useEffect(()=>{const v=y=>{console.log(67547),y.preventDefault(),R(y),console.log(y)};return window.addEventListener("beforeinstallprompt",v),()=>{window.removeEventListener("beforeinstallprompt",v)}},[]);const $=()=>{k&&(k.prompt(),k.userChoice.then(v=>{v.outcome==="accepted"?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),R(null)}))};return x.useEffect(()=>{const y=new URLSearchParams(window.location.search).get("esp32_ip");y&&i("https://"+y);const m=setTimeout(()=>{u(e.jsx(Ft,{additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i,setIsSideMenuExpanded:l})),a(!0)},500);return window.additionalData=t,window.gameData=s,window.esp32IP=r,()=>clearTimeout(m)},[t,s,r]),An(),e.jsxs(e.Fragment,{children:[e.jsx(la,{id:"menu-btn",$isExpanded:d,onClick:()=>l(v=>!v),"aria-label":"Menu Toggle",children:e.jsx(Us,{style:{height:"1.8em",width:"1.8em",verticalAlign:"middle"}})}),e.jsxs(ra,{"data-testid":"menu-wrapper",id:"menu-wrapper",$isExpanded:d,children:[e.jsx(aa,{id:p,children:"WifiBOY"}),e.jsxs(ia,{"aria-labelledby":p,children:[e.jsx(A,{title:"My Cartridge",icon:e.jsx(Ae,{}),$withPadding:!0,onClick:()=>{u(e.jsx(Ft,{additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i,setIsSideMenuExpanded:l})),a(!0)}}),e.jsxs(De,{title:"Cartridge Actions",$isExpanded:!0,icon:e.jsx(_s,{}),children:[e.jsx(A,{title:"Save to Cartridge",$disabled:!g,icon:e.jsx(As,{}),onClick:()=>{gt(t,h,r)}}),e.jsx(A,{title:"Verify Cartridge Save",$disabled:!g,icon:e.jsx(qs,{}),onClick:()=>{let v=h==null?void 0:h.getCurrentSave();const y=h==null?void 0:h.getCurrentSaveName();if(v&&y){v.length>131072&&(v=v.slice(0,131072));const w=new XMLHttpRequest;if(!t){console.log("No save type information.");return}var m=xt(t.saveType);if(m==-1){console.log("Invalid Save Type");return}const C=new Promise((F,P)=>{w.open("POST",`${r}/verify_save_file?saveType=${m}`,!0),w.upload.onprogress=function(M){if(M.lengthComputable){const Y=67+M.loaded/M.total*33;console.log(Y+"( "+M.loaded+" )")}else console.log("event.lengthComputable is false")},w.onload=()=>{w.status>=200&&w.status<300?F("Verified save on cartridge"):P("Save on cartridge is not the same.")},w.onerror=()=>P("Failed to upload save"),w.send(v)});G.promise(C,{loading:"Verifying save on cartridge...",success:F=>`${F}`,error:F=>`${F}`})}else G.error("Current save not available")}}),e.jsx(A,{title:"Reflash Cartridge Rom",icon:e.jsx(Ws,{}),onClick:()=>{u(e.jsx(Yr,{esp32IP:r})),a(!0)}})]}),e.jsxs(De,{title:"In Game Actions",$disabled:!g,$isExpanded:g,icon:e.jsx(Hs,{}),children:[e.jsx(A,{title:"Screenshot",$disabled:!g,icon:e.jsx(Vs,{}),onClick:()=>{h!=null&&h.screenshot()?G.success("Screenshot saved successfully"):G.error("Screenshot has failed")}}),e.jsx(A,{title:"Full Screen",$disabled:!g,icon:e.jsx(Ds,{}),onClick:()=>{c==null||c.requestFullscreen().catch(()=>{G.error("Full screen request has failed")})}}),e.jsx(A,{title:"Download Save",$disabled:!g,icon:e.jsx(Et,{}),onClick:()=>{u(e.jsx(br,{})),a(!0)}}),e.jsx(A,{title:"Quick Reload",$disabled:!g,icon:e.jsx(Ks,{}),onClick:S}),e.jsx(A,{title:"Manage Save States",$disabled:!g,icon:e.jsx(Gs,{}),onClick:()=>{u(e.jsx(Nr,{})),a(!0)}}),e.jsx(A,{title:"Manage Cheats",$disabled:!g,icon:e.jsx(Bt,{}),onClick:()=>{u(e.jsx(er,{})),a(!0)}})]}),e.jsx(A,{title:"Controls",icon:e.jsx(Ae,{}),$withPadding:!0,onClick:()=>{u(e.jsx(fr,{})),a(!0)}}),e.jsx(A,{title:"File System",icon:e.jsx(Xs,{}),$withPadding:!0,onClick:()=>{u(e.jsx(Lr,{})),a(!0)}}),e.jsxs(De,{title:"Other",icon:e.jsx(Qs,{}),children:[e.jsx(A,{title:"Create Patch File",icon:e.jsx(Ae,{}),$withPadding:!0,onClick:()=>{u(e.jsx(na,{})),a(!0)}}),e.jsx(A,{title:"About",icon:e.jsx(Ys,{}),$withPadding:!0,onClick:()=>{u(e.jsx(qn,{})),a(!0)}})]}),k&&e.jsx(A,{title:"Install App",icon:e.jsx(Zs,{}),$withPadding:!0,onClick:$})]}),e.jsx(Js,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"15px"}}),e.jsx(eo,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"45px"}}),e.jsx(to,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"75px"}}),e.jsx(so,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"105px"}})]}),d&&!j&&e.jsx(ca,{"aria-label":"Menu Dismiss",onClick:()=>{l(!1)}})]})};f.ul`
  text-align: left;
`;const ua=()=>!0,ha=()=>{const[t]=B(Ue),{shouldShowPublicRomModal:o}=ss();return!(t!=null&&t.hasCompletedProductTourIntro)||o?null:e.jsx(oo,{})},pa=240,xa=160,ga=f.canvas`
  background-color: ${({theme:t})=>t.pureBlack};
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  image-rendering: pixelated;
`,ma=f(Pt)`
  background-color: ${({theme:t})=>t.pureBlack};
  border: solid 1px ${({theme:t})=>t.pureBlack};
  overflow: visible;
  width: 100dvw;
  height: calc(100dvw * 2 / 3);

  @media ${({theme:t})=>t.isLargerThanPhone} {
    width: min(
      calc(100dvw - ${de+35}px),
      calc(85dvh * 3 / 2)
    );
    height: 85dvh;
  }
`,fa={width:"",height:""},ba=()=>{var j,p;const t=_(),o=ne(t.isLargerThanPhone),{setCanvas:s}=E(),{areItemsDraggable:n}=ze(),{areItemsResizable:r}=Ht(),{layouts:i,setLayout:d,hasSetLayout:l}=ue(),u=o?de+10:0,a=o?15:0,c=x.useCallback(S=>{var k,R,$,v,y,m,w,C;l||(($=(R=(k=S==null?void 0:S.resizableElement)==null?void 0:k.current)==null?void 0:R.style)==null||$.removeProperty("width"),(m=(y=(v=S==null?void 0:S.resizableElement)==null?void 0:v.current)==null?void 0:y.style)==null||m.removeProperty("height")),!((w=i==null?void 0:i.screen)!=null&&w.initialBounds)&&S&&d("screen",{initialBounds:(C=S.resizableElement.current)==null?void 0:C.getBoundingClientRect()})},[l,i,d]),h=x.useCallback(S=>s(S),[s]),g=((j=i==null?void 0:i.screen)==null?void 0:j.position)??{x:u,y:a},b=((p=i==null?void 0:i.screen)==null?void 0:p.size)??fa;return e.jsx(ma,{"data-testid":"screen-wrapper",disableDragging:!n,ref:c,enableResizing:r,resizeHandleComponent:{topRight:e.jsx(pe,{variation:"topRight"}),bottomRight:e.jsx(pe,{variation:"bottomRight"}),bottomLeft:e.jsx(pe,{variation:"bottomLeft"}),topLeft:e.jsx(pe,{variation:"topLeft"})},resizeHandleStyles:{topRight:{marginTop:"15px",marginRight:"15px"},bottomRight:{marginBottom:"15px",marginRight:"15px"},bottomLeft:{marginBottom:"15px",marginLeft:"15px"},topLeft:{marginTop:"15px",marginLeft:"15px"}},position:g,size:b,onDragStop:(S,k)=>{d("screen",{position:{x:k.x,y:k.y}})},onResizeStop:(S,k,R,$,v)=>{d("screen",{size:{width:R.clientWidth,height:R.clientHeight},position:{...v}})},children:e.jsx(ga,{"data-testid":"screen-wrapper:render-canvas",ref:h,width:pa,height:xa})})},ja=f.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  inset: 10px;
  margin: 25px auto auto;
  padding-top: 25px;
  max-height: 80%;
  max-width: calc(100dvw - 20px);
  padding: 0;
  touch-action: none;
  user-select: text;
  width: fit-content;

  @media ${({theme:t})=>t.isLargerThanPhone} {
    max-width: 600px;
  }
`,Sa=f.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100dvw;
  height: 100dvh;
  position: absolute;
`,va=f(Jt)`
  justify-content: center;
`,ya=f(es)`
  padding: 1em 1em 0 1em;
`,wa=f.img`
  object-fit: contain;
  max-width: 100%;
`,Ca=f(ts)`
  justify-content: center;
  flex-wrap: wrap;
`,ka=f.div`
  position: relative;
`,$a=f.a`
  font-size: 5px;
  position: absolute;
  right: 15%;
  bottom: 6%;
`,Lt=()=>e.jsx("span",{children:"→"}),Ra=({error:t,resetErrorBoundary:o})=>e.jsx(Sa,{children:e.jsxs(ja,{role:"alert",children:[e.jsx(va,{children:e.jsx(Zt,{children:"An irrecoverable error occurred"})}),e.jsxs(ya,{children:[e.jsxs(ka,{children:[e.jsx(wa,{src:"/img/error-512x512.png",alt:"GameBoy Advance with error icon"}),e.jsx($a,{target:"_blank",href:"https://www.freepik.com/free-vector/editable-text-effect-error-3d-hack-virus-font-style_21408324.htm",children:"Font by NACreative"})]}),e.jsx("p",{style:{color:"red"},children:t.message}),e.jsx("p",{children:"Please use the buttons below to copy the stack trace and create an issue, this helps a lot with error reporting!"})]}),e.jsxs(Ca,{children:[e.jsx(T,{color:"info",variant:"contained",onClick:()=>{navigator.clipboard.writeText(t.stack??"No stack available")},children:"Copy trace"}),e.jsx(Lt,{}),e.jsx(T,{color:"success",variant:"contained",href:"https://github.com/thenick775/gbajs3/issues",target:"_blank",children:"Create issue"}),e.jsx(Lt,{}),e.jsx(T,{color:"secondary",variant:"contained",onClick:o,children:"Dismiss and reset"})]})]})}),Fa=({children:t})=>e.jsx(no,{fallbackRender:Ra,children:t}),La=()=>{const t=_();return e.jsx(ro,{toastOptions:{success:{duration:1e3},error:{duration:1500},style:{background:t.darkCharcoal,color:t.pureWhite}}})},Ia=({children:t})=>e.jsx(Io,{children:e.jsx(Mo,{children:e.jsx($o,{children:e.jsx(Po,{children:t})})})}),Pa={isLargerThanPhone:"only screen and (min-width: 600px)",isMobileLandscape:"only screen and (max-height: 1000px) and (max-width: 1000px) and (orientation: landscape)",isMobilePortrait:"only screen and (max-width: 1000px) and (orientation: portrait)",isMobileWithUrlBar:"only screen and (max-height: 700px) and (orientation: portrait)",aliceBlue1:"#f8f9fa",aliceBlue2:"#edf2f7",arcticAirBlue:"#cad8e5",blackRussian:"#1a202c",blueCharcoal:"rgb(15 23 42)",checkMarkGreen:"#7ac142",darkCharcoal:"#333",darkGrayBlue:"#495057",disabledGray:"#6c757d",errorRed:"#d32f2f",gbaThemeBlue:"#0d6efd",mediumBlack:"rgb(2 6 23)",menuHighlight:"#ffffff26",menuHover:"#0a58ca",pattensBlue:"#dee2e6",pureBlack:"#000",pureWhite:"#fff",darkGray:"#111",panelControlGray:"#a9a9a9",panelBlueGray:"rgb(30 41 59)",borderBlue:"rgb(15 23 42)"},Ma=()=>{const[t,o]=x.useState(null),[s,n]=x.useState(null),r="https://192.168.1.3",[i,d]=x.useState(r);return e.jsx(ao,{theme:Pa,children:e.jsxs(Fa,{children:[e.jsx(ua,{}),e.jsx(La,{}),e.jsx(ko,{children:e.jsx(Ia,{children:e.jsx(Bo,{children:e.jsxs(Eo,{children:[e.jsx(ha,{}),e.jsx(da,{additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:i,setEsp32IP:d}),e.jsx(ba,{}),e.jsx(Qo,{}),e.jsx(gn,{additionalData:t,esp32IP:i}),e.jsx(fn,{})]})})})})]})})};io.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode,{children:e.jsx(Ma,{})}));
