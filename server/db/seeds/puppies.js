exports.seed = (knex) =>
  knex('puppies')
    .del()
    .then(() =>
      knex('puppies').insert([
        {
          id: 88801,
          name: 'Stevie',
          owner: 'Sarah and Rob',
          animalType: 'dog',
          breed: 'Red Labrador',
          imagePath: '/images/puppy1.jpg',
        },
        {
          id: 88802,
          name: 'Coco',
          owner: 'Chloe',
          animalType: 'dog',
          breed: 'Unknown',
          imagePath: '/images/puppy2.jpg',
        },
        {
          id: 88803,
          name: 'Magnum',
          owner: 'Michael',
          animalType: 'dog',
          breed: 'Rottweiler',
          imagePath: '/images/puppy3.jpg',
        },
        {
          id: 88804,
          name: 'Saddie',
          owner: 'Sam',
          animalType: 'dog',
          breed: 'Unknown',
          imagePath: '/images/puppy4.jpg',
        },
        {
          id: 88805,
          name: 'Murphy',
          owner: 'Matthew',
          animalType: 'dog',
          breed: 'Pug',
          imagePath: '/images/puppy5.jpg',
        },
        {
          id: 88806,
          name: 'Bella',
          owner: 'Brianna',
          animalType: 'dog',
          breed: 'Unknown',
          imagePath: '/images/puppy6.jpg',
        },
        {
          id: 88807,
          name: 'Rocky',
          owner: 'Ricky',
          animalType: 'dog',
          breed: 'Unknown',
          imagePath: '/images/puppy7.jpg',
        },
        {
          id: 88808,
          name: 'Fido',
          owner: 'Bob',
          animalType: 'dog',
          breed: 'Unknown',
          imagePath: '/images/puppy8.jpg',
        },
        {
          id: 88809,
          name: 'Pugsley McPuggle',
          owner: 'Unknown',
          animalType: 'dog',
          breed: 'Pug',
          imagePath:
            'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pug_in_Tallinn.JPG',
        },
        {
          id: 88810,
          name: 'Ozzy',
          owner: 'Baker',
          animalType: 'dog',
          breed: 'French Bulldog',
          imagePath: '/images/puppy9.jpg',
        },
      ])
    )
