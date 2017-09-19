# Flatt.js
Flatt - JavaScript util for flatten and unflatten object with properties
## Add flatten property
```javascript

user = {
  User: {
    name: 'Oriokko'
  }
};

Flatt.set(user, 'User.Department.id', 34);

//return
{
  User: {
    name: 'Oriokko',
    Department: {
      id: 34
    }
  }
}
```

## Set many flatten properties
```javascript

user = {
  User: {
    name: 'Oriokko'
  }
};

Flatt.sets(user, {
  'User.Department.id': 34,
  'User.Department.comment': 'Other Comment',
  'Chief.holidays': false
  });

//return
{
  "User":{
    "name":"Oriokko",
    "Department":{
      "id":34,
      "comment":"Other Comment"
    }
 },
  "Chief":{
    "holidays":false
  }
}
```
## Get property
```javascript
Flatt.get(user, 'User.Department.comment');

//return

'Other Comment'
```

## Flatten view
```javascript
Flatt.is(user);

//returns
{
  'Chief.holidays':false,
  'User.Department.comment':"Other Comment",
  'User.Department.id':34,
  'User.name':"Oriokko"
}
```
