// Compiled by ClojureScript 1.7.170 {}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('cats.core');
goog.require('cats.context');
goog.require('cats.protocols');
goog.require('promesa.protocols');
promesa.core.promise_context;
Promise.prototype.cats$protocols$Contextual$ = true;

Promise.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return promesa.core.promise_context;
});

Promise.prototype.cats$protocols$Extract$ = true;

Promise.prototype.cats$protocols$Extract$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.cause();
} else {
return it__$1.value();
}
});

Promise.prototype.promesa$protocols$IPromise$ = true;

Promise.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(cb);
});

Promise.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(cb);
});

Promise.prototype.promesa$protocols$IPromise$_catch$arity$3 = (function (it,type,cb){
var it__$1 = this;
var type__$1 = (function (){var G__6803 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__6803) {
case "timeout":
return Promise.TimeoutError;

break;
case "cancel":
return Promise.CancellationError;

break;
default:
return type;

}
})();
return it__$1.catch(type__$1,cb);
});

Promise.prototype.promesa$protocols$IState$ = true;

Promise.prototype.promesa$protocols$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

Promise.prototype.promesa$protocols$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

Promise.prototype.promesa$protocols$IState$_done_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return cljs.core.not.call(null,it__$1.isPending());
});
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return Promise.resolve(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return Promise.reject(v);
});
/**
 * The promise constructor.
 */
promesa.core.promise = (function promesa$core$promise(v){
if(cljs.core.fn_QMARK_.call(null,v)){
return (new Promise(v));
} else {
if((v instanceof Error)){
return promesa.core.rejected.call(null,v);
} else {
return promesa.core.resolved.call(null,v);

}
}
});
/**
 * Returns true if `p` is a primise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(p){
if(!((p == null))){
if((false) || (p.promesa$protocols$IPromise$)){
return true;
} else {
if((!p.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IPromise,p);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IPromise,p);
}
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_.call(null,p);
});
/**
 * Convenience alias for the `resolved?` predicate.
 */
promesa.core.fulfilled_QMARK_ = (function promesa$core$fulfilled_QMARK_(p){
return promesa.protocols._resolved_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return cljs.core.not.call(null,promesa.protocols._done_QMARK_.call(null,p));
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = (function promesa$core$done_QMARK_(p){
return promesa.protocols._done_QMARK_.call(null,p);
});
/**
 * A chain helper for promises.
 */
promesa.core.then = (function promesa$core$then(p,callback){
return promesa.protocols._then.call(null,p,callback);
});
/**
 * A variadic chain operation.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var args__5747__auto__ = [];
var len__5740__auto___6811 = arguments.length;
var i__5741__auto___6812 = (0);
while(true){
if((i__5741__auto___6812 < len__5740__auto___6811)){
args__5747__auto__.push((arguments[i__5741__auto___6812]));

var G__6813 = (i__5741__auto___6812 + (1));
i__5741__auto___6812 = G__6813;
continue;
} else {
}
break;
}

var argseq__5748__auto__ = ((((1) < args__5747__auto__.length))?(new cljs.core.IndexedSeq(args__5747__auto__.slice((1)),(0))):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5748__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.call(null,(function (p1__6807_SHARP_,p2__6808_SHARP_){
return promesa.core.then.call(null,p1__6807_SHARP_,p2__6808_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

promesa.core.chain.cljs$lang$applyTo = (function (seq6809){
var G__6810 = cljs.core.first.call(null,seq6809);
var seq6809__$1 = cljs.core.next.call(null,seq6809);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(G__6810,seq6809__$1);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var args6814 = [];
var len__5740__auto___6817 = arguments.length;
var i__5741__auto___6818 = (0);
while(true){
if((i__5741__auto___6818 < len__5740__auto___6817)){
args6814.push((arguments[i__5741__auto___6818]));

var G__6819 = (i__5741__auto___6818 + (1));
i__5741__auto___6818 = G__6819;
continue;
} else {
}
break;
}

var G__6816 = args6814.length;
switch (G__6816) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6814.length)].join('')));

}
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,callback){
return promesa.protocols._catch.call(null,p,callback);
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,type,callback){
return promesa.protocols._catch.call(null,p,type,callback);
});

promesa.core.catch$.cljs$lang$maxFixedArity = 3;
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 */
promesa.core.all = (function promesa$core$all(promises){
return cats.core.sequence.call(null,promises);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled when first one item in the
 *   array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(promises){
return Promise.any(cljs.core.clj__GT_js.call(null,promises));
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled when `n` number of promises
 *   is fulfilled.
 */
promesa.core.some = (function promesa$core$some(n,promises){
return promesa.core.then.call(null,Promise.some(cljs.core.clj__GT_js.call(null,promises),n),(function (p1__6821_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__6821_SHARP_);
}));
});
/**
 * Given a nodejs like function that accepts a callback
 *   as the last argument and return an other function
 *   that returns a promise.
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__6822__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
return cljs.core.apply.call(null,callable,args__$1);
}));
};
var G__6822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6823__i = 0, G__6823__a = new Array(arguments.length -  0);
while (G__6823__i < G__6823__a.length) {G__6823__a[G__6823__i] = arguments[G__6823__i + 0]; ++G__6823__i;}
  args = new cljs.core.IndexedSeq(G__6823__a,0);
} 
return G__6822__delegate.call(this,args);};
G__6822.cljs$lang$maxFixedArity = 0;
G__6822.cljs$lang$applyTo = (function (arglist__6824){
var args = cljs.core.seq(arglist__6824);
return G__6822__delegate(args);
});
G__6822.cljs$core$IFn$_invoke$arity$variadic = G__6822__delegate;
return G__6822;
})()
;
});
/**
 * Returns a cancellable promise that will be fulfilled
 *   with this promise's fulfillment value or rejection reason.
 *   However, if this promise is not fulfilled or rejected
 *   within `ms` milliseconds, the returned promise is cancelled
 *   with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var args6825 = [];
var len__5740__auto___6828 = arguments.length;
var i__5741__auto___6829 = (0);
while(true){
if((i__5741__auto___6829 < len__5740__auto___6828)){
args6825.push((arguments[i__5741__auto___6829]));

var G__6830 = (i__5741__auto___6829 + (1));
i__5741__auto___6829 = G__6830;
continue;
} else {
}
break;
}

var G__6827 = args6825.length;
switch (G__6827) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6825.length)].join('')));

}
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return p.timeout(t);
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return p.timeout(t,v);
});

promesa.core.timeout.cljs$lang$maxFixedArity = 3;
/**
 * Given a timeout in miliseconds and optional
 *   value, returns a promise that will fulfilled
 *   with provided value (or nil) after the
 *   time is reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var args6832 = [];
var len__5740__auto___6835 = arguments.length;
var i__5741__auto___6836 = (0);
while(true){
if((i__5741__auto___6836 < len__5740__auto___6835)){
args6832.push((arguments[i__5741__auto___6836]));

var G__6837 = (i__5741__auto___6836 + (1));
i__5741__auto___6836 = G__6837;
continue;
} else {
}
break;
}

var G__6834 = args6832.length;
switch (G__6834) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6832.length)].join('')));

}
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null);
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return Promise.delay(v,t);
});

promesa.core.delay.cljs$lang$maxFixedArity = 2;
promesa.core.promise_context = (function (){
if(typeof promesa.core.t_promesa$core6839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
promesa.core.t_promesa$core6839 = (function (meta6840){
this.meta6840 = meta6840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
promesa.core.t_promesa$core6839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6841,meta6840__$1){
var self__ = this;
var _6841__$1 = this;
return (new promesa.core.t_promesa$core6839(meta6840__$1));
});

promesa.core.t_promesa$core6839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6841){
var self__ = this;
var _6841__$1 = this;
return self__.meta6840;
});

promesa.core.t_promesa$core6839.prototype.cats$protocols$Context$ = true;

promesa.core.t_promesa$core6839.prototype.cats$protocols$Context$_get_level$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.context._PLUS_level_default_PLUS_;
});

promesa.core.t_promesa$core6839.prototype.cats$protocols$Functor$ = true;

promesa.core.t_promesa$core6839.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (mn,f,mv){
var self__ = this;
var mn__$1 = this;
return promesa.core.then.call(null,mv,f);
});

promesa.core.t_promesa$core6839.prototype.cats$protocols$Applicative$ = true;

promesa.core.t_promesa$core6839.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core.promise.call(null,v);
});

promesa.core.t_promesa$core6839.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,pf,pv){
var self__ = this;
var ___$1 = this;
return promesa.core.then.call(null,promesa.core.all.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pf,pv], null)),((function (___$1){
return (function (p__6842){
var vec__6843 = p__6842;
var f = cljs.core.nth.call(null,vec__6843,(0),null);
var v = cljs.core.nth.call(null,vec__6843,(1),null);
return f.call(null,v);
});})(___$1))
);
});

promesa.core.t_promesa$core6839.prototype.cats$protocols$Semigroup$ = true;

promesa.core.t_promesa$core6839.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return promesa.protocols._then.call(null,cats.core.sequence.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mv,mv_SINGLEQUOTE_], null)),((function (___$1){
return (function (p__6844){
var vec__6845 = p__6844;
var mvv = cljs.core.nth.call(null,vec__6845,(0),null);
var mvv_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__6845,(1),null);
var ctx = cats.protocols._get_context.call(null,mvv);
return cats.protocols._mappend.call(null,ctx,mvv,mvv_SINGLEQUOTE_);
});})(___$1))
);
});

promesa.core.t_promesa$core6839.prototype.cats$protocols$Monad$ = true;

promesa.core.t_promesa$core6839.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core.promise.call(null,v);
});

promesa.core.t_promesa$core6839.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (mn,mv,f){
var self__ = this;
var mn__$1 = this;
return promesa.core.then.call(null,mv,f);
});

promesa.core.t_promesa$core6839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta6840","meta6840",24438750,null)], null);
});

promesa.core.t_promesa$core6839.cljs$lang$type = true;

promesa.core.t_promesa$core6839.cljs$lang$ctorStr = "promesa.core/t_promesa$core6839";

promesa.core.t_promesa$core6839.cljs$lang$ctorPrWriter = (function (this__5280__auto__,writer__5281__auto__,opt__5282__auto__){
return cljs.core._write.call(null,writer__5281__auto__,"promesa.core/t_promesa$core6839");
});

promesa.core.__GT_t_promesa$core6839 = (function promesa$core$__GT_t_promesa$core6839(meta6840){
return (new promesa.core.t_promesa$core6839(meta6840));
});

}

return (new promesa.core.t_promesa$core6839(cljs.core.PersistentArrayMap.EMPTY));
})()
;
