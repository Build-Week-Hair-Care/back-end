const reviews_db = require('./api/review_model')
const stylist_db = require('./api/stylist_model')
const customer_db = require('./api/customer_model')

function test_reviews(){
    // Create a review
    reviews_db.create({customer_id: 1, stylist_id:1, review_text: "lol4"+Math.random(), photos: "lol4"+Math.random()}).then(review => console.log(review));
    // Find reviews for a stylist
    reviews_db.findByStylist(1).then(reviews => console.log(reviews));
    reviews_db.findByCustomer(1).then(reviews => console.log(reviews));
    reviews_db.remove(16).then(reviews => console.log(reviews));
    reviews_db.update(7, {customer_id: 1, stylist_id:1, review_text: "update"+Math.random(), photos: "update"+Math.random()}).then(review => console.log(review));

}

function test_stylists(){
    // Create a review
    stylist_db.create({
        name: 'Mary Sue'+Math.random(), 
        username: 'Mary Sue1'+Math.random(),
        password: 'Mary Sue1'+Math.random(),  
        location: 'San Francisco, CA', 
        specialty: 'Curly Hair', 
        bio: 'Trained at the Curly Hair Institute. Seven time winner of the curly hair Olympics.',
        email_address: "haircare@msn.net"+Math.random()
        
      }).then(review => console.log(review));
    // Find reviews for a stylist
    stylist_db.findById(1).then(stylist => console.log(stylist));
    stylist_db.remove(4).then(stylist => console.log(stylist));
    stylist_db.update(1, {
        name: 'Update Sue'+Math.random(), 
        username: 'Update Sue1'+Math.random(),
        password: 'Update Sue1'+Math.random(),  
        location: 'San Francisco, CA', 
        specialty: 'Curly Hair', 
        bio: 'Trained at the Curly Hair Institute. Seven time winner of the curly hair Olympics.',
        email_address: "haircare@msn.net"+Math.random()
        
      }).then(review => console.log(review));
      stylist_db.findByLocation('San Francisco, CA').then(stylists => {console.log(stylists)})

}

function test_customers(){
    // Create a review
    customer_db.create({
       username: "CurlyCutie"+Math.random(),
        password: "curls123"+Math.random(),
        location: "San Jose, CA",
        email_address: "joselinda@aol.com"+Math.random()
      }).then(customer => console.log(customer));
      customer_db.findByUsername('Update Sue122').then(custom => console.log(custom))

}


test_customers();