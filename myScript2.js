class Car {
  constructor(brand) {
    this.carName = brand;
  }
}

myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carName;