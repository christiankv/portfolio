import random
from caracter.caracter import caracter
from map.forrest import location

# nano = caracter("nano", "unkown","unknown")
# nano.stats()
# while nano.trainingslot>0:
#     nano.training()
#     nano.stats()



# forrest = location("forrest", 10, "wolf")

# forrest.ambush()

player = caracter("player", "human")
forrest = location("forrest",10,"wolf")

player.caractercreation()

player.stats()

while player.health > 0:
    forrest.camp("player",player)
    
    