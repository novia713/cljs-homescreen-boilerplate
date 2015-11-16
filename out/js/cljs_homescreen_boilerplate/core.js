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
cljs_homescreen_boilerplate.core.render = (function cljs_homescreen_boilerplate$core$render(e){
cljs_homescreen_boilerplate.core.role_acceptable = ((cljs.core._EQ_.call(null,"Callscreen",e.name))?(-1):cljs.core.to_array.call(null,cljs_homescreen_boilerplate.core.to_exclude).indexOf(e.role));

if(((0) > cljs_homescreen_boilerplate.core.role_acceptable)){
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
var seq__6621 = cljs.core.seq.call(null,values);
var chunk__6622 = null;
var count__6623 = (0);
var i__6624 = (0);
while(true){
if((i__6624 < count__6623)){
var v = cljs.core._nth.call(null,chunk__6622,i__6624);
cljs_homescreen_boilerplate.core.render.call(null,v.manifest);

var G__6625 = seq__6621;
var G__6626 = chunk__6622;
var G__6627 = count__6623;
var G__6628 = (i__6624 + (1));
seq__6621 = G__6625;
chunk__6622 = G__6626;
count__6623 = G__6627;
i__6624 = G__6628;
continue;
} else {
var temp__4653__auto__ = cljs.core.seq.call(null,seq__6621);
if(temp__4653__auto__){
var seq__6621__$1 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6621__$1)){
var c__5485__auto__ = cljs.core.chunk_first.call(null,seq__6621__$1);
var G__6629 = cljs.core.chunk_rest.call(null,seq__6621__$1);
var G__6630 = c__5485__auto__;
var G__6631 = cljs.core.count.call(null,c__5485__auto__);
var G__6632 = (0);
seq__6621 = G__6629;
chunk__6622 = G__6630;
count__6623 = G__6631;
i__6624 = G__6632;
continue;
} else {
var v = cljs.core.first.call(null,seq__6621__$1);
cljs_homescreen_boilerplate.core.render.call(null,v.manifest);

var G__6633 = cljs.core.next.call(null,seq__6621__$1);
var G__6634 = null;
var G__6635 = (0);
var G__6636 = (0);
seq__6621 = G__6633;
chunk__6622 = G__6634;
count__6623 = G__6635;
i__6624 = G__6636;
continue;
}
} else {
return null;
}
}
break;
}
}));
