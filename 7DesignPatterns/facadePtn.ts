/**
 *  -- [ 22nd Jan 2025 ] --
 * the Facade pattern is used to create / provide a simplified interface
 *      for a complex system - Abstracts all the complexity of a system from  the user-
 */

    /* subsystems that makeup the whole system */
class Hotel{
    bookRoom(): void{
        console.log("Hotel room boooked successfully");
    }
}
class Car{
    rentCar(): void{
        console.log("Car rented successfully");
    }
}
class Flight{
    bookFlight(): void{
        console.log("Flight booked successfully");
    }
}

    // a facade to simplfy all the booking complexities
class VacationFacade{
    private hotel = new Hotel();
    private car = new Car();
    private flight = new Flight();

    // method to easen booking process
    bookVacation() : void{
        this.hotel.bookRoom();
        this.car.rentCar();
        this.flight.bookFlight();
    }
}

// Example usage
const client1 = new VacationFacade();
client1.bookVacation();
