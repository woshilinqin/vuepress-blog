(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{472:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_1-mysql中myisam与innodb的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql中myisam与innodb的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.mysql中myisam与innodb的区别")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("myisam")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("innodb")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("事务支持")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不支持：查询更快，每次查询具有原子性")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("支持事务，回滚")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("锁粒度")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("表级锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("行级锁")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("外键")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("MyISAM不支持")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("InnoDB支持"),s("code",[t._v("外键")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("表主键")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("允许没有任何索引和主键的表存在，索引都是保存行的地址")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("如果没有设定主键或者非空唯一索引，就会自动生成一个6字节的主键(用户不可见)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("全文索引")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("MyISAM支持")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("InnoDB不支持全文索引")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("可移植性、备份及"),s("code",[t._v("恢复")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("数据是以文件的形式存储，所以在跨平台的数据转移中会很方便。在备份和恢复时可单独针对某个表进行操作")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("免费的方案可以是拷贝数据文件、备份 binlog或者用mysqldump，在数据量达到几十G的时候就相对痛苦了")])])])]),t._v(" "),s("p",[t._v("myisam适合"),s("code",[t._v("查询多")]),t._v("的，innodob适合新增删除操作")]),t._v(" "),s("h3",{attrs:{id:"_2-sql执行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql执行流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.sql执行流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220220000520424.png",alt:"image-20220220000520424"}})]),t._v(" "),s("p",[t._v("sql执行首先看是否")]),t._v(" "),s("p",[t._v("开启了缓存（5.8移除了缓存），sql进来先分析，包括语法分析和语义检查，生成语法树，再经过优化器，优化器分为物理优化和逻辑优化。物理优化就是使用索引，逻辑优化就是优化sql，比如一些联表查询的优化，优化完生成执行计划（查询树），最后执行得到查询结果了。")]),t._v(" "),s("h3",{attrs:{id:"_3-b-树为什么高度不超过4层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-b-树为什么高度不超过4层","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.b+树为什么高度不超过4层")]),t._v(" "),s("p",[t._v("为什么二叉排序树不行：时间复杂度为 log2n的对数，而b+树的复杂度为明显低，以为树高度一般为3就足够了。")]),t._v(" "),s("p",[t._v("每一层就需要一次io操作加载到内存。为啥使用b+树就是为了减少和磁盘io交互。")]),t._v(" "),s("h3",{attrs:{id:"_4-聚簇索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-聚簇索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.聚簇索引")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220220152821581.png",alt:"image-20220220152821581"}})]),t._v(" "),s("p",[t._v("聚簇索引就是按照每张表的"),s("strong",[t._v("主键")]),t._v("构造一颗B+树，同时叶子节点中存放的就是整张表的行记录数据，也将聚集索引的叶子节点称为数据页。这个特性决定了索引组织表中数据也是索引的一部分，每张表只能拥有一个聚簇索引。")]),t._v(" "),s("p",[t._v("特点：")]),t._v(" "),s("ul",[s("li",[t._v("数据页内的记录是根据主键大小顺序排序"),s("code",[t._v("单向链表")])]),t._v(" "),s("li",[t._v("数据页是也是根据主键大小顺序排列为双向链表")]),t._v(" "),s("li",[t._v("记录页也是根据主键大小顺序排列的双向链表")]),t._v(" "),s("li",[s("code",[t._v("数据页存储所有列的值")])])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("插入速度严重依赖主键顺序")]),t._v(" "),s("li",[t._v("二级索引访问需要回表操作")]),t._v(" "),s("li",[t._v("更新主键的代价很高")])]),t._v(" "),s("h3",{attrs:{id:"_5-二级索引（辅助索引、非聚簇索引）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-二级索引（辅助索引、非聚簇索引）","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.二级索引（辅助索引、非聚簇索引）")]),t._v(" "),s("p",[s("strong",[t._v("聚簇索引之上创建的索引称之为辅助索引")]),t._v("，辅助索引访问数据总是需要二次查找。Innodb辅助索引的叶子节点并"),s("code",[t._v("不包含")]),t._v("行记录的全部数据。")]),t._v(" "),s("p",[t._v("二级索引记录页中的数据有：索引列的值、"),s("code",[t._v("主键值")]),t._v("、数据页的页号")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220221004110400.png",alt:"image-20220221004110400"}})]),t._v(" "),s("p",[t._v("概念："),s("strong",[t._v("回表")])]),t._v(" "),s("p",[t._v("我们根据这个以c2列大小排序的B+树只能确定我们要查找记录的主键值，所以如果我们想根\n据c2列的值查找到完整的用户记录的话，仍然需要到 聚簇索引 中再查一遍，这个过程称为 回表 。也就\n是根据c2列的值查询一条完整的用户记录需要使用到 2 棵B+树。")]),t._v(" "),s("h3",{attrs:{id:"_6-联合索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-联合索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.联合索引")]),t._v(" "),s("p",[t._v("我们也可以同时以多个列的大小作为排序规则，也就是同时为多个列建立索引，比方说我们想让B+树按\n照 c2和c3列的大小进行排序，这个包含两层含义：")]),t._v(" "),s("p",[t._v("先把各个记录和页按照c2列进行排序。\n在记录的c2列相同的情况下，采用c3列进行排序")]),t._v(" "),s("h3",{attrs:{id:"_7-myisam-与-innodb对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-myisam-与-innodb对比","aria-hidden":"true"}},[t._v("#")]),t._v(" 7.MyISAM 与 InnoDB对比")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220221004526617.png",alt:"MyISAM 的索引结构"}})]),t._v(" "),s("p",[t._v("MyISAM的索引方式都是“非聚簇”的，与InnoDB包含1个聚簇索引是不同的。小结两种引擎中索引的区\n别：\n① 在InnoDB存储引擎中，我们只需要根据主键值对 聚簇索引 进行一次查找就能找到对应的记录，而在\nMyISAM 中却需要进行一次 "),s("code",[t._v("回表")]),t._v(" 操作，意味着MyISAM中建立的索引相当于全部都是 "),s("code",[t._v("二级索引")]),t._v(" 。\n② InnoDB的"),s("code",[t._v("数据文件本身就是索引")]),t._v("文件，而MyISAM索引文件和数据文件是 分离的 ，索引文件仅保存数\n据记录的地址。\n③ InnoDB的非聚簇索引data域存储相应记录 "),s("code",[t._v("主键")]),t._v("的值 ，而MyISAM索引记录的是 "),s("code",[t._v("地址")]),t._v(" 。换句话说，\nInnoDB的所有非聚簇索引都引用主键作为data域。\n④ MyISAM的回表操作是十分 快速 的，因为是拿着地址偏移量直接到文件中取数据的，反观InnoDB是通\n过获取主键之后再去聚簇索引里找记录，虽然说也不慢，但还是比不上直接用地址去访问。\n⑤ InnoDB要求表 必须有主键 （ MyISAM可以没有 ）。如果没有显式指定，则MySQL系统会自动选择一个\n可以非空且唯一标识数据记录的列作为主键。如果不存在这种列，则MySQL自动为InnoDB表生成一个"),s("code",[t._v("隐")]),t._v(" "),s("code",[t._v("含字段")]),t._v("作为主键，这个字段长度为6个字节，类型为长整型")]),t._v(" "),s("h3",{attrs:{id:"_8-自适应-hash-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-自适应-hash-索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 8.自适应 Hash 索引")]),t._v(" "),s("p",[t._v("默认开启")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> show variables like '%adaptive_hash_index';\n")])])]),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220221010208427.png",alt:"adaptive_hash_index"}})]),t._v(" "),s("h3",{attrs:{id:"_9-数据页的目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-数据页的目录结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 9.数据页的目录结构")]),t._v(" "),s("p",[t._v("页目录：快速在一页很多数据中找到需要的记录。页内记录分组，最小记录单独为一组，其他的 4~8 一组，最后一组加上最大记录。（满9个自动拆分为4+5，分多一组和后面5条记录一组，n_owned 标记组数目）")]),t._v(" "),s("p",[t._v("在一个数据页中查找指定主键值的记录的过程分为两步：")]),t._v(" "),s("ol",[s("li",[t._v("通过二分法确定该记录所在的槽，并找到该槽所在分组中主键值最小的那条记录。")]),t._v(" "),s("li",[t._v("通过记录的 "),s("code",[t._v("next_record")]),t._v(" 属性遍历该槽所在的组中的各个记录。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220223000023103.png",alt:"image-20220223000023103"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220222234849065.png",alt:"image-20220222234849065"}})]),t._v(" "),s("p",[t._v("当数据页中存在多条被删除掉的记录时，这些记录的next_record属性将会把这些被删除掉的记录组成一个"),s("code",[t._v("垃圾链表")]),t._v("，以备之后重用这部分存储空间。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220222234915597.png",alt:"image-20220222234915597"}})]),t._v(" "),s("h3",{attrs:{id:"_10-记录的行格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-记录的行格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.记录的行格式")]),t._v(" "),s("p",[t._v("有默认为Compact、动态Dynamic、压缩Compressed、冗余Redundant")]),t._v(" "),s("p",[t._v("主要 comopact 格式如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220223001911266.png",alt:"image-20220223001911266"}})]),t._v(" "),s("ul",[s("li",[t._v("变长字段列表\n字段类型为 varchar、blog、text 等字符长度可变的，按字段具体实际长度，倒序记录长度到该列表")]),t._v(" "),s("li",[t._v("NULL值列表\n记录非空的字段值为空的，二进制位的值为1时，代表该列的值为NULL，否则不为NULL，也是倒序插入")]),t._v(" "),s("li",[t._v("记录头信息\n"),s("code",[t._v("delete_mask")]),t._v(" 标记是否删除 0 否 1 是\nmin_rec_mask值为1，最小记录"),s("br"),t._v(" "),s("code",[t._v("record_type")]),t._v("：0：表示普通记录。   1：表示B+树非叶节点记录   2：表示最小记录   3：表示最大记录\nheap_no：当前记录在本页中的位置\n"),s("code",[t._v("n_owned")]),t._v(": 分组中有多少条记录\n"),s("code",[t._v("next_record")]),t._v("：记录下一个记录的"),s("code",[t._v("地址偏移量")])])]),t._v(" "),s("p",[t._v("一个UTF-8格式字符是3字节，如果字符串很长大于 65535 * 3 大小。一个页的大小一般是16KB，也就是16384字节。页大小还没有字符大小大，这就"),s("code",[t._v("行溢出")]),t._v("了")]),t._v(" "),s("p",[t._v("Compressed 和 Dynamic 两种记录格式对于存放在 BLOB 中的数据采用了完全的行溢出的方式。如图，在数据页中只存放20个字节的指针（溢出页的地址），实际的数据都存放在Off Page（溢出页）中。\nCompact 和 Redundant 两种格式会在记录的真实数据处存储一部分数据（存放768个前缀字节）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220223004232787.png",alt:"image-20220223004232787"}})]),t._v(" "),s("h3",{attrs:{id:"_11-表空间、段、区、页、行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-表空间、段、区、页、行","aria-hidden":"true"}},[t._v("#")]),t._v(" 11.表空间、段、区、页、行")]),t._v(" "),s("ul",[s("li",[t._v("表空间：包含一个或者多个段")]),t._v(" "),s("li",[t._v("段：文件系统连续分配的空间")]),t._v(" "),s("li",[t._v("区：一个区会分配 64 个连续的页，因为 InnoDB 中的页大小默认是 16KB，所以一个区的大小是 64*16KB=1MB")])]),t._v(" "),s("h3",{attrs:{id:"_12-索引的创建删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-索引的创建删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 12.索引的创建删除")]),t._v(" "),s("p",[t._v("字段联合索引字段的删除，会一个个的删除联合的单个字段的索引。使用 "),s("code",[t._v("show index from tableName;")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建索引,后面多个字段就是联合索引，unique是否唯一")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" balance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" balance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" index_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新增删除索引字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_13-降序索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-降序索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 13.降序索引")]),t._v(" "),s("p",[t._v("5.8新特性，创建和普通的创建索引一样，后面加个 desc 即可。")]),t._v(" "),s("p",[t._v("同时注意使用时查询条件要和索引一样才可以有优化效果。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5.8版本支持降序索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" ts1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_a_b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建存储过程插入数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELIMITER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" ts_insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHILE")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DO")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" ts1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" RAND"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("RAND"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHILE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELIMITER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行顺序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CALL")]),t._v(" ts_insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解析两条不同的sql，降序索引只有再和查询条件一样降序情况才有优化效果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ts1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ts1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_14-隐藏索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-隐藏索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 14.隐藏索引")]),t._v(" "),s("p",[t._v("用于把现有索引隐藏，达到逻辑删除效果，底层执行器会绕过执行该索引。用于测试验证删除索引。")]),t._v(" "),s("p",[t._v("可以通过 "),s("code",[t._v("SHOW INDEX FROM tableName")]),t._v(" 查询 VISIBLE 字段标记")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换索引可见状态,可以通过 SHOW INDEX FROM ts1 查询VISIBLE标记")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" ts1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_a_b VISIBLE\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" ts1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_a_b INVISIBLE\n")])])]),s("h3",{attrs:{id:"_15-适合创建索引达到情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-适合创建索引达到情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 15.适合创建索引达到情况")]),t._v(" "),s("ul",[s("li",[t._v("字段很有唯一性，散列性高")]),t._v(" "),s("li",[t._v("select、update、delete 的 where 查询条件，distinct 的字段")]),t._v(" "),s("li",[t._v("group by、order by的字段创建唯一或者联合索引")]),t._v(" "),s("li",[t._v("多表 join 的条件，而且 对用于连接的字段创建索引，并且该字段在多张表中的 "),s("code",[t._v("类型")]),t._v("必须一致，否则隐式转换。")]),t._v(" "),s("li",[t._v("尽量挑选字段小的创建所以如 int(4) 优于 int(11) ,因为小的可以让数据页放更多的数据减少磁盘 io")]),t._v(" "),s("li",[t._v("使用 varchar 类型创建所以建议指定使用长度，但是引申另一个问题：索引列前缀对排序的影响除非不用排序。说明：索引的长度与区分度是一对矛盾体，一般对字符串类型数据，"),s("code",[t._v("长度为 20 的索引，区分度会 高达")]),t._v(" "),s("code",[t._v("90% 以上")]),t._v(" ，可以使用 count(distinct left(列名, 索引长度))/count(*) 的区分度来确定。")]),t._v(" "),s("li",[t._v("在多个字段都要创建索引的情况下，"),s("code",[t._v("联合索引优于单值索引")])]),t._v(" "),s("li",[t._v("索引一般不超过6个。一是索引即数据，过多会占用很多磁盘。二是影响插入修改删除效率。三是会影响优化器对 sql 进行优化选择使用那个索引。")])]),t._v(" "),s("h3",{attrs:{id:"_16-不适合创建索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-不适合创建索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 16.不适合创建索引")]),t._v(" "),s("ul",[s("li",[t._v("没用到的字段就不创建")]),t._v(" "),s("li",[t._v("数据太少了没必要创建")]),t._v(" "),s("li",[t._v("区分度太低，没意义")]),t._v(" "),s("li",[t._v("数据字段经常给更新或者插入等操作")]),t._v(" "),s("li",[s("code",[t._v("重复、冗余")]),t._v("的索引，比如联合索引已经包含了单字段索引，就没必要再加一个单字段索引了")]),t._v(" "),s("li",[t._v("不建议用无序的值作为索引，如身份证、uuid")])]),t._v(" "),s("h3",{attrs:{id:"_17-sql-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-sql-优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 17.sql 优化")]),t._v(" "),s("p",[t._v("下面是优化流程图")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/linqin07/pic/raw/master/image-20220228234517396.png",alt:"image-20220228234517396"}}),t._v(" "),s("h4",{attrs:{id:"_17-1-查看系统性能参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-1-查看系统性能参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 17.1 查看系统性能参数")]),t._v(" "),s("p",[t._v("语法： SHOW [GLOBAL|SESSION] STATUS LIKE '%参数%';")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Connections")]),t._v("：连接MySQL服务器的次数。")]),t._v(" "),s("li",[t._v("Uptime：MySQL服务器的上线时间。")]),t._v(" "),s("li",[s("code",[t._v("Slow_queries")]),t._v("：慢查询的次数。")]),t._v(" "),s("li",[s("code",[t._v("Innodb_rows_read：Select")]),t._v("查询返回的行数 ，可以理解为 IO 获取的页数目")]),t._v(" "),s("li",[t._v("Innodb_rows_inserted：执行INSERT操作插入的行数")]),t._v(" "),s("li",[t._v("Innodb_rows_updated：执行UPDATE操作更新的行数")]),t._v(" "),s("li",[t._v("Innodb_rows_deleted：执行DELETE操作删除的行数")]),t._v(" "),s("li",[t._v("Com_select：查询操作的次数。")]),t._v(" "),s("li",[s("code",[t._v("Com_insert")]),t._v("：插入操作的次数。对于批量插入的 INSERT 操作，只累加一次。")]),t._v(" "),s("li",[t._v("Com_update：更新操作的次数。")]),t._v(" "),s("li",[t._v("Com_delete：删除操作的次数。")])]),t._v(" "),s("h3",{attrs:{id:"_18-索引失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-索引失效","aria-hidden":"true"}},[t._v("#")]),t._v(" 18.索引失效")]),t._v(" "),s("ul",[s("li",[t._v("没有符合最左前缀")]),t._v(" "),s("li",[t._v("有函数转换或者有运算")]),t._v(" "),s("li",[t._v('等值左右两个字段的类型不一样，会隐式转换，比如使用 cast(1) 为 "1"')]),t._v(" "),s("li",[t._v("查询条件中有范围大于多少，可以优化把范围写最后")]),t._v(" "),s("li",[t._v("!= 或者 <> 或者 is not null, 可能失效")]),t._v(" "),s("li",[t._v("like '%xxx%'")]),t._v(" "),s("li",[t._v("or 语句除非左右所有字段都有索引，否则无法使用上 merge index")]),t._v(" "),s("li",[t._v("表的字符集没有统一，表的字符集统一使用 utf8mb4")])]),t._v(" "),s("h3",{attrs:{id:"_19-关联查询的优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-关联查询的优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 19.关联查询的优化")]),t._v(" "),s("p",[t._v("EXPLAIN  SELECT SQL_NO_CACHE * FROM "),s("strong",[t._v("type")]),t._v(" INNER JOIN "),s("strong",[t._v("book")]),t._v(" ON type.card=book.card;")]),t._v(" "),s("p",[t._v("两个表直接进行内连接，type 叫做"),s("code",[t._v("驱动表")]),t._v("，book叫做"),s("code",[t._v("被驱动表")]),t._v("，下面介绍几种查询的流程优化。")]),t._v(" "),s("h4",{attrs:{id:"_1-simple-nested-loop-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-simple-nested-loop-join","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.Simple Nested-Loop Join")]),t._v(" "),s("p",[t._v("从A表取出一条数据，遍历B表将匹配上条件的数据放到 result，以此类推。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220303231205713.png",alt:"image-20220303231205713"}})]),t._v(" "),s("h4",{attrs:{id:"_2-block-nested-loop-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-block-nested-loop-join","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.Block Nested-Loop Join")]),t._v(" "),s("p",[t._v("一条条记录取出重复太多，增加一个JoinBuffer缓存池，遍历被驱动表时一次性比较，增加速度。5.8版本使用 hash join 代替，建立匹配结果集小的驱动表的散列表，扫描大表进行hash匹配。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220303232720490.png",alt:"image-20220303232720490"}})]),t._v(" "),s("h4",{attrs:{id:"_3-index-nested-loop-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-index-nested-loop-join","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.Index Nested-Loop Join")]),t._v(" "),s("p",[t._v("对关联字段进行索引后，驱动表查找速度就直线上升，不用遍历被驱动表了。只需要从索引中获取到对应的值后通过回表操作取出匹配的数据集合。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220303233305170.png",alt:"image-20220303233305170"}})]),t._v(" "),s("p",[s("strong",[t._v("小节：")])]),t._v(" "),s("ol",[s("li",[t._v("效率上面上是 index > block > simple")]),t._v(" "),s("li",[t._v("inner join 结果集小的表 驱动 结果集大的表，本质就是减少外层循环的次数, left join 选择结果小的作为驱动表。")]),t._v(" "),s("li",[t._v("为匹配的条件增加索引")]),t._v(" "),s("li",[t._v("增大 join  buffer size，并且减少查询的字段， 使得 block 缓存能装更多的数据批量匹配。")])]),t._v(" "),s("h3",{attrs:{id:"_20-icp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-icp","aria-hidden":"true"}},[t._v("#")]),t._v(" 20.ICP")]),t._v(" "),s("p",[t._v("索引下推 index condition push，对应就是 expain extra 里面的 using index condition。")]),t._v(" "),s("p",[t._v("简单说就是使用联合索引后，没用上索引的后面字段，先过滤后在进行回表操作，减少回表次数，减少磁盘io。当使用覆盖索引或者聚簇索引无需回表，不用ICP。")]),t._v(" "),s("h3",{attrs:{id:"_21-count-、count-1-、count-xxx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-count-、count-1-、count-xxx","aria-hidden":"true"}},[t._v("#")]),t._v(" 21.count(*)、count(1)、count(xxx)")]),t._v(" "),s("p",[t._v("count(*) = count(1)，统计所有的行，优化器会选择 key_len 最小的索引，一般是二级索引进行查询。")]),t._v(" "),s("p",[t._v("count(字段) 首先是会过滤掉所有的 NULL 值的记录，其次尽量选择有索引的自动并且 key_len 小的查询会快点。")]),t._v(" "),s("p",[t._v("select(*) 无法用上覆盖索引。")]),t._v(" "),s("h3",{attrs:{id:"_22-设计、优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_22-设计、优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 22.设计、优化")]),t._v(" "),s("p",[t._v("主键的设置一定要全局唯一，包括分布式全局唯一，第二是一定要有序")]),t._v(" "),s("p",[t._v("读写分离：主从同步")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220307235947950.png",alt:"image-20220307235947950"}})]),t._v(" "),s("p",[t._v("数据分片：水平分库、垂直分库")]),t._v(" "),s("p",[t._v("水平分库把大的表按照逻辑水平切分，用第三方如 mycat 工具，id % 10 路由不同的数据插入不同的数据库中，对代码的入侵低，但是对一些联表操作不友好。")]),t._v(" "),s("p",[t._v("垂直拆分就是把一部分字段进行两个表存储，对代码要求比较高。")]),t._v(" "),s("h3",{attrs:{id:"_23-分析表、优化表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_23-分析表、优化表","aria-hidden":"true"}},[t._v("#")]),t._v(" 23.分析表、优化表")]),t._v(" "),s("p",[t._v("分析表")]),t._v(" "),s("p",[t._v("对数据库进行了插入、更新后，可以使用 ANALYZE TABLE 进行刷新分析表数据查看分析结果。其中 Cardinality 是基数的意思，代表着数据的相关度，越是接近表数据总数，数据越离散，该字段创建的索引效果越好。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" account\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" balance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"linqin1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("141")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ANALYZE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" account\n")])])]),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/image-20220308001024295.png",alt:"image-20220308001024295"}})]),t._v(" "),s("p",[t._v("优化表：")]),t._v(" "),s("p",[s("code",[t._v("OPTILMIZE TABLE")]),t._v(" 语句只能优化表中的 VARCHAR 、 BLOB 或 TEXT 类型的字段。一个表使用了这些字段的数据类型，若已经 删除 了表的一大部分数据，或者已经对含有可变长度行的表（含有VARCHAR、BLOB或TEXT列的表）进行了很多 更新 ，则应使用OPTIMIZE TABLE来重新利用未使用的空间，并整理数据文件的 碎片，OPTIMIZE TABLE 语句对InnoDB和MyISAM类型的表都有效。该语句在执行过程中也会给表加上 "),s("code",[t._v("只读锁")])]),t._v(" "),s("p",[t._v("在InnoDB中，回收空间是简单通过Alter table进行整理空间。在优化期间，MySQL会创建一个"),s("strong",[t._v("临时表")]),t._v("，优化完成之\n后会删除原始表，然后会将临时表rename成为原始表。")]),t._v(" "),s("h3",{attrs:{id:"_24-mysql-如何解决幻读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_24-mysql-如何解决幻读","aria-hidden":"true"}},[t._v("#")]),t._v(" 24.mysql 如何解决幻读")]),t._v(" "),s("p",[t._v("首先 mysql 的默认数据库事务级别是不可重复读，这个是无法解决幻读问题的，但是 innodb 的 mvcc 加间隙锁可以解决这个问题。")]),t._v(" "),s("p",[t._v("mvcc 是多版本并发控制，新增、删除和修改都会记录版本信息，相当于数据的快照。")]),t._v(" "),s("p",[t._v("next-key lock 临键锁是在不可重复读的事务隔离级别下生效的。next-key lock 就是"),s("strong",[t._v("间隙锁和行锁的合集")]),t._v("，查询的索引含有唯一属性的时候，Next-Key Lock 会进行优化，将其降级为 Record Lock，即仅锁住索引本身，不是范围。插入时变化为间隙锁，对插入数据范围上锁。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：")]),t._v(" "),s("p",[t._v("在 update 语句的 where 条件没有使用索引，就会全表扫描，于是就会对所有记录加上 next-key 锁（记录锁 + 间隙锁），相当于把整个表锁住了。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);