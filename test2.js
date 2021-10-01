Promise.resolve()
  .then(() => { // ①
    return 'Hello';
  })
  .then(value1 => console.log(value1))  // ②　Hello
  .then(value2 => console.log(value2)); // ③　undefined

/*
①のthen に渡された関数の戻り値は'Hello' なので、
内部的にPromise.resolve('Hello')が実行されて、②のthen で引数を参照している。
②の関数の戻り値はundefined なので③ではそのままundefine となるという流れ。
*/

// 以下と同じ
new Promise((resolve, reject) => {
        resolve('Hello');
    })
    .then(value1 => console.log(value1))
    .then(value2 => console.log(value2))


