(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{434:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[s._v("#")]),s._v(" Introduction")]),s._v(" "),t("p",[s._v("一些 mysql 的总结。")]),s._v(" "),t("h4",{attrs:{id:"_1-重复插入sql直接处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-重复插入sql直接处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.重复插入sql直接处理")]),s._v(" "),t("p",[s._v("ON DUPLICATE KEY  针对 id 和 唯一索引。插入失败则会执行更新。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DUPLICATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n")])])]),t("p",[s._v("insert ignore  判断的是主键或者索引是否重复，重复着不处理（不会报错）")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IGNORE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" log_domain "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("replace into  等同于先删除再插入，所以没一次影响记录为两条。也是针对索引")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" log_domain "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])])]),t("h4",{attrs:{id:"_2-导出数据字典"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-导出数据字典","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.导出数据字典")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\nTABLE_NAME "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'表名'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nCOLUMN_NAME "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'字段名'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nCOLUMN_TYPE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据类型'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nCOLUMN_COMMENT "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'备注'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\ninformation_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\nTABLE_SCHEMA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'库名'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'表名'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h4",{attrs:{id:"_3-执行sql命令输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行sql命令输出","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.执行sql命令输出")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql -uroot -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root123'")]),s._v(" tablename "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/my.sql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nUPDATE log_es_index_par SET early_data = DATE_SUB(create_time,INTERVAL 1 DAY), late_data=CONCAT(index_time, ' 23:59:59') where early_data is null；   \nEOF")]),s._v("\n")])])]),t("h4",{attrs:{id:"_4-请求url地址链接时区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-请求url地址链接时区","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.请求url地址链接时区")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("jdbc:mysql://192.168.32.187:3306/db?useSSL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("useUnicode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("characterEncoding")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF-8"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("allowMultiQueries")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("serverTimezone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asia/Shanghai\n")])])]),t("h4",{attrs:{id:"_5-sql-里面的-int-4-是0填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-sql-里面的-int-4-是0填充","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.sql 里面的 int(4) 是0填充")]),s._v(" "),t("p",[t("strong",[s._v("int(11) ZEROFILL")])]),s._v(" "),t("p",[s._v("单单int(4)是没有用的。而且对于0001这种，底层存储的还是1，只是在展示的会补0。并不是显示它的长度。")]),s._v(" "),t("p",[s._v("适合学号这种场景")]),s._v(" "),t("p",[s._v("取消0填充  "),t("strong",[s._v("int(11) unsign")])])])}),[],!1,null,null,null);a.default=e.exports}}]);