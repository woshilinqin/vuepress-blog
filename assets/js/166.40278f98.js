(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{389:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一-说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 一.说明")]),t._v(" "),s("p",[s("code",[t._v("SpringSecurity")]),t._v(" 是一个用于Java 企业级应用程序的安全框架,主要包含用户认证和用户授权两个方面。下面简称"),s("code",[t._v("SS")]),t._v("。")]),t._v(" "),s("p",[t._v("JWT 是在 Web 应用中安全传递信息的规范,从本质上来说是 Token 的演变,是一种生成加密用户身份信息的 Token,特别适用于分布式单点登陆的场景,无需在服务端保存用户的认证信息,而是直接对 Token 进行校验获取用户信息,使单点登录更为简单灵活。")]),t._v(" "),s("h3",{attrs:{id:"二-基本组件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-基本组件介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 二.基本组件介绍")]),t._v(" "),s("p",[t._v("AuthenticationManagerBuilder  验证管理，可以重写自定义登录逻辑，默认是用户名密码登录。")]),t._v(" "),s("p",[t._v("UserDetailsService  连数据库查询用户操作")]),t._v(" "),s("p",[t._v("AuthenticationManager")]),t._v(" "),s("blockquote",[s("p",[t._v("successHandler 默认实现 AjaxAuthenticationSuccessHandler 返回 response 编码 200，也可以自定义继承接口实现页面重定向或者设置状态编码")]),t._v(" "),s("p",[t._v("failureHandler 默认实现 AjaxAuthenticationFailureHandler 返回 response 编码 401")])]),t._v(" "),s("p",[t._v("logout().logoutSuccessHandler 默认实现 AjaxLogoutSuccessHandler")]),t._v(" "),s("p",[t._v("exceptionHandling()")]),t._v(" "),s("p",[t._v("AuthenticationEntryPoint 用来解决匿名用户访问无权限资源时的异常,默认实现 SecurityProblemSupport")]),t._v(" "),s("p",[t._v("AccessDeineHandler 用来解决认证过的用户访问无权限资源时的异常, 默认实现 SecurityProblemSupport")]),t._v(" "),s("h4",{attrs:{id:"csrf-跨站伪造请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站伪造请求","aria-hidden":"true"}},[t._v("#")]),t._v(" csrf(跨站伪造请求)")]),t._v(" "),s("p",[t._v("解决:")]),t._v(" "),s("p",[t._v("token 校验之所以能防御 csrf,因为只有在同源的情况下，页面才能进行脚本操作和使用 js 获取 cookie 的操作，才能获取到 token")]),t._v(" "),s("h4",{attrs:{id:"cors-跨域请求access-control-allow-origin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-跨域请求access-control-allow-origin","aria-hidden":"true"}},[t._v("#")]),t._v(" cors(跨域请求Access-Control-Allow-Origin)")]),t._v(" "),s("p",[t._v("响应首部中可以携带这个头部表示服务器允许哪些域可以访问该资源")]),t._v(" "),s("p",[t._v('c.Header("Access-Control-Allow-Origin", "*")')]),t._v(" "),s("h4",{attrs:{id:"修改匿名用户名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改匿名用户名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改匿名用户名称")]),t._v(" "),s("p",[t._v("再把 bean addFilter 里面")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnonymousAuthenticationFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticationFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新注册bean修改匿名用户名称")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnonymousAuthenticationFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doesNotMatter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aiui"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthorityUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAuthorityList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROLE_ANONYMOUS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);