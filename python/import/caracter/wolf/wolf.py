class wolf:
    def __init__(self,name,hp, atk):
        self.name= name
        self.hp = hp
        self.atk = atk

    def stats(self):
        print(self.name)
        print(self.hp)
        print(self.atk)



wolfie = wolf("wolfie",20,4)


wolfie.stats()

class human:
    def __init__(self,name,hp, atk):
        self.name= name
        self.hp = hp
        self.atk = atk

    def stats(self):
        print(self.name)
        print(self.hp)
        print(self.atk)
