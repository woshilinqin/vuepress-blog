(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{366:function(e,t,s){"use strict";s.r(t);var l=s(2),n=Object(l.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"_1-宏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-宏","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.宏")]),this._v(" "),t("p",[this._v("excel 合并同一列的单元格，不同列小酒馆所有的 Cells 第二个值为实际中的具体列")]),this._v(" "),t("div",{staticClass:"language-vb extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('Sub MergeSameCells()\n    Dim lRow As Integer\n    Application.DisplayAlerts = False\n    With ActiveSheet\n        lRow = .Range("A65536").End(xlUp).Row   \'获得A列最后一个有数据的行\n        For i = lRow To 2 Step -1\n            If .Cells(i, 1).Value = .Cells(i - 1, 1).Value Then\n                .Range(.Cells(i - 1, 1), .Cells(i, 1)).Merge\n            End If\n        Next\n    End With\n    Application.DisplayAlerts = True\nEnd Sub\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);