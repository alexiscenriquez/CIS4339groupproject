2.
Deals with SERVICES COLLECTION

Request to fetch all services data

Example Request
````
GET http://127.0.0.1:3000/services
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: d750af69-2afa-497d-8c56-b15897978d99
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 703
ETag: W/"2bf-/H0L013p83f8vNQ0aqbCJ1fb7x8"
Date: Fri, 04 Mar 2022 06:33:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "applicants": {
            "cid": [
                1,
                4
            ]
        },
        "_id": "6220fef38d9e861941326b06",
        "sid": 1,
        "name": "Early Childhood",
        "renewal": "Court Order",
        "__v": 0
    },
    {
        "applicants": {
            "cid": [
                2
            ]
        },
        "_id": "6220ff360158a16042d98f73",
        "sid": 2,
        "name": "Housing",
        "renewal": "Monthly",
        "__v": 0
    },
    {
        "applicants": {
            "cid": [
                3
            ]
        },
        "_id": "6220ff4e0158a16042d98f75",
        "sid": 3,
        "name": "Adult Education",
        "renewal": "Monthly",
        "__v": 0
    },
    {
        "applicants": {
            "cid": [
                4
            ]
        },
        "_id": "6220ff690158a16042d98f77",
        "sid": 4,
        "name": "Loans",
        "renewal": "Yearly",
        "__v": 0
    },
    {
        "applicants": {
            "cid": [
                5
            ]
        },
        "_id": "6220ff850158a16042d98f79",
        "sid": 5,
        "name": "Meals",
        "renewal": "Monthly",
        "__v": 0
    },
    {
        "applicants": {
            "cid": [
                1
            ]
        },
        "_id": "62214015897db2729f707800",
        "sid": 6,
        "name": "Family Support",
        "renewal": "Monthly",
        "__v": 0
    }
]
````

ADD NEW SERVICES TO SERVICES COLLECTION

Example Request

````
POST http://127.0.0.1:services/new-service
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 5813163d-f2a8-48f7-a82e-4f2d519fb96b
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 70
````

Body

````
{
    "sid":7,
    "name":"New service",
    "renewal":"Monthly"
}
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 17
ETag: W/"11-9Nz/7SiuvdxmpU04iFjLPWMRzyA"
Date: Fri, 04 Mar 2022 06:38:10 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
New Service added
````

FIND SERVICE BY SID

````
GET http://127.0.0.1:3000/services/find/{{sid}}
````

Example Request

````
GET http://127.0.0.1:3000/services/find/1
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 121fcf37-91aa-46ac-b9ac-388b11c119e8
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 128
ETag: W/"80-KAmFYBzIxKSCuZHHHcyAiXqI+8w"
Date: Fri, 04 Mar 2022 06:39:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "applicants": {
            "cid": [
                1,
                4
            ]
        },
        "_id": "6220fef38d9e861941326b06",
        "sid": 1,
        "name": "Early Childhood",
        "renewal": "Court Order",
        "__v": 0
    }
]
````

ADD OR DELETE APPLICANTS FROM SERVICES

````
PUT http://127.0.0.1:3000/services/new-applicant/{{sid}}
````

Example Request

````
PUT http://127.0.0.1:3000/services/new-applicant/1
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 4120df08-0e89-42b6-8557-d7fc2fd104f5
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 38
````

Body for adding applicant to services

````
{
    "action":"add",
    "cid":1
}
````

Body for removing applicant from services

````
{
    "action":"del",
    "cid":1
}
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 27
ETag: W/"1b-XvaiRjuGhT/y4X+7N7qDy0OmoyM"
Date: Fri, 04 Mar 2022 06:44:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
added applicant to services
````

````
removed applicant from services
````

GET ALL SERVICES WITH APPLICANTS INFORMATION

Example Request

````
GET http://127.0.0.1:3000/services/all-applicants
````

````
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: d301a9ea-a2a1-4b6f-9a34-321f66a49be6
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 1232
ETag: W/"4d0-V1udYR/817FRSu+qQ+c+sGl4d88"
Date: Fri, 04 Mar 2022 06:50:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "_id": "6220fef38d9e861941326b06",
        "sid": 1,
        "name": "Early Childhood",
        "clients": [
            {
                "cid": 4,
                "first_name": "Spongebob",
                "mid_name": "S",
                "last_name": "Squarepants",
                "phone_number": "555-5555",
                "primary_email": "BestFryCook@yahoo.com"
            }
        ]
    },
    {
        "_id": "6220ff360158a16042d98f73",
        "sid": 2,
        "name": "Housing",
        "clients": [
            {
                "cid": 2,
                "first_name": "Steven",
                "mid_name": "Destiny",
                "last_name": "Bonnell",
                "phone_number": "252-578-5585",
                "primary_email": "Destinygg@yahoo.com"
            }
        ]
    }
       
]
````

UPDATE SERVICE INFORMATION

````
PUT http://127.0.0.1:3000/update/{{sid}}
````

Example Request

````
PUT http://127.0.0.1:3000/7
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 1d551beb-c275-4bd9-9d4b-abefbedec2a8
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 35
````

Body

````
{
    "name":"new service name"
}
````

Example Response

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 29
ETag: W/"1d-gzXvXGl4iJkbxOZKJsxaUrs4syA"
Date: Fri, 04 Mar 2022 06:55:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
Services information updated.
````

DELETE SERVICE FROM SERVICES COLLECTION

````
DELETE http://127.0.0.1:3000/del/{{sid}}
````

Request Example

````
DELETE http://127.0.0.1:3000/del/7
````

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 29fe44c4-d0f0-4214-82bb-7445913deb19
Host: 127.0.0.1:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 35
````

Response Example

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-DCwqkQCBi9y2ARHDbSlL+KOZrwg"
Date: Fri, 04 Mar 2022 07:01:51 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

````
deleted from db
````

| Field			|	Type			|	Description																				  |
|-----------|-----------|-----------------------------------------------------|
|_id        |ObjectID   |A randomly generated identifier 
| sid				|	Number		| identifier for services.	|
|	name				|	String		| Name of the service			|
| renewal| string		|	How long before service has to be reapplied for				|
| notes  | string    | Notes                          |     
| applicants | Object(Array(Number))    | Array that stores client ids                          |


Possible errors:

| Error code    | Description                   |
| --------------| ------------------------------|
| 404 Not Found | The requested resource could not be found buy may be available again in the future. Subsequent requests by the cleints are permissible. |
