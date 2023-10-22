(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{238:function(a,e,t){"use strict";t.r(e);var r=t(2),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jad"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jad","aria-hidden":"true"}},[a._v("#")]),a._v(" jad")]),a._v(" "),t("blockquote",[t("p",[a._v("反编译指定已加载类的源码")])]),a._v(" "),t("p",[t("code",[a._v("jad")]),a._v(" 命令将 JVM 中实际运行的 class 的 byte code 反编译成 java 代码，便于你理解业务逻辑；")]),a._v(" "),t("ul",[t("li",[a._v("在 Arthas Console 上，反编译出来的源码是带语法高亮的，阅读更方便")]),a._v(" "),t("li",[a._v("当然，反编译出来的 java 代码可能会存在语法错误，但不影响你进行阅读理解")])]),a._v(" "),t("h3",{attrs:{id:"反编绎时只显示源代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反编绎时只显示源代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 反编绎时只显示源代码")]),a._v(" "),t("p",[a._v("默认情况下，反编译结果里会带有"),t("code",[a._v("ClassLoader")]),a._v("信息，通过"),t("code",[a._v("--source-only")]),a._v("选项，可以只打印源代码。方便和"),t("a",{attrs:{href:"https://alibaba.github.io/arthas/mc.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("mc"),t("OutboundLink")],1),a._v("/"),t("a",{attrs:{href:"https://alibaba.github.io/arthas/redefine.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("redefine"),t("OutboundLink")],1),a._v("命令结合使用。")]),a._v(" "),t("p",[a._v("反编译"),t("code",[a._v("UserController")]),a._v("，保存到 "),t("code",[a._v("/tmp/UserController.java")]),a._v("文件里。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("jad --source-only com.example.demo.arthas.user.UserController > /tmp/UserController.java\n")])])]),t("h3",{attrs:{id:"反编译指定的函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反编译指定的函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 反编译指定的函数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ jad demo.MathGame main\n \nClassLoader:\n+-sun.misc.Launcher$AppClassLoader@3d4eac69\n+-sun.misc.Launcher$ExtClassLoader@66350f69\n \nLocation:\n/private/tmp/arthas-demo.jar\n \npublic static void main(String[] args) throws InterruptedException {\n    MathGame game = new MathGame();\n    do {\n        game.run();\n        TimeUnit.SECONDS.sleep(1L);\n    } while (true);\n}\n \nAffect(row-cnt:1) cost in 228 ms.\n")])])]),t("h1",{attrs:{id:"mc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mc","aria-hidden":"true"}},[a._v("#")]),a._v(" mc")]),a._v(" "),t("blockquote",[t("p",[a._v("Memory Compiler/内存编译器，编译"),t("code",[a._v(".java")]),a._v("文件生成"),t("code",[a._v(".class")]),a._v("。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mc /tmp/Test.java\n")])])]),t("p",[a._v("可以通过"),t("code",[a._v("-c")]),a._v("参数指定classloader：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mc -c 327a647b /tmp/Test.java\n")])])]),t("p",[a._v("可以通过"),t("code",[a._v("-d")]),a._v("命令指定输出目录：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mc -d /tmp/output /tmp/ClassA.java /tmp/ClassB.java\n")])])]),t("p",[a._v("编译生成"),t("code",[a._v(".class")]),a._v("文件之后，可以结合"),t("a",{attrs:{href:"https://alibaba.github.io/arthas/redefine.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("redefine"),t("OutboundLink")],1),a._v("命令实现热更新代码。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意，mc命令有可能失败。如果编译失败可以在本地编译好"),t("code",[a._v(".class")]),a._v("文件，再上传到服务器。具体参考"),t("a",{attrs:{href:"https://alibaba.github.io/arthas/redefine.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("redefine"),t("OutboundLink")],1),a._v("命令说明。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);