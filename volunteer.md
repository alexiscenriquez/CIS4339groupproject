#### Getting a volunteer's details
Deals with volunteers collection

Request to fetch all information from the volunteers collection:

````
GET http://localhost:3000/volunteers
````

Example request:

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 653de8ba-d641-41d8-b34e-28ff39c8d2ae
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

The response is a volunteer object within a data envelope.

Example response:

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 2339
ETag: W/"923-e+n1TdDYoA9M4wdjsPdpCk7YKmc"
Date: Fri, 04 Mar 2022 05:07:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "events": {
            "evid": [
                1,
                3,
                6
            ]
        },
        "_id": "62210b358efec5355f793fa1",
        "vid": 3,
        "first_name": "Shelly",
        "mid_name": "Givens",
        "last_name": "Gonzalez",
        "b_day": "1991-05-20T00:00:00.000Z",
        "ssn": "456-78-4411",
        "DL": "54698217",
        "gender": "Female",
        "ethnicity": "Hispanic",
        "phone_num": "145-789-1144",
        "emer_num": "281-455-4545",
        "email": "sgg@gmail.com",
        "email2": "sgg2@gmail.com",
        "prim_language": "English",
        "addr": "259 street 4",
        "city": "Austin",
        "st": "TX",
        "country": "United States",
        "zip": "45875",
        "__v": 0
    }   
]
````




Add new Volunteer to Volunteers collection----------------

````
POST http://localhost:3000/volunteers/new-user
````
Example Request 

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: bfe26965-64fa-4116-8975-e1dd2e437e4c
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 524
````

Request Body

````
{
    "vid": 6,
    "first_name": "Jeffrey",
    "mid_name": "Johm",
    "last_name": "Jacobs",
    "b_day": "1990-02-27",
    "ssn": "654-85-7458",
    "DL": "452157894",
    "gender": "Male",
    "ethnicity": "Italian",
    "phone_num": "128-458-4578",
    "emer_num": "281-456-7878",
    "email": "jjj@gmail.com",
    "email2": "jjj2@gmail.com",
    "prim_language": "English",
    "addr": "152 First Street",
    "city": "Houston",
    "st": "Tx",
    "zip": "77856",
    "country": "United States"
}
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 19
ETag: W/"13-k7i7inl3mbipolbX9iReseUSGOc"
Date: Fri, 04 Mar 2022 05:18:45 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
New Volunteer added
````

FIND VOLUNTEER BY VID

````
GET 127.0.0.1:3000/volunteers/find/{{vid}}
````

Request Example

````
GET http://127.0.0.1:3000/volunteers/find/1
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 8ad32cc0-6cef-4c42-abae-2459ad381802
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 463
ETag: W/"1cf-8InmHafcq488btzonudsfvlWkww"
Date: Fri, 04 Mar 2022 05:28:45 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "events": {
            "evid": [
                1,
                2,
                3
            ]
        },
        "_id": "62210b5a8efec5355f793fa3",
        "vid": 1,
        "first_name": "Robert",
        "mid_name": "Downey",
        "last_name": "Man",
        "b_day": "2015-09-26T00:00:00.000Z",
        "ssn": "455-45-7895",
        "DL": "45874536",
        "gender": "Male",
        "ethnicity": "Hawain",
        "phone_num": "285-456-4578",
        "emer_num": "456-455-7878",
        "email": "rdm@gmail.com",
        "email2": "rdm2@gmail.com",
        "prim_language": "English",
        "addr": "255 street 2",
        "city": "Austin",
        "st": "TX",
        "country": "United States",
        "zip": "45875",
        "__v": 0
    }
]
````

ADD OR DELETE EVENT FROM VOLUNTEER EVENT ARRAY FIELD

````
PUT 127.0.0.1:3000/volunteers/events/{{vid}}
````

Example request

````
PUT http://127.0.0.1:3000/volunteers/events/1
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: b085d220-175e-4d40-907b-b5866178ecb8
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 39
````

Request Body Adding event

````
{
    "action":"add",
    "evid":6
}

````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 24
ETag: W/"18-mhmL5wiKhXEIKYSXvkfMfbxgcuk"
Date: Fri, 04 Mar 2022 05:42:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
added event to volunteer
````
Request Body Deleting event 
````
{
    "action":"del",
    "evid":6
}

