"use strict";var j=function(u,a){return function(){return a||u((a={exports:{}}).exports,a),a.exports}};var E=j(function(J,_){
var v=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-special-floor/dist'),b=128;function t(u,a,n,e){var r,i,s,p,m,l,c,w,y,R,o,q,f;if(u<=0)return 0;if(u===1||n===0)return v(a[e])?0:a[e];if(r=e,u<8){for(o=0,f=0;f<u;f++)v(a[r])===!1&&(o+=a[r]),r+=n;return o}if(u<=b){for(i=v(a[r])?0:a[r],r+=n,s=v(a[r])?0:a[r],r+=n,p=v(a[r])?0:a[r],r+=n,m=v(a[r])?0:a[r],r+=n,l=v(a[r])?0:a[r],r+=n,c=v(a[r])?0:a[r],r+=n,w=v(a[r])?0:a[r],r+=n,y=v(a[r])?0:a[r],r+=n,R=u%8,f=8;f<u-R;f+=8)i+=v(a[r])?0:a[r],r+=n,s+=v(a[r])?0:a[r],r+=n,p+=v(a[r])?0:a[r],r+=n,m+=v(a[r])?0:a[r],r+=n,l+=v(a[r])?0:a[r],r+=n,c+=v(a[r])?0:a[r],r+=n,w+=v(a[r])?0:a[r],r+=n,y+=v(a[r])?0:a[r],r+=n;for(o=i+s+(p+m)+(l+c+(w+y)),f;f<u;f++)v(a[r])===!1&&(o+=a[r]),r+=n;return o}return q=Z(u/2),q-=q%8,t(q,a,n,r)+t(u-q,a,n,r+q*n)}_.exports=t
});var I=j(function(P,C){
var B=require('@stdlib/math-base-assert-is-nan/dist'),g=E();function h(u,a,n){var e,r,i;if(u<=0)return 0;if(u===1||n===0)return B(a[0])?0:a[0];if(n<0?e=(1-u)*n:e=0,u<8){for(r=0,i=0;i<u;i++)B(a[e])===!1&&(r+=a[e]),e+=n;return r}return g(u,a,n,e)}C.exports=h
});var M=j(function(Q,L){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=I(),z=E();k(K,"ndarray",z);L.exports=K
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=M(),O,S=D(A(__dirname,"./native.js"));F(S)?O=G:O=S;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
