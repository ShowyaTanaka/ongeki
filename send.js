//スコア一覧はbasic_score_back advanced_score_back expert_score_back master_score_backで区分されているので要素を取得する。
//github用 https://cdn.jsdelivr.net/gh/ShowyaTanaka/ongeki@main/send.js
//アクセス (function(url){s=document.createElement('script');s.src=url;document.body.appendChild(s);})('https://cdn.jsdelivr.net/gh/ShowyaTanaka/ongeki@main/send.js')
function fetch_status(){
    alert('updated?')
    alert(location.pathname.split('/')[1])
    if (location.hostname !== 'ongeki-net.com'){
        alert('オンゲキネットにログインし,aimeを選択してください。')
    }
}
fetch_status()