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

firebase = pyrebase.initialise_app(firebaseConfig)

db = firebase.database()

data = {"name": "ck", "age": 31}

db.push(data)