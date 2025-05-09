/**
 * Strategy  pattern is used when there are multiple ways to
 *     solve a task -- each  way  is set as a class
           -- Example --
 * the task is to learn via studying -- there are many methods of studying --
 */
interface StudyMethod {
    study(): void;
}

class Read implements StudyMethod {
    study() {
        console.log("study through reading Books");
    }
}

class Watch implements StudyMethod{
    study() {
        console.log("study by watching tutorials");
    }
}

class Listen implements StudyMethod{
    study() {
        console.log("study via listening to educational audio");
    }
}

class Imitate implements StudyMethod{
    study() {
        console.log("study through imitating experts");
    }
}

class Learner {
    private learningMethod: StudyMethod;
    constructor(a:any =""){this.learningMethod = a}
    setStudyMtd(learningmethod: StudyMethod) {
        this.learningMethod = learningmethod
    }
    
    learn(){
        if(!this.learningMethod) 
            throw new Error("Studying method not set!!");
        this.learningMethod.study();
    }
}

// example usage 
const learner1 = new Learner();
learner1.setStudyMtd(new Read());
learner1.learn();
learner1.setStudyMtd(new Watch())
learner1.learn();
learner1.setStudyMtd(new Imitate)
learner1.learn();
learner1.setStudyMtd(new Listen())
learner1.learn();
