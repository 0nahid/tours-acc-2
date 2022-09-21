> # Welcome to Tour Api

`// Info for POST endpoints`

```
{
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    duration: Number,
    view: Number,
    maxGroupSize: Number,
    status: String,

}
```

> Dummy Data for POST

```
{
  "name": " Dummy Data ",
  "description": "This is a dummy description",
  "price": 11,
  "duration": 3,
  "maxGroupSize": 5,
  "status": "available",
  "view": 5,
  "imageUrl": "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}
```

> Get api end points

```
https://tours.up.railway.app/api/v1/tours
https://tours.up.railway.app/api/v1/tours?page=2&limit=3
https://tours.up.railway.app/api/v1/tours?sort=price[gt:-200]
https://tours.up.railway.app/api/v1/tours?page=1&sort=price[gt:-200]
https://tours.up.railway.app/api/v1/tours?sort=price[gt:-200]&status=unavailable&page=1&limit=5

```
