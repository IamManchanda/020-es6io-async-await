/**
 * JS
 */

function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      /* eslint-disable prefer-promise-reject-errors */
      reject('That is too small of a value');
      /* eslint-enable */
    }
    setTimeout(() => resolve(`Completed after ${amount} ms`), amount);
  });
}

function catchErrors(fn) {
  return function (...args) {
    return fn(...args).catch((error) => {
      console.error(`Sorry but there is an error: ${error}`);
    });
  };
}

const go = async (name, last) => {
  console.log(`${name} ${last} started breathing.`);
  let res;

  res = await breathe(1000);
  console.log(`First Breathe: ${res}`);

  res = await breathe(500);
  console.log(`Second Breathe: ${res}`);

  res = await breathe(700);
  console.log(`Third Breathe: ${res}`);

  res = await breathe(400);
  console.log(`Fourth Breathe: ${res}`);

  res = await breathe(900);
  console.log(`Fifth Breathe: ${res}`);
};

const wrappedFunction = catchErrors(go);
wrappedFunction('Harry', 'Manchanda');
