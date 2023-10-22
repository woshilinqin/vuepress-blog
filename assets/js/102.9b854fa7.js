(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{328:function(s,t,a){"use strict";a.r(t);var l=a(2),e=Object(l.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh免密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh免密","aria-hidden":"true"}},[s._v("#")]),s._v(" SSH免密")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("生成密钥对，"),a("code",[s._v("-t")]),s._v("表示使用加密算法为 rsa")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("生成文件"),a("code",[s._v("id_rsa")]),s._v("\n，"),a("code",[s._v("id_rsa.pub")])]),s._v(" "),a("p",[s._v("/home/用户名/.ssh/id_rsa          私钥   600  一定为600")]),s._v(" "),a("p",[s._v("/home/用户名/.ssh/id_rsa.pub    公钥  644")])]),s._v(" "),a("li",[a("p",[s._v("分发公钥到客户端，"),a("code",[s._v("-i")]),s._v("表示复制到指定文件名称，也可以使用"),a("code",[s._v("scp")]),s._v("复制到客户端再修改名字为"),a("code",[s._v("authorized_keys")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ssh-copy-id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-i id_rsa.pub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" root@192.168.152.128\n")])])]),a("p",[s._v("客户端路径对应关系如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("用户")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("客户端路径")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("root")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("/root/.ssh/authorized_keys")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("其他用户")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("/home/用户名/.ssh/authorized_keys")])])])])])]),s._v(" "),a("div",{staticClass:"htmledit_views",attrs:{id:"content_views"}},[a("p",[s._v("       ssh无密码登录，自然要用到Linux的基础命令ssh及scp，对于ssh和scp的使用见："),a("a",{attrs:{href:"http://blog.csdn.net/mmd0308/article/details/73770007"}},[s._v("《ssh，scp命令使用教程》")])]),s._v(" "),a("p",[a("strong",[s._v("本机自身实现无密码登录：")])]),s._v(" "),a("p"),s._v(" "),a("ul",[a("li",[s._v("生成公钥、私钥对")])]),a("div",[a("pre",[a("code",{staticClass:"language-java hljs"},[s._v("       ssh-keygen")]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("ul",[a("li",[s._v("进入到生成密钥文件夹中，默认在用户的家目录下面，一个隐藏的.ssh文件夹中。")])])]),s._v(" "),a("p"),s._v(" "),a("p"),s._v(" "),a("pre",[a("code",{staticClass:"language-java hljs"},[s._v("       cd /home/hzq/.ssh/")]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("p"),s._v(" "),a("ul",[a("li",[s._v("查看是否有“authorized_keys”文件，如果有，直接将公钥追加到“authorized_keys”文件中，如果没有，创建“authorized_keys”文件，并修改权限为“600”")])]),a("p"),s._v(" "),a("p"),s._v(" "),a("pre",[a("code",{staticClass:"language-java hljs"},[a("ol",{staticClass:"hljs-ln"},[a("li",[a("div",{staticClass:"hljs-ln-numbers"},[a("div",{staticClass:"hljs-ln-line hljs-ln-n",attrs:{"data-line-number":"1"}})]),a("div",{staticClass:"hljs-ln-code"},[a("div",{staticClass:"hljs-ln-line"},[s._v("       touch authorized_keys")])])]),a("li",[a("div",{staticClass:"hljs-ln-numbers"},[a("div",{staticClass:"hljs-ln-line hljs-ln-n",attrs:{"data-line-number":"2"}})]),a("div",{staticClass:"hljs-ln-code"},[a("div",{staticClass:"hljs-ln-line"},[s._v("       chmod "),a("span",{staticClass:"hljs-number"},[s._v("600")]),s._v(" authorized_keys ")])])])])]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("p"),s._v(" "),a("ul",[a("li",[s._v("追加公钥到“authorized_keys”文件中")])]),a("pre",[a("code",{staticClass:"language-java hljs"},[s._v("       cat id_rsa.pub >> authorized_keys ")]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("ul",[a("li",[s._v("配置结束")])]),a("p"),s._v(" "),a("p",[a("strong",[s._v("两台主机（A，B主机）间实现无密码登录：")])]),s._v(" "),a("p"),s._v(" "),a("ul",[a("li",[s._v("A，B主机分别生成公钥、私钥对")])]),a("div",[a("pre",[a("code",{staticClass:"language-java hljs"},[s._v("       ssh-keygen")]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("ul",[a("li",[s._v("进入到生成密钥文件夹中，默认在用户的家目录下面，一个隐藏的.ssh文件夹中。")])])]),s._v(" "),a("p"),s._v(" "),a("pre",[a("code",{staticClass:"language-java hljs"},[s._v("       cd /home/hzq/.ssh/")]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("div",[a("ul",[a("li",[s._v("使用scp命令，将A主机公钥发送给B主机，将B主机公钥发送给A主机。")])]),a("div",[a("pre",[a("code",{staticClass:"language-java hljs"},[s._v("       scp id_rsa.pub  hzq@"),a("span",{staticClass:"hljs-number"},[s._v("192.168")]),s._v(".1.161:/home/hzq")]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})])])]),s._v(" "),a("ul",[a("li",[s._v("分别查看A，B主机是否有“authorized_keys”文件，如果有，直接将需无密码登录的主机公钥追加到“authorized_keys”文件中，如果没有，创建“authorized_keys”文件，并修改权限为“600”")])]),a("p"),s._v(" "),a("pre",[a("code",{staticClass:"language-java hljs"},[a("ol",{staticClass:"hljs-ln"},[a("li",[a("div",{staticClass:"hljs-ln-numbers"},[a("div",{staticClass:"hljs-ln-line hljs-ln-n",attrs:{"data-line-number":"1"}})]),a("div",{staticClass:"hljs-ln-code"},[a("div",{staticClass:"hljs-ln-line"},[s._v("       touch authorized_keys")])])]),a("li",[a("div",{staticClass:"hljs-ln-numbers"},[a("div",{staticClass:"hljs-ln-line hljs-ln-n",attrs:{"data-line-number":"2"}})]),a("div",{staticClass:"hljs-ln-code"},[a("div",{staticClass:"hljs-ln-line"},[s._v("       chmod "),a("span",{staticClass:"hljs-number"},[s._v("600")]),s._v(" authorized_keys ")])])])])]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("ul",[a("li",[s._v("追加公钥到“authorized_keys”文件中")])]),a("pre",[a("code",{staticClass:"language-java hljs"},[s._v("       cat id_rsa.pub >> authorized_keys ")]),a("div",{staticClass:"hljs-button {2}",attrs:{"data-title":"复制",onclick:"hljs.copyCode(event)"}})]),s._v(" "),a("ul",[a("li",[s._v("配置结束")])]),a("p",[s._v("       总结：自己鼓励一下自己，加油↖(^ω^)↗！！！")]),s._v(" "),a("p",[a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);