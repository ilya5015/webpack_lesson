async function start() {
  return await Promise.resolve("async is working");
}

let a = 6;

export default start;

import("lodash").then((_) => {
  console.log("Lodash", _.random(0, 42, true));
});
