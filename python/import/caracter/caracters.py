import random
from caracter.wolf import *
from caracter.human import human

nano = human.wolfie

nano.name = "nano"
from  caracter.wolf.wolf import *


nano.stats()

def fight():
    while nano.hp>0:
        youatk = nano.atk*(random.randint(0,12)/10)
        enemyatk = wolfie.atk*(random.randint(0,12)/10)
        wolfie.hp = wolfie.hp - youatk
        print(" you dealt", youatk, "damage" )
        nano.hp = nano.hp - enemyatk
        print(" you suffered", enemyatk, "damage" )
        
        if nano.hp<= 0 :
            print("you died")
            break
        elif wolfie.hp<=0:
            print("you WON")
            break

    
wolfie.stats()

fight()