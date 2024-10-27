import{r as x,q as ns,u as Ze,j as e,v as B,w as rs,x as f,g as Ee,y as _,F as as,z as $t,A as Rt,I as Ft,B as is,C as ls,D as cs,E as ft,H as bt,J as ds,K as us,L as hs,M as ps,N as Xe,O as G,Q as xs,S as gs,U as ms,V as Lt,W as fs,X as bs,Y as js,Z as Je,$ as ge,a0 as Ss,a1 as vs,a2 as et,a3 as ys,a4 as me,a5 as ws,a6 as It,a7 as Ue,a8 as Pt,a9 as Cs,aa as Tt,ab as ks,ac as $s,ad as Rs,ae as Fs,af as Ls,ag as Is,ah as Ps,ai as Ts,aj as Ms,ak as Ns,al as Bs,am as Ae,an as Es,ao as Us,ap as Os,aq as zs,ar as _s,as as As,at as qs,au as Ws,av as Hs,aw as Vs,ax as Ds,ay as Ks,az as Gs,aA as Xs,aB as Qs,aC as Ys,aD as Zs,aE as Js,aF as eo,aG as to,aH as so,aI as oo}from"./vendor-D9ZbVt_x.js";import{m as no}from"./vendor_mgba-wasm-BLfC_69t.js";import{S as qe,c as ro}from"./vendor_react-joyride-BeiANMH_.js";import{u as ne,S as ao,I as D,B as M,A as io,a as lo,b as co,F as Mt,C as ye,T as oe,c as uo,d as ho,e as We,f as tt,s as po,g as xo,t as He,h as go,i as mo,j as fo,k as st,l as ot,m as Nt,n as U,o as I,p as nt,q as Qe,M as Te,D as xe,r as bo,v as jo,w as So}from"./vendor_@mui-cBjKiS00.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const Bt="currentEmulatorVolume",Et="currentEmulatorKeyBindings",Ut="currentGameName",Ot="currentFastForward",rt="currentCoreCallbacks",we=({fetchFn:t,loadOnMount:o=!1,clearDataOnLoad:s=!1})=>{const[n,r]=x.useState(null),[i,d]=x.useState(null),[l,u]=x.useState(!1),a=()=>d(null),c=x.useCallback(async h=>{u(!0),d(null),s&&r(null);try{const g=await t(h);r(g),u(!1)}catch(g){d(g),u(!1)}},[s,t]);return x.useEffect(()=>{o&&c()},[]),{data:n,isLoading:l,error:i,clearError:a,execute:c}},vo=({loadOnMount:t=!1}={})=>{const s=x.useCallback(async()=>(await fetch("undefined/api/tokens/refresh",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"})).json(),[void 0]),{data:n,isLoading:r,error:i,clearError:d,execute:l}=we({fetchFn:s,clearDataOnLoad:!0,loadOnMount:t});return{data:n,isLoading:r,error:i,clearError:d,execute:l}},zt=x.createContext(null);zt.displayName="AuthContext";const yo=({children:t})=>{const[n,r]=x.useState(null),[i,d]=x.useState(null),{data:l,isLoading:u,execute:a,error:c,clearError:h}=vo({loadOnMount:!1}),g=!u&&!!l;x.useEffect(()=>{g&&(r(l),d("refresh"))},[g,l]);const b=x.useCallback(()=>{if(n){const{exp:p}=ns(n);if(p&&Date.now()<=p*1e3)return!0}return!1},[n]),j=b()&&!l&&i!=="refresh";return x.useEffect(()=>{j&&h()},[j,h]),Ze(async()=>{await a()},b()&&!c?24e4:null),e.jsx(zt.Provider,{value:{accessToken:n,setAccessToken:r,setAccessTokenSource:d,isAuthenticated:b},children:t})},at=x.createContext(null);at.displayName="DragContext";const wo=({children:t})=>{const[o,s]=x.useState(!1);return e.jsx(at.Provider,{value:{areItemsDraggable:o,setAreItemsDraggable:s},children:t})},K=0,Co=3,ko=t=>{const o=t.filePaths(),s=(l,u)=>{var c,h;let a=(c=l==null?void 0:l.split("/"))==null?void 0:c.pop();if(u){const g="."+((h=a==null?void 0:a.split("."))==null?void 0:h.pop());a=a==null?void 0:a.replace(g,u)}return a},n=()=>{const l={path:o.root,isDir:!0,children:[]},u=[".",".."],a=({path:c,children:h})=>{for(const g of t.FS.readdir(c)){if(u.includes(g))continue;const b=`${c}/${g}`,{mode:j}=t.FS.lookupPath(b,{}).node,p={path:b,isDir:t.FS.isDir(j),children:[]};h==null||h.push(p),p.isDir&&a(p)}};return a(l),l},r=l=>{var g;const u=l.split(`
`),a=["cheats = ",""];if(!((g=u==null?void 0:u[0])!=null&&g.match("^cheats = [0-9]+$")))return[];const c={},h={desc:"desc",code:"code",enable:"enable"};for(const b of u){if(a.includes(b))continue;const j=b.match(/^cheat([0-9]+)_([a-zA-Z]+)\s*=\s*"?([a-zA-Z0-9\s+:_]+)"?$/);if(j){const[,p,S,k]=j,R=h[S];c[p]=c[p]||{desc:"",code:"",enable:!1},R&&(c[p][R]=R===h.enable?k.toLowerCase()==="true":k)}}return Object.values(c)},i=l=>{const u=l.map((h,g)=>`cheat${g}_desc = "${h.desc}"
cheat${g}_enable = ${h.enable}
cheat${g}_code = "${h.code}"
`),a=`cheats = ${u==null?void 0:u.length}

`,c=s(t.gameName,".cheats");if(u!=null&&u.length&&c){const h=a+u.join(`
`),g=new Blob([h],{type:"text/plain"});return new File([g],c)}return null},d=({key:l,location:u})=>{let a=u===Co?`Keypad ${l}`:l;return a.toLowerCase().includes("enter")&&(a=a.replace(/enter/gi,"Return")),a.toLowerCase().includes("arrow")&&(a=a.replace(/arrow/gi,"")),a};return{addCoreCallbacks:t.addCoreCallbacks,autoLoadCheats:t.autoLoadCheats,createSaveState:t.saveState,defaultKeyBindings:()=>[{gbaInput:"A",key:"X",location:K},{gbaInput:"B",key:"Z",location:K},{gbaInput:"L",key:"A",location:K},{gbaInput:"R",key:"S",location:K},{gbaInput:"Start",key:"Enter",location:K},{gbaInput:"Select",key:"Backspace",location:K},{gbaInput:"Up",key:"ArrowUp",location:K},{gbaInput:"Down",key:"ArrowDown",location:K},{gbaInput:"Left",key:"ArrowLeft",location:K},{gbaInput:"Right",key:"ArrowRight",location:K}],loadSaveState:t.loadState,listSaveStates:()=>t.FS.readdir(o.saveStatePath),listRoms2:()=>t.FS.readdir(o.gamePath),listSaves:()=>t.FS.readdir(o.savePath),getStatSaves:l=>t.FS.stat("/data/saves/"+l),getStatRoms:l=>t.FS.stat("/data/games/"+l),listRoms:t.listRoms,setVolume:async l=>{(t.SDL2.audioContext.state==="suspended"||t.SDL2.audioContext.state==="interrupted")&&await t.SDL2.audioContext.resume(),t.setVolume(l)},getVolume:t.getVolume,enableKeyboardInput:()=>t.toggleInput(!0),disableKeyboardInput:()=>t.toggleInput(!1),simulateKeyDown:t.buttonPress,simulateKeyUp:t.buttonUnpress,setFastForwardMultiplier:t.setFastForwardMultiplier,isFastForwardEnabled:()=>t.getFastForwardMultiplier()>1,run:t.loadGame,getCurrentRom:()=>t.gameName?t.FS.readFile(t.gameName):null,getCurrentGameName:()=>s(t.gameName),setCurrentGameName:l=>{l&&!t.gameName&&(t.gameName=l)},getCurrentSave:()=>t.saveName?t.getSave():null,getCurrentSaveName:()=>s(t.saveName),getFile:l=>t.FS.readFile(l),uploadCheats:t.uploadCheats,uploadRom:t.uploadRom,uploadSaveOrSaveState:t.uploadSaveOrSaveState,deleteSaveState:l=>{const u=s(t.saveName,".ss"+l),a=`${o.saveStatePath}/${u}`;t.FS.unlink(a)},deleteFile:t.FS.unlink,pause:t.pauseGame,resume:t.resumeGame,quitGame:t.quitGame,quitEmulator:t.quitMgba,quickReload:t.quickReload,getCurrentCheatsFile:()=>{const l=s(t.gameName,".cheats"),u=`${o.cheatsPath}/${l}`;return t.FS.analyzePath(u).exists?t.FS.readFile(u):new Uint8Array},getCurrentCheatsFileName:()=>s(t.gameName,".cheats"),screenshot:t.screenshot,remapKeyBindings:l=>l.forEach(u=>t.bindKey(d(u),u.gbaInput)),filePaths:t.filePaths,fsSync:t.FSSync,listAllFiles:n,parseCheatsString:r,parsedCheatsToFile:i}},$o=t=>{const[o,s]=x.useState(null);return x.useEffect(()=>{(async()=>{if(t){const r=await no({canvas:t}),i=r.version.projectName+" "+r.version.projectVersion;console.log(i),await r.FSInit();const d=ko(r);s(d)}})()},[t]),o},it=x.createContext(null);it.displayName="EmulatorContext";const Ro=({children:t})=>{const[o,s]=x.useState(null),n=$o(o);return e.jsx(it.Provider,{value:{emulator:n,canvas:o,setCanvas:s},children:t})},lt=x.createContext(null);lt.displayName="ResizeContext";const Fo=({children:t})=>{const[o,s]=x.useState(!1);return e.jsx(lt.Provider,{value:{areItemsResizable:o,setAreItemsResizable:s},children:t})},ct=x.createContext(null);ct.displayName="RunningContext";const Lo=({children:t})=>{const[o,s]=x.useState(!1);return e.jsx(ct.Provider,{value:{isRunning:o,setIsRunning:s},children:t})},Io="componentLayouts",Po=()=>{const[t,o]=B(Io,{}),s=x.useCallback(()=>o({}),[o]),n=x.useMemo(()=>!!Object.values(t).some(r=>!!(r!=null&&r.position)||!!(r!=null&&r.size)),[t]);return{layouts:t,setLayouts:o,hasSetLayout:n,clearLayouts:s}},dt=x.createContext(null);dt.displayName="LayoutContext";const To=({children:t})=>{const{layouts:o,setLayouts:s,hasSetLayout:n,clearLayouts:r}=Po(),i=x.useCallback((d,l)=>s(u=>({...u,[d]:{...u==null?void 0:u[d],...l}})),[s]);return x.useEffect(()=>{n||r()},[]),e.jsx(dt.Provider,{value:{layouts:o,hasSetLayout:n,clearLayouts:r,setLayout:i,setLayouts:s},children:t})},ut=x.createContext(null);ut.displayName="ModalContext";const Mo=({children:t})=>{const[o,s]=x.useState(null),[n,r]=x.useState(!1);return e.jsx(ut.Provider,{value:{modalContent:o,setModalContent:s,isModalOpen:n,setIsModalOpen:r},children:t})},fe=t=>{const o=t.displayName,s=x.useContext(t);if(!s)throw new Error(`${o??"This context"} must be loaded under the matching ${o?`${o}.Provider`:"Provider"}`);return s},ue=()=>fe(dt),q=()=>fe(ut),E=()=>fe(it),Oe=()=>fe(at),_t=()=>fe(lt),re=()=>fe(ct),No=({isPaused:t})=>{const o=rs(),{emulator:s}=E(),{isRunning:n}=re(),[r,i]=x.useState(!1),d=n&&!t;x.useEffect(()=>{d&&(!o&&!r?(s==null||s.pause(),i(!0)):o&&r&&(s==null||s.resume(),i(!1)))},[s,o,d,r])},Bo=t=>{const o=t.getContext("webgl");o==null||o.clearColor(0,0,0,1),o==null||o.clear(o==null?void 0:o.COLOR_BUFFER_BIT)},Eo=t=>{const o=t.getContext("2d"),s=40,n=50;let r=0;if(!o)return;const i=t.width,d=t.height,l=i/2,u=d/2,a=o.getImageData(0,0,i,d),c=setInterval(()=>{r++;for(let h=0;h<d;++h)for(let g=0;g<i;++g){const b=Math.abs(g-l),j=Math.abs(h-u)*.8,p=(l-r-b)/l,S=(u-r-(h&1)*10-j+Math.pow(b,1/2))/u;a.data[(g+h*i)*4+3]*=Math.pow(p,1/3)*Math.pow(S,1/2)}o.putImageData(a,0,0),r>s&&(clearInterval(c),t.remove())},n)},Uo=(t,o)=>{if(!t||!o)return;const s=document.createElement("canvas"),n=s.getContext("2d"),r=URL.createObjectURL(o);s.className=t.className,s.height=t.height,s.width=t.width,s.style.backgroundColor=t.style.backgroundColor,s.style.height=`${t.clientHeight}px`,s.style.imageRendering=t.style.imageRendering,s.style.margin=t.style.margin,s.style.objectFit=t.style.objectFit,s.style.width=`${t.clientWidth}px`,s.style.position="absolute",s.style.top="0",s.style.left="0",s.style.right="0";const i=new Image;i.onload=()=>{var d;n==null||n.drawImage(i,0,0),(d=t.parentElement)==null||d.appendChild(s),Bo(t),Eo(s)},i.src=r},Oo=t=>{if(!t)return null;const o="fade-copy.png",s=(t==null?void 0:t.filePaths().screenshotsPath)+"/"+o;if(!t.screenshot(o))return null;const r=t.getFile(s);return t==null||t.deleteFile(s),new Blob([r],{type:"image/png"})},zo=()=>{const{canvas:t,emulator:o}=E(),{isRunning:s,setIsRunning:n}=re();return x.useCallback(()=>{s&&(Uo(t,Oo(o)),o==null||o.quitGame()),n(!1)},[t,o,s,n])},ze="completedProductTour",_o={locale:{skip:e.jsx("strong",{"aria-label":"Skip",children:"Skip"})},placement:"auto",placementBeacon:"right-end",spotlightPadding:10},be=({completedProductTourStepName:t,steps:o,allowScrolling:s=!0,isNotInModal:n=!1,millisecondDelay:r=500,renderWithoutDelay:i=!1,skipIfIntroSkipped:d=!0,skipRenderCondition:l=!1,zIndex:u=500})=>{const[a,c]=B(ze),{isModalOpen:h}=q(),[g,b]=x.useState(i);if(Ze(()=>{b(!0)},i?null:r),!g||a!=null&&a[t]||d&&(a==null?void 0:a.hasCompletedProductTourIntro)===qe.SKIPPED||!(a!=null&&a.hasCompletedProductTourIntro)||!n&&!h||l)return null;const j=o.map(p=>({..._o,...p}));return e.jsx(ro,{continuous:!0,disableScrollParentFix:s,hideCloseButton:!0,showProgress:!0,showSkipButton:!0,steps:j,styles:{options:{zIndex:u}},callback:({status:p})=>{[qe.FINISHED,qe.SKIPPED].includes(p)&&c(S=>({...S,[t]:p}))}})},Ao=f.button`
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  padding: inherit;
`,je=Ee.forwardRef(({children:t,...o},s)=>e.jsx(Ao,{ref:s,...o,children:t})),pe=({variation:t})=>{const o=_(),s=function(){switch(t){case"topLeft":return"-45deg";case"topRight":return"45deg";case"bottomLeft":return"45deg";case"bottomRight":return"-45deg";default:return"0deg"}}();return e.jsx(as,{"data-testid":"gripper-handle",color:o.gbaThemeBlue,style:{transform:`rotate(${s})`}})},qo=f.ul`
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
`,Wo=f.li`
  display: contents;
`,At=$t`
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
`,Ho=f(je).attrs({className:"noDrag"})`
  ${At}

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
`,Vo=f.li`
  ${At}
  grid-area: ${({$gridArea:t})=>t};
  max-height: 40px;
`,Do=f(ao)`
  flex-grow: 1;

  > .MuiSlider-markActive {
    opacity: 1;
    background-color: currentColor;
  }
`,Fe=({ariaLabel:t,children:o,controlled:s,id:n,onClick:r})=>e.jsx(Wo,{children:e.jsx(Ho,{"aria-label":t,id:n,onClick:r,$controlled:s,children:o})}),Le=({icon:t,...o})=>{const s=_();return e.jsx(D,{size:"small",sx:{padding:0,color:s.pureBlack,"&:active":{color:s.gbaThemeBlue}},...o,children:t})},jt=({controlled:t,gridArea:o,id:s,maxIcon:n,minIcon:r,...i})=>e.jsxs(Vo,{id:s,$gridArea:o,$controlled:t,children:[r,e.jsx(Do,{marks:!0,sx:{width:"85px",margin:"0 10px",maxHeight:"40px"},valueLabelDisplay:"auto",...i}),n]}),Ko=()=>{var ie,he,ke,$e;const{emulator:t}=E(),{isRunning:o}=re(),{areItemsDraggable:s,setAreItemsDraggable:n}=Oe(),{areItemsResizable:r,setAreItemsResizable:i}=_t(),{layouts:d,setLayout:l}=ue(),u=_(),a=ne(u.isLargerThanPhone),[c,h]=x.useState(!1),[g,b]=x.useState(!1),j=x.useId(),p=zo(),[S,k]=B(Bt,1),[R,$]=B(Ot,1);No({isPaused:c});const v=x.useCallback(N=>{var V,F;!((V=d==null?void 0:d.controlPanel)!=null&&V.initialBounds)&&N&&l("controlPanel",{initialBounds:(F=N.resizableElement.current)==null?void 0:F.getBoundingClientRect()})},[l,d]),y=(ie=d==null?void 0:d.screen)==null?void 0:ie.initialBounds;if(!y)return null;const m=a?5:0,w=!!((he=d==null?void 0:d.controlPanel)!=null&&he.size)||g,C=()=>{o&&(c?t==null||t.resume():t==null||t.pause(),h(N=>!N))},L=N=>{t==null||t.setVolume(N),k(N)},P=N=>{var F;const V=Number((F=N.target)==null?void 0:F.value);L(V)},T=N=>{t==null||t.setFastForwardMultiplier(N),$(N)},Y=N=>{var F;const V=Number((F=N.target)==null?void 0:F.value);t==null||t.setFastForwardMultiplier(V),$(V)},Z=[{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use the control panel to quickly perform in game actions and reposition controls."}),e.jsx("p",{children:"Click next to take a tour of the controls!"})]}),placementBeacon:"bottom",target:`#${CSS.escape(j)}`},{content:e.jsx("p",{children:"Use the this button to pause and resume your game if it is running."}),placementBeacon:"bottom",target:`#${CSS.escape(`${j}--play`)}`},{content:e.jsx("p",{children:"Use this button to quit your current game."}),placementBeacon:"bottom",target:`#${CSS.escape(`${j}--quit-game`)}`},{content:e.jsx("p",{children:"Use this button to enable dragging and repositioning of the screen, controls, and control panel."}),placement:a?"auto":"right",placementBeacon:"bottom",target:`#${CSS.escape(`${j}--drag`)}`},{content:e.jsx("p",{children:"Use this button to resize the screen and control panel."}),placement:a?"auto":"right",placementBeacon:"bottom",target:`#${CSS.escape(`${j}--resize`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this slider to increase and decrease the emulator volume."}),e.jsx("p",{children:"Your volume setting will be saved between refreshes!"})]}),placementBeacon:"bottom",target:`#${CSS.escape(`${j}--volume-slider`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this slider to increase and decrease the fast forward speed."}),e.jsx("p",{children:"Your fast forward setting will be saved between refreshes!"})]}),placement:a?"auto":"right",placementBeacon:"bottom",target:`#${CSS.escape(`${j}--fast-forward`)}`}],J={x:Math.floor(y.left),y:Math.floor(y.bottom+m)},ee={width:a?"auto":"100dvw",height:"auto"},ae=((ke=d==null?void 0:d.controlPanel)==null?void 0:ke.position)??J,te=(($e=d==null?void 0:d.controlPanel)==null?void 0:$e.size)??ee,H={onFocus:t==null?void 0:t.disableKeyboardInput,onBlur:t==null?void 0:t.enableKeyboardInput,onClick:t==null?void 0:t.enableKeyboardInput};return e.jsxs(e.Fragment,{children:[e.jsx(Rt,{"data-testid":"control-panel-wrapper",id:j,disableDragging:!s,enableResizing:r,resizeHandleComponent:{bottomRight:e.jsx(pe,{variation:"bottomRight"}),bottomLeft:e.jsx(pe,{variation:"bottomLeft"})},resizeHandleStyles:{bottomRight:{marginBottom:"15px",marginRight:"15px"},bottomLeft:{marginBottom:"15px",marginLeft:"15px"}},ref:v,cancel:".noDrag",position:ae,size:te,onDragStop:(N,V)=>{l("controlPanel",{position:{x:V.x,y:V.y}})},onResizeStart:()=>b(!0),onResizeStop:(N,V,F,O,z)=>{l("controlPanel",{size:{width:F.clientWidth,height:F.clientHeight},position:{...z}}),b(!1)},default:{...J,...ee},children:e.jsx(qo,{$controlled:w,$isLargerThanPhone:a,children:e.jsxs(Ft.Provider,{value:{size:"2em"},children:[e.jsx(Fe,{id:`${j}--play`,ariaLabel:c||!o?"Play":"Pause",onClick:C,controlled:w,children:c||!o?e.jsx(is,{}):e.jsx(ls,{})}),e.jsx(Fe,{id:`${j}--quit-game`,ariaLabel:"Quit Game",onClick:()=>{p(),h(!1)},controlled:w,children:e.jsx(cs,{})}),e.jsx(Fe,{id:`${j}--drag`,ariaLabel:s?"Anchor Items":"Drag Items",onClick:()=>{n(N=>!N)},controlled:w,children:s?e.jsx(ft,{color:u.gbaThemeBlue}):e.jsx(ft,{})}),e.jsx(Fe,{id:`${j}--resize`,ariaLabel:r?"Stop Resizing Items":"Resize Items",onClick:()=>{i(N=>!N)},controlled:w,children:r?e.jsx(bt,{color:u.gbaThemeBlue}):e.jsx(bt,{})}),e.jsx(jt,{id:`${j}--volume-slider`,"aria-label":"Volume Slider",gridArea:"volume",controlled:w,value:S,step:.1,min:0,max:1,minIcon:e.jsx(Le,{"aria-label":"Mute Volume",icon:e.jsx(ds,{style:{maxHeight:"100%"}}),onClick:()=>L(0)}),maxIcon:e.jsx(Le,{"aria-label":"Max Volume",icon:e.jsx(us,{style:{maxHeight:"100%"}}),onClick:()=>L(1)}),valueLabelFormat:`${S*100}`,onChange:P,...H}),e.jsx(jt,{id:`${j}--fast-forward`,"aria-label":"Fast Forward Slider",gridArea:"fastForward",controlled:w,value:R,step:1,min:1,max:5,minIcon:e.jsx(Le,{"aria-label":"Regular Speed",icon:e.jsx(hs,{style:{maxHeight:"100%"}}),onClick:()=>T(1)}),maxIcon:e.jsx(Le,{"aria-label":"Max Fast Forward",icon:e.jsx(ps,{style:{maxHeight:"100%"}}),onClick:()=>T(5)}),valueLabelFormat:`x${R}`,onChange:Y,...H})]})})}),e.jsx(be,{steps:Z,completedProductTourStepName:"hasCompletedControlPanelTour",zIndex:a?160:0,renderWithoutDelay:!0,isNotInModal:!0})]})},qt="currentSaveStateSlot",Wt="areVirtualControlsEnabled",Go="virtualControlProfiles",Xo=f.section`
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
`,Qo=f.div`
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
`,Yo=f(_e)`
  border-width: 0 15px 25px 15px;
  border-color: transparent transparent ${({theme:t})=>t.pureWhite}
    transparent;
  top: 10px;
