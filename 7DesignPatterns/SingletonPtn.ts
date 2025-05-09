/**
 * singleton is a pattern that limits the instantiation of a class to only 
 *      a single object - [ 22nd Jan 2025 ] -
 */


class SingletonLogin{
    private constructor(){console.log("new Singleton Object created!");};
    private static Login: any | SingletonLogin;
    private static loggerMessages: string[] = [];
    static makeLogin(message: string){
        this.loggerMessages.push(message);
        if(!this.Login){
            this.Login = new SingletonLogin();
        }
        return this.Login;
    }
    
    getLogNotes() {
        return SingletonLogin.loggerMessages;
    }
}

// const log1 = SingletonLogin.makeLogin("Waithaka Logged in");
// console.log(log1.getLogNotes());
// const log2 = SingletonLogin.makeLogin("Amos Logged in");
// console.log(log2.getLogNotes());
//     // confirming whether a new object has been  created
// console.log(log1 === log2);

    /* -- A more complex but reasonable RealLife example --*/
class LoginManager{
    private static Logger: LoginManager;
    private loggerDetails: string | null = null;
    private constructor() {console.log("Singleton Logger instance Created");}

    public static makeLogger() : LoginManager {
        if(!this.Logger){
            this.Logger = new LoginManager();
        }
        return this.Logger;
    }

    private isLoggedIn(): boolean{
        return this.loggerDetails !== null;
    }

    public logIn(username: string, password: string): void {
        if(this.auth(username, password)){
            this.loggerDetails = username;
            console.log("Successfully Logged in :)");
            return;
        }
        console.log("invalid credentials!!");
    }
    
    public logOut(): void {
        this.loggerDetails = null;
        console.log("Successfully logged out :)");
    }

    public fetchData(): void {
        if(!this.isLoggedIn()){
            console.log("please log in first");
            return;
        }
        console.log("Personal Data: [ Your Stored and dynamically generated Data ]");
    }

    private auth(a: string, b:string): boolean{
        return a==="admin" && b==="pass1234";
    }
}

// example usage
const logger1 = LoginManager.makeLogger();
    // trying to fetch data without logging in
logger1.fetchData();
    // logging in with wrong credentials
logger1.logIn("admin", "weijjkhn");
    // logging in with correct credentials
logger1.logIn("admin", "pass1234");
logger1.fetchData();
    // trying to create a new logger instance 
const logger2 = LoginManager.makeLogger();
console.log(logger1 === logger2);
    // logging out
logger2.logOut();
    // since both logger1 and logger2 are same, logger1 should aldo be logged out
// checking whether logger1 is logged out
logger1.fetchData();

