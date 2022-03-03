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
## 3. Testing
