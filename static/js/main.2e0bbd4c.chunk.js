(this["webpackJsonpetherean-builds"]=this["webpackJsonpetherean-builds"]||[]).push([[0],{106:function(e,t,a){e.exports=a(142)},111:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"default",(function(){return Pe}));var r,i=a(0),c=a.n(i),o=a(9),l=a.n(o),m=(a(111),a(6)),s=a(176),u=a(182),d=a(11),h=a.n(d),g=a(18),p=a(178),b=a(185),E=a(188),f=a(173),y={theme:{siteBackground:"#090909",contentBackground:"#121212",contentBorder:"#707070",scrollBar:"#FFFFFF3D",scrollLane:"#1E1E1E",sectionHeaderBackground:"#272727",sectionBackground:"#2C2C2C",goldPrimary:"#C39445",goldSecondary:"#655233",goldBackground:"#CAA65B",statsFirst:"#FFFFFF",statsSecond:"#208C62",statsThird:"#2090E5",statsFourth:"#654FA7",white:"#FFFFFF",black:"#1E1E1E",grey:"#797979"},aqua:"#00FFF",black:"#000000",blue:"#000FF",gray:"#808080",green:"#00800",magenta:"#FF00FF",purple:"#800080",red:"#FF0000",white:"#FFFFFF",yellow:"#FFFF00"},x=y,v=a(44),O=a.n(v),w="https://localhost:44390/api",k=function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(w,"/builds/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(w,"/myths"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(w,"/items"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),C=function(e){var t=e.data,a=e.setData,n=Object(i.useState)(0),r=Object(m.a)(n,2),o=r[0],l=r[1],d=Object(i.useState)([]),x=Object(m.a)(d,2),v=x[0],O=x[1],w=Object(i.useState)([]),k=Object(m.a)(w,2),j=k[0],C=k[1];Object(i.useEffect)((function(){var e=function(){var e=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C([{name:"Ice",image:"/images/roles/ice.png"},{name:"Jungle",image:"/images/roles/jungle.png"},{name:"Void",image:"/images/roles/void.png"},{name:"Fire",image:"/images/roles/fire.png"},{name:"Support",image:"/images/roles/support.png"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]);var F=Object(f.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white}},input:{color:y.theme.white}})();return c.a.createElement("div",null,c.a.createElement(s.a,{container:!0,style:S.content},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:S.label,required:!0},"1. Name your Build"),c.a.createElement(b.a,{name:"title",className:F.root,InputProps:{className:F.input},fullWidth:!0,variant:"outlined",defaultValue:t.title,onChange:function(e){!function(e){var n=t;n.title=e,a(n)}(e.target.value)}})),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:S.label,xs:12},"2. Select Role"),c.a.createElement(s.a,{container:!0},j.map((function(e,n){var r;return c.a.createElement(s.a,{item:!0,xs:1,key:"role-".concat(e.name)},c.a.createElement(s.a,{container:!0,style:S.roleContainer},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(u.a,{onClick:function(){return function(e){var n=t;n.role=e,a(n),l(o+1)}(e)},style:{opacity:(null===(r=t.role)||void 0===r?void 0:r.name)===e.name?1:.5}},c.a.createElement(E.a,{style:S.roleImage,variant:"square",src:"".concat("/etherean-builds-ghp","/").concat(e.image)}))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:S.roleDescription},e.name))))})),c.a.createElement(s.a,{item:!0,xs:!0}))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:S.label,xs:12},"3. Select Myth"),c.a.createElement(s.a,{container:!0},v.map((function(e,n){var r;return c.a.createElement(s.a,{item:!0,xs:2,key:"myth-".concat(n),style:{textAlign:"center",padding:25}},c.a.createElement(u.a,{onClick:function(){return function(e){t.myth=e,a(t),l(o+1)}(e)},style:{opacity:(null===t||void 0===t||null===(r=t.myth)||void 0===r?void 0:r.name)===e.name?1:.5}},c.a.createElement(E.a,{variant:"rounded",style:{width:125,height:125,border:"1px solid ".concat(y.theme.goldBackground)},src:e.backgroundURLs[0]})),c.a.createElement(p.a,null,e.name))})))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:S.label},"4. Select Background"),c.a.createElement(s.a,{container:!0},t.myth&&t.myth.backgroundURLs.map((function(e,n){return c.a.createElement(s.a,{item:!0,style:S.backgroundImageWrapper,key:"background-".concat(e)},c.a.createElement(u.a,{onClick:function(){return function(e){var n=t;n.myth.background=e,a(n),l(o+1)}(e)},style:{opacity:t.myth.background===e?1:.5}},c.a.createElement("img",{src:e,height:100,width:200,style:{border:"1px solid ".concat(y.theme.goldBackground)}})))}))))))},S={content:{alignContent:"center",alignItem:"center"},label:{marginTop:30,marginBottom:10,color:y.theme.white},roleContainer:{textAlign:"center"},roleImage:{border:"1px solid ".concat(y.theme.goldPrimary)},roleDescription:{color:y.theme.white,fontSize:10},roleUnselected:{opacity:90},backgroundImageWrapper:{marginLeft:15,marginRight:15,marginBottom:15}},F=a(186),P=a(189),B=a(183),N=function(e){var t=e.image;return c.a.createElement(s.a,{container:!0,justify:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,xs:2,style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"100%",backgroundRepeat:"no-repeat",minWidth:40,minHeight:40,height:"100%",width:"100%"}}))},M=a(41),T=a(25),D=a(92),A=a.n(D),L=function(e){var t=e.title,a=e.data,n=e.sectionId,r=e.saveTitle,i=(e.deleteSection,Object(f.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(x.theme.grey),color:x.theme.white},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(x.theme.grey),color:x.theme.white},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(x.theme.grey),color:x.theme.white},"& .MuiOutlinedInput-input":{padding:12}},input:{color:x.theme.white}})());return c.a.createElement(s.a,{container:!0,style:R.section,alignContent:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(F.a,{style:{borderRadius:5},defaultExpanded:!0},c.a.createElement(P.a,{style:R.summary,expandIcon:c.a.createElement(A.a,{style:{fill:x.theme.white}})},c.a.createElement(s.a,{container:!0,onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},alignItems:"center",direction:"row"},c.a.createElement(s.a,{item:!0,xs:1,style:{marginRight:-10}},c.a.createElement(M.a,{styles:R.faDragIcon,icon:T.a,color:"white",size:"lg"})),c.a.createElement(s.a,{item:!0,xs:5},c.a.createElement(b.a,{placeholder:"Title",className:i.root,InputProps:{className:i.input},fullWidth:!0,variant:"outlined",defaultValue:t,onChange:function(e){r(n,e.target.value)}})),c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(s.a,{container:!0,style:R.sectionHeaderItemsContainer},a&&a.map((function(e,t){return c.a.createElement(s.a,{item:!0,style:R.sectionHeaderItem},c.a.createElement(N,{key:"itemheader--".concat(t),image:e.imageURL}))})))),c.a.createElement(s.a,{item:!0,xs:1,direction:"row-reverse"},c.a.createElement(s.a,{container:!0,direction:"column",style:R.faTrashIcon},c.a.createElement(s.a,{item:!0},c.a.createElement(M.a,{styles:R.faTrashIcon,icon:T.c,color:"white",size:"lg"})),c.a.createElement(s.a,{item:!0,style:R.label},"Delete"))))),c.a.createElement(B.a,{style:R.details},e.children))))},R={section:{marginBottom:10},sectionHeaderItemsContainer:{justifyContent:"flex-start"},sectionHeaderItem:{paddingLeft:10},summary:{backgroundColor:x.theme.sectionHeaderBackground,height:65},details:{backgroundColor:x.theme.sectionBackground},label:{color:x.theme.white,fontSize:"0.8em"},faDragIcon:{alignContent:"center",alignItems:"center",justify:"center"},faTrashIcon:{alignContent:"center",alignItems:"center",justify:"center"}},W=function(e){var t=e.item,a=e.section,n=e.setData;return c.a.createElement(s.a,{container:!0,direction:"column",justify:"center",alignItems:"center",onClick:function(){return n(a,t)},style:z.item},c.a.createElement(s.a,{item:!0,xs:2,style:{backgroundImage:"url(".concat(t.imageURL,")"),backgroundSize:"100%",backgroundRepeat:"no-repeat",minWidth:75,minHeight:75,height:"100%",width:"100%"}},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:!0,style:z.itemCost},c.a.createElement(p.a,null,t.cost)))),c.a.createElement(s.a,{item:!0,xs:!0,style:z.itemName},t.name))},z={item:{cursor:"pointer"},itemName:{color:x.theme.white,marginTop:10,fontSize:12},itemCost:{background:"1px solid ".concat(x.theme.goldBackground),margin:0,padding:0,width:"100%",height:"100%"}},U={section:{color:y.theme.white},label:{color:y.theme.white,fontSize:"0.8em"},scrollableList:{maxHeight:400,overflow:"auto",marginTop:20,marginRight:15},itemList:{margin:15,width:"100%",backgroundColor:y.theme.sectionBackground},item:{backgroundColor:y.theme.black,padding:1,paddingTop:10,paddingBottom:10,margin:10,width:100,textAlign:"center"}},H=function(e){var t=e.items,a=e.section,n=e.setData,r=Object(i.useState)(t),o=Object(m.a)(r,2),l=o[0],u=o[1];Object(i.useEffect)((function(){u(e.items)}),[e.items]);var d=Object(f.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"& .MuiOutlinedInput-input":{padding:12}},input:{color:y.theme.white}})();return c.a.createElement(s.a,{container:!0,alignContent:"center",alignItems:"center",style:U.section},c.a.createElement(s.a,{item:!0,xs:6}),c.a.createElement(s.a,{item:!0,xs:6},c.a.createElement(s.a,{container:!0,justify:"center",alignItems:"center",alignContent:"center"},c.a.createElement(s.a,{item:!0,xs:10},c.a.createElement(b.a,{className:d.root,InputProps:{className:d.input},fullWidth:!0,variant:"outlined",placeholder:"Search Items",onChange:function(e){return function(e){if(void 0!==e&&e.length>0){var a=t.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())}));u(a)}else u(t)}(e.target.value)}})),c.a.createElement(s.a,{item:!0,xs:1}),c.a.createElement(s.a,{item:!0,xs:1},c.a.createElement(s.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",direction:"column"},c.a.createElement(s.a,{item:!0},c.a.createElement(M.a,{icon:T.b,color:"white",onClick:function(){}})),c.a.createElement(s.a,{item:!0,style:U.label},"Filter"))))),c.a.createElement(s.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-begin",style:U.scrollableList},l&&l.map((function(e,t){return c.a.createElement(s.a,{item:!0,style:U.item},c.a.createElement(W,{key:"item-".concat(t),section:a,item:e,setData:n}))}))))},V=function(e){var t=e.data,a=e.setData,n=Object(i.useState)(0),r=Object(m.a)(n,2),o=r[0],l=r[1],d=Object(i.useState)(t),p=Object(m.a)(d,2),E=p[0],x=p[1],v=Object(i.useState)([]),O=Object(m.a)(v,2),w=O[0],k=O[1],I=function(e,t){var n=E;n[e].build.length>=7||n[e].build.filter((function(e){return e.name===t.name})).length>0||(n[e].build.push(t),a(n),l(o+1))},C=function(e,t){var n=E;n[e].build=n[e].build.filter((function(e){return e.name!==t.name})),a(n),l(o+1)},S=function(e,t){var n=E;n[e].title=t,a(n),l(o+1)};Object(i.useEffect)((function(){(function(){var e=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=k,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var F=Object(f.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"& .MuiOutlinedInput-input":{padding:12}},input:{color:y.theme.white}})();return c.a.createElement(s.a,{container:!0,alignContent:"center",alignItems:"center"},t.map((function(e,t){return c.a.createElement(L,{key:"sections-items-".concat(e.id),style:_.section,sectionId:t,title:e.title,data:e.build,saveTitle:S},c.a.createElement(s.a,{container:!0},e.build.map((function(e,a){return c.a.createElement(s.a,{item:!0,xs:1,style:_.selectedItem},c.a.createElement(W,{section:t,item:e,setData:C}))})),c.a.createElement(s.a,{item:!0,xs:!0}),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(H,{key:"item-list-".concat(t),items:w,section:t,build:e.build,setData:I})),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(b.a,{multiline:!0,rows:6,variant:"outlined",style:_.notes,className:F.root,InputProps:{className:F.input},placeholder:"Notes...",defaultValue:e.notes,onChange:function(e){!function(e,t){var n=E;n[e].notes=t,a(n),l(o+1)}(t,e.target.value)}}))))})),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(u.a,{style:_.buttonAddSection,onClick:function(){return function(){var e=E,t=e.length+1;x(e.concat({id:t,order:t,build:[]})),a(e)}()}},"ADD A SECTION")))},_={header:{color:y.gray},section:{marginBottom:10},buttonAddSection:{fontSize:"0.7em",marginTop:10},selectedItem:{marginRight:20},notes:{width:"100%",marginTop:15}},q=a(26),G=a(93),J=a(184),X=a(190),$=a(71),K=function(e){var t=e.ability,a=e.abilityIndex,n=e.selectLevel;return c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:1},c.a.createElement("img",{style:Q.image,src:t.imageURL})),c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:Q.name},t.type," - ",t.name)),t&&Object($.a)(Array(20)).map((function(e,r){return c.a.createElement(u.a,{style:t.levels.includes(r+1)?Q.levelSelected:Q.levelDefault,disabled:t.levels.includes(r+1),onClick:function(){return n(a,r+1)},key:"ability-".concat(t.name,"-").concat(r,"-").concat(t.levels.includes(r+1))},r+1)})))))},Q={image:{border:"1px solid ".concat(x.theme.goldPrimary),height:75,width:75},levelDefault:{backgroundColor:x.theme.black,color:x.theme.white,border:"1px solid ".concat(x.theme.goldPrimary),minWidth:0,margin:5,width:35},levelSelected:{backgroundColor:x.theme.goldPrimary,color:x.theme.black,minWidth:0,margin:5,width:35}},Y=function(e){var t=e.stat,a=e.removeStat;return c.a.createElement(s.a,{container:!0,style:Z.container},c.a.createElement(s.a,{item:!0,xs:1,style:Object(q.a)(Object(q.a)({},Z.statCost),{},{backgroundColor:t.color,color:4===t.cost?y.theme.white:y.theme.black})},c.a.createElement(p.a,null,t.points)),c.a.createElement(s.a,{item:!0,xs:8},c.a.createElement(p.a,{style:Z.statName},t.name," (",t.cost,")")),c.a.createElement(s.a,{item:!0,xs:1,style:Z.deleteIcon},c.a.createElement(u.a,{onClick:a},c.a.createElement(M.a,{icon:T.c,color:"white",size:"sm"}))))},Z={container:{border:"1px solid ".concat(y.theme.goldPrimary),padding:10,borderRadius:"7px 0",alignItems:"center"},statName:{color:y.theme.goldPrimary,paddingLeft:10,alignItems:"center",alignContent:"center"},statCost:{textAlign:"center",border:"1px solid ".concat(y.theme.goldPrimary),borderRadius:7,width:15,margin:2},deleteIcon:{alignItems:"flex-end",justifyContent:"flex-end"}},ee=function(e){var t=e.ability;return c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:2},c.a.createElement("img",{style:te.image,src:t.imageURL})),c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:te.name},t.name)),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:te.slot},t.slot)))))))},te={image:{border:"1px solid ".concat(x.theme.goldPrimary),height:75,width:75},name:{fontSize:15,color:x.theme.white},slot:{fontSize:10,color:x.theme.white}},ae=function(e){var t=e.name,a=e.isPrimary,n=e.remainingPoints,r=e.addStat,o=Object(i.useState)([]),l=Object(m.a)(o,2),d=l[0],h=l[1],g=Object(i.useState)([]),b=Object(m.a)(g,2),E=b[0],f=b[1];Object(i.useEffect)((function(){a?(h(x.splice(0,3)),f(v.splice(0,3))):(h(x.splice(1,3)),f(v.splice(1,3)))}),[]);var x=[1,2,3,4],v=[y.theme.statsFirst,y.theme.statsSecond,y.theme.statsThird,y.theme.statsFourth];return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(s.a,{container:!0,style:ne.pickerRow},c.a.createElement(s.a,{item:!0,xs:6},c.a.createElement(p.a,{style:ne.label},t)),[1,4,10].map((function(e,i){return c.a.createElement(s.a,{item:!0,xs:2,style:{border:"1px solid ".concat(E[i])}},c.a.createElement(u.a,{disabled:n-d[i]<0,onClick:function(){return r({name:t,points:e,cost:d[i],color:E[i],isPrimary:a})}},c.a.createElement(p.a,{style:{color:E[i]}},"+ ",e)))}))))},ne={label:{color:y.theme.white},pickerRow:{border:"1px solid ".concat(y.theme.goldPrimary),alignItems:"center",paddingLeft:15,marginTop:5,marginBottom:5}},re=function(e){Object(G.a)(e);var t=Object(i.useState)(8),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)([]),l=Object(m.a)(o,2),u=l[0],d=l[1],b=Object(i.useState)([]),E=Object(m.a)(b,2),x=E[0],v=E[1],O=Object(i.useState)([]),w=Object(m.a)(O,2),k=w[0],I=w[1],j=Object(i.useState)({}),C=Object(m.a)(j,2),S=C[0],F=C[1],P=Object(i.useState)(-1),B=Object(m.a)(P,2),N=B[0],M=B[1],T=Object(i.useState)(-1),D=Object(m.a)(T,2),A=D[0],L=D[1],R=[y.theme.statsFirst,y.theme.statsSecond,y.theme.statsThird,y.theme.statsFourth];Object(i.useEffect)((function(){(function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d([{name:"Assault",stats:["Attack Speed","Life Steal","Penetration"]},{name:"Demolition",stats:[""]},{name:"Protect",stats:[""]},{name:"Reinforcement",stats:[""]}]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()()}),[]);var W=function(e){var t=k,a=n;t.push(Object(q.a)({},e)),I(t),r(a-e.cost)},z=Object(f.a)({selectDropdown:{border:"1px solid ".concat(y.theme.white),color:y.theme.white,width:"100%",".MuiSvgIcon-root .MuiSelect-icon":{color:y.theme.white}},menuItem:{marginLeft:10}})();return c.a.createElement(s.a,{container:!0,alignContent:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,xs:12,style:ie.tacticsContainer},c.a.createElement(s.a,{container:!0,style:{alignItems:"center",alignContent:"center"}},c.a.createElement(s.a,{item:!0,xs:7,style:{alignItems:"center",alignContent:"center"}},c.a.createElement(p.a,{style:ie.label},"1. Selected Combat Stats")),c.a.createElement(p.a,{style:ie.label},"Stat Costs:"),[1,2,3,4].map((function(e,t){return c.a.createElement(p.a,{style:Object(q.a)(Object(q.a)({},ie.statCosts),{},{backgroundColor:R[t],color:t<3?y.theme.black:y.theme.white})},e)})),c.a.createElement(s.a,{item:!0,xs:2},c.a.createElement(p.a,{style:Object(q.a)(Object(q.a)({},ie.label),{},{textAlign:"right"})},"Remaining Points:")),c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(p.a,{style:ie.remainingPoints},n))),c.a.createElement(s.a,{container:!0,style:ie.statContainer},k.map((function(e,t){return c.a.createElement(s.a,{item:!0,xs:3,style:ie.selectedStat},c.a.createElement(Y,{stat:e,removeStat:function(){return function(e){var t=k,a=n,i=t[e];t.splice(e,1),I(t),r(a+i.cost)}(t)}}))}))),c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:ie.label},"Primary Combat Tactic")),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(J.a,{value:N,onChange:function(e){M(e.target.value),r(8),I([]);var t=[];u.map((function(a,n){n!==e.target.value&&a.stats.map((function(e){t.push({tactic:a.name,stat:e})}))})),v(t),L(0),F(t[0])},className:z.selectDropdown,inputProps:{className:z.menuItem}},!(N>=0)&&c.a.createElement(X.a,{className:z.menuItem,value:-1},"Pick Primary Tactic"),u&&u.map((function(e,t){return c.a.createElement(X.a,{className:z.menuItem,value:t},e.name)})))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0},u[N]&&u[N].stats.map((function(e,t){return c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(ae,{isPrimary:!0,remainingPoints:n,name:e,addStat:W}))})))))),c.a.createElement(s.a,{item:!0,xs:1}),c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{style:ie.label},"Secondary Combat Tactic")),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(J.a,{disabled:-1===N,width:1,value:A,onChange:function(e){L(e.target.value),F(x[e.target.value]);var t=k.filter((function(e){return e.isPrimary})),a=8;t.map((function(e){a-=e.cost})),I(t),r(a)},className:z.selectDropdown,inputProps:{className:z.menuItem}},-1===N&&c.a.createElement(X.a,null),x&&x.map((function(e,t){return c.a.createElement(X.a,{value:t},"".concat(e.tactic," ").concat(e.stat))})))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12},A>=0&&c.a.createElement(ae,{isPrimary:!1,name:S.stat,remainingPoints:n,addStat:W})))))))),c.a.createElement(s.a,{item:!0,xs:12,style:ie.familiarContainer},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12,style:{alignItems:"center",alignContent:"center"}},c.a.createElement(p.a,{style:ie.label},"2. Select Familiar")),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:1,style:{background:"no-repeat center/150% url('https://undyinggames.com/assets/Images/News/FamiliarCard.png')",border:"1px solid ".concat(y.theme.goldPrimary),marginTop:10,height:150,width:250}}))))))},ie={header:{color:y.gray},label:{font:10,color:y.theme.white,marginRight:2},tacticOption:{paddingLeft:10,color:y.theme.white},familiarContainer:{marginTop:25},remainingPoints:{background:y.theme.goldPrimary,color:y.theme.black,width:25,marginLeft:10,textAlign:"center",alignContent:"center",alignItems:"center",border:1,borderRadius:3,borderColor:y.white},statCosts:{border:"1px solid ".concat(y.theme.goldBackground),borderRadius:5,width:20,margin:5,marginRight:2,textAlign:"center",alignContent:"center",alignItems:"center"},statContainer:{minHeight:175,marginTop:15,marginBottom:25},selectedStat:{height:75,marginTop:5,marginBottom:5,paddingLeft:15,paddingRight:15}},ce=function(e){var t=e.data,a=e.setData,n=Object(i.useState)(0),r=Object(m.a)(n,2),o=r[0],l=r[1],u=function(e,n){var r=t;r.map((function(e,t){r[t].levels=r[t].levels.filter((function(e){return e!==n}))})),r[e].levels.push(n),a(r),l(o+1)};return c.a.createElement(s.a,{container:!0,alignContent:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:6},t&&t[0]&&c.a.createElement(ee,{ability:t[0]})),c.a.createElement(s.a,{item:!0,xs:6},t&&t[1]&&c.a.createElement(ee,{ability:t[1]})))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0},t&&t.slice(2,6).map((function(e,t){return c.a.createElement(s.a,{item:!0,xs:12,style:oe.dynamicAbilities,key:"ability-".concat(t)},c.a.createElement(K,{ability:e,abilityIndex:t+2,selectLevel:u}))})))))},oe={header:{color:y.gray},dynamicAbilities:{marginTop:35,marginBottom:10}},le=function(){return c.a.createElement(s.a,{container:!0,alignContent:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement("h3",{style:me.header},"Pairings Here...")))},me={header:{color:y.gray}},se=function(e){var t=e.data;return console.log(t),c.a.createElement(s.a,{container:!0,style:ue.rootContainer},c.a.createElement("h2",null,"Myth"),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,null,"Build Name: ",t.myth.title)),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,null,"Myth Name: ",t.myth.name)),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(E.a,{variant:"square",src:"".concat("/etherean-builds-ghp","/").concat(t.myth.role.image)}),c.a.createElement(p.a,null,"Role Name: ",t.myth.role.name)),c.a.createElement("h2",null,"Items"),c.a.createElement(s.a,{item:!0,xs:12},t.items.map((function(e,t){return c.a.createElement(s.a,{container:!0},e.build.map((function(e,t){return c.a.createElement(s.a,{item:!0,xs:2},e.name)})))}))),c.a.createElement("h2",null,"Loadout & Familiar"),c.a.createElement(s.a,{item:!0,xs:12}),c.a.createElement("h2",null,"Abilities"),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:6},t.abilities[0].name),c.a.createElement(s.a,{item:!0,xs:6},t.abilities[1].name)),t.abilities.slice(2,6).map((function(e,t){return c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:1},e.name),c.a.createElement(s.a,{item:!0,xs:11},Object($.a)(Array(20)).map((function(t,a){return c.a.createElement(u.a,{style:e.levels.includes(a+1)?ue.abilities.levelSelected:ue.abilities.levelDefault,disabled:!0,key:"ability-".concat(e.name,"-").concat(a,"-").concat(e.levels.includes(a+1))},a+1)}))))}))))},ue={rootContainer:{color:y.theme.white},myth:{title:{}},items:{},loadout:{},abilities:{levelDefault:{backgroundColor:y.theme.black,color:y.theme.white,border:"1px solid ".concat(y.theme.goldPrimary),minWidth:0,margin:5,width:35},levelSelected:{backgroundColor:y.theme.goldPrimary,color:y.theme.black,minWidth:0,margin:5,width:35}},pairings:{}},de=function(e){var t=e.data;return console.log(t),c.a.createElement(s.a,{container:!0,alignContent:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(u.a,null,"Save Build")),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(se,{data:t})),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(u.a,null,"Save Build")))},he=(y.theme.white,function(){document.title="Etherean.gg - Create Build";var e=1,t=2,a=3,n=4,r=5,o=6,l=Object(i.useState)(e),d=Object(m.a)(l,2),h=d[0],g=d[1],p=Object(i.useState)({}),b=Object(m.a)(p,2),E=b[0],f=b[1],y=Object(i.useState)([{id:1,order:1,build:[],notes:""}]),x=Object(m.a)(y,2),v=x[0],O=x[1],w=Object(i.useState)({}),k=Object(m.a)(w,2),I=k[0],j=k[1],S=Object(i.useState)([]),F=Object(m.a)(S,2),P=F[0],B=F[1],N=Object(i.useState)({}),M=Object(m.a)(N,2),T=M[0],D=M[1],A=Object(i.useState)({}),L=Object(m.a)(A,2),R=(L[0],L[1],function(e){g(h+e)});return c.a.createElement(s.a,{container:!0,style:ge.createContent,alignContent:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,xs:!0,style:ge.buildContent},c.a.createElement("h3",{style:ge.header},"Create a build"),c.a.createElement("div",null,c.a.createElement(s.a,{container:!0,style:ge.steps},c.a.createElement(s.a,{item:!0,xs:!0,onClick:function(){return g(e)}},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12,style:h===e?ge.stepNumberCurrent:ge.stepNumberBehind},"1"),c.a.createElement(s.a,{item:!0,xs:12},"Start your build"))),c.a.createElement(s.a,{item:!0,xs:!0,onClick:function(){return g(t)}},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12,style:h===t?ge.stepNumberCurrent:h>t?ge.stepNumberBehind:ge.stepNumberAhead},"2"),c.a.createElement(s.a,{item:!0,xs:12},"Select Items"))),c.a.createElement(s.a,{item:!0,xs:!0,onClick:function(){return g(a)}},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12,style:h===a?ge.stepNumberCurrent:h>a?ge.stepNumberBehind:ge.stepNumberAhead},"3"),c.a.createElement(s.a,{item:!0,xs:12},"Select Loadout & Familiar"))),c.a.createElement(s.a,{item:!0,xs:!0,onClick:function(){return g(n)}},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12,style:h===n?ge.stepNumberCurrent:h>n?ge.stepNumberBehind:ge.stepNumberAhead},"4"),c.a.createElement(s.a,{item:!0,xs:12},"Ability Level Up"))),c.a.createElement(s.a,{item:!0,xs:!0,onClick:function(){return g(r)}},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12,style:h===r?ge.stepNumberCurrent:h>r?ge.stepNumberBehind:ge.stepNumberAhead},"5"),c.a.createElement(s.a,{item:!0,xs:12},"Threats & Synergies"))),c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:12,style:h===o?ge.stepNumberCurrent:ge.stepNumberAhead},"6"),c.a.createElement(s.a,{item:!0,xs:12,onClick:function(){return g(o)}},"Preview & Publish"))))),function(){var i;switch(h){case e:return c.a.createElement(C,{data:E,setData:f});case t:return c.a.createElement(V,{data:v,setData:O});case a:return c.a.createElement(re,{data:I,setData:j});case n:return c.a.createElement(ce,{data:null===(i=E.myth)||void 0===i?void 0:i.abilities,setData:B});case r:return c.a.createElement(le,{data:T,setData:D});case o:return c.a.createElement(de,{data:{myth:E,items:v,loadout:I,abilities:P,pairings:T}})}}()),c.a.createElement(s.a,{container:!0},c.a.createElement(s.a,{item:!0,xs:!0}),h!==e&&c.a.createElement(s.a,{item:!0,xs:2,onClick:function(){return R(-1)}},c.a.createElement(u.a,{style:ge.buttonPreviousStep},"PREVIOUS STEP")),h!==o&&c.a.createElement(s.a,{item:!0,xs:2,onClick:function(){return R(1)}},c.a.createElement(u.a,{style:ge.buttonNextStep},"NEXT STEP"))))}),ge={header:{color:y.theme.white},steps:{marginTop:30,marginBottom:35,textAlign:"center",fontSize:"0.7em",color:y.theme.white},stepNumberBehind:{background:"no-repeat center/33% url('".concat("/etherean-builds-ghp","/images/step-border.png')"),color:y.theme.goldPrimary,paddingTop:20,marginBottom:10,height:55,width:55,opacity:.7},stepNumberCurrent:{background:"no-repeat center/33% url('".concat("/etherean-builds-ghp","/images/step-border.png')"),paddingTop:20,marginBottom:10,height:55,width:55},stepNumberAhead:{background:"no-repeat center/33% url('".concat("/etherean-builds-ghp","/images/step-border.png')"),paddingTop:20,marginBottom:10,height:55,width:55,opacity:.2},buttonNextStep:{fontSize:"0.7em",backgroundColor:y.theme.goldPrimary,marginTop:20},buttonPreviousStep:{fontSize:"0.7em",color:y.theme.goldPrimary,border:"1px solid ".concat(y.theme.goldPrimary),marginTop:20}},pe=a(13),be=function(){document.title="Etherean.gg - View Build";var e=Object(pe.f)().buildId,t=Object(i.useState)({}),a=Object(m.a)(t,2),n=a[0],r=a[1];return Object(i.useEffect)((function(){(function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,k(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e)}),[]),(null===n||void 0===n?void 0:n.id)?c.a.createElement(s.a,{container:!0},c.a.createElement("div",{style:{color:"white"}},"ID: ",n.id,c.a.createElement("br",null),"Props: ",n.prop)):c.a.createElement(s.a,null,"No Build Found")},Ee=[{path:"/",key:"ROOT",exact:!0,component:he},{path:"/builds/create",key:"CREATE_BUILD",exact:!0,component:he},{path:"/builds/view",key:"VIEW_BUILD_LIST",exact:!0,component:be},{path:"/builds/view/:buildId",key:"VIEW_BUILD_ID",component:be},{path:"/:NotFound",component:function(){return document.title="Etherean.gg - 404 Not Found",c.a.createElement("div",null,"Page Not Found")}}],fe=function(e){return c.a.createElement(pe.a,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},ye=a(57),xe=a(98),ve=a(14),Oe=a(95),we=a.n(Oe),ke=a(96),Ie=a.n(ke),je=a(61),Ce=a(77),Se=a(55),Fe=a(99),Pe=Object(Fe.a)({isFetching:!1},(r={},Object(Se.a)(r,"GET/familiars",(function(e,t){e.familiars=t.payload})),Object(Se.a)(r,"GET/items",(function(e,t){e.items=t.payload})),Object(Se.a)(r,"GET/myths",(function(e,t){e.myth=t.payload})),r)),Be=Object(ve.c)(Object(q.a)({},n)),Ne={key:"authentication",storage:we.a,whitelist:[]},Me=Object(Ce.a)(Ne,Be),Te=Object(ve.a)(je.a,Ie.a),De=Object(ve.e)(Me,{},Te),Ae=Object(Ce.b)(De),Le=De,Re=a(97);a(43).b.add(T.a,T.c,T.b);var We={wrapper:{height:"100%",backgroundColor:y.theme.siteBackground},content:{margin:"auto",padding:"4vh",height:"100%",minHeight:"100vh",maxWidth:"1000px",backgroundColor:y.theme.contentBackground,color:y.theme.white}},ze=function(){return Object(f.a)({"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px ".concat(y.theme.scrollLane)},"*::-webkit-scrollbar-thumb":{backgroundColor:y.theme.scrollBar,outline:"1px solid ".concat(y.theme.scrollBar)}},root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(y.theme.grey),color:y.theme.white}},input:{color:y.theme.white}})(),c.a.createElement("div",{name:"wrapper",style:We.wrapper},c.a.createElement("div",{name:"content",style:We.content},c.a.createElement(c.a.StrictMode,null,c.a.createElement(xe.a,{store:Le},c.a.createElement(Re.a,{loading:"Loading...",persistor:Ae},c.a.createElement(ye.a,null,c.a.createElement(pe.c,null," ",Ee.map((function(e,t){return c.a.createElement(fe,Object.assign({key:t},e))})))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.2e0bbd4c.chunk.js.map