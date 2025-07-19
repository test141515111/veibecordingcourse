# Deploy Fork Command

このコマンドは、元のリポジトリから最新の変更を取得して、フォーク先のリポジトリにデプロイします。

## 実行内容

1. 元のリポジトリ（https://github.com/masayasusuzuki/veibecordingcourse）から最新の変更を取得
2. フォーク先のリポジトリ（https://github.com/test141515111/veibecordingcourse）にプッシュ

## 手順

1. upstreamリモートが設定されているか確認し、なければ追加
2. upstreamから最新の変更をフェッチ
3. upstream/mainをローカルのmainブランチにマージ
4. 変更をoriginにプッシュ

## 注意事項
- 現在のブランチがmainであることを確認してください
- ローカルに未コミットの変更がある場合は、先にコミットまたはスタッシュしてください