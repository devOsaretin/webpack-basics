import _ from "lodash";
import style from "./index.scss";
import "./clearButton";
import logo from "./assests/webpacklogo.png";
import "./assests/fonts/Redressed-Regular.ttf";

console.log(style);
const btn1 = document.getElementById("btn1");

const logoEl = document.getElementById("logo");

btn1.addEventListener("click", function () {
	const el = document.getElementById("header");
	el.innerHTML = "The content has been updated!";

	el.classList.add([style.header]);

	const listItems = ["Apple", "Orange", "Banana"];
	const ul = document.getElementById("list");
	_.forEach(listItems, function (item) {
		const tempEl = document.createElement("li");
		tempEl.innerHTML = item;
		ul.appendChild(tempEl);
	});
});

btn1.classList.add([style.button]);
logoEl.src = logo;
