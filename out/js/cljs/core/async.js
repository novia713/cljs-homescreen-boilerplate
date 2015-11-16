// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async7089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7089 = (function (fn_handler,f,meta7090){
this.fn_handler = fn_handler;
this.f = f;
this.meta7090 = meta7090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7091,meta7090__$1){
var self__ = this;
var _7091__$1 = this;
return (new cljs.core.async.t_cljs$core$async7089(self__.fn_handler,self__.f,meta7090__$1));
});

cljs.core.async.t_cljs$core$async7089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7091){
var self__ = this;
var _7091__$1 = this;
return self__.meta7090;
});

cljs.core.async.t_cljs$core$async7089.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta7090","meta7090",-2018340100,null)], null);
});

cljs.core.async.t_cljs$core$async7089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7089";

cljs.core.async.t_cljs$core$async7089.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async7089");
});

cljs.core.async.__GT_t_cljs$core$async7089 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async7089(fn_handler__$1,f__$1,meta7090){
return (new cljs.core.async.t_cljs$core$async7089(fn_handler__$1,f__$1,meta7090));
});

}

return (new cljs.core.async.t_cljs$core$async7089(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7094 = [];
var len__5621__auto___7097 = arguments.length;
var i__5622__auto___7098 = (0);
while(true){
if((i__5622__auto___7098 < len__5621__auto___7097)){
args7094.push((arguments[i__5622__auto___7098]));

var G__7099 = (i__5622__auto___7098 + (1));
i__5622__auto___7098 = G__7099;
continue;
} else {
}
break;
}

var G__7096 = args7094.length;
switch (G__7096) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7094.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7101 = [];
var len__5621__auto___7104 = arguments.length;
var i__5622__auto___7105 = (0);
while(true){
if((i__5622__auto___7105 < len__5621__auto___7104)){
args7101.push((arguments[i__5622__auto___7105]));

var G__7106 = (i__5622__auto___7105 + (1));
i__5622__auto___7105 = G__7106;
continue;
} else {
}
break;
}

var G__7103 = args7101.length;
switch (G__7103) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7101.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7108 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7108);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7108,ret){
return (function (){
return fn1.call(null,val_7108);
});})(val_7108,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7109 = [];
var len__5621__auto___7112 = arguments.length;
var i__5622__auto___7113 = (0);
while(true){
if((i__5622__auto___7113 < len__5621__auto___7112)){
args7109.push((arguments[i__5622__auto___7113]));

var G__7114 = (i__5622__auto___7113 + (1));
i__5622__auto___7113 = G__7114;
continue;
} else {
}
break;
}

var G__7111 = args7109.length;
switch (G__7111) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7109.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5466__auto___7116 = n;
var x_7117 = (0);
while(true){
if((x_7117 < n__5466__auto___7116)){
(a[x_7117] = (0));

var G__7118 = (x_7117 + (1));
x_7117 = G__7118;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7119 = (i + (1));
i = G__7119;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7123 = (function (alt_flag,flag,meta7124){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7124 = meta7124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7125,meta7124__$1){
var self__ = this;
var _7125__$1 = this;
return (new cljs.core.async.t_cljs$core$async7123(self__.alt_flag,self__.flag,meta7124__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7125){
var self__ = this;
var _7125__$1 = this;
return self__.meta7124;
});})(flag))
;

cljs.core.async.t_cljs$core$async7123.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7123.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7124","meta7124",-1149383973,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7123";

cljs.core.async.t_cljs$core$async7123.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async7123");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7123 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7123(alt_flag__$1,flag__$1,meta7124){
return (new cljs.core.async.t_cljs$core$async7123(alt_flag__$1,flag__$1,meta7124));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7123(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7129 = (function (alt_handler,flag,cb,meta7130){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7130 = meta7130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7131,meta7130__$1){
var self__ = this;
var _7131__$1 = this;
return (new cljs.core.async.t_cljs$core$async7129(self__.alt_handler,self__.flag,self__.cb,meta7130__$1));
});

cljs.core.async.t_cljs$core$async7129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7131){
var self__ = this;
var _7131__$1 = this;
return self__.meta7130;
});

cljs.core.async.t_cljs$core$async7129.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7130","meta7130",1188240754,null)], null);
});

cljs.core.async.t_cljs$core$async7129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7129";

cljs.core.async.t_cljs$core$async7129.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async7129");
});

cljs.core.async.__GT_t_cljs$core$async7129 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7129(alt_handler__$1,flag__$1,cb__$1,meta7130){
return (new cljs.core.async.t_cljs$core$async7129(alt_handler__$1,flag__$1,cb__$1,meta7130));
});

}