````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 28
ETag: W/"1c-8nU1QY/bLXoqDKyL9CaAV57c9jE"
Date: Fri, 04 Mar 2022 05:47:04 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
deleted event from volunteer
````

GET ALL EVENTS THAT VOLUNTEERS ATTENDED

Example request

````
GET http://127.0.0.1:3000/volunteers/event-attendees
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 3bfd3f4e-0024-49a7-89a8-7916e594dc74
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 2001
ETag: W/"7d1-VEAZJm0XV10NXW5ZuzNehi7SMUY"
Date: Fri, 04 Mar 2022 05:53:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5


[       
    {
        "_id": "62210b5a8efec5355f793fa3",
        "vid": 1,
        "first_name": "Robert",
        "mid_name": "Downey",
        "last_name": "Man",
        "phone_num": "285-456-4578",
        "events": [
            {
                "evid": 1,
                "ev_name": "Little bird celebrations",
                "ev_date": "2019-05-16T00:00:00.000Z",
                "city": "Houston",
                "st": "Tx",
                "zip": "75456"
            },
            {
                "evid": 2,
                "ev_name": "T's All StarZ Sporting Event 2019",
                "ev_date": "2019-03-15T00:00:00.000Z",
                "city": "Houston",
                "st": "Tx",
                "zip": "75456"
            },
            {
                "evid": 3,
                "ev_name": "A Marathon 2018",
                "ev_date": "2018-03-15T00:00:00.000Z",
                "city": "Houston",
                "st": "Tx",
                "zip": "75456"
            }
        ]
    }
]
````

UPDATE VOLUNTEERS INFORMATION

````
PUT http://127.0.0.1:3000/volunteers/update/{{vid}}
````

Example Request

````
PUT http://127.0.0.1:3000/volunteers/update/1
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 8d25e781-5787-4461-909f-f5ba0406a8e1
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 67
````

Request Body

````
{
    "first_name":"Updated Name",
    "last_name":"Updated last name"
}
````


Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 30
ETag: W/"1e-WHo51UEAnQYc8OaB7tHAokNy6/M"
Date: Fri, 04 Mar 2022 06:07:36 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
Volunteer information updated.
````


DELETE VOLUNTEER FROM DOCUMENT

````
DELETE http://127.0.0.1:3000/volunteers/del/{{vid}}
````

Example Request

````
DELETE http://127.0.0.1:3000/volunteers/del/6
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 1d5fec0b-6f92-4d51-b358-b4ab0598c31b
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 67
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-DCwqkQCBi9y2ARHDbSlL+KOZrwg"
Date: Fri, 04 Mar 2022 06:09:46 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
deleted from db
````


| Field			|	Type			|	Description																				  |
|-----------|-----------|-----------------------------------------------------|
| id				|	string		| A randomly generated identifier for the volunteer.	|
|	vid				|	number		| A Non-random primary identifier for volunteer.			|
| first_name| string		|	The volunteer's first name													|
| mid_name  | string    | The volunteer's middle name                         |     
| last_name | string    | The volunteer's last name                           |
| b_day     | string    | The volunteer's birthday                            |
| ssn       | string    | The volunteer's social security number              |
| dl        | string    | The volunteer's drivers license number              |
| gender    | string    | The volunteer's gender                              |
| ethnicity | string    | The volunteer's ethnicity                           |
| phone_num | string    | The volunteer's phone number                        |
| emer_num  | string    | Contact number of someone who should be contacted in case of a medical emergency  |
| email     | string    | The volunteer's primary email address               |
| email2    | string    | The volunteer's secondary email address             |
| prim-language | string| The volunteer's primary language                    |
| addr      | string    | The volunteer's street address                      |
| city      | string    | The city the volunteer resides                      |
| st        | string    | The state the volunteer resides                     |
| country   | string    | The country the volunteer resides                   |
| zip       | string    | The zip code of the area the volunteer resides      |
| events    | array     | List of IDs for events volunteer is apart of        |

Possible errors:

| Error code    | Description                   |
| --------------| ------------------------------|
| 404 Not Found | The requested resource could not be found buy may be available again in the future. Subsequent requests by the cleints are permissible. |