`,Zo=f(_e)`
  border-width: 25px 15px 0 15px;
  border-color: ${({theme:t})=>t.pureWhite} transparent transparent
    transparent;
  bottom: 10px;
`,Jo=f(_e)`
  border-width: 15px 25px 15px 0;
  border-color: transparent ${({theme:t})=>t.pureWhite} transparent
    transparent;
  left: 10px;
`,en=f(_e)`
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent
    ${({theme:t})=>t.pureWhite};
  right: 10px;
`,tn=({initialPosition:t})=>{var v;const{emulator:o}=E(),{areItemsDraggable:s}=Oe(),{layouts:n,setLayout:r}=ue(),[i,d]=x.useState({x:0,y:0}),[l,u]=x.useState(!0),a=x.useRef(null),c=x.useRef(null),[h,g]=x.useState({});x.useEffect(()=>{Object.keys(h).forEach(y=>{h[y]?o==null||o.simulateKeyDown(y):o==null||o.simulateKeyUp(y)})},[h,o]);const b=x.useCallback((y,m)=>g(w=>({...w,[y]:m})),[]),j=x.useCallback(y=>g(m=>Object.fromEntries(Object.entries(m).map(([w,C])=>[w,C===y?void 0:C]))),[]),p=({x:y,y:m})=>{const w=y*Math.cos(Math.PI/4)-m*Math.sin(Math.PI/4),C=y*Math.sin(Math.PI/4)+m*Math.cos(Math.PI/4);return w>=0&&C>=0?"RIGHT":w<0&&C>=0?"DOWN":w<0&&C<0?"LEFT":w>=0&&C<0?"UP":null},S=x.useCallback(y=>{if(!a.current||!c.current)return;const m=a.current.getBoundingClientRect(),w=c.current.getBoundingClientRect(),C=Math.max(-m.width/2+w.width/2,Math.min(y.clientX-m.left-m.width/2,m.width/2-w.width/2)),L=Math.max(-m.height/2+w.height/2,Math.min(y.clientY-m.top-m.height/2,m.height/2-w.height/2));s||d({x:C,y:L});const P=p({x:C,y:L});P&&!h[P]&&(j(y.pointerId),b(P,y.pointerId))},[s,h,b,j]),k=x.useCallback(y=>{if(u(!1),!a.current)return;const m=a.current.getBoundingClientRect(),w=y.clientX-m.left-m.width/2,C=y.clientY-m.top-m.width/2;s||d({x:w,y:C});const L=p({x:w,y:C});L&&b(L,y.pointerId)},[s,b]),R=y=>{u(!0),d({x:0,y:0}),j(y.pointerId)},$=((v=n==null?void 0:n.oPad)==null?void 0:v.position)??{x:0,y:0};return e.jsx(Xe,{nodeRef:a,disabled:!s,position:$,onStop:(y,m)=>r("oPad",{position:{x:m.x,y:m.y}}),children:e.jsxs(Xo,{"aria-label":"O-Pad",ref:a,$initialPosition:t,$areItemsDraggable:s,onPointerDown:k,onPointerMove:S,onPointerUp:R,onPointerCancel:R,onPointerOut:R,onPointerLeave:R,children:[e.jsx(Xe,{disabled:!0,nodeRef:c,position:i,children:e.jsx(Qo,{ref:c,$isControlled:l})}),e.jsx(Jo,{}),e.jsx(en,{}),e.jsx(Yo,{}),e.jsx(Zo,{})]})})},Ht=f(je)`
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
`,sn=f(Ht)`
  width: ${({$diameter:t=60})=>t}px;
  height: ${({$diameter:t=60})=>t}px;
  border-radius: 100px;
  border-color: ${({$areItemsDraggable:t=!1,theme:o})=>t?o.gbaThemeBlue:"rgba(255, 255, 255, 0.9)"};
  border-style: ${({$areItemsDraggable:t=!1})=>t?"dashed":"solid"};

  ${({$initialPosition:t={top:"0",left:"0"}})=>`
    top: ${t.top};
    left: ${t.left};
    `}
`,on=f(Ht)`
  border-radius: 16px;
  width: fit-content;
  min-width: 85px;
  border-color: ${({$areItemsDraggable:t=!1,theme:o})=>t?o.gbaThemeBlue:"rgba(255, 255, 255, 0.9)"};
  border-style: ${({$areItemsDraggable:t=!1})=>t?"dashed":"solid"};

  ${({$initialPosition:t={top:"0",left:"0"}})=>`
    top: ${t.top};
    left: ${t.left};
    `}
