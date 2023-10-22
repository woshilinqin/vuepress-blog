(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{284:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h4",{attrs:{id:"对应于关系数据库术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对应于关系数据库术语","aria-hidden":"true"}},[a._v("#")]),a._v(" 对应于关系数据库术语")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Elasticsearch Index "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" Database \nTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" Tables \nProperties "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" Schema\n")])])]),s("p",[a._v("Elasticsearch集群可以包含多个索引(indices)（数据库），每一个索引可以包含多个类型(types)（表），每一个类型包含多个文档(documents)（行），然后每个文档包含多个字段(Fields)（列）。")]),a._v(" "),s("h4",{attrs:{id:"集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群","aria-hidden":"true"}},[a._v("#")]),a._v(" 集群")]),a._v(" "),s("p",[a._v("集群：一个集群(cluster)由一个或多个节点组成，它们具有相同的cluster.name，会感知和平衡数据，有一个主节点（选举）\n节点：每个es实例\n分片：保存索引的一部分数据，\n主要分片：index的一部分,默认分配5个。\n复制分片：备份主要分片，可以调整数目。\n当索引创建完成的时候，主分片的数量就固定了，但是复制分片的数量可以随时调整。")]),a._v(" "),s("h4",{attrs:{id:"集群健康"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群健康","aria-hidden":"true"}},[a._v("#")]),a._v(" 集群健康")]),a._v(" "),s("ul",[s("li",[a._v("green\t所有主要分片和复制分片都可用")]),a._v(" "),s("li",[a._v("yellow\t所有主要分片可用，但不是所有复制分片都可用")]),a._v(" "),s("li",[a._v("red\t不是所有的主要分片都可用")])]),a._v(" "),s("p",[a._v("主分片和备分片不会出现在同一个节点上,如果你只有一个节点，那么5个replica都无法分配（unassigned）。所以单节点健康状态肯定是yellow。")]),a._v(" "),s("h4",{attrs:{id:"节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 节点")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("主节点")]),a._v("：设定配置文件 elasticsearch.yml 中的node.master属性为true(默认) 成为主节点，选举")]),a._v(" "),s("li",[s("code",[a._v("数据节点")]),a._v("：node.data属性为true(默认) 成为数据节点。如果我们要使用一个专门的主节点，应将其node.data属性设置为false。")]),a._v(" "),s("li",[a._v("客户端节点（"),s("code",[a._v("协调节点")]),a._v("）：如果我们将node.master属性和node.data属性都设置为false，那么该节点就是一个客户端节点，扮演一个负载均衡的角色，将到来的请求路由到集群中的各个节点。默认情况下es集群中所有的节点都能当协调节点。")])]),a._v(" "),s("h4",{attrs:{id:"新增数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 新增数据")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Elasticsearch 集群中的每个节点都包含了改节点上分片的元数据信息。协调节点 (默认) 使用文档 ID 参与计算，以便为路由提供合适的分片。Elasticsearch 使用MurMurHash3函数对文档 ID 进行哈希，其结果再对分片数量取模，得到的结果即是索引文档的分片。（"),s("code",[a._v("计算分片")]),a._v("）")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("shard "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("document_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("num_of_primary_shards"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("​当分片所在的节点接收到来自协调节点的请求后，会将该请求写入 translog(我们将在本系列接下来的文章中讲到)，并将文档"),s("code",[a._v("加入内存缓冲")]),a._v("。如果请求在主分片上成功处理，该请求会并行发送到该分片的副本上。当 translog 被同步 (fsync) 到全部的主分片及其副本上后，客户端才会收到确认通知。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("​内存缓冲会被周期性刷新")]),a._v(" (默认是 1 秒)，内容将被写到文件系统缓存的一个新段上。虽然这个段并没有被同步 (fsync)，但它是开放的，内容"),s("strong",[a._v("可以被搜索到")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("每 30 分钟，或者当 translog 很大的时候，translog 会被清空，文件系统缓存会被同步。这个过程在 Elasticsearch 中称为冲洗 (flush)。在冲洗过程中，内存中的缓冲将被清除，内容被写入一个新段。段的 fsync 将创建一个新的提交点，并将"),s("code",[a._v("内容刷新到磁盘")]),a._v("。旧的 translog 将被删除并开始一个新的 translog。")])])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://blog-07.oss-cn-guangzhou.aliyuncs.com/picBak/1553148089139.png",alt:"1553148089139.png"}})]),a._v(" "),s("h3",{attrs:{id:"更新删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新删除","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新删除")]),a._v(" "),s("p",[a._v("​\t删除和更新也都是写操作。但是 Elasticsearch 中的文档是不可变的，因此不能被删除或者改动以展示其变更。那么，该如何删除和更新文档呢？\n磁盘上的每个段都有一个相应的.del文件。当删除请求发送后，文档并没有真的被删除，而是在.del文件中被标记为删除。该文档依然能匹配查询，但是会在结果中被过滤掉。当段合并 (我们将在本系列接下来的文章中讲到) 时，在.del文件中被标记为删除的文档将不会被写入新段。\n​\t接下来我们看更新是如何工作的。在新的文档被创建时，Elasticsearch 会为该文档指定一个版本号。当执行更新时，旧版本的文档在.del文件中被标记为删除，新版本的文档被索引到一个新段。旧版本的文档依然能匹配查询，但是会在结果中被过滤掉。")]),a._v(" "),s("p",[a._v("文档被索引或者更新后，我们就可以执行查询操作了。\n删除的索引其实不是直接删除，标记一下"),s("code",[a._v(".del")]),a._v("文件。"),s("code",[a._v("磁盘空间未释放")])]),a._v(" "),s("h3",{attrs:{id:"查询："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询：","aria-hidden":"true"}},[a._v("#")]),a._v(" 查询：")]),a._v(" "),s("h6",{attrs:{id:"查询阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询阶段","aria-hidden":"true"}},[a._v("#")]),a._v(" 查询阶段")]),a._v(" "),s("p",[a._v("在这个阶段，协调节点会将查询请求路由到索引的全部分片 (主分片或者其副本) 上。"),s("code",[a._v("每个分片独立执行查询")]),a._v("，并为查询结果创建一个优先队列，以相关性得分排序 (我们将在本系列的后续文章中讲到)。全部分片都将匹配文档的 ID 及其相关性得分返回给协调节点。协调节点创建一个优先队列并对结果进行全局排序。会有很多文档匹配结果，但是，默认情况下，每个分片只发送前 10 个结果给协调节点，协调节点为全部分片上的这些结果创建优先队列并返回前 10 个作为 hit。")]),a._v(" "),s("h6",{attrs:{id:"提取阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取阶段","aria-hidden":"true"}},[a._v("#")]),a._v(" 提取阶段")]),a._v(" "),s("p",[a._v("当协调节点在生成的全局有序的文档列表中，为全部结果排好序后，它将向包含原始文档的分片发起请求。全部分片填充文档信息并将其返回给协调节点。")]),a._v(" "),s("h3",{attrs:{id:"使用经验："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用经验：","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用经验：")]),a._v(" "),s("p",[a._v("一般集群总分片数目不要超过1.3w个，后面再多性能会变慢。")]),a._v(" "),s("p",[a._v("规划好索引的创建，保存周期，控制分片数目和磁盘水位大小。")]),a._v(" "),s("p",[a._v("参考文档："),s("a",{attrs:{href:"https://www.infoq.cn/article/analysis-of-elasticsearch-cluster-part01?utm_campaign=rightbar_v2&utm_source=infoq&utm_medium=articles_link&utm_content=link_text",target:"_blank",rel:"noopener noreferrer"}},[a._v("剖析 Elasticsearch 集群系列"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);