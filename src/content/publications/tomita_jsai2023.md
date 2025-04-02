---
title: "言語学的に妥当なCCGツリーバンク構築の試み."
auther: "富田 朝, 谷中 瞳, 戸次 大介"
description: "人工知能学会(JSAI2023), 2023"
pubDate: "June 7 2023"
paperUrl: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2023/0/JSAI2023_2E6GS605/_article/-char/ja/"
slideUrl: "JSAI2023_slide"
tags: ["Non-Peer-Reviewed","国内学会"]

---
組合せ範疇文法(CCG)のパージングはCCGツリーバンクを学習・評価データにすることが多いため、言語学的に妥当なCCGツリーバンクの構築が必要である。しかし、現行の日本語CCGツリーバンクであるCCGbankでは、受身・使役の構文に対して誤った分析がなされていることが指摘されている。ABC文法のツリーバンクABCTreebankでは、項構造など多くの改善がなされたが、日本語CCGの標準的な統語素性が記述されておらず、統語情報としては不十分である。一方、CCG統語解析器lightblueの出力には標準的な統語素性が与えられているが、項構造に誤りが多いという欠点がある。本研究では、ABCTreebankが持つ利点とlightblueが持つ利点を合わせることで、より言語学的に妥当で詳細な情報を持った日本語ツリーバンクを生成する手法を提案する。ABCTreebankから得られた用言の語彙項目を用いてlightblueの語彙項目をフィルターするアルゴリズムの開発を行い、lightblueの出力を変換することで、言語学的に妥当なCCGツリーバンクを構築する。