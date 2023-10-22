(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{301:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"安装vsftp服务器端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装vsftp服务器端","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装vsftp服务器端")]),a._v(" "),s("h3",{attrs:{id:"_1-查看是否以及安装-vsftpd-服务：-rpm-qa-grep-vsftpd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看是否以及安装-vsftpd-服务：-rpm-qa-grep-vsftpd","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 查看是否以及安装 vsftpd 服务： "),s("code",[a._v("rpm -qa |grep vsftpd")])]),a._v(" "),s("h3",{attrs:{id:"_2-安装-yum-y-install-vsftpd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-yum-y-install-vsftpd","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 安装 yum -y install vsftpd")]),a._v(" "),s("p",[a._v("安装完成后会自动创建一个ftp的用户，配置文件在 /etc/vsftpd 下面主要是 vsftpd.conf")]),a._v(" "),s("p",[a._v("不同登陆的用户，把数据存放到相应的家目录里面。")]),a._v(" "),s("h3",{attrs:{id:"_3-配置用户账号登陆-ftp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置用户账号登陆-ftp","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 配置用户账号登陆 ftp")]),a._v(" "),s("ul",[s("li",[a._v("创建存储目录 mkdir /data/ftp/auth -p")]),a._v(" "),s("li",[a._v("查看 ftp 用户信息 cat /etc/passwd "),s("code",[a._v("ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin")])]),a._v(" "),s("li",[a._v("修改用户登陆权限 "),s("code",[a._v("chsh ftp -s /bin/bash")])]),a._v(" "),s("li",[a._v("修改 ftp 用户 home 目录 "),s("code",[a._v("usermod -d /data/ftp/auth/ftp ftp")]),a._v("，其中 最后一级别文件夹 ftp 要手动创建一下同时设置权限 "),s("code",[a._v("chmod 755 ftp/")]),a._v("，"),s("code",[a._v("chown ftp:ftp ftp/")])]),a._v(" "),s("li",[a._v("设置 ftp 用户密码 "),s("code",[a._v("passwd ftp")])])]),a._v(" "),s("h3",{attrs:{id:"_4-配置-vsftpd-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置-vsftpd-conf","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 配置 vsftpd.conf")]),a._v(" "),s("p",[a._v("具体配置")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#允许匿名访问")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("anonymous_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NO\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#匿名访问的本地实际目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("anon_root")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /data/ftp/auth\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("local_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#允许匿名用户上传文件(须将全局的write_enable=YES,默认YES)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("anon_upload_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#允许匿名用户创建目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("anon_mkdir_write_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#上传或下载时的速率（0代表不限速，单位bytes/s）")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("anon_max_rate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("write_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("local_umask")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("022\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dirmessage_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("xferlog_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("connect_from_port_20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("xferlog_std_format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("listen")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NO\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("listen_ipv6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("pam_service_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("vsftpd\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("userlist_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("tcp_wrappers")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 目录也慢，一切操作很慢")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("reverse_lookup_enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NO\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#无操作时的超时时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("idle_session_timeout")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#文件传输超时时间秒")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("data_connection_timeout")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3600")]),a._v("\n")])])]),s("h3",{attrs:{id:"_5-启动或者重启服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动或者重启服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.  启动或者重启服务")]),a._v(" "),s("p",[a._v("systemctl restart vsftpd")]),a._v(" "),s("h3",{attrs:{id:"_6-页面查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-页面查看","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. 页面查看")]),a._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/linqin07/pic/raw/master/image-20210519184602560.png",alt:"image-20210519184602560.png"}}),a._v("\nd\n"),s("h3",{attrs:{id:"_7-常用-ftp-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-常用-ftp-命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.常用 ftp 命令")]),a._v(" "),s("p",[a._v("登录  ftp 127.0.0.1")]),a._v(" "),s("p",[a._v("输入帐号密码")]),a._v(" "),s("p",[a._v("cd 目录，ls 查看，get 单个文件（注意要先执行一次 "),s("code",[a._v("bin")]),a._v(" 命令，声明用二进制传输）")])])}),[],!1,null,null,null);t.default=r.exports}}]);