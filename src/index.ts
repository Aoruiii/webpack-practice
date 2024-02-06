import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("original file");

const elton = new Dog("Elton", "Australian Sheperd", 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(2, 3));

const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Spring Shelter");
