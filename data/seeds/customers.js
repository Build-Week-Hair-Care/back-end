
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          id: 1,
          Username: "CurlyCutie",
          Password: "curls123",
          Location: "San Jose, CA",
          Email_Address: "joselinda@aol.com"
        },

        {
          id: 2,
          Username: "RavenHaired",
          Password: "locks123",
          Location: "San Rafael, CA",
          Email_Address: "rafalindo@gmail.com"
        }, 
        
        {
          id: 3,
          Username: "BlondeAmbish",
          Password: "blondie123",
          Location: "San Carlos, CA",
          Email_Address: "blondiesan@yahoo.com"
        }, 
        
        
        {
          id: 4,
          Username: "HipsterDoode",
          Password: "abun123",
          Location: "San Jose, CA",
          Email_Address: "definitelybun@msn.net"
        }, 
        
        {
          id: 5,
          Username: "Bajito",
          Password: "justlow123",
          Location: "San Francisco, CA",
          Email_Address: "republicaguy@gmail.com"
        }, 
        
        {
          id: 6,
          Username: "RisosRiRi",
          Password: "risos123",
          Location: "San Carlos, CA",
          Email_Address: "rihannari@yahoo.com"
        }, 
        
        {
          id: 7,
          Username: "NiceBeard",
          Password: "beardo123",
          Location: "San Rafael, CA",
          Email_Address: "beardothegreat@msn.net"
        }


      ]);
    });
};
