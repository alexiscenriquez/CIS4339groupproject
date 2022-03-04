# Group 28's API Documentation

#### Contents
- [Overview](#1-overview)
- [Resources](#2-resources)
  - [Volunteers](#21-volunteers)
  - [Employees](#22-employees)
  - [Clients](#23-clients)
  - [Posts](#24-posts)
 - [Testing](#3-testing)

## 1. Overview
Our group's API is JSON-based. All requests are made to endpoints beginning: `http://localhost:3000/` or `http://127.0.0.1:3000/`

## 2. Resources

### 2.1 Volunteers

#### Getting a volunteer's details
Returns details stored in collection about a volunteer

The request to fetch a volunteer's information looks like this:

````
GET http://localhost:3000/volunteers/find/{vid}
````
Where vid is the volunteer id

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


### 2.2 Employees

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

  | Field			|	Type			|	Description																				  |
  |-----------|-----------|-----------------------------------------------------|
  | id				|	string		| A randomly generated identifier for the client.	|
  |	cid				|	number		| A Non-random primary identifier for client.			|
  |first_name	| string		|	The client's first name													|
  
  
### 2.4 Posts

  
## 3. Testing
