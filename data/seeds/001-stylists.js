
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stylists').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stylists').insert([
      
        {
        id: 1, 
        name: 'Mary Sue', 
        username: 'Mary Sue1',
        password: 'Mary Sue1',  
        location: 'San Francisco, CA', 
        specialty: 'Curly Hair', 
        bio: 'Trained at the Curly Hair Institute. Seven time winner of the curly hair Olympics.',
        email_address: "haircare@msn.net"
        
      },
        {
        id: 2, 
        name: 'Bob', 
        username: 'Mary Sue2',
        password: 'Mary Sue2',  
        location:'San Rafael, CA',
        specialty:'Old School meets New School', 
        bio: 'Trained in the art of classic styles with a modern twist at the Aveda Paul Mitchell Bono Academy. I only use a straigt razor for the sharpest cuts.',
        email_address: "haircare2@msn.net"
      },
        
      {
        id: 3, 
        name: 'Lin',
        username: 'Mary Sue3',  
        password: 'Mary Sue3',
        location:'San Carlos, CA',
        specialty:'Color', 
        bio: 'I speak bayalage, low-lights, highlights, ombre and unicorn! Keeping your hair healthy while helping you dye it to your hearts content is my only passion.',
        email_address: "haircare3@msn.net" 
      },

      {
        id: 4, 
        name: 'Teresa',
        username: 'Mary Sue4',
        password: 'Mary Sue4', 
        location: 'Palo Alto, CA',
        specialty:'Kids Hair', 
        bio:'Sweet simple children/s styles that are easy to maintain at home. I also hold classes for parents.',
        email_address: "haircare4@msn.net" 
      }
      ]);
    });
};
