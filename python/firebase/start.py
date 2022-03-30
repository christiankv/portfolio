import email
import pyrebase

firebaseConfig = {
  "apiKey": "AIzaSyBylSVAtdYTq_hQbVvNVrp4f5KXRfUerNs",
  "authDomain": "tests-c27f9.firebaseapp.com",
  "databaseURL": "https://tests-c27f9-default-rtdb.europe-west1.firebasedatabase.app",
  "projectId": "tests-c27f9",
  "storageBucket": "tests-c27f9.appspot.com",
  "messagingSenderId": "717084535834",
  "appId": "1:717084535834:web:08f7ecc444726a981d75a3",
  "measurementId": "G-RDX4WL9KLD"
}

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()

data = {
    "name" : "john",
    "age" : 20

}

# db.push(data)

db.child("user1").set(data)

db.child("user1").update({"name": "per"})


information = db.get()

print(information.val())

getKeys = db.get()



for entry  in getKeys.each():
    if(entry.val().get("name")== "per"):
        keyWeWant = entry.key()





# if(entry.val().get("name")== "per"):
#     keyWeWant = entry.key()


db.child(keyWeWant).update({"name":"ola"})

print(db.get().val())

auth = firebase.auth()

def signup():
    print("signup to the fire progject")
    email= input("email")
    password= input("password")
    try:
      user= auth.create_user_with_email_and_password(email,password)
      print("signup was successful")
      ask=input("do you want to log in? y/n").lower()
      if(ask == "y"):
        login()
    except:
      print("invalid")

def login():
  print("log in")
  email=input("enter email")
  try:
    password=input("password")
    login= auth.sign_in_with_email_and_password(email,password)
    print("login successful")
  except:
    print("invalid password or email")

ans=input("loggin? y/n").lower()
if (ans=="y"):
  login()
elif (ans =="n"):
  signup()

