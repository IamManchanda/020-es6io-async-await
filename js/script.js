/**
 * JS
 */

// navigator.geolocation.getCurrentPosition(function (pos) {
//   console.log('It worked!');
//   console.log(pos);
// }, function (error) {
//   console.log('It failed');
//   console.error(error);
// });

function getCurrentPosition(...args) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(...args, resolve, reject);
  });
}

async function go() {
  console.log('Starting');
  const pos = await getCurrentPosition();
  console.log(pos);
  console.log('Finished');
}

go();
