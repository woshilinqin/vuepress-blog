(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{336:function(a,t,s){"use strict";s.r(t);var v=s(2),r=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"账号管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账号管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 账号管理")]),a._v(" "),s("h6",{attrs:{id:"etc-passwd-记录账号信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-passwd-记录账号信息","aria-hidden":"true"}},[a._v("#")]),a._v(" /etc/passwd 记录账号信息")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/1552461776822.png",alt:"1552461776822.png"}})]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("root:x:0:0:root:/root:/bin/bash\n用户名：密码：用户id：组id：信息栏：家目录：shell\n")])])]),s("h6",{attrs:{id:"etc-shadow-档案有点像这样："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-shadow-档案有点像这样：","aria-hidden":"true"}},[a._v("#")]),a._v(" /etc/shadow 档案有点像这样：")]),a._v(" "),s("p",[a._v("[root@www ~]# head -n 4 /etc/shadow\nroot:$1$/30QpE5e$y9N/D0bh6rAACBEz.hqo00:14126:0:99999:7:::")]),a._v(" "),s("p",[a._v("shadow 同样以『:』作为分隔符，如果数一数，会发现共有九个字段啊，这九个字段的用途是这样的：")]),a._v(" "),s("ol",[s("li",[a._v("账号名称")]),a._v(" "),s("li",[a._v("密码")]),a._v(" "),s("li",[a._v("最近更动密码的日期")]),a._v(" "),s("li",[a._v("密码不可被更动的天数(与第3 字段相比)\n第四个字段记录了：这个账号的密码在最近一次被更改后需要经过几天才可以再被变更！如果是0的话， 表示密码随时可以更动的意思。这的限制是为了怕密码被某些人一改再改而设计的。")]),a._v(" "),s("li",[a._v("密码需要重新变更的天数：(与第3 字段相比)\n经常变更密码是个好习惯！为了强制要求使用者变更密码，这个字段可以指定在最近一次更改密码后， 在多少天数内需要再次的变更密码才行。你必须要在这个天数内重新设定你的密码，否则这个账号的密码将会暂时失效。")]),a._v(" "),s("li",[a._v("密码需要变更期限前的警告天数：(与第5 字段相比)")]),a._v(" "),s("li",[a._v("密码过期后的账号宽限时间(密码失效日)：(与第5 字段相比)")]),a._v(" "),s("li",[a._v("账号失效日期。")]),a._v(" "),s("li",[a._v("保留，最后一个字段是保留的，看以后有没有新功能加入。")])]),a._v(" "),s("h6",{attrs:{id:"etc-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-group","aria-hidden":"true"}},[a._v("#")]),a._v(" /etc/group")]),a._v(" "),s("p",[a._v("查看组信息")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20210610213811255.png",alt:"image-20210610213811255.png"}})]),a._v(" "),s("h3",{attrs:{id:"用户及用户组操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户及用户组操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户及用户组操作")]),a._v(" "),s("p",[a._v("新增用户，默认会建立home目录。")]),a._v(" "),s("p",[a._v("useradd "),s("code",[a._v("lin")])]),a._v(" "),s("p",[a._v("修改密码")]),a._v(" "),s("p",[a._v("passwd "),s("code",[a._v("lin")])]),a._v(" "),s("p",[a._v("删除用户")]),a._v(" "),s("p",[a._v("-r ：连同使用者的家目录也一起删除")]),a._v(" "),s("p",[a._v("userdel -r "),s("code",[a._v("lin")])]),a._v(" "),s("p",[a._v("添加用户组")]),a._v(" "),s("p",[a._v("groupadd "),s("code",[a._v("group1")])]),a._v(" "),s("p",[a._v("删除用户组")]),a._v(" "),s("p",[a._v("groupdel "),s("code",[a._v("group1")])]),a._v(" "),s("p",[a._v("修改用户组")]),a._v(" "),s("p",[a._v("chgrp -R root ./")])])}),[],!1,null,null,null);t.default=r.exports}}]);