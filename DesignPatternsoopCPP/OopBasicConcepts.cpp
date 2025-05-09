#include <iostream> 
#include <fstream>
#include <cstdlib>
#include <cmath>
#include <ctime>
#include <string.h>
#include <vector>

using namespace std;
typedef string str;

/*Here i'll be discussing all stuff about oop in cpp*/
    // classes - blue prints from which objects are instantiated
class Shape{
    private:
        /*Mostly the attributes and some of the private 'functions(methods)' go here*/
        int sides;
        bool isCircle;

    public:
        /*getters and setters used to access the private attr/methods */
        void setSides(int nSides){sides = nSides;}
        int getSides(){return sides;}

        /*the 'this' keyword used to refer to the current object e.g.*/
        void setCirc(int i){
            (i == 0) ? this->isCircle = false : (i==1) ? this->isCircle = true : true;
        }
        // double Area ();
};

/*inheritance class 'triangle' inherits from 'shape'*/
    // Also the concept of constructors and destructors
class Triangle : public Shape{
    private:
       double A, B, C;
    public:
        Triangle(double x, double y, double z) // used to set values of an object at the moment of the object's instatiation
         {
            this->setSides(3);
            this->A = x; 
            this->B = y;
            this->C = z;
         }
         /*The below is a destructor - function called to clear the memory (that was occupied by an object) after there is no more reference of any object of that class 
                or if everything else in the program has run*/
        ~Triangle() {
            cout<<"\nTriangle's Destructor called";
        }
        // Methods - functions withins a class and which are accessible by objects of that class
        double Area (){
            double p, s, Sarea, area;
            p = A + B + C;
            s = p / 2;
            Sarea = (s*(s-A)*(s-B)*(s-C));
            area = sqrt(Sarea);
            cout<<"Triangle Area: ";
            return area;
        }
};

/*other ways of passing parameters to the constructor, defining a method outside its class etc.*/

class Rectangle : public Shape {
    private:
        double len;
        double wid;
    public:
        /*friend functions - they are friends to the classesand thus have access to all attr and methods*/
        friend double perimeter(Rectangle rect);
       double getLen (){return this->len;}
       double getWid (){return this->wid; }
        /*passing parameters using the initializer list method*/
        Rectangle(double length, double width) : len(length), wid(width){
            setSides(4);
        }
        /*Destructor function of Rectangle*/
        ~Rectangle(){cout<<"Rectangle class' Destructor called. ";}
       double Area();
};
/*method definition outside its class*/
double Rectangle::Area(){
// Had to use getters since the 'len' and 'wid' attributes are private thus directly inaccessible outside the class 
    double a = getLen();
    double b = getWid();
    return a * b;
}

double perimeter(Rectangle rect){
    double r, w, h;
    r = rect.getWid();
    w = rect.getLen();
    h = r+w; 
    return 2*h;
}


int main(){
    //instantiating a triangle object
    Triangle tri1(3,4,5);
    cout<<tri1.Area()<< " cm^2"<<endl;
    
    //instantiating a triangle object
    Rectangle rect1(10,5);
    double rectArea = rect1.Area();
    cout<<"rect1 Area is: "<<rectArea<<" cm^2\n";

    // using the friend function 
    cout<<"rect1 Perimeter is: "<<perimeter(rect1)<<" cm"<<endl;
    return 0;
}

/*Lets move on to OOP Patterns having known the required basics of OOP*/
