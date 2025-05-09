/**
 * Decorator pattern is used to extend the properties of
 *      an  object without changing its internal state
 * -It makes an object opec fot r extension  but closed 
 *      -- for modification
 */
    
interface Beverage{
    cost(): number;
    description(): string;
}
class coffee implements Beverage{
    cost(): number{
        return 5;
    }
    description(): string {
        return "A mug of Coffee";
    }
}

class decoratorHelper implements Beverage{
    protected beverage: Beverage;
    constructor(beverage: Beverage){
        this.beverage = beverage
    }
    cost(): number {
        return this.beverage.cost();
    }
    description(): string {
        return this.beverage.description();
    }
    
}

class milk extends decoratorHelper{
    cost(): number{
        return this.beverage.cost() + 2; // additional cost for milk
    }
    description(): string {
        return this.beverage.description() + " with Milk"
    }
}

class sugar extends decoratorHelper{
    cost(): number {
        return this.beverage.cost() + 3; // additional cost for sugar
     }
     description(): string {
         return this.beverage.description() + " with Sugar"
     }
}

let drink = new coffee();
    console.log(drink.description());
    console.log(`The price is ${drink.cost()}`);
drink = new milk(drink);
    console.log(drink.description());
    console.log(`The price is ${drink.cost()}`);
drink = new sugar(drink);
    console.log(drink.description());
    console.log(`The price is ${drink.cost()}`);
