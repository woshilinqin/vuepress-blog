(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{427:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"springboot-接入-nacos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-接入-nacos","aria-hidden":"true"}},[t._v("#")]),t._v(" springboot 接入 nacos")]),t._v(" "),s("h4",{attrs:{id:"_1-依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.依赖")]),t._v(" "),s("p",[t._v("注意springcloud的版本回和springboot版本有兼容性问题，"),s("a",{attrs:{href:"https://spring.io/projects/spring-cloud",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("spring-cloud-context 用于支持动态刷新bean，@RefreshScope")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                 <nacos.version>2.0.4.RELEASE</nacos.version>\n                 <spring.cloud-version>Hoxton.SR1</spring.cloud-version>\n                 \n          <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring.cloud-version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n         <dependency>\n                <groupId>com.alibaba.cloud</groupId>\n                <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n                <version>${nacos.version}</version>\n            </dependency>\n            <dependency>\n                <groupId>com.alibaba.cloud</groupId>\n                <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n                <version>${nacos.version}</version>\n            </dependency>\n            \n            <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-context</artifactId>\n        </dependency>\n")])])]),s("p",[t._v("2.配置")]),t._v(" "),s("p",[t._v("添加 boostrap.yml 其中 "),s("strong",[t._v("profiles")]),t._v(" 是一个自定义的 env 配置 profiles=local")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("profiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" appName\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#local本地环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nacos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.1.1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.1.1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file-extension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yml\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEFAULT_GROUP\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开发环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nacos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.1.1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 9e42be07"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("7a89"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("48bc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("87d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2fd9e5109ca8\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.1.1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file-extension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yml\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEFAULT_GROUP\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 9e42be07"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("7a89"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("48bc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("87d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2fd9e5109ca8\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);