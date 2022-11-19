*GetAllUser/ 
(GET)> https://developerjwt.herokuapp.com/api/auth/users


localhost:9800/api/auth/users
    {
        "_id": "6377ccc16bb59251f8c29b85",
        "name": "babita",
        "email": "babitakoushik@gmail.com",
        "password": "$2a$08$CWeNEIja3BXWfy6af0a8YefwmtniS5YovK2IglfMB8D0JdzlSppnS",
        "phone": 6260222022,
        "role": "User",
        "__v": 0
    },
    {
        "_id": "6377cd406bb59251f8c29b88",
        "name": "bulbul",
        "email": "babitakoushik@gmail.com",
        "password": "$2a$08$7hTZXc9rKPgIZnd0FRwQ7.CBXbqThgiM0RGO1AlEGVggCFuLUf1yq",
        "phone": 6260222022,
        "role": "User",
        "__v": 0
    },
    {
        "_id": "6377cd746bb59251f8c29b8a",
        "name": "mks",
        "email": "mkslader123@gmail.com",
        "password": "$2a$08$0.qsrlS5nXkMAAcMOcgkQe4Ys64CuUSxZyIN7WYexMkITIu8rFRpC",
        "phone": 7828142928,
        "role": "User",
        "__v": 0
    }
]



..........................................................................
/*Register/
 (POST)> https://developerjwt.herokuapp.com/api/auth/register (body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","phone":343432,role?":"user"}

 ///////////////////////////
localhost:9800/api/auth/register

1) {
    "name":"bulbul",
    "email":"babitakoushik@gmail.com",
    "password":"helloo123",
    "phone":6260222022
},

{
    "name":"mks",
    "email":"mkslader123@gmail.com",
    "password":"mks1234",
    "phone":7828142928
},
{
    "name":"babita",
    "email":"babitakoushik@gmail.com",
    "password":"namste123",
    "phone":6260222022
}
///////////////////////////////////////////



,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/*Login/ 
(POST) => https://developerjwt.herokuapp.com/api/auth/login (body) => {"email":"aa@gmail.com","password":"12345678"} (response)=> {auth:true,token:'dgsdg'}

localhost:9800/api/auth/login
{
   
    "email":"babitakoushik@gmail.com",
    "password":"namste123"
    
}

//output{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzdjY2MxNmJiNTkyNTFmOGMyOWI4NSIsImlhdCI6MTY2ODgzODg3NywiZXhwIjoxNjY4OTI1Mjc3fQ.-8NCnqrjF42jip1SznnnKDkVW2uq9mt7TOu1Dmo6LZc"
}
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,





/*UserInfo/
 (GET) => https://developerjwt.herokuapp.com/api/auth/userinfo (Header) => {'x-access-token':'token value from login'}

////////////////////////////////////////
 localhost:9800/api/auth/userinfo
 x-access-token=

 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzdjZDc0NmJiNTkyNTFmOGMyOWI4YSIsImlhdCI6MTY2ODc5NjAwNywiZXhwIjoxNjY4ODgyNDA3fQ.X8j7cD1s_sKe0xwhUg2feUMOZf1rySJljGINUIvv59A

 {
    "_id": "6377cd746bb59251f8c29b8a",
    "name": "mks",
    "email": "mkslader123@gmail.com",
    "password": "$2a$08$0.qsrlS5nXkMAAcMOcgkQe4Ys64CuUSxZyIN7WYexMkITIu8rFRpC",
    "phone": 7828142928,
    "role": "User",
    "__v": 0
}