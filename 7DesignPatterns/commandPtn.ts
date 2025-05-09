/**
 *   - [ 20th to 21st Jan 2025 ] -
 * the command pattern is used to create multipurpose independent functions
 *  - turns a request into a standalone object thus decoupling the sender of the
 *      request from the object that actually executes it.
 *  - each  request has an execute and an undo function.
 */

interface Command {
    execute(value: number): any;
    undo(value: number):any ;
}

class Calculator{
    public value: number = 0;
    private history: Command[] = [];
    doAction(command: Command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }
    undoAction(){
        if (this.history.length === 0) {
            console.log("No actions to undo.");
            return;
        }
        const recent:any = this.history.pop();
        this.value = recent.undo(this.value);
    }
    getHistory(): Command[]{
        return this.history;
    }
}

class Add implements Command{
    private Value: number;
    constructor(val:number){
        this.Value = val;
    }
    execute = (value: number) => this.Value += value;
    undo = (value: number) =>  this.Value -=  value;
}

class Subtract implements Command{
    private Value: number;
    constructor (num: number) {
        this.Value = num;
    }
    execute = (value: number) => value -= this.Value ;
    undo = (value: number) => this.Value += value;
}

class Multiply implements Command{
    private Value: number;
    constructor(num: number){
        this.Value = num;
    }
    execute = (value: number) => value===0? this.Value *1 : this.Value*value;
    undo = (value: number) => value / this.Value ;
}

class Divide implements Command{
    private Value: number;
    constructor(num: number) {
        this.Value = num;
    }
    execute = (value: number) => value === 0? 1 / this.Value : value/ this.Value;
    undo = (value: number) => value * this.Value;
}

// example usage
const calc = new Calculator();
const sum1 = new Add(14);
const sum2 = new Subtract(6);
const sum3 = new Multiply(4);
const sum4 = new Divide(1.5);

// initial  value of the calculator is 0
console.log(calc.value);
calc.doAction(sum1); // add 14
console.log(calc.value);
calc.doAction(sum2); // subtract 6
console.log(calc.value);
calc.doAction(sum3); // multiply by 4
console.log(calc.value);
calc.doAction(sum4);
console.log(calc.value);
calc.undoAction();
console.log(calc.value);
calc.undoAction();
console.log(calc.value);
calc.undoAction();
console.log(calc.value);
calc.undoAction();
console.log(calc.value);


