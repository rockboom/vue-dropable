(function(e){function t(t){for(var o,c,u=t[0],i=t[1],l=t[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-dragable/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"03ee":function(e,t,n){},"33c6":function(e,t,n){},5033:function(e){e.exports=JSON.parse('{"container":{"height":500,"width":800},"blocks":[{"top":47,"left":330,"componentKey":"button","adjustPosition":false,"focus":false,"zIndex":0,"width":70,"height":40,"hasResize":false,"props":{},"model":{},"slotName":"subBtn"},{"top":125,"left":115,"componentKey":"text","adjustPosition":false,"focus":false,"zIndex":0,"width":80,"height":28,"hasResize":false,"props":{},"model":{}},{"top":241,"left":529.5,"componentKey":"select","adjustPosition":false,"focus":true,"zIndex":0,"width":193,"height":40,"hasResize":false,"props":{"options":[{"label":"经销商","value":"daeler","comments":"111"},{"label":"门店","value":"store","comments":"222"}]},"model":{"default":"acctType"}},{"top":241,"left":330,"componentKey":"select","adjustPosition":false,"focus":false,"zIndex":0,"width":193,"height":40,"hasResize":false,"props":{"options":[{"label":"蛋糕","value":"dangao","comments":"钱二分"},{"label":"雪碧","value":"xuebi","comments":"啊啊女"}]},"model":{"default":"food"},"slotName":"mySelect"},{"top":100,"left":529.5,"componentKey":"number-range","adjustPosition":false,"focus":false,"zIndex":0,"width":225,"height":40,"hasResize":false,"props":{},"model":{"start":"testStart","end":"testEnd"}}]}')},be46:function(e,t,n){},c492:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"app"},a=Object(o["m"])("h1",null,"这是渲染页面",-1),c={style:{"text-align":"center"}};function u(e,t,n,u,i,l){var s=Object(o["M"])("visual-editor");return Object(o["D"])(),Object(o["i"])("div",r,[a,Object(o["m"])(s,{modelValue:e.jsonData,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.jsonData=t}),config:e.visualConfig,formData:e.formData,customProps:e.customProps},null,8,["modelValue","config","formData","customProps"]),Object(o["m"])("div",c,Object(o["Q"])(JSON.stringify(e.formData)),1)])}n("99af"),n("4de4"),n("4160"),n("d81d"),n("d3b7"),n("25f0"),n("159b");var i=n("2909"),l=(n("96cf"),n("1da1")),s=n("5530");n("c975"),n("a434");function d(){var e=[];return{on:function(t){e.push(t)},off:function(t){var n=e.indexOf(t);n>-1&&e.splice(n,1)},emit:function(){e.forEach((function(e){return e()}))}}}var f,p=function(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e},b=n("3fd4");(function(e){e["textarea"]="textarea",e["input"]="input"})(f||(f={}));var m=function(){var e=0;return function(){return"auto_key_".concat(e++)}}(),v=Object(o["n"])({props:{option:{type:Object,required:!0}},setup:function(e){var t=Object(o["o"])(),n=Object(o["H"])({option:e.option,editValue:null,showFlag:!1,key:m()}),r={service:function(e){n.option=e,n.editValue=e.editValue,n.key=m(),r.show()},show:function(){n.showFlag=!0},hide:function(){n.showFlag=!1}},a={onConfirm:function(){n.option.onConfirm(n.editValue),r.hide()},onCancel:function(){r.hide()}};return Object.assign(t.proxy,r),function(){return Object(o["m"])(b["c"],{modelValue:n.showFlag,"onUpdate:modelValue":function(e){return n.showFlag=e},title:n.option.title,key:n.key},{default:function(){return Object(o["m"])("div",null,[n.option.editType===f.textarea?Object(o["m"])(b["f"],Object(o["t"])({type:"textarea"},{rows:10},{modelValue:n.editValue,"onUpdate:modelValue":function(e){return n.editValue=e}}),null):Object(o["m"])(b["f"],Object(o["t"])({rows:10},{modelValue:n.editValue,"onUpdate:modelValue":function(e){return n.editValue=e}}),null)])},footer:function(){return Object(o["m"])("div",null,[Object(o["m"])(b["a"],{onClick:a.onCancel},{default:function(){return[Object(o["l"])("取消")]}}),Object(o["m"])(b["a"],{onClick:a.onConfirm},{default:function(){return[Object(o["l"])("确定")]}})])}})}}}),h=function(){var e;return function(t){if(!e){var n=document.createElement("div");document.body.appendChild(n);var r=Object(o["h"])(v,{option:t});e=r.mount(n)}e.service(t)}}(),j=Object.assign(h,{input:function(e,t,n){var o=p(),r=Object(s["a"])(Object(s["a"])({},n),{},{editType:f.input,onConfirm:o.resolve,editValue:e,title:t});return h(r),o.promise},textarea:function(e,t,n){var o=p(),r=Object(s["a"])(Object(s["a"])({},n),{},{editType:f.textarea,onConfirm:o.resolve,editValue:e,title:t});return h(r),o.promise}});function O(e,t){var n=Object(o["I"])(e());return Object(o["Y"])(e,(function(e){e!==n.value&&(n.value=e)})),{get value(){return n.value},set value(e){n.value!==e&&(n.value=e,t(e))}}}Object(o["n"])({props:{modelValue:{type:String}},emit:{"update:modelValue":function(e){return!0}},setup:function(e,t){var n=O((function(){return e.modelValue}),(function(e){return t.emit("update:modelValue",e)}));return function(){return Object(o["m"])("div",null,[Object(o["l"])("自定义输入框"),Object(o["bb"])(Object(o["m"])("input",{type:"text","onUpdate:modelValue":function(e){return n.value=e}},null),[[o["W"],n.value]])])}}}),n("13d5"),n("b64b");var g=n("ade3");function y(e){var t=e.component,n=e.left,o=e.top;return{top:o,left:n,componentKey:t.key,adjustPosition:!0,focus:!1,zIndex:0,width:0,height:0,hasResize:!1,props:{},model:{}}}function k(){var e=[],t={};return{componentList:e,componentMap:t,registry:function(n,o){var r=Object(s["a"])(Object(s["a"])({},o),{},{key:n});e.push(r),t[n]=r}}}var w,x=function(){var e="@@VISUAL_DRAG_PROVIDER";return{provide:function(t){Object(o["F"])(e,t)},inject:function(){return Object(o["q"])(e)}}}();n("c492");(function(e){e["start"]="start",e["center"]="center",e["end"]="end"})(w||(w={}));var z=Object(o["n"])({props:{block:{type:Object,required:!0},component:{type:Object,required:!0}},setup:function(e,t){var n=x.inject(),r=n.dragstart,a=n.dragend,c=function(){var t={startX:0,startY:0,startWidth:0,startHeight:0,startLeft:0,startTop:0,dragging:!1,direction:{horizontal:w.start,vertical:w.start}},n=function(n,r){n.stopPropagation(),document.body.addEventListener("mousemove",o),document.body.addEventListener("mouseup",c),t={startX:n.clientX,startY:n.clientY,startWidth:e.block.width,startHeight:e.block.height,startLeft:e.block.left,startTop:e.block.top,dragging:!1,direction:r}},o=function(n){var o=t,a=o.startX,c=o.startY,u=o.startWidth,i=o.startHeight,l=o.direction,s=o.startLeft,d=o.startTop,f=o.dragging;f||(t.dragging=!0,r.emit());var p=n.clientX,b=n.clientY;l.horizontal===w.center&&(p=a),l.vertical===w.center&&(b=c);var m=p-a,v=b-c,h=e.block;l.vertical===w.start&&(v=-v,h.top=d-v),l.horizontal===w.start&&(m=-m,h.left=s-m);var j=u+m,O=i+v;h.width=j,h.height=O,h.hasResize=!0},c=function e(){document.body.removeEventListener("mousemove",o),document.body.removeEventListener("mouseup",e),t.dragging&&a.emit()};return n}();return function(){var t=e.component.resize||{},n=t.width,r=t.height;return Object(o["m"])(o["b"],null,[!!r&&Object(o["m"])(o["b"],null,[Object(o["m"])("div",{class:"block-resize block-resize-top",onMousedown:function(e){return c(e,{horizontal:w.center,vertical:w.start})}},null),Object(o["m"])("div",{class:"block-resize block-resize-bottom",onMousedown:function(e){return c(e,{horizontal:w.center,vertical:w.end})}},null)]),!!n&&Object(o["m"])(o["b"],null,[Object(o["m"])("div",{class:"block-resize block-resize-left",onMousedown:function(e){return c(e,{horizontal:w.start,vertical:w.center})}},null),Object(o["m"])("div",{class:"block-resize block-resize-right",onMousedown:function(e){return c(e,{horizontal:w.end,vertical:w.center})}},null)]),!!n&&!!r&&Object(o["m"])(o["b"],null,[Object(o["m"])("div",{class:"block-resize block-resize-top-left",onMousedown:function(e){return c(e,{horizontal:w.start,vertical:w.start})}},null),Object(o["m"])("div",{class:"block-resize block-resize-top-right",onMousedown:function(e){return c(e,{horizontal:w.end,vertical:w.start})}},null),Object(o["m"])("div",{class:"block-resize block-resize-bottom-left",onMousedown:function(e){return c(e,{horizontal:w.start,vertical:w.end})}},null),Object(o["m"])("div",{class:"block-resize block-resize-bottom-right",onMousedown:function(e){return c(e,{horizontal:w.end,vertical:w.end})}},null)])])}}}),V=Object(o["n"])({props:{block:{type:Object,required:!0},config:{type:Object,required:!0},formData:{type:Object,required:!0},slots:{type:Object,required:!0},customProps:{type:Object}},setup:function(e){var t=Object(o["I"])({}),n=Object(o["g"])((function(){return["visual-editor-block",{"visual-editor-block-focus":e.block.focus}]})),r=Object(o["g"])((function(){return{top:"".concat(e.block.top,"px"),left:"".concat(e.block.left,"px"),zIndex:e.block.zIndex}}));return Object(o["A"])((function(){var n=e.block;if(!0===n.adjustPosition){var o=t.value,r=o.offsetWidth,a=o.offsetHeight;n.left=n.left-r/2,n.top=n.top-a/2,n.height=a,n.width=r,n.adjustPosition=!1}})),function(){var a,c=e.config.componentMap[e.block.componentKey],u=e.formData;a=e.block.slotName&&e.slots[e.block.slotName]?e.slots[e.block.slotName]():c.render({size:e.block.hasResize?{width:e.block.width,height:e.block.height}:{},props:e.block.props||{},model:Object.keys(c.model||{}).reduce((function(t,n){var o,r=e.block.model?e.block.model[n]:null;return t[n]=(o={},Object(g["a"])(o,"default"===n?"modelValue":n,r?u[r]:null),Object(g["a"])(o,"default"===n?"onUpdate:modelValue":"onChange",(function(e){return!!r&&(u[r]=e)})),o),t}),{}),custom:e.block.slotName&&e.customProps&&e.customProps[e.block.slotName]||{}});var i=c.resize||{},l=i.width,s=i.height;return Object(o["m"])("div",{class:n.value,style:r.value,ref:t},[a,!!e.block.focus&&(!!l||!!s)&&Object(o["m"])(z,{block:e.block,component:c},null)])}}}),D=(n("a15b"),n("fb6a"),n("b0c0"),{16:"shift",17:"ctrl",18:"alt",8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"bottom",46:"delete",189:"-",187:"=",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12"});function C(){var e=Object(o["H"])({current:-1,queue:[],commandArray:[],commands:{},destroyList:[]}),t=function(t){e.commandArray.push(t),e.commands[t.name]=function(){var n=t.execute.apply(t,arguments),o=n.undo,r=n.redo;if(r(),!1!==t.followQueue){var a=e.queue,c=e.current;a.length>0&&(a=a.slice(0,c+1),e.queue=a),a.push({undo:o,redo:r}),e.current=c+1}}},n=function(){var t=function(t){if(document.activeElement===document.body){var n=t.keyCode,o=t.shiftKey,r=t.altKey,a=t.ctrlKey,c=t.metaKey,u=[];(a||c)&&u.push("ctrl"),o&&u.push("shift"),r&&u.push("alt"),u.push(D[n]);var i=u.join("+");e.commandArray.forEach((function(n){var o=n.keyboard,r=n.name;if(o){var a=Array.isArray(o)?o:[o];a.indexOf(i)>-1&&(e.commands[r](),t.stopPropagation(),t.preventDefault())}}))}},n=function(){return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}};return n}(),r=function(){var t=function(e){};window.addEventListener("keydown",t),e.commandArray.forEach((function(t){return!!t.init&&e.destroyList.push(t.init())})),e.destroyList.push(n()),e.destroyList.push((function(){window.removeEventListener("keydown",t)}))};return t({name:"undo",keyboard:"ctrl+z",followQueue:!1,execute:function(){return{redo:function(){if(-1!==e.current){var t=e.queue[e.current];t&&(t.undo&&t.undo(),e.current--)}}}}}),t({name:"redo",keyboard:["ctrl+y","ctrl+shift+z"],followQueue:!1,execute:function(){return{redo:function(){var t=e.queue[e.current+1];t&&(t.redo(),e.current++)}}}}),Object(o["B"])((function(){e.destroyList.forEach((function(e){return!!e&&e()}))})),{state:e,registry:t,init:r}}var L=n("0cb7"),E=n.n(L);function M(e){var t=e.focusData,n=e.updateBlocks,o=e.dataModel,r=e.dragstart,a=e.dragend,c=C();return c.registry({name:"delete",keyboard:["backspace","delete","ctrl+d"],execute:function(){var e={before:o.value.blocks||[],after:t.value.unFocus};return{redo:function(){n(E()(e.after))},undo:function(){n(E()(e.before))}}}}),c.registry({name:"drag",init:function(){var e=this;this.data={before:null};var t={dragstart:function(){e.data.before=E()(o.value.blocks)},dragend:function(){c.state.commands.drag()}};return r.on(t.dragstart),a.on(t.dragend),function(){r.off(t.dragstart),a.off(t.dragend)}},execute:function(){var e=E()(this.data.before),t=E()(o.value.blocks);return{redo:function(){n(E()(t))},undo:function(){n(E()(e))}}}}),c.registry({name:"clear",execute:function(){var e={before:E()(o.value.blocks),after:E()([])};return{redo:function(){n(E()(e.after))},undo:function(){n(E()(e.before))}}}}),c.registry({name:"placeTop",keyboard:"ctrl+up",execute:function(){var e={before:E()(o.value.blocks),after:E()(function(){var e=t.value,n=e.focus,r=e.unFocus,a=r.reduce((function(e,t){return Math.max(e,t.zIndex)}),-1/0)+1;return n.forEach((function(e){return e.zIndex=a})),E()(o.value.blocks)}())};return{redo:function(){n(E()(e.after))},undo:function(){n(E()(e.before))}}}}),c.registry({name:"placeBottom",keyboard:"ctrl+bottom",execute:function(){var e={before:E()(o.value.blocks),after:E()(function(){var e=t.value,n=e.focus,r=e.unFocus,a=r.reduce((function(e,t){return Math.min(e,t.zIndex)}),1/0)-1;if(a<0){var c=Math.abs(a);r.forEach((function(e){return e.zIndex+=c})),a=0}return n.forEach((function(e){return e.zIndex=a})),E()(o.value.blocks)}())};return{redo:function(){n(E()(e.after))},undo:function(){n(E()(e.before))}}}}),c.registry({name:"updateBlock",execute:function(e,t){var r=E()(o.value.blocks||[]),a={before:r,after:function(){r=Object(i["a"])(r);var n=o.value.blocks.indexOf(t);return n>-1&&r.splice(n,1,e),E()(r)}()};return{redo:function(){n(E()(a.after))},undo:function(){n(E()(a.before))}}}}),c.registry({name:"updateModelValue",execute:function(e){var t={before:E()(o.value),after:E()(e)};return{redo:function(){o.value=t.after},undo:function(){o.value=t.before}}}}),c.registry({name:"selectAll",followQueue:!1,keyboard:"ctrl+a",execute:function(){return{redo:function(){(o.value.blocks||[]).forEach((function(e){return e.focus=!0}))}}}}),c.init(),{undo:function(){return c.state.commands.undo()},redo:function(){return c.state.commands.redo()},delete:function(){return c.state.commands.delete()},clear:function(){return c.state.commands.clear()},placeTop:function(){return c.state.commands.placeTop()},placeBottom:function(){return c.state.commands.placeBottom()},updateBlock:function(e,t){return c.state.commands.updateBlock(e,t)},updateModelValue:function(e){c.state.commands.updateModelValue(e)}}}n("be46");var F,P=function(){var e="@@DROPDOWN_SERVICE_PROVIDER";return{provide:function(t){return Object(o["F"])(e,t)},ineject:function(){return Object(o["q"])(e)}}}(),B=Object(o["n"])({props:{option:{type:Object,required:!0}},setup:function(e){var t=Object(o["o"])(),n=Object(o["I"])({}),r=Object(o["H"])({option:e.option,showFlag:!1,top:0,left:0,mounted:function(){var e=p();return Object(o["A"])((function(){setTimeout((function(){return e.resolve()}),0)})),e.promise}()}),a=function(e){if(r.option=e,"addEventListener"in e.reference){var t=e.reference.getBoundingClientRect(),n=t.top,o=t.left,a=t.height;r.top=n+a,r.left=o}else{var u=e.reference,i=u.clientX,l=u.clientY;r.top=l,r.left=i}c.show()},c={show:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.mounted;case 2:r.showFlag=!0;case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),hide:function(){r.showFlag=!1}},u=Object(o["g"])((function(){return["dropdown-service",{"dropdown-service-show":r.showFlag}]})),i=Object(o["g"])((function(){return{top:"".concat(r.top,"px"),left:"".concat(r.left,"px")}}));Object.assign(t.proxy,{service:a});var s=function(e){n.value.contains(e.target)||c.hide()};return Object(o["A"])((function(){return document.body.addEventListener("mousedown",s,!0)})),Object(o["x"])((function(){return document.body.removeEventListener("mousedown",s,!0)})),P.provide({onClick:c.hide}),function(){return Object(o["m"])("div",{class:u.value,style:i.value,ref:n},[r.option.content()])}}}),R=Object(o["n"])({props:{label:{type:String},icon:{type:String}},emits:{click:function(e){return!0}},setup:function(e,t){var n=P.ineject(),r=n.onClick,a={onClick:function(e){t.emit("click",e),r()}};return function(){return Object(o["m"])("div",{class:"dropdown-option",onClick:a.onClick},[Object(o["m"])("i",{class:"iconfont ".concat(e.icon)},null),Object(o["m"])("span",null,[e.label])])}}}),S=function(){var e;return function(t){if(!e){var n=document.createElement("div");document.body.appendChild(n);var r=Object(o["h"])(B,{option:t});r.component("dropdown-option",R),e=r.mount(n)}e.service(t)}}(),T=(n("4fad"),n("3835"));(function(e){e["input"]="input",e["color"]="color",e["select"]="select",e["table"]="table"})(F||(F={}));var q=Object(o["n"])({props:{option:{type:Object,required:!0}},setup:function(e){var t=Object(o["o"])(),n=Object(o["H"])({option:e.option,showFlag:!1,mounted:function(){var e=p();return Object(o["A"])((function(){setTimeout((function(){return e.resolve()}),0)})),e.promise}(),editData:[]}),r={service:function(e){n.option=e,n.editData=E()(e.data),r.show()},show:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.mounted;case 2:n.showFlag=!0;case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),hide:function(){n.showFlag=!1},add:function(){n.editData.push({})},reset:function(){n.editData=E()(n.option.data)}},a={onConfirm:function(){n.option.onConfirm(n.editData),r.hide()},onCancel:function(){r.hide()},onDelete:function(e){n.editData.splice(e,1)}};return Object.assign(t.proxy,r),function(){return Object(o["m"])(b["c"],{modelValue:n.showFlag,"onUpdate:modelValue":function(e){return n.showFlag=e}},{default:function(){return Object(o["m"])("div",null,[Object(o["m"])("div",null,[Object(o["m"])(b["a"],{onClick:r.add},{default:function(){return[Object(o["l"])("添加")]}}),Object(o["m"])(b["a"],{onClick:r.reset},{default:function(){return[Object(o["l"])("重置")]}})]),Object(o["m"])(b["k"],{data:n.editData},{default:function(){return[Object(o["m"])(b["l"],{type:"index"},null),n.option.config.table.options.map((function(e,t){return Object(o["m"])(b["l"],{label:e.label},{default:function(t){var n=t.row;return Object(o["m"])(b["f"],{modelValue:n[e.field],"onUpdate:modelValue":function(t){return n[e.field]=t}},null)}})})),Object(o["m"])(b["l"],{label:"操作栏"},{default:function(e){var t=e.$index;return Object(o["m"])(b["a"],Object(o["t"])({type:"danger"},{onClick:function(){return a.onDelete(t)}}),{default:function(){return[Object(o["l"])("删除")]}})}})]}})])},footer:function(){return Object(o["m"])(o["b"],null,[Object(o["m"])(b["a"],{onClick:a.onCancel},{default:function(){return[Object(o["l"])("取消")]}}),Object(o["m"])(b["a"],Object(o["t"])({type:"primary"},{onClick:a.onConfirm}),{default:function(){return[Object(o["l"])("确定")]}})])}})}}}),I=function(){var e;return function(t){if(!e){var n=document.createElement("div");document.body.appendChild(n);var r=Object(o["h"])(q,{option:t});e=r.mount(n)}var a=p();return e.service(Object(s["a"])(Object(s["a"])({},t),{},{onConfirm:a.resolve})),a.promise}}(),N=Object(o["n"])({props:{modelValue:{type:Array},propConfig:{type:Object,required:!0}},emits:{"update:modelValue":function(e){return!0}},setup:function(e,t){var n=O((function(){return e.modelValue}),(function(e){return t.emit("update:modelValue",e)})),r=function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I({config:e.propConfig,data:e.modelValue||[]});case 2:o=t.sent,n.value=o;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return function(){return Object(o["m"])("div",null,[(!n.value||0===n.value.length)&&Object(o["m"])(b["a"],{onClick:r},{default:function(){return[Object(o["l"])("添加")]}}),(n.value||[]).map((function(t){return Object(o["m"])(b["m"],{onClick:r},{default:function(){return[t[e.propConfig.table.showKey]]}})}))])}}});function U(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(o["s"])(e)}var K=Object(o["n"])({props:{block:{type:Object},config:{type:Object,required:!0},dataModel:{type:Object,required:!0},updateBlock:{type:Function,required:!0},updateModelValue:{type:Function,required:!0}},setup:function(e){var t=Object(o["H"])({editData:""}),n={apply:function(){if(e.block){var n=t.editData;e.updateBlock(n,e.block)}else e.updateModelValue(Object(s["a"])(Object(s["a"])({},e.dataModel.value),{},{container:t.editData}))},reset:function(){e.block?t.editData=E()(e.block):t.editData=E()(e.dataModel.value.container)}};Object(o["Y"])((function(){return e.block}),(function(){n.reset()}),{immediate:!0});var r=function(e,n){var r;return(r={},Object(g["a"])(r,F.input,(function(){return Object(o["m"])(b["f"],{modelValue:t.editData.props[e],"onUpdate:modelValue":function(n){return t.editData.props[e]=n}},null)})),Object(g["a"])(r,F.color,(function(){return Object(o["m"])(b["b"],{modelValue:t.editData.props[e],"onUpdate:modelValue":function(n){return t.editData.props[e]=n}},null)})),Object(g["a"])(r,F.select,(function(){var r;return Object(o["m"])(b["j"],{modelValue:t.editData.props[e],"onUpdate:modelValue":function(n){return t.editData.props[e]=n}},U(r=n.options.map((function(e){return Object(o["m"])(b["i"],{label:e.label,value:e.val},null)})))?r:{default:function(){return[r]}})})),Object(g["a"])(r,F.table,(function(){return Object(o["m"])(N,{modelValue:t.editData.props[e],"onUpdate:modelValue":function(n){return t.editData.props[e]=n},propConfig:n},null)})),r)[n.type]()};return function(){var a=[];if(e.block){var c,u=e.block.componentKey,i=e.config.componentMap[u];a.push(Object(o["m"])(b["e"],{label:"组件标识"},U(c=Object(o["m"])(b["f"],{modelValue:t.editData.slotName,"onUpdate:modelValue":function(e){return t.editData.slotName=e}},null))?c:{default:function(){return[c]}})),i&&(i.props&&a.push(Object(o["m"])(o["b"],null,[Object.entries(i.props||{}).map((function(e){var t,n=Object(T["a"])(e,2),a=n[0],c=n[1];return Object(o["m"])(b["e"],{label:c.label,key:a},U(t=r(a,c))?t:{default:function(){return[t]}})}))])),i.model&&a.push(Object(o["m"])(o["b"],null,[Object(o["l"])("\b"),Object.entries(i.model).map((function(e){var n,r=Object(T["a"])(e,2),a=r[0],c=r[1];return Object(o["m"])(b["e"],{label:c},U(n=Object(o["m"])(b["f"],{modelValue:t.editData.model[a],"onUpdate:modelValue":function(e){return t.editData.model[a]=e}},null))?n:{default:function(){return[n]}})}))])))}else{var l,s;a.push(Object(o["m"])(o["b"],null,[Object(o["m"])(b["e"],{label:"容器宽度"},U(l=Object(o["m"])(b["g"],Object(o["t"])({modelValue:t.editData.width,"onUpdate:modelValue":function(e){return t.editData.width=e}},{step:100}),null))?l:{default:function(){return[l]}}),Object(o["m"])(b["e"],{label:"容器高度"},U(s=Object(o["m"])(b["g"],Object(o["t"])({modelValue:t.editData.height,"onUpdate:modelValue":function(e){return t.editData.height=e}},{step:100}),null))?s:{default:function(){return[s]}})]))}return Object(o["m"])("div",{class:"visual-editor-operator"},[Object(o["m"])(b["d"],{labelPosition:"top"},{default:function(){return[a,Object(o["m"])(b["e"],null,{default:function(){return[Object(o["m"])(b["a"],Object(o["t"])({type:"primary"},{onClick:n.apply}),{default:function(){return[Object(o["l"])("应用")]}}),Object(o["m"])(b["a"],{onClick:n.reset},{default:function(){return[Object(o["l"])("重置")]}})]}})]}})])}}});function A(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(o["s"])(e)}var Y=Object(o["n"])({props:{modelValue:{type:Object,required:!0},config:{type:Object,required:!0},formData:{type:Object,required:!0},customProps:{type:Object}},emits:{"update:modelValue":function(e){return!0}},setup:function(e,t){var n=O((function(){return e.modelValue}),(function(e){return t.emit("update:modelValue",e)})),r=Object(o["I"])({}),a=Object(o["g"])((function(){return{width:"".concat(n.value.container.width,"px"),height:"".concat(n.value.container.height,"px")}})),c=Object(o["g"])((function(){var e=[],t=[];return(n.value.blocks||[]).forEach((function(n){return(n.focus?e:t).push(n)})),{focus:e,unFocus:t}})),u=Object(o["I"])(-1),f=Object(o["H"])({selectBlock:Object(o["g"])((function(){return(n.value.blocks||[])[u.value]})),preview:!1,editing:!0}),p=Object(o["g"])((function(){return["visual-editor",{"visual-editor-not-preview":!f.preview}]})),m=d(),v=d();x.provide({dragstart:m,dragend:v});var h={clearFocus:function(e){var t=n.value.blocks||[];0!==t.length&&(e&&(t=t.filter((function(t){return t!=e}))),t.forEach((function(e){return e.focus=!1})))},updateBlocks:function(e){n.value=Object(s["a"])(Object(s["a"])({},n.value),{},{blocks:e})},showBlockData:function(e){j.textarea(JSON.stringify(e),"节点数据",{editReadonly:!0})},importBlockData:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.textarea("","请输入JSON字符串");case 2:n=e.sent;try{o=JSON.parse(n||""),D.updateBlock(o,t)}catch(r){console.error(r),b["h"].alert("解析JSON字符串出错")}case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),openEdit:function(){f.editing=!0}},g=function(){var e=null,t={dragenter:function(e){e.dataTransfer.dropEffect="move"},dragover:function(e){e.preventDefault()},dragleave:function(e){e.dataTransfer.dropEffect="none"},drop:function(t){var o=Object(i["a"])(n.value.blocks||[]);o.push(y({component:e,top:t.offsetY,left:t.offsetX})),h.updateBlocks(o),v.emit()}},o={dragstart:function(n,o){r.value.addEventListener("dragenter",t.dragenter),r.value.addEventListener("dragover",t.dragover),r.value.addEventListener("dragleave",t.dragleave),r.value.addEventListener("drop",t.drop),e=o,m.emit()},dragend:function(){r.value.removeEventListener("dragenter",t.dragenter),r.value.removeEventListener("dragover",t.dragover),r.value.removeEventListener("dragleave",t.dragleave),r.value.removeEventListener("drop",t.drop),e=null}};return o}(),k=function(){return{container:{onMousedown:function(e){f.preview||(e.preventDefault(),e.currentTarget===e.target&&(e.shiftKey||(h.clearFocus(),u.value=-1)))}},block:{onMousedown:function(e,t,n){f.preview||(e.shiftKey?c.value.focus.length<=1?t.focus=!0:t.focus=!t.focus:t.focus||(t.focus=!0,h.clearFocus(t)),u.value=n,w.mousedown(e))}}}}(),w=function(){var e=Object(o["H"])({x:null,y:null}),t={startX:0,startY:0,startLeft:0,startTop:0,startPos:[],dragging:!1,markLines:{}},r=function(n){t.dragging||(t.dragging=!0,m.emit());var o=n.clientX,r=n.clientY,a=t,u=a.startX,i=a.startY;n.shiftKey&&(Math.abs(o-u)>Math.abs(r-i)?r=i:o=u);for(var l=t.startLeft+o-u,s=t.startTop+r-i,d={x:null,y:null},f=0;f<t.markLines.y.length;f++){var p=t.markLines.y[f],b=p.top,v=p.showTop;if(Math.abs(b-s)<5){r=b+i-t.startTop,d.y=v;break}}for(var h=0;h<t.markLines.x.length;h++){var j=t.markLines.x[h],O=j.left,g=j.showLeft;if(Math.abs(O-l)<5){o=O+u-t.startLeft,d.x=g;break}}e.x=d.x,e.y=d.y;var y=o-u,k=r-i;c.value.focus.forEach((function(e,n){e.top=t.startPos[n].top+k,e.left=t.startPos[n].left+y}))},a=function n(o){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",n),e.x=null,e.y=null,t.dragging&&v.emit()},u=function(e){t={startX:e.clientX,startY:e.clientY,startLeft:f.selectBlock.left,startTop:f.selectBlock.top,startPos:c.value.focus.map((function(e){var t=e.top,n=e.left;return{top:t,left:n}})),dragging:!1,markLines:function(){var e=c.value,t=(e.focus,e.unFocus),o=f.selectBlock,r=(o.top,o.left,o.width),a=o.height,u={x:[],y:[]};return[].concat(Object(i["a"])(t),[{top:0,left:0,width:n.value.container.width,height:n.value.container.height}]).forEach((function(e){var t=e.top,n=e.left,o=e.width,c=e.height;u.y.push({top:t,showTop:t}),u.y.push({top:t+c,showTop:t+c}),u.y.push({top:t+c/2-a/2,showTop:t+c/2}),u.y.push({top:t-a,showTop:t}),u.y.push({top:t+c-a,showTop:t+c}),u.x.push({left:n,showLeft:n}),u.x.push({left:n+o,showLeft:n+o}),u.x.push({left:n+o/2-r/2,showLeft:n+o/2}),u.x.push({left:n-r,showLeft:n}),u.x.push({left:n+o-r,showLeft:n+o})})),u}()},document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)};return{mark:e,mousedown:u}}(),z={onContextmenuBlock:function(e,t){f.preview||(e.preventDefault(),e.stopPropagation(),S({reference:e,content:function(){return Object(o["m"])(o["b"],null,[Object(o["m"])(R,Object(o["t"])({label:"置顶节点",icon:"icon-place-top"},{onClick:D.placeTop}),null),Object(o["m"])(R,Object(o["t"])({label:"置底节点",icon:"icon-place-bottom"},{onClick:D.placeBottom}),null),Object(o["m"])(R,Object(o["t"])({label:"删除节点",icon:"icon-delete"},{onClick:D.delete}),null),Object(o["m"])(R,Object(o["t"])({label:"查看数据",icon:"icon-browse"},{onClick:function(){h.showBlockData(t)}}),null),Object(o["m"])(R,Object(o["t"])({label:"导入节点",icon:"icon-import"},{onClick:function(){h.importBlockData(t)}}),null)])}}))}},D=M({focusData:c,updateBlocks:h.updateBlocks,dataModel:n,dragstart:m,dragend:v}),C=[{label:"撤销",icon:"icon-back",handler:D.undo,tip:"ctrl+z"},{label:"重做",icon:"icon-forward",handler:D.redo,tip:"ctrl+shift+z"},{label:function(){return f.preview?"编辑":"预览"},icon:function(){return f.preview?"icon-edit":"icon-browse"},handler:function(){f.preview||h.clearFocus(),f.preview=!f.preview}},{label:"导入",icon:"icon-import",handler:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.textarea("","请输入导入的JSON字符串");case 2:t=e.sent;try{o=JSON.parse(t||""),n.value=o}catch(r){console.error(r),b["h"].alert("解析JSON字符串出错")}case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{label:"导出",icon:"icon-export",handler:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=j.textarea(JSON.stringify(n.value),"导出的JSON数据",{editReadonly:!0}),console.log("text:",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{label:"置顶",icon:"icon-place-top",handler:function(){D.placeTop()},tip:"ctrl+up"},{label:"置底",icon:"icon-place-bottom",handler:function(){D.placeBottom()},tip:"ctrl+down"},{label:"删除",icon:"icon-delete",handler:function(){D.delete()},tip:"ctrl+d,backspace,delete"},{label:"清空",icon:"icon-reset",handler:function(){D.clear()}},{label:"关闭",icon:"icon-close",handler:function(){h.clearFocus(),f.editing=!1}}];return function(){return Object(o["m"])(o["b"],null,[Object(o["m"])("div",{class:"visual-editor-container",style:a.value},[!!n.value.blocks&&n.value.blocks.map((function(n,r){return Object(o["m"])(V,{config:e.config,block:n,key:r,formData:e.formData,slots:t.slots,customProps:e.customProps},null)})),Object(o["m"])("div",{class:"vue-visual-container-edit-button",onClick:h.openEdit},[Object(o["m"])("i",{class:"iconfont icon-edit"},null),Object(o["m"])("span",null,[Object(o["l"])("编辑组件")])])]),Object(o["bb"])(Object(o["m"])("div",{class:p.value},[Object(o["m"])("div",{class:"visual-editor-menu"},[e.config.componentList.map((function(e){return Object(o["m"])("div",{class:"visual-editor-menu-item",draggable:!0,onDragend:g.dragend,onDragstart:function(t){return g.dragstart(t,e)}},[Object(o["m"])("span",{class:"visual-editor-menu-item-label"},[e.label]),Object(o["m"])("div",{class:"visual-editor-menu-item-content"},[e.preview()])])}))]),Object(o["m"])("div",{class:"visual-editor-head"},[C.map((function(e,t){var n="function"===typeof e.label?e.label():e.label,r="function"===typeof e.icon?e.icon():e.icon,a=Object(o["m"])("div",{key:t,class:"visual-editor-head-button",onClick:e.handler},[Object(o["m"])("i",{class:"iconfont ".concat(r)},null),Object(o["m"])("span",null,A(n)?n:{default:function(){return[n]}})]);return e.tip?Object(o["m"])(Object(o["M"])("el-tooltip"),{effect:"dark",content:e.tip,placement:"bottom"},A(a)?a:{default:function(){return[a]}}):a}))]),Object(o["m"])(K,{block:f.selectBlock,config:e.config,dataModel:n,updateBlock:D.updateBlock,updateModelValue:D.updateModelValue},null),Object(o["m"])("div",{class:"visual-editor-body"},[Object(o["m"])("div",{class:"visual-editor-content"},[Object(o["m"])("div",Object(o["t"])({class:"visual-editor-container",style:a.value,ref:r},k.container),[!!n.value.blocks&&n.value.blocks.map((function(n,r){return Object(o["m"])(V,Object(o["t"])({config:e.config,block:n,key:r,formData:e.formData,slots:t.slots,customProps:e.customProps},{onMousedown:function(e){return k.block.onMousedown(e,n,r)},onContextmenu:function(e){return z.onContextmenuBlock(e,n)}}),null)})),null!==w.mark.y&&Object(o["m"])("div",{class:"visual-editor-mark-line-y",style:{top:"".concat(w.mark.y,"px")}},null),null!==w.mark.x&&Object(o["m"])("div",{class:"visual-editor-mark-line-x",style:{left:"".concat(w.mark.x,"px")}},null)])])])]),[[o["X"],f.editing]])])}}}),J=(n("03ee"),Object(o["n"])({props:{start:{type:String},end:{type:String}},emits:{"update:start":function(e){return!0},"update:end":function(e){return!0}},setup:function(e,t){var n=O((function(){return e.start}),(function(e){return t.emit("update:start",e)})),r=O((function(){return e.end}),(function(e){return t.emit("update:end",e)}));return function(){return Object(o["m"])("div",{class:"number-range"},[Object(o["m"])("div",null,[Object(o["bb"])(Object(o["m"])("input",{type:"text","onUpdate:modelValue":function(e){return n.value=e}},null),[[o["W"],n.value]])]),Object(o["m"])("span",null,[Object(o["l"])("~")]),Object(o["m"])("div",null,[Object(o["bb"])(Object(o["m"])("input",{type:"text","onUpdate:modelValue":function(e){return r.value=e}},null),[[o["W"],r.value]])])])}}})),X=(n("f125"),k());function _(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(o["s"])(e)}function H(e){return{type:F.input,label:e}}function W(e){return{type:F.color,label:e}}function Q(e,t){return{type:F.select,label:e,options:t}}function $(e,t){return{type:F.table,label:e,table:t}}X.registry("text",{label:"文本",preview:function(){return"预览文本"},render:function(e){var t=e.props;return Object(o["m"])("span",{style:{color:t.color,fontSize:t.size}},[t.text||"默认文本"])},props:{text:H("显示文本"),color:W("字体颜色"),size:Q("字体大小",[{label:"14px",val:"14px"},{label:"18px",val:"18px"},{label:"24px",val:"24px"}])}}),X.registry("button",{label:"按钮",preview:function(){return Object(o["m"])(b["a"],null,{default:function(){return[Object(o["l"])("按钮")]}})},render:function(e){var t=e.props,n=e.size,r=e.custom;return Object(o["m"])(b["a"],Object(o["t"])(r,{type:t.type,size:t.size,style:{width:n.height?"".concat(n.width,"px"):null,height:n.height?"".concat(n.height,"px"):null}}),{default:function(){return[t.text||"按钮"]}})},resize:{width:!0,height:!0},props:{text:H("显示文本"),color:W("字体颜色"),type:Q("按钮类型",[{label:"基础",val:"primary"},{label:"成功",val:"success"},{label:"警告",val:"warning"},{label:"危险",val:"danger"},{label:"提示",val:"danger"},{label:"文本",val:"text"}]),size:Q("按钮大小",[{label:"默认",val:""},{label:"中等",val:"medium"},{label:"小",val:"small"},{label:"极小",val:"mini"}])}}),X.registry("select",{label:"下拉框",preview:function(){return Object(o["m"])(b["j"],null,null)},render:function(e){var t,n=e.props,r=e.model,a=e.custom;return Object(o["m"])(b["j"],Object(o["t"])(a,{key:(n.options||[]).map((function(e){return e.value})).join(",")},r.default),_(t=(n.options||[]).map((function(e,t){return Object(o["m"])(b["i"],{label:e.label,value:e.value,key:t},null)})))?t:{default:function(){return[t]}})},props:{options:$("下拉选项",{options:[{label:"显示值",field:"label"},{label:"绑定值",field:"value"},{label:"备注",field:"comments"}],showKey:"label"})},model:{default:"绑定字段"}}),X.registry("input",{label:"输入框",preview:function(){return Object(o["m"])(b["f"],{modelValue:""},null)},render:function(e){var t=e.model,n=e.size,r=e.custom;return Object(o["m"])(b["f"],Object(o["t"])(r,t.default,{style:{width:n.height?"".concat(n.width,"px"):null}}),null)},resize:{width:!0},model:{default:"绑定字段"}}),X.registry("number-range",{label:"数字范围输入框",resize:{width:!0},preview:function(){return Object(o["m"])(J,{style:{width:"100%"}},null)},render:function(e){var t=e.model,n=e.size;return Object(o["m"])(J,Object(o["t"])({style:{width:n.height?"".concat(n.width,"px"):null}},{start:t.start.value,"onUpdate:start":t.start.onChange,end:t.end.value,"onUpdate:end":t.end.onChange}),null)},model:{start:"起始绑定字段",end:"结束绑定字段"}}),X.registry("image",{label:"图片",resize:{width:!0,height:!0},props:{url:H("地址")},render:function(e){var t=e.props,n=e.size;return Object(o["m"])("div",{style:{height:"".concat(n.height||100,"px"),width:"".concat(n.width||100,"px")},class:"visual-block-image"},[Object(o["m"])("img",{src:t.url||"https://avatars.githubusercontent.com/u/23214721?s=400&u=525efab9f8487c891ab07a9f5d308e1a7a8f0097&v=4"},null)])},preview:function(){return Object(o["m"])("div",{style:"text-align:center;"},[Object(o["m"])("div",{style:"font-size:20px;background-color:#f2f2f2;color:#ccc;display:inline-flex;width:100px;height:50px"},[Object(o["m"])("i",{class:"el-icon-picture"},null)])])}});var G=n("5033"),Z=Object(o["n"])({name:"App",components:{VisualEditor:Y},data:function(){var e=this;return{visualConfig:X,jsonData:G,formData:{username:"admin"},customProps:{subBtn:{onClick:function(){e.$notify({message:"执行"})}},mySelect:{onChange:function(t){e.$notify({message:t}),e.formData.acctType=null}}}}}});n("d348");Z.render=u;var ee=Z,te=(n("7dd6"),Object(o["h"])(ee));te.use(b["n"]),te.mount("#app")},d348:function(e,t,n){"use strict";n("33c6")},f125:function(e,t,n){}});
//# sourceMappingURL=app.be83aba2.js.map