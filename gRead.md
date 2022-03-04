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
