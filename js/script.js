/**
 * JS
 */

// fetch('https://www.github.com/users/IamManchanda')
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(`Oh Noo! There is an error: ${error}`);
//   });

const video = document.querySelector('.harry');
navigator.mediaDevices.getUserMedia({ video: true })
  .then((mediaStream) => {
    video.srcObject = mediaStream;
    video.load();
    video.play();
  })
  .catch((error) => {
    console.log(error);
  });
