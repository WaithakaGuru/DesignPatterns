/**
 * used to  build a better and fashionable way of building objects where each 
 *   object requires more than say 5 or 6 arguements
 * Allows that for any additional arguement, it's possible via adding a new method
 * */ 

class Person{
    private Age : number
    private EduLevel: string;   private Id: string;
    private MaritalStat: string; private Name: string
    private Nationality: string; private Occupation: string
    private skinColor: string;  private isAlive: boolean;

    constructor( builder: PersonBuilder){
      this.EduLevel = builder.EduLevel
      this.Age = builder.Age
      this.Id = builder.Id
      this.MaritalStat = builder.MaritalStat
      this.Name = builder.Name
      this.Nationality = builder.Nationality
      this.Occupation = builder.Occupation
      this.isAlive = builder.isAlive
      this.skinColor = builder.SkinColor
    }
}

class PersonBuilder{
    Age : number =0;
    public Name: string ='';
    EduLevel: string= 'Primary';
    MaritalStat: string = 'Single';
    isAlive: boolean = true;
    SkinColor:string = 'Dark';
    Nationality: string = 'Ke';
    Occupation: string = '';
    Id: string = '';

    setName(name:string): PersonBuilder{
        this.Name = name;
        return this;
    }
    setEduLevel(level: string): PersonBuilder{
        this.EduLevel = level;
        return this;
    }
    setMarital(Stat: string): PersonBuilder{
        this.MaritalStat = Stat;
        return this;
    }
    setId(id: string): PersonBuilder{
        this.Id = id;
        return this;
    }
    setNationality(nation: string): PersonBuilder{
        this.Nationality= nation;
        return this;
    }
    setOccupation(job: string): PersonBuilder{
        this.Occupation = job;
        return this;
    }
    setAlive(live: boolean): PersonBuilder{
        this.isAlive = live;
        return this;
    }
    setAge(age: number): PersonBuilder{
        this.Age = age;
        return this;
    }
     /* Adding a new method to set a new property */
    setSkincolor =(color: string): PersonBuilder =>{this.SkinColor = color; return this;}

    build(): Person{
        return new Person(this)     
    }
}

const person1 = new PersonBuilder().setAge(23).setAlive(true)
.setEduLevel("University").setId("Eden42059527")
.setMarital("Single and searching").setName("Waithaka Amos")
.setNationality("Kenyan").setOccupation("Coder /* S/ware Developer */")
.setSkincolor("Brown").build()

console.log(person1);