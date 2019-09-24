
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          id: 1,
          username: "CurlyCutie",
          password: "curls123",
          location: "San Jose, CA",
          email_address: "joselinda@aol.com"
        },

        {
          id: 2,
          username: "RavenHaired",
          password: "locks123",
          location: "San Rafael, CA",
          email_address: "rafalindo@gmail.com"
        }, 
        
        {
          id: 3,
          username: "BlondeAmbish",
          password: "blondie123",
          location: "San Carlos, CA",
          email_address: "blondiesan@yahoo.com"
        }, 
        
        
        {
          id: 4,
          username: "HipsterDoode",
          password: "abun123",
          location: "San Jose, CA",
          email_address: "definitelybun@msn.net"
        }, 
        
        {
          id: 5,
          username: "Bajito",
          password: "justlow123",
          location: "San Francisco, CA",
          email_address: "republicaguy@gmail.com"
        }, 
        
        {
          id: 6,
          username: "RisosRiRi",
          password: "risos123",
          location: "San Carlos, CA",
          email_address: "rihannari@yahoo.com"
        }, 
        
        {
          id: 7,
          username: "NiceBeard",
          password: "beardo123",
          location: "San Rafael, CA",
          email_address: "beardothegreat@msn.net"
        }


      ]);
    });
};
