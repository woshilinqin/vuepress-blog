(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{463:function(t,a,n){"use strict";n.r(a);var s=n(2),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"_1-三次握手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-三次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.三次握手")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/1551336200138.png",alt:"1551336200138.png"}})]),t._v(" "),n("p",[t._v("1):建立连接后的ACK必须等于1\n2):SYN表示建立连接的同步序号。\n3):seq表示报文序号\n4):ack表示响应对方的报文序号+1")]),t._v(" "),n("p",[t._v("为什么要三次握手？\n如果是两次握手，如果由于网速问题导致客户端请求重发，会导致开启多个连接问题。\n三次握手就可以判断已经存在连接就不建立新的连接了。")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("SYN超时，洪泛攻击")])]),t._v(" "),n("p",[t._v("什么 SYN 是洪泛攻击？ 在 TCP 的三次握手机制的第一步中，客户端会向服务器发送 SYN 报文段。服务器接收到 SYN 报文段后会为该 TCP分 配缓存和变量，如果攻击分子大量地往服务器发送 SYN 报文段，服务器的连接资源终将被耗尽，导致内存溢出无法继续服务。")]),t._v(" "),n("p",[t._v("解决策略：当服务器接受到 SYN 报文段时，不直接为该 TCP 分配资源，而只是打开一个半开的套接字。接着会使用 SYN 报文段的源 Id，目的 Id，端口号以及只有服务器自己知道的一个秘密函数生成一个 cookie，并把 cookie 作为序列号响应给客户端。")]),t._v(" "),n("p",[t._v("如果客户端是正常建立连接，将会返回一个确认字段为 cookie + 1 的报文段。接下来服务器会根据确认报文的源 Id，目的 Id，端口号以及秘密函数计算出一个结果，如果结果的值 + 1 等于确认字段的值，则证明是刚刚请求连接的客户端，这时候才为该 TCP 分配资源")]),t._v(" "),n("p",[t._v("这样一来就不会为恶意攻击的 SYN 报文段分配资源空间，避免了攻击。简而言之，就是3次握手后再额外通讯一次保证了其他伪造的 SYN 报文不会消耗服务器资源。")])]),t._v(" "),n("h4",{attrs:{id:"_2-四次挥手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.四次挥手")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/1551336573070.png",alt:"1551336573070.png"}})]),t._v(" "),n("p",[t._v("1):客户端请求时可能服务端数据没传完，所以先回复一个确认收到关闭请求的报文")]),t._v(" "),n("p",[t._v("2):数据传输完后，服务端主动再发一次关闭的请求")]),t._v(" "),n("p",[t._v("3):客户端"),n("code",[t._v("等待两个 TIME_WAIT")]),t._v(" 的时间，然后关闭连接，防止最后一个报文丢失。服务端收到最后一个就马上关闭连接。\n丢失：\n服务器超时会重发第三个报文，客户端就指定是丢包了，重新操作一次，再发个新的关闭确认请求。")])])}),[],!1,null,null,null);a.default=_.exports}}]);