---
title: "Yesodによる日本語推論システムlightblueの開発環境の構築"
description: "言語処理学会 第32回年次大会(NLP2026), 2026"
auther: "佐伯 小遥, 富田 朝, 松原 舞, 戸次 大介"
pubDate: "March 11 2026"
paperUrl: "https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/Q6-13.pdf"
slideUrl: ""
tags: ["Domestic"]
---
本論文では，プログラミング言語 Haskell の Webアプリケーションフレームワーク Yesod にて実装された，日本語自動推論システム lightblue の開発環境 express を提案する．本環境は，lightblue の推論フロー（統語・意味解析，型検査，および証明探索）に対話的な操作性を導入したものである．また，事前計算およびキャッシュ機構を取り入れることで，特定条件下での推論の検証を可能にし，対話的な試行錯誤に基づく開発作業の効率化に貢献する