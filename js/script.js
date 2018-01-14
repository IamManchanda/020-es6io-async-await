/**
 * JS
 */

function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      /* eslint-disable prefer-promise-reject-errors */
      reject('Something went wrong!');
      /* eslint-enable */
    }
    setTimeout(() => resolve(`Done for ${amount} ms`), amount);
  });
}

breathe(1000)
  .then((response) => {
    console.log(response);
    return breathe(500);
  })
  .then((response) => {
    console.log(response);
    return breathe(600);
  })
  .then((response) => {
    console.log(response);
    return breathe(400);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
