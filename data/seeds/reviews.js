
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          id:1,
          customer_id: 1,
         stylist_id: 1,
         review_text:"I was a little skeptical at first that Mary Sue cuts dry hair but I was pleasantly surprised when the results were flawless.",
         Photos:"https://res.cloudinary.com/restore2/image/upload/v1569343567/back-end-hair-care-buildweek/philipe-cavalcante-xe68QiMaDrQ-unsplash_1.jpg"
         },
         
         {
         id:2,
         customer_id: 2,
         stylist_id: 4,
         review_text:"Teresa did an amazing job styling my daughters hair. My daughter had gotten gum in her hair and Teresa was able to give her the most beautiful bob and bangs.",
         photos:"https://res.cloudinary.com/restore2/image/upload/v1569344817/back-end-hair-care-buildweek/mi-pham-mLyL6Lu_3bs-unsplash.jpg"
         },
         
         {
          id:3,
         customer_id:3,
         stylist_id:3,
         reviewtext:"I like playing with different shades of blonde in my hair.  Lin is a genius. I was able to lift 3 shades and I am now rocking the best platinum blonde.",
         photos:"https://res.cloudinary.com/restore2/image/upload/v1569343570/back-end-hair-care-buildweek/kareya-saleh-tLKOj6cNwe0-unsplash.jpg"
         },
         
         {
         id:4,
         customer_id: 4,
         stylist_id: 2,
         review_text:" Sweet undercut. Deep conditioned the locks.  Very pleased.",
         photos:"https://res.cloudinary.com/restore2/image/upload/v1569343569/back-end-hair-care-buildweek/annie-spratt-LghAdhEXHHA-unsplash.jpg"
         },
         
         {
         id:5,
         customer_id: 5,
         stylist_id: 2,
         review_text:"Short and simple, which is just my preferred.  Good quality products, comfortable chairs. ",
         photos:"https://res.cloudinary.com/restore2/image/upload/v1569343568/back-end-hair-care-buildweek/troy-t-T2XwmoAfGqo-unsplash.jpg"
         }
         
         
      ]);
    });
};
