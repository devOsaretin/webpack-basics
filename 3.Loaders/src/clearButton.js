import classes from "./clearButton.css";

const el = document.createElement("button");

el.innerHTML = "Clear";
el.classList.add([classes.button]);
el.onclick = function () {
	alert("clear click");
};
document.body.appendChild(el);
