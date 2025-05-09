/** 
 *  -- [ 22nd Jan 2025 ] --
 * the Observer pattern is used when an object needs to update a list of objects
 *          about a change in  its internal state
 *  -- eg notify subscribers of a give youtube account when a new video has been uploaded --
 */

interface observer{
    update(message: string): void;
}

class Observer implements observer {
    private name: string;
    private updates: string[] = [];
    constructor(observerName: string){
        this.name =  observerName;
    }
    update(message: string): void {
        this.updates.push(message);
        console.log(`Observer: "${this.name}" has received message: "${message}"`);
    }
    showUpdates = (): string[] => this.updates;
}
    // Also known as the subject class
class Updater{
    private observers: observer[] = [];
    
    public addMembers(...ob: observer[]) {
        ob.forEach(observer => this.observers.push(observer));
    }

    public removeMember(ob: observer){
        const idx = this.observers.indexOf(ob);
        if(!(idx === -1)){
            this.observers.splice(idx, 1);
        }else console.log("No search member found");
    }

    public update(msg: string): void{
        this.observers.forEach(ob => ob.update(msg));
    }
}

// examples usage 
const Account = new Updater();
const subscriber1 = new Observer("Waithaka");
const subscriber2 = new Observer("Amos");
const subscriber3 = new Observer("Eden");

Account.addMembers(subscriber1, subscriber2, subscriber3);

Account.update("New video uploaded");
