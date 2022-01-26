

class human:
    def __init__(self,name,hp, atk):
        self.name= name
        self.hp = hp
        self.atk = atk

    def stats(self):
        print(self.name)
        print(self.hp)
        print(self.atk)


wolfie = human("wolfie",20,2)


wolfie.stats()