`,nn=({isRectangular:t=!1,width:o=60,children:s,keyId:n,inputName:r,onClick:i,initialPosition:d,initialOffset:l,enabled:u=!1,ariaLabel:a})=>{var $;const{emulator:c}=E(),{areItemsDraggable:h}=Oe(),{layouts:g,setLayout:b}=ue(),j=x.useRef(null);if(!u)return null;const p=i?{onClick:i}:{},S=n?{onPointerDown:()=>{c==null||c.simulateKeyDown(n)},onPointerUp:()=>{c==null||c.simulateKeyUp(n)},onPointerLeave:()=>{c==null||c.simulateKeyUp(n)},onPointerOut:()=>{c==null||c.simulateKeyUp(n)},onPointerCancel:()=>{c==null||c.simulateKeyUp(n)}}:{},k=n?{onKeyDown:v=>{(v.code=="Space"||v.key==" ")&&(c==null||c.simulateKeyDown(n))},onKeyUp:v=>{(v.code=="Space"||v.key==" ")&&(c==null||c.simulateKeyUp(n))}}:{},R=(($=g==null?void 0:g[r])==null?void 0:$.position)??{x:0,y:0};return e.jsx(Xe,{nodeRef:j,positionOffset:l,position:R,disabled:!h,onStop:(v,y)=>b(r,{position:{x:y.x,y:y.y}}),children:t?e.jsx(on,{ref:j,$initialPosition:d,$areItemsDraggable:h,"aria-label":a,...S,...p,...k,children:s}):e.jsx(sn,{ref:j,$initialPosition:d,$diameter:o,$areItemsDraggable:h,"aria-label":a,...S,...p,...k,children:s})})},se="https://raw.githubusercontent.com/webesp124/gb_data/refs/heads/main",Vt=["FLASH1M_V102","FLASH1M_V103","FLASH_V124","FLASH_V126","FLASH_ECLA","EEPROM_V122","EEPROM_V124","SRAM_V112","SRAM_V113","REPRO_FLASH1M","NONE"],ht=t=>(console.log("Save Type: "+t),t[0]=="N"?0:t[0]=="E"?1:t[0]=="S"?3:t[0]=="F"&&t[5]=="1"?5:t[0]=="F"?4:t[0]=="R"&&t[11]=="1"?55:(console.log("Invalid Save Type"),-1)),Ve=(t,o)=>{let s=Number(o.cartSize/1024/1024),n="";return s==1?n=t.checksum_1MB:s==2?n=t.checksum_2MB:s==4?n=t.checksum_4MB:s==8?n=t.checksum_8MB:s==16&&(n=t.checksum_16MB),n.toUpperCase()},rn=t=>new Promise(o=>setTimeout(o,t)),an=async t=>{let o,s;s=null;let n=!1,r="";try{if(o=await(await fetch(`${t}/get_game_info`,{method:"GET",headers:{"Access-Control-Request-Private-Network":"true"}})).json(),o.romName=="")throw new Error("Error Reading Cartridge, ROM name empty");if(n=!0,o.is_gba){if(s=await(await fetch(se+`/information_rom_gba/${o.cartID}.json?updated=1234567890`)).json(),console.log(s),s||(s={saveType:"REPRO_FLASH1M",cartSize:16*1024*1024}),r=Ve(o,s),r!=s.checksum1000){console.log("Checksums do not match. Trying to get a different one...");try{const l=await fetch(se+`/information_rom_gba/${r}-${o.cartID}.json?updated=1234567890`);if(!l.ok||l.status!=200)throw new Error(`HTTP error! Status: ${l.status}`);let u=await l.json();u&&Object.keys(u).length>0?(console.log("Additional Data exists"),s=u):console.log("Additional Data does not exist or is empty")}catch(l){console.error("An error occurred while fetching additional data: ",l)}}}else s=await(await fetch(se+`/information_rom_gb/${o.romName}.json`)).json(),console.log(s),o.checksumStr!=s.global_checksum&&console.log("Checksums do not match. Trying to get a different one...");return o&&!s&&(s={saveType:"REPRO_FLASH1M",cartSize:16*1024*1024},r=Ve(o,s)),[o,s,r,n]}catch(i){console.error("Error fetching game information:",i)}finally{return o&&!s&&(s={saveType:"REPRO_FLASH1M",cartSize:16*1024*1024},r=Ve(o,s)),[o,s,r,n]}},ln=(t,o)=>{let s=o.coverImage;return s?s.startsWith("/")?t.is_gba?se+s.replace("/covers/","/covers_gba/"):se+s.replace("/covers/","/covers_gb/"):s.startsWith(".")?t.is_gba?se+s.substring(1).replace("/covers/","/covers_gba/"):se+s.substring(1).replace("/covers/","/covers_gb/"):s:""},pt=(t,o,s)=>{const n=o==null?void 0:o.getCurrentSave(),r=o==null?void 0:o.getCurrentSaveName();if(n&&r){const d=new XMLHttpRequest;if(!t){console.log("No save type information.");return}var i=ht(t.saveType);if(i==-1){console.log("Invalid Save Type");return}console.log(i);const l=new Promise((u,a)=>{d.open("POST",`${s}/upload_save_file?saveType=${i}`,!0),d.onload=()=>{if(d.status>=200&&d.status<300){const c=new XMLHttpRequest;c.open("POST",`${s}/verify_save_file?saveType=${i}`,!0),c.onload=()=>{c.status>=200&&c.status<300?u("Uploaded  and verified save on cartridge"):a("Save on cartridge has errors")},c.onerror=()=>a("Failed to upload save for verification"),c.send(n)}else a("Failed to upload save to cartridge")},d.onerror=()=>a("Failed to upload save to cartridge"),d.send(n)});G.promise(l,{loading:"Uploading save to cartridge...",success:u=>`${u}`,error:u=>`${u}`})}else G.error("Current save not available")};async function cn(t,o){async function s(d){const u=await(await fetch(d+"?updated=1234567890")).text(),a=[];let c=0,h=null;const g=u.split(`
`),b=/Change Group \d+: Start = (0x[0-9a-fA-F]+), End = (0x[0-9a-fA-F]+)/,j=/Original: ([0-9a-fA-F]+) -> Modified: ([0-9a-fA-F*]+)/,p=/Checksum Changes: ([0-9a-fA-F]+)/;for(const S of g){const k=S.match(b);if(k){h&&a.push(h);const v=parseInt(k[1],16),y=parseInt(k[2],16);h={start:v,end:y,modifications:[]};continue}const R=S.match(j);R&&h&&h.modifications.push([R[1],R[2]]);const $=S.match(p);$&&(c=parseInt($[1],16))}return h&&a.push(h),console.log(`Checksum changes: ${c}`),{changes:a,checksumChanges:c}}function n(d,l,u){let a=0;return l.forEach(c=>{const{start:h,modifications:g}=c;g.forEach(([,b],j)=>{const p=d[h+j];b!=="*"&&(a=a+p&4294967295)})}),console.log(`Cumulative checksum full: ${a}`),a===u}function r(d,l){return d-l&255}async function i(d,l){let u=0;return l.forEach(a=>{const{start:c,modifications:h}=a;h.forEach(([g,b],j)=>{const p=d[c+j];b!=="*"&&(u=u+p&255),console.log(`Cumulative checksum: ${u.toString(16)}, Modified: ${b}`);const S=r(b!=="*"?p:u,parseInt(g,16));console.log(`New original: ${S.toString(16)}`),g!=="*"&&(d[c+j]=S)})}),d}try{const{changes:d,checksumChanges:l}=await s(t.patchFile),u=new Uint8Array(o);if(!n(u,d,l))throw new Error("Checksum mismatch; patch may not be compatible with the ROM.");const a=await i(u,d);return new File([a],t.fullName??t.fileName??"patched_file.gba")}catch(d){throw console.error("Failed to apply custom patch:",d),new Error(`Patch application failed: ${d.message}`)}}const dn=(t,o)=>t?o:null,Dt=()=>{const{isRunning:t}=re(),{emulator:o}=E(),[,s]=B(rt),n=x.useCallback(i=>o==null?void 0:o.addCoreCallbacks({saveDataUpdatedCallback:dn(i.saveFileSystemOnInGameSave,()=>{window.additionalData&&window.esp32IP&&pt(window.additionalData,o,window.esp32IP)})}),[o]),r=x.useCallback(i=>{s(d=>({...d,...i})),t&&n(i)},[n,t,s]);return{addCallbacks:n,addCallbacksAndSaveSettings:r}},xt=()=>{const{emulator:t}=E(),{setIsRunning:o}=re(),[,s]=B(Ut),[n]=B(Et),[r]=B(Bt,1),[i]=B(Ot,1),[d]=B(rt,{saveFileSystemOnInGameSave:!1,notificationsEnabled:!0}),{addCallbacks:l}=Dt();return x.useCallback(a=>{const c=t==null?void 0:t.run(a);return o(!!c),s(a),t==null||t.setVolume(r),c&&(n&&(t==null||t.remapKeyBindings(n)),i>1&&!(t!=null&&t.isFastForwardEnabled())&&(t==null||t.setFastForwardMultiplier(i)),l(d)),!!c},[l,d,r,n,t,i,o,s])},Kt=()=>{const t=xt(),{isRunning:o,setIsRunning:s}=re(),{emulator:n}=E(),[r]=B(Ut);return x.useCallback(()=>{if(o)n==null||n.quickReload();else if(n!=null&&n.getCurrentGameName()){const d=t(n.filePaths().gamePath+"/"+n.getCurrentGameName());s(!!d)}else if(r){const d=t(r);s(!!d)}},[n,o,s,t,r])},St=f.p`
  text-align: center;
  vertical-align: middle;
  line-height: 54px;
  color: ${({theme:t})=>t.pureWhite};
  margin: 0;
  font-size: 1.5em;
`,Ie=f.p`
  color: ${({theme:t})=>t.pureWhite};
  margin: 4px 5px;
`,un=t=>t.replace("-"," ").replace(/\w\S*/g,o=>o.charAt(0).toUpperCase()+o.substring(1).toLowerCase()),hn=({additionalData:t,esp32IP:o})=>{var y;const s=_(),n=ne(s.isLargerThanPhone),r=ne(s.isMobileWithUrlBar),{emulator:i}=E(),{layouts:d}=ue(),l=x.useId(),u=Kt(),[a]=B(qt,0),[c]=B(Wt),h=(y=d==null?void 0:d.controlPanel)==null?void 0:y.initialBounds;if(!h)return null;const g=m=>m===void 0&&!n||!!m,b=g(c==null?void 0:c.OpadAndButtons),j=(c==null?void 0:c.NotificationsEnabled)??!0,p=h.bottom,S=h.left,k={"a-button":{defaultMobile:{top:`calc(${p}px + 12%)`,left:"calc(100dvw - 25px)"},mobileWithUrlBar:{top:`calc(${p}px + 10%)`},largerThanPhone:{top:`calc(${p}px + 35px - 3%)`,left:`calc(${S}px + 450px)`}},"b-button":{defaultMobile:{top:`calc(${p}px + 15%)`,left:"calc(100dvw - 100px)"},mobileWithUrlBar:{top:`calc(${p}px + 13%)`},largerThanPhone:{top:`calc(${p}px + 35px)`,left:`calc(${S}px + 375px)`}},"start-button":{defaultMobile:{top:"88dvh",left:"25dvw"},mobileWithUrlBar:{top:"92dvh",left:"50dvw"},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`${S}px`}},"select-button":{defaultMobile:{top:"88dvh",left:"55dvw"},mobileWithUrlBar:{top:"92dvh",left:"75dvw"},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`calc(${S}px + 103px)`}},"l-button":{defaultMobile:{top:`${p+15}px`,left:"15px"},largerThanPhone:{top:`calc(${p}px + 15px)`,left:`${S}px`}},"r-button":{defaultMobile:{top:`${p+15}px`,left:"calc(100dvw - 15px)"},largerThanPhone:{top:`calc(${p}px + 15px)`,left:`calc(${S}px + 190px)`}},"quickreload-button":{defaultMobile:{top:`${p+10}px`,left:"135px"},largerThanPhone:{top:`calc(${p}px + 10px)`,left:`calc(${S}px + 205px)`}},"uploadsave-button":{defaultMobile:{top:`${p+10}px`,left:"calc(100dvw - 135px)"},largerThanPhone:{top:`calc(${p}px + 10px)`,left:`calc(${S}px + 300px)`}},"loadstate-button":{defaultMobile:{top:`calc(${p}px + 25%)`,left:"calc(100dvw - 40px)"},mobileWithUrlBar:{top:`calc(${p}px + 23%)`},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`calc(${S}px + 248px)`}},"savestate-button":{defaultMobile:{top:`calc(${p}px + 27%)`,left:"calc(100dvw - 100px)"},mobileWithUrlBar:{top:`calc(${p}px + 25%)`},largerThanPhone:{top:`calc(${p}px + 60px)`,left:`calc(${S}px + 300px)`}},"o-pad":{defaultMobile:{top:`calc(${p}px + 11%)`,left:"10px"},largerThanPhone:{top:`calc(${p}px + 10px)`,left:`calc(${S}px + 450px)`}}},R=m=>{var C,L,P,T;let w;return r&&((C=k[m])!=null&&C.mobileWithUrlBar)?w=(L=k[m])==null?void 0:L.mobileWithUrlBar:n&&((P=k[m])!=null&&P.largerThanPhone)&&(w=(T=k[m])==null?void 0:T.largerThanPhone),{...k[m].defaultMobile,...w}},$=(m,w,C)=>{j&&G[m?"success":"error"](m?w:C,{id:l})},v=[{keyId:"A",children:e.jsx(St,{children:"A"}),initialPosition:R("a-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"a-button",enabled:b},{keyId:"B",children:e.jsx(St,{children:"B"}),initialPosition:R("b-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"b-button",enabled:b},{keyId:"START",isRectangular:!0,children:e.jsx(Ie,{children:"Start"}),initialPosition:R("start-button"),keyName:"start-button",enabled:b},{keyId:"SELECT",isRectangular:!0,children:e.jsx(Ie,{children:"Select"}),initialPosition:R("select-button"),keyName:"select-button",enabled:b},{keyId:"L",isRectangular:!0,children:e.jsx(Ie,{children:"L"}),initialPosition:R("l-button"),keyName:"l-button",enabled:b},{keyId:"R",isRectangular:!0,children:e.jsx(Ie,{children:"R"}),initialPosition:R("r-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"r-button",enabled:b},{children:e.jsx(xs,{}),onClick:()=>{u(),!(i!=null&&i.getCurrentGameName())&&j&&G.error("Load a game to quick reload",{id:l})},width:40,initialPosition:R("quickreload-button"),keyName:"quickreload-button",enabled:g(c==null?void 0:c.QuickReload)},{children:e.jsx(gs,{}),onClick:()=>{pt(t,i,o)},width:40,initialPosition:R("uploadsave-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"uploadsave-button",enabled:g(c==null?void 0:c.SendSaveToServer)},{children:e.jsx(ms,{}),onClick:()=>{const m=i==null?void 0:i.loadSaveState(a);$(!!m,`Loaded slot: ${a}`,`Failed to load slot: ${a}`)},width:40,initialPosition:R("loadstate-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"loadstate-button",enabled:g(c==null?void 0:c.LoadState)},{children:e.jsx(Lt,{}),onClick:()=>{const m=i==null?void 0:i.createSaveState(a);$(!!m,`Saved slot: ${a}`,`Failed to save slot: ${a}`)},width:40,initialPosition:R("savestate-button"),initialOffset:{x:"-100%",y:"0px"},keyName:"savestate-button",enabled:g(c==null?void 0:c.SaveState)}];return e.jsxs(Ft.Provider,{value:{color:s.pureWhite,size:"2em"},children:[b&&e.jsx(tn,{initialPosition:R("o-pad")}),v.map(m=>e.jsx(nn,{ariaLabel:un(m.keyName),inputName:m.keyName,...m},m.keyName))]})},pn={overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:400},content:{width:"calc(100dvw - 20px)",height:"fit-content",margin:"25px auto auto auto",backgroundColor:"#fff",inset:"10px",maxWidth:"500px",padding:"0",maxHeight:"90dvh",display:"flex",touchAction:"none",flexDirection:"column",userSelect:"text",WebkitUserSelect:"text"}},xn=()=>{const{modalContent:t,isModalOpen:o,setIsModalOpen:s}=q(),{emulator:n}=E();return e.jsx(fs,{appElement:document.getElementById("root")||void 0,closeTimeoutMS:400,isOpen:o,style:pn,onRequestClose:()=>s(!1),onAfterOpen:n==null?void 0:n.disableKeyboardInput,onAfterClose:n==null?void 0:n.enableKeyboardInput,aria:{labelledby:"modalHeader"},children:t})},de=250,gn=f.li`
  color: ${({theme:t})=>t.pureWhite};
  padding: 0 2px;

  ${({$disabled:t=!1,theme:o})=>t&&`color: ${o.disabledGray};
     pointer-events: none;
     cursor: default;
    `}
`,mn=f(je)`
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
`,fn=f.span`
  margin-left: 0.5rem;
`,bn=f.ul`
  padding-left: 2rem;
`,De=({title:t,icon:o,children:s,$isExpanded:n=!1,$disabled:r=!1})=>{const[i,d]=x.useState(n?"auto":0);return x.useEffect(()=>{d(n?"auto":0)},[n]),e.jsxs(gn,{$disabled:r,children:[e.jsxs(mn,{disabled:r,onClick:()=>{d(i===0?"auto":0)},children:[o,e.jsx(fn,{children:t})]}),e.jsx(bs,{duration:350,easing:"ease-in-out",height:i,children:e.jsx(bn,{children:s})})]})},jn=f.li`
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
`,Sn=f(je)`
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
`,vn=f.span`
  margin-left: 0.5rem;
`,yn=f.a`
  display: block;
  text-decoration: none;
  color: unset;
  outline-offset: 0;

  padding: 0.5rem
    ${({$withPadding:t=!1})=>t?"1rem":"0.5rem"};
`,A=({title:t,icon:o,onClick:s=void 0,$link:n=void 0,$disabled:r=!1,$withPadding:i=!1})=>{const d=e.jsxs(e.Fragment,{children:[o,e.jsx(vn,{children:t})]});return e.jsx(jn,{$disabled:r,children:n?e.jsx(yn,{href:n,$withPadding:i,target:"_blank",children:d}):e.jsx(Sn,{disabled:r,onClick:s,$withPadding:i,children:d})})},wn=f.div`
  text-align: center;
