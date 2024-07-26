/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function addImage1() {
  const mainElement = document.querySelector("main");

  const newElement = document.createElement("img");
  newElement.classList.add("car");
  newElement.setAttribute(
    "src",
    "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685458010/autoexpress/2023/05/Porsche%20911%20GTS%20UK%20001_otx6j7.jpg"
  );

  mainElement.append(newElement);
}

const addImage2 = function () {
  const mainElement = document.querySelector("main");

  const newElement = document.createElement("img");
  newElement.classList.add("car");
  newElement.setAttribute(
    "src",
    "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685458010/autoexpress/2023/05/Porsche%20911%20GTS%20UK%20001_otx6j7.jpg"
  );

  mainElement.append(newElement);
};

const addImage3 = () => {
  const mainElement = document.querySelector("main");

  const newElement = document.createElement("img");
  newElement.classList.add("car");
  newElement.setAttribute(
    "src",
    "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685458010/autoexpress/2023/05/Porsche%20911%20GTS%20UK%20001_otx6j7.jpg"
  );

  mainElement.append(newElement);
};

addImage1();
addImage2();
addImage3();
