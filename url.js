import url from "url";

const addr = "http://localhost:8080/default.htm?year=2022&month=september";

const q = url.parse(addr, true);

console.log(q.hostname);
console.log(q.query);
console.log(q.search);
console.log(q.host)