// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_homescreen_boilerplate.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('promesa.core');
cljs_homescreen_boilerplate.core.apps = document.getElementById("apps");
cljs_homescreen_boilerplate.core.to_exclude = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["system","input","homescreen","theme"], null);
cljs_homescreen_boilerplate.core.random_color = (function (){var x = (cljs.core.rand_int.call(null,(9)) * (16777215));
return [cljs.core.str(x)].join('');
})();
cljs_homescreen_boilerplate.core.get_bigger_icon = (function cljs_homescreen_boilerplate$core$get_bigger_icon(icons){
return cljs.core.last.call(null,cljs.core.clj__GT_js.call(null,cljs.core.last.call(null,cljs.core.js__GT_clj.call(null,icons))));
});
cljs_homescreen_boilerplate.core.role_acceptable = (function cljs_homescreen_boilerplate$core$role_acceptable(e){
if(cljs.core._EQ_.call(null,"Callscreen",e.name)){
return (-1);
} else {
return cljs.core.to_array.call(null,cljs_homescreen_boilerplate.core.to_exclude).indexOf(e.role);
}
});
cljs_homescreen_boilerplate.core.render = (function cljs_homescreen_boilerplate$core$render(e){
if(((0) > cljs_homescreen_boilerplate.core.role_acceptable.call(null,e))){
var tile = document.createElement("DIV");
var link = document.createElement("A");
tile.className = "tile";

tile.style.background = cljs.core.apply.call(null,cljs.core.str,"orange url(",e.origin,cljs_homescreen_boilerplate.core.get_bigger_icon.call(null,e.icons),") center/99% no-repeat");

link.href = cljs.core.apply.call(null,cljs.core.str,e.origin,e.launch_path);

link.appendChild(tile);

if(!(cljs.core.empty_QMARK_.call(null,e.origin))){
return cljs_homescreen_boilerplate.core.apps.appendChild(link);
} else {
return null;
}
} else {
return null;
}
});
cljs_homescreen_boilerplate.core.pr = promesa.core.then.call(null,promesa.core.promise.call(null,window.navigator.mozApps.mgmt.getAll()),(function (values){
var seq__6525 = cljs.core.seq.call(null,values);
var chunk__6526 = null;
var count__6527 = (0);
var i__6528 = (0);
while(true){
if((i__6528 < count__6527)){
var v = cljs.core._nth.call(null,chunk__6526,i__6528);
cljs_homescreen_boilerplate.core.render.call(null,v.manifest);

var G__6529 = seq__6525;
var G__6530 = chunk__6526;
var G__6531 = count__6527;
var G__6532 = (i__6528 + (1));
seq__6525 = G__6529;
chunk__6526 = G__6530;
count__6527 = G__6531;
i__6528 = G__6532;
continue;
} else {
var temp__4653__auto__ = cljs.core.seq.call(null,seq__6525);
if(temp__4653__auto__){
var seq__6525__$1 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6525__$1)){
var c__5485__auto__ = cljs.core.chunk_first.call(null,seq__6525__$1);
var G__6533 = cljs.core.chunk_rest.call(null,seq__6525__$1);
var G__6534 = c__5485__auto__;
var G__6535 = cljs.core.count.call(null,c__5485__auto__);
var G__6536 = (0);
seq__6525 = G__6533;
chunk__6526 = G__6534;
count__6527 = G__6535;
i__6528 = G__6536;
continue;
} else {
var v = cljs.core.first.call(null,seq__6525__$1);
cljs_homescreen_boilerplate.core.render.call(null,v.manifest);

var G__6537 = cljs.core.next.call(null,seq__6525__$1);
var G__6538 = null;
var G__6539 = (0);
var G__6540 = (0);
seq__6525 = G__6537;
chunk__6526 = G__6538;
count__6527 = G__6539;
i__6528 = G__6540;
continue;
}
} else {
return null;
}
}
break;
}
}));
