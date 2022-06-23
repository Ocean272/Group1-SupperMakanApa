# Group-1_Project-3
Supper Makan Apa?



For current list of location
YARC:  https://supper-makan-apa.herokuapp.com/public/location  (GET)
YARC:  http://localhost:3000/public/location (GET)



Add new location to database
YARC:  https://supper-makan-apa.herokuapp.com/user/newlocation (POST)
YARC:  http://localhost:3000/user/newlocation  (POST)
payload: (example) Please use an actual address cos this writes into the database.
  {
    "locationId": 11,
    "name": "Coffee Smith",
    "address": "North Point City",
    "located_at": "North",
    "cuisineId": Chinese,
    "priceId": $$,
    "openingHour": 7pm - 4.30am,
    "image": "http://<hyperlink>"
  }


Edit current location
YARC:  https://supper-makan-apa.herokuapp.com/user/location (POST) 
YARC:  http://localhost:3000/user/location (POST)
Before edit, find the location ID of the restaurant first.
payload: (example) Please use an actual address cos this writes into the database.
  {
    "locationId": 10,
    "name": "Chong Pang Nasi Lemak",
    "address": "447 Sembawang Road Singapore 758404",
    "located_at": "North",
    "cuisineId": Chinese,
    "priceId": $$,
    "openingHour": 7pm - 4.30am,
    "image": "http://<hyperlink>"
  }



Filter restaurants based on location, cuisine type and price
YARC: https://supper-makan-apa.herokuapp.com/public/location/East/Muslim/$$  (GET) 
YARC: http://localhost:3000/public/location/East/Muslim/$$ (GET)
change the first field to either North, South, East, West, Central to get locations.
change the second field to either Western, Muslim, Indian, Chinese, Thai, Japanese, Korean to get cuisine type.
change the last field to either $, $$, $$$, $$$$, $$$$$ to get price range.



To retrieve current list of users
YARC:  https://supper-makan-apa.herokuapp.com/login/user  (GET)
YARC:  http://localhost:3000/public/location (GET)


Add new user to database
YARC:  https://supper-makan-apa.herokuapp.com/login/signup (POST)
YARC:  http://localhost:3000/login/signup  (POST)
payload: (example) Please remember the credentials that write into the database for signin purpose as data will be encrypted.
  {
    "username": "Coffee Smith",
    "email": "coffeesmith@gmail.com",
    "password": "12345"
  }


To login 
YARC:  https://supper-makan-apa.herokuapp.com/login/signin (POST)
YARC:  http://localhost:3000/login/signin  (POST)
payload: (example) Please use existing credential to facilitate data existence, JWT will be generated upon successful signin.
  {
    "username": "Coffee Smith",
    "password": "12345"
  }