from caracter.caracter import caracter
import random
class location:
    def __init__(self,name, residents, race):
        self.name = name 
        self.residents = residents 
        self.race = race
        self.name += "of the" + self.race

    def ambush(self):
        numberoatk = random.randint(1,5)
        print(numberoatk)
        attackers = []
        while numberoatk >0 :
            wolf = caracter("wolf","wolf", "male")
            attackers.append(wolf)
            numberoatk -= 1
        print(attackers[0])
        attackers[0].stats()

        



        