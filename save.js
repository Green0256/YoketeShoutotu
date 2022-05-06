function datax() {
  
  var time = new Date().getTime();
  
  var datas = ["login_time", "player_coin", "player_diamond", "st_play_count", "st_all_score", "st_all_coin", "st_diamond", "st_all_ring", "st_enemy_normal", "st_enemy_fire", "st_enemy_ice", "st_bullet_count", "st_play_time"]; // データを増やしたらここに追加する。
  default_amount = [time, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // データの初期値。ユーザーのレベル、XPなら 1, 初期のコイン数なら 100など。

  var m = "";
  var xm = "";

  for (var item in datas) {

    if (datas[item] == "player_items") {

      m += "localStorage.setItem('" + datas[item] + "', JSON.stringify(" + datas[item] + "));";
      xm += datas[item] + " = " + localStorage.getItem(datas[item]) + ";";

    } else {

      if (typeof(default_amount[item]) != 'string') {
        m += "localStorage.setItem('" + datas[item] + "', " + datas[item] + ");";
        xm += datas[item] + " = " + localStorage.getItem(datas[item]) + ";";
      } else { // 文字列だったら
        m += "localStorage.setItem('" + datas[item] + "', " + datas[item] + ");";
        xm += datas[item] + " = '" + localStorage.getItem(datas[item]) + "';";
      };
    };
  };

  return [datas, default_amount, m, xm];
}

function datacheck() { // ページにアクセスした際にすべてのデータが揃っているか検証。データが欠けていたらデータを追加する。
  datas = datax()[0];
  defaults = datax()[1];

  for (var item_info in datax()[0]) { // dataxから全てのデータ名を取得
    var item = localStorage.getItem(datas[item_info]); // そのデータがあるか確認

    if (datas[item_info] == "player_items" && item == null) {
      localStorage.setItem(datas[item_info], JSON.stringify(defaults[item_info])); // データ追加
      console.log(datas[item_info] + "追加"); // debug

    };

    if (item == null && datas[item_info] != "player_items") { // 無かったら
      localStorage.setItem(datas[item_info], defaults[item_info]); // データ追加

      console.log(datas[item_info] + "追加"); // debug
    };

  };
};

function datasave() { // 現在のゲーム進行状況をセーブする。
  datas = datax()[2]; // データを保存するコードを取得する。
  // console.log(datas); // デバッグ用

  myEval(datas); // 上のコードを実行する。
};

function dataload() { // 現在のデータを取得する。
  datas = datax()[3]; // データを読み込むコードを取得する。
  // console.log(datas); // デバッグ用

  myEval(datas); // 上のコードを実行する。
};

function myEval(expr) {
  Function(expr)();
}