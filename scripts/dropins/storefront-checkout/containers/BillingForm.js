import*as e from"@dropins/elsie/event-bus.js";import*as s from"@dropins/elsie/fetch-graphql.js";import*as r from"@dropins/elsie/preact-compat.js";import*as t from"@dropins/elsie/preact-hooks.js";import*as a from"@dropins/elsie/preact-jsx-runtime.js";import*as o from"@dropins/elsie/preact.js";export const id=908;export const ids=[908];export const modules={6374:(e,s,r)=>{r.d(s,{U:()=>m});var t=r(4853),a=r(4731),o=r(845),i=r(1468),l=r(8393),n=r(9636),u=r(7238),d=r(7188),m=function(){var e=(0,l.M)().state.isBillToShipping,s=(0,t.useRef)(null),r=!e.value,m=(0,t.useCallback)((function(s){return(0,o.w)({address:e.value?void 0:(0,i.vY)(s),same_as_shipping:e.value})}),[e.value]),p=(0,t.useCallback)((function(e){var s;return!(0,n.I)(null==e||null===(s=e.shipping_addresses)||void 0===s?void 0:s[0],null==e?void 0:e.billing_address)}),[]);return(0,t.useEffect)((function(){!1===e.value&&s.current.triggerSaveAddress()}),[e.value]),(0,d.jsx)(a.k,{ref:s,name:u.U,addressType:"billing_address",headingId:"Checkout.BillingAddress.title",saveAddressHandler:m,shouldAutoFillForm:p,style:{display:r?"block":"none"},"data-testid":"billing-form"})}},7238:(e,s,r)=>{r.d(s,{U:()=>t});var t="billing_address"},8994:(e,s,r)=>{r.d(s,{U1:()=>t.U,UG:()=>a.U,ZP:()=>t.U});var t=r(6374),a=r(7238)},6765:(s,r,t)=>{var a,o;s.exports=(a={events:()=>e.events},o={},t.d(o,a),o)},9699:(e,r,t)=>{var a,o;e.exports=(a={FetchGraphQL:()=>s.FetchGraphQL},o={},t.d(o,a),o)},4853:(e,s,t)=>{var a,o;e.exports=(a={forwardRef:()=>r.forwardRef,useCallback:()=>r.useCallback,useEffect:()=>r.useEffect,useImperativeHandle:()=>r.useImperativeHandle,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState},o={},t.d(o,a),o)},5437:(e,s,r)=>{var a,o;e.exports=(a={useCallback:()=>t.useCallback,useContext:()=>t.useContext,useDebugValue:()=>t.useDebugValue,useEffect:()=>t.useEffect,useId:()=>t.useId,useImperativeHandle:()=>t.useImperativeHandle,useLayoutEffect:()=>t.useLayoutEffect,useMemo:()=>t.useMemo,useReducer:()=>t.useReducer,useRef:()=>t.useRef,useState:()=>t.useState},o={},r.d(o,a),o)},4142:(e,s,r)=>{var t,o;e.exports=(t={Fragment:()=>a.Fragment,jsx:()=>a.jsx,jsxs:()=>a.jsxs},o={},r.d(o,t),o)},3474:(e,s,r)=>{var t,a;e.exports=(t={Component:()=>o.Component,Fragment:()=>o.Fragment,cloneElement:()=>o.cloneElement,createContext:()=>o.createContext,createElement:()=>o.createElement,createRef:()=>o.createRef,h:()=>o.h,hydrate:()=>o.hydrate,isValidElement:()=>o.isValidElement,options:()=>o.options,render:()=>o.render,toChildArray:()=>o.toChildArray},a={},r.d(a,t),a)}};import i from"../runtime.js";import*as l from"../757.js";i.C(l);import*as n from"../516.js";i.C(n);import*as u from"../213.js";i.C(u);import*as d from"../215.js";i.C(d);import*as m from"../693.js";i.C(m);import*as p from"../261.js";i.C(p);import*as f from"../88.js";i.C(f);import*as c from"../731.js";i.C(c);import*as v from"../636.js";i.C(v);import*as C from"./BillingForm.js";i.C(C);var j=(8994,i(i.s=8994)),g=j.UG,x=j.U1,h=j.ZP;export{g as BILLING_FORM_NAME,x as BillingForm,h as default};