`,gt=f.p`
  text-align: center;
  margin: 0;
`,Gt=f.h3`
  margin: 0;
`,Xt=f.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({theme:t})=>t.pattensBlue};
  padding: 1rem 1rem;
`,Qt=f.div`
  padding: 1rem;
  overflow-y: auto;
`,Yt=f.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid ${({theme:t})=>t.pattensBlue};
  padding: 1rem 1rem;
`,mt=f(js)`
  width: 25px;
  height: 25px;
`,X=({children:t,className:o})=>e.jsx(Qt,{className:o,children:t}),Q=({children:t})=>e.jsx(Yt,{"data-testid":"modal-footer:wrapper",children:t}),Cn=f.button`
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
`,W=({title:t,showExitIndicator:o=!0,onClose:s})=>{const{setIsModalOpen:n}=q();return e.jsxs(Xt,{children:[e.jsx(Gt,{id:"modalHeader",children:t}),o&&e.jsx(Cn,{"aria-label":"Close",onClick:()=>{n(!1),s==null||s()}})]})},kn=()=>{const t=x.useCallback(async i=>{var g,b,j;const d={method:"GET"};if(!i)return;const l=await fetch(i.url,d),u=(j=(b=(g=l.headers.get("Content-Disposition"))==null?void 0:g.split(";").pop())==null?void 0:b.split("=").pop())==null?void 0:j.replace(/"/g,""),a=decodeURIComponent(i.url.pathname.split("/").pop()??"unknown_external.gba");if(!l.ok)throw new Error(`Received unexpected status code: ${l.status}`);const c=await l.blob();return new File([c],u??a)},[]),{data:o,isLoading:s,error:n,execute:r}=we({fetchFn:t,clearDataOnLoad:!0});return{data:o,isLoading:s,error:n,execute:r}},$n=f.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,Rn=f.p`
  margin: 0;
  color: ${({theme:t})=>t.errorRed};
`,Se=({icon:t,text:o,className:s})=>e.jsxs($n,{"data-testid":"error-with-icon",className:s,children:[t,e.jsx(Rn,{children:o})]}),Fn=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 15px;
`,Ln=f.p`
  word-wrap: break-word;
  max-width: 100%;
`,In=t=>{const o=_();return e.jsx(Je,{color:o.gbaThemeBlue,cssOverride:{margin:"0 auto"},...t})},Pn=({children:t,currentName:o,indicator:s,isLoading:n,loadingCopy:r})=>n?e.jsxs(Fn,{children:[e.jsxs(Ln,{children:[r,e.jsx("br",{}),o]}),s]}):t,Tn=f.a`
  word-break: break-all;
`,Mn=f.p`
  margin: 0;
`,Nn=({url:t})=>e.jsxs(io,{children:[e.jsx(lo,{expandIcon:e.jsx(Ss,{}),children:e.jsx(Mn,{children:"View Full URL"})}),e.jsx(co,{children:e.jsx(Tn,{href:t.href,target:"_blank",rel:"noopener",children:t.href})})]}),Bn=({url:t,onLoadOrDismiss:o})=>{const s=_(),{setIsModalOpen:n}=q(),{emulator:r}=E(),[i,d]=x.useState(!1),[l,u]=x.useState(null),a=x.useId(),c=xt(),{data:h,isLoading:g,error:b,execute:j}=kn();return x.useEffect(()=>{if(!g&&h&&l){const p=()=>{c((r==null?void 0:r.filePaths().gamePath)+"/"+h.name)&&(o("loaded"),n(!1))};r==null||r.uploadRom(h,p),u(null),d(!0)}},[o,c,l,r,h,g,n]),e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Upload Public Rom",onClose:()=>o("temporarily-dismissed")}),e.jsx(X,{children:e.jsxs(Pn,{isLoading:g,currentName:l,indicator:e.jsx(In,{}),loadingCopy:"Loading rom from url:",children:[!i&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"A public rom URL has been shared with you."}),e.jsx("p",{children:"You can load it using the upload button!"}),e.jsx("p",{children:"Make sure you trust the provider before uploading:"})]}),e.jsx(Nn,{url:t}),!!b&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:s.errorRed}}),text:"Loading rom from URL has failed"}),i&&e.jsx(wn,{children:e.jsx("p",{children:"Upload complete!"})})]})}),e.jsxs(Q,{children:[e.jsx(M,{id:a,onClick:()=>{u(t.href),j({url:t})},type:"submit",variant:"contained",children:"Upload"}),e.jsx(M,{variant:"outlined",onClick:()=>{o(b?"skipped-error":"skipped"),n(!1)},children:"Don't ask again"})]})]})},En="romURL",Un="hasLoadedPublicExternalRoms",Zt=()=>{var l;const[t,o]=B(Un),[s]=B(ze),n=vs(),i=new URLSearchParams((l=window==null?void 0:window.location)==null?void 0:l.search).get(En),d=!!i&&(t==null?void 0:t[i])!="loaded"&&(t==null?void 0:t[i])!="skipped"&&(t==null?void 0:t[i])!="temporarily-dismissed"&&!!(s!=null&&s.hasCompletedProductTourIntro);return n&&o(u=>Object.fromEntries(Object.entries(u??{}).map(([a,c])=>[a,c==="temporarily-dismissed"?"pending":c]))),{shouldShowPublicRomModal:d,setHasLoadedPublicRoms:o,romURL:i}},On=()=>{const{setModalContent:t,isModalOpen:o,setIsModalOpen:s}=q(),{shouldShowPublicRomModal:n,setHasLoadedPublicRoms:r,romURL:i}=Zt();x.useEffect(()=>{if(n&&i&&!o)try{const d=new URL(i),l=u=>{r(a=>({...a,[i]:u}))};t(e.jsx(Bn,{url:d,onLoadOrDismiss:l})),s(!0)}catch{G.error("Invalid external rom URL"),r(d=>({...d,[i]:"error"}))}},[i,n,s,t,r,o])},zn=()=>{const{setIsModalOpen:t}=q(),[,o]=B(ze);return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"About"}),e.jsxs(X,{children:[e.jsx("p",{children:"Gbajs3 is a full featured Game Boy Advance emulator meant to operate online and offline in the browser."}),e.jsx("p",{children:"We currently support the mGBA core through the use of webassembly."}),e.jsx("p",{children:"Getting Started:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using the ",e.jsx("i",{children:"Pre Game Actions"})," menu, upload a sav file if you have one available"]}),e.jsxs("li",{children:["Then, load a rom of your choice through the ",e.jsx("i",{children:"Upload Rom"})," or"," ",e.jsx("i",{children:"Load Local Rom"})," menu items"]}),e.jsx("li",{children:"Enjoy, your game will boot!"})]}),e.jsxs("p",{children:["See the"," ",e.jsx("a",{href:"https://github.com/thenick775/gbajs3/wiki",target:"_blank",children:"WIKI"})," ","and tour items for further information!"]})]}),e.jsxs(Q,{children:[e.jsx(M,{variant:"contained",onClick:()=>{o({}),t(!1)},children:"Take a tour"}),e.jsx(M,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]})]})},Jt=et`
  100% {
    stroke-dashoffset: 0;
  }
`,_n=et`
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`,An=et`
  100% {
    box-shadow: inset 0 0 0 100vh var(--checkmark-fill-color);
  }
`,qn=f.svg`
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
  animation: ${An} 0.2s ease-in-out 0.2s forwards,
    ${_n} 0.12s ease-in-out 0.45s both;
`,Wn=f.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 5;
  stroke-miterlimit: 10;
  stroke: ${({theme:t})=>t.checkMarkGreen};
  fill: none;
  animation: ${Jt} 0.3s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`,Hn=f.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${Jt} 0.15s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
`,Vn=f.span`
  ${({$isSuccessCheckVisible:t=!1})=>t&&"visibility: hidden;"}
`,Ce=({copy:t,msDuration:o=1100,onClick:s,showSuccess:n=!0,...r})=>{const i=x.useId(),[d,l]=x.useState(!1),u=!!n&&d;return Ze(()=>l(!1),u?o:null),e.jsxs(M,{onClick:a=>{l(!0),s==null||s(a)},variant:"contained",...r,children:[u&&e.jsxs(qn,{role:"graphics-symbol","aria-labelledby":i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[e.jsx("title",{id:i,children:"Circle Check"}),e.jsx(Wn,{cx:"26",cy:"26",r:"25",fill:"none"}),e.jsx(Hn,{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]}),e.jsx(Vn,{$isSuccessCheckVisible:u,children:t})]})},ce=Ee.forwardRef(({id:t,label:o,watcher:s,...n},r)=>e.jsx(Mt,{"data-testid":"managed-checkbox:label",id:t,control:e.jsx(ye,{ref:r,checked:!!s,...n}),label:o,style:{margin:0}})),Dn=f.ul`
  list-style: none;
  display: ${({$shouldHide:t=!1})=>t?"none":"flex"};
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin: 0;
  max-width: 100%;
`,Kn=f.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid ${({theme:t})=>t.pattensBlue};
  padding-bottom: 10px;
  width: 100%;
`,Gn=f(ys)`
  min-height: 40px;
  min-width: 40px;
`,vt=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${({$fullWidth:t=!1})=>t?"100%":"auto"};

  @media ${({theme:t})=>t.isLargerThanPhone} {
    flex-direction: row;
  }
`,Xn=f.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
`,Qn=f.p`
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: ${({$withMargin:t=!1})=>t?"5px":"0"};
`,Yn=()=>{var m;const t=_(),o=ne(t.isLargerThanPhone),{setIsModalOpen:s}=q(),{emulator:n}=E(),[r,i]=x.useState(!1),d=x.useId(),l={desc:"",code:"",enable:!1},[u,a]=x.useMemo(()=>{const w=n==null?void 0:n.getCurrentCheatsFile(),C=new TextDecoder().decode(w);return[C,n==null?void 0:n.parseCheatsString(C)]},[n]),{register:c,control:h,handleSubmit:g,watch:b,setValue:j,formState:{errors:p,isSubmitSuccessful:S}}=me({defaultValues:{rawCheats:u,cheats:a!=null&&a.length?a:[l]}}),{fields:k,append:R,remove:$}=ws({control:h,name:"cheats"}),v=x.useCallback(()=>{const w=n==null?void 0:n.getCurrentCheatsFile(),C=new TextDecoder().decode(w),L=(n==null?void 0:n.parseCheatsString(C))??[];r?j("cheats",L):j("rawCheats",C)},[n,j,r]),y=[{content:e.jsx("p",{children:"Use this form to enter, add, and delete cheats."}),target:`#${CSS.escape(`${d}--cheats-form`)}`},{content:e.jsx("p",{children:"This form field is for the name of the cheat."}),target:`#${CSS.escape(`${d}--name`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Put your cheat code into this field."}),e.jsx("p",{children:"Remember to separate multi-line cheats with the '+' character!"})]}),target:`#${CSS.escape(`${d}--cheat-code`)}`},{content:e.jsx("p",{children:"Use the checkbox to enable/disable a cheat."}),placement:"right",target:`#${CSS.escape(`${d}--enabled`)}`},{content:e.jsx("p",{children:"Use the trash button to remove a cheat entirely."}),placement:"right",target:`#${CSS.escape(`${d}--remove`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"plus"})," button to add a new cheat."]}),target:`#${CSS.escape(`${d}--add-cheat`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"Submit"})," button to save your cheats, and convert them to libretro format."]}),target:`#${CSS.escape(`${d}--submit-button`)}`},{content:e.jsx("p",{children:"Use this button to toggle between viewing parsed cheats or raw cheats in libretro file format."}),placement:"right",target:`#${CSS.escape(`${d}--toggle-raw-cheats`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Manage Cheats"}),e.jsx(X,{children:e.jsxs("form",{"aria-label":"Cheats Form",id:`${d}--cheats-form`,onSubmit:g(w=>{const C=r?new File([new Blob([w.rawCheats],{type:"text/plain"})],(n==null?void 0:n.getCurrentCheatsFileName())??"unknown.cheats"):n==null?void 0:n.parsedCheatsToFile(w.cheats);C&&(n==null||n.uploadCheats(C,()=>{n.autoLoadCheats(),v()}))}),children:[e.jsx(oe,{error:!!(p!=null&&p.rawCheats),label:"Raw Libretro Cheats",InputLabelProps:{shrink:!0},multiline:!0,fullWidth:!0,minRows:6,variant:"outlined",InputProps:{sx:{textarea:{whiteSpace:"pre",overflowX:"auto !important"}}},helperText:(m=p==null?void 0:p.rawCheats)==null?void 0:m.message,style:{display:r?"block":"none"},...c("rawCheats")}),e.jsx(Dn,{$shouldHide:r,children:k.map((w,C)=>{var P,T,Y,Z,J,ee,ae,te,H,ie;const L=he=>C===0?he:void 0;return e.jsxs(Kn,{children:[e.jsxs(vt,{$fullWidth:!0,children:[e.jsx(oe,{id:L(`${d}--name`),label:"Name",error:!!((T=(P=p==null?void 0:p.cheats)==null?void 0:P[C])!=null&&T.desc),size:"small",autoComplete:"Name",style:o?{maxWidth:100}:void 0,helperText:(J=(Z=(Y=p==null?void 0:p.cheats)==null?void 0:Y[C])==null?void 0:Z.desc)==null?void 0:J.message,...c(`cheats.${C}.desc`,{required:{value:!0,message:"required"}})}),e.jsx(oe,{id:L(`${d}--cheat-code`),label:"Cheat Code",error:!!((ae=(ee=p==null?void 0:p.cheats)==null?void 0:ee[C])!=null&&ae.code),size:"small",autoComplete:"Code",helperText:(ie=(H=(te=p==null?void 0:p.cheats)==null?void 0:te[C])==null?void 0:H.code)==null?void 0:ie.message,...c(`cheats.${C}.code`,{required:{value:!0,message:"required"}})})]}),e.jsxs(vt,{children:[e.jsx(ce,{id:L(`${d}--enabled`),label:"Enabled",watcher:b(`cheats.${C}.enable`),...c(`cheats.${C}.enable`)}),e.jsx(D,{"aria-label":"Delete",id:L(`${d}--remove`),sx:{padding:0,marginRight:"auto","&:hover":{borderRadius:"10px"},"&:focus":{borderRadius:"10px"},"& .MuiTouchRipple-root .MuiTouchRipple-child":{borderRadius:"10px"}},onClick:()=>$(C),children:e.jsx(Gn,{})})]})]},w.id)})}),e.jsxs(Xn,{children:[e.jsx(D,{"aria-label":"Create new cheat",id:`${d}--add-cheat`,sx:{padding:0,display:r?"none":"flex"},onClick:()=>R(l),children:e.jsx(mt,{})}),e.jsx(Qn,{$withMargin:r,children:"Join multi-line codes with '+'"})]})]})}),e.jsxs(Q,{children:[e.jsx(Ce,{copy:"Submit",form:`${d}--cheats-form`,id:`${d}--submit-button`,showSuccess:S,type:"submit"}),e.jsx(M,{id:`${d}--toggle-raw-cheats`,color:"info",variant:"contained",onClick:()=>i(w=>!w),children:r?"Parsed":"Raw"}),e.jsx(M,{variant:"outlined",onClick:()=>s(!1),children:"Close"})]}),e.jsx(be,{steps:y,completedProductTourStepName:"hasCompletedCheatsTour"})]})},Zn=f.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Jn=({id:t,onAfterSubmit:o})=>{const{emulator:s}=E(),{isRunning:n}=re(),{handleSubmit:r,setValue:i,control:d,formState:{errors:l}}=me(),u=s==null?void 0:s.defaultKeyBindings(),[a,c]=B(Et),h=b=>{const j=Object.entries(b).filter(([,p])=>!!p).map(([,p])=>p);n&&(s==null||s.remapKeyBindings(j)),c(j),o()},g=a??u;return e.jsx(Zn,{"aria-label":"Key Bindings Form",id:t,onSubmit:r(h),children:g==null?void 0:g.map(b=>e.jsx(It,{control:d,name:b.gbaInput,defaultValue:b,rules:{validate:{noSpace:j=>j.key!==" "||"Space is reserved for accessibility requirements",noTab:j=>{var p;return((p=j.key)==null?void 0:p.toLowerCase())!=="tab"||"Tab is reserved for accessibility requirements"}}},render:({field:{value:j}})=>{var p;return e.jsx(oe,{variant:"outlined",label:j.gbaInput,value:j.key,onKeyDown:S=>{S.key.toLowerCase()!=="tab"&&(i(j.gbaInput,{gbaInput:j.gbaInput,key:S.key,location:S.location}),S.preventDefault())},error:!!l[b.gbaInput],helperText:(p=l==null?void 0:l[b.gbaInput])==null?void 0:p.message})}},`gba_input_${b.gbaInput.toLowerCase()}`))})},es=Ee.forwardRef(({id:t,label:o,watcher:s,...n},r)=>e.jsx(Mt,{"data-testid":"managed-switch:label",id:t,control:e.jsx(uo,{ref:r,checked:!!s,...n}),label:o,style:{margin:0}})),er=f.form`
  display: flex;
  flex-direction: column;
`,tr=({id:t,onAfterSubmit:o})=>{const[s,n]=B(Wt),r=_(),i=ne(r.isLargerThanPhone),d=h=>h===void 0&&!i||!!h,{register:l,handleSubmit:u,watch:a}=me({values:s??{OpadAndButtons:d(void 0),SaveState:d(void 0),LoadState:d(void 0),QuickReload:d(void 0),SendSaveToServer:d(void 0),NotificationsEnabled:!0},resetOptions:{keepDirtyValues:!0}}),c=async h=>{n(g=>({...g,...h})),o()};return e.jsxs(er,{"aria-label":"Virtual Controls Form",id:t,onSubmit:u(c),children:[e.jsx(ce,{label:"Virtual D-pad/Buttons",watcher:a("OpadAndButtons"),...l("OpadAndButtons")}),e.jsx(ce,{label:"Display 'Save State' button",watcher:a("SaveState"),...l("SaveState")}),e.jsx(ce,{label:"Display 'Load State' button",watcher:a("LoadState"),...l("LoadState")}),e.jsx(ce,{label:"Display 'Quick Reload' button",watcher:a("QuickReload"),...l("QuickReload")}),e.jsx(ce,{label:"Display 'Save to Cartridge' button",watcher:a("SendSaveToServer"),...l("SendSaveToServer")}),e.jsx(es,{label:"Enable Notifications",watcher:a("NotificationsEnabled"),...l("NotificationsEnabled")})]})},Me=f.li`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 32px;
  gap: 10px;

  color: ${({theme:t})=>t.blueCharcoal};
  background-color: ${({theme:t})=>t.pureWhite};
  border: 1px solid rgba(0, 0, 0, 0.125);
`,sr=f.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  & > ${Me}:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & > ${Me}:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & > ${Me}:not(:first-child) {
    border-top-width: 0;
  }
`,or=f(Ue)`
  height: 100%;
  width: 20px;
`,nr=f(Pt)`
  height: 100%;
  width: 20px;
`,rr=f(Lt)`
  height: 100%;
  width: 20px;
`,ar=f.button`
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
`,ir=f.div`
  display: flex;
  gap: 10px;
`,lr=({condition:t,truthyIcon:o,falsyIcon:s,...n})=>e.jsx(D,{sx:{padding:0},...n,children:t?o:s}),cr=({name:t,loadProfile:o,onSubmit:s})=>{const[n,r]=x.useState(!1),[i,d]=x.useState(t),l=u=>{n&&u&&s(u),r(a=>!a)};return e.jsxs(ir,{children:[n?e.jsx(oe,{variant:"standard",sx:{width:"100%","& .MuiInputBase-input":{paddingLeft:"8px"}},error:!i,value:i,onChange:u=>d(u.target.value)}):e.jsx(ar,{onClick:o,children:t}),e.jsx(lr,{condition:n,truthyIcon:e.jsx(rr,{}),falsyIcon:e.jsx(nr,{}),"aria-label":`${n?"Save":"Edit"} ${t}'s name`,type:"submit",onClick:()=>l(i)})]})},dr=({id:t})=>{var u;const[o,s]=B(Go),{layouts:n,setLayouts:r}=ue(),i=()=>{s(a=>[...a??[],{id:Cs(),name:`Profile-${((a==null?void 0:a.length)??0)+1}`,layouts:n,active:!0}])},d=(a,c)=>{s(h=>h==null?void 0:h.map(g=>g.id==a?{...g,name:c}:g))},l=a=>{s(c=>c==null?void 0:c.filter(h=>h.id!==a))};return e.jsxs(e.Fragment,{children:[e.jsxs(sr,{id:t,"aria-label":"Profiles List",children:[(u=o==null?void 0:o.map)==null?void 0:u.call(o,(a,c)=>e.jsxs(Me,{children:[e.jsx(cr,{name:a.name,loadProfile:()=>r(a.layouts),onSubmit:h=>d(a.id,h)}),e.jsx(D,{"aria-label":`Delete ${a.name}`,sx:{padding:0},onClick:()=>l(a.id),children:e.jsx(or,{})})]},`${a.name}_${c}_action_list_item`)),!(o!=null&&o.length)&&e.jsx("li",{children:e.jsx(gt,{children:"No control profiles"})})]}),e.jsx(D,{"aria-label":"Create New Profile",sx:{padding:0},onClick:()=>i(),children:e.jsx(mt,{})})]})},ur=f(ho)`
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);

  & .MuiTabs-scrollButtons {
    width: fit-content;
  }
`,hr=f.div`
  padding: 24px;
`,Ne=t=>({id:`control-tab-${t}`,"aria-controls":`tabpanel-${t}`}),Ke=({children:t,index:o,value:s})=>e.jsx("div",{role:"tabpanel",hidden:s!==o,id:`tabpanel-${o}`,"aria-labelledby":`tab-${o}`,children:s===o&&e.jsx(hr,{children:t})}),pr=({setFormId:t,virtualControlsFormId:o,controlProfilesFormId:s,keyBindingsFormId:n,resetPositionsButtonId:r,setIsSuccessfulSubmit:i})=>{const{clearLayouts:d}=ue(),[l,u]=x.useState(0),a=g=>{switch(g){case 0:return o;case 1:return s;case 2:return n;default:return o}},c=(g,b)=>{u(b),t(a(b)),i(!1)},h=()=>i(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(ur,{variant:"scrollable",value:l,onChange:c,"aria-label":"Control tabs",allowScrollButtonsMobile:!0,children:[e.jsx(We,{label:"Virtual Controls",...Ne(0)}),e.jsx(We,{label:"Profiles",...Ne(1)}),e.jsx(We,{label:"Key Bindings",...Ne(2)})]}),e.jsxs(Ke,{value:l,index:0,children:[e.jsx(tr,{id:o,onAfterSubmit:h}),e.jsx(M,{id:r,sx:{marginTop:"10px"},onClick:d,children:"Reset All Positions"})]}),e.jsx(Ke,{value:l,index:1,children:e.jsx(dr,{id:s})}),e.jsx(Ke,{value:l,index:2,children:e.jsx(Jn,{id:n,onAfterSubmit:h})})]})},xr=()=>{const{setIsModalOpen:t}=q(),o=x.useId(),[s,n]=x.useState(`${o}--virtual-controls-form`),[r,i]=x.useState(!1),d=[{content:e.jsx("p",{children:"Select which virtual controls you wish to enable in this form tab."}),target:`#${CSS.escape(`${o}--virtual-controls-form`)}`},{content:e.jsx("p",{children:"Use this button to reset the positions of the screen, control panel, and all virtual controls."}),target:`#${CSS.escape(`${o}--reset-positions-button`)}`},{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use the tab panel to change which form you are seeing."}),e.jsxs("p",{children:["Select the ",e.jsx("i",{children:"KEY BINDINGS"})," tab above, then click next!"]})]}),placement:"right",target:`#${CSS.escape(Ne(1).id)}`,disableBeacon:!0,disableOverlayClose:!0,hideCloseButton:!1,spotlightClicks:!0},{content:e.jsx("p",{children:"Remap keybindings by selecting a form field and typing your desired input."}),placement:"top-end",target:`#${CSS.escape(`${o}--key-bindings-form`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"Save Changes"})," button to persist changes from the current form tab."]}),target:`#${CSS.escape(`${o}--save-changes-button`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Controls"}),e.jsx(X,{children:e.jsx(pr,{setFormId:n,virtualControlsFormId:`${o}--virtual-controls-form`,controlProfilesFormId:`${o}--control-profiles`,keyBindingsFormId:`${o}--key-bindings-form`,resetPositionsButtonId:`${o}--reset-positions-button`,setIsSuccessfulSubmit:i})}),e.jsxs(Q,{children:[s!==`${o}--control-profiles`&&e.jsx(Ce,{copy:"Save Changes",form:s,id:`${o}--save-changes-button`,type:"submit",showSuccess:r}),e.jsx(M,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]}),e.jsx(be,{steps:d,completedProductTourStepName:"hasCompletedControlsTour"})]})},gr=()=>{const t=_(),{setIsModalOpen:o}=q(),{emulator:s}=E(),n=x.useId(),[r,i]=x.useState(!1),d=[{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this button to download your current save file."}),e.jsx("p",{children:"Remember to save in game before downloading!"})]}),placement:"right",target:`#${CSS.escape(n)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Download Save"}),e.jsx(X,{children:r?e.jsx(Se,{icon:e.jsx(ge,{style:{color:t.errorRed}}),text:"Load a rom to download its save file"}):e.jsx(gt,{children:"Remember to save in game before downloading your save file!"})}),e.jsxs(Q,{children:[e.jsx(M,{id:n,variant:"contained",onClick:()=>{const l=s==null?void 0:s.getCurrentSave(),u=s==null?void 0:s.getCurrentSaveName();if(l&&u){const a=new Blob([l],{type:"data:application/octet-stream"}),c=document.createElement("a");c.download=u,c.href=URL.createObjectURL(a),c.click(),c.remove()}else i(!0)},children:"Download"}),e.jsx(M,{variant:"outlined",onClick:()=>o(!1),children:"Close"})]}),e.jsx(be,{steps:d,completedProductTourStepName:"hasCompletedDownloadSaveTour"})]})},ts=t=>e.jsx(tt,{"data-testid":"action-box:minus",className:"minus",fontSize:"inherit",style:{width:14,height:14},...t,children:e.jsx("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"})}),ss=t=>e.jsx(tt,{"data-testid":"action-box:plus",className:"plus",fontSize:"inherit",style:{width:14,height:14},...t,children:e.jsx("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"})}),mr=t=>e.jsx(tt,{"data-testid":"action-box:close",className:"close",fontSize:"inherit",style:{width:14,height:14},...t,children:e.jsx("path",{d:"M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"})}),fr=f.div`
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
`,br=f.div`
  display: flex;
  gap: 15px;
`,jr=po(t=>e.jsx(xo,{...t}))(({theme:t})=>({marginTop:5,[`& .${He.iconContainer}`]:{"& .close":{opacity:.3}},[`& .${He.groupTransition}`]:{marginLeft:15,paddingLeft:10,borderLeft:`1px dashed ${go(t.palette.text.primary,.4)}`},[`& .${He.content}`]:{width:"auto",alignItems:"baseline"}})),Sr=({id:t,allFiles:o,deleteFile:s,downloadFile:n})=>{if(!o)return null;const r=i=>{const d=i.path.split("/").pop(),l=e.jsxs(fr,{children:[e.jsx("p",{children:d}),e.jsxs(br,{children:[e.jsx(D,{"aria-label":`Download ${d}`,sx:{padding:0,margin:0},onClick:()=>n(i.path),children:e.jsx(Tt,{})}),e.jsx(D,{"aria-label":`Delete ${d}`,sx:{padding:0},onClick:()=>s(i.path),children:e.jsx(Ue,{})})]})]});return e.jsx(jr,{itemId:i.path,label:i.isDir?d:l,children:i.isDir&&i.children?i.children.map(u=>r(u)):null},i.path)};return e.jsx(mo,{id:t,"aria-label":"File System",defaultExpandedItems:[o.path],slots:{collapseIcon:ts,endIcon:mr,expandIcon:ss},sx:{height:"fit-content"},children:r(o)})},os=$t`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`,vr=f.form`
  display: flex;
  flex-direction: column;

  /* copying styles from the treeitem to match file system display */
  & p {
    ${os}
  }
`,yr=f.p`
  margin: 0;
  ${os}
`,wr=f(je)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: unset;
  border: none;
  color: inherit;
  margin: 0;
