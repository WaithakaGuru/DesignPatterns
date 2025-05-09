/**
 * the state pattern is used to  implement a platform where 
 *      - different tasks can be implemented using same actions
*       - each task is added as a class that implements the actions
 *  --Example-- [ 22nd Jan 2025 ]
 *      a canvas on which one can draw or erase by dragging the mouse
 */

interface Task{
    mouseUp(): string;
    mouseDown(): string;
}

class Draw implements Task{
    mouseUp = (): string => "Show Pencil Icon";
    mouseDown = (): string => "Draw a Line";
}

class Erase implements Task{
    mouseUp = (): string => "Show Eraser Icon";
    mouseDown = (): string => "Clear a Section";
}

class Zoom implements Task{
    mouseUp = (): string => "Show Lens Icon";
    mouseDown = (): string => "Expand Section View";
}

class Canvas{
    task: any;
    setGetTask(task: Task){
        this.task = task;
        return this.task
    }
}

// Example usage
const canv1 = new Canvas();
const pencil  = canv1.setGetTask(new Draw());
console.log(pencil.mouseDown());