(this.webpackJsonptenttiapp=this.webpackJsonptenttiapp||[]).push([[0],{122:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(0),c=n.n(a),o=n(16),i=n.n(o),u=(n(96),n(3)),s=n.n(u),h=n(8),l=n(6),j=(n(98),n(23)),f=n(18),p=n(10),d=n.n(p),b=n(153),O=n(157),x=n(158),v=n(159),m=function(t){var e=t.token,n=t.logOut,a=t.changeLanguage;return Object(r.jsx)(b.a,{position:"static",children:Object(r.jsxs)(O.a,{children:[Object(r.jsx)(x.a,{component:j.b,to:"/",style:{color:"white"},children:e?Object(r.jsx)(v.a,{id:"header.home"}):Object(r.jsx)(v.a,{id:"header.login"})}),e?Object(r.jsx)(x.a,{component:j.b,to:"/courses",style:{color:"white"},children:Object(r.jsx)(v.a,{id:"header.courses"})}):"",e?"":Object(r.jsx)(x.a,{component:j.b,to:"/register",style:{color:"white"},children:Object(r.jsx)(v.a,{id:"header.register"})}),e?Object(r.jsx)(x.a,{onClick:n,component:j.b,to:"/",style:{color:"white"},children:Object(r.jsx)(v.a,{id:"header.logout"})}):"",Object(r.jsx)(x.a,{onClick:a,children:Object(r.jsx)(v.a,{id:"header.language"})})]})})},g=n(161),k=n(160),w=n(163),y=n(58),S=function(t){var e=t.token,n=t.profile,c=Object(a.useState)(e),o=Object(l.a)(c,2),i=o[0],u=o[1],j=Object(a.useState)(n),p=Object(l.a)(j,2),b=(p[0],p[1]);Object(f.g)();var O=Object(f.f)().examid,m=Object(a.useState)([]),S=Object(l.a)(m,2),z=S[0],C=S[1],N=Object(a.useState)([]),q=Object(l.a)(N,2),I=q[0],E=q[1],F=Object(a.useState)(!1),T=Object(l.a)(F,2),J=T[0],K=T[1],L=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u(localStorage.getItem("token"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(i)}}).then((function(t){b(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:O},t.next=3,d.a.put("http://localhost:3001/user/teacher/get/question",e,{headers:{authorization:"".concat(i)}}).then((function(t){C(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:O},t.next=3,d.a.put("http://localhost:3001/user/teacher/get/choice",e,{headers:{authorization:"".concat(i)}}).then((function(t){E(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:O},t.next=3,d.a.put("http://localhost:3001/user/teacher/add/question/",e,{headers:{authorization:"".concat(i)}}).then((function(t){K(!J)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(h.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={id:e},t.next=3,d.a.put("http://localhost:3001/user/teacher/delete/question/",n,{headers:{authorization:"".concat(i)}}).then((function(t){K(!J)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(h.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={id:e},t.next=3,d.a.put("http://localhost:3001/user/teacher/add/choice/",n,{headers:{authorization:"".concat(i)}}).then((function(t){K(!J)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(h.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={id:e},t.next=3,d.a.put("http://localhost:3001/user/teacher/delete/choice/",n,{headers:{authorization:"".concat(i)}}).then((function(t){K(!J)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(h.a)(s.a.mark((function t(e,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={id:e,name:n},t.next=3,d.a.put("http://localhost:3001/user/teacher/update/question/",r,{headers:{authorization:"".concat(i)}}).then((function(t){K(!J)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),H=function(){var t=Object(h.a)(s.a.mark((function t(e,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={id:e,name:n},t.next=3,d.a.put("http://localhost:3001/user/teacher/update/choice/",r,{headers:{authorization:"".concat(i)}}).then((function(t){K(!J)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),G=function(){var t=Object(h.a)(s.a.mark((function t(e,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={id:e,correct:n},t.next=3,d.a.put("http://localhost:3001/user/teacher/update/correct/",r,{headers:{authorization:"".concat(i)}});case 3:K(!J);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){L(),B(),R(),P()}),[J,O]),Object(r.jsxs)(r.Fragment,{children:[z.map((function(t,e){return Object(r.jsxs)(k.a,{className:"kortti",children:[Object(r.jsx)("div",{className:"sulkuNappi",children:Object(r.jsx)(x.a,{onClick:function(){return D(t.id)},color:"secondary",children:"\xd7"})}),Object(r.jsx)(g.a,{defaultValue:t.question,style:{width:"90%"},onBlur:function(e){return A(t.id,e.target.value)}}),I.filter((function(e){return e.questionid===t.id&&null!==e.id})).map((function(e,n){return Object(r.jsxs)("div",{children:[Object(r.jsx)(w.a,{checked:e.correct,style:{color:y.a[500]},name:t.question+" "+t.id,onChange:function(t){return G(e.id,t.target.checked)}}),Object(r.jsx)(g.a,{defaultValue:e.choice,style:{width:"50%"},onBlur:function(t){return H(e.id,t.target.value)}}),Object(r.jsx)(x.a,{onClick:function(){return U(e.id)},color:"secondary",children:"\xd7"})]},"choiceboxes".concat(n))})),Object(r.jsx)(x.a,{onClick:function(){return M(t.id)},color:"primary",children:"+"})]},"questioncard".concat(e))})),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(x.a,{onClick:V,color:"primary",children:[" ",Object(r.jsx)(v.a,{id:"question.newquestion"})," "]})})]})},z=n(59),C=function(t){var e=t.token,n=t.profile,c=t.examid,o=t.userid,i=Object(a.useState)(e),u=Object(l.a)(i,2),j=u[0],f=(u[1],Object(a.useState)(n)),p=Object(l.a)(f,2),b=(p[0],p[1],Object(a.useState)([])),O=Object(l.a)(b,2),m=O[0],g=O[1],S=Object(a.useState)([]),C=Object(l.a)(S,2),N=C[0],q=C[1],I=Object(a.useState)(!1),E=Object(l.a)(I,2),F=E[0],T=E[1],J=Object(a.useState)(!1),K=Object(l.a)(J,2),L=K[0],B=K[1],R=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:c},t.next=3,d.a.put("http://localhost:3001/user/teacher/get/question",e,{headers:{authorization:"".concat(j)}}).then((function(t){g(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={user:o,exam:c},t.next=3,d.a.put("http://localhost:3001/user/student/get/choice",e,{headers:{authorization:"".concat(j)}}).then((function(t){q(t.data),T(t.data[0].finished)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(h.a)(s.a.mark((function t(e,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={exam:c,user:o,choice:e,value:n},t.next=3,d.a.put("http://localhost:3001/user/student/update/answer/",r,{headers:{authorization:"".concat(j)}});case 3:B(!L);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),D=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={exam:c,user:o},t.next=3,d.a.put("http://localhost:3001/user/student/finished/",e,{headers:{authorization:"".concat(j)}});case 3:B(!L);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){R(),P()}),[L,c]),Object(r.jsxs)("div",{children:[m.map((function(t,e){return Object(r.jsxs)(k.a,{className:"kortti",children:[Object(r.jsx)("div",{children:t.question}),N.filter((function(e){return e.questionid===t.id&&null!==e.choiceid})).map((function(t,e){var n;return Object(r.jsxs)("div",{children:[Object(r.jsx)(w.a,(n={checked:t.answer,disabled:F},Object(z.a)(n,"checked",t.answer),Object(z.a)(n,"disabled",F),Object(z.a)(n,"onChange",(function(e){return V(t.choiceid,e.target.checked)})),n)),F?Object(r.jsx)(w.a,{style:{color:y.a[500]},checked:t.correct}):"",Object(r.jsx)("label",{children:t.name})]},"checkboxdivi".concat(e))}))]},"questioncard".concat(e))})),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{onClick:D,variant:"contained",color:"primary",children:Object(r.jsx)(v.a,{id:"question.finished"})})})]})},N=function(t){var e=t.token,n=t.profile,c=Object(a.useState)(e),o=Object(l.a)(c,2),i=o[0],u=o[1],j=Object(a.useState)(n),p=Object(l.a)(j,2),b=p[0],O=p[1],x=Object(f.f)().examid,v=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u(localStorage.getItem("token"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(i)}}).then((function(t){O(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i||v(),b||m()}),[i,b]),"teacher"===b.usertype?Object(r.jsx)(S,{token:i,profile:b}):Object(r.jsx)(C,{token:i,profile:b,examid:x,userid:b.id})},q=function(t){var e=t.token,n=t.profile,c=Object(f.g)(),o=c.path,i=c.url,u=Object(a.useState)(e),p=Object(l.a)(u,2),b=p[0],O=p[1],m=Object(a.useState)(n),k=Object(l.a)(m,2),w=k[0],y=k[1],S=Object(a.useState)([]),z=Object(l.a)(S,2),C=z[0],q=z[1],I=Object(a.useState)(),E=Object(l.a)(I,2),F=E[0],T=E[1],J=Object(a.useState)(!1),K=Object(l.a)(J,2),L=K[0],B=K[1],R=Object(f.f)().courseid,P=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(localStorage.getItem("token"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(b)}}).then((function(t){y(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={user:w.id,course:R},t.next=3,d.a.put("http://localhost:3001/user/course/exam",e,{headers:{authorization:"".concat(b)}}).then((function(t){null!=t.data[0].id&&q(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={user:w.id,course:R},t.next=3,d.a.put("http://localhost:3001/user/teacher/new/exam",e,{headers:{authorization:"".concat(b)}}).then((function(t){B(!L)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:F},t.next=3,d.a.put("http://localhost:3001/user/teacher/delete/exam",e,{headers:{authorization:"".concat(b)}}).then((function(t){T(null),B(!L)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(h.a)(s.a.mark((function t(e,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={id:e,name:n},t.next=3,d.a.put("http://localhost:3001/user/teacher/update/exam/",r,{headers:{authorization:"".concat(b)}}).then((function(t){B(!L)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){b||P(),w||V(),w&&D()}),[w,F,R,L]),w?Object(r.jsxs)("div",{className:"Tenttilista",children:[Object(r.jsxs)("div",{children:[C.length>0?C.map((function(t,e){return Object(r.jsx)(x.a,{component:j.b,to:"".concat(i,"/").concat(t.id),onClick:function(){return T(t.id)},color:"primary",children:"teacher"===w.usertype&&C.length>0?Object(r.jsx)(g.a,{defaultValue:t.name,style:{width:"90%"},onBlur:function(e){return A(t.id,e.target.value)}}):t.name},"exambutton".concat(e))})):"","teacher"===w.usertype?Object(r.jsx)(x.a,{onClick:function(){M()},color:"primary",children:" + "}):""]}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{exact:!0,path:o}),Object(r.jsx)(f.a,{path:"".concat(o,"/:examid"),children:Object(r.jsx)(N,{token:b,profile:w})})]}),"teacher"===w.usertype&&F?Object(r.jsx)("div",{className:"sulkuNappi",children:Object(r.jsx)(x.a,{component:j.b,to:"".concat(i),onClick:U,color:"secondary",children:Object(r.jsx)(v.a,{id:"exam.remove"})})}):""]}):Object(r.jsx)(r.Fragment,{})},I=function(t){var e=t.logIn,n=Object(a.useState)(),c=Object(l.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)(),s=Object(l.a)(u,2),h=s[0],j=s[1];return Object(r.jsx)("div",{className:"Tenttilista",children:Object(r.jsxs)(k.a,{className:"kortti",children:[Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"email",onChange:function(t){return i(t.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"password",onChange:function(t){return j(t.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsxs)(x.a,{onClick:function(){return e(o,h)},children:[" ",Object(r.jsx)(v.a,{id:"login.login"})," "]})})]})})},E=function(t){var e=t.token,n=t.profile,c=Object(a.useState)(e),o=Object(l.a)(c,2),i=o[0],u=o[1],f=Object(a.useState)(n),p=Object(l.a)(f,2),b=p[0],O=p[1],v=Object(a.useState)([]),m=Object(l.a)(v,2),g=m[0],w=m[1],y=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u(localStorage.getItem("token"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(i)}}).then((function(t){O(t.data),localStorage.setItem("profile",JSON.stringify(t.data))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:b.id},t.next=3,d.a.put("http://localhost:3001/user/course",e,{headers:{authorization:"".concat(i)}}).then((function(t){w(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i||y(),b||S(),b&&z()}),[i,b]),b&&b.id?Object(r.jsx)("div",{className:"Tenttilista",children:Object(r.jsxs)(k.a,{className:"kortti",children:[Object(r.jsxs)("div",{children:[b.id," | ",b.name," | ",b.email," | ",b.usertype," ",Object(r.jsx)("br",{})]}),Object(r.jsx)("div",{children:g.map((function(t,e){return Object(r.jsx)("div",{children:Object(r.jsxs)(x.a,{component:j.b,to:"course/".concat(t.id,"/exam"),children:[" ",t.name," "]})},"homebutton".concat(e))}))})]})}):Object(r.jsx)(r.Fragment,{})},F=function(t){var e=t.register,n=Object(a.useState)(),c=Object(l.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)(),s=Object(l.a)(u,2),h=s[0],f=s[1],p=Object(a.useState)(),d=Object(l.a)(p,2),b=d[0],O=d[1],m=Object(a.useState)(),w=Object(l.a)(m,2),y=w[0],S=w[1];return Object(r.jsx)("div",{className:"Tenttilista",children:Object(r.jsxs)(k.a,{className:"kortti",children:[Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"name",onChange:function(t){return i(t.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"email",onChange:function(t){return f(t.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"password",onChange:function(t){return O(t.target.value)}})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(g.a,{label:"usertype",onChange:function(t){return S(t.target.value)}})," ",Object(r.jsx)("br",{})]}),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{component:j.b,to:"/",onClick:function(){return e(o,h,b,y)},children:Object(r.jsx)(v.a,{id:"register.register"})})})]})})},T=function(t){var e=t.token,n=t.profile,c=Object(a.useState)(e),o=Object(l.a)(c,2),i=o[0],u=o[1],j=Object(a.useState)(n),f=Object(l.a)(j,2),p=f[0],b=f[1],O=Object(a.useState)([]),v=Object(l.a)(O,2),m=v[0],w=v[1],y=Object(a.useState)(""),S=Object(l.a)(y,2),z=S[0],C=S[1],N=Object(a.useState)(!1),q=Object(l.a)(N,2),I=q[0],E=q[1],F=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u(localStorage.getItem("token"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(i)}}).then((function(t){b(t.data),localStorage.setItem("profile",JSON.stringify(t.data))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:p.id},t.next=3,d.a.put("http://localhost:3001/user/course",e,{headers:{authorization:"".concat(i)}}).then((function(t){w(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(z.length<1)){t.next=2;break}return t.abrupt("return");case 2:return e={id:n.id,name:z},t.next=5,d.a.put("http://localhost:3001/user/teacher/new/course",e,{headers:{authorization:"".concat(i)}});case 5:E(!I);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(h.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={id:e},t.next=3,d.a.put("http://localhost:3001/user/teacher/delete/course",n,{headers:{authorization:"".concat(i)}});case 3:E(!I);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i||F(),p||T(),p&&J()}),[i,p,I]),Object(r.jsx)("div",{className:"Tenttilista",children:Object(r.jsxs)(k.a,{className:"kortti",children:[m.map((function(t,e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(x.a,{children:[" ",t.name," "]}),Object(r.jsx)(x.a,{onClick:function(){return L(t.id)},color:"secondary",children:" \xd7 "})]},"coursediv".concat(e))})),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"Kurssin Nimi",style:{width:"50%"},onChange:function(t){return C(t.target.value)}})}),Object(r.jsx)(x.a,{onClick:function(){E(!I),K()},color:"primary",children:"Uusi Kurssi"})]})})},J=function(t){var e=t.token,n=t.profile,c=Object(a.useState)(e),o=Object(l.a)(c,2),i=o[0],u=(o[1],Object(a.useState)(n)),j=Object(l.a)(u,2),f=j[0],p=j[1],b=Object(a.useState)([]),O=Object(l.a)(b,2),v=O[0],m=O[1],g=Object(a.useState)([]),w=Object(l.a)(g,2),y=w[0],S=w[1],z=Object(a.useState)(!1),C=Object(l.a)(z,2),N=C[0],q=C[1],I=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(i)}}).then((function(t){p(t.data),localStorage.setItem("profile",JSON.stringify(t.data))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:f.id},t.next=3,d.a.put("http://localhost:3001/user/course",e,{headers:{authorization:"".concat(i)}}).then((function(t){m(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(h.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:n.id},t.next=3,d.a.put("http://localhost:3001/user/student/courses/other",e,{headers:{authorization:"".concat(i)}}).then((function(t){S(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(h.a)(s.a.mark((function t(e){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={userid:n.id,courseid:e},t.next=3,d.a.put("http://localhost:3001/user/student/courses/join",r,{headers:{authorization:"".concat(i)}});case 3:q(!N);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){var t=Object(h.a)(s.a.mark((function t(e){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={userid:n.id,courseid:e},t.next=3,d.a.put("http://localhost:3001/user/student/courses/leave",r,{headers:{authorization:"".concat(i)}});case 3:q(!N);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){E(),F()}),[]),Object(r.jsx)("div",{className:"Tenttilista",children:Object(r.jsxs)(k.a,{className:"kortti",children:[Object(r.jsx)(x.a,{onClick:function(){return I()},children:"testi"}),"Minun Kurssini",v.map((function(t,e){return Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{onClick:function(){return J(t.id)},children:t.name})},"course".concat(e))})),Object(r.jsx)("hr",{}),"Muut Kurssit",y.map((function(t,e){return Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{onClick:function(){return T(t.id)},children:t.name})},"other".concat(e))}))]})})},K=function(t){var e=t.token,n=t.profile,c=Object(a.useState)(e),o=Object(l.a)(c,2),i=o[0],u=o[1],j=Object(a.useState)(n),f=Object(l.a)(j,2),p=f[0],b=f[1],O=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u(localStorage.getItem("token"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(i)}}).then((function(t){b(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i||O(),p||x()}),[i,p]),p?"teacher"===p.usertype?Object(r.jsx)(T,{token:i,profile:p}):Object(r.jsx)(J,{token:i,profile:p}):Object(r.jsx)(r.Fragment,{})},L=function(t){var e=t.locale;return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)(v.a,{id:"footer.text"})," ",function(t){var e=new Date;return"".concat(new Intl.DateTimeFormat(t).format(e))}(e)," - github.com/jmsalonen/tenttiapp"]})},B=n(162),R={fi:n(79),en:n(80)},P=function(){var t=Object(a.useState)(localStorage.getItem("token")),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),i=Object(l.a)(o,2),u=i[0],p=i[1],b=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),O=Object(l.a)(b,2),x=O[0],v=O[1],g=Object(a.useState)("fi"),k=Object(l.a)(g,2),w=k[0],y=k[1],S=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3001/user/profile",{headers:{authorization:"".concat(n)}}).then((function(t){v(t.data),localStorage.setItem("profile",JSON.stringify(t.data))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(h.a)(s.a.mark((function t(e,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={email:e,password:n},t.next=3,d.a.post("http://localhost:3001/login",r).then((function(t){c(t.data.token),localStorage.setItem("token",t.data.token)})).catch((function(){console.error("Log in Error")}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(h.a)(s.a.mark((function t(e,n,r,a){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={name:e,email:n,password:r,usertype:a},t.next=3,d.a.post("http://localhost:3001/register",c);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),N=function(){var t=Object(h.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.removeItem("token"),localStorage.removeItem("profile"),localStorage.removeItem("course"),localStorage.removeItem("exam"),c(null),v(null),p(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){p(null!==n),u&&S()}),[n]),Object(r.jsx)(j.a,{children:Object(r.jsxs)(B.a,{locale:"fi",messages:R[w],children:[Object(r.jsx)(m,{token:n,logOut:N,changeLanguage:function(){y("en"===w?"fi":"en")}}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{path:"/course/:courseid/exam",children:Object(r.jsx)(q,{token:n,profile:x})}),Object(r.jsx)(f.a,{path:"/register",children:Object(r.jsx)(F,{register:C})}),Object(r.jsx)(f.a,{path:"/courses",children:Object(r.jsx)(K,{token:n,profile:x})}),Object(r.jsx)(f.a,{path:"/",children:u?Object(r.jsx)(E,{token:n,profile:x}):Object(r.jsx)(I,{logIn:z})})]}),Object(r.jsx)(L,{locale:w})]})})},V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root")),V()},79:function(t){t.exports=JSON.parse('{"header.home":"Koti","header.courses":"Kurssitarjonta","header.logout":"Poistu","header.login":"Kirjautuminen","header.register":"Rekister\xf6inti","header.language":"\ud83c\uddec\ud83c\udde7","login.login":"Kirjaudu sis\xe4\xe4n","register.register":"Rekister\xf6idy","exam.remove":"Poista tentti","question.newquestion":"Uusi kysymys","question.finished":"Valmis","footer.text":"T\xe4n\xe4\xe4n on "}')},80:function(t){t.exports=JSON.parse('{"header.home":"Home","header.courses":"Available courses","header.logout":"Log out","header.login":"Log in","header.register":"Register","header.language":"\ud83c\uddeb\ud83c\uddee","login.login":"Log in","register.register":"Register","exam.remove":"Remove exam","question.newquestion":"New question","question.finished":"Finished","footer.text":"Today is "}')},96:function(t,e,n){},98:function(t,e,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.f4fb7d23.chunk.js.map