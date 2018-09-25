// using JS DOM :

//create a variable that selects primary-header by id and set the height of
//primary-header to 10vh

const primaryHeader = document.querySelector("#primary-header");
primaryHeader.style.height = "10vh";

//using your primary-header variable, set the backgroundColor of primary-header
//to black

primaryHeader.style.backgroundColor = "black";

//create a variable that selects the section tag and set the height of section
//to 80vh

const section = document.getElementsByTagName("section")[0];
section.style.height = "80vh";

//using your section variable, set the backgroundColor of section to beige

section.style.backgroundColor = "beige";

//create a variable that selects the primary-footer and set the height of to 10vh

const footer = document.getElementById("primary-footer");
footer.style.height = "10vh";

//using your primary-footer variable, set the backgroundColor of primary-footer
//to darkgrey

footer.style.backgroundColor = "darkgrey";

//create a variable that selects the main-content and set the backgroundColor to
//lightgrey, the width to 80%, margin to '0 auto' and the height should take up
// the entirety of the sections height

const mainContent = document.querySelector(".main-content");
mainContent.style.backgroundColor = "lightgrey";
mainContent.style.width = "80%";
mainContent.style.margin = "0 auto";
mainContent.style.height = "inherit";

//create a header and 3 links within .header-content

const headerContent = document.querySelector(".header-content");
headerContent.style.display = "flex";
headerContent.style.alignItems = "center";
headerContent.style.height = "100%";
headerContent.style.justifyContent = "space-between";

let h3 = document.createElement("h3");
headerContent.appendChild(h3);

h3.textContent = "Catstravaganza!!!!!";
h3.style.color = "beige";
h3.style.margin = "0 5%";

let navbar = document.createElement("navbar");
let about = document.createElement("nav");
let home = document.createElement("nav");
let login = document.createElement("nav");

about.innerText = "About";
home.innerText = "Home";
login.innerText = "Login";
navbar.style.color = "beige";
navbar.style.display = "flex";
navbar.style.width = "15vw";
navbar.style.justifyContent = "space-around";
navbar.style.marginRight = "5%";

headerContent.appendChild(navbar);
navbar.appendChild(about);
navbar.appendChild(home);
navbar.appendChild(login);

const footerContent = document.querySelector(".footer-content");
footerContent.style.display = "flex";
footerContent.style.height = "100%";
footerContent.style.alignItems = "center";

const copyright = document.querySelector("#copyright");
copyright.innerText = `Check out my cats ${copyright.innerText}`;
copyright.style.margin = "auto 0";

const catCage = document.querySelector(".cat-cage");
let catCount = 1;
for (let j = 0; j < 2; j++) {
  let wrapperDiv = document.createElement("div");
  wrapperDiv.style.display = "flex";
  wrapperDiv.style.justifyContent = "space-evenly";
  wrapperDiv.style.alignItems = "center";
  wrapperDiv.style.paddingTop = "5%";
  catCage.appendChild(wrapperDiv);
  for (let i = 0; i < 3; i++) {
    let div = document.createElement("div");
    div.style.height = "250px";
    div.style.width = "250px";
    let img = document.createElement("img");
    img.style.height = "inherit";
    img.style.width = "inherit";
    img.src = `./images/cat${[catCount]}.jpg`;
    div.appendChild(img);
    wrapperDiv.appendChild(div);
    catCount++;
  }
}
