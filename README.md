# Group 28's API Documentation

#### Contents
- [Overview](#1-overview)
- [Resources](#2-resources)
  - [Volunteers](#21-volunteers)
  - [Employees](#22-employees)
  - [Clients](#23-clients)
  - [Services](#24-services)
  - [Events](#25-events)
  
 - [Testing](#3-testing)

## 1. Overview
Our group's API is JSON-based. All requests are made to endpoints beginning: `http://localhost:3000/` or `http://127.0.0.1:3000/`

## 2. Resources

### 2.1 Volunteers
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
| 404 Not Found | The requested resource could not be found buy may be available again in the future. Subsequent requests by the cliEnts are permissible. |


### 2.2 Employees

#### Retrieving all employee collections

Returns all employee collections in the database

The request to fetch the employees collections looks like this:

````
GET http://localhost:3000/employees
````
Example Response:

````
Response Headers
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 6930
ETag: W/"1b12-kYXasgXCV5V4J9Vd8NTwkQrCMlc"
Date: Fri, 04 Mar 2022 09:00:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Response Body
[
    {
        "employeeID": 2,
        "firstName": "Kim",
        "lastName": "Brown",
        "birthday": "2002-12-09T00:00:00.000Z",
        "SSN": "323-23-5534",
        "dLicense": "5050377",
        "gender": "Female",
        "race": "White",
        "hispanic": true,
        "address": "1597 D Street",
        "city": "New Berlin",
        "state": "Wisconsin",
        "__v": 0,
        "county": "Waukesha",
        "degree": "Bachelor's",
        "dept": "Accounting",
        "eContact": [
            {
                "_id": "6221d54952902837f457a590",
                "fName": "John",
                "lName": "Paul",
                "phone": "836-212-7382"
            }
        ],
        "home": "586-470-2971",
        "jDesc": "Accountant",
        "lEmployment": "1yr 3mo",
        "language": [
            "English"
        ],
        "pEmail": "acox@hotmail.com",
        "phone": "810-343-2078",
        "zip": "53151",
        "events": [],
        "clients": []
    },
    {
        "employeeID": 3,
        "firstName": "Leslie",
        "lastName": "Brown",
        "birthday": "2002-12-09T00:00:00.000Z",
        "SSN": "323-23-5534",
        "dLicense": "5050377",
        "gender": "Female",
        "race": "White",
        "hispanic": true,
        "address": "4624 Lynch Street",
        "city": "New Berlin",
        "state": "Wisconsin",
        "__v": 0,
        "county": "Waukesha",
        "dept": "Accounting",
        "eContact": [
            {
                "_id": "6221d54952902837f457a591",
                "fName": "Thomas",
                "lName": "Johnson",
                "phone": "919-924-0851"
            }
        ],
        "home": "920-905-7562",
        "jDesc": "Accountant",
        "lEmployment": "1mo",
        "language": [
            "English",
            "Spanish"
        ],
        "pEmail": "lbrown@gmail.com",
        "phone": "715-370-6985",
        "zip": "53151",
        "events": [],
        "clients": []
    },
    {
        "_id": "621ed931ff5db593c9979289",
        "employeeID": 1,
        "firstName": "Asha",
        "lastName": "Cox",
        "birthday": "1998-02-12T00:00:00.000Z",
        "SSN": "536-34-7553",
        "dLicense": "5050377",
        "gender": "Female",
        "race": "Black",
        "hispanic": false,
        "phone": "810-343-2078",
        "home": "586-470-2971",
        "eContact": [
            {
                "_id": "6221d54952902837f457a592",
                "fName": "Christopher",
                "lName": "Machado",
                "phone": "816-202-1863"
            }
        ],
        "pEmail": "acox@hotmail.com",
        "language": [
            "English"
        ],
        "address": "1597 D Street",
        "city": "Southfield",
        "state": "Michigan",
        "county": "Oakland",
        "zip": "48075",
        "lEmployment": "2 years",
        "dept": "Marketing",
        "jDesc": "Marketing Coordinator",
        "degree": "Associate's",
        "events": [
            {
                "_id": "6221d54952902837f457a593",
                "eventID": 2,
                "eventName": "Town Fair 2020"
            }
        ],
        "clients": [
            {
                "_id": "6221d54952902837f457a594",
                "clientID": 7,
                "firstName": "Trisha",
                "lastName": "Paytas"
            }
        ],
        "__v": 0
    }
    ]
````
#### Retrieving an employee collection by employee id

Returns a single collection of an employee with specified id 

The request to fetch an employee's information looks like this:

````
Get http://localhost:3000/employees/find/{employeeid}
````
Where employeeid is the ID for requested employee.

Example Request:

````
GET http://localhost:3000/employees/find/2
````
Example Response:

`````
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 540
ETag: W/"21c-nL6vzX3eShbBCZp1hR6EpkDSyNM"
Date: Thu, 03 Mar 2022 21:23:49 GMT
Connection: close

[
  {
    "eContact": {
      "fName": "John",
      "lName": "Paul",
      "phone": "836-212-7382"
    },
    "employeeID": 2,
    "firstName": "Kim",
    "lastName": "Brown",
    "birthday": "2002-12-09T00:00:00.000Z",
    "SSN": "323-23-5534",
    "dLicense": "5050377",
    "gender": "Female",
    "race": "White",
    "hispanic": true,
    "address": "1597 D Street",
    "city": "New Berlin",
    "state": "Wisconsin",
    "__v": 0,
    "county": "Waukesha",
    "degree": "Bachelor's",
    "dept": "Accounting",
    "home": "586-470-2971",
    "jDesc": "Accountant",
    "lEmployment": "1yr 3mo",
    "language": [
      "English"
    ],
    "pEmail": "acox@hotmail.com",
    "phone": "810-343-2078",
    "zip": "53151"
  }
]

`````
Where an employee object is:

| Field			|	Type			|	Description																				  |
|------------|-----------|-----------------------------------------------------|
| eContact   | object    | An object that houses the name and phone number of the employee's emergency contact|
| fName      | string    | The first name of the employee's emergency contact  |
| lName      | string    | The last name of the employee's emergency contact   |
| phone      | string    | The phone number of the employee's emergency contact|
| employeeID | string    | The employee's unique ID                            |
| firstName  | string    | The employee's first name                           |
| lastName   | string    | The employee's last name                            |
| birthday   | string    | The employee's birthday                             |
| SSN        | string    | The employee's social security number               |
| dLicense   | string    | The employee's driver's license number              |
| gender     | string    | The employee's gender                               |
| race       | string    | The employee's race                                 |
| hispanic   | boolean   | Tells if the employee is hispanic                   |
| address    | string    | The employees's street address                      |
| city       | string    | The city the employee resides                       |
| state      | string    | The state the employee resides                      |
| county     | string    | The county the employee resides                     |
| degree     | string    | The employee's academic degree qualification        |
| dept       | string    | The department in which the employee works          |
| home       | string    | The employee's home contact number                  |
| jDesc      | string    | The employee's job description                      |
| lEmployment| string    | The length of time the employee has been employed at the company |
| language   | array     | The languages the employee is proficient in         |
| pEmail     | string    | The employee's primary email                        |
| phone      | string    | The employee's primary number                       |
| zip        | string    | The zip code of the area the employee resides       |  

#### Creating a post
Creates a new employee

````
POST http://localhost:3000/employees/newemp
````
Example request:

````
Request Headers
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 265fb815-008f-4b60-95a2-ee923a5354ee
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 793

Request Body
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
      "eventID": 1
    }
  } 
````
Example Response:

````
Response Headers
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 34
ETag: W/"22-P9bDNlX3ALTiyte7dL06KfO0oZw"
Date: Fri, 04 Mar 2022 07:02:10 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Response Body
Employee is added to the database.
````

#### Deleting an employee by Id

The request to delete and employee collection looks like this:

````
DELETE http://localhost:3000/employees/del/{employeeid}
````

Example Request

````
DELETE http://localhost:3000/employees/del/13
````
Example Response

````
Response Headers
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-DCwqkQCBi9y2ARHDbSlL+KOZrwg"
Date: Fri, 04 Mar 2022 08:23:00 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Response Body
deleted from db
````

#### Updating an employee collection

The request to delete and employee collection looks like this:

````
PUT http://localhost:3000/employees/update/{employeeid}
````

Example Request

````
PUT http://localhost:3000/employees/update/7
````
````
Request Headers
Content-Type: text/plain
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: e48c0faf-8226-4950-ba87-c214eb2f742e
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 32

Request Body
{
    "phone":"832-392-2020"
}
````
Example Response

````
Response Headers
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 27
ETag: W/"1b-tpyE1TzVsI0Gwqfu1zwMT1Nlmgw"
Date: Fri, 04 Mar 2022 08:32:30 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Response Body
Activity is edited via PUT.

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
   
  ````
  HTTP/1.1 304 Not Modified
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  ETag: W/"4ee-hW/VMs5pnpKlr1LO6qMapGaaM9E"
  Date: Thu, 03 Mar 2022 17:25:18 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  
  {"_id": "6220f557b87e766fa5128410",
   "cid": 1,
   "first_name": "Steven",
   "mid_name": "S",
   "last_name": "Spielberg",
   "b_day": "1993-08-22T00:00:00.000Z",
   "DL": "",
   "gender": "",
   "ethnicity": "",
   "address": "555 Peppermint Lane",
   "city": "Austin",
   "state": "TX",
   "country": "Harris",
   "zip_code": "77885",
   "rent": "1,000",
   "residency": "1 year",
   "living_arrangements": "With Spouse",
   "number_of_children": 1,
   "number_of_adults_over_65": 0,
   "phone_number": "222-545-5585",
   "home_phone_number": "",
   "emergency_contact_phone_number": "221-558-8995",
   "primary_email": "SSberg@yahoo.com",
   "secondary_email": "",
   "marital_status": "Married",
   "language": "English",
   "priority_population": "HIGH",
   "employment_status": "Employed",
   "length_of_employment": "7 years",
   "employer_name": "McDonalds",
   "occupation": "Manager",
   "highest_grade": "College",
   "graduate": true,
   "degree_name": "Business",
   "head_of_household": "Steven Spielberg",
   "monthly_income": 52124,
   "spousal_income_support": "50000",
   "worker_compensation": 0,
   "veteran_status": "None",
   "child_support": 0,
   "tanf": 0,
   "food_stamps": 0,
   "ssi": 0,
   "unemployment": 0,
   "social_security": 740259875,
   "other_income": null,
   "health_insurance": true,
   "health_insurance_desc": "General Heatlhcare",
   "insurance_program": "United Healthcare",
   "covid_status": true,
   "__v": 0}
  ````
  
  Where a client object is:

  | Field			                     |	Type	 |	Description																				                       |
  |--------------------------------|---------|---------------------------------------------------------------------------|
  | id				                     | string  | A randomly generated identifier for the client.	                         |
  |	cid				                     | number  | on-random primary identifier for client.			                             |
  | first_name                     | string	 | The volunteer's first name													                       |
  | mid_name                       | string  | The client's middle name                                                  |     
  | last_name                      | string  | The client's last name                                                    |
  | b_day                          | date    | The client's birthday                                                     |
  | dl                             | string  | The client's drivers license number                                       |
  | gender                         | string  | The client's gender                                                       |
  | ethnicity                      | string  | The client's ethnicity                                                    |
  | address                        | string  | The client's address                                                      |
  | city                           | string  | The city the client resides                                               |
  | state                          | string  | The state the client resides                                              |
  | country                        | string  | The country the client resides                                            |
  | zip_code                       | string  | The client's zip code address                                             | 
  | rent                           | string  | The client's monthly rent amount                                          |
  | residency                      | string  | The amount of time a client has been a resident                           |
  | living_arrangement             | string  | The living situation of a client                                          | 
  | number_of_children             | number  | The number of children a client has/has living with them                  |
  | number_of_adults_over_65       | number  | The number of elderly people a client has living with them                |
  | phone_number                   | string  | The client's phone number                                                 |
  | home_phone_number              | string  | The client's home phone number                                            |
  | emergency_contact_phone_number | string  | The client's emergency contact phone number                               |    
  | primary_email                  | boolean | The client's primary email address                                        |
  | secondary_email                | boolean | The client's secondary email address                                      |
  | marital_status                 | boolean | The client's marital status                                               |
  | language                       | boolean | The client's languages                                                    |
  | priority_population            | boolean | The client's amount of priority based on their situation                  |
  | employment_status              | boolean | The client's current employment status                                    |
  | length_of_employment           | boolean | The client's length for which they are currently employed                 |            
  | employer_name                  | boolean | The client's employer name                                                |
  | occupation                     | boolean | The client's job title                                                    |
  | highest_grade                  | boolean | The client's highest grade completed                                      |
  | graduate                       | boolean | The client's graduation status                                            |
  | degree_name                    | string  | The client's degree name                                                  | 
  | head_of_household              | string  | The client's current head of household name                               |     
  | monthly_income                 | number  | The client's monthly income                                               |
  | spousal_income_support         | string  | The client's spouses monthly income                                       |                      
  | worker_compensation            | number  | The client's amount of worker's compensation                              |
  | veteran_status                 | string  | The client's veteran status                                               |
  | child_support                  | number  | The cliient's income of child support paid or received                    |                  
  | tanf                           | number  | The client's income received from Temporary Assistance for Needy Families |                                
  | food_stamps                    | number  | The client's income received from food stamps                             |                                   
  | ssi                            | number  | The client's income received from Supplemental Security Income            |
  | unemployment                   | number  | The client's income received from unemployment                            |                                   
  | social_security                | number  | The client's income received from social security                         |                                   
  | other_income                   | number  | The client's income received from other sources of unlisted               |                                   
  | health_insurance               | boolean | The client's status with healthcare                                       |
  | health_insurance_desc          | string  | The client's health care description                                      |
  | insurance_program              | string  | The client's insurance program                                            |
  | covid_status                   | boolean | The client's status regarding COVID19                                     |
  | employees                      | array   | List of IDs for employees that have assisted clients is apart of          |
  | services                       | array   | List of IDs for services clients have requested                           |
  
  Possible errors:

  | Error code                | Description                  |
  | --------------------------|------------------------------|
  | 404 Not Found             | The requested resource could not be found buy may be available again in the future. Subsequent requests by the cleints are permissible. |
  | 500 Internal Server Error | The server encountered an unexpected condition that precented it from fullifilling the request.                                         |
  
  
  #### Getting all volunteer's details
  Returns details stored in collection about all volunteer
  
  ````
  GET http://127.0.0.1:3000/clients/all
  ````
  Example request:

  ````
  GET /clients/all HTTP/1.1
  Host: localhost:3000
  ````
  
  The response is all available client objects within a data envelope.

  Example response:
  
  `````
  {
        "employees": {
            "employeeID": [
                1
            ]
        },
        "services": {
            "sid": [
                1,
                6
            ]
        },
        "_id": "6221287fd95bc85b9cb18929",
        "cid": 1,
        "first_name": "Steven",
        "mid_name": "S",
        "last_name": "Spielberg",
        "b_day": "1993-08-22T00:00:00.000Z",
        "DL": "",
        "gender": "",
        "ethnicity": "",
        "address": "555 Peppermint Lane",
        "city": "Austin",
        "state": "TX",
        "country": "Harris",
        "zip_code": "77885",
        "rent": "1,000",
        "residency": "1 year",
        "living_arrangements": "With Spouse",
        "number_of_children": 1,
        "number_of_adults_over_65": 0,
        "phone_number": "222-545-5585",
        "home_phone_number": "",
        "emergency_contact_phone_number": "221-558-8995",
        "primary_email": "SSberg@yahoo.com",
        "secondary_email": "",
        "marital_status": "Married",
        "language": "English",
        "priority_population": "HIGH",
        "employment_status": "Employed",
        "length_of_employment": "7 years",
        "employer_name": "McDonalds",
        "occupation": "Manager",
        "highest_grade": "College",
        "graduate": true,
        "degree_name": "Business",
        "head_of_household": "Steven Spielberg",
        "monthly_income": 52124,
        "spousal_income_support": "50000",
        "worker_compensation": 0,
        "veteran_status": "None",
        "child_support": 0,
        "tanf": 0,
        "food_stamps": 0,
        "ssi": 0,
        "unemployment": 0,
        "social_security": 740259875,
        "other_income": null,
        "health_insurance": true,
        "health_insurance_desc": "General Heatlhcare",
        "insurance_program": "United Healthcare",
        "covid_status": true,
        "__v": 0
    },
    
    {
        "employees": {
            "employeeID": [
                2
            ]
        },
        "services": {
            "sid": [
                2
            ]
        },
        "_id": "6221288ad95bc85b9cb1892b",
        "cid": 2,
        "first_name": "Steven",
        "mid_name": "Destiny",
        "last_name": "Bonnell",
        "b_day": "1994-05-13T00:00:00.000Z",
        "DL": "",
        "gender": "",
        "ethnicity": "",
        "address": "567 Crumble Cookie Lane",
        "city": "El Paso",
        "state": "TX",
        "country": "Swoop",
        "zip_code": "77878",
        "rent": "500",
        "residency": "4 year",
        "living_arrangements": "Alone",
        "number_of_children": 1,
        "number_of_adults_over_65": 0,
        "phone_number": "252-578-5585",
        "home_phone_number": "",
        "emergency_contact_phone_number": "221-458-8515",
        "primary_email": "Destinygg@yahoo.com",
        "secondary_email": "",
        "marital_status": "Single",
        "language": "English",
        "priority_population": "HIGH",
        "employment_status": "Employed",
        "length_of_employment": "7 years",
        "employer_name": "Twitch.tv",
        "occupation": "Streamer",
        "highest_grade": "Highschool",
        "graduate": true,
        "degree_name": "None",
        "head_of_household": "Steven Bonnell",
        "monthly_income": 32167,
        "spousal_income_support": "0",
        "worker_compensation": 0,
        "veteran_status": "None",
        "child_support": 0,
        "tanf": 0,
        "food_stamps": 0,
        "ssi": 0,
        "unemployment": 0,
        "social_security": 784522214,
        "other_income": null,
        "health_insurance": true,
        "health_insurance_desc": "General Healthcare",
        "insurance_program": "Aetna",
        "covid_status": false,
        "__v": 0
    }
  `````
  
  #### Getting all client's details with employees and services
  Returns details stored in collection about all client's details with employees and services
  
  ````
  GET http://127.0.0.1:3000/clients/client-history
  ````
  Example request:

  ````
  GET /clients/client-history HTTP/1.1
  Host: localhost:3000
  ````
  
  The response is a client object within a data envelope accompanied by any associated employee or service.
  
  Example response:
  
  `````
  Access-Control-Allow-Origin: *
  Connection: keep-alive
  Date: Fri, 04 Mar 2022 04:51:10 GMT
  ETag: W/"511-3oarHIMqV9Xawjk30RMyqBT7QiM"
  Keep-Alive: timeout=5
  X-Powered-By: Express
  
  {
        "first_name": "Steven",
        "mid_name": "S",
        "last_name": "Spielberg",
        "employees": [
            {
                "employeeID": 1,
                "firstName": "Asha",
                "lastName": "Cox",
                "phone": "810-343-2078",
                "pEmail": "acox@hotmail.com"
            }
        ],
        "services": [
            {
                "sid": 1,
                "name": "Early Childhood",
                "renewal": "Court Order"
            },
            {
                "sid": 6,
                "name": "Family Support",
                "renewal": "Monthly"
            }
        ]
    }
    
   `````
   
   #### Creating a post
   Creates a new client

  ````
  POST http://127.0.0.1:3000/clients/new-client
  ````
  Example request:
  
  ````
    {
    "cid": 5,
    "first_name": "Michael",
    "mid_name": "J",
    "last_name": "Jordan",
    "b_day": "1963-02-17T00:00:00.000Z",
    "DL": "",
    "gender": "Male",
    "ethnicity": "African American",
    "address": "2700 Point Ln",
    "city": "Highland Park",
    "state": "IL",
    "country": "United States",
    "zip_code": "60035",
    "rent": "0",
    "residency": " 12 years",
    "living_arrangements": "With Family",
    "number_of_children": 5,
    "number_of_adults_over_65": 0,
    "phone_number": "281-854-3332",
    "home_phone_number": "",
    "emergency_contact_phone_number": "281-874-5512",
    "primary_email": "HallofFamer@yahoo.com",
    "secondary_email": "",
    "marital_status": "Married",
    "language": "English",
    "priority_population": "HIGH",
    "employment_status": "Unemployed",
    "length_of_employment": " 16 years",
    "employer_name": "None",
    "occupation": "None",
    "highest_grade": "College",
    "graduate": true,
    "degree_name": "Bachelors of Arts in Geography",
    "head_of_household": "Michael Jordan",
    "monthly_income": 3000000,
    "spousal_income_support": "0",
    "worker_compensation": 0,
    "veteran_status": "None",
    "child_support": 0,
    "tanf": 0,
    "food_stamps": 0,
    "ssi": 0,
    "unemployment": 0,
    "social_security": 555555555,
    "other_income": null,
    "health_insurance": true,
    "health_insurance_desc": "Full Coverage",
    "insurance_program": "Jordan Family Program",
    "covid_status": false
    }
   ````
  
  ### 2.4 Services

  
Deals with Services collection

#### Request to fetch all services data

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
        }
]
````

#### ADD NEW SERVICES TO SERVICES COLLECTION

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

#### FIND SERVICE BY SID

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

#### ADD OR DELETE APPLICANTS FROM SERVICES

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

#### GET ALL SERVICES WITH APPLICANTS INFORMATION

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

#### UPDATE SERVICE INFORMATION

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

#### DELETE SERVICE FROM SERVICES COLLECTION

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

### 2.5 Events

DEALS WITH DATA STORED IN EVENTS COLLECTION

#### Get information from all events

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

#### ADD NEW EVENT TO EVENTS COLLECTION

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


#### FIND EVENT FROM EVENT COLLECTION BY EVID

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


#### ADD OR REMOVE ATTENDEE FROM/TO EVENT

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

#### GET INFORMATION FOR ATTENDEES AT EVENT(volunteers, clients, employees)

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

#### UPDATE EVENT INFORMATION BY EVID

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

#### DELETE EVENT FROM EVENT COLLECTION

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




## 3. Testing
