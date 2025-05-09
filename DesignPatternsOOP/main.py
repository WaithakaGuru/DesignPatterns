# The main item of concern in this folder is to learn about design Patterns in OOP

# 1. The First is The BUILDER PATTERN 
#  it aims at separating an object's representation from it's construction; an object may require
#     about 20 propeties and it becomes quite tedious to pass all to the constructor in the order required eg 

 
class House:
    def __init__(self, storeys, doors, doortype, rooftype):
        self.storeys = storeys
        self.doors = doors
        self.doortype = doortype
        self.rooftype = rooftype


oneStoreyHouse = House(1, 3, "double", "Pointed") #object building and its rep ie (what it's made up of) are put together
print(f"{oneStoreyHouse.doors}  {oneStoreyHouse.doortype} {oneStoreyHouse.rooftype}")

# in the case above we just passing 4 arguements but in case of about 20 args,  the code would become messy 
#look at "Builder.py" to see the separation of the object's representation from it's construction

# 2. The state Pattern 
# used to implement different states of an object eg in a drawing app the cursor can be a pencil 
#   to draw or an eraser to erase

#       Thus the pattern utilises polymorphism 
#look at "Stateptn.py" to see details 



