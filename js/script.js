/**
 * JS
 */

// async function go() {
//   const p1 = await fetch('https://api.github.com/users/IamManchanda');
//   const p2 = await fetch('https://api.github.com/users/wesbos');
//   const res = await Promise.all([p1, p2]);
//   const dataPromises = res.map(r => r.json());
//   const [harry, wes] = await Promise.all(dataPromises);
//   console.log(harry, wes);
// }

// go();

async function getData(names) {
  const promises = names.map(name => fetch(`https://jsonplaceholder.typicode.com/${name}`).then(r => r.json()));
  console.log(promises);
  const fakeData = await Promise.all(promises);
  console.log(fakeData);
}

getData(['posts', 'comments']);
