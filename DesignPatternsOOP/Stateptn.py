# in python  polymorphism is not well displayed, but I prefer the lang due to its easy syntax
# The Pattern would be best implemented and visualized in an oop lang e.g. php, JAVA, CPP
# ASSUMPTIONS MADE:
# 1. The class 'State' is an interface or abstract class
# 2. The classes 'pencil', 'eraser'  etc. are used to implement the interface rather than inheriting
#       from the 'State' class.
class Canvas:  # reps the app on which the drawing occurs
    def __init__(self):
        self.currentTool = None

    def set_current_tool(self, tool):  # combine setter and Getter
        self.currentTool = tool
        return self.currentTool


class State:
    def mouse_down(self):
        pass

    def mouse_up(self):
        pass


class Pencil (State):
    def mouse_down(self):
        print("show a Pencil icon")
    
    def mouse_up(self):
        print("Draw line")


class Eraser (State):
    def mouse_down(self):
        print("Show Eraser icon")

    def mouse_up(self):
        print("Erase a part of something")


canvas = Canvas() 
# canvas.set_current_tool(Pencil())
# pencil = canvas.set_current_tool(Pencil())
# pencil.mouse_down()
# pencil.mouse_up()
# thus to implement any new tool eg 'cropping tool' , we just need to add a class that implements the 'State' interface


# eg 2. implementation of a payment Gateway that allows paying etc. using various banks
class PaymentPlatform:
    def __init__(self):
        self.bankType = None
    
    def stgt_bk_typ(self, bank):
        self.bankType = bank
        return self.bankType
    
    
class PaymentGateway: # abstract class or Interface
    def __init__(self):
        self.amount = None

    def pay(self, amount):
        pass

    def refund(self,amount):
        pass

    def deposit(self, amount):
        pass
    
    def withdraw(self, amount):
        pass


# implementing the gateways methods for each bank as each bank has its own policies
class WesternUnionBank (PaymentGateway):
    def __init__(self):
        self.balance = 500 # any live account has atleast 500
        self.amount = self.balance

    def pay(self, amount):
        if amount > self.balance:
            return "Not Enough Money! Please Recharge!!"
        else:
            charges = amount * .05
            amount += charges 
            self.balance -= amount
            print(f"Paying Kshs {amount}.0 using WesterUnionBank New Balance is kshs {self.balance}.0") 
            return self.balance

    def refund(self, amount):
        refundAmount = amount * .9
        self.amount += refundAmount
        print(f"WesternUnionBank Refunding Kshs {amount}.0 New Balance is kshs {self.balance}.0")
        self.balance = self.amount
        return self.balance
    

    def deposit(self, amount):
        if amount > 0 :
            self.balance += amount
            print(f"Successful deposit of kshs {amount}.0 via WesternUnionBank New Balance is kshs {self.balance}.0")
            return self.balance
        elif amount < 0:
            print(f"invalid Amount!! -- westernUnion --")
            return ["invalid Amount", -1]
        
    def withdraw(self, amount):
        if amount < self.balance:
            if amount > 0:
                self.balance -= amount
                print(f"Withdrawn kshs {amount}.0 from WesternUnionBank New Balance is:  {self.balance}.0")
                return self.balance
            elif amount < 0:
                return "invalid amount "
        elif amount > self.balance:
            return "Withdraw amount too high!!"


class BarclaysBank (PaymentGateway): # implements gateway functions with policies specific to Barclays
    def __init__(self):   
        self.balance = 1000 # any live account has atleast 1000

    def pay(self, amount):
        if amount > self.balance:
            return "Not Enough Money! Please Recharge!!"
        else:
            charges = amount * .06
            amount += charges 
            self.balance -= amount
            print(f"Paid Kshs {amount}.0 using BarclaysBank") 
            return self.balance

    def refund(self, amount):
        refundAmount = amount * .88
        self.balance = refundAmount
        print(f"BarclaysBank Refunding Kshs {amount}.0 New Balance is kshs {self.balance}.0")
        return self.balance
                
    def deposit(self, amount):
        if amount > 0 :
            self.balance += amount
            print(f"Successful deposit of kshs {amount}.0 via BarclaysBank New Balance is kshs {self.balance}.0")
            return self.balance 
        elif amount < 0:
            print(f"invalid Amount!! -- Barclays --")
            return [-1, "Error: Invalid Amount"]
        
    def withdraw(self, amount):
        if amount < self.balance:
            if amount > 0:
                self.balance -= amount
                print(f"Withdrawn kshs {amount}.0 from Barclays Bank New Balance is: {self.balance}.0")
                return self.balance
            elif amount < 0:
                return "invalid amount"
        elif amount > self.balance:
            return "Withdraw amount too high!!"


Customer1 = PaymentPlatform().stgt_bk_typ(BarclaysBank())
Customer1.deposit(300)
Customer1.deposit(-100)
Customer1.pay(200)


