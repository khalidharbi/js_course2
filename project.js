class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, carType) {
      super(name, manufacturer, id);
      this.carType = carType;
    }
  }
  
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, planeType) {
      super(name, manufacturer, id);
      this.planeType = planeType;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehiclesId = vehiclesId;
      this.reservationID = reservationID;
    }
  }
  
  const car1 = new Car("Car1", "Manufacturer1", "C001", "Gas");
  const car2 = new Car("Car2", "Manufacturer2", "C002", "Electric");
  const car3 = new Car("Car3", "Manufacturer3", "C003", "Gas");
  
  const plane1 = new Plane("Plane1", "Manufacturer4", "P001", "Type1");
  const plane2 = new Plane("Plane2", "Manufacturer5", "P002", "Type2");

  const employees = [];
  const vehicles = [];


  const driver1 = new Driver("Driver1", "D001", "01/01/1990", "DL001");
  const pilot1 = new Pilot("Pilot1", "P001", "02/02/1985", "PL001");


  employees.push(driver1, pilot1);
  vehicles.push(car1, plane1);

      // Create a reservations array to store reservations
      const reservations = [];

  // Make reservations using the function
  makeReservation("P001", "C001");
  makeReservation("D001", "P001");
  makeReservation("P002", "C002");



  // Print the content of the reservations array using map
  reservations.map((reservation) => console.log(reservation));
  
  
  // Function to check and make a reservation
  function makeReservation(employeeId, vehicleId) {
    const employee = employees.find((emp) => emp.id === employeeId);
    const vehicle = vehicles.find((veh) => veh.id === vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Mismatch: Pilot cannot drive a car.");
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
      console.log("Mismatch: Driver cannot pilot a plane.");
    } else {
      const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log("Reservation made:", reservation);
    }
  }
  
  makeReservation("P001", "C001");
  makeReservation("D001", "P001");
  makeReservation("P002", "C002");
  
  reservations.map((reservation) => console.log(reservation));