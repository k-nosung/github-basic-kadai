// 算術演算子を使った場合の戻り値を出力する
 console.log(45 + 18);
 
 // 比較演算子を使った場合の戻り値を出力する
 console.log(45 > 18);
 
 // 等価演算子を使った場合の戻り値を出力する
 console.log('5' == 5);
 
 // 厳密等価演算子を使った場合の戻り値を出力する
 console.log('5' === 5);
// 変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);
 
// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num === 4) {
  console.log('大当たりです');
}