Dialyzer Match v1.1 iPhone オフライン対応版

必要なファイルは index.html と sw.js の２つだけです。
CSV・製品マスターは不要（index.html に内蔵）。

【iPhoneだけでインストール】
1. ZIPをiPhoneの「ファイル」アプリへ保存し、ZIPをタップして解凍します。
2. Safariでgithub.comへアクセス。既存のdialyzer-matchリポジトリへログインします。
3. index.html と sw.js をリポジトリ直下にアップロード（index.htmlは古いファイルと置換）。
   「Add file」→「Upload files」→「Commit changes」。
4. Settings → Pages で main / (root) を公開（既に設定済みなら不要）。
5. Safariで https://<username>.github.io/dialyzer-match/ を開きます。
6. 「✓ オフライン保存完了」が表示されるまで待ち、Safariの共有ボタン→「ホーム画面に追加」。
7. ホーム画面のアイコンをタップ。オンライン状態で再度「保存完了」を確認します。
8. 機内モードでホーム画面から起動し、HD/HDFの検索項目が表示されることを確認します。

補足:
- iPhoneの「ファイル」アプリでHTMLを直接開いてもオフラインWebアプリとして保存できません。
- オフライン時、参考資料への外部リンクは開けません。
- iOSが容量節約のため保存データを削除する場合があります。永久保存を保証するものではありません。
- 公開GitHub Pagesに患者氏名・ID等の機密情報をアップロードしないでください。
- 参考資料の仕様は更新されます。臨床的な代替可否を判定するツールではありません。
