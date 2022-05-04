import random
"""if (random.randint(1,2)) == 1:
    print ("bring an umbrella")
    umbrella=(random.randint(1,3))
    if umbrella == 1:
        print ("take the red one")
    elif umbrella== 2:
        print ("take the orange one")
    elif umbrella == 3:
        print ("take the green one")
else :
    print ("its not raining")
 """

#------------------------------------------------------variable section------------------------
A = (random.randint(1,10))
B = (random.randint(1,10))
C = (random.randint(1,10))

result1 = (A+B) #saves the result of the math question down below
result2 = (A%B) #saves the result of the modulo question down below

Givernnumber = 0 # an variable that takes info from the if statements


#------------------------------------------------------------------math section -----------------------

if A+B == C: # checks if a math question is true or not
    Givernnumber = Givernnumber +random.randint(1,5) # adds a number from 1-5 to the variable givernnumber 
else:
    Givernnumber = Givernnumber +random.randint(1,5)# adds a number from 1-5 to the variable givernnumber 
print(result1)




if A%B == C: #turns the previus math question into modulo
    Givernnumber = Givernnumber +random.randint(1,5)# adds a number from 1-5 to the variable givernnumber 
else:
    Givernnumber = Givernnumber +random.randint(1,5)# adds a number from 1-5 to the variable givernnumber 
print (result2)


#--------------------------------------------------------------------result section---------------
yournumber = input("your guess? 2-10") # you can input a number to guess what the variable from the ifstatements ended up as.
if Givernnumber==yournumber: #checks your choces number against the variable
    print("you won")
    if Givernnumber==random.randint(1,10): # lets the computer generate a random number to check against the variable
        print("the pc won too")
    else:
        print("the pc lost")
else:
    print("you lost")
    if Givernnumber==random.randint(1,10):# lets the computer generate a random number to check against the variable
        print("the pc won")
    else:
        print("the pc lost to ")
    

print("the number was", Givernnumber) #lets you know what the acual number the pc ended up at was.