  #### Getting clients's details
  Deals with clients collection
  
  Request to fetch all information from the clients collection
  
  ````
  GET http://127.0.0.1:3000/clients/all
  ````
  Example request:

  ````
  GET /clients/all HTTP/1.1
  Host: localhost:3000
  ````
  
  The response is a client object within a data envelope.

  Example response:
   
  ````
  Access-Control-Allow-Origin: *
  Connection: keep-alive
  Date: Fri, 04 Mar 2022 06:24:01 GMT
  ETag: W/"18de-MrB3R2XUzntxvh4qFEwlUg58KbI"
  Keep-Alive: timeout=5
  X-Powered-By: Express
  
  [
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
        }
    ]
  ````
  
  
  
  
  
  Add new Client to Client collection---------------------------------
  
  ````
  POST http://127.0.0.1:3000/clients/new-client
  ````
  Example Request
  
  ````
  Content-Type: application/json
  User-Agent: PostmanRuntime/7.29.0
  Accept: */*
  Postman-Token: 0b2e3a22-23f7-481d-a853-89f012096689
  Host: 127.0.0.1:3000
  Accept-Encoding: gzip, deflate, br
  Connection: keep-alive
  Content-Length: 1704
  ````
  
  Request Body
  
  ````
  {
    "cid": 6,
    "first_name": "Chancellor",
    "mid_name": "J",
    "last_name": "Bennett",
    "b_day": "1993-04-16T00:00:00.000Z",
    "DL": "",
    "gender": "Male",
    "ethnicity": "African American",
    "address": "4171 Cannot Find",
    "city": "Middle of Nowhere",
    "state": "???",
    "country": "United States",
    "zip_code": "687452",
    "rent": "19000",
    "residency": " 6 years",
    "living_arrangements": "With Family",
    "number_of_children": 2,
    "number_of_adults_over_65": 0,
    "phone_number": "281-854-7444",
    "home_phone_number": "",
    "emergency_contact_phone_number": "281-874-7842",
    "primary_email": "BestArtist@yahoo.com",
    "secondary_email": "",
    "marital_status": "Married",
    "language": "English",
    "priority_population": "HIGH",
    "employment_status": "Employed",
    "length_of_employment": " 16 years",
    "employer_name": "RCA Records",
    "occupation": "Music Artist",
    "highest_grade": "Highschool",
    "graduate": true,
    "degree_name": "None",
    "head_of_household": "Chance Bennett",
    "monthly_income": 400000,
    "spousal_income_support": "0",
    "worker_compensation": 0,
    "veteran_status": "None",
    "child_support": 0,
    "tanf": 0,
    "food_stamps": 0,
    "ssi": 0,
    "unemployment": 0,
    "social_security": 874125874,
    "other_income": null,
    "health_insurance": true,
    "health_insurance_desc": "Full Coverage",
    "insurance_program": "Chance the Rapper Program",
    "covid_status": true
}
  ````
  
  Example Respose
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: text/html; charset=utf-8
  Content-Length: 16
  ETag: W/"10-vneoRItZ5CDev+tKxpoOUGfCEYw"
  Date: Thu, 03 Mar 2022 17:05:27 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  ````
  
  ````
  New Client added
  ````
  
  FIND CLIENT BY CID
  
  ````
  GET http://127.0.0.1:3000/clients/find/{{cid}}
  ````
  
  Request Example
  ````
  GET http://127.0.0.1:3000/clients/find/1
  ````
  
  ````
  User-Agent: PostmanRuntime/7.29.0
  Accept: */*
  Postman-Token: 378fe422-135c-42a7-aa2b-264092dfda8a
  Host: 127.0.0.1:3000
  Accept-Encoding: gzip, deflate, br
  Connection: keep-alive
  ````
  
  Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 1266
  ETag: W/"4f2-K35g6+WHj6v8xLkSDJSR+KPEtLs"
  Date: Fri, 04 Mar 2022 06:34:18 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  
  [
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
    }
]
  ````
  
  ADD OR DELETE EMPLOYEE FROM CLIENT EMPLOYEE ARRAY FIELD
  
  ````
  PUT http://127.0.0.1:3000/clients/adddelemp/2
  ````
  
  Example request
  
  ````
  Content-Type: application/json
  User-Agent: PostmanRuntime/7.29.0
  Accept: */*
  Postman-Token: 23a8168d-c074-424f-b0a4-2054abea88a5
  Host: 127.0.0.1:3000
  Accept-Encoding: gzip, deflate, br
  Connection: keep-alive
  Content-Length: 46
  ````
  
  Request Body Adding employee
  
  ````
  {
    "action": "add",
    "employeeID":7
  }
  ````
  
  Example Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: text/html; charset=utf-8
  Content-Length: 24
  ETag: W/"18-pX0mww76oKvfiWtEGrMTyyTAdJM"
  Date: Fri, 04 Mar 2022 06:37:38 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  ````
  
  ````
  added employee to client
  ````
  
  Request Body Deleting employee
  
  ````
  {
    "action": "delete",
    "employeeID":7
  } 
  ````
  
  Example Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: text/html; charset=utf-8
  Content-Length: 24
  ETag: W/"18-pX0mww76oKvfiWtEGrMTyyTAdJM"
  Date: Fri, 04 Mar 2022 06:37:38 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  ````
  
  ````
  deleted employee linked to client
  ````
  
  ADD OR DELETE SERVICE FROM CLIENT SERVICE ARRAY FIELD
  
   ````
   PUT http://127.0.0.1:3000/clients/adddelservice/1
   ````
  
  Example request
  
  ````
  Content-Type: application/json
  User-Agent: PostmanRuntime/7.29.0
  Accept: */*
  Postman-Token: 23a8168d-c074-424f-b0a4-2054abea88a5
  Host: 127.0.0.1:3000
  Accept-Encoding: gzip, deflate, br
  Connection: keep-alive
  Content-Length: 46
  ````
  
  Request Body Adding service
  
  ````
  {
    "action":"add",
    "sid":6
  }
  ````
  
  Example Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: text/html; charset=utf-8
  Content-Length: 24
  ETag: W/"18-pX0mww76oKvfiWtEGrMTyyTAdJM"
  Date: Fri, 04 Mar 2022 06:37:38 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  ````
  
  ````
  added service to client
  ````
  
  Request Body Deleting service
  
  ````
  {
    "action":"delete",
    "sid":6
  }
  ````
  
  Example Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: text/html; charset=utf-8
  Content-Length: 24
  ETag: W/"18-pX0mww76oKvfiWtEGrMTyyTAdJM"
  Date: Fri, 04 Mar 2022 06:37:38 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  ````
  
  ````
  deleted service from client
  ````
  
  GET ALL SERVICES AND EMPLOYEES THAT ARE ASSOCIATED WITH CLIENTS
  
  Example Request
  
  ````
  GET http://127.0.0.1:3000/clients/client-history
  ````
  
  ````
  User-Agent: PostmanRuntime/7.29.0
  Accept: */*
  Postman-Token: d1841837-d83f-448e-8590-3491672b0f9f
  Host: 127.0.0.1:3000
  Accept-Encoding: gzip, deflate, br
  Connection: keep-alive
  ````
  
  Example Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 1201
  ETag: W/"4b1-L1bLnwRgM4Dbt5MgZBhlGPV//ms"
  Date: Fri, 04 Mar 2022 06:55:59 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  
  [
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
            }
        ]
    }
  ]
  ````
  
  UPDATE CLIENTS INFORMATION
  
  ````
  PUT http://127.0.0.1:3000/clients/update/{{cid}}
  ````
  
  Example Request
  
  ````
  PUT http://127.0.0.1:3000/clients/update/1
  ````
  
  ````
  Content-Type: application/json
  User-Agent: PostmanRuntime/7.29.0
  Accept: */*
  Postman-Token: c7f8d103-1536-4d72-8cb7-5ecc8415ff53
  Host: 127.0.0.1:3000
  Accept-Encoding: gzip, deflate, br
  Connection: keep-alive
  Content-Length: 99
  ````
  
  Request Body
  
  ````
  {
    "cid": 1,
    "first_name": "Michael",
    "mid_name": "J",
    "last_name": "Jackson"
  }
  ````
  
  Example Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: text/html; charset=utf-8
  Content-Length: 27
  ETag: W/"1b-PgSiyGaEILhv/6JCGxFB8vyT6mk"
  Date: Fri, 04 Mar 2022 06:58:50 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  ````
  
  ````
  Client information updated.
  ````
  
  DELETE CLIENT FROM COLLECTION
  
  ````
  DELETE  http://127.0.0.1:3000/clients/del/{{cid}}
  ````
  
  Example Request
  
  ````
  DELETE http://127.0.0.1:3000/clients/del/1
  ````
  
  ````
  User-Agent: PostmanRuntime/7.29.0
  Accept: */*
  Postman-Token: e06f7a33-86db-4b89-a043-941899712d9b
  Host: 127.0.0.1:3000
  Accept-Encoding: gzip, deflate, br
  Connection: keep-alive
  ````
  
  Example Response
  
  ````
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: text/html; charset=utf-8
  Content-Length: 28
  ETag: W/"1c-RLcQeREgCt+vmqZ1wC1m/eeu+cs"
  Date: Fri, 04 Mar 2022 07:03:08 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  ````
  
  ````
  Client deleted from database
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
