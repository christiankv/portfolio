import time

class caracter:
    def __init__(self, name, race,gender,player):
        self.name = name
        self.race = race
        self.gender = gender
        self.player = player
        self.health = 50
        self.attack = 5
        self.defence = 2
        self.skin =1
        self.skinXP = 0
        self.muscles = 1
        self.musclesXP = 0
        self.baseXP = 0
        self.level = 1
        self.trainingslot = 10
    def stats(self):
        print(self.name, " ", self.race)
        print("level: ", self.level, "exp: ", self.baseXP)
        print("health: ",self.health,"defence: ", self.defence,"attack: ", self.attack)
        print("muscles: ", self.muscles, "musclesXP: ", self.musclesXP,)
        print("skin: ", self.skin, "skinXP: ", self.skinXP)
        print("training available:", self.trainingslot)

    def rest(self):                   
        wait =10
        while wait > 0:  
            print(wait)  
            time.sleep(1)   
            wait -=1
        self.health = 50*self.level

    def levelup(self, stat, value):
        if stat == "skin":
            self.skinXP += value
            self.baseXP += value/4
            if self.skinXP >= 100 :
                self.skinXP = self.skinXP % 100
                self.skin += 1
                self.defence = 2*self.skin
                print("skin level up")
                self.levelup("skin", 0)
                

        elif stat == "muscle":
            self.musclesXP += value
            self.baseXP += value/4
            if self.musclesXP >= 100 :
                self.musclesXP = self.musclesXP % 100
                self.muscles += 1
                self.attack = 5*self.muscles
                print("muscles level up")
                self.levelup("skin", 0)
                return
        else: return
        if self.baseXP >= 100 :
                self.baseXP = self.baseXP % 100
                self.level += 1
                self.health = 50*self.level
                print("skin level up")       

    def training(self):
        if self.trainingslot >0:
            print("1. train skin")
            print ("2 train muscles")
            choser = input("chose")
            try:
                choser =int(choser)
                if choser == 1 :
                    wait =5
                    while wait > 0:  
                        print(wait)  
                        time.sleep(1)   
                        wait -=1

                    self.trainingslot -= 1
                    value = 0.1*self.skin
                    exp = int(10/ value)
                    # print(value)
                    # print(exp)
                    print("gained "+ str(exp)  +" skin XP")
                    self.levelup("skin",exp)

                elif choser == 2 :
                    wait =5
                    while wait > 0:  
                        print(wait)
                        time.sleep(1)   
                        wait -=1
                    self.trainingslot -= 1
                    value = 0.1*self.muscles
                    exp = int(10/ value)
                    # print(value)
                    # print(exp)
                    print("gained "+ str(exp)  +" muscle XP")
                    self.levelup("muscle",exp)
            except: pass
        else: 
            print("cant train more go fight more monsters")













