class House:
    def __init__(self, builder):
        self.storeys = builder.storeys
        self.doors = builder.doors
        self.doortype = builder.doortype
        self.rooftype = builder.rooftype
    
    def display(self):
        print(f"""
BUILT A HOUSE WITH: 
    {self.doors} Doors of type {self.doortype}
    {self.storeys} Storey(s)
    And a {self.rooftype} Roof.
""")


class HouseBuilder:    
    def __init__(self):
        self.rooftype = None
        self.doortype = None
        self.doors = None
        self.storeys = None

    def setStoreys(self, storeys):
        self.storeys = storeys
        return storeys
    
    def setDoors(self, doors):
        self.doors = doors
        return doors
    
    def setDoorType(self, doortype):
        self.doortype = doortype
        return doortype
    
    def setRoofType(self, rooftype):
        self.rooftype = rooftype
        return rooftype
    
    def build(self):
        return House(self)
    
OneStoreyHouseplan = HouseBuilder()
OneStoreyHouseplan.setDoors(3)
OneStoreyHouseplan.setDoorType("single") #Setting how the objects representation
OneStoreyHouseplan.setStoreys(1)
OneStoreyHouseplan.setRoofType("Pointed")

OneStoreyHouse = OneStoreyHouseplan.build() # constructing the object
OneStoreyHouse.display()

# if say we knew that a certain type of house needed specific properties; 
#   then, it would be wise to build a class that builds these custom objects(houses)
#       This is the advantage of the pattern eg 


class CustomBuilds: 
    def __init__(self):
        self.rooftype = None
        self.doortype = None
        self.doors = None
        self.storeys = None

    def oneStHse(self, builder):
        self.storeys = builder.setStoreys(1)
        self.doors = builder.setDoors(2)
        self.doortype = builder.setDoorType("single")
        self.rooftype = builder.setRoofType("pointed")
        return builder.build()
    
    def twoStHse(self, builder):
        self.storeys = builder.setStoreys(2)
        self.doors = builder.setDoors(4)
        self.doortype = builder.setDoorType("Double")
        self.rooftype = builder.setRoofType("Flat")
        return builder.build()


onestHousePlan = CustomBuilds();
onestHouse = onestHousePlan.oneStHse(HouseBuilder())
onestHouse.display()

twoStoreyHsePlan = CustomBuilds()
twoStoreyHse = twoStoreyHsePlan.twoStHse(HouseBuilder())
twoStoreyHse.display()
    


