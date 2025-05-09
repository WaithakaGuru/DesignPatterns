/**
 *  -- [ 22nd Jan 2025 ] --
 * The Memento pattern is used to implement the undo action
 */

class Memento {
    constructor(private state: string){}
    getState() {
        return this.state;
    }
}

class Editor{
    private info: string = '';

    setInfo(info: string){
        this.info = info;
    }

    getInfo(){
        return this.info;
    }

    save(): Memento{
        return new Memento(this.info);
    }

    restore(memento: Memento){
        this.info = memento.getState();
    }
}

// caretaker class - handles the mementos -
class CareTaker{
    private mementos: Memento[] = [];
    
    saveState(editor: Editor){
        this.mementos.push(editor.save());
    }
    restoreState(editor:Editor){
        if(this.mementos.length> 0){
            const memento = this.mementos.pop()!;
            editor.restore(memento);
        }
        else console.log("No more undo Actions");
    }
}

// Example usage
const editor1 = new Editor();
const caretaker = new CareTaker();

editor1.setInfo("Iam a web Developer");
caretaker.saveState(editor1);
console.log(editor1.getInfo());

editor1.setInfo("Iam an Algorithm Developer");
console.log(editor1.getInfo());
// caretaker.saveState(editor1);

caretaker.restoreState(editor1);
console.log(editor1.getInfo());
caretaker.restoreState(editor1);
console.log(editor1.getInfo());

