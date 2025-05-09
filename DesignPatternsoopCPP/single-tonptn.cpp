#include <iostream>
#include <cmath>
#include <fstream>
#include <vector>
#include <ctime>
#include <string.h>
#include <cstdlib>

using namespace std;
typedef string st;

// The singleton pattern is one that limits the instantiation of a classonly one object 
//      - useful in providing settings or configurations that need be the same throughout
//          the programs life time
//      - for example Database connections

class Database{
    private:
        st dbName;
        st pass;
        st userName;
    protected:
        Database() {};
    public:
        void connect(){
            cout<<"connection under "<<userName<<" user name";
        }
};

class Connection : Database {
    public:
        ;
};

int main (){
    return 0;
}