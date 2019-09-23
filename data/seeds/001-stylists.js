
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stylists').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stylists').insert([
      
        {
        id: 1, 
        Name: 'Mary Sue', 
        Location: 'San Francisco, CA', 
        Specialty: 'Curly Hair', 
        Bio: 'Trained at the Curly Hair Institute. Seven time winner of the curly hair Olympics.'
      },
        {
        id: 2, 
        Name: 'Bob', 
        Location:'San Rafael, CA',
        Specialty:'Old School meets New School', 
        Bio: 'Trained in the art of classic styles with a modern twist at the Aveda Paul Mitchell Bono Academy. I only use a straigt razor for the sharpest cuts.'
      },
        
      {
        id: 3, 
        Name: 'Lin', 
        Location:'San Carlos, CA',
        Specialty:'Color', 
        Bio: 'I speak bayalage, low-lights, highlights, ombre and unicorn! Keeping your hair healthy while helping you dye it to your hearts content is my only passion.' 
      },

      {
        id: 4, 
        Name: 'Teresa',
        Location: 'Palo Alto, CA',
        Specialty:'Kids Hair', 
        Bio:'Sweet simple children/s styles that are easy to maintain at home. I also hold classes for parents.' 
      }
      ]);
    });
};
