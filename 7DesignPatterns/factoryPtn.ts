/**
 * factory pattern  is used to hide "the object's creation logic"
 *  -- all the complexity is hidden -- user just needs to create objs
 *  like a menu  in a hotel; you just have to order and get your meal
 *      without knowledge of how it is prepared
 *          -EXAMPLE-
 *  case creation of different type of users eg "regular", "admin" e.t.c
 */
class meal{
    serve(){}
}

class githeri extends meal{
   serve(): void {
        console.log("Chef serving Githeri");
   }
}

class nyama extends meal{
    serve(): void {
        console.log("Chef serving Nyama");
    }
}

class wali extends meal{
    serve(): void {
        console.log("Chef serving Wali");
    }
}

class Kitchen{
    static Order (mealType: string){
        let dish: meal;
        switch(mealType) {
            case "githeri":
                dish =  new githeri();
            break;
            case "nyama":
                dish =  new wali();
            break;
            case "wali":
                dish =  new wali();
            break;
            default:
                throw new Error("Invalid / unavailable dish");
        }
        return dish;
    }
}

const order1 = Kitchen.Order("githeri");
order1.serve();