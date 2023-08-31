const getData = async () => {
  let y = await "Hello";
  console.log(y);
};

console.log(1);
getData();
console.log(2);

const fetchData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/msboffl");
    const data = await res.json();
    console.log(data);
    console.log(data.name);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
