"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(K,t){"use strict";var c=require("@stdlib/array-float64"),w=require("@stdlib/blas-ext-base-dnannsumpw").ndarray,s=new c(2);function f(e,r,a,y){return w(e,r,a,y,s,1,0),s[0]}t.exports=f});var q=n(function(P,v){"use strict";var x=require("@stdlib/strided-base-stride2offset"),j=i();function l(e,r,a){return j(e,r,a,x(e,a))}v.exports=l});var p=n(function(S,o){"use strict";var R=require("@stdlib/utils-define-nonenumerable-read-only-property"),d=q(),A=i();R(d,"ndarray",A);o.exports=d});var E=require("path").join,O=require("@stdlib/utils-try-require"),_=require("@stdlib/assert-is-error"),C=p(),u,m=O(E(__dirname,"./native.js"));_(m)?u=C:u=m;module.exports=u;
/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