`,Cr=({id:t})=>{const[o]=B(rt),{addCallbacksAndSaveSettings:s}=Dt(),[n,r]=x.useState(!1),{register:i,handleSubmit:d,watch:l}=me({values:o,resetOptions:{keepDirtyValues:!0}});return e.jsxs("div",{id:t,children:[e.jsxs(wr,{onClick:()=>r(u=>!u),children:[e.jsx(yr,{children:"Options"}),n?e.jsx(ts,{}):e.jsx(ss,{})]}),e.jsx(fo,{in:n,children:e.jsxs(vr,{"aria-label":"File System Options Form",onSubmit:d(s),children:[e.jsx(ce,{label:"Save to cartridge on in-game save",watcher:l("saveFileSystemOnInGameSave"),...i("saveFileSystemOnInGameSave")}),e.jsx(es,{label:"Enable Notifications",watcher:l("notificationsEnabled"),...i("notificationsEnabled")}),e.jsx(M,{sx:{width:"fit-content"},type:"submit",children:"Save Options"})]})})]})},kr=f(X)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`,$r=()=>{const{setIsModalOpen:t}=q(),{emulator:o}=E(),[s,n]=x.useState(),r=x.useId(),i=x.useCallback(a=>{o==null||o.deleteFile(a),n(o==null?void 0:o.listAllFiles())},[o]),d=a=>{const c=a.split("/").pop(),h=o==null?void 0:o.getFile(a);if(h&&c){const g=new Blob([h],{type:"data:application/octet-stream"}),b=document.createElement("a");b.download=c,b.href=URL.createObjectURL(g),b.click(),b.remove()}},l=s??(o==null?void 0:o.listAllFiles()),u=[{content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Use this area to view your current file tree, download files, and delete files from the tree."}),e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"plus"})," and ",e.jsx("i",{children:"minus"})," icons to open and close file tree branches!"]})]}),target:`#${CSS.escape(`${r}--emulator-file-system`)}`},{content:e.jsxs("p",{children:["Click the ",e.jsx("i",{children:"Options"})," label to adjust and save settings related to the file system."]}),target:`#${CSS.escape(`${r}--file-system-options`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"SAVE FILE SYSTEM"})," button to persist all of your files to your device!"]}),target:`#${CSS.escape(`${r}--save-file-system-button`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"File System"}),e.jsxs(kr,{children:[e.jsx(Sr,{id:`${r}--emulator-file-system`,allFiles:l,deleteFile:i,downloadFile:d}),e.jsx(Cr,{id:`${r}--file-system-options`})]}),e.jsxs(Q,{children:[e.jsx(Ce,{copy:"Save File System",id:`${r}--save-file-system-button`,onClick:o==null?void 0:o.fsSync}),e.jsx(M,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]}),e.jsx(be,{steps:u,completedProductTourStepName:"hasCompletedFileSystemTour"})]})},Rr=f.button`
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
`,Fr=f.ul`
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
`,Lr=f(Ue)`
  height: 100%;
  width: 20px;
`,Ir=f.form`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.pattensBlue};
  margin-bottom: 16px;
  padding-bottom: 16px;
`,Pr=()=>{var $,v,y;const t=_(),{setIsModalOpen:o}=q(),{emulator:s}=E(),[n,r]=x.useState(),[i,d]=x.useState(null),[l,u]=B(qt,0),a=x.useId(),{register:c,handleSubmit:h,setValue:g,formState:{errors:b,isSubmitSuccessful:j}}=me({defaultValues:{saveStateSlot:l}}),p=x.useCallback(()=>{var w;const m=(w=s==null?void 0:s.listSaveStates())==null?void 0:w.filter(C=>C!=="."&&C!=="..");r(m)},[s]);x.useEffect(()=>{g("saveStateSlot",l)},[l,g]);const S=async m=>{u(m.saveStateSlot)},k=n??(($=s==null?void 0:s.listSaveStates())==null?void 0:$.filter(m=>m!=="."&&m!=="..")),R=[{content:e.jsx("p",{children:"Use this input and button to manually update the current save state slot in use."}),placementBeacon:"bottom-end",target:`#${CSS.escape(`${a}--save-state-slot-form`)}`},{content:e.jsx("p",{children:"Tap a row to load a save state, or use the trash can icon to delete a save state."}),placementBeacon:"bottom-end",target:`#${CSS.escape(`${a}--save-state-list`)}`},{content:e.jsxs("p",{children:["Use the ",e.jsx("i",{children:"plus"})," button to add a new save state. This will automatically increase the current save state number!"]}),placementBeacon:"bottom-end",target:`#${CSS.escape(`${a}--add-state-button`)}`}];return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Manage Save States"}),e.jsxs(X,{children:[e.jsxs(Ir,{id:`${a}--save-state-slot-form`,onSubmit:h(S),children:[e.jsx(oe,{label:"Current Save State Slot",type:"number",InputLabelProps:{shrink:!0},size:"small",error:!!(b!=null&&b.saveStateSlot),helperText:(v=b==null?void 0:b.saveStateSlot)==null?void 0:v.message,...c("saveStateSlot",{required:{value:!0,message:"Slot is required"},min:{value:0,message:"Slot must be >= 0"},valueAsNumber:!0})}),e.jsx(Ce,{copy:"Update Slot",showSuccess:j,size:"small",type:"submit",sx:{maxHeight:"40px"}})]}),e.jsxs(Fr,{id:`${a}--save-state-list`,children:[(y=k==null?void 0:k.map)==null?void 0:y.call(k,(m,w)=>e.jsxs(Be,{children:[e.jsx(Rr,{onClick:()=>{const C=m.split(".").pop(),L=C==null?void 0:C.replace("ss","");if(L){const P=parseInt(L);(s==null?void 0:s.loadSaveState(P))?(u(P),d(null)):d("Failed to load save state")}},children:m}),e.jsx(D,{"aria-label":`Delete ${m}`,sx:{padding:0},onClick:()=>{const C=m.split(".").pop(),L=C==null?void 0:C.replace("ss","");if(L){const P=parseInt(L);s==null||s.deleteSaveState(P),p()}},children:e.jsx(Lr,{})})]},`${m}_${w}`)),!(k!=null&&k.length)&&e.jsx("li",{children:e.jsx(gt,{children:"No save states"})})]}),e.jsx(D,{id:`${a}--add-state-button`,"aria-label":"Create new save state",sx:{padding:0},onClick:()=>{(s==null?void 0:s.createSaveState(l+1))?(p(),u(w=>w+1),d(null)):d("Failed to create save state")},children:e.jsx(mt,{})}),i&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:t.errorRed}}),text:i})]}),e.jsx(Q,{children:e.jsx(M,{variant:"outlined",onClick:()=>o(!1),children:"Close"})}),e.jsx(be,{steps:R,completedProductTourStepName:"hasCompletedSaveStatesTour"})]})},Tr=()=>{const[t,o]=x.useState(0),s=x.useCallback(l=>l?new Promise((u,a)=>{console.log("Reflashing Cartridge...");let c=l.romFile.size;const h=new FileReader;h.onload=g=>{if(g.target&&g.target.result){let b=g.target.result;typeof b=="string"&&(b=new TextEncoder().encode(b));let j=new Uint8Array(b);const p=new XMLHttpRequest;p.open("POST",`${l.esp32IP}/upload_rom_file?cartSize=${c}`,!0),p.upload.onprogress=function(S){if(S.lengthComputable){const k=S.loaded/S.total*67;o(k)}},p.onload=()=>{if(p.status>=200&&p.status<300){const S=new XMLHttpRequest;S.open("POST",`${l.esp32IP}/verify_rom_file?cartSize=${c}`,!0),S.upload.onprogress=function(k){if(k.lengthComputable){const R=67+k.loaded/k.total*33;o(R)}},S.onload=()=>{S.status>=200&&S.status<300?u(!0):a("Rom on cartridge has errors")},S.onerror=()=>a("Failed to upload rom for verification"),S.send(j)}else a("Failed to upload rom to cartridge")},p.onerror=()=>a("Failed to upload rom to cartridge"),p.send(j)}},h.readAsArrayBuffer(l.romFile)}):Promise.reject(new Error("fetchProps is required")),[]),{data:n,isLoading:r,error:i,execute:d}=we({fetchFn:s,clearDataOnLoad:!0});return{data:n,isLoading:r,error:i,execute:d,progress:t}},Mr=f.div`
  cursor: pointer;
  border-color: ${({theme:t})=>t.blackRussian};
  background-color: ${({$isDragActive:t=!1,theme:o})=>t?o.arcticAirBlue:o.aliceBlue2};
  border-width: 1px;
  border-style: dashed;
  padding: 0.5rem;
  text-align: center;
`,Nr=f(ks)`
  height: 60px;
  width: auto;
`,Br=f.div`
  padding-top: 3px;
`,Er=f.ul`
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
`,Ur=f.li`
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
`,Or=f.div`
  display: flex;
  gap: 15px;
`,zr=({fileNames:t,onDeleteFile:o})=>e.jsxs(Er,{children:[e.jsxs("p",{children:["File",t.length>1&&"s"," to upload:"]}),t.map((s,n)=>e.jsxs(Ur,{children:[e.jsx("p",{children:s}),e.jsx(Or,{children:e.jsx(D,{"aria-label":`Delete ${s}`,sx:{padding:0},onClick:()=>o(s),children:e.jsx(Ue,{})})})]},`${s}_${n}`))]}),_r=(t,o)=>{const s=`.${t.name.split(".").pop()}`;return o.some(n=>typeof n=="string"?n===s:!!n.regex.exec(s))},Ge=t=>typeof t=="string"?t:t.displayText,Ar=(t,o)=>{if(!t.length)return;const s=o?"At least one":"One";let n=`${s} `+t.slice(0,-1).map(Ge).join(", ")+`, or ${Ge(t.slice(-1)[0])} file is required`;return t.length==1&&(n=`${s} ${Ge(t[0])} file is required`),r=>!(r instanceof File)||r&&_r(r,t)?null:{message:n,code:Rs.FileInvalidType}},qr=({ariaLabel:t,children:o,error:s,hideAcceptedFiles:n,hideErrors:r,id:i,multiple:d=!1,name:l,onDrop:u,validFileExtensions:a})=>{const c=_(),[h,g]=x.useState([]),{getRootProps:b,getInputProps:j,isDragActive:p,fileRejections:S}=$s({multiple:d,onDrop:v=>{g(v),u(v)},validator:Ar(a,d)}),k=s?[s]:S.length&&h.length?["Some files were rejected"]:[...new Set(S.flatMap(v=>v.errors).map(v=>v.message))],R=v=>{const y=h.filter(m=>m.name!==v);g(y),u(y)},$=h.map(v=>v.name);return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{...b({id:i,$isDragActive:p,"aria-label":t}),children:[e.jsx("input",{"data-testid":"hidden-file-input",...j({name:l})}),e.jsx(Nr,{}),o]}),!!$.length&&!n&&e.jsx(zr,{fileNames:$,onDeleteFile:R}),!!k.length&&!r&&e.jsx(Br,{children:k.map(v=>e.jsx(Se,{icon:e.jsx(ge,{style:{color:c.errorRed}}),text:v},v))})]})},Wr=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 15px;
`,Hr=f.p`
  word-wrap: break-word;
  max-width: 100%;
`,Vr=[".gba",".gbc",".gb",".zip",".7z"],Dr=f.div`
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
`,Kr=({isLoading:t,children:o,indicator:s,progress:n})=>t?e.jsxs(Wr,{children:[e.jsx(Hr,{children:n<4?"Erasing Sectors...":n>67?"Verifying ROM...":"Flashing new ROM to cartridge..."}),s,e.jsx(Dr,{progress:n,children:e.jsxs("span",{style:{position:"relative",width:"100%",textAlign:"center",zIndex:600},children:[Math.round(n),"%"]})})]}):o,Gr=({esp32IP:t})=>{const o=_(),{setIsModalOpen:s}=q(),{handleSubmit:n,setValue:r,reset:i,control:d}=me(),{data:l,isLoading:u,error:a,execute:c,progress:h}=Tr(),g=x.useId(),b=x.useCallback(p=>{i(),r("romFile",p[0],{shouldValidate:!0})},[i,r]),j=async({romFile:p})=>{if(console.log(l),p){await c({romFile:p,esp32IP:t});return}};return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Upload Rom"}),e.jsx(X,{children:e.jsxs(Kr,{isLoading:u,indicator:e.jsx(Je,{color:o.gbaThemeBlue,cssOverride:{margin:"0 auto"}}),progress:h,children:[!!a&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:o.errorRed}}),text:"Writing rom has failed"}),e.jsx("form",{id:g,"aria-label":"Upload Rom Form",onSubmit:n(j),children:e.jsx(It,{control:d,name:"romFile",rules:{validate:p=>!!p||"A rom file is required"},render:({field:{name:p},fieldState:{error:S}})=>e.jsx(qr,{ariaLabel:"Upload Rom",id:`${g}--drag-and-drop`,onDrop:b,name:p,validFileExtensions:Vr,hideErrors:!!S,children:e.jsx("p",{children:"Drag and drop a rom or zipped rom file here, or click to upload a file"})})})})]})}),e.jsxs(Q,{children:[e.jsx(M,{form:g,type:"submit",variant:"contained",children:"Reflash Repro"}),e.jsx(M,{variant:"outlined",onClick:()=>s(!1),children:"Close"})]})]})},Xr=()=>{const[t,o]=x.useState(0),s=x.useCallback(l=>l?new Promise((u,a)=>{const c=new XMLHttpRequest;c.open("GET",l.url,!0),c.responseType="arraybuffer",c.overrideMimeType("text/plain; charset=x-user-defined"),c.onprogress=function(h){if(h.lengthComputable){const g=h.loaded/h.total*100;o(g)}},c.onload=async()=>{var h,g;if(c.status>=200&&c.status<300){const b=c.getResponseHeader("Content-Disposition"),j=(g=(h=b==null?void 0:b.split(";").pop())==null?void 0:h.split("=").pop())==null?void 0:g.replace(/"/g,""),p=decodeURIComponent(l.url.pathname.split("/").pop()??"unknown_external.gba"),S=new File([c.response],l.fullName??j??p);if(l.patchFile!=null&&l.patchFile!="")if(console.log("applying patch to file: "+l.patchFile),l.patchFile.startsWith(".")&&(l.patchFile=se+l.patchFile.substring(1)),l.patchFile.endsWith(".txt")){console.log("applying custom patch file");const k={fullName:l.fullName??j??p,patchFile:l.patchFile},R=new Uint8Array(c.response),$=await cn(k,R);u($)}else{const k=new XMLHttpRequest;k.open("GET",l.patchFile,!0),k.responseType="arraybuffer",k.overrideMimeType("text/plain; charset=x-user-defined"),k.onload=()=>{const R=new Uint8Array(k.response),{instructions:$,checksum:v}=Fs(R);console.log(v);const y=new Uint8Array(c.response),m=Ls($,y),w=new File([m],l.fullName??j??p);u(w)},k.onerror=()=>{console.error("Request for patch file failed"),a(new Error("Network error occurred: Patch File"))},k.send(null)}else console.log("resolved file"),u(S)}else console.error("Request failed2"),a(new Error(`Received unexpected status code: ${c.status}`))},c.onerror=()=>{console.error("Request failed"),a(new Error("Network error occurred"))},c.send(null)}):Promise.reject(new Error("fetchProps is required")),[]),{data:n,isLoading:r,error:i,execute:d}=we({fetchFn:s,clearDataOnLoad:!0});return{data:n,isLoading:r,error:i,execute:d,progress:t}},Qr=()=>{const[t,o]=x.useState(0),s=x.useCallback(l=>l?new Promise((u,a)=>{console.log(l.fullName);const c=new XMLHttpRequest;c.open("GET",l.url,!0),c.responseType="arraybuffer",c.overrideMimeType("text/plain; charset=x-user-defined"),c.onprogress=function(h){if(h.lengthComputable){const g=h.loaded/h.total*100;o(g)}},c.onload=()=>{var h,g;if(c.status>=200&&c.status<300){const b=c.getResponseHeader("Content-Disposition"),j=(g=(h=b==null?void 0:b.split(";").pop())==null?void 0:h.split("=").pop())==null?void 0:g.replace(/"/g,""),p=decodeURIComponent(l.url.pathname.split("/").pop()??"unknown_external.sav"),S=new File([c.response],l.fullName??j??p);u(S)}else a(new Error(`Received unexpected status code: ${c.status}`))},c.onerror=()=>{console.error("Request failed"),a(new Error("Network error occurred"))},c.send(null)}):Promise.reject(new Error("fetchProps is required")),[]),{data:n,isLoading:r,error:i,execute:d}=we({fetchFn:s,clearDataOnLoad:!0});return{data:n,isLoading:r,error:i,execute:d,progress:t}},yt=({gameData:t,checksum1000String:o,selectedSave:s,setSelectedSave:n,saveName:r})=>{var u;const{emulator:i}=E(),d=a=>{n(a)},l=((u=i==null?void 0:i.listSaves)==null?void 0:u.call(i).filter(a=>a.includes(t.cartID+"_"+o)))||[];return x.useEffect(()=>{for(const a of l)r===a&&n(a)},[]),e.jsx(e.Fragment,{children:e.jsx(st,{children:e.jsxs(ot,{children:[e.jsx(Nt,{children:e.jsxs(U,{children:[e.jsx(I,{children:"Select"}),e.jsx(I,{children:"Save"}),e.jsx(I,{children:"Last Saved"})]})}),e.jsxs(nt,{children:[e.jsxs(U,{children:[e.jsx(I,{children:e.jsx(ye,{checked:s==="Cartridge Save",onChange:()=>d("Cartridge Save")})}),e.jsx(I,{children:"Cartridge Save"}),e.jsx(I,{children:"-"})]},"cartridge-save"),l.length>0?l.map((a,c)=>{var h;return e.jsxs(U,{sx:{borderBottom:c===l.length-1?"none":void 0},children:[e.jsx(I,{sx:{borderBottom:c===l.length-1?"none":void 0},children:e.jsx(ye,{checked:s===a,onChange:()=>d(a)})}),e.jsx(I,{sx:{borderBottom:c===l.length-1?"none":void 0},children:a}),e.jsx(I,{sx:{borderBottom:c===l.length-1?"none":void 0},children:(h=i==null?void 0:i.getStatSaves)==null?void 0:h.call(i,a).mtime.toLocaleString()})]},c)}):e.jsx(U,{children:e.jsx(I,{colSpan:3,children:"None"})})]})]})})})},Ye=({gameData:t,checksum1000String:o,selectedGame:s,setSelectedGame:n,romName:r})=>{var u,a;const{emulator:i}=E(),d=c=>{n(c)};let l;return t==null?l=((u=i==null?void 0:i.listRoms)==null?void 0:u.call(i).filter(c=>c!=="."&&c!==".."))||[]:l=((a=i==null?void 0:i.listRoms)==null?void 0:a.call(i).filter(c=>c.includes(t.cartID+"_"+o)))||[],x.useEffect(()=>{for(const c of l)r===c&&n(c)},[]),e.jsx(e.Fragment,{children:e.jsx(st,{children:e.jsxs(ot,{children:[e.jsx(Nt,{children:e.jsxs(U,{children:[e.jsx(I,{children:"Select"}),e.jsx(I,{children:"Rom File"}),e.jsx(I,{children:"Created"})]})}),e.jsxs(nt,{children:[e.jsxs(U,{children:[e.jsx(I,{children:e.jsx(ye,{checked:s==="Cartridge Rom",onChange:()=>d("Cartridge Rom")})}),e.jsx(I,{children:"Cartridge Rom"}),e.jsx(I,{children:"-"})]},"cartridge-game"),l.length>0?l.map((c,h)=>{var g;return e.jsxs(U,{sx:{borderBottom:h===l.length-1?"none":void 0},children:[e.jsx(I,{sx:{borderBottom:h===l.length-1?"none":void 0},children:e.jsx(ye,{checked:s===c,onChange:()=>d(c)})}),e.jsx(I,{sx:{borderBottom:h===l.length-1?"none":void 0},children:c}),e.jsx(I,{sx:{borderBottom:h===l.length-1?"none":void 0},children:(g=i==null?void 0:i.getStatRoms)==null?void 0:g.call(i,c).mtime.toLocaleString()})]},h)}):e.jsx(U,{children:e.jsx(I,{colSpan:3,children:"None"})})]})]})})})},Yr=f.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100dvw;
  max-width: fill-available;
  max-width: stretch;
  max-width: -webkit-fill-available;
  max-width: -moz-available;
`,ve=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 15px;
`,Pe=f.img`
  max-width: 75%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 12px;
  border: 1px solid black;
`,Zr=f.div`
display: flex;
gap: 10px;
width: 100%;
flex-direction: column;
`,wt=f.p`
  word-wrap: break-word;
  max-width: 100%;
`,Jr=f.div`
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
`,ea=({isLoading:t,isExternalRomLoading:o,children:s,indicator:n,progress:r})=>t?e.jsxs(ve,{children:[o&&e.jsx(wt,{children:"Dumping Rom from cartridge..."}),!o&&e.jsx(wt,{children:"Dumping Save from cartridge..."}),n,e.jsx(Jr,{progress:r,children:e.jsxs("span",{style:{position:"relative",width:"100%",textAlign:"center",zIndex:600},children:[Math.round(r),"%"]})})]}):s,Ct=({additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i,setIsSideMenuExpanded:d})=>{const l=_(),{setIsModalOpen:u}=q(),{emulator:a}=E(),{data:c,isLoading:h,error:g,execute:b,progress:j}=Xr(),{data:p,execute:S}=Qr(),k=xt(),[R,$]=x.useState(!1),[v,y]=x.useState(!1),[m,w]=x.useState(!1),C=!h&&!!c,[L,P]=x.useState(null),[T,Y]=x.useState("Cartridge Save"),[Z,J]=x.useState("Cartridge Rom"),ee=ne(l.isLargerThanPhone),ae=F=>{const{name:O,value:z}=F.target;o(le=>({...le,[O]:z}))};x.useEffect(()=>{if(C){const F=()=>{k((a==null?void 0:a.filePaths().gamePath)+"/"+c.name)&&(u(!1),ee||d(!1))};a==null||a.uploadRom(c,F)}},[C,c,a,u,k]);const te=async()=>{try{w(!1),$(!0);const[F,O,z,le]=await an([r]);w(!le),n(F),o(O),P(z),$(!1)}catch(F){console.error("Error fetching game info:",F)}};x.useEffect(()=>{p!=null&&(a==null||a.uploadSaveOrSaveState(p))},[p,a]),x.useEffect(()=>{R||te()},[]),x.useEffect(()=>{if(m&&!R){const F=setInterval(()=>{m&&!R&&te()},5e3);return()=>clearInterval(F)}},[m]);const H=()=>s.is_gba?t&&t.fullName?t.fullName+"_"+s.cartID+"_"+L:s.romName+"_"+s.cartID+"_"+L:t&&t.fullName?t.fullName+"_"+s.romName+"_"+s.checksumStr:s.romName+"_"+s.checksumStr,ie=async()=>{y(!0),console.log("Using save: "+T),console.log("Using save: "+T);let F=H()+".sav";T=="Cartridge Save"&&(s.is_gba?await $e(t.saveType,F):s.sramSize&&await N(F)),await rn(300),console.log("save loaded"),await ke(),y(!1)},he=async F=>{var z;let O=(z=a==null?void 0:a.listRoms)==null?void 0:z.call(a);return console.log(O),O&&O.includes(F)?(console.log("rom exists locally"),k((a==null?void 0:a.filePaths().gamePath)+"/"+F),u(!1),y(!1),ee||d(!1),!0):!1},ke=async()=>{if(y(!0),Z!="Cartridge Rom")await he(Z)||console.log("Unable to load local rom");else if(s.is_gba){let F=H()+".gba",O=t.cartSize,z=`${r}/get_current_game.gba?cartSize=${O}&saveType=4`;await b({url:new URL(z),fullName:F,patchFile:t.patchFile})}else{let F=H()+".gb",O=`${r}/get_current_game.gb`;await b({url:new URL(O),fullName:F,patchFile:null})}y(!1)},$e=async(F,O)=>{try{console.log(F);var z=ht(F);if(z==-1){console.log("Invalid Save Type");return}console.log(z);var le=`${r}/get_current_save?saveType=${z}`;await S({url:new URL(le),fullName:O})}catch(Re){console.error("Error fetching save:",Re)}finally{}},N=async F=>{try{var O=`${r}/get_current_save`;await S({url:new URL(O),fullName:F})}catch(z){console.error("Error fetching save:",z)}finally{}},V=({title:F})=>{const[O,z]=x.useState("");return x.useEffect(()=>{const le=setInterval(()=>{z(Re=>Re==="..."?"":Re+".")},500);return()=>clearInterval(le)},[]),e.jsx(W,{title:`${F}${O}`})};return e.jsxs(e.Fragment,{children:[m?e.jsx(W,{title:"Connection to cartridge reader failed!"}):e.jsx(e.Fragment,{children:s&&t&&t.fullName?e.jsx(W,{title:t.fullName}):s&&(!t||!t.fullName)?e.jsx(W,{title:s.romName==""||s.romName=="Error"?"Error Reading Cartridge":s.romName}):!s&&t&&t.fullName?e.jsx(W,{title:t.fullName}):e.jsx(V,{title:"Connecting to cartridge reader"})}),e.jsx(X,{children:e.jsxs(ea,{isLoading:v,isExternalRomLoading:h,indicator:e.jsx(Je,{color:l.gbaThemeBlue,cssOverride:{margin:"0 auto"}}),progress:j,children:[!!g&&e.jsx(Se,{icon:e.jsx(ge,{style:{color:l.errorRed}}),text:"Loading rom from URL has failed"}),e.jsxs(e.Fragment,{children:[s&&e.jsxs(e.Fragment,{children:[t&&t.fullName?e.jsx(ve,{children:e.jsx(Pe,{id:"cover-image",src:ln(s,t),alt:`${t.fullName} Cover`})}):e.jsx(ve,{children:e.jsx(Pe,{id:"cover-image",src:"./img/connect.jpeg",alt:"Cover missing Image"})}),e.jsx(st,{id:"game-info",children:e.jsx(ot,{children:e.jsxs(nt,{children:[t&&t.fullName&&e.jsxs(U,{children:[e.jsx(I,{children:"Full Name:"}),e.jsx(I,{children:t.fullName})]}),e.jsxs(U,{children:[e.jsx(I,{children:"ROM Name:"}),e.jsx(I,{children:s.romName})]}),e.jsxs(U,{children:[e.jsx(I,{children:"Cart Size:"}),e.jsx(I,{children:e.jsxs(Qe,{name:"cartSize",value:t.cartSize,onChange:ae,children:[e.jsxs(Te,{value:t.cartSize,children:[(t.cartSize/1024/1024).toFixed(2),"MB"]},(t.cartSize/1024/1024).toFixed(2)),[1,2,4,8,16,32,64].map(F=>e.jsxs(Te,{value:F*1024*1024,children:[F,"MB"]},F))]})})]}),s&&s.is_gba&&e.jsxs(U,{children:[e.jsx(I,{children:"Save Type:"}),e.jsx(I,{children:e.jsx(Qe,{name:"saveType",value:t?t.saveType:"REPRO_FLASH1M",onChange:ae,children:Vt.map(F=>e.jsx(Te,{value:F,children:F},F))})})]}),t&&t.patchFile!=null&&t.patchFile.length>0&&e.jsxs(U,{children:[e.jsx(I,{children:"BPS Patch File:"}),e.jsx(I,{children:t.patchFile})]}),s&&s.is_gba&&e.jsxs(U,{children:[e.jsx(I,{children:"Cart ID:"}),e.jsx(I,{children:s.cartID})]}),e.jsxs(U,{children:[e.jsx(I,{children:"ROM Version:"}),e.jsx(I,{children:s.romVersion})]}),s&&s.is_gba&&e.jsxs(U,{children:[e.jsx(I,{children:"Checksum:"}),e.jsxs(I,{children:["0x",L]})]}),s&&!s.is_gba&&e.jsxs(U,{children:[e.jsx(I,{children:"Checksum:"}),e.jsxs(I,{children:["0x",s.checksum_gb]})]}),s&&!s.is_gba&&e.jsxs(U,{children:[e.jsx(I,{children:"Global Checksum:"}),e.jsxs(I,{children:["0x",s.checksumStr]})]}),t&&t.publisher&&t.releaseDate&&e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(I,{children:"Publisher:"}),e.jsx(I,{children:t.publisher})]}),e.jsxs(U,{children:[e.jsx(I,{style:{border:"none"},children:"Release Date:"}),e.jsx(I,{style:{border:"none"},children:t.releaseDate})]})]})]})})}),a&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Local Saves"}),s&&s.is_gba&&e.jsx(yt,{gameData:s,checksum1000String:L,selectedSave:T,setSelectedSave:Y,saveName:H()+".sav"}),s&&!s.is_gba&&e.jsx(yt,{gameData:s,checksum1000String:s.checksum_gb,selectedSave:T,setSelectedSave:Y,saveName:H()+".sav"}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Local Roms"}),s&&s.is_gba&&e.jsx(Ye,{gameData:s,checksum1000String:L,selectedGame:Z,setSelectedGame:J,romName:H()+".gba"}),s&&!s.is_gba&&e.jsx(Ye,{gameData:s,checksum1000String:s.checksum_gb,selectedGame:Z,setSelectedGame:J,romName:H()+".gb"})]}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Cart Reader"})]}),!s&&!t&&e.jsx(ve,{children:e.jsx(Pe,{src:"./img/connect.jpeg",alt:"waiting for cartridge reader response illustration"})}),s&&!t&&(s.romName==""||s.romName=="Error")&&e.jsx(ve,{children:e.jsx(Pe,{src:"./img/error_cart.jpeg",alt:"can not correctly read cartridge illustration"})})]}),e.jsxs(Yr,{"aria-label":"Login Form",children:[e.jsx(oe,{label:"ESP32 IP Address",autoComplete:"esp32IPInputField",variant:"filled",style:{padding:"3px 8px 3px 8px",fontSize:"14px",marginLeft:"5px"},defaultValue:r,onChange:F=>{i(F.target.value)}}),e.jsxs(M,{variant:"outlined",style:{padding:"3px 8px 3px 8px",fontSize:"14px",marginLeft:"8px"},onClick:()=>{te()},children:[e.jsx(Is,{style:{fontSize:"18px"}})," ","Refresh"]})]})]})}),e.jsx(Q,{children:!v&&e.jsxs(Zr,{children:[s&&e.jsxs(M,{variant:"contained",color:"primary",style:{padding:"10px 20px 10px 10px",fontSize:"16px",display:"flex",alignItems:"center",gap:"5px"},onClick:()=>ie(),children:[e.jsx(Ps,{style:{fontSize:"30px",marginRight:"10px"}})," ","Start Game"]}),e.jsx(M,{variant:"outlined",style:{padding:"10px 20px 10px 20px",fontSize:"16px",display:"flex",alignItems:"center",gap:"5px"},onClick:()=>u(!1),children:"Close"})]})})]})},ta=()=>{const{setIsModalOpen:t}=q(),{emulator:o}=E(),s=[{label:"Full Name",value:"fullName",setter:"setFullName"},{label:"Cover Image",value:"coverImage",setter:"setCoverImage"},{label:"Publisher",value:"publisher",setter:"setPublisher"},{label:"Release Date",value:"releaseDate",setter:"setReleaseDate"},{label:"CRC",value:"crc",setter:"setCrc"},{label:"Cart Size (Bytes)",value:"cartSize",setter:"setCartSize"},{label:"Save Type",value:"saveType",setter:"setSaveType"},{label:"Checksum 1000",value:"checksum1000",setter:"setChecksum1000"},{label:"Cart ID",value:"cartId",setter:"setCartId"},{label:"Patch File",value:"patchFile",setter:"setPatchFile"},{label:"Console",value:"console",setter:"setConsole"}],[n,r]=x.useState({fullName:"",coverImage:"",publisher:"",releaseDate:"",crc:"",cartSize:"",saveType:"",checksum1000:"",cartId:"",patchFile:"",console:".gba"}),[i,d]=x.useState(""),[l,u]=x.useState(""),[a,c]=x.useState(new Uint8Array);x.useEffect(()=>{i&&k(i)},[i]);const h=$=>{const v=$.target.files[0];if(v){u(v.name);let y=j(v.name).fileName;r(w=>({...w,fullName:y})),r(w=>({...w,patchFile:y+".bps"}));const m=new FileReader;m.onload=w=>{if(w.target&&w.target.result){let C=w.target.result;typeof C=="string"&&(C=new TextEncoder().encode(C)),c(new Uint8Array(C))}},m.readAsArrayBuffer(v)}},g=($,v)=>{r(y=>({...y,[v]:$.target.value}))},b=x.useId();function j($){const v=$.match(/\.(gb|gbc|gba)$/i);return v?{fileName:$.replace(/\.(gb|gbc|gba)$/i,""),removedExtension:v[0]}:{fileName:$,removedExtension:"gba"}}const p=async $=>{let y=await(await fetch(`./information_rom/${$}.json`)).json();r(m=>({...m,coverImage:y.coverImage})),r(m=>({...m,publisher:y.publisher})),r(m=>({...m,releaseDate:y.releaseDate})),r(m=>({...m,saveType:y.saveType}))},S=()=>{const $={fullName:n.fullName,coverImage:n.coverImage,publisher:n.publisher,releaseDate:n.releaseDate,crc:n.crc,cartSize:n.cartSize,saveType:n.saveType,checksum1000:n.checksum1000,patchFile:"./patches/"+n.patchFile,console:n.console},v=JSON.stringify($,null,2),y=new Blob([v],{type:"application/json"}),m=document.createElement("a");m.href=URL.createObjectURL(y),m.download=n.checksum1000+"-"+n.cartId+".json",document.body.appendChild(m),m.click(),URL.revokeObjectURL(m.href),document.body.removeChild(m)},k=$=>{const v=$.split("/").pop();if(v){r(P=>({...P,console:j(v).removedExtension})),r(P=>{var T;return{...P,cartSize:(T=o==null?void 0:o.getStatRoms)==null?void 0:T.call(o,$).size}});const y=/_([A-Z0-9]{1,4})_([A-Z0-9]{1,8})\./,m=v.match(y);if(!m){console.log("No match found");return}const w=m[1],C=m[2];console.log("CartID:",w),console.log("Checksum1000:",C),r(P=>({...P,checksum1000:C})),r(P=>({...P,cartId:w}));const L=o==null?void 0:o.getFile("/data/games/"+$);if(L){let P=(Ts.buf(L)>>>0).toString(16).toUpperCase();r(T=>({...T,crc:P}))}p(w)}},R=()=>{const $=o==null?void 0:o.getFile("/data/games/"+i),v=a;if($&&v){const y=Ms($,v),{buffer:m,checksum:w}=Ns(y);console.log("Patch Checksum: "+w);const C=new Blob([m],{type:"application/octet-stream"}),L=document.createElement("a");L.href=URL.createObjectURL(C),L.download=n.patchFile,document.body.appendChild(L),L.click(),URL.revokeObjectURL(L.href),document.body.removeChild(L),S()}};return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"File System"}),e.jsxs(X,{children:[e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Base Rom"}),e.jsx(Ye,{gameData:null,checksum1000String:null,selectedGame:i,setSelectedGame:d,romName:".gba"}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Patched Rom"}),e.jsx("input",{type:"file",onChange:h,accept:".gba"}),l&&e.jsxs("p",{children:["Selected File: ",l]}),e.jsx(xe,{sx:{padding:"10px 0",color:"darkgrey"},children:"Information"}),s.map($=>$.value!="saveType"?e.jsx(oe,{label:$.label,variant:"filled",style:{padding:"3px 8px 3px 8px",fontSize:"14px",marginLeft:"5px",width:"98%"},value:n[$.value],onChange:v=>g(v,$.value)},$.value):null),e.jsx(bo,{sx:{minWidth:120},children:e.jsxs(jo,{fullWidth:!0,style:{padding:"3px 8px 3px 8px",marginLeft:"5px",width:"98%",marginTop:"5px"},children:[e.jsx(So,{id:"demo-simple-select-label",children:"Save Type"}),e.jsx(Qe,{name:"saveType",value:n.saveType,onChange:$=>g($,"saveType"),label:"Save Type",style:{fontSize:"14px"},children:Vt.map($=>e.jsx(Te,{value:$,children:$},$))})]})})]}),e.jsxs(Q,{children:[e.jsx(Ce,{copy:"Create Patch File",id:`${b}--create-patch-button-button`,onClick:()=>R()}),e.jsx(M,{variant:"outlined",onClick:()=>t(!1),children:"Close"})]})]})},sa=f.div`
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
`,oa=f.h2`
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
`,na=f.ul`
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
`,ra=f(je)`
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
`,aa=f.button`
  position: absolute;
  width: calc(100dvw - ${de}px);
  left: ${de}px;
  height: 99%;
  background: 0 0;
  z-index: 140;
  border: none;
`,ia=({additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i})=>{const[d,l]=x.useState(!0),{setModalContent:u,setIsModalOpen:a}=q(),{canvas:c,emulator:h}=E(),{isRunning:g}=re(),b=_(),j=ne(b.isLargerThanPhone),p=x.useId(),S=Kt(),[k,R]=x.useState(null);x.useEffect(()=>{const v=y=>{console.log(67547),y.preventDefault(),R(y),console.log(y)};return window.addEventListener("beforeinstallprompt",v),()=>{window.removeEventListener("beforeinstallprompt",v)}},[]);const $=()=>{k&&(k.prompt(),k.userChoice.then(v=>{v.outcome==="accepted"?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),R(null)}))};return x.useEffect(()=>{const y=new URLSearchParams(window.location.search).get("esp32_ip");y&&i("https://"+y);const m=setTimeout(()=>{u(e.jsx(Ct,{additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i,setIsSideMenuExpanded:l})),a(!0)},500);return window.additionalData=t,window.gameData=s,window.esp32IP=r,()=>clearTimeout(m)},[t,s,r]),On(),e.jsxs(e.Fragment,{children:[e.jsx(ra,{id:"menu-btn",$isExpanded:d,onClick:()=>l(v=>!v),"aria-label":"Menu Toggle",children:e.jsx(Bs,{style:{height:"1.8em",width:"1.8em",verticalAlign:"middle"}})}),e.jsxs(sa,{"data-testid":"menu-wrapper",id:"menu-wrapper",$isExpanded:d,children:[e.jsx(oa,{id:p,children:"WifiBOY"}),e.jsxs(na,{"aria-labelledby":p,children:[e.jsx(A,{title:"My Cartridge",icon:e.jsx(Ae,{}),$withPadding:!0,onClick:()=>{u(e.jsx(Ct,{additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:r,setEsp32IP:i,setIsSideMenuExpanded:l})),a(!0)}}),e.jsxs(De,{title:"Cartridge Actions",$isExpanded:!0,icon:e.jsx(Es,{}),children:[e.jsx(A,{title:"Save to Cartridge",$disabled:!g,icon:e.jsx(Us,{}),onClick:()=>{pt(t,h,r)}}),e.jsx(A,{title:"Verify Cartridge Save",$disabled:!g,icon:e.jsx(Os,{}),onClick:()=>{let v=h==null?void 0:h.getCurrentSave();const y=h==null?void 0:h.getCurrentSaveName();if(v&&y){v.length>131072&&(v=v.slice(0,131072));const w=new XMLHttpRequest;if(!t){console.log("No save type information.");return}var m=ht(t.saveType);if(m==-1){console.log("Invalid Save Type");return}const C=new Promise((L,P)=>{w.open("POST",`${r}/verify_save_file?saveType=${m}`,!0),w.upload.onprogress=function(T){if(T.lengthComputable){const Y=67+T.loaded/T.total*33;console.log(Y+"( "+T.loaded+" )")}else console.log("event.lengthComputable is false")},w.onload=()=>{w.status>=200&&w.status<300?L("Verified save on cartridge"):P("Save on cartridge is not the same.")},w.onerror=()=>P("Failed to upload save"),w.send(v)});G.promise(C,{loading:"Verifying save on cartridge...",success:L=>`${L}`,error:L=>`${L}`})}else G.error("Current save not available")}}),e.jsx(A,{title:"Reflash Cartridge Rom",icon:e.jsx(zs,{}),onClick:()=>{u(e.jsx(Gr,{esp32IP:r})),a(!0)}})]}),e.jsxs(De,{title:"In Game Actions",$disabled:!g,$isExpanded:g,icon:e.jsx(_s,{}),children:[e.jsx(A,{title:"Screenshot",$disabled:!g,icon:e.jsx(As,{}),onClick:()=>{h!=null&&h.screenshot()?G.success("Screenshot saved successfully"):G.error("Screenshot has failed")}}),e.jsx(A,{title:"Full Screen",$disabled:!g,icon:e.jsx(qs,{}),onClick:()=>{c==null||c.requestFullscreen().catch(()=>{G.error("Full screen request has failed")})}}),e.jsx(A,{title:"Download Save",$disabled:!g,icon:e.jsx(Tt,{}),onClick:()=>{u(e.jsx(gr,{})),a(!0)}}),e.jsx(A,{title:"Quick Reload",$disabled:!g,icon:e.jsx(Ws,{}),onClick:S}),e.jsx(A,{title:"Manage Save States",$disabled:!g,icon:e.jsx(Hs,{}),onClick:()=>{u(e.jsx(Pr,{})),a(!0)}}),e.jsx(A,{title:"Manage Cheats",$disabled:!g,icon:e.jsx(Pt,{}),onClick:()=>{u(e.jsx(Yn,{})),a(!0)}})]}),e.jsx(A,{title:"Controls",icon:e.jsx(Ae,{}),$withPadding:!0,onClick:()=>{u(e.jsx(xr,{})),a(!0)}}),e.jsx(A,{title:"File System",icon:e.jsx(Vs,{}),$withPadding:!0,onClick:()=>{u(e.jsx($r,{})),a(!0)}}),e.jsxs(De,{title:"Other",icon:e.jsx(Ds,{}),children:[e.jsx(A,{title:"Create Patch File",icon:e.jsx(Ae,{}),$withPadding:!0,onClick:()=>{u(e.jsx(ta,{})),a(!0)}}),e.jsx(A,{title:"About",icon:e.jsx(Ks,{}),$withPadding:!0,onClick:()=>{u(e.jsx(zn,{})),a(!0)}})]}),k&&e.jsx(A,{title:"Install App",icon:e.jsx(Gs,{}),$withPadding:!0,onClick:$})]}),e.jsx(Xs,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"15px"}}),e.jsx(Qs,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"45px"}}),e.jsx(Ys,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"75px"}}),e.jsx(Zs,{style:{color:"white",bottom:"15px",position:"absolute",fontSize:"24px",right:"105px"}})]}),d&&!j&&e.jsx(aa,{"aria-label":"Menu Dismiss",onClick:()=>{l(!1)}})]})};f.ul`
  text-align: left;
`;const la=()=>!0,ca=()=>{const[t]=B(ze),{shouldShowPublicRomModal:o}=Zt();return!(t!=null&&t.hasCompletedProductTourIntro)||o?null:e.jsx(Js,{})},da=240,ua=160,ha=f.canvas`
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
`,pa=f(Rt)`
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
`,xa={width:"",height:""},ga=()=>{var j,p;const t=_(),o=ne(t.isLargerThanPhone),{setCanvas:s}=E(),{areItemsDraggable:n}=Oe(),{areItemsResizable:r}=_t(),{layouts:i,setLayout:d,hasSetLayout:l}=ue(),u=o?de+10:0,a=o?15:0,c=x.useCallback(S=>{var k,R,$,v,y,m,w,C;l||(($=(R=(k=S==null?void 0:S.resizableElement)==null?void 0:k.current)==null?void 0:R.style)==null||$.removeProperty("width"),(m=(y=(v=S==null?void 0:S.resizableElement)==null?void 0:v.current)==null?void 0:y.style)==null||m.removeProperty("height")),!((w=i==null?void 0:i.screen)!=null&&w.initialBounds)&&S&&d("screen",{initialBounds:(C=S.resizableElement.current)==null?void 0:C.getBoundingClientRect()})},[l,i,d]),h=x.useCallback(S=>s(S),[s]),g=((j=i==null?void 0:i.screen)==null?void 0:j.position)??{x:u,y:a},b=((p=i==null?void 0:i.screen)==null?void 0:p.size)??xa;return e.jsx(pa,{"data-testid":"screen-wrapper",disableDragging:!n,ref:c,enableResizing:r,resizeHandleComponent:{topRight:e.jsx(pe,{variation:"topRight"}),bottomRight:e.jsx(pe,{variation:"bottomRight"}),bottomLeft:e.jsx(pe,{variation:"bottomLeft"}),topLeft:e.jsx(pe,{variation:"topLeft"})},resizeHandleStyles:{topRight:{marginTop:"15px",marginRight:"15px"},bottomRight:{marginBottom:"15px",marginRight:"15px"},bottomLeft:{marginBottom:"15px",marginLeft:"15px"},topLeft:{marginTop:"15px",marginLeft:"15px"}},position:g,size:b,onDragStop:(S,k)=>{d("screen",{position:{x:k.x,y:k.y}})},onResizeStop:(S,k,R,$,v)=>{d("screen",{size:{width:R.clientWidth,height:R.clientHeight},position:{...v}})},children:e.jsx(ha,{"data-testid":"screen-wrapper:render-canvas",ref:h,width:da,height:ua})})},ma=f.div`
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
`,fa=f.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100dvw;
  height: 100dvh;
  position: absolute;
`,ba=f(Xt)`
  justify-content: center;
`,ja=f(Qt)`
  padding: 1em 1em 0 1em;
`,Sa=f.img`
  object-fit: contain;
  max-width: 100%;
`,va=f(Yt)`
  justify-content: center;
  flex-wrap: wrap;
`,ya=f.div`
  position: relative;
`,wa=f.a`
  font-size: 5px;
  position: absolute;
  right: 15%;
  bottom: 6%;
`,kt=()=>e.jsx("span",{children:"→"}),Ca=({error:t,resetErrorBoundary:o})=>e.jsx(fa,{children:e.jsxs(ma,{role:"alert",children:[e.jsx(ba,{children:e.jsx(Gt,{children:"An irrecoverable error occurred"})}),e.jsxs(ja,{children:[e.jsxs(ya,{children:[e.jsx(Sa,{src:"/img/error-512x512.png",alt:"GameBoy Advance with error icon"}),e.jsx(wa,{target:"_blank",href:"https://www.freepik.com/free-vector/editable-text-effect-error-3d-hack-virus-font-style_21408324.htm",children:"Font by NACreative"})]}),e.jsx("p",{style:{color:"red"},children:t.message}),e.jsx("p",{children:"Please use the buttons below to copy the stack trace and create an issue, this helps a lot with error reporting!"})]}),e.jsxs(va,{children:[e.jsx(M,{color:"info",variant:"contained",onClick:()=>{navigator.clipboard.writeText(t.stack??"No stack available")},children:"Copy trace"}),e.jsx(kt,{}),e.jsx(M,{color:"success",variant:"contained",href:"https://github.com/thenick775/gbajs3/issues",target:"_blank",children:"Create issue"}),e.jsx(kt,{}),e.jsx(M,{color:"secondary",variant:"contained",onClick:o,children:"Dismiss and reset"})]})]})}),ka=({children:t})=>e.jsx(eo,{fallbackRender:Ca,children:t}),$a=()=>{const t=_();return e.jsx(to,{toastOptions:{success:{duration:1e3},error:{duration:1500},style:{background:t.darkCharcoal,color:t.pureWhite}}})},Ra=({children:t})=>e.jsx(Ro,{children:e.jsx(Lo,{children:e.jsx(wo,{children:e.jsx(Fo,{children:t})})})}),Fa={isLargerThanPhone:"only screen and (min-width: 600px)",isMobileLandscape:"only screen and (max-height: 1000px) and (max-width: 1000px) and (orientation: landscape)",isMobilePortrait:"only screen and (max-width: 1000px) and (orientation: portrait)",isMobileWithUrlBar:"only screen and (max-height: 700px) and (orientation: portrait)",aliceBlue1:"#f8f9fa",aliceBlue2:"#edf2f7",arcticAirBlue:"#cad8e5",blackRussian:"#1a202c",blueCharcoal:"rgb(15 23 42)",checkMarkGreen:"#7ac142",darkCharcoal:"#333",darkGrayBlue:"#495057",disabledGray:"#6c757d",errorRed:"#d32f2f",gbaThemeBlue:"#0d6efd",mediumBlack:"rgb(2 6 23)",menuHighlight:"#ffffff26",menuHover:"#0a58ca",pattensBlue:"#dee2e6",pureBlack:"#000",pureWhite:"#fff",darkGray:"#111",panelControlGray:"#a9a9a9",panelBlueGray:"rgb(30 41 59)",borderBlue:"rgb(15 23 42)"},La=()=>{const[t,o]=x.useState(null),[s,n]=x.useState(null),r="https://192.168.1.3",[i,d]=x.useState(r);return e.jsx(so,{theme:Fa,children:e.jsxs(ka,{children:[e.jsx(la,{}),e.jsx($a,{}),e.jsx(yo,{children:e.jsx(Ra,{children:e.jsx(To,{children:e.jsxs(Mo,{children:[e.jsx(ca,{}),e.jsx(ia,{additionalData:t,setAdditionalData:o,gameData:s,setGameData:n,esp32IP:i,setEsp32IP:d}),e.jsx(ga,{}),e.jsx(Ko,{}),e.jsx(hn,{additionalData:t,esp32IP:i}),e.jsx(xn,{})]})})})})]})})};oo.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode,{children:e.jsx(La,{})}));
