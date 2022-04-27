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
            wolf = caracter("wolf","wolf", "male","npc")
            attackers.append(wolf)
            numberoatk -= 1
        print(attackers[0])
        attackers[0].stats()

    def camp(self,player,caracter):
        if player == "player":
            print("1.rest")
            print("2.train")
            print("3.check stats")
            choser = input("chose action")
            try:
                choser = int(choser)
            except:
                return
            if choser == 1:
                caracter.rest()
            elif choser == 2:
                caracter.training()
            elif choser == 3:
                caracter.stats()



        