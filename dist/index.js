"use strict";var j=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var E=j(function(J,_){
var u=require('@stdlib/math-base-assert-is-nan/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function t(v,a,n,o){var r,q,s,p,m,c,l,y,w,R,f,i,e;if(v<=0)return 0;if(n===0)return u(a[o])?0:a[o]*v;if(r=o,v<8){for(f=0,e=0;e<v;e++)u(a[r])===!1&&(f+=a[r]),r+=n;return f}if(v<=Z){for(q=u(a[r])?0:a[r],r+=n,s=u(a[r])?0:a[r],r+=n,p=u(a[r])?0:a[r],r+=n,m=u(a[r])?0:a[r],r+=n,c=u(a[r])?0:a[r],r+=n,l=u(a[r])?0:a[r],r+=n,y=u(a[r])?0:a[r],r+=n,w=u(a[r])?0:a[r],r+=n,R=v%8,e=8;e<v-R;e+=8)q+=u(a[r])?0:a[r],r+=n,s+=u(a[r])?0:a[r],r+=n,p+=u(a[r])?0:a[r],r+=n,m+=u(a[r])?0:a[r],r+=n,c+=u(a[r])?0:a[r],r+=n,l+=u(a[r])?0:a[r],r+=n,y+=u(a[r])?0:a[r],r+=n,w+=u(a[r])?0:a[r],r+=n;for(f=q+s+(p+m)+(c+l+(y+w)),e;e<v;e++)u(a[r])===!1&&(f+=a[r]),r+=n;return f}return i=S(v/2),i-=i%8,t(i,a,n,r)+t(v-i,a,n,r+i*n)}_.exports=t
});var C=j(function(P,B){
var b=require('@stdlib/strided-base-stride2offset/dist'),g=E();function h(v,a,n){return g(v,a,n,b(v,n))}B.exports=h
});var L=j(function(Q,K){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=C(),z=E();k(I,"ndarray",z);K.exports=I
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=L(),O,M=D(A(__dirname,"./native.js"));F(M)?O=G:O=M;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
