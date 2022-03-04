DEALS WITH DATA STORED IN EVENTS COLLECTION

Get information from all events

Request Example

````
GET http//127.0.0.1:3000/events
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 545b0985-c8d9-457f-a344-3d51932a3797
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Response Example

```
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 1444
ETag: W/"5a4-MnJNyv2+UoF+/rjHGpTWRDq7O+Q"
Date: Fri, 04 Mar 2022 07:15:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "attendees": {
            "vid": [
                1,
                3
            ],
            "cid": [
                1,
                2,
                3
            ],
            "employeeID": [
                4,
                5,
                2
            ]
        },
        "_id": "6220043b21536ab7282151c9",
        "evid": 1,
        "ev_name": "Little bird celebrations",
        "ev_host": 1,
        "ev_date": "2019-05-16T00:00:00.000Z",
        "addr": "123 Next Street",
        "city": "Houston",
        "st": "Tx",
        "country": "United States",
        "zip": "75456",
        "__v": 0
    }
]
```

ADD NEW EVENT TO EVENTS COLLECTION

Request Example

````
POST http://127.0.0.1:3000/events/new-event
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: a811018b-249e-46a5-be29-6445cc59f385
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 222
````

Body

````
{
    "evid":7,
    "ev_name":"New event name",
    "ev_host":1,
    "ev_date":"1996-10-25",
    "addr":"123 Second street",
    "city":"Houston",
    "st":"Tx",
    "country":"United states",
    "zip":"77456"
}

````

Response Example

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-ayqkKNXu90A571jEgFyhzznqI9k"
Date: Fri, 04 Mar 2022 07:20:29 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
New Event added
````


FIND EVENT FROM EVENT COLLECTION BY EVID

````
GET http://127.0.0.1:3000/find/{{evid}}
````

Request Example

````
GET http://127.0.0.1:3000/find/1
````

```
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 10d1e286-ca00-4673-91a9-dec644c2f1aa
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
```

Response Example

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 292
ETag: W/"124-J66PBORSw27uGPTorAzB0ymW5HQ"
Date: Fri, 04 Mar 2022 07:21:48 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "attendees": {
            "vid": [
                1,
                3
            ],
            "cid": [
                1,
                2,
                3
            ],
            "employeeID": [
                4,
                5,
                2
            ]
        },
        "_id": "6220043b21536ab7282151c9",
        "evid": 1,
        "ev_name": "Little bird celebrations",
        "ev_host": 1,
        "ev_date": "2019-05-16T00:00:00.000Z",
        "addr": "123 Next Street",
        "city": "Houston",
        "st": "Tx",
        "country": "United States",
        "zip": "75456",
        "__v": 0
    }
]
````


ADD OR REMOVE ATTENDEE FROM/TO EVENT

````
PUT http://127:0.0.1:3000/attendee/{{evid}}
````

Request Example

````
PUT http://127.0.0.1:3000/attendee/1
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: a2f054c0-ce09-443f-b255-ed7a348d54c9
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 62
````

Body example

if adding volunteer to event

````
{
    "action":"add",
    "type":"volunteer",
    "id":1
}
````

if deleting volunteer from event
````
{
    "action":"del",
    "type":"volunteer",
    "id":1
}
````

if adding employee to event

````
{
    "action":"add",
    "type":"employee",
    "id":1
}
````

if deleting employee from event
````
{
    "action":"del",
    "type":"employee",
    "id":1
}
````

if adding client to event

````
{
    "action":"add",
    "type":"client",
    "id":1
}
````

if deleting client from event
````
{
    "action":"del",
    "type":"client",
    "id":1
}
````

Response Example

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 38
ETag: W/"26-KD7jcLsxnSFBPyTVQx9ETFg24RM"
Date: Fri, 04 Mar 2022 07:28:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
Added new volunteer attendee to event.
````

````
Removed volunteer attendee from event.
````

````
Added new employee attendee to event.
````

````
Removed employee attendee from event.
````

````
Added new client attendee to event.
````

````
Removed client attendee from event.
````

GET INFORMATION FOR ATTENDEES AT EVENT(volunteers, clients, employees)

Request Example

````
GET http://127.0.0.1:3000/events/event-attendess
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: c57f6573-e0df-43a8-94ac-59e3038de5ec
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Response Example

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 3680
ETag: W/"e60-4KNxZT9lOgweKr3ai4Q1badga3k"
Date: Fri, 04 Mar 2022 07:35:43 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "evid": 1,
        "ev_name": "Little bird celebrations",
        "ev_host": 1,
        "ev_date": "2019-05-16T00:00:00.000Z",
        "city": "Houston",
        "st": "Tx",
        "zip": "75456",
        "volunteers": [
            {
                "vid": 3,
                "first_name": "Shelly",
                "last_name": "Gonzalez",
                "phone_num": "145-789-1144"
            }
        ],
        "clients": [
            {
                "cid": 1,
                "first_name": "Michael",
                "last_name": "Jackson",
                "phone_number": "222-545-5585"
            },
            {
                "cid": 2,
                "first_name": "Steven",
                "last_name": "Bonnell",
                "phone_number": "252-578-5585"
            }
        ],
        "employees": [
            {
                "employeeID": 2,
                "firstName": "Kim",
                "lastName": "Brown",
                "phone": "810-343-2078"
            },
            {
                "employeeID": 4,
                "firstName": "Louis",
                "lastName": "Anderson",
                "phone": "713-558-8849"
            },
            {
                "employeeID": 5,
                "firstName": "Timothy",
                "lastName": "Delp",
                "phone": "832-205-4477"
            }
        ]
    } 
]
````

UPDATE EVENT INFORMATION BY EVID

````
PUT http://127.0.0.1:3000/events/update{{evid}}
````

Request Example

````
PUT http://127.0.0.1:3000/events/update/1
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 3a34c820-0019-4d61-b81c-c1c6a3c3d61e
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 69
````

Body Example

````
{
    "ev_name":"updated event name",
    "ev_date":"2020-02-22"
}
````

Response Example

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 26
ETag: W/"1a-T1f4dD4UrwtHKTZmqbilMLroqR4"
Date: Fri, 04 Mar 2022 07:42:23 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
Event information updated.
````

DELETE EVENT FROM EVENT COLLECTION

````
DELETE http://127.0.0.1:3000/events/del/{{evid}}
````

Request Example

````
DELETE http://127.0.0.1:3000/events/del/7
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: dea26e3b-407b-4762-841c-28f83fe5122d
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Response Example

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-DCwqkQCBi9y2ARHDbSlL+KOZrwg"
Date: Fri, 04 Mar 2022 07:47:13 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
deleted from db
````

| Field			|	Type			|	Description																				  |
|-----------|-----------|-----------------------------------------------------|
| _id				|	ObjectID		| A randomly generated identifier	|
|	evid				|	number		| A unique event identifier			|
| ev_name| String		|	name of an event													|
| ev_host  | string    | id of host in charge of event                         |     
| ev_date | Date   | date of event('YYYY-MM--DD')                           |
| addr    | string    | street address                           |
| city      | string    | city of event              |
| st        | string    | state of event is in              |
| country    | string    | country that event is in                              |
| zip | string    | zip code that event is in                           |
| attendees | Object(Array)    | array that stores either volunteer id, client id or employee id                        |


Possible errors:

| Error code    | Description                   |
| --------------| ------------------------------|
| 404 Not Found | The requested resource could not be found buy may be available again in the future. Subsequent requests by the cleints are permissible. |

