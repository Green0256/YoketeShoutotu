function login() {
  
  var time = new Date(); // 現在の時間を取得
  var last_login = new Date(login_time); // 最後のログインの時間を取得
  
  var elapsedTime = time.getTime() - last_login.getTime();
  var mins = elapsedTime / (1000 * 60);
  
  var idle_min = Math.floor(mins); // 経過時間(分)
  
  if (idle_min >= 1200) { // 20時間以上経過してたら
    login_time = time.getTime(); // 最終ログイン時間を変更
    
    // ログボ受け取り？
    // デイリークエストリセット？
    // とかの処理をする
    
  };
  
  datasave();
};