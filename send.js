//スコア一覧はbasic_score_back advanced_score_back expert_score_back master_score_backで区分されているので要素を取得する。
function fetch_status(){
    alert(location.pathname)
    if (location.hostname !== 'ongeki-net.com'){
        alert('オンゲキネットにログインし,aimeを選択してください。')
    }
}
fetch_status()