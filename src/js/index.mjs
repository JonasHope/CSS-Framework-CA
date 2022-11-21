import storage from "./storage/index.mjs";

console.group("testing")
console.info("test local storage")
storage.save("example", [1, 2, 3]);
console.info("its working")

console.groupEnd()