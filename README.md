# Group 28's API Documentation

#### Contents
- [Overview](#1-overview)
- [Resources](#2-resources)
  - [Volunteers](#21-volunteers)
  - [Employees](#22-employees)
  - [Posts](#23-posts)
 - [Testing](#3-testing)

## 1. Overview
Our group's API is JSON-based. All requests are made to endpoints beginning: `http://localhost:3000/` or `http://127.0.0.1:3000/`

## 2. Resources

### 2.1 Volunteers

#### Getting a volunteer's details
Returns details stored in collection about a volunteer

````
GET http://localhost:3000/volunteers/find/1
````
Example request:

````
GET /volunteers/find/1 HTTP/1.1
Host: localhost:3000
````

The response is a volunteer object within a data envelope.

Example response:

````
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 483
ETag: W/"1e3-F+4QuRL7qw9ycCGLRybwGIlcvxA"
Date: Thu, 03 Mar 2022 09:56:17 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"622054e7d1788f32abbacf14",
"vid":1,
"first_name":"Robert",
"mid_name":"Downey",
"last_name":"Man",
"b_day":"2015-09-26T00:00:00.000Z",
"ssn":"455-45-7895",
"DL":"45874536",
"gender":"Male",
"ethnicity":"Hawain",
"phone_num":"285-456-4578",
"emer_num":"456-455-7878",
"email":"rdm@gmail.com",
"email2":"rdm2@gmail.com",
"prim_language":"English",
"addr":"255 street 2",
"city":"Austin",
"st":"TX",
"country":"United States",
"zip":"45875",
"events":[{"_id":"622090c11fbc86bc99dc20bc"}],"__v":0
}
````
Where a volunteer object is:

| Field			|	Type			|	Description																				  |
|-----------|-----------|-----------------------------------------------------|
| id				|	string		| A randomly generated identifier for the volunteer.	|
|	vid				|	number		| A Non-random primary identifier for volunteer.			|
|first_name	| string		|	The volunteer's first name													|

### 2.2 Employees

### 2.3 Posts

#### Creating a post
Creates a new employee

````
POST http://localhost:3000/employees/newemp
````
Example request:

````
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 36b19199-d979-47fb-9151-41a2e3ae2cf2
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 833

{
     
    "eContact": {
      "fName": "Simon",
      "lName": "Franklin",
      "phone": "832-389-7539"
    },
    "employeeID": 12,
    "firstName": "Rose",
    "lastName": "Robinson",
    "birthday": "05/29/1991",
    "SSN": "455-88-3298",
    "dLicense": "32326638 ",
    "gender": "Female",
    "race": "Black",
    "hispanic": true,
    "phone": "832-212-2003",
    "home": "832-355-5946",
    "pEmail": "rrobinson@gmail.com",
    "language": [
      "English","Spanish"
    ],
    "address": "1542 Wines Lane",
    "city": "Houston",
    "state": "Texas",
    "county": "Harris",
    "zip": "77030",
    "lEmployment": "8mo",
    "dept":"Events",
    "jDesc":"Event Moderator",
    "degree":"Bachelor's",
    "events": {
      "eventID": 1,
      "eventName": "Town Fair 2020"
    }
  } 
  ````
  
  ### 2.3 Clients
  
  #### Getting a volunteer's details
  Returns details stored in collection about a volunteer
  
  ````
  GET http://127.0.0.1:3000/clients/find/1
  ````
  Example request:

  ````
  GET /clients/find/1 HTTP/1.1
  Host: localhost:3000
  ````
  
  The response is a client object within a data envelope.

  Example response:
  
  
## 3. Testing