return (new cljs.core.async.t_cljs$core$async7129(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7132_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7132_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7133_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7133_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4563__auto__ = wport;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7134 = (i + (1));
i = G__7134;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4563__auto__ = ret;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4551__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4551__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4551__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___7140 = arguments.length;
var i__5622__auto___7141 = (0);
while(true){
if((i__5622__auto___7141 < len__5621__auto___7140)){
args__5628__auto__.push((arguments[i__5622__auto___7141]));

var G__7142 = (i__5622__auto___7141 + (1));
i__5622__auto___7141 = G__7142;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7137){
var map__7138 = p__7137;
var map__7138__$1 = ((((!((map__7138 == null)))?((((map__7138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7138):map__7138);
var opts = map__7138__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7135){
var G__7136 = cljs.core.first.call(null,seq7135);
var seq7135__$1 = cljs.core.next.call(null,seq7135);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7136,seq7135__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7143 = [];
var len__5621__auto___7193 = arguments.length;
var i__5622__auto___7194 = (0);
while(true){
if((i__5622__auto___7194 < len__5621__auto___7193)){
args7143.push((arguments[i__5622__auto___7194]));

var G__7195 = (i__5622__auto___7194 + (1));
i__5622__auto___7194 = G__7195;
continue;
} else {
}
break;
}

var G__7145 = args7143.length;
switch (G__7145) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7143.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6893__auto___7197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___7197){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___7197){
return (function (state_7169){
var state_val_7170 = (state_7169[(1)]);
if((state_val_7170 === (7))){
var inst_7165 = (state_7169[(2)]);
var state_7169__$1 = state_7169;
var statearr_7171_7198 = state_7169__$1;
(statearr_7171_7198[(2)] = inst_7165);

(statearr_7171_7198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (1))){
var state_7169__$1 = state_7169;
var statearr_7172_7199 = state_7169__$1;
(statearr_7172_7199[(2)] = null);

(statearr_7172_7199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (4))){
var inst_7148 = (state_7169[(7)]);
var inst_7148__$1 = (state_7169[(2)]);
var inst_7149 = (inst_7148__$1 == null);
var state_7169__$1 = (function (){var statearr_7173 = state_7169;
(statearr_7173[(7)] = inst_7148__$1);

return statearr_7173;
})();
if(cljs.core.truth_(inst_7149)){
var statearr_7174_7200 = state_7169__$1;
(statearr_7174_7200[(1)] = (5));

} else {
var statearr_7175_7201 = state_7169__$1;
(statearr_7175_7201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (13))){
var state_7169__$1 = state_7169;
var statearr_7176_7202 = state_7169__$1;
(statearr_7176_7202[(2)] = null);

(statearr_7176_7202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (6))){
var inst_7148 = (state_7169[(7)]);
var state_7169__$1 = state_7169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7169__$1,(11),to,inst_7148);
} else {
if((state_val_7170 === (3))){
var inst_7167 = (state_7169[(2)]);
var state_7169__$1 = state_7169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7169__$1,inst_7167);
} else {
if((state_val_7170 === (12))){
var state_7169__$1 = state_7169;
var statearr_7177_7203 = state_7169__$1;
(statearr_7177_7203[(2)] = null);

(statearr_7177_7203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (2))){
var state_7169__$1 = state_7169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7169__$1,(4),from);
} else {
if((state_val_7170 === (11))){
var inst_7158 = (state_7169[(2)]);
var state_7169__$1 = state_7169;
if(cljs.core.truth_(inst_7158)){
var statearr_7178_7204 = state_7169__$1;
(statearr_7178_7204[(1)] = (12));

} else {
var statearr_7179_7205 = state_7169__$1;
(statearr_7179_7205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (9))){
var state_7169__$1 = state_7169;
var statearr_7180_7206 = state_7169__$1;
(statearr_7180_7206[(2)] = null);

(statearr_7180_7206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (5))){
var state_7169__$1 = state_7169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7181_7207 = state_7169__$1;
(statearr_7181_7207[(1)] = (8));

} else {
var statearr_7182_7208 = state_7169__$1;
(statearr_7182_7208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (14))){
var inst_7163 = (state_7169[(2)]);
var state_7169__$1 = state_7169;
var statearr_7183_7209 = state_7169__$1;
(statearr_7183_7209[(2)] = inst_7163);

(statearr_7183_7209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (10))){
var inst_7155 = (state_7169[(2)]);
var state_7169__$1 = state_7169;
var statearr_7184_7210 = state_7169__$1;
(statearr_7184_7210[(2)] = inst_7155);

(statearr_7184_7210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7170 === (8))){
var inst_7152 = cljs.core.async.close_BANG_.call(null,to);
var state_7169__$1 = state_7169;
var statearr_7185_7211 = state_7169__$1;
(statearr_7185_7211[(2)] = inst_7152);

(statearr_7185_7211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___7197))
;
return ((function (switch__6872__auto__,c__6893__auto___7197){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_7189 = [null,null,null,null,null,null,null,null];
(statearr_7189[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_7189[(1)] = (1));

return statearr_7189;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_7169){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7190){if((e7190 instanceof Object)){
var ex__6876__auto__ = e7190;
var statearr_7191_7212 = state_7169;
(statearr_7191_7212[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7213 = state_7169;
state_7169 = G__7213;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_7169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_7169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___7197))
})();
var state__6895__auto__ = (function (){var statearr_7192 = f__6894__auto__.call(null);
(statearr_7192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___7197);

return statearr_7192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___7197))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7397){
var vec__7398 = p__7397;
var v = cljs.core.nth.call(null,vec__7398,(0),null);
var p = cljs.core.nth.call(null,vec__7398,(1),null);
var job = vec__7398;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6893__auto___7580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___7580,res,vec__7398,v,p,job,jobs,results){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___7580,res,vec__7398,v,p,job,jobs,results){
return (function (state_7403){
var state_val_7404 = (state_7403[(1)]);
if((state_val_7404 === (1))){
var state_7403__$1 = state_7403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7403__$1,(2),res,v);
} else {
if((state_val_7404 === (2))){
var inst_7400 = (state_7403[(2)]);
var inst_7401 = cljs.core.async.close_BANG_.call(null,res);
var state_7403__$1 = (function (){var statearr_7405 = state_7403;
(statearr_7405[(7)] = inst_7400);

return statearr_7405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7403__$1,inst_7401);
} else {
return null;
}
}
});})(c__6893__auto___7580,res,vec__7398,v,p,job,jobs,results))
;
return ((function (switch__6872__auto__,c__6893__auto___7580,res,vec__7398,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0 = (function (){
var statearr_7409 = [null,null,null,null,null,null,null,null];
(statearr_7409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__);

(statearr_7409[(1)] = (1));

return statearr_7409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1 = (function (state_7403){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7410){if((e7410 instanceof Object)){
var ex__6876__auto__ = e7410;
var statearr_7411_7581 = state_7403;
(statearr_7411_7581[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7582 = state_7403;
state_7403 = G__7582;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = function(state_7403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1.call(this,state_7403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___7580,res,vec__7398,v,p,job,jobs,results))
})();
var state__6895__auto__ = (function (){var statearr_7412 = f__6894__auto__.call(null);
(statearr_7412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___7580);

return statearr_7412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___7580,res,vec__7398,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7413){
var vec__7414 = p__7413;
var v = cljs.core.nth.call(null,vec__7414,(0),null);
var p = cljs.core.nth.call(null,vec__7414,(1),null);
var job = vec__7414;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5466__auto___7583 = n;
var __7584 = (0);
while(true){
if((__7584 < n__5466__auto___7583)){
var G__7415_7585 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7415_7585) {
case "compute":
var c__6893__auto___7587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7584,c__6893__auto___7587,G__7415_7585,n__5466__auto___7583,jobs,results,process,async){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (__7584,c__6893__auto___7587,G__7415_7585,n__5466__auto___7583,jobs,results,process,async){
return (function (state_7428){
var state_val_7429 = (state_7428[(1)]);
if((state_val_7429 === (1))){
var state_7428__$1 = state_7428;
var statearr_7430_7588 = state_7428__$1;
(statearr_7430_7588[(2)] = null);

(statearr_7430_7588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7429 === (2))){
var state_7428__$1 = state_7428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7428__$1,(4),jobs);
} else {
if((state_val_7429 === (3))){
var inst_7426 = (state_7428[(2)]);
var state_7428__$1 = state_7428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7428__$1,inst_7426);
} else {
if((state_val_7429 === (4))){
var inst_7418 = (state_7428[(2)]);
var inst_7419 = process.call(null,inst_7418);
var state_7428__$1 = state_7428;
if(cljs.core.truth_(inst_7419)){
var statearr_7431_7589 = state_7428__$1;
(statearr_7431_7589[(1)] = (5));

} else {
var statearr_7432_7590 = state_7428__$1;
(statearr_7432_7590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7429 === (5))){
var state_7428__$1 = state_7428;
var statearr_7433_7591 = state_7428__$1;
(statearr_7433_7591[(2)] = null);

(statearr_7433_7591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7429 === (6))){
var state_7428__$1 = state_7428;
var statearr_7434_7592 = state_7428__$1;
(statearr_7434_7592[(2)] = null);

(statearr_7434_7592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7429 === (7))){
var inst_7424 = (state_7428[(2)]);
var state_7428__$1 = state_7428;
var statearr_7435_7593 = state_7428__$1;
(statearr_7435_7593[(2)] = inst_7424);

(statearr_7435_7593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7584,c__6893__auto___7587,G__7415_7585,n__5466__auto___7583,jobs,results,process,async))
;
return ((function (__7584,switch__6872__auto__,c__6893__auto___7587,G__7415_7585,n__5466__auto___7583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0 = (function (){
var statearr_7439 = [null,null,null,null,null,null,null];
(statearr_7439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__);

(statearr_7439[(1)] = (1));

return statearr_7439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1 = (function (state_7428){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7440){if((e7440 instanceof Object)){
var ex__6876__auto__ = e7440;
var statearr_7441_7594 = state_7428;
(statearr_7441_7594[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7595 = state_7428;
state_7428 = G__7595;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = function(state_7428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1.call(this,state_7428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__;
})()
;})(__7584,switch__6872__auto__,c__6893__auto___7587,G__7415_7585,n__5466__auto___7583,jobs,results,process,async))
})();
var state__6895__auto__ = (function (){var statearr_7442 = f__6894__auto__.call(null);
(statearr_7442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___7587);

return statearr_7442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(__7584,c__6893__auto___7587,G__7415_7585,n__5466__auto___7583,jobs,results,process,async))
);


break;
case "async":
var c__6893__auto___7596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7584,c__6893__auto___7596,G__7415_7585,n__5466__auto___7583,jobs,results,process,async){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (__7584,c__6893__auto___7596,G__7415_7585,n__5466__auto___7583,jobs,results,process,async){
return (function (state_7455){
var state_val_7456 = (state_7455[(1)]);
if((state_val_7456 === (1))){
var state_7455__$1 = state_7455;
var statearr_7457_7597 = state_7455__$1;
(statearr_7457_7597[(2)] = null);

(statearr_7457_7597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7456 === (2))){
var state_7455__$1 = state_7455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7455__$1,(4),jobs);
} else {
if((state_val_7456 === (3))){
var inst_7453 = (state_7455[(2)]);
var state_7455__$1 = state_7455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7455__$1,inst_7453);
} else {
if((state_val_7456 === (4))){
var inst_7445 = (state_7455[(2)]);
var inst_7446 = async.call(null,inst_7445);
var state_7455__$1 = state_7455;
if(cljs.core.truth_(inst_7446)){
var statearr_7458_7598 = state_7455__$1;
(statearr_7458_7598[(1)] = (5));

} else {
var statearr_7459_7599 = state_7455__$1;
(statearr_7459_7599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7456 === (5))){
var state_7455__$1 = state_7455;
var statearr_7460_7600 = state_7455__$1;
(statearr_7460_7600[(2)] = null);

(statearr_7460_7600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7456 === (6))){
var state_7455__$1 = state_7455;
var statearr_7461_7601 = state_7455__$1;
(statearr_7461_7601[(2)] = null);

(statearr_7461_7601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7456 === (7))){
var inst_7451 = (state_7455[(2)]);
var state_7455__$1 = state_7455;
var statearr_7462_7602 = state_7455__$1;
(statearr_7462_7602[(2)] = inst_7451);

(statearr_7462_7602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7584,c__6893__auto___7596,G__7415_7585,n__5466__auto___7583,jobs,results,process,async))
;
return ((function (__7584,switch__6872__auto__,c__6893__auto___7596,G__7415_7585,n__5466__auto___7583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0 = (function (){
var statearr_7466 = [null,null,null,null,null,null,null];
(statearr_7466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__);

(statearr_7466[(1)] = (1));

return statearr_7466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1 = (function (state_7455){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7467){if((e7467 instanceof Object)){
var ex__6876__auto__ = e7467;
var statearr_7468_7603 = state_7455;
(statearr_7468_7603[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7604 = state_7455;
state_7455 = G__7604;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = function(state_7455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1.call(this,state_7455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__;
})()
;})(__7584,switch__6872__auto__,c__6893__auto___7596,G__7415_7585,n__5466__auto___7583,jobs,results,process,async))
})();
var state__6895__auto__ = (function (){var statearr_7469 = f__6894__auto__.call(null);
(statearr_7469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___7596);

return statearr_7469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(__7584,c__6893__auto___7596,G__7415_7585,n__5466__auto___7583,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7605 = (__7584 + (1));
__7584 = G__7605;
continue;
} else {
}
break;
}

var c__6893__auto___7606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___7606,jobs,results,process,async){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___7606,jobs,results,process,async){
return (function (state_7491){
var state_val_7492 = (state_7491[(1)]);
if((state_val_7492 === (1))){
var state_7491__$1 = state_7491;
var statearr_7493_7607 = state_7491__$1;
(statearr_7493_7607[(2)] = null);

(statearr_7493_7607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7492 === (2))){
var state_7491__$1 = state_7491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7491__$1,(4),from);
} else {
if((state_val_7492 === (3))){
var inst_7489 = (state_7491[(2)]);
var state_7491__$1 = state_7491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7491__$1,inst_7489);
} else {
if((state_val_7492 === (4))){
var inst_7472 = (state_7491[(7)]);
var inst_7472__$1 = (state_7491[(2)]);
var inst_7473 = (inst_7472__$1 == null);
var state_7491__$1 = (function (){var statearr_7494 = state_7491;
(statearr_7494[(7)] = inst_7472__$1);

return statearr_7494;
})();
if(cljs.core.truth_(inst_7473)){
var statearr_7495_7608 = state_7491__$1;
(statearr_7495_7608[(1)] = (5));

} else {
var statearr_7496_7609 = state_7491__$1;
(statearr_7496_7609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7492 === (5))){
var inst_7475 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7491__$1 = state_7491;
var statearr_7497_7610 = state_7491__$1;
(statearr_7497_7610[(2)] = inst_7475);

(statearr_7497_7610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7492 === (6))){
var inst_7477 = (state_7491[(8)]);
var inst_7472 = (state_7491[(7)]);
var inst_7477__$1 = cljs.core.async.chan.call(null,(1));
var inst_7478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7479 = [inst_7472,inst_7477__$1];
var inst_7480 = (new cljs.core.PersistentVector(null,2,(5),inst_7478,inst_7479,null));
var state_7491__$1 = (function (){var statearr_7498 = state_7491;
(statearr_7498[(8)] = inst_7477__$1);

return statearr_7498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7491__$1,(8),jobs,inst_7480);
} else {
if((state_val_7492 === (7))){
var inst_7487 = (state_7491[(2)]);
var state_7491__$1 = state_7491;
var statearr_7499_7611 = state_7491__$1;
(statearr_7499_7611[(2)] = inst_7487);

(statearr_7499_7611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7492 === (8))){
var inst_7477 = (state_7491[(8)]);
var inst_7482 = (state_7491[(2)]);
var state_7491__$1 = (function (){var statearr_7500 = state_7491;
(statearr_7500[(9)] = inst_7482);

return statearr_7500;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7491__$1,(9),results,inst_7477);
} else {
if((state_val_7492 === (9))){
var inst_7484 = (state_7491[(2)]);
var state_7491__$1 = (function (){var statearr_7501 = state_7491;
(statearr_7501[(10)] = inst_7484);

return statearr_7501;
})();
var statearr_7502_7612 = state_7491__$1;
(statearr_7502_7612[(2)] = null);

(statearr_7502_7612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___7606,jobs,results,process,async))
;
return ((function (switch__6872__auto__,c__6893__auto___7606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0 = (function (){
var statearr_7506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__);

(statearr_7506[(1)] = (1));

return statearr_7506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1 = (function (state_7491){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7507){if((e7507 instanceof Object)){
var ex__6876__auto__ = e7507;
var statearr_7508_7613 = state_7491;
(statearr_7508_7613[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7614 = state_7491;
state_7491 = G__7614;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = function(state_7491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1.call(this,state_7491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___7606,jobs,results,process,async))
})();
var state__6895__auto__ = (function (){var statearr_7509 = f__6894__auto__.call(null);
(statearr_7509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___7606);

return statearr_7509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___7606,jobs,results,process,async))
);


var c__6893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto__,jobs,results,process,async){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto__,jobs,results,process,async){
return (function (state_7547){
var state_val_7548 = (state_7547[(1)]);
if((state_val_7548 === (7))){
var inst_7543 = (state_7547[(2)]);
var state_7547__$1 = state_7547;
var statearr_7549_7615 = state_7547__$1;
(statearr_7549_7615[(2)] = inst_7543);

(statearr_7549_7615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (20))){
var state_7547__$1 = state_7547;
var statearr_7550_7616 = state_7547__$1;
(statearr_7550_7616[(2)] = null);

(statearr_7550_7616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (1))){
var state_7547__$1 = state_7547;
var statearr_7551_7617 = state_7547__$1;
(statearr_7551_7617[(2)] = null);

(statearr_7551_7617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (4))){
var inst_7512 = (state_7547[(7)]);
var inst_7512__$1 = (state_7547[(2)]);
var inst_7513 = (inst_7512__$1 == null);
var state_7547__$1 = (function (){var statearr_7552 = state_7547;
(statearr_7552[(7)] = inst_7512__$1);

return statearr_7552;
})();
if(cljs.core.truth_(inst_7513)){
var statearr_7553_7618 = state_7547__$1;
(statearr_7553_7618[(1)] = (5));

} else {
var statearr_7554_7619 = state_7547__$1;
(statearr_7554_7619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (15))){
var inst_7525 = (state_7547[(8)]);
var state_7547__$1 = state_7547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7547__$1,(18),to,inst_7525);
} else {
if((state_val_7548 === (21))){
var inst_7538 = (state_7547[(2)]);
var state_7547__$1 = state_7547;
var statearr_7555_7620 = state_7547__$1;
(statearr_7555_7620[(2)] = inst_7538);

(statearr_7555_7620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (13))){
var inst_7540 = (state_7547[(2)]);
var state_7547__$1 = (function (){var statearr_7556 = state_7547;
(statearr_7556[(9)] = inst_7540);

return statearr_7556;
})();
var statearr_7557_7621 = state_7547__$1;
(statearr_7557_7621[(2)] = null);

(statearr_7557_7621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (6))){
var inst_7512 = (state_7547[(7)]);
var state_7547__$1 = state_7547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7547__$1,(11),inst_7512);
} else {
if((state_val_7548 === (17))){
var inst_7533 = (state_7547[(2)]);
var state_7547__$1 = state_7547;
if(cljs.core.truth_(inst_7533)){
var statearr_7558_7622 = state_7547__$1;
(statearr_7558_7622[(1)] = (19));

} else {
var statearr_7559_7623 = state_7547__$1;
(statearr_7559_7623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (3))){
var inst_7545 = (state_7547[(2)]);
var state_7547__$1 = state_7547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7547__$1,inst_7545);
} else {
if((state_val_7548 === (12))){
var inst_7522 = (state_7547[(10)]);
var state_7547__$1 = state_7547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7547__$1,(14),inst_7522);
} else {
if((state_val_7548 === (2))){
var state_7547__$1 = state_7547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7547__$1,(4),results);
} else {
if((state_val_7548 === (19))){
var state_7547__$1 = state_7547;
var statearr_7560_7624 = state_7547__$1;
(statearr_7560_7624[(2)] = null);

(statearr_7560_7624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (11))){
var inst_7522 = (state_7547[(2)]);
var state_7547__$1 = (function (){var statearr_7561 = state_7547;
(statearr_7561[(10)] = inst_7522);

return statearr_7561;
})();
var statearr_7562_7625 = state_7547__$1;
(statearr_7562_7625[(2)] = null);

(statearr_7562_7625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (9))){
var state_7547__$1 = state_7547;
var statearr_7563_7626 = state_7547__$1;
(statearr_7563_7626[(2)] = null);

(statearr_7563_7626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (5))){
var state_7547__$1 = state_7547;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7564_7627 = state_7547__$1;
(statearr_7564_7627[(1)] = (8));

} else {
var statearr_7565_7628 = state_7547__$1;
(statearr_7565_7628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (14))){
var inst_7525 = (state_7547[(8)]);
var inst_7527 = (state_7547[(11)]);
var inst_7525__$1 = (state_7547[(2)]);
var inst_7526 = (inst_7525__$1 == null);
var inst_7527__$1 = cljs.core.not.call(null,inst_7526);
var state_7547__$1 = (function (){var statearr_7566 = state_7547;
(statearr_7566[(8)] = inst_7525__$1);

(statearr_7566[(11)] = inst_7527__$1);

return statearr_7566;
})();
if(inst_7527__$1){
var statearr_7567_7629 = state_7547__$1;
(statearr_7567_7629[(1)] = (15));

} else {
var statearr_7568_7630 = state_7547__$1;
(statearr_7568_7630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (16))){
var inst_7527 = (state_7547[(11)]);
var state_7547__$1 = state_7547;
var statearr_7569_7631 = state_7547__$1;
(statearr_7569_7631[(2)] = inst_7527);

(statearr_7569_7631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (10))){
var inst_7519 = (state_7547[(2)]);
var state_7547__$1 = state_7547;
var statearr_7570_7632 = state_7547__$1;
(statearr_7570_7632[(2)] = inst_7519);

(statearr_7570_7632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (18))){
var inst_7530 = (state_7547[(2)]);
var state_7547__$1 = state_7547;
var statearr_7571_7633 = state_7547__$1;
(statearr_7571_7633[(2)] = inst_7530);

(statearr_7571_7633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7548 === (8))){
var inst_7516 = cljs.core.async.close_BANG_.call(null,to);
var state_7547__$1 = state_7547;
var statearr_7572_7634 = state_7547__$1;
(statearr_7572_7634[(2)] = inst_7516);

(statearr_7572_7634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto__,jobs,results,process,async))
;
return ((function (switch__6872__auto__,c__6893__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0 = (function (){
var statearr_7576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__);

(statearr_7576[(1)] = (1));

return statearr_7576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1 = (function (state_7547){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7577){if((e7577 instanceof Object)){
var ex__6876__auto__ = e7577;
var statearr_7578_7635 = state_7547;
(statearr_7578_7635[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7636 = state_7547;
state_7547 = G__7636;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__ = function(state_7547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1.call(this,state_7547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto__,jobs,results,process,async))
})();
var state__6895__auto__ = (function (){var statearr_7579 = f__6894__auto__.call(null);
(statearr_7579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto__);

return statearr_7579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto__,jobs,results,process,async))
);

return c__6893__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args7637 = [];
var len__5621__auto___7640 = arguments.length;
var i__5622__auto___7641 = (0);
while(true){
if((i__5622__auto___7641 < len__5621__auto___7640)){
args7637.push((arguments[i__5622__auto___7641]));

var G__7642 = (i__5622__auto___7641 + (1));
i__5622__auto___7641 = G__7642;
continue;
} else {
}
break;
}

var G__7639 = args7637.length;
switch (G__7639) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7637.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args7644 = [];
var len__5621__auto___7647 = arguments.length;
var i__5622__auto___7648 = (0);
while(true){
if((i__5622__auto___7648 < len__5621__auto___7647)){
args7644.push((arguments[i__5622__auto___7648]));

var G__7649 = (i__5622__auto___7648 + (1));
i__5622__auto___7648 = G__7649;
continue;
} else {
}
break;
}

var G__7646 = args7644.length;
switch (G__7646) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7644.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args7651 = [];
var len__5621__auto___7704 = arguments.length;
var i__5622__auto___7705 = (0);
while(true){
if((i__5622__auto___7705 < len__5621__auto___7704)){
args7651.push((arguments[i__5622__auto___7705]));

var G__7706 = (i__5622__auto___7705 + (1));
i__5622__auto___7705 = G__7706;
continue;
} else {
}
break;
}

var G__7653 = args7651.length;
switch (G__7653) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7651.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6893__auto___7708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___7708,tc,fc){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___7708,tc,fc){
return (function (state_7679){
var state_val_7680 = (state_7679[(1)]);
if((state_val_7680 === (7))){
var inst_7675 = (state_7679[(2)]);
var state_7679__$1 = state_7679;
var statearr_7681_7709 = state_7679__$1;
(statearr_7681_7709[(2)] = inst_7675);

(statearr_7681_7709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (1))){
var state_7679__$1 = state_7679;
var statearr_7682_7710 = state_7679__$1;
(statearr_7682_7710[(2)] = null);

(statearr_7682_7710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (4))){
var inst_7656 = (state_7679[(7)]);
var inst_7656__$1 = (state_7679[(2)]);
var inst_7657 = (inst_7656__$1 == null);
var state_7679__$1 = (function (){var statearr_7683 = state_7679;
(statearr_7683[(7)] = inst_7656__$1);

return statearr_7683;
})();
if(cljs.core.truth_(inst_7657)){
var statearr_7684_7711 = state_7679__$1;
(statearr_7684_7711[(1)] = (5));

} else {
var statearr_7685_7712 = state_7679__$1;
(statearr_7685_7712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (13))){
var state_7679__$1 = state_7679;
var statearr_7686_7713 = state_7679__$1;
(statearr_7686_7713[(2)] = null);

(statearr_7686_7713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (6))){
var inst_7656 = (state_7679[(7)]);
var inst_7662 = p.call(null,inst_7656);
var state_7679__$1 = state_7679;
if(cljs.core.truth_(inst_7662)){
var statearr_7687_7714 = state_7679__$1;
(statearr_7687_7714[(1)] = (9));

} else {
var statearr_7688_7715 = state_7679__$1;
(statearr_7688_7715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (3))){
var inst_7677 = (state_7679[(2)]);
var state_7679__$1 = state_7679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7679__$1,inst_7677);
} else {
if((state_val_7680 === (12))){
var state_7679__$1 = state_7679;
var statearr_7689_7716 = state_7679__$1;
(statearr_7689_7716[(2)] = null);

(statearr_7689_7716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (2))){
var state_7679__$1 = state_7679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7679__$1,(4),ch);
} else {
if((state_val_7680 === (11))){
var inst_7656 = (state_7679[(7)]);
var inst_7666 = (state_7679[(2)]);
var state_7679__$1 = state_7679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7679__$1,(8),inst_7666,inst_7656);
} else {
if((state_val_7680 === (9))){
var state_7679__$1 = state_7679;
var statearr_7690_7717 = state_7679__$1;
(statearr_7690_7717[(2)] = tc);

(statearr_7690_7717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (5))){
var inst_7659 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7660 = cljs.core.async.close_BANG_.call(null,fc);
var state_7679__$1 = (function (){var statearr_7691 = state_7679;
(statearr_7691[(8)] = inst_7659);

return statearr_7691;
})();
var statearr_7692_7718 = state_7679__$1;
(statearr_7692_7718[(2)] = inst_7660);

(statearr_7692_7718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (14))){
var inst_7673 = (state_7679[(2)]);
var state_7679__$1 = state_7679;
var statearr_7693_7719 = state_7679__$1;
(statearr_7693_7719[(2)] = inst_7673);

(statearr_7693_7719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (10))){
var state_7679__$1 = state_7679;
var statearr_7694_7720 = state_7679__$1;
(statearr_7694_7720[(2)] = fc);

(statearr_7694_7720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7680 === (8))){
var inst_7668 = (state_7679[(2)]);
var state_7679__$1 = state_7679;
if(cljs.core.truth_(inst_7668)){
var statearr_7695_7721 = state_7679__$1;
(statearr_7695_7721[(1)] = (12));

} else {
var statearr_7696_7722 = state_7679__$1;
(statearr_7696_7722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___7708,tc,fc))
;
return ((function (switch__6872__auto__,c__6893__auto___7708,tc,fc){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_7700 = [null,null,null,null,null,null,null,null,null];
(statearr_7700[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_7700[(1)] = (1));

return statearr_7700;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_7679){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7701){if((e7701 instanceof Object)){
var ex__6876__auto__ = e7701;
var statearr_7702_7723 = state_7679;
(statearr_7702_7723[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7724 = state_7679;
state_7679 = G__7724;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_7679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_7679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___7708,tc,fc))
})();
var state__6895__auto__ = (function (){var statearr_7703 = f__6894__auto__.call(null);
(statearr_7703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___7708);

return statearr_7703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___7708,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto__){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto__){
return (function (state_7771){
var state_val_7772 = (state_7771[(1)]);
if((state_val_7772 === (1))){
var inst_7757 = init;
var state_7771__$1 = (function (){var statearr_7773 = state_7771;
(statearr_7773[(7)] = inst_7757);

return statearr_7773;
})();
var statearr_7774_7789 = state_7771__$1;
(statearr_7774_7789[(2)] = null);

(statearr_7774_7789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7772 === (2))){
var state_7771__$1 = state_7771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7771__$1,(4),ch);
} else {
if((state_val_7772 === (3))){
var inst_7769 = (state_7771[(2)]);
var state_7771__$1 = state_7771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7771__$1,inst_7769);
} else {
if((state_val_7772 === (4))){
var inst_7760 = (state_7771[(8)]);
var inst_7760__$1 = (state_7771[(2)]);
var inst_7761 = (inst_7760__$1 == null);
var state_7771__$1 = (function (){var statearr_7775 = state_7771;
(statearr_7775[(8)] = inst_7760__$1);

return statearr_7775;
})();
if(cljs.core.truth_(inst_7761)){
var statearr_7776_7790 = state_7771__$1;
(statearr_7776_7790[(1)] = (5));

} else {
var statearr_7777_7791 = state_7771__$1;
(statearr_7777_7791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7772 === (5))){
var inst_7757 = (state_7771[(7)]);
var state_7771__$1 = state_7771;
var statearr_7778_7792 = state_7771__$1;
(statearr_7778_7792[(2)] = inst_7757);

(statearr_7778_7792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7772 === (6))){
var inst_7757 = (state_7771[(7)]);
var inst_7760 = (state_7771[(8)]);
var inst_7764 = f.call(null,inst_7757,inst_7760);
var inst_7757__$1 = inst_7764;
var state_7771__$1 = (function (){var statearr_7779 = state_7771;
(statearr_7779[(7)] = inst_7757__$1);

return statearr_7779;
})();
var statearr_7780_7793 = state_7771__$1;
(statearr_7780_7793[(2)] = null);

(statearr_7780_7793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7772 === (7))){
var inst_7767 = (state_7771[(2)]);
var state_7771__$1 = state_7771;
var statearr_7781_7794 = state_7771__$1;
(statearr_7781_7794[(2)] = inst_7767);

(statearr_7781_7794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6893__auto__))
;
return ((function (switch__6872__auto__,c__6893__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6873__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6873__auto____0 = (function (){
var statearr_7785 = [null,null,null,null,null,null,null,null,null];
(statearr_7785[(0)] = cljs$core$async$reduce_$_state_machine__6873__auto__);

(statearr_7785[(1)] = (1));

return statearr_7785;
});
var cljs$core$async$reduce_$_state_machine__6873__auto____1 = (function (state_7771){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7786){if((e7786 instanceof Object)){
var ex__6876__auto__ = e7786;
var statearr_7787_7795 = state_7771;
(statearr_7787_7795[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7796 = state_7771;
state_7771 = G__7796;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6873__auto__ = function(state_7771){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6873__auto____1.call(this,state_7771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6873__auto____0;
cljs$core$async$reduce_$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6873__auto____1;
return cljs$core$async$reduce_$_state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto__))
})();
var state__6895__auto__ = (function (){var statearr_7788 = f__6894__auto__.call(null);
(statearr_7788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto__);

return statearr_7788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto__))
);

return c__6893__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args7797 = [];
var len__5621__auto___7849 = arguments.length;
var i__5622__auto___7850 = (0);
while(true){
if((i__5622__auto___7850 < len__5621__auto___7849)){
args7797.push((arguments[i__5622__auto___7850]));

var G__7851 = (i__5622__auto___7850 + (1));
i__5622__auto___7850 = G__7851;
continue;
} else {
}
break;
}

var G__7799 = args7797.length;
switch (G__7799) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7797.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto__){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto__){
return (function (state_7824){
var state_val_7825 = (state_7824[(1)]);
if((state_val_7825 === (7))){
var inst_7806 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7826_7853 = state_7824__$1;
(statearr_7826_7853[(2)] = inst_7806);

(statearr_7826_7853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (1))){
var inst_7800 = cljs.core.seq.call(null,coll);
var inst_7801 = inst_7800;
var state_7824__$1 = (function (){var statearr_7827 = state_7824;
(statearr_7827[(7)] = inst_7801);

return statearr_7827;
})();
var statearr_7828_7854 = state_7824__$1;
(statearr_7828_7854[(2)] = null);

(statearr_7828_7854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (4))){
var inst_7801 = (state_7824[(7)]);
var inst_7804 = cljs.core.first.call(null,inst_7801);
var state_7824__$1 = state_7824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7824__$1,(7),ch,inst_7804);
} else {
if((state_val_7825 === (13))){
var inst_7818 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7829_7855 = state_7824__$1;
(statearr_7829_7855[(2)] = inst_7818);

(statearr_7829_7855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (6))){
var inst_7809 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
if(cljs.core.truth_(inst_7809)){
var statearr_7830_7856 = state_7824__$1;
(statearr_7830_7856[(1)] = (8));

} else {
var statearr_7831_7857 = state_7824__$1;
(statearr_7831_7857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (3))){
var inst_7822 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7824__$1,inst_7822);
} else {
if((state_val_7825 === (12))){
var state_7824__$1 = state_7824;
var statearr_7832_7858 = state_7824__$1;
(statearr_7832_7858[(2)] = null);

(statearr_7832_7858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (2))){
var inst_7801 = (state_7824[(7)]);
var state_7824__$1 = state_7824;
if(cljs.core.truth_(inst_7801)){
var statearr_7833_7859 = state_7824__$1;
(statearr_7833_7859[(1)] = (4));

} else {
var statearr_7834_7860 = state_7824__$1;
(statearr_7834_7860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (11))){
var inst_7815 = cljs.core.async.close_BANG_.call(null,ch);
var state_7824__$1 = state_7824;
var statearr_7835_7861 = state_7824__$1;
(statearr_7835_7861[(2)] = inst_7815);

(statearr_7835_7861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (9))){
var state_7824__$1 = state_7824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7836_7862 = state_7824__$1;
(statearr_7836_7862[(1)] = (11));

} else {
var statearr_7837_7863 = state_7824__$1;
(statearr_7837_7863[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (5))){
var inst_7801 = (state_7824[(7)]);
var state_7824__$1 = state_7824;
var statearr_7838_7864 = state_7824__$1;
(statearr_7838_7864[(2)] = inst_7801);

(statearr_7838_7864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (10))){
var inst_7820 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7839_7865 = state_7824__$1;
(statearr_7839_7865[(2)] = inst_7820);

(statearr_7839_7865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (8))){
var inst_7801 = (state_7824[(7)]);
var inst_7811 = cljs.core.next.call(null,inst_7801);
var inst_7801__$1 = inst_7811;
var state_7824__$1 = (function (){var statearr_7840 = state_7824;
(statearr_7840[(7)] = inst_7801__$1);

return statearr_7840;
})();
var statearr_7841_7866 = state_7824__$1;
(statearr_7841_7866[(2)] = null);

(statearr_7841_7866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto__))
;
return ((function (switch__6872__auto__,c__6893__auto__){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_7845 = [null,null,null,null,null,null,null,null];
(statearr_7845[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_7845[(1)] = (1));

return statearr_7845;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_7824){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7846){if((e7846 instanceof Object)){
var ex__6876__auto__ = e7846;
var statearr_7847_7867 = state_7824;
(statearr_7847_7867[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7868 = state_7824;
state_7824 = G__7868;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_7824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_7824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto__))
})();
var state__6895__auto__ = (function (){var statearr_7848 = f__6894__auto__.call(null);
(statearr_7848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto__);

return statearr_7848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto__))
);

return c__6893__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5218__auto__ = (((_ == null))?null:_);
var m__5219__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,_);
} else {
var m__5219__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5219__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m);
} else {
var m__5219__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8090 = (function (mult,ch,cs,meta8091){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8091 = meta8091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8092,meta8091__$1){
var self__ = this;
var _8092__$1 = this;
return (new cljs.core.async.t_cljs$core$async8090(self__.mult,self__.ch,self__.cs,meta8091__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8092){
var self__ = this;
var _8092__$1 = this;
return self__.meta8091;
});})(cs))
;

cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8090.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8090.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8091","meta8091",-1138373433,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8090";

cljs.core.async.t_cljs$core$async8090.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async8090");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8090 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8090(mult__$1,ch__$1,cs__$1,meta8091){
return (new cljs.core.async.t_cljs$core$async8090(mult__$1,ch__$1,cs__$1,meta8091));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8090(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6893__auto___8311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___8311,cs,m,dchan,dctr,done){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___8311,cs,m,dchan,dctr,done){
return (function (state_8223){
var state_val_8224 = (state_8223[(1)]);
if((state_val_8224 === (7))){
var inst_8219 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8225_8312 = state_8223__$1;
(statearr_8225_8312[(2)] = inst_8219);

(statearr_8225_8312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (20))){
var inst_8124 = (state_8223[(7)]);
var inst_8134 = cljs.core.first.call(null,inst_8124);
var inst_8135 = cljs.core.nth.call(null,inst_8134,(0),null);
var inst_8136 = cljs.core.nth.call(null,inst_8134,(1),null);
var state_8223__$1 = (function (){var statearr_8226 = state_8223;
(statearr_8226[(8)] = inst_8135);

return statearr_8226;
})();
if(cljs.core.truth_(inst_8136)){
var statearr_8227_8313 = state_8223__$1;
(statearr_8227_8313[(1)] = (22));

} else {
var statearr_8228_8314 = state_8223__$1;
(statearr_8228_8314[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (27))){
var inst_8164 = (state_8223[(9)]);
var inst_8166 = (state_8223[(10)]);
var inst_8095 = (state_8223[(11)]);
var inst_8171 = (state_8223[(12)]);
var inst_8171__$1 = cljs.core._nth.call(null,inst_8164,inst_8166);
var inst_8172 = cljs.core.async.put_BANG_.call(null,inst_8171__$1,inst_8095,done);
var state_8223__$1 = (function (){var statearr_8229 = state_8223;
(statearr_8229[(12)] = inst_8171__$1);

return statearr_8229;
})();
if(cljs.core.truth_(inst_8172)){
var statearr_8230_8315 = state_8223__$1;
(statearr_8230_8315[(1)] = (30));

} else {
var statearr_8231_8316 = state_8223__$1;
(statearr_8231_8316[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (1))){
var state_8223__$1 = state_8223;
var statearr_8232_8317 = state_8223__$1;
(statearr_8232_8317[(2)] = null);

(statearr_8232_8317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (24))){
var inst_8124 = (state_8223[(7)]);
var inst_8141 = (state_8223[(2)]);
var inst_8142 = cljs.core.next.call(null,inst_8124);
var inst_8104 = inst_8142;
var inst_8105 = null;
var inst_8106 = (0);
var inst_8107 = (0);
var state_8223__$1 = (function (){var statearr_8233 = state_8223;
(statearr_8233[(13)] = inst_8141);

(statearr_8233[(14)] = inst_8106);

(statearr_8233[(15)] = inst_8105);

(statearr_8233[(16)] = inst_8107);

(statearr_8233[(17)] = inst_8104);

return statearr_8233;
})();
var statearr_8234_8318 = state_8223__$1;
(statearr_8234_8318[(2)] = null);

(statearr_8234_8318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (39))){
var state_8223__$1 = state_8223;
var statearr_8238_8319 = state_8223__$1;
(statearr_8238_8319[(2)] = null);

(statearr_8238_8319[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (4))){
var inst_8095 = (state_8223[(11)]);
var inst_8095__$1 = (state_8223[(2)]);
var inst_8096 = (inst_8095__$1 == null);
var state_8223__$1 = (function (){var statearr_8239 = state_8223;
(statearr_8239[(11)] = inst_8095__$1);

return statearr_8239;
})();
if(cljs.core.truth_(inst_8096)){
var statearr_8240_8320 = state_8223__$1;
(statearr_8240_8320[(1)] = (5));

} else {
var statearr_8241_8321 = state_8223__$1;
(statearr_8241_8321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (15))){
var inst_8106 = (state_8223[(14)]);
var inst_8105 = (state_8223[(15)]);
var inst_8107 = (state_8223[(16)]);
var inst_8104 = (state_8223[(17)]);
var inst_8120 = (state_8223[(2)]);
var inst_8121 = (inst_8107 + (1));
var tmp8235 = inst_8106;
var tmp8236 = inst_8105;
var tmp8237 = inst_8104;
var inst_8104__$1 = tmp8237;
var inst_8105__$1 = tmp8236;
var inst_8106__$1 = tmp8235;
var inst_8107__$1 = inst_8121;
var state_8223__$1 = (function (){var statearr_8242 = state_8223;
(statearr_8242[(14)] = inst_8106__$1);

(statearr_8242[(15)] = inst_8105__$1);

(statearr_8242[(16)] = inst_8107__$1);

(statearr_8242[(18)] = inst_8120);

(statearr_8242[(17)] = inst_8104__$1);

return statearr_8242;
})();
var statearr_8243_8322 = state_8223__$1;
(statearr_8243_8322[(2)] = null);

(statearr_8243_8322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (21))){
var inst_8145 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8247_8323 = state_8223__$1;
(statearr_8247_8323[(2)] = inst_8145);

(statearr_8247_8323[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (31))){
var inst_8171 = (state_8223[(12)]);
var inst_8175 = done.call(null,null);
var inst_8176 = cljs.core.async.untap_STAR_.call(null,m,inst_8171);
var state_8223__$1 = (function (){var statearr_8248 = state_8223;
(statearr_8248[(19)] = inst_8175);

return statearr_8248;
})();
var statearr_8249_8324 = state_8223__$1;
(statearr_8249_8324[(2)] = inst_8176);

(statearr_8249_8324[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (32))){
var inst_8164 = (state_8223[(9)]);
var inst_8166 = (state_8223[(10)]);
var inst_8163 = (state_8223[(20)]);
var inst_8165 = (state_8223[(21)]);
var inst_8178 = (state_8223[(2)]);
var inst_8179 = (inst_8166 + (1));
var tmp8244 = inst_8164;
var tmp8245 = inst_8163;
var tmp8246 = inst_8165;
var inst_8163__$1 = tmp8245;
var inst_8164__$1 = tmp8244;
var inst_8165__$1 = tmp8246;
var inst_8166__$1 = inst_8179;
var state_8223__$1 = (function (){var statearr_8250 = state_8223;
(statearr_8250[(9)] = inst_8164__$1);

(statearr_8250[(10)] = inst_8166__$1);

(statearr_8250[(22)] = inst_8178);

(statearr_8250[(20)] = inst_8163__$1);

(statearr_8250[(21)] = inst_8165__$1);

return statearr_8250;
})();
var statearr_8251_8325 = state_8223__$1;
(statearr_8251_8325[(2)] = null);

(statearr_8251_8325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (40))){
var inst_8191 = (state_8223[(23)]);
var inst_8195 = done.call(null,null);
var inst_8196 = cljs.core.async.untap_STAR_.call(null,m,inst_8191);
var state_8223__$1 = (function (){var statearr_8252 = state_8223;
(statearr_8252[(24)] = inst_8195);

return statearr_8252;
})();
var statearr_8253_8326 = state_8223__$1;
(statearr_8253_8326[(2)] = inst_8196);

(statearr_8253_8326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (33))){
var inst_8182 = (state_8223[(25)]);
var inst_8184 = cljs.core.chunked_seq_QMARK_.call(null,inst_8182);
var state_8223__$1 = state_8223;
if(inst_8184){
var statearr_8254_8327 = state_8223__$1;
(statearr_8254_8327[(1)] = (36));

} else {
var statearr_8255_8328 = state_8223__$1;
(statearr_8255_8328[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (13))){
var inst_8114 = (state_8223[(26)]);
var inst_8117 = cljs.core.async.close_BANG_.call(null,inst_8114);
var state_8223__$1 = state_8223;
var statearr_8256_8329 = state_8223__$1;
(statearr_8256_8329[(2)] = inst_8117);

(statearr_8256_8329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (22))){
var inst_8135 = (state_8223[(8)]);
var inst_8138 = cljs.core.async.close_BANG_.call(null,inst_8135);
var state_8223__$1 = state_8223;
var statearr_8257_8330 = state_8223__$1;
(statearr_8257_8330[(2)] = inst_8138);

(statearr_8257_8330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (36))){
var inst_8182 = (state_8223[(25)]);
var inst_8186 = cljs.core.chunk_first.call(null,inst_8182);
var inst_8187 = cljs.core.chunk_rest.call(null,inst_8182);
var inst_8188 = cljs.core.count.call(null,inst_8186);
var inst_8163 = inst_8187;
var inst_8164 = inst_8186;
var inst_8165 = inst_8188;
var inst_8166 = (0);
var state_8223__$1 = (function (){var statearr_8258 = state_8223;
(statearr_8258[(9)] = inst_8164);

(statearr_8258[(10)] = inst_8166);

(statearr_8258[(20)] = inst_8163);

(statearr_8258[(21)] = inst_8165);

return statearr_8258;
})();
var statearr_8259_8331 = state_8223__$1;
(statearr_8259_8331[(2)] = null);

(statearr_8259_8331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (41))){
var inst_8182 = (state_8223[(25)]);
var inst_8198 = (state_8223[(2)]);
var inst_8199 = cljs.core.next.call(null,inst_8182);
var inst_8163 = inst_8199;
var inst_8164 = null;
var inst_8165 = (0);
var inst_8166 = (0);
var state_8223__$1 = (function (){var statearr_8260 = state_8223;
(statearr_8260[(9)] = inst_8164);

(statearr_8260[(10)] = inst_8166);

(statearr_8260[(27)] = inst_8198);

(statearr_8260[(20)] = inst_8163);

(statearr_8260[(21)] = inst_8165);

return statearr_8260;
})();
var statearr_8261_8332 = state_8223__$1;
(statearr_8261_8332[(2)] = null);

(statearr_8261_8332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (43))){
var state_8223__$1 = state_8223;
var statearr_8262_8333 = state_8223__$1;
(statearr_8262_8333[(2)] = null);

(statearr_8262_8333[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (29))){
var inst_8207 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8263_8334 = state_8223__$1;
(statearr_8263_8334[(2)] = inst_8207);

(statearr_8263_8334[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (44))){
var inst_8216 = (state_8223[(2)]);
var state_8223__$1 = (function (){var statearr_8264 = state_8223;
(statearr_8264[(28)] = inst_8216);

return statearr_8264;
})();
var statearr_8265_8335 = state_8223__$1;
(statearr_8265_8335[(2)] = null);

(statearr_8265_8335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (6))){
var inst_8155 = (state_8223[(29)]);
var inst_8154 = cljs.core.deref.call(null,cs);
var inst_8155__$1 = cljs.core.keys.call(null,inst_8154);
var inst_8156 = cljs.core.count.call(null,inst_8155__$1);
var inst_8157 = cljs.core.reset_BANG_.call(null,dctr,inst_8156);
var inst_8162 = cljs.core.seq.call(null,inst_8155__$1);
var inst_8163 = inst_8162;
var inst_8164 = null;
var inst_8165 = (0);
var inst_8166 = (0);
var state_8223__$1 = (function (){var statearr_8266 = state_8223;
(statearr_8266[(9)] = inst_8164);

(statearr_8266[(10)] = inst_8166);

(statearr_8266[(30)] = inst_8157);

(statearr_8266[(20)] = inst_8163);

(statearr_8266[(29)] = inst_8155__$1);

(statearr_8266[(21)] = inst_8165);

return statearr_8266;
})();
var statearr_8267_8336 = state_8223__$1;
(statearr_8267_8336[(2)] = null);

(statearr_8267_8336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (28))){
var inst_8163 = (state_8223[(20)]);
var inst_8182 = (state_8223[(25)]);
var inst_8182__$1 = cljs.core.seq.call(null,inst_8163);
var state_8223__$1 = (function (){var statearr_8268 = state_8223;
(statearr_8268[(25)] = inst_8182__$1);

return statearr_8268;
})();
if(inst_8182__$1){
var statearr_8269_8337 = state_8223__$1;
(statearr_8269_8337[(1)] = (33));

} else {
var statearr_8270_8338 = state_8223__$1;
(statearr_8270_8338[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (25))){
var inst_8166 = (state_8223[(10)]);
var inst_8165 = (state_8223[(21)]);
var inst_8168 = (inst_8166 < inst_8165);
var inst_8169 = inst_8168;
var state_8223__$1 = state_8223;
if(cljs.core.truth_(inst_8169)){
var statearr_8271_8339 = state_8223__$1;
(statearr_8271_8339[(1)] = (27));

} else {
var statearr_8272_8340 = state_8223__$1;
(statearr_8272_8340[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (34))){
var state_8223__$1 = state_8223;
var statearr_8273_8341 = state_8223__$1;
(statearr_8273_8341[(2)] = null);

(statearr_8273_8341[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (17))){
var state_8223__$1 = state_8223;
var statearr_8274_8342 = state_8223__$1;
(statearr_8274_8342[(2)] = null);

(statearr_8274_8342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (3))){
var inst_8221 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8223__$1,inst_8221);
} else {
if((state_val_8224 === (12))){
var inst_8150 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8275_8343 = state_8223__$1;
(statearr_8275_8343[(2)] = inst_8150);

(statearr_8275_8343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (2))){
var state_8223__$1 = state_8223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8223__$1,(4),ch);
} else {
if((state_val_8224 === (23))){
var state_8223__$1 = state_8223;
var statearr_8276_8344 = state_8223__$1;
(statearr_8276_8344[(2)] = null);

(statearr_8276_8344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (35))){
var inst_8205 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8277_8345 = state_8223__$1;
(statearr_8277_8345[(2)] = inst_8205);

(statearr_8277_8345[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (19))){
var inst_8124 = (state_8223[(7)]);
var inst_8128 = cljs.core.chunk_first.call(null,inst_8124);
var inst_8129 = cljs.core.chunk_rest.call(null,inst_8124);
var inst_8130 = cljs.core.count.call(null,inst_8128);
var inst_8104 = inst_8129;
var inst_8105 = inst_8128;
var inst_8106 = inst_8130;
var inst_8107 = (0);
var state_8223__$1 = (function (){var statearr_8278 = state_8223;
(statearr_8278[(14)] = inst_8106);

(statearr_8278[(15)] = inst_8105);

(statearr_8278[(16)] = inst_8107);

(statearr_8278[(17)] = inst_8104);

return statearr_8278;
})();
var statearr_8279_8346 = state_8223__$1;
(statearr_8279_8346[(2)] = null);

(statearr_8279_8346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (11))){
var inst_8124 = (state_8223[(7)]);
var inst_8104 = (state_8223[(17)]);
var inst_8124__$1 = cljs.core.seq.call(null,inst_8104);
var state_8223__$1 = (function (){var statearr_8280 = state_8223;
(statearr_8280[(7)] = inst_8124__$1);

return statearr_8280;
})();
if(inst_8124__$1){
var statearr_8281_8347 = state_8223__$1;
(statearr_8281_8347[(1)] = (16));

} else {
var statearr_8282_8348 = state_8223__$1;
(statearr_8282_8348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (9))){
var inst_8152 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8283_8349 = state_8223__$1;
(statearr_8283_8349[(2)] = inst_8152);

(statearr_8283_8349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (5))){
var inst_8102 = cljs.core.deref.call(null,cs);
var inst_8103 = cljs.core.seq.call(null,inst_8102);
var inst_8104 = inst_8103;
var inst_8105 = null;
var inst_8106 = (0);
var inst_8107 = (0);
var state_8223__$1 = (function (){var statearr_8284 = state_8223;
(statearr_8284[(14)] = inst_8106);

(statearr_8284[(15)] = inst_8105);

(statearr_8284[(16)] = inst_8107);

(statearr_8284[(17)] = inst_8104);

return statearr_8284;
})();
var statearr_8285_8350 = state_8223__$1;
(statearr_8285_8350[(2)] = null);

(statearr_8285_8350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (14))){
var state_8223__$1 = state_8223;
var statearr_8286_8351 = state_8223__$1;
(statearr_8286_8351[(2)] = null);

(statearr_8286_8351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (45))){
var inst_8213 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8287_8352 = state_8223__$1;
(statearr_8287_8352[(2)] = inst_8213);

(statearr_8287_8352[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (26))){
var inst_8155 = (state_8223[(29)]);
var inst_8209 = (state_8223[(2)]);
var inst_8210 = cljs.core.seq.call(null,inst_8155);
var state_8223__$1 = (function (){var statearr_8288 = state_8223;
(statearr_8288[(31)] = inst_8209);

return statearr_8288;
})();
if(inst_8210){
var statearr_8289_8353 = state_8223__$1;
(statearr_8289_8353[(1)] = (42));

} else {
var statearr_8290_8354 = state_8223__$1;
(statearr_8290_8354[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (16))){
var inst_8124 = (state_8223[(7)]);
var inst_8126 = cljs.core.chunked_seq_QMARK_.call(null,inst_8124);
var state_8223__$1 = state_8223;
if(inst_8126){
var statearr_8291_8355 = state_8223__$1;
(statearr_8291_8355[(1)] = (19));

} else {
var statearr_8292_8356 = state_8223__$1;
(statearr_8292_8356[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (38))){
var inst_8202 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8293_8357 = state_8223__$1;
(statearr_8293_8357[(2)] = inst_8202);

(statearr_8293_8357[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (30))){
var state_8223__$1 = state_8223;
var statearr_8294_8358 = state_8223__$1;
(statearr_8294_8358[(2)] = null);

(statearr_8294_8358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (10))){
var inst_8105 = (state_8223[(15)]);
var inst_8107 = (state_8223[(16)]);
var inst_8113 = cljs.core._nth.call(null,inst_8105,inst_8107);
var inst_8114 = cljs.core.nth.call(null,inst_8113,(0),null);
var inst_8115 = cljs.core.nth.call(null,inst_8113,(1),null);
var state_8223__$1 = (function (){var statearr_8295 = state_8223;
(statearr_8295[(26)] = inst_8114);

return statearr_8295;
})();
if(cljs.core.truth_(inst_8115)){
var statearr_8296_8359 = state_8223__$1;
(statearr_8296_8359[(1)] = (13));

} else {
var statearr_8297_8360 = state_8223__$1;
(statearr_8297_8360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (18))){
var inst_8148 = (state_8223[(2)]);
var state_8223__$1 = state_8223;
var statearr_8298_8361 = state_8223__$1;
(statearr_8298_8361[(2)] = inst_8148);

(statearr_8298_8361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (42))){
var state_8223__$1 = state_8223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8223__$1,(45),dchan);
} else {
if((state_val_8224 === (37))){
var inst_8191 = (state_8223[(23)]);
var inst_8095 = (state_8223[(11)]);
var inst_8182 = (state_8223[(25)]);
var inst_8191__$1 = cljs.core.first.call(null,inst_8182);
var inst_8192 = cljs.core.async.put_BANG_.call(null,inst_8191__$1,inst_8095,done);
var state_8223__$1 = (function (){var statearr_8299 = state_8223;
(statearr_8299[(23)] = inst_8191__$1);

return statearr_8299;
})();
if(cljs.core.truth_(inst_8192)){
var statearr_8300_8362 = state_8223__$1;
(statearr_8300_8362[(1)] = (39));

} else {
var statearr_8301_8363 = state_8223__$1;
(statearr_8301_8363[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8224 === (8))){
var inst_8106 = (state_8223[(14)]);
var inst_8107 = (state_8223[(16)]);
var inst_8109 = (inst_8107 < inst_8106);
var inst_8110 = inst_8109;
var state_8223__$1 = state_8223;
if(cljs.core.truth_(inst_8110)){
var statearr_8302_8364 = state_8223__$1;
(statearr_8302_8364[(1)] = (10));

} else {
var statearr_8303_8365 = state_8223__$1;
(statearr_8303_8365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___8311,cs,m,dchan,dctr,done))
;
return ((function (switch__6872__auto__,c__6893__auto___8311,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6873__auto__ = null;
var cljs$core$async$mult_$_state_machine__6873__auto____0 = (function (){
var statearr_8307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8307[(0)] = cljs$core$async$mult_$_state_machine__6873__auto__);

(statearr_8307[(1)] = (1));

return statearr_8307;
});
var cljs$core$async$mult_$_state_machine__6873__auto____1 = (function (state_8223){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_8223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e8308){if((e8308 instanceof Object)){
var ex__6876__auto__ = e8308;
var statearr_8309_8366 = state_8223;
(statearr_8309_8366[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8367 = state_8223;
state_8223 = G__8367;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6873__auto__ = function(state_8223){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6873__auto____1.call(this,state_8223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6873__auto____0;
cljs$core$async$mult_$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6873__auto____1;
return cljs$core$async$mult_$_state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___8311,cs,m,dchan,dctr,done))
})();
var state__6895__auto__ = (function (){var statearr_8310 = f__6894__auto__.call(null);
(statearr_8310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___8311);

return statearr_8310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___8311,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8368 = [];
var len__5621__auto___8371 = arguments.length;
var i__5622__auto___8372 = (0);
while(true){
if((i__5622__auto___8372 < len__5621__auto___8371)){
args8368.push((arguments[i__5622__auto___8372]));

var G__8373 = (i__5622__auto___8372 + (1));
i__5622__auto___8372 = G__8373;
continue;
} else {
}
break;
}

var G__8370 = args8368.length;
switch (G__8370) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8368.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m);
} else {
var m__5219__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,state_map);
} else {
var m__5219__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5218__auto__ = (((m == null))?null:m);
var m__5219__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,m,mode);
} else {
var m__5219__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___8385 = arguments.length;
var i__5622__auto___8386 = (0);
while(true){
if((i__5622__auto___8386 < len__5621__auto___8385)){
args__5628__auto__.push((arguments[i__5622__auto___8386]));

var G__8387 = (i__5622__auto___8386 + (1));
i__5622__auto___8386 = G__8387;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((3) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5629__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8379){
var map__8380 = p__8379;
var map__8380__$1 = ((((!((map__8380 == null)))?((((map__8380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8380):map__8380);
var opts = map__8380__$1;
var statearr_8382_8388 = state;
(statearr_8382_8388[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8380,map__8380__$1,opts){
return (function (val){
var statearr_8383_8389 = state;
(statearr_8383_8389[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8380,map__8380__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8384_8390 = state;
(statearr_8384_8390[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8375){
var G__8376 = cljs.core.first.call(null,seq8375);
var seq8375__$1 = cljs.core.next.call(null,seq8375);
var G__8377 = cljs.core.first.call(null,seq8375__$1);
var seq8375__$2 = cljs.core.next.call(null,seq8375__$1);
var G__8378 = cljs.core.first.call(null,seq8375__$2);
var seq8375__$3 = cljs.core.next.call(null,seq8375__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8376,G__8377,G__8378,seq8375__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8554 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8555){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8555 = meta8555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8556,meta8555__$1){
var self__ = this;
var _8556__$1 = this;
return (new cljs.core.async.t_cljs$core$async8554(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8555__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8556){
var self__ = this;
var _8556__$1 = this;
return self__.meta8555;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8555","meta8555",-1106810580,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8554";

cljs.core.async.t_cljs$core$async8554.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async8554");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async8554 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8554(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8555){
return (new cljs.core.async.t_cljs$core$async8554(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8555));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8554(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6893__auto___8717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___8717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___8717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8654){
var state_val_8655 = (state_8654[(1)]);
if((state_val_8655 === (7))){
var inst_8572 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
var statearr_8656_8718 = state_8654__$1;
(statearr_8656_8718[(2)] = inst_8572);

(statearr_8656_8718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (20))){
var inst_8584 = (state_8654[(7)]);
var state_8654__$1 = state_8654;
var statearr_8657_8719 = state_8654__$1;
(statearr_8657_8719[(2)] = inst_8584);

(statearr_8657_8719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (27))){
var state_8654__$1 = state_8654;
var statearr_8658_8720 = state_8654__$1;
(statearr_8658_8720[(2)] = null);

(statearr_8658_8720[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (1))){
var inst_8560 = (state_8654[(8)]);
var inst_8560__$1 = calc_state.call(null);
var inst_8562 = (inst_8560__$1 == null);
var inst_8563 = cljs.core.not.call(null,inst_8562);
var state_8654__$1 = (function (){var statearr_8659 = state_8654;
(statearr_8659[(8)] = inst_8560__$1);

return statearr_8659;
})();
if(inst_8563){
var statearr_8660_8721 = state_8654__$1;
(statearr_8660_8721[(1)] = (2));

} else {
var statearr_8661_8722 = state_8654__$1;
(statearr_8661_8722[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (24))){
var inst_8628 = (state_8654[(9)]);
var inst_8607 = (state_8654[(10)]);
var inst_8614 = (state_8654[(11)]);
var inst_8628__$1 = inst_8607.call(null,inst_8614);
var state_8654__$1 = (function (){var statearr_8662 = state_8654;
(statearr_8662[(9)] = inst_8628__$1);

return statearr_8662;
})();
if(cljs.core.truth_(inst_8628__$1)){
var statearr_8663_8723 = state_8654__$1;
(statearr_8663_8723[(1)] = (29));

} else {
var statearr_8664_8724 = state_8654__$1;
(statearr_8664_8724[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (4))){
var inst_8575 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
if(cljs.core.truth_(inst_8575)){
var statearr_8665_8725 = state_8654__$1;
(statearr_8665_8725[(1)] = (8));

} else {
var statearr_8666_8726 = state_8654__$1;
(statearr_8666_8726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (15))){
var inst_8601 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
if(cljs.core.truth_(inst_8601)){
var statearr_8667_8727 = state_8654__$1;
(statearr_8667_8727[(1)] = (19));

} else {
var statearr_8668_8728 = state_8654__$1;
(statearr_8668_8728[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (21))){
var inst_8606 = (state_8654[(12)]);
var inst_8606__$1 = (state_8654[(2)]);
var inst_8607 = cljs.core.get.call(null,inst_8606__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8608 = cljs.core.get.call(null,inst_8606__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8609 = cljs.core.get.call(null,inst_8606__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8654__$1 = (function (){var statearr_8669 = state_8654;
(statearr_8669[(13)] = inst_8608);

(statearr_8669[(10)] = inst_8607);

(statearr_8669[(12)] = inst_8606__$1);

return statearr_8669;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8654__$1,(22),inst_8609);
} else {
if((state_val_8655 === (31))){
var inst_8636 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
if(cljs.core.truth_(inst_8636)){
var statearr_8670_8729 = state_8654__$1;
(statearr_8670_8729[(1)] = (32));

} else {
var statearr_8671_8730 = state_8654__$1;
(statearr_8671_8730[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (32))){
var inst_8613 = (state_8654[(14)]);
var state_8654__$1 = state_8654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8654__$1,(35),out,inst_8613);
} else {
if((state_val_8655 === (33))){
var inst_8606 = (state_8654[(12)]);
var inst_8584 = inst_8606;
var state_8654__$1 = (function (){var statearr_8672 = state_8654;
(statearr_8672[(7)] = inst_8584);

return statearr_8672;
})();
var statearr_8673_8731 = state_8654__$1;
(statearr_8673_8731[(2)] = null);

(statearr_8673_8731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (13))){
var inst_8584 = (state_8654[(7)]);
var inst_8591 = inst_8584.cljs$lang$protocol_mask$partition0$;
var inst_8592 = (inst_8591 & (64));
var inst_8593 = inst_8584.cljs$core$ISeq$;
var inst_8594 = (inst_8592) || (inst_8593);
var state_8654__$1 = state_8654;
if(cljs.core.truth_(inst_8594)){
var statearr_8674_8732 = state_8654__$1;
(statearr_8674_8732[(1)] = (16));

} else {
var statearr_8675_8733 = state_8654__$1;
(statearr_8675_8733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (22))){
var inst_8613 = (state_8654[(14)]);
var inst_8614 = (state_8654[(11)]);
var inst_8612 = (state_8654[(2)]);
var inst_8613__$1 = cljs.core.nth.call(null,inst_8612,(0),null);
var inst_8614__$1 = cljs.core.nth.call(null,inst_8612,(1),null);
var inst_8615 = (inst_8613__$1 == null);
var inst_8616 = cljs.core._EQ_.call(null,inst_8614__$1,change);
var inst_8617 = (inst_8615) || (inst_8616);
var state_8654__$1 = (function (){var statearr_8676 = state_8654;
(statearr_8676[(14)] = inst_8613__$1);

(statearr_8676[(11)] = inst_8614__$1);

return statearr_8676;
})();
if(cljs.core.truth_(inst_8617)){
var statearr_8677_8734 = state_8654__$1;
(statearr_8677_8734[(1)] = (23));

} else {
var statearr_8678_8735 = state_8654__$1;
(statearr_8678_8735[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (36))){
var inst_8606 = (state_8654[(12)]);
var inst_8584 = inst_8606;
var state_8654__$1 = (function (){var statearr_8679 = state_8654;
(statearr_8679[(7)] = inst_8584);

return statearr_8679;
})();
var statearr_8680_8736 = state_8654__$1;
(statearr_8680_8736[(2)] = null);

(statearr_8680_8736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (29))){
var inst_8628 = (state_8654[(9)]);
var state_8654__$1 = state_8654;
var statearr_8681_8737 = state_8654__$1;
(statearr_8681_8737[(2)] = inst_8628);

(statearr_8681_8737[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (6))){
var state_8654__$1 = state_8654;
var statearr_8682_8738 = state_8654__$1;
(statearr_8682_8738[(2)] = false);

(statearr_8682_8738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (28))){
var inst_8624 = (state_8654[(2)]);
var inst_8625 = calc_state.call(null);
var inst_8584 = inst_8625;
var state_8654__$1 = (function (){var statearr_8683 = state_8654;
(statearr_8683[(15)] = inst_8624);

(statearr_8683[(7)] = inst_8584);

return statearr_8683;
})();
var statearr_8684_8739 = state_8654__$1;
(statearr_8684_8739[(2)] = null);

(statearr_8684_8739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (25))){
var inst_8650 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
var statearr_8685_8740 = state_8654__$1;
(statearr_8685_8740[(2)] = inst_8650);

(statearr_8685_8740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (34))){
var inst_8648 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
var statearr_8686_8741 = state_8654__$1;
(statearr_8686_8741[(2)] = inst_8648);

(statearr_8686_8741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (17))){
var state_8654__$1 = state_8654;
var statearr_8687_8742 = state_8654__$1;
(statearr_8687_8742[(2)] = false);

(statearr_8687_8742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (3))){
var state_8654__$1 = state_8654;
var statearr_8688_8743 = state_8654__$1;
(statearr_8688_8743[(2)] = false);

(statearr_8688_8743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (12))){
var inst_8652 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8654__$1,inst_8652);
} else {
if((state_val_8655 === (2))){
var inst_8560 = (state_8654[(8)]);
var inst_8565 = inst_8560.cljs$lang$protocol_mask$partition0$;
var inst_8566 = (inst_8565 & (64));
var inst_8567 = inst_8560.cljs$core$ISeq$;
var inst_8568 = (inst_8566) || (inst_8567);
var state_8654__$1 = state_8654;
if(cljs.core.truth_(inst_8568)){
var statearr_8689_8744 = state_8654__$1;
(statearr_8689_8744[(1)] = (5));

} else {
var statearr_8690_8745 = state_8654__$1;
(statearr_8690_8745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (23))){
var inst_8613 = (state_8654[(14)]);
var inst_8619 = (inst_8613 == null);
var state_8654__$1 = state_8654;
if(cljs.core.truth_(inst_8619)){
var statearr_8691_8746 = state_8654__$1;
(statearr_8691_8746[(1)] = (26));

} else {
var statearr_8692_8747 = state_8654__$1;
(statearr_8692_8747[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (35))){
var inst_8639 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
if(cljs.core.truth_(inst_8639)){
var statearr_8693_8748 = state_8654__$1;
(statearr_8693_8748[(1)] = (36));

} else {
var statearr_8694_8749 = state_8654__$1;
(statearr_8694_8749[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (19))){
var inst_8584 = (state_8654[(7)]);
var inst_8603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8584);
var state_8654__$1 = state_8654;
var statearr_8695_8750 = state_8654__$1;
(statearr_8695_8750[(2)] = inst_8603);

(statearr_8695_8750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (11))){
var inst_8584 = (state_8654[(7)]);
var inst_8588 = (inst_8584 == null);
var inst_8589 = cljs.core.not.call(null,inst_8588);
var state_8654__$1 = state_8654;
if(inst_8589){
var statearr_8696_8751 = state_8654__$1;
(statearr_8696_8751[(1)] = (13));

} else {
var statearr_8697_8752 = state_8654__$1;
(statearr_8697_8752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (9))){
var inst_8560 = (state_8654[(8)]);
var state_8654__$1 = state_8654;
var statearr_8698_8753 = state_8654__$1;
(statearr_8698_8753[(2)] = inst_8560);

(statearr_8698_8753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (5))){
var state_8654__$1 = state_8654;
var statearr_8699_8754 = state_8654__$1;
(statearr_8699_8754[(2)] = true);

(statearr_8699_8754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (14))){
var state_8654__$1 = state_8654;
var statearr_8700_8755 = state_8654__$1;
(statearr_8700_8755[(2)] = false);

(statearr_8700_8755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (26))){
var inst_8614 = (state_8654[(11)]);
var inst_8621 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8614);
var state_8654__$1 = state_8654;
var statearr_8701_8756 = state_8654__$1;
(statearr_8701_8756[(2)] = inst_8621);

(statearr_8701_8756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (16))){
var state_8654__$1 = state_8654;
var statearr_8702_8757 = state_8654__$1;
(statearr_8702_8757[(2)] = true);

(statearr_8702_8757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (38))){
var inst_8644 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
var statearr_8703_8758 = state_8654__$1;
(statearr_8703_8758[(2)] = inst_8644);

(statearr_8703_8758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (30))){
var inst_8608 = (state_8654[(13)]);
var inst_8607 = (state_8654[(10)]);
var inst_8614 = (state_8654[(11)]);
var inst_8631 = cljs.core.empty_QMARK_.call(null,inst_8607);
var inst_8632 = inst_8608.call(null,inst_8614);
var inst_8633 = cljs.core.not.call(null,inst_8632);
var inst_8634 = (inst_8631) && (inst_8633);
var state_8654__$1 = state_8654;
var statearr_8704_8759 = state_8654__$1;
(statearr_8704_8759[(2)] = inst_8634);

(statearr_8704_8759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (10))){
var inst_8560 = (state_8654[(8)]);
var inst_8580 = (state_8654[(2)]);
var inst_8581 = cljs.core.get.call(null,inst_8580,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8582 = cljs.core.get.call(null,inst_8580,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8583 = cljs.core.get.call(null,inst_8580,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8584 = inst_8560;
var state_8654__$1 = (function (){var statearr_8705 = state_8654;
(statearr_8705[(16)] = inst_8581);

(statearr_8705[(17)] = inst_8583);

(statearr_8705[(18)] = inst_8582);

(statearr_8705[(7)] = inst_8584);

return statearr_8705;
})();
var statearr_8706_8760 = state_8654__$1;
(statearr_8706_8760[(2)] = null);

(statearr_8706_8760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (18))){
var inst_8598 = (state_8654[(2)]);
var state_8654__$1 = state_8654;
var statearr_8707_8761 = state_8654__$1;
(statearr_8707_8761[(2)] = inst_8598);

(statearr_8707_8761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (37))){
var state_8654__$1 = state_8654;
var statearr_8708_8762 = state_8654__$1;
(statearr_8708_8762[(2)] = null);

(statearr_8708_8762[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8655 === (8))){
var inst_8560 = (state_8654[(8)]);
var inst_8577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8560);
var state_8654__$1 = state_8654;
var statearr_8709_8763 = state_8654__$1;
(statearr_8709_8763[(2)] = inst_8577);

(statearr_8709_8763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___8717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6872__auto__,c__6893__auto___8717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6873__auto__ = null;
var cljs$core$async$mix_$_state_machine__6873__auto____0 = (function (){
var statearr_8713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8713[(0)] = cljs$core$async$mix_$_state_machine__6873__auto__);

(statearr_8713[(1)] = (1));

return statearr_8713;
});
var cljs$core$async$mix_$_state_machine__6873__auto____1 = (function (state_8654){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_8654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e8714){if((e8714 instanceof Object)){
var ex__6876__auto__ = e8714;
var statearr_8715_8764 = state_8654;
(statearr_8715_8764[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8765 = state_8654;
state_8654 = G__8765;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6873__auto__ = function(state_8654){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6873__auto____1.call(this,state_8654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6873__auto____0;
cljs$core$async$mix_$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6873__auto____1;
return cljs$core$async$mix_$_state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___8717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6895__auto__ = (function (){var statearr_8716 = f__6894__auto__.call(null);
(statearr_8716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___8717);

return statearr_8716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___8717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5219__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p,v,ch);
} else {
var m__5219__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args8766 = [];
var len__5621__auto___8769 = arguments.length;
var i__5622__auto___8770 = (0);
while(true){
if((i__5622__auto___8770 < len__5621__auto___8769)){
args8766.push((arguments[i__5622__auto___8770]));

var G__8771 = (i__5622__auto___8770 + (1));
i__5622__auto___8770 = G__8771;
continue;
} else {
}
break;
}

var G__8768 = args8766.length;
switch (G__8768) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8766.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p);
} else {
var m__5219__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5218__auto__ = (((p == null))?null:p);
var m__5219__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,p,v);
} else {
var m__5219__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args8774 = [];
var len__5621__auto___8899 = arguments.length;
var i__5622__auto___8900 = (0);
while(true){
if((i__5622__auto___8900 < len__5621__auto___8899)){
args8774.push((arguments[i__5622__auto___8900]));

var G__8901 = (i__5622__auto___8900 + (1));
i__5622__auto___8900 = G__8901;
continue;
} else {
}
break;
}

var G__8776 = args8774.length;
switch (G__8776) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8774.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4563__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4563__auto__,mults){
return (function (p1__8773_SHARP_){
if(cljs.core.truth_(p1__8773_SHARP_.call(null,topic))){
return p1__8773_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8773_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4563__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8778 = meta8778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8779,meta8778__$1){
var self__ = this;
var _8779__$1 = this;
return (new cljs.core.async.t_cljs$core$async8777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8778__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8779){
var self__ = this;
var _8779__$1 = this;
return self__.meta8778;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8778","meta8778",-2028594660,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8777";

cljs.core.async.t_cljs$core$async8777.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async8777");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async8777 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8778){
return (new cljs.core.async.t_cljs$core$async8777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8778));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6893__auto___8903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___8903,mults,ensure_mult,p){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___8903,mults,ensure_mult,p){
return (function (state_8851){
var state_val_8852 = (state_8851[(1)]);
if((state_val_8852 === (7))){
var inst_8847 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
var statearr_8853_8904 = state_8851__$1;
(statearr_8853_8904[(2)] = inst_8847);

(statearr_8853_8904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (20))){
var state_8851__$1 = state_8851;
var statearr_8854_8905 = state_8851__$1;
(statearr_8854_8905[(2)] = null);

(statearr_8854_8905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (1))){
var state_8851__$1 = state_8851;
var statearr_8855_8906 = state_8851__$1;
(statearr_8855_8906[(2)] = null);

(statearr_8855_8906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (24))){
var inst_8830 = (state_8851[(7)]);
var inst_8839 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8830);
var state_8851__$1 = state_8851;
var statearr_8856_8907 = state_8851__$1;
(statearr_8856_8907[(2)] = inst_8839);

(statearr_8856_8907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (4))){
var inst_8782 = (state_8851[(8)]);
var inst_8782__$1 = (state_8851[(2)]);
var inst_8783 = (inst_8782__$1 == null);
var state_8851__$1 = (function (){var statearr_8857 = state_8851;
(statearr_8857[(8)] = inst_8782__$1);

return statearr_8857;
})();
if(cljs.core.truth_(inst_8783)){
var statearr_8858_8908 = state_8851__$1;
(statearr_8858_8908[(1)] = (5));

} else {
var statearr_8859_8909 = state_8851__$1;
(statearr_8859_8909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (15))){
var inst_8824 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
var statearr_8860_8910 = state_8851__$1;
(statearr_8860_8910[(2)] = inst_8824);

(statearr_8860_8910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (21))){
var inst_8844 = (state_8851[(2)]);
var state_8851__$1 = (function (){var statearr_8861 = state_8851;
(statearr_8861[(9)] = inst_8844);

return statearr_8861;
})();
var statearr_8862_8911 = state_8851__$1;
(statearr_8862_8911[(2)] = null);

(statearr_8862_8911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (13))){
var inst_8806 = (state_8851[(10)]);
var inst_8808 = cljs.core.chunked_seq_QMARK_.call(null,inst_8806);
var state_8851__$1 = state_8851;
if(inst_8808){
var statearr_8863_8912 = state_8851__$1;
(statearr_8863_8912[(1)] = (16));

} else {
var statearr_8864_8913 = state_8851__$1;
(statearr_8864_8913[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (22))){
var inst_8836 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
if(cljs.core.truth_(inst_8836)){
var statearr_8865_8914 = state_8851__$1;
(statearr_8865_8914[(1)] = (23));

} else {
var statearr_8866_8915 = state_8851__$1;
(statearr_8866_8915[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (6))){
var inst_8830 = (state_8851[(7)]);
var inst_8782 = (state_8851[(8)]);
var inst_8832 = (state_8851[(11)]);
var inst_8830__$1 = topic_fn.call(null,inst_8782);
var inst_8831 = cljs.core.deref.call(null,mults);
var inst_8832__$1 = cljs.core.get.call(null,inst_8831,inst_8830__$1);
var state_8851__$1 = (function (){var statearr_8867 = state_8851;
(statearr_8867[(7)] = inst_8830__$1);

(statearr_8867[(11)] = inst_8832__$1);

return statearr_8867;
})();
if(cljs.core.truth_(inst_8832__$1)){
var statearr_8868_8916 = state_8851__$1;
(statearr_8868_8916[(1)] = (19));

} else {
var statearr_8869_8917 = state_8851__$1;
(statearr_8869_8917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (25))){
var inst_8841 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
var statearr_8870_8918 = state_8851__$1;
(statearr_8870_8918[(2)] = inst_8841);

(statearr_8870_8918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (17))){
var inst_8806 = (state_8851[(10)]);
var inst_8815 = cljs.core.first.call(null,inst_8806);
var inst_8816 = cljs.core.async.muxch_STAR_.call(null,inst_8815);
var inst_8817 = cljs.core.async.close_BANG_.call(null,inst_8816);
var inst_8818 = cljs.core.next.call(null,inst_8806);
var inst_8792 = inst_8818;
var inst_8793 = null;
var inst_8794 = (0);
var inst_8795 = (0);
var state_8851__$1 = (function (){var statearr_8871 = state_8851;
(statearr_8871[(12)] = inst_8792);

(statearr_8871[(13)] = inst_8793);

(statearr_8871[(14)] = inst_8794);

(statearr_8871[(15)] = inst_8817);

(statearr_8871[(16)] = inst_8795);

return statearr_8871;
})();
var statearr_8872_8919 = state_8851__$1;
(statearr_8872_8919[(2)] = null);

(statearr_8872_8919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (3))){
var inst_8849 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8851__$1,inst_8849);
} else {
if((state_val_8852 === (12))){
var inst_8826 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
var statearr_8873_8920 = state_8851__$1;
(statearr_8873_8920[(2)] = inst_8826);

(statearr_8873_8920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (2))){
var state_8851__$1 = state_8851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8851__$1,(4),ch);
} else {
if((state_val_8852 === (23))){
var state_8851__$1 = state_8851;
var statearr_8874_8921 = state_8851__$1;
(statearr_8874_8921[(2)] = null);

(statearr_8874_8921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (19))){
var inst_8782 = (state_8851[(8)]);
var inst_8832 = (state_8851[(11)]);
var inst_8834 = cljs.core.async.muxch_STAR_.call(null,inst_8832);
var state_8851__$1 = state_8851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8851__$1,(22),inst_8834,inst_8782);
} else {
if((state_val_8852 === (11))){
var inst_8806 = (state_8851[(10)]);
var inst_8792 = (state_8851[(12)]);
var inst_8806__$1 = cljs.core.seq.call(null,inst_8792);
var state_8851__$1 = (function (){var statearr_8875 = state_8851;
(statearr_8875[(10)] = inst_8806__$1);

return statearr_8875;
})();
if(inst_8806__$1){
var statearr_8876_8922 = state_8851__$1;
(statearr_8876_8922[(1)] = (13));

} else {
var statearr_8877_8923 = state_8851__$1;
(statearr_8877_8923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (9))){
var inst_8828 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
var statearr_8878_8924 = state_8851__$1;
(statearr_8878_8924[(2)] = inst_8828);

(statearr_8878_8924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (5))){
var inst_8789 = cljs.core.deref.call(null,mults);
var inst_8790 = cljs.core.vals.call(null,inst_8789);
var inst_8791 = cljs.core.seq.call(null,inst_8790);
var inst_8792 = inst_8791;
var inst_8793 = null;
var inst_8794 = (0);
var inst_8795 = (0);
var state_8851__$1 = (function (){var statearr_8879 = state_8851;
(statearr_8879[(12)] = inst_8792);

(statearr_8879[(13)] = inst_8793);

(statearr_8879[(14)] = inst_8794);

(statearr_8879[(16)] = inst_8795);

return statearr_8879;
})();
var statearr_8880_8925 = state_8851__$1;
(statearr_8880_8925[(2)] = null);

(statearr_8880_8925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (14))){
var state_8851__$1 = state_8851;
var statearr_8884_8926 = state_8851__$1;
(statearr_8884_8926[(2)] = null);

(statearr_8884_8926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (16))){
var inst_8806 = (state_8851[(10)]);
var inst_8810 = cljs.core.chunk_first.call(null,inst_8806);
var inst_8811 = cljs.core.chunk_rest.call(null,inst_8806);
var inst_8812 = cljs.core.count.call(null,inst_8810);
var inst_8792 = inst_8811;
var inst_8793 = inst_8810;
var inst_8794 = inst_8812;
var inst_8795 = (0);
var state_8851__$1 = (function (){var statearr_8885 = state_8851;
(statearr_8885[(12)] = inst_8792);

(statearr_8885[(13)] = inst_8793);

(statearr_8885[(14)] = inst_8794);

(statearr_8885[(16)] = inst_8795);

return statearr_8885;
})();
var statearr_8886_8927 = state_8851__$1;
(statearr_8886_8927[(2)] = null);

(statearr_8886_8927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (10))){
var inst_8792 = (state_8851[(12)]);
var inst_8793 = (state_8851[(13)]);
var inst_8794 = (state_8851[(14)]);
var inst_8795 = (state_8851[(16)]);
var inst_8800 = cljs.core._nth.call(null,inst_8793,inst_8795);
var inst_8801 = cljs.core.async.muxch_STAR_.call(null,inst_8800);
var inst_8802 = cljs.core.async.close_BANG_.call(null,inst_8801);
var inst_8803 = (inst_8795 + (1));
var tmp8881 = inst_8792;
var tmp8882 = inst_8793;
var tmp8883 = inst_8794;
var inst_8792__$1 = tmp8881;
var inst_8793__$1 = tmp8882;
var inst_8794__$1 = tmp8883;
var inst_8795__$1 = inst_8803;
var state_8851__$1 = (function (){var statearr_8887 = state_8851;
(statearr_8887[(12)] = inst_8792__$1);

(statearr_8887[(13)] = inst_8793__$1);

(statearr_8887[(14)] = inst_8794__$1);

(statearr_8887[(16)] = inst_8795__$1);

(statearr_8887[(17)] = inst_8802);

return statearr_8887;
})();
var statearr_8888_8928 = state_8851__$1;
(statearr_8888_8928[(2)] = null);

(statearr_8888_8928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (18))){
var inst_8821 = (state_8851[(2)]);
var state_8851__$1 = state_8851;
var statearr_8889_8929 = state_8851__$1;
(statearr_8889_8929[(2)] = inst_8821);

(statearr_8889_8929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8852 === (8))){
var inst_8794 = (state_8851[(14)]);
var inst_8795 = (state_8851[(16)]);
var inst_8797 = (inst_8795 < inst_8794);
var inst_8798 = inst_8797;
var state_8851__$1 = state_8851;
if(cljs.core.truth_(inst_8798)){
var statearr_8890_8930 = state_8851__$1;
(statearr_8890_8930[(1)] = (10));

} else {
var statearr_8891_8931 = state_8851__$1;
(statearr_8891_8931[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___8903,mults,ensure_mult,p))
;
return ((function (switch__6872__auto__,c__6893__auto___8903,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_8895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8895[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_8895[(1)] = (1));

return statearr_8895;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_8851){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_8851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e8896){if((e8896 instanceof Object)){
var ex__6876__auto__ = e8896;
var statearr_8897_8932 = state_8851;
(statearr_8897_8932[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8933 = state_8851;
state_8851 = G__8933;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_8851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_8851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___8903,mults,ensure_mult,p))
})();
var state__6895__auto__ = (function (){var statearr_8898 = f__6894__auto__.call(null);
(statearr_8898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___8903);

return statearr_8898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___8903,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args8934 = [];
var len__5621__auto___8937 = arguments.length;
var i__5622__auto___8938 = (0);
while(true){
if((i__5622__auto___8938 < len__5621__auto___8937)){
args8934.push((arguments[i__5622__auto___8938]));

var G__8939 = (i__5622__auto___8938 + (1));
i__5622__auto___8938 = G__8939;
continue;
} else {
}
break;
}

var G__8936 = args8934.length;
switch (G__8936) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8934.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args8941 = [];
var len__5621__auto___8944 = arguments.length;
var i__5622__auto___8945 = (0);
while(true){
if((i__5622__auto___8945 < len__5621__auto___8944)){
args8941.push((arguments[i__5622__auto___8945]));

var G__8946 = (i__5622__auto___8945 + (1));
i__5622__auto___8945 = G__8946;
continue;
} else {
}
break;
}

var G__8943 = args8941.length;
switch (G__8943) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8941.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args8948 = [];
var len__5621__auto___9019 = arguments.length;
var i__5622__auto___9020 = (0);
while(true){
if((i__5622__auto___9020 < len__5621__auto___9019)){
args8948.push((arguments[i__5622__auto___9020]));

var G__9021 = (i__5622__auto___9020 + (1));
i__5622__auto___9020 = G__9021;
continue;
} else {
}
break;
}

var G__8950 = args8948.length;
switch (G__8950) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8948.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6893__auto___9023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___9023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___9023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8989){
var state_val_8990 = (state_8989[(1)]);
if((state_val_8990 === (7))){
var state_8989__$1 = state_8989;
var statearr_8991_9024 = state_8989__$1;
(statearr_8991_9024[(2)] = null);

(statearr_8991_9024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (1))){
var state_8989__$1 = state_8989;
var statearr_8992_9025 = state_8989__$1;
(statearr_8992_9025[(2)] = null);

(statearr_8992_9025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (4))){
var inst_8953 = (state_8989[(7)]);
var inst_8955 = (inst_8953 < cnt);
var state_8989__$1 = state_8989;
if(cljs.core.truth_(inst_8955)){
var statearr_8993_9026 = state_8989__$1;
(statearr_8993_9026[(1)] = (6));

} else {
var statearr_8994_9027 = state_8989__$1;
(statearr_8994_9027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (15))){
var inst_8985 = (state_8989[(2)]);
var state_8989__$1 = state_8989;
var statearr_8995_9028 = state_8989__$1;
(statearr_8995_9028[(2)] = inst_8985);

(statearr_8995_9028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (13))){
var inst_8978 = cljs.core.async.close_BANG_.call(null,out);
var state_8989__$1 = state_8989;
var statearr_8996_9029 = state_8989__$1;
(statearr_8996_9029[(2)] = inst_8978);

(statearr_8996_9029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (6))){
var state_8989__$1 = state_8989;
var statearr_8997_9030 = state_8989__$1;
(statearr_8997_9030[(2)] = null);

(statearr_8997_9030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (3))){
var inst_8987 = (state_8989[(2)]);
var state_8989__$1 = state_8989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8989__$1,inst_8987);
} else {
if((state_val_8990 === (12))){
var inst_8975 = (state_8989[(8)]);
var inst_8975__$1 = (state_8989[(2)]);
var inst_8976 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_8975__$1);
var state_8989__$1 = (function (){var statearr_8998 = state_8989;
(statearr_8998[(8)] = inst_8975__$1);

return statearr_8998;
})();
if(cljs.core.truth_(inst_8976)){
var statearr_8999_9031 = state_8989__$1;
(statearr_8999_9031[(1)] = (13));

} else {
var statearr_9000_9032 = state_8989__$1;
(statearr_9000_9032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (2))){
var inst_8952 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_8953 = (0);
var state_8989__$1 = (function (){var statearr_9001 = state_8989;
(statearr_9001[(9)] = inst_8952);

(statearr_9001[(7)] = inst_8953);

return statearr_9001;
})();
var statearr_9002_9033 = state_8989__$1;
(statearr_9002_9033[(2)] = null);

(statearr_9002_9033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (11))){
var inst_8953 = (state_8989[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_8989,(10),Object,null,(9));
var inst_8962 = chs__$1.call(null,inst_8953);
var inst_8963 = done.call(null,inst_8953);
var inst_8964 = cljs.core.async.take_BANG_.call(null,inst_8962,inst_8963);
var state_8989__$1 = state_8989;
var statearr_9003_9034 = state_8989__$1;
(statearr_9003_9034[(2)] = inst_8964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (9))){
var inst_8953 = (state_8989[(7)]);
var inst_8966 = (state_8989[(2)]);
var inst_8967 = (inst_8953 + (1));
var inst_8953__$1 = inst_8967;
var state_8989__$1 = (function (){var statearr_9004 = state_8989;
(statearr_9004[(10)] = inst_8966);

(statearr_9004[(7)] = inst_8953__$1);

return statearr_9004;
})();
var statearr_9005_9035 = state_8989__$1;
(statearr_9005_9035[(2)] = null);

(statearr_9005_9035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (5))){
var inst_8973 = (state_8989[(2)]);
var state_8989__$1 = (function (){var statearr_9006 = state_8989;
(statearr_9006[(11)] = inst_8973);

return statearr_9006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8989__$1,(12),dchan);
} else {
if((state_val_8990 === (14))){
var inst_8975 = (state_8989[(8)]);
var inst_8980 = cljs.core.apply.call(null,f,inst_8975);
var state_8989__$1 = state_8989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8989__$1,(16),out,inst_8980);
} else {
if((state_val_8990 === (16))){
var inst_8982 = (state_8989[(2)]);
var state_8989__$1 = (function (){var statearr_9007 = state_8989;
(statearr_9007[(12)] = inst_8982);

return statearr_9007;
})();
var statearr_9008_9036 = state_8989__$1;
(statearr_9008_9036[(2)] = null);

(statearr_9008_9036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (10))){
var inst_8957 = (state_8989[(2)]);
var inst_8958 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_8989__$1 = (function (){var statearr_9009 = state_8989;
(statearr_9009[(13)] = inst_8957);

return statearr_9009;
})();
var statearr_9010_9037 = state_8989__$1;
(statearr_9010_9037[(2)] = inst_8958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8990 === (8))){
var inst_8971 = (state_8989[(2)]);
var state_8989__$1 = state_8989;
var statearr_9011_9038 = state_8989__$1;
(statearr_9011_9038[(2)] = inst_8971);

(statearr_9011_9038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___9023,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6872__auto__,c__6893__auto___9023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_9015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9015[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_9015[(1)] = (1));

return statearr_9015;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_8989){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_8989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9016){if((e9016 instanceof Object)){
var ex__6876__auto__ = e9016;
var statearr_9017_9039 = state_8989;
(statearr_9017_9039[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9040 = state_8989;
state_8989 = G__9040;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_8989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_8989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___9023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6895__auto__ = (function (){var statearr_9018 = f__6894__auto__.call(null);
(statearr_9018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___9023);

return statearr_9018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___9023,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9042 = [];
var len__5621__auto___9098 = arguments.length;
var i__5622__auto___9099 = (0);
while(true){
if((i__5622__auto___9099 < len__5621__auto___9098)){
args9042.push((arguments[i__5622__auto___9099]));

var G__9100 = (i__5622__auto___9099 + (1));
i__5622__auto___9099 = G__9100;
continue;
} else {
}
break;
}

var G__9044 = args9042.length;
switch (G__9044) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9042.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6893__auto___9102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___9102,out){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___9102,out){
return (function (state_9074){
var state_val_9075 = (state_9074[(1)]);
if((state_val_9075 === (7))){
var inst_9053 = (state_9074[(7)]);
var inst_9054 = (state_9074[(8)]);
var inst_9053__$1 = (state_9074[(2)]);
var inst_9054__$1 = cljs.core.nth.call(null,inst_9053__$1,(0),null);
var inst_9055 = cljs.core.nth.call(null,inst_9053__$1,(1),null);
var inst_9056 = (inst_9054__$1 == null);
var state_9074__$1 = (function (){var statearr_9076 = state_9074;
(statearr_9076[(7)] = inst_9053__$1);

(statearr_9076[(9)] = inst_9055);

(statearr_9076[(8)] = inst_9054__$1);

return statearr_9076;
})();
if(cljs.core.truth_(inst_9056)){
var statearr_9077_9103 = state_9074__$1;
(statearr_9077_9103[(1)] = (8));

} else {
var statearr_9078_9104 = state_9074__$1;
(statearr_9078_9104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (1))){
var inst_9045 = cljs.core.vec.call(null,chs);
var inst_9046 = inst_9045;
var state_9074__$1 = (function (){var statearr_9079 = state_9074;
(statearr_9079[(10)] = inst_9046);

return statearr_9079;
})();
var statearr_9080_9105 = state_9074__$1;
(statearr_9080_9105[(2)] = null);

(statearr_9080_9105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (4))){
var inst_9046 = (state_9074[(10)]);
var state_9074__$1 = state_9074;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9074__$1,(7),inst_9046);
} else {
if((state_val_9075 === (6))){
var inst_9070 = (state_9074[(2)]);
var state_9074__$1 = state_9074;
var statearr_9081_9106 = state_9074__$1;
(statearr_9081_9106[(2)] = inst_9070);

(statearr_9081_9106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (3))){
var inst_9072 = (state_9074[(2)]);
var state_9074__$1 = state_9074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9074__$1,inst_9072);
} else {
if((state_val_9075 === (2))){
var inst_9046 = (state_9074[(10)]);
var inst_9048 = cljs.core.count.call(null,inst_9046);
var inst_9049 = (inst_9048 > (0));
var state_9074__$1 = state_9074;
if(cljs.core.truth_(inst_9049)){
var statearr_9083_9107 = state_9074__$1;
(statearr_9083_9107[(1)] = (4));

} else {
var statearr_9084_9108 = state_9074__$1;
(statearr_9084_9108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (11))){
var inst_9046 = (state_9074[(10)]);
var inst_9063 = (state_9074[(2)]);
var tmp9082 = inst_9046;
var inst_9046__$1 = tmp9082;
var state_9074__$1 = (function (){var statearr_9085 = state_9074;
(statearr_9085[(10)] = inst_9046__$1);

(statearr_9085[(11)] = inst_9063);

return statearr_9085;
})();
var statearr_9086_9109 = state_9074__$1;
(statearr_9086_9109[(2)] = null);

(statearr_9086_9109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (9))){
var inst_9054 = (state_9074[(8)]);
var state_9074__$1 = state_9074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9074__$1,(11),out,inst_9054);
} else {
if((state_val_9075 === (5))){
var inst_9068 = cljs.core.async.close_BANG_.call(null,out);
var state_9074__$1 = state_9074;
var statearr_9087_9110 = state_9074__$1;
(statearr_9087_9110[(2)] = inst_9068);

(statearr_9087_9110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (10))){
var inst_9066 = (state_9074[(2)]);
var state_9074__$1 = state_9074;
var statearr_9088_9111 = state_9074__$1;
(statearr_9088_9111[(2)] = inst_9066);

(statearr_9088_9111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (8))){
var inst_9053 = (state_9074[(7)]);
var inst_9046 = (state_9074[(10)]);
var inst_9055 = (state_9074[(9)]);
var inst_9054 = (state_9074[(8)]);
var inst_9058 = (function (){var cs = inst_9046;
var vec__9051 = inst_9053;
var v = inst_9054;
var c = inst_9055;
return ((function (cs,vec__9051,v,c,inst_9053,inst_9046,inst_9055,inst_9054,state_val_9075,c__6893__auto___9102,out){
return (function (p1__9041_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9041_SHARP_);
});
;})(cs,vec__9051,v,c,inst_9053,inst_9046,inst_9055,inst_9054,state_val_9075,c__6893__auto___9102,out))
})();
var inst_9059 = cljs.core.filterv.call(null,inst_9058,inst_9046);
var inst_9046__$1 = inst_9059;
var state_9074__$1 = (function (){var statearr_9089 = state_9074;
(statearr_9089[(10)] = inst_9046__$1);

return statearr_9089;
})();
var statearr_9090_9112 = state_9074__$1;
(statearr_9090_9112[(2)] = null);

(statearr_9090_9112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___9102,out))
;
return ((function (switch__6872__auto__,c__6893__auto___9102,out){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_9094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9094[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_9094[(1)] = (1));

return statearr_9094;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_9074){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_9074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9095){if((e9095 instanceof Object)){
var ex__6876__auto__ = e9095;
var statearr_9096_9113 = state_9074;
(statearr_9096_9113[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9114 = state_9074;
state_9074 = G__9114;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_9074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_9074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___9102,out))
})();
var state__6895__auto__ = (function (){var statearr_9097 = f__6894__auto__.call(null);
(statearr_9097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___9102);

return statearr_9097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___9102,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9115 = [];
var len__5621__auto___9164 = arguments.length;
var i__5622__auto___9165 = (0);
while(true){
if((i__5622__auto___9165 < len__5621__auto___9164)){
args9115.push((arguments[i__5622__auto___9165]));

var G__9166 = (i__5622__auto___9165 + (1));
i__5622__auto___9165 = G__9166;
continue;
} else {
}
break;
}

var G__9117 = args9115.length;
switch (G__9117) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9115.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6893__auto___9168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___9168,out){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___9168,out){
return (function (state_9141){
var state_val_9142 = (state_9141[(1)]);
if((state_val_9142 === (7))){
var inst_9123 = (state_9141[(7)]);
var inst_9123__$1 = (state_9141[(2)]);
var inst_9124 = (inst_9123__$1 == null);
var inst_9125 = cljs.core.not.call(null,inst_9124);
var state_9141__$1 = (function (){var statearr_9143 = state_9141;
(statearr_9143[(7)] = inst_9123__$1);

return statearr_9143;
})();
if(inst_9125){
var statearr_9144_9169 = state_9141__$1;
(statearr_9144_9169[(1)] = (8));

} else {
var statearr_9145_9170 = state_9141__$1;
(statearr_9145_9170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (1))){
var inst_9118 = (0);
var state_9141__$1 = (function (){var statearr_9146 = state_9141;
(statearr_9146[(8)] = inst_9118);

return statearr_9146;
})();
var statearr_9147_9171 = state_9141__$1;
(statearr_9147_9171[(2)] = null);

(statearr_9147_9171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (4))){
var state_9141__$1 = state_9141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9141__$1,(7),ch);
} else {
if((state_val_9142 === (6))){
var inst_9136 = (state_9141[(2)]);
var state_9141__$1 = state_9141;
var statearr_9148_9172 = state_9141__$1;
(statearr_9148_9172[(2)] = inst_9136);

(statearr_9148_9172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (3))){
var inst_9138 = (state_9141[(2)]);
var inst_9139 = cljs.core.async.close_BANG_.call(null,out);
var state_9141__$1 = (function (){var statearr_9149 = state_9141;
(statearr_9149[(9)] = inst_9138);

return statearr_9149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9141__$1,inst_9139);
} else {
if((state_val_9142 === (2))){
var inst_9118 = (state_9141[(8)]);
var inst_9120 = (inst_9118 < n);
var state_9141__$1 = state_9141;
if(cljs.core.truth_(inst_9120)){
var statearr_9150_9173 = state_9141__$1;
(statearr_9150_9173[(1)] = (4));

} else {
var statearr_9151_9174 = state_9141__$1;
(statearr_9151_9174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (11))){
var inst_9118 = (state_9141[(8)]);
var inst_9128 = (state_9141[(2)]);
var inst_9129 = (inst_9118 + (1));
var inst_9118__$1 = inst_9129;
var state_9141__$1 = (function (){var statearr_9152 = state_9141;
(statearr_9152[(8)] = inst_9118__$1);

(statearr_9152[(10)] = inst_9128);

return statearr_9152;
})();
var statearr_9153_9175 = state_9141__$1;
(statearr_9153_9175[(2)] = null);

(statearr_9153_9175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (9))){
var state_9141__$1 = state_9141;
var statearr_9154_9176 = state_9141__$1;
(statearr_9154_9176[(2)] = null);

(statearr_9154_9176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (5))){
var state_9141__$1 = state_9141;
var statearr_9155_9177 = state_9141__$1;
(statearr_9155_9177[(2)] = null);

(statearr_9155_9177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (10))){
var inst_9133 = (state_9141[(2)]);
var state_9141__$1 = state_9141;
var statearr_9156_9178 = state_9141__$1;
(statearr_9156_9178[(2)] = inst_9133);

(statearr_9156_9178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9142 === (8))){
var inst_9123 = (state_9141[(7)]);
var state_9141__$1 = state_9141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9141__$1,(11),out,inst_9123);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___9168,out))
;
return ((function (switch__6872__auto__,c__6893__auto___9168,out){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_9160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9160[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_9160[(1)] = (1));

return statearr_9160;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_9141){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_9141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9161){if((e9161 instanceof Object)){
var ex__6876__auto__ = e9161;
var statearr_9162_9179 = state_9141;
(statearr_9162_9179[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9180 = state_9141;
state_9141 = G__9180;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_9141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_9141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___9168,out))
})();
var state__6895__auto__ = (function (){var statearr_9163 = f__6894__auto__.call(null);
(statearr_9163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___9168);

return statearr_9163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___9168,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9188 = (function (map_LT_,f,ch,meta9189){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9189 = meta9189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9190,meta9189__$1){
var self__ = this;
var _9190__$1 = this;
return (new cljs.core.async.t_cljs$core$async9188(self__.map_LT_,self__.f,self__.ch,meta9189__$1));
});

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9190){
var self__ = this;
var _9190__$1 = this;
return self__.meta9189;
});

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9191 = (function (map_LT_,f,ch,meta9189,_,fn1,meta9192){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9189 = meta9189;
this._ = _;
this.fn1 = fn1;
this.meta9192 = meta9192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9193,meta9192__$1){
var self__ = this;
var _9193__$1 = this;
return (new cljs.core.async.t_cljs$core$async9191(self__.map_LT_,self__.f,self__.ch,self__.meta9189,self__._,self__.fn1,meta9192__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9193){
var self__ = this;
var _9193__$1 = this;
return self__.meta9192;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9191.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9181_SHARP_){
return f1.call(null,(((p1__9181_SHARP_ == null))?null:self__.f.call(null,p1__9181_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9191.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9189","meta9189",-1151517490,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9188","cljs.core.async/t_cljs$core$async9188",1712956451,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9192","meta9192",-1121142515,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9191";

cljs.core.async.t_cljs$core$async9191.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async9191");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9191 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9191(map_LT___$1,f__$1,ch__$1,meta9189__$1,___$2,fn1__$1,meta9192){
return (new cljs.core.async.t_cljs$core$async9191(map_LT___$1,f__$1,ch__$1,meta9189__$1,___$2,fn1__$1,meta9192));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9191(self__.map_LT_,self__.f,self__.ch,self__.meta9189,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4551__auto__ = ret;
if(cljs.core.truth_(and__4551__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4551__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9189","meta9189",-1151517490,null)], null);
});

cljs.core.async.t_cljs$core$async9188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9188";

cljs.core.async.t_cljs$core$async9188.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async9188");
});

cljs.core.async.__GT_t_cljs$core$async9188 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9188(map_LT___$1,f__$1,ch__$1,meta9189){
return (new cljs.core.async.t_cljs$core$async9188(map_LT___$1,f__$1,ch__$1,meta9189));
});

}

return (new cljs.core.async.t_cljs$core$async9188(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9197 = (function (map_GT_,f,ch,meta9198){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9198 = meta9198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9199,meta9198__$1){
var self__ = this;
var _9199__$1 = this;
return (new cljs.core.async.t_cljs$core$async9197(self__.map_GT_,self__.f,self__.ch,meta9198__$1));
});

cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9199){
var self__ = this;
var _9199__$1 = this;
return self__.meta9198;
});

cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9198","meta9198",-1477506413,null)], null);
});

cljs.core.async.t_cljs$core$async9197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9197";

cljs.core.async.t_cljs$core$async9197.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async9197");
});

cljs.core.async.__GT_t_cljs$core$async9197 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9197(map_GT___$1,f__$1,ch__$1,meta9198){
return (new cljs.core.async.t_cljs$core$async9197(map_GT___$1,f__$1,ch__$1,meta9198));
});

}

return (new cljs.core.async.t_cljs$core$async9197(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9203 = (function (filter_GT_,p,ch,meta9204){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9204 = meta9204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9205,meta9204__$1){
var self__ = this;
var _9205__$1 = this;
return (new cljs.core.async.t_cljs$core$async9203(self__.filter_GT_,self__.p,self__.ch,meta9204__$1));
});

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9205){
var self__ = this;
var _9205__$1 = this;
return self__.meta9204;
});

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9204","meta9204",1613180769,null)], null);
});

cljs.core.async.t_cljs$core$async9203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9203";

cljs.core.async.t_cljs$core$async9203.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"cljs.core.async/t_cljs$core$async9203");
});

cljs.core.async.__GT_t_cljs$core$async9203 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9203(filter_GT___$1,p__$1,ch__$1,meta9204){
return (new cljs.core.async.t_cljs$core$async9203(filter_GT___$1,p__$1,ch__$1,meta9204));
});

}

return (new cljs.core.async.t_cljs$core$async9203(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9206 = [];
var len__5621__auto___9250 = arguments.length;
var i__5622__auto___9251 = (0);
while(true){
if((i__5622__auto___9251 < len__5621__auto___9250)){
args9206.push((arguments[i__5622__auto___9251]));

var G__9252 = (i__5622__auto___9251 + (1));
i__5622__auto___9251 = G__9252;
continue;
} else {
}
break;
}

var G__9208 = args9206.length;
switch (G__9208) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9206.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6893__auto___9254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___9254,out){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___9254,out){
return (function (state_9229){
var state_val_9230 = (state_9229[(1)]);
if((state_val_9230 === (7))){
var inst_9225 = (state_9229[(2)]);
var state_9229__$1 = state_9229;
var statearr_9231_9255 = state_9229__$1;
(statearr_9231_9255[(2)] = inst_9225);

(statearr_9231_9255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (1))){
var state_9229__$1 = state_9229;
var statearr_9232_9256 = state_9229__$1;
(statearr_9232_9256[(2)] = null);

(statearr_9232_9256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (4))){
var inst_9211 = (state_9229[(7)]);
var inst_9211__$1 = (state_9229[(2)]);
var inst_9212 = (inst_9211__$1 == null);
var state_9229__$1 = (function (){var statearr_9233 = state_9229;
(statearr_9233[(7)] = inst_9211__$1);

return statearr_9233;
})();
if(cljs.core.truth_(inst_9212)){
var statearr_9234_9257 = state_9229__$1;
(statearr_9234_9257[(1)] = (5));

} else {
var statearr_9235_9258 = state_9229__$1;
(statearr_9235_9258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (6))){
var inst_9211 = (state_9229[(7)]);
var inst_9216 = p.call(null,inst_9211);
var state_9229__$1 = state_9229;
if(cljs.core.truth_(inst_9216)){
var statearr_9236_9259 = state_9229__$1;
(statearr_9236_9259[(1)] = (8));

} else {
var statearr_9237_9260 = state_9229__$1;
(statearr_9237_9260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (3))){
var inst_9227 = (state_9229[(2)]);
var state_9229__$1 = state_9229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9229__$1,inst_9227);
} else {
if((state_val_9230 === (2))){
var state_9229__$1 = state_9229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9229__$1,(4),ch);
} else {
if((state_val_9230 === (11))){
var inst_9219 = (state_9229[(2)]);
var state_9229__$1 = state_9229;
var statearr_9238_9261 = state_9229__$1;
(statearr_9238_9261[(2)] = inst_9219);

(statearr_9238_9261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (9))){
var state_9229__$1 = state_9229;
var statearr_9239_9262 = state_9229__$1;
(statearr_9239_9262[(2)] = null);

(statearr_9239_9262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (5))){
var inst_9214 = cljs.core.async.close_BANG_.call(null,out);
var state_9229__$1 = state_9229;
var statearr_9240_9263 = state_9229__$1;
(statearr_9240_9263[(2)] = inst_9214);

(statearr_9240_9263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (10))){
var inst_9222 = (state_9229[(2)]);
var state_9229__$1 = (function (){var statearr_9241 = state_9229;
(statearr_9241[(8)] = inst_9222);

return statearr_9241;
})();
var statearr_9242_9264 = state_9229__$1;
(statearr_9242_9264[(2)] = null);

(statearr_9242_9264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9230 === (8))){
var inst_9211 = (state_9229[(7)]);
var state_9229__$1 = state_9229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9229__$1,(11),out,inst_9211);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___9254,out))
;
return ((function (switch__6872__auto__,c__6893__auto___9254,out){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_9246 = [null,null,null,null,null,null,null,null,null];
(statearr_9246[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_9246[(1)] = (1));

return statearr_9246;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_9229){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_9229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9247){if((e9247 instanceof Object)){
var ex__6876__auto__ = e9247;
var statearr_9248_9265 = state_9229;
(statearr_9248_9265[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9266 = state_9229;
state_9229 = G__9266;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_9229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_9229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___9254,out))
})();
var state__6895__auto__ = (function (){var statearr_9249 = f__6894__auto__.call(null);
(statearr_9249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___9254);

return statearr_9249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___9254,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9267 = [];
var len__5621__auto___9270 = arguments.length;
var i__5622__auto___9271 = (0);
while(true){
if((i__5622__auto___9271 < len__5621__auto___9270)){
args9267.push((arguments[i__5622__auto___9271]));

var G__9272 = (i__5622__auto___9271 + (1));
i__5622__auto___9271 = G__9272;
continue;
} else {
}
break;
}

var G__9269 = args9267.length;
switch (G__9269) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9267.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto__){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto__){
return (function (state_9439){
var state_val_9440 = (state_9439[(1)]);
if((state_val_9440 === (7))){
var inst_9435 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
var statearr_9441_9482 = state_9439__$1;
(statearr_9441_9482[(2)] = inst_9435);

(statearr_9441_9482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (20))){
var inst_9405 = (state_9439[(7)]);
var inst_9416 = (state_9439[(2)]);
var inst_9417 = cljs.core.next.call(null,inst_9405);
var inst_9391 = inst_9417;
var inst_9392 = null;
var inst_9393 = (0);
var inst_9394 = (0);
var state_9439__$1 = (function (){var statearr_9442 = state_9439;
(statearr_9442[(8)] = inst_9394);

(statearr_9442[(9)] = inst_9392);

(statearr_9442[(10)] = inst_9416);

(statearr_9442[(11)] = inst_9391);

(statearr_9442[(12)] = inst_9393);

return statearr_9442;
})();
var statearr_9443_9483 = state_9439__$1;
(statearr_9443_9483[(2)] = null);

(statearr_9443_9483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (1))){
var state_9439__$1 = state_9439;
var statearr_9444_9484 = state_9439__$1;
(statearr_9444_9484[(2)] = null);

(statearr_9444_9484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (4))){
var inst_9380 = (state_9439[(13)]);
var inst_9380__$1 = (state_9439[(2)]);
var inst_9381 = (inst_9380__$1 == null);
var state_9439__$1 = (function (){var statearr_9445 = state_9439;
(statearr_9445[(13)] = inst_9380__$1);

return statearr_9445;
})();
if(cljs.core.truth_(inst_9381)){
var statearr_9446_9485 = state_9439__$1;
(statearr_9446_9485[(1)] = (5));

} else {
var statearr_9447_9486 = state_9439__$1;
(statearr_9447_9486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (15))){
var state_9439__$1 = state_9439;
var statearr_9451_9487 = state_9439__$1;
(statearr_9451_9487[(2)] = null);

(statearr_9451_9487[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (21))){
var state_9439__$1 = state_9439;
var statearr_9452_9488 = state_9439__$1;
(statearr_9452_9488[(2)] = null);

(statearr_9452_9488[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (13))){
var inst_9394 = (state_9439[(8)]);
var inst_9392 = (state_9439[(9)]);
var inst_9391 = (state_9439[(11)]);
var inst_9393 = (state_9439[(12)]);
var inst_9401 = (state_9439[(2)]);
var inst_9402 = (inst_9394 + (1));
var tmp9448 = inst_9392;
var tmp9449 = inst_9391;
var tmp9450 = inst_9393;
var inst_9391__$1 = tmp9449;
var inst_9392__$1 = tmp9448;
var inst_9393__$1 = tmp9450;
var inst_9394__$1 = inst_9402;
var state_9439__$1 = (function (){var statearr_9453 = state_9439;
(statearr_9453[(8)] = inst_9394__$1);

(statearr_9453[(9)] = inst_9392__$1);

(statearr_9453[(11)] = inst_9391__$1);

(statearr_9453[(12)] = inst_9393__$1);

(statearr_9453[(14)] = inst_9401);

return statearr_9453;
})();
var statearr_9454_9489 = state_9439__$1;
(statearr_9454_9489[(2)] = null);

(statearr_9454_9489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (22))){
var state_9439__$1 = state_9439;
var statearr_9455_9490 = state_9439__$1;
(statearr_9455_9490[(2)] = null);

(statearr_9455_9490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (6))){
var inst_9380 = (state_9439[(13)]);
var inst_9389 = f.call(null,inst_9380);
var inst_9390 = cljs.core.seq.call(null,inst_9389);
var inst_9391 = inst_9390;
var inst_9392 = null;
var inst_9393 = (0);
var inst_9394 = (0);
var state_9439__$1 = (function (){var statearr_9456 = state_9439;
(statearr_9456[(8)] = inst_9394);

(statearr_9456[(9)] = inst_9392);

(statearr_9456[(11)] = inst_9391);

(statearr_9456[(12)] = inst_9393);

return statearr_9456;
})();
var statearr_9457_9491 = state_9439__$1;
(statearr_9457_9491[(2)] = null);

(statearr_9457_9491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (17))){
var inst_9405 = (state_9439[(7)]);
var inst_9409 = cljs.core.chunk_first.call(null,inst_9405);
var inst_9410 = cljs.core.chunk_rest.call(null,inst_9405);
var inst_9411 = cljs.core.count.call(null,inst_9409);
var inst_9391 = inst_9410;
var inst_9392 = inst_9409;
var inst_9393 = inst_9411;
var inst_9394 = (0);
var state_9439__$1 = (function (){var statearr_9458 = state_9439;
(statearr_9458[(8)] = inst_9394);

(statearr_9458[(9)] = inst_9392);

(statearr_9458[(11)] = inst_9391);

(statearr_9458[(12)] = inst_9393);

return statearr_9458;
})();
var statearr_9459_9492 = state_9439__$1;
(statearr_9459_9492[(2)] = null);

(statearr_9459_9492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (3))){
var inst_9437 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9439__$1,inst_9437);
} else {
if((state_val_9440 === (12))){
var inst_9425 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
var statearr_9460_9493 = state_9439__$1;
(statearr_9460_9493[(2)] = inst_9425);

(statearr_9460_9493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (2))){
var state_9439__$1 = state_9439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9439__$1,(4),in$);
} else {
if((state_val_9440 === (23))){
var inst_9433 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
var statearr_9461_9494 = state_9439__$1;
(statearr_9461_9494[(2)] = inst_9433);

(statearr_9461_9494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (19))){
var inst_9420 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
var statearr_9462_9495 = state_9439__$1;
(statearr_9462_9495[(2)] = inst_9420);

(statearr_9462_9495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (11))){
var inst_9391 = (state_9439[(11)]);
var inst_9405 = (state_9439[(7)]);
var inst_9405__$1 = cljs.core.seq.call(null,inst_9391);
var state_9439__$1 = (function (){var statearr_9463 = state_9439;
(statearr_9463[(7)] = inst_9405__$1);

return statearr_9463;
})();
if(inst_9405__$1){
var statearr_9464_9496 = state_9439__$1;
(statearr_9464_9496[(1)] = (14));

} else {
var statearr_9465_9497 = state_9439__$1;
(statearr_9465_9497[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (9))){
var inst_9427 = (state_9439[(2)]);
var inst_9428 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9439__$1 = (function (){var statearr_9466 = state_9439;
(statearr_9466[(15)] = inst_9427);

return statearr_9466;
})();
if(cljs.core.truth_(inst_9428)){
var statearr_9467_9498 = state_9439__$1;
(statearr_9467_9498[(1)] = (21));

} else {
var statearr_9468_9499 = state_9439__$1;
(statearr_9468_9499[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (5))){
var inst_9383 = cljs.core.async.close_BANG_.call(null,out);
var state_9439__$1 = state_9439;
var statearr_9469_9500 = state_9439__$1;
(statearr_9469_9500[(2)] = inst_9383);

(statearr_9469_9500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (14))){
var inst_9405 = (state_9439[(7)]);
var inst_9407 = cljs.core.chunked_seq_QMARK_.call(null,inst_9405);
var state_9439__$1 = state_9439;
if(inst_9407){
var statearr_9470_9501 = state_9439__$1;
(statearr_9470_9501[(1)] = (17));

} else {
var statearr_9471_9502 = state_9439__$1;
(statearr_9471_9502[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (16))){
var inst_9423 = (state_9439[(2)]);
var state_9439__$1 = state_9439;
var statearr_9472_9503 = state_9439__$1;
(statearr_9472_9503[(2)] = inst_9423);

(statearr_9472_9503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9440 === (10))){
var inst_9394 = (state_9439[(8)]);
var inst_9392 = (state_9439[(9)]);
var inst_9399 = cljs.core._nth.call(null,inst_9392,inst_9394);
var state_9439__$1 = state_9439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9439__$1,(13),out,inst_9399);
} else {
if((state_val_9440 === (18))){
var inst_9405 = (state_9439[(7)]);
var inst_9414 = cljs.core.first.call(null,inst_9405);
var state_9439__$1 = state_9439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9439__$1,(20),out,inst_9414);
} else {
if((state_val_9440 === (8))){
var inst_9394 = (state_9439[(8)]);
var inst_9393 = (state_9439[(12)]);
var inst_9396 = (inst_9394 < inst_9393);
var inst_9397 = inst_9396;
var state_9439__$1 = state_9439;
if(cljs.core.truth_(inst_9397)){
var statearr_9473_9504 = state_9439__$1;
(statearr_9473_9504[(1)] = (10));

} else {
var statearr_9474_9505 = state_9439__$1;
(statearr_9474_9505[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto__))
;
return ((function (switch__6872__auto__,c__6893__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6873__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6873__auto____0 = (function (){
var statearr_9478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9478[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6873__auto__);

(statearr_9478[(1)] = (1));

return statearr_9478;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6873__auto____1 = (function (state_9439){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_9439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9479){if((e9479 instanceof Object)){
var ex__6876__auto__ = e9479;
var statearr_9480_9506 = state_9439;
(statearr_9480_9506[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9507 = state_9439;
state_9439 = G__9507;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6873__auto__ = function(state_9439){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6873__auto____1.call(this,state_9439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6873__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6873__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto__))
})();
var state__6895__auto__ = (function (){var statearr_9481 = f__6894__auto__.call(null);
(statearr_9481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto__);

return statearr_9481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto__))
);

return c__6893__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9508 = [];
var len__5621__auto___9511 = arguments.length;
var i__5622__auto___9512 = (0);
while(true){
if((i__5622__auto___9512 < len__5621__auto___9511)){
args9508.push((arguments[i__5622__auto___9512]));

var G__9513 = (i__5622__auto___9512 + (1));
i__5622__auto___9512 = G__9513;
continue;
} else {
}
break;
}

var G__9510 = args9508.length;
switch (G__9510) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9508.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args9515 = [];
var len__5621__auto___9518 = arguments.length;
var i__5622__auto___9519 = (0);
while(true){
if((i__5622__auto___9519 < len__5621__auto___9518)){
args9515.push((arguments[i__5622__auto___9519]));

var G__9520 = (i__5622__auto___9519 + (1));
i__5622__auto___9519 = G__9520;
continue;
} else {
}
break;
}

var G__9517 = args9515.length;
switch (G__9517) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9515.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args9522 = [];
var len__5621__auto___9573 = arguments.length;
var i__5622__auto___9574 = (0);
while(true){
if((i__5622__auto___9574 < len__5621__auto___9573)){
args9522.push((arguments[i__5622__auto___9574]));

var G__9575 = (i__5622__auto___9574 + (1));
i__5622__auto___9574 = G__9575;
continue;
} else {
}
break;
}

var G__9524 = args9522.length;
switch (G__9524) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9522.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6893__auto___9577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___9577,out){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___9577,out){
return (function (state_9548){
var state_val_9549 = (state_9548[(1)]);
if((state_val_9549 === (7))){
var inst_9543 = (state_9548[(2)]);
var state_9548__$1 = state_9548;
var statearr_9550_9578 = state_9548__$1;
(statearr_9550_9578[(2)] = inst_9543);

(statearr_9550_9578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (1))){
var inst_9525 = null;
var state_9548__$1 = (function (){var statearr_9551 = state_9548;
(statearr_9551[(7)] = inst_9525);

return statearr_9551;
})();
var statearr_9552_9579 = state_9548__$1;
(statearr_9552_9579[(2)] = null);

(statearr_9552_9579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (4))){
var inst_9528 = (state_9548[(8)]);
var inst_9528__$1 = (state_9548[(2)]);
var inst_9529 = (inst_9528__$1 == null);
var inst_9530 = cljs.core.not.call(null,inst_9529);
var state_9548__$1 = (function (){var statearr_9553 = state_9548;
(statearr_9553[(8)] = inst_9528__$1);

return statearr_9553;
})();
if(inst_9530){
var statearr_9554_9580 = state_9548__$1;
(statearr_9554_9580[(1)] = (5));

} else {
var statearr_9555_9581 = state_9548__$1;
(statearr_9555_9581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (6))){
var state_9548__$1 = state_9548;
var statearr_9556_9582 = state_9548__$1;
(statearr_9556_9582[(2)] = null);

(statearr_9556_9582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (3))){
var inst_9545 = (state_9548[(2)]);
var inst_9546 = cljs.core.async.close_BANG_.call(null,out);
var state_9548__$1 = (function (){var statearr_9557 = state_9548;
(statearr_9557[(9)] = inst_9545);

return statearr_9557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9548__$1,inst_9546);
} else {
if((state_val_9549 === (2))){
var state_9548__$1 = state_9548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9548__$1,(4),ch);
} else {
if((state_val_9549 === (11))){
var inst_9528 = (state_9548[(8)]);
var inst_9537 = (state_9548[(2)]);
var inst_9525 = inst_9528;
var state_9548__$1 = (function (){var statearr_9558 = state_9548;
(statearr_9558[(7)] = inst_9525);

(statearr_9558[(10)] = inst_9537);

return statearr_9558;
})();
var statearr_9559_9583 = state_9548__$1;
(statearr_9559_9583[(2)] = null);

(statearr_9559_9583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (9))){
var inst_9528 = (state_9548[(8)]);
var state_9548__$1 = state_9548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9548__$1,(11),out,inst_9528);
} else {
if((state_val_9549 === (5))){
var inst_9528 = (state_9548[(8)]);
var inst_9525 = (state_9548[(7)]);
var inst_9532 = cljs.core._EQ_.call(null,inst_9528,inst_9525);
var state_9548__$1 = state_9548;
if(inst_9532){
var statearr_9561_9584 = state_9548__$1;
(statearr_9561_9584[(1)] = (8));

} else {
var statearr_9562_9585 = state_9548__$1;
(statearr_9562_9585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (10))){
var inst_9540 = (state_9548[(2)]);
var state_9548__$1 = state_9548;
var statearr_9563_9586 = state_9548__$1;
(statearr_9563_9586[(2)] = inst_9540);

(statearr_9563_9586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (8))){
var inst_9525 = (state_9548[(7)]);
var tmp9560 = inst_9525;
var inst_9525__$1 = tmp9560;
var state_9548__$1 = (function (){var statearr_9564 = state_9548;
(statearr_9564[(7)] = inst_9525__$1);

return statearr_9564;
})();
var statearr_9565_9587 = state_9548__$1;
(statearr_9565_9587[(2)] = null);

(statearr_9565_9587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___9577,out))
;
return ((function (switch__6872__auto__,c__6893__auto___9577,out){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_9569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9569[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_9569[(1)] = (1));

return statearr_9569;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_9548){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_9548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9570){if((e9570 instanceof Object)){
var ex__6876__auto__ = e9570;
var statearr_9571_9588 = state_9548;
(statearr_9571_9588[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9589 = state_9548;
state_9548 = G__9589;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_9548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_9548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___9577,out))
})();
var state__6895__auto__ = (function (){var statearr_9572 = f__6894__auto__.call(null);
(statearr_9572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___9577);

return statearr_9572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___9577,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args9590 = [];
var len__5621__auto___9660 = arguments.length;
var i__5622__auto___9661 = (0);
while(true){
if((i__5622__auto___9661 < len__5621__auto___9660)){
args9590.push((arguments[i__5622__auto___9661]));

var G__9662 = (i__5622__auto___9661 + (1));
i__5622__auto___9661 = G__9662;
continue;
} else {
}
break;
}

var G__9592 = args9590.length;
switch (G__9592) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9590.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6893__auto___9664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___9664,out){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___9664,out){
return (function (state_9630){
var state_val_9631 = (state_9630[(1)]);
if((state_val_9631 === (7))){
var inst_9626 = (state_9630[(2)]);
var state_9630__$1 = state_9630;
var statearr_9632_9665 = state_9630__$1;
(statearr_9632_9665[(2)] = inst_9626);

(statearr_9632_9665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (1))){
var inst_9593 = (new Array(n));
var inst_9594 = inst_9593;
var inst_9595 = (0);
var state_9630__$1 = (function (){var statearr_9633 = state_9630;
(statearr_9633[(7)] = inst_9594);

(statearr_9633[(8)] = inst_9595);

return statearr_9633;
})();
var statearr_9634_9666 = state_9630__$1;
(statearr_9634_9666[(2)] = null);

(statearr_9634_9666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (4))){
var inst_9598 = (state_9630[(9)]);
var inst_9598__$1 = (state_9630[(2)]);
var inst_9599 = (inst_9598__$1 == null);
var inst_9600 = cljs.core.not.call(null,inst_9599);
var state_9630__$1 = (function (){var statearr_9635 = state_9630;
(statearr_9635[(9)] = inst_9598__$1);

return statearr_9635;
})();
if(inst_9600){
var statearr_9636_9667 = state_9630__$1;
(statearr_9636_9667[(1)] = (5));

} else {
var statearr_9637_9668 = state_9630__$1;
(statearr_9637_9668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (15))){
var inst_9620 = (state_9630[(2)]);
var state_9630__$1 = state_9630;
var statearr_9638_9669 = state_9630__$1;
(statearr_9638_9669[(2)] = inst_9620);

(statearr_9638_9669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (13))){
var state_9630__$1 = state_9630;
var statearr_9639_9670 = state_9630__$1;
(statearr_9639_9670[(2)] = null);

(statearr_9639_9670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (6))){
var inst_9595 = (state_9630[(8)]);
var inst_9616 = (inst_9595 > (0));
var state_9630__$1 = state_9630;
if(cljs.core.truth_(inst_9616)){
var statearr_9640_9671 = state_9630__$1;
(statearr_9640_9671[(1)] = (12));

} else {
var statearr_9641_9672 = state_9630__$1;
(statearr_9641_9672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (3))){
var inst_9628 = (state_9630[(2)]);
var state_9630__$1 = state_9630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9630__$1,inst_9628);
} else {
if((state_val_9631 === (12))){
var inst_9594 = (state_9630[(7)]);
var inst_9618 = cljs.core.vec.call(null,inst_9594);
var state_9630__$1 = state_9630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9630__$1,(15),out,inst_9618);
} else {
if((state_val_9631 === (2))){
var state_9630__$1 = state_9630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9630__$1,(4),ch);
} else {
if((state_val_9631 === (11))){
var inst_9610 = (state_9630[(2)]);
var inst_9611 = (new Array(n));
var inst_9594 = inst_9611;
var inst_9595 = (0);
var state_9630__$1 = (function (){var statearr_9642 = state_9630;
(statearr_9642[(7)] = inst_9594);

(statearr_9642[(8)] = inst_9595);

(statearr_9642[(10)] = inst_9610);

return statearr_9642;
})();
var statearr_9643_9673 = state_9630__$1;
(statearr_9643_9673[(2)] = null);

(statearr_9643_9673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (9))){
var inst_9594 = (state_9630[(7)]);
var inst_9608 = cljs.core.vec.call(null,inst_9594);
var state_9630__$1 = state_9630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9630__$1,(11),out,inst_9608);
} else {
if((state_val_9631 === (5))){
var inst_9594 = (state_9630[(7)]);
var inst_9603 = (state_9630[(11)]);
var inst_9595 = (state_9630[(8)]);
var inst_9598 = (state_9630[(9)]);
var inst_9602 = (inst_9594[inst_9595] = inst_9598);
var inst_9603__$1 = (inst_9595 + (1));
var inst_9604 = (inst_9603__$1 < n);
var state_9630__$1 = (function (){var statearr_9644 = state_9630;
(statearr_9644[(11)] = inst_9603__$1);

(statearr_9644[(12)] = inst_9602);

return statearr_9644;
})();
if(cljs.core.truth_(inst_9604)){
var statearr_9645_9674 = state_9630__$1;
(statearr_9645_9674[(1)] = (8));

} else {
var statearr_9646_9675 = state_9630__$1;
(statearr_9646_9675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (14))){
var inst_9623 = (state_9630[(2)]);
var inst_9624 = cljs.core.async.close_BANG_.call(null,out);
var state_9630__$1 = (function (){var statearr_9648 = state_9630;
(statearr_9648[(13)] = inst_9623);

return statearr_9648;
})();
var statearr_9649_9676 = state_9630__$1;
(statearr_9649_9676[(2)] = inst_9624);

(statearr_9649_9676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (10))){
var inst_9614 = (state_9630[(2)]);
var state_9630__$1 = state_9630;
var statearr_9650_9677 = state_9630__$1;
(statearr_9650_9677[(2)] = inst_9614);

(statearr_9650_9677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9631 === (8))){
var inst_9594 = (state_9630[(7)]);
var inst_9603 = (state_9630[(11)]);
var tmp9647 = inst_9594;
var inst_9594__$1 = tmp9647;
var inst_9595 = inst_9603;
var state_9630__$1 = (function (){var statearr_9651 = state_9630;
(statearr_9651[(7)] = inst_9594__$1);

(statearr_9651[(8)] = inst_9595);

return statearr_9651;
})();
var statearr_9652_9678 = state_9630__$1;
(statearr_9652_9678[(2)] = null);

(statearr_9652_9678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___9664,out))
;
return ((function (switch__6872__auto__,c__6893__auto___9664,out){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_9656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9656[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_9656[(1)] = (1));

return statearr_9656;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_9630){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_9630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9657){if((e9657 instanceof Object)){
var ex__6876__auto__ = e9657;
var statearr_9658_9679 = state_9630;
(statearr_9658_9679[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9680 = state_9630;
state_9630 = G__9680;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_9630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_9630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___9664,out))
})();
var state__6895__auto__ = (function (){var statearr_9659 = f__6894__auto__.call(null);
(statearr_9659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___9664);

return statearr_9659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___9664,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args9681 = [];
var len__5621__auto___9755 = arguments.length;
var i__5622__auto___9756 = (0);
while(true){
if((i__5622__auto___9756 < len__5621__auto___9755)){
args9681.push((arguments[i__5622__auto___9756]));

var G__9757 = (i__5622__auto___9756 + (1));
i__5622__auto___9756 = G__9757;
continue;
} else {
}
break;
}

var G__9683 = args9681.length;
switch (G__9683) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9681.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6893__auto___9759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto___9759,out){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto___9759,out){
return (function (state_9725){
var state_val_9726 = (state_9725[(1)]);
if((state_val_9726 === (7))){
var inst_9721 = (state_9725[(2)]);
var state_9725__$1 = state_9725;
var statearr_9727_9760 = state_9725__$1;
(statearr_9727_9760[(2)] = inst_9721);

(statearr_9727_9760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (1))){
var inst_9684 = [];
var inst_9685 = inst_9684;
var inst_9686 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9725__$1 = (function (){var statearr_9728 = state_9725;
(statearr_9728[(7)] = inst_9685);

(statearr_9728[(8)] = inst_9686);

return statearr_9728;
})();
var statearr_9729_9761 = state_9725__$1;
(statearr_9729_9761[(2)] = null);

(statearr_9729_9761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (4))){
var inst_9689 = (state_9725[(9)]);
var inst_9689__$1 = (state_9725[(2)]);
var inst_9690 = (inst_9689__$1 == null);
var inst_9691 = cljs.core.not.call(null,inst_9690);
var state_9725__$1 = (function (){var statearr_9730 = state_9725;
(statearr_9730[(9)] = inst_9689__$1);

return statearr_9730;
})();
if(inst_9691){
var statearr_9731_9762 = state_9725__$1;
(statearr_9731_9762[(1)] = (5));

} else {
var statearr_9732_9763 = state_9725__$1;
(statearr_9732_9763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (15))){
var inst_9715 = (state_9725[(2)]);
var state_9725__$1 = state_9725;
var statearr_9733_9764 = state_9725__$1;
(statearr_9733_9764[(2)] = inst_9715);

(statearr_9733_9764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (13))){
var state_9725__$1 = state_9725;
var statearr_9734_9765 = state_9725__$1;
(statearr_9734_9765[(2)] = null);

(statearr_9734_9765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (6))){
var inst_9685 = (state_9725[(7)]);
var inst_9710 = inst_9685.length;
var inst_9711 = (inst_9710 > (0));
var state_9725__$1 = state_9725;
if(cljs.core.truth_(inst_9711)){
var statearr_9735_9766 = state_9725__$1;
(statearr_9735_9766[(1)] = (12));

} else {
var statearr_9736_9767 = state_9725__$1;
(statearr_9736_9767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (3))){
var inst_9723 = (state_9725[(2)]);
var state_9725__$1 = state_9725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9725__$1,inst_9723);
} else {
if((state_val_9726 === (12))){
var inst_9685 = (state_9725[(7)]);
var inst_9713 = cljs.core.vec.call(null,inst_9685);
var state_9725__$1 = state_9725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9725__$1,(15),out,inst_9713);
} else {
if((state_val_9726 === (2))){
var state_9725__$1 = state_9725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9725__$1,(4),ch);
} else {
if((state_val_9726 === (11))){
var inst_9693 = (state_9725[(10)]);
var inst_9689 = (state_9725[(9)]);
var inst_9703 = (state_9725[(2)]);
var inst_9704 = [];
var inst_9705 = inst_9704.push(inst_9689);
var inst_9685 = inst_9704;
var inst_9686 = inst_9693;
var state_9725__$1 = (function (){var statearr_9737 = state_9725;
(statearr_9737[(7)] = inst_9685);

(statearr_9737[(11)] = inst_9705);

(statearr_9737[(8)] = inst_9686);

(statearr_9737[(12)] = inst_9703);

return statearr_9737;
})();
var statearr_9738_9768 = state_9725__$1;
(statearr_9738_9768[(2)] = null);

(statearr_9738_9768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (9))){
var inst_9685 = (state_9725[(7)]);
var inst_9701 = cljs.core.vec.call(null,inst_9685);
var state_9725__$1 = state_9725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9725__$1,(11),out,inst_9701);
} else {
if((state_val_9726 === (5))){
var inst_9693 = (state_9725[(10)]);
var inst_9686 = (state_9725[(8)]);
var inst_9689 = (state_9725[(9)]);
var inst_9693__$1 = f.call(null,inst_9689);
var inst_9694 = cljs.core._EQ_.call(null,inst_9693__$1,inst_9686);
var inst_9695 = cljs.core.keyword_identical_QMARK_.call(null,inst_9686,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9696 = (inst_9694) || (inst_9695);
var state_9725__$1 = (function (){var statearr_9739 = state_9725;
(statearr_9739[(10)] = inst_9693__$1);

return statearr_9739;
})();
if(cljs.core.truth_(inst_9696)){
var statearr_9740_9769 = state_9725__$1;
(statearr_9740_9769[(1)] = (8));

} else {
var statearr_9741_9770 = state_9725__$1;
(statearr_9741_9770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (14))){
var inst_9718 = (state_9725[(2)]);
var inst_9719 = cljs.core.async.close_BANG_.call(null,out);
var state_9725__$1 = (function (){var statearr_9743 = state_9725;
(statearr_9743[(13)] = inst_9718);

return statearr_9743;
})();
var statearr_9744_9771 = state_9725__$1;
(statearr_9744_9771[(2)] = inst_9719);

(statearr_9744_9771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (10))){
var inst_9708 = (state_9725[(2)]);
var state_9725__$1 = state_9725;
var statearr_9745_9772 = state_9725__$1;
(statearr_9745_9772[(2)] = inst_9708);

(statearr_9745_9772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9726 === (8))){
var inst_9685 = (state_9725[(7)]);
var inst_9693 = (state_9725[(10)]);
var inst_9689 = (state_9725[(9)]);
var inst_9698 = inst_9685.push(inst_9689);
var tmp9742 = inst_9685;
var inst_9685__$1 = tmp9742;
var inst_9686 = inst_9693;
var state_9725__$1 = (function (){var statearr_9746 = state_9725;
(statearr_9746[(7)] = inst_9685__$1);

(statearr_9746[(8)] = inst_9686);

(statearr_9746[(14)] = inst_9698);

return statearr_9746;
})();
var statearr_9747_9773 = state_9725__$1;
(statearr_9747_9773[(2)] = null);

(statearr_9747_9773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6893__auto___9759,out))
;
return ((function (switch__6872__auto__,c__6893__auto___9759,out){
return (function() {
var cljs$core$async$state_machine__6873__auto__ = null;
var cljs$core$async$state_machine__6873__auto____0 = (function (){
var statearr_9751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9751[(0)] = cljs$core$async$state_machine__6873__auto__);

(statearr_9751[(1)] = (1));

return statearr_9751;
});
var cljs$core$async$state_machine__6873__auto____1 = (function (state_9725){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_9725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e9752){if((e9752 instanceof Object)){
var ex__6876__auto__ = e9752;
var statearr_9753_9774 = state_9725;
(statearr_9753_9774[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9775 = state_9725;
state_9725 = G__9775;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
cljs$core$async$state_machine__6873__auto__ = function(state_9725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6873__auto____1.call(this,state_9725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6873__auto____0;
cljs$core$async$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6873__auto____1;
return cljs$core$async$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto___9759,out))
})();
var state__6895__auto__ = (function (){var statearr_9754 = f__6894__auto__.call(null);
(statearr_9754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto___9759);

return statearr_9754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto___9759,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
