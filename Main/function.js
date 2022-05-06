// JSONファイルの読み込み。
function readJSON(file_name) {

  var f = file_name;
  var retJson;

  var obj = new XMLHttpRequest();

  obj.open('get', f, false); //ファイルオープン : 同期モード
  obj.onload = function() {
    try {
      retJson = JSON.parse(this.responseText); //JSON型でパース。
    } catch (e) {
      console.log("コマンド定義ファイルの読み込み、解析に失敗しました。");
    }
  }
  obj.send(null); //ここで読込実行。
  return retJson;
}

function arrShuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  return arr;
};

function fRange(start, end, shuffle = false) { // start 〜 endまでの数値が入った配列を生成する
  var arr = new Array(end - start + 1).fill(null).map((_, i) => i + start);
  if (shuffle == true) { var arr = arrShuffle(arr) };

  return arr;
};

function lot(data) {
  const rand = Math.floor(Math.random() * 100);
  let rate = 0;
  
  for (const prop in data) {
    rate += data[prop];
    if (rand <= rate) {
      result = prop;
      break;
    };
  };
  return parseInt(result);
};