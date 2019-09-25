# back-end

## Endpoints
Backend is hosted at https://haircarebackend.herokuapp.com/

### Customers
|endpoint|notes|Auth Required|HTTP Method|
| -|-|-|-|
|/api/customers/login|Login a customer. Pass **username** and **password** in body of request|No|POST|
|/api/customers/|Register a customer. Pass a customer object in body of request `{"username": "Sue", "password": "Sue","location": "San Francisco, CA", "email_address": "haircare@msn.net"}`|No|POST|


### Stylists
|endpoint|notes|Auth Required|HTTP Method|
| -|-|-|-|
|/api/stylists/login|Login a stylist. Pass **username** and **password** in body of request|No|POST|
|/api/stylists/|Register a stylist. Pass a stylist object in body of request `{"name": "Sue", "username": "Sue", "password": "Sue","location": "San Francisco, CA", "specialty": "Curly Hair", "bio": "alive and doing hair", "email_address": "haircare@msn.net"}`|No|POST|
|/api/stylists/location/:location|Find a stylist by location. Pass an exact city and state `San Francisco, CA` in body of request|Yes|GET|
|/api/stylists/:id|Find a stylist by id|Yes|GET|
|/api/stylists/:id|Delete a stylist|Yes|DELETE|
|/api/stylists/:id|Update a stylist. Pass a stylist object in body of request|Yes|PUT|

### Reviews
|endpoint|notes|Auth Required|HTTP Method|
| -|-|-|-|
|/api/reviews/|Create a review. Pass a review object in body of request `{"customer_id": 1, "stylist_id": 1, "review_text": "Sue was great","photos": "http://myfakedomain.com/myfakeimageurl.jpeg"}`|Yes|POST|
|/api/reviews/stylist/:stylist_id|All reviews for a given stylist. |Yes|GET|
|/api/reviews/customer/:customer_id|All reviews from a given customer|Yes|GET|
|/api/reviews/:id|Delete a review|Yes|DELETE|
|/api/reviews/:id|Update a review. Pass a review object in body of request|Yes|PUT|
