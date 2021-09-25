//210924 授業中 先生の回答例

/*use strict';
const fs = require('fs');
const fileName = './test.txt';
async function main(){//この中でならawait構文が使える
    for (let count = 0; count < 30; count++) {
        //awaitを使うには、promiseオブジェクトでなければいけない
        //appendFileSyncを使わずに、ここで同期的に実行を待つことができる
        await new promise((resolve)=>{
            //ここに非同期的処理を書く
            fs.appendFile(fileName, '0.・・・・・\n', 'utf8', () => {
                resolve(); //ファイル書き込みが終わったらresolveを実行
            });//await構文はresolveの実行を待つものだからresolveは必要
        });    //そのため中の処理が全て終わるところにresolveを置く
        await new promise((resolve)=>{
            fs.appendFile(fileName, '1.おはよう！\n', 'utf8', () => {
                resolve();
            });
        });
        await new promise((resolve)=>{
            fs.appendFile(fileName, '2.こんにちは\n', 'utf8', () => {
                resolve();
            });
        });
        await new promise((resolve)=>{
            fs.appendFile(fileName, '3.こんばんは\n', 'utf8', () => {
                resolve();
            });
        });
 }
}
//非同期処理はawait構文によって同期的に処理できる
//await構文はpromiseにしか使えない
//上では関数を定義しただけなので、ここでmain関数を呼ぶ
main();*/

//スッキリに書き直し
'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(str){
    return new Promise(
        resolve => {
            fs.appendFile(fileName, str, 'utf8', () =>{
                resolve();
            });
        }
    );
}

async function main(){
    for(let count = 0; count <50; count++){
        await appendFilePromise('零.・・・・・\n');
        await appendFilePromise('壱.おはよう！\n');
        await appendFilePromise('弍.こんにちは\n');
        await appendFilePromise('参.こんばんは\n');
    }
}
main();