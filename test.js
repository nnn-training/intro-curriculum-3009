let promise = new Promise((resolve) => { resolve(0) });
for (let count = 1; count <= 30; count++) {
  promise = promise.then((v) => {
    console.log(v+1);
    return v+1;
  });
}
