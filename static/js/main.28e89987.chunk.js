(this["webpackJsonpsumms-linker-redux"]=this["webpackJsonpsumms-linker-redux"]||[]).push([[0],{79:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a.n(r),i=a(10),s=a.n(i),l=(a(79),a(41)),o=(a(80),a(67)),u=a(121),j=a(115),h=a(122),d=a(123),p=a(130),b=a(113),m=a(22),O=a(117),x=a(131),f=a(126),g=a(132),k=a(119),y=a(129),C=a(120),v=Object(b.a)((function(){return{buttonContainer:{display:"grid"},buttonSpacing:{marginTop:"10px"},headerSpacing:{marginTop:"25px",marginBottom:"25px",paddingLeft:"20px",textAlign:"left"},buttonAlignment:{marginTop:"10px",alignItems:"flex-start",display:"flex",paddingLeft:"0px"}}})),T=function(e){var t=e.clearAll,a=e.undoClear,r=e.linkText,c=e.options,i=e.setOptions,s=v();return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(o.a,{variant:"h4",className:s.headerSpacing,children:"Options"}),Object(n.jsxs)(j.a,{className:s.buttonContainer,children:[Object(n.jsxs)(O.a,{className:s.formControl,children:[Object(n.jsx)(x.a,{children:"Summary Type"}),Object(n.jsxs)(f.a,{value:c.summaryType,onChange:function(e){return i(Object(m.a)(Object(m.a)({},c),{},{summaryType:e.target.value}))},children:[Object(n.jsx)(g.a,{value:"Standard",children:"Standard summary"}),Object(n.jsx)(g.a,{value:"Industry",children:"Industry summary"}),Object(n.jsx)(g.a,{value:"Coles",children:"Coles style summary"})]})]}),Object(n.jsx)(k.a,{control:Object(n.jsx)(y.a,{onChange:function(){return i(Object(m.a)(Object(m.a)({},c),{},{boldCheck:!c.boldCheck}))},color:"primary"}),label:"Bold"}),Object(n.jsx)(k.a,{control:Object(n.jsx)(y.a,{onChange:function(){return i(Object(m.a)(Object(m.a)({},c),{},{boldCheck:!c.italicCheck}))},color:"primary"}),label:"Italic"}),Object(n.jsx)(k.a,{control:Object(n.jsx)(y.a,{onChange:function(){return i(Object(m.a)(Object(m.a)({},c),{},{boldCheck:!c.linkTheCheck}))},color:"primary"}),label:"Link 'The'"}),Object(n.jsx)(j.a,{className:s.buttonAlignment,children:Object(n.jsx)(C.a,{variant:"contained",onClick:r,children:"Link"})}),Object(n.jsx)(j.a,{className:s.buttonAlignment,children:Object(n.jsx)(C.a,{variant:"contained",onClick:t,children:"Clear"})}),Object(n.jsx)(j.a,{className:s.buttonAlignment,children:Object(n.jsx)(C.a,{variant:"contained",onClick:a,children:"Undo"})})]})]})},N=a(118),S=function(e){var t=e.handleChange,a=e.textInput;return Object(n.jsxs)("div",{children:[Object(n.jsx)(o.a,{variant:"h4",children:"Text and Links"}),Object(n.jsx)(N.a,{rows:"25",cols:"60",value:a,onChange:function(e){return t(e.target.value)}})]})},w=a(127),I=Object(b.a)((function(){return{outputContainer:{display:"inline-block",textAlign:"left",wordWrap:"break-word",maxWidth:"1500px"}}})),A=function(e){var t=e.outputData;console.log(t);var a=I();return t?Object(n.jsxs)(j.a,{className:a.outputContainer,children:[Object(n.jsx)(o.a,{variant:"h4",children:"Linked text"}),t.map((function(e,t){return Object(n.jsx)(w.a,{whiteSpace:"normal",children:e.map((function(e){return e}))},t)}))]}):Object(n.jsx)("div",{})},L=240,W=Object(b.a)((function(e){return{root:{display:"flex",textAlign:"center",maxWidth:"1500px"},appBar:{width:"calc(100% - ".concat(L,"px)"),marginLeft:L},drawer:{width:L,flexShrink:0},drawerPaper:{width:L},toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),width:"75vh"},parentGrid:{display:"grid",gridTemplateColumns:"auto 10vh auto",gridTemplateRows:"auto"},linkedOutput:{display:"inline-block",textAlign:"left"}}}));var B=function(){var e=W(),t=Object(r.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],s=Object(r.useState)(null),b=Object(l.a)(s,2),m=b[0],O=b[1],x=Object(r.useState)(null),f=Object(l.a)(x,2),g=f[0],k=f[1],y=Object(r.useState)({summaryType:"Standard",boldCheck:!1,italicCheck:!1,linkTheCheck:!1}),C=Object(l.a)(y,2),v=C[0],N=C[1],w=function(){k(m),O(null)};function I(t,a,r){v.boldCheck?r.push(Object(n.jsx)("b",{children:Object(n.jsx)(u.a,{href:t,className:e.linkedOutput,children:a})})):v.italicCheck?r.push(Object(n.jsx)("i",{children:Object(n.jsx)(u.a,{href:t,className:e.linkedOutput,children:a})})):r.push(Object(n.jsx)(u.a,{href:t,className:e.linkedOutput,children:a.trim()}))}function L(t,a,r){var c;if("Standard"===v.summaryType||""===v.summaryType)c=t.split(/^.*?(?= report)|(?= reports)/)[1],v.platformCheck&&(c=c.trim()),a.push(Object(n.jsxs)(o.a,{className:e.linkedOutput,children:[r," ",c]}));else if("Industry"===v.summaryType||"Coles"===v.summaryType){var i=t.match(/( - )(.*)$/);if(!i)return;c=t.slice(0,i.index+3),v.platformCheck&&"Industry"===v.summaryType&&(c=c.trim()),a.push(Object(n.jsx)(o.a,{className:e.linkedOutput,children:c}))}}return Object(n.jsxs)(j.a,{className:e.root,children:[Object(n.jsx)(h.a,{position:"fixed",className:e.appBar,children:Object(n.jsx)(d.a,{children:Object(n.jsx)(o.a,{variant:"h6",noWrap:!0,children:"Summaries Linker"})})}),Object(n.jsxs)(p.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},anchor:"left",children:[Object(n.jsx)("div",{className:e.toolbar}),Object(n.jsx)(T,{clearAll:w,undoClear:function(){O(g)},linkText:function(){w();var t=c.split("\n").filter((function(e){return e.replace(/\n| /g,"").length>0})),a=t.filter((function(e){return e.startsWith("http")})),r=t.filter((function(e){return!e.startsWith("http")&&e.length>10})),i=[];console.log(a,r);for(var s=0,l=0;s<r.length&&l<a.length;s++){var u=r[s].replace(/\u2013/g,"-"),j=[],h=[];if("Standard"===v.summaryType){if(!v.linkTheCheck&&u.startsWith("The")&&(u=u.slice(4),h.push(Object(n.jsx)(o.a,{className:e.linkedOutput,children:"The\xa0"}))),!u.match(/^.*?(?= report)|(?= reports)/))continue;var d=u.match(/^.*?(?= report)|(?= reports)/)[0],p=d.split(/ and |, /);if(p.length>1)for(var b=d.match(/,(?:[^,])| and /g),m=0;m<p.length;m++,l++)I(h[l],p[m],h),b[m]&&(v.platformCheck&&(b[m]=b[m].trim()),h.push(Object(n.jsx)(o.a,{className:e.linkedOutput,children:b[m]})));else I(h[l],d,h),l++;L(u,j,h),j.push(Object(n.jsx)("br",{})),i.push(j)}else if("Industry"===v.summaryType){if(L(u,j),!u.match(/( - )(.*)$/))continue;I(h[l],u.match(/( - )(.*)$/)[2],j),j.push(Object(n.jsx)("br",{})),i.push(j),l++}else if("Coles"===v.summaryType){if(!u.match(/( - )(.*)$/))continue;var x=u.match(/( - )(.*)$/)[2],f=x.split(/ and |, /);if(L(u,j),f.length>1)for(var g=x.match(/,(?:[^,])| and /g),k=0;k<f.length;k++,l++)I(h[l],f[k],j),g[k]&&(v.platformCheck.checked&&(g[k]=g[k].trim()),j.push(Object(n.jsx)(o.a,{className:e.linkedOutput,children:g[k]})));else I(h[l],x,j),l++;j.push(Object(n.jsx)("br",{})),i.push(j)}}O(i)},options:v,setOptions:N})]}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.toolbar}),Object(n.jsxs)(j.a,{className:e.parentGrid,children:[Object(n.jsx)(S,{handleChange:i,textInput:c}),Object(n.jsx)("div",{}),Object(n.jsx)(A,{outputData:m})]})]})]})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},F=a(64),P=a(124),D=a(125),G=Object(F.a)({palette:{type:"dark"}});s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsxs)(P.a,{theme:G,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)(B,{})]})}),document.getElementById("root")),$()}},[[84,1,2]]]);
//# sourceMappingURL=main.28e89987.chunk.js.map