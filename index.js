import{ add,mult} from "./calculator";
import "./style.css";

console.log(add(5,10));
console.log(mult(3,6));

const h1= document.createElement("h1");
h1.classList.add("redtxt");
h1.innertext="Hello Web 13";
document.getElementById("root").appendChild(h1);