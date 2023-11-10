import _ from "lodash";
import style from "./index.css";
import "./clearButton";

console.log(style);
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
	const el = document.getElementById("header");
	el.innerHTML = "The content has been updated!";

	const listItems = ["Apple", "Orange", "Banana"];
	const ul = document.getElementById("list");
	_.forEach(listItems, function (item) {
		const tempEl = document.createElement("li");
		tempEl.innerHTML = item;
		ul.appendChild(tempEl);
	});
});

btn1.classList.add([style.button]);
