class Person {
  constructor(personName, personAge) {
    this.personName = personName;
    this.personAge = personAge;
  }

  showInfo() {
    console.log(`Імʼя власника автівки: ${this.personName}, Вік: ${this.personAge}`);
  }
}

class Car {
  constructor(carBrand, carModel, carYear, carLicensePlate) {
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.carYear = carYear;
    this.carLicensePlate = carLicensePlate;
    this.carOwner = null;
  }

  setCarOwner(carOwner) {
    if (carOwner.personAge >= 18) {
      this.carOwner = carOwner;
    } else {
      console.log(`Майбутньому власнику тільки ${carOwner.personAge} років. Ще зарано для отримання водійського посвідчення!`);
    }
  }

  showInfo() {
    console.log(`Автівка: ${this.carBrand}, Модель: ${this.carModel}, Рік випуску: ${this.carYear}, Номер: ${this.carLicensePlate}`);
    if (this.carOwner) {
      this.carOwner.showInfo();
    } else {
      console.log(`Тому автівка ${this.carBrand} поки що без власника.`);
    }
  }
}

const person1 = new Person("Дмитро", 36);
const car1 = new Car("Nissan", "GT-R", 2017, "AA0101BB");
car1.setCarOwner(person1);
car1.showInfo();

console.log('----------');

const person2 = new Person("Олександра", 17);
const car2 = new Car("BMW", "X1", 2016, "KA7755OA");
car2.setCarOwner(person2);
car2.showInfo();