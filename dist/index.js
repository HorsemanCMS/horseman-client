!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.horseman=t():e.horseman=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0}),n(4);var a=n(1),i=n(2);t.baseUri="https://api.horseman.io",t.setBaseUri=function(e){t.baseUri=e},t.json=function(e,n,c){return void 0===n&&(n="GET"),r(u,void 0,void 0,function(){var r,u,s;return o(this,function(o){switch(o.label){case 0:r={"Content-Type":"application/json"},i.default.authToken()?r["x-instance-token"]=i.default.authToken():a.GetAuthToken()?r.Authorization=a.GetAuthToken():a.GetApiKey()?r["x-instance-key"]=a.GetApiKey():a.GetApiSecret()&&(r["x-instance-secret"]=a.GetApiSecret()),o.label=1;case 1:return o.trys.push([1,6,,7]),[4,fetch(""+t.baseUri+e,{method:n,headers:r,body:JSON.stringify(c)})];case 2:return(u=o.sent()).ok?[4,u.json()]:[3,4];case 3:return[2,o.sent()];case 4:return[2,!1];case 5:return[3,7];case 6:throw s=o.sent(),console.log(s),s;case 7:return[2]}})})},t.default=t.json},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a,i,c,s=n(0),l=!1;t.GetApiKey=function(){return a},t.GetApiSecret=function(){return i},t.GetAuthToken=function(){return c},t.isAuthenticated=function(){return l},t.SetApiKey=function(e,t){c=null,a=e,i=t},t.checkAuthenticated=function(){return r(u,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:if(l||!c)return[2,l];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,s.default("/auth/token/validate")];case 2:return t.sent()?[2,l=!0]:[2,l=!1];case 3:return e=t.sent(),console.log(e),[2,l=!1];case 4:return[2]}})})},"undefined"!=typeof localStorage&&localStorage.getItem("hmtoken")&&(c=localStorage.getItem("hmtoken")),t.ValidatingAuthToken=t.checkAuthenticated();t.Login=function(e,t){return r(u,void 0,void 0,function(){var n,r;return o(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,s.default("/auth/login","POST",{email:e,password:t})];case 1:return(n=o.sent())?(u=n.token,c=u,"undefined"!=typeof localStorage&&localStorage.setItem("hmtoken",u),[2,l=!0]):[2,l=!1];case 2:return r=o.sent(),console.log(r),[2,l=!1];case 3:return[2]}var u})})},t.Logout=function(){"undefined"!=typeof localStorage&&localStorage.getItem("hmtoken")&&(c=null,l=!1,localStorage.removeItem("hmtoken"))},t.Register=function(e,t){return r(u,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,s.default("/auth/register/"+t,"POST",e)];case 1:return[2,r.sent()];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}})})},t.default={Login:t.Login,isAuthenticated:t.isAuthenticated,ValidatingAuthToken:t.ValidatingAuthToken,Register:t.Register,SetApiKey:t.SetApiKey,GetApiKey:t.GetApiKey,GetApiSecret:t.GetApiSecret,GetAuthToken:t.GetAuthToken}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(0);t.InstanceAuth={login:function(e,t){return r(u,void 0,void 0,function(){var n,r;return o(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,i.default("/api/instance/auth/login","POST",{email:e,password:t})];case 1:return(n=o.sent())&&(a=n.token),[2,n];case 2:return r=o.sent(),console.log(r),[2,!1];case 3:return[2]}})})},register:function(e){return r(u,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i.default("/api/instance/auth/register","POST",e)];case 1:return(t=r.sent())&&(a=t.token),[2,t];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}})})},authToken:function(){return a}},t.default=t.InstanceAuth},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(5),u=n(6),a=n(7),i=n(2),c=n(8),s=n(9),l=n(10),f=n(11),h=n(12),p=n(13),d=n(0);t.Auth=r.default,t.Instances=o.default,t.Accounts=u.default,t.InstanceUsers=a.default,t.InstanceAuth=i.default,t.ContentTypes=c.default,t.ContentFields=s.default,t.ContentDataTypes=l.default,t.ContentRecords=f.default,t.ContentFiles=h.default,t.Roles=p.default,t.default={Auth:t.Auth,Roles:t.Roles,Instances:t.Instances,InstanceAuth:t.InstanceAuth,Accounts:t.Accounts,InstanceUsers:t.InstanceUsers,ContentTypes:t.ContentTypes,ContentFields:t.ContentFields,ContentDataTypes:t.ContentDataTypes,ContentRecords:t.ContentRecords,ContentFiles:t.ContentFiles,setBaseUri:d.setBaseUri}},function(e,t){e.exports=require("isomorphic-unfetch")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);t.Instances={all:function(){return r(u,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,a.default("/api/instances")];case 1:return[2,t.sent()];case 2:return e=t.sent(),console.log(e),[2,!1];case 3:return[2]}})})},create:function(e){return r(u,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,a.default("/api/instances","POST",e)];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})}},t.default=t.Instances},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);t.Accounts={all:function(){return r(u,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,a.default("/api/accounts")];case 1:return[2,t.sent()];case 2:return e=t.sent(),console.log(e),[2,!1];case 3:return[2]}})})}},t.default=t.Accounts},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);t.InstanceUsers={all:function(e){return r(u,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,a.default("/api/instance/users/"+e)];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})},create:function(e){return r(u,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,a.default("/api/users","POST",e)];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})},update:function(e){return r(u,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,a.default("/api/instance/users/"+e.instanceid,"PUT",e)];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})},invite:function(e,t){return r(u,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,a.default("/api/instance/users/"+e+"/invite","POST",{email:t})];case 1:return[2,r.sent()];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}})})}},t.default=t.InstanceUsers},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);t.ContentTypes={all:function(e){return r(u,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,a.default("/api/content/types/find","POST",{__instanceid:e})];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})},one:function(e){return r(u,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,a.default("/api/content/types/"+e)];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})},create:function(e,t){return r(u,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e.__instanceid=t,[4,a.default("/api/content/types/","POST",e)];case 1:return[2,r.sent()];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}})})},update:function(e,t){return r(u,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,a.default("/api/content/types/"+t,"PUT",e)];case 1:return[2,r.sent()];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}})})}},t.default=t.ContentTypes},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},u=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},a=this;Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.ContentFields={all:function(e){return o(a,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,i.default("/api/content/fields/find","POST",{__typeid:e})];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})},create:function(e,t){return o(a,void 0,void 0,function(){var n;return u(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,i.default("/api/content/fields/","POST",r({__typeid:e},t))];case 1:return[2,o.sent()];case 2:return n=o.sent(),console.log(n),[2,!1];case 3:return[2]}})})},update:function(e,t){return o(a,void 0,void 0,function(){var n,o;return u(this,function(u){switch(u.label){case 0:delete(n=Object.assign({},t)).id,u.label=1;case 1:return u.trys.push([1,3,,4]),[4,i.default("/api/content/fields/"+e,"PUT",r({},n))];case 2:return[2,u.sent()];case 3:return o=u.sent(),console.log(o),[2,!1];case 4:return[2]}})})}},t.default=t.ContentFields},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Float=1]="Float",e[e.Int=2]="Int",e[e.ShortText=3]="ShortText",e[e.LongText=4]="LongText",e[e.Markdown=5]="Markdown",e[e.RichText=6]="RichText",e[e.HTML=7]="HTML",e[e.Image=8]="Image",e[e.DateTime=9]="DateTime",e[e.Date=10]="Date",e[e.File=11]="File"}(r||(r={})),t.default=r},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},u=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},a=this;Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.ContentRecords={all:function(e){return o(a,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,i.default("/api/content/records/"+e)];case 1:return[2,n.sent()];case 2:return t=n.sent(),console.log(t),[2,!1];case 3:return[2]}})})},one:function(e,t){return o(a,void 0,void 0,function(){var n;return u(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i.default("/api/content/records/"+e+"/"+t)];case 1:return[2,r.sent()];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}})})},create:function(e,t){return o(a,void 0,void 0,function(){var n;return u(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,i.default("/api/content/records/"+e,"POST",r({},t))];case 1:return[2,o.sent()];case 2:return n=o.sent(),console.log(n),[2,!1];case 3:return[2]}})})},update:function(e,t,n){return o(a,void 0,void 0,function(){var o;return u(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,i.default("/api/content/records/"+e+"/"+t,"PUT",r({},n))];case 1:return[2,u.sent()];case 2:return o=u.sent(),console.log(o),[2,!1];case 3:return[2]}})})}},t.default=t.ContentRecords},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(0);t.ContentFiles={upload:function(e,t){return r(u,void 0,void 0,function(){var n,r,u,c,s;return o(this,function(o){switch(o.label){case 0:o.trys.push([0,8,,9]),n={},a.default.GetAuthToken()?n.Authorization=a.default.GetAuthToken():a.default.GetApiKey()?n["x-instance-key"]=a.default.GetApiKey():a.default.GetApiSecret()&&(n["x-instance-secret"]=a.default.GetApiSecret()),o.label=1;case 1:return o.trys.push([1,6,,7]),(r=new FormData).append("file",t),[4,fetch(i.baseUri+"/api/content/files/"+e,{method:"POST",headers:n,body:r})];case 2:return(u=o.sent()).ok?[4,u.json()]:[3,4];case 3:return[2,o.sent()];case 4:return[2,!1];case 5:return[3,7];case 6:throw c=o.sent(),console.log(c),c;case 7:return[3,9];case 8:return s=o.sent(),console.log(s),[2,!1];case 9:return[2]}})})}},t.default=t.ContentFiles},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{id:1,name:"Owner"},{id:2,name:"Admin"},{id:3,name:"Editor"},{id:4,name:"Analyst"}]}])});
//# sourceMappingURL=index.js.map