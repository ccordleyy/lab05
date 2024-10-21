const rootDiv = document.getElementById("root");
const newHeading = document.createElement("h2");
newHeading.textContent = "MANIPULANDO EL DOM";
rootDiv.appendChild(newHeading);

const myLink = document.getElementById("myLink");
myLink.href = "https://keybr.com";

const buyList = [
  "books",
  "bread",
  "eraser",
  "earphones",
  "collection-cards",
  "hdmi",
  "vga",
  "motherboard",
  "university-books",
];

const ul = document.createElement("ul");

buyList.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

rootDiv.appendChild(ul);
