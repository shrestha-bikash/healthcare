(this.webpackJsonphealthcare=this.webpackJsonphealthcare||[]).push([[0],{150:function(e,a,t){},151:function(e,a,t){},288:function(e,a,t){"use strict";t.r(a);var s=t(11),n=t(0),c=t.n(n),r=t(31),i=t.n(r),l=(t(150),t(65)),o=t(140),j=(t(151),t(290)),d=t(292),u=t(139),b=t(291),m=t(93),p=t.n(m),h={labelCol:{span:8},wrapperCol:{span:16}},O="https://cs5500-healthcare.herokuapp.com/v1/",x={wrapperCol:{offset:8,span:16}};var g=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],c=a[1];return console.log("rawactivity:",t),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"signup-sec",children:Object(s.jsxs)(j.a,Object(l.a)(Object(l.a)({},h),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e),p.a.post(O+"user/signup",e).then((function(e){console.log(e.data)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(s.jsx)(j.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Full name!"}],children:Object(s.jsx)(d.a,{})}),Object(s.jsx)(j.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(s.jsx)(d.a,{})}),Object(s.jsx)(j.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(s.jsx)(d.a.Password,{})}),Object(s.jsx)(j.a.Item,{label:"Confirm Password",name:"re_password",rules:[{required:!0,message:"Please reenter your password again!"}],children:Object(s.jsx)(d.a.Password,{})}),Object(s.jsx)(j.a.Item,Object(l.a)(Object(l.a)({},x),{},{children:Object(s.jsx)(u.a,{type:"primary",htmlType:"submit",children:"Sign Up"})}))]}))}),Object(s.jsxs)("div",{className:"activity-sec",children:[Object(s.jsx)(u.a,{type:"primary",onClick:function(){p.a.get(O+"rawactivity").then((function(e){console.log("Response: ",e),console.log("Data: ",e.data),c(e.data)}))},children:"Get Raw Activity"}),t&&Object(s.jsx)("div",{className:"rawactivity",children:Object(s.jsx)(b.b,{bordered:!0,dataSource:t,itemLayout:"vertical",renderItem:function(e){return Object(s.jsxs)(b.b.Item,{children:[Object(s.jsx)("p",{children:e.time}),Object(s.jsx)("p",{children:e.symptoms})]})}})})]})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,293)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),y()}},[[288,1,2]]]);
//# sourceMappingURL=main.feb7043e.chunk.js.map