> # Welcome to Tour Api
>
> `Product Schema `

`// Info for POST endpoints`

```
{
    name: String,
    description: String,
    price: Number,
    duration: Number,
    maxGroupSize: Number,
    status: String,

}
```

```
http://localhost:5000/api/v1/tours
http://localhost:5000/api/v1/tours?page=2&limit=3
http://localhost:5000/api/v1/tours?sort=price[gt:-200]
http://localhost:5000/api/v1/tours?page=1&sort=price[gt:-200]
http://localhost:5000/api/v1/tours?sort=price[gt:-200]&status=unavailable&page=1&limit=5

```
