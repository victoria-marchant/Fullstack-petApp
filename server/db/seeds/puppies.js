exports.seed = (knex) =>
  knex('puppies')
    .del()
    .then(() =>
      knex('puppies').insert([
        {
          id: 88801,
          name: 'Stevie',
          owner: 'Sarah and Rob',
          breed: 'Red Labrador',
          imagePath: '/images/puppy1.jpg',
        },
        {
          id: 88802,
          name: 'Coco',
          owner: 'Chloe',
          breed: 'Unknown',
          imagePath: '/images/puppy2.jpg',
        },
        {
          id: 88803,
          name: 'Magnum',
          owner: 'Michael',
          breed: 'Rottweiler',
          imagePath: '/images/puppy3.jpg',
        },
        {
          id: 88804,
          name: 'Saddie',
          owner: 'Sam',
          breed: 'Unknown',
          imagePath: '/images/puppy4.jpg',
        },
        {
          id: 88805,
          name: 'Murphy',
          owner: 'Matthew',
          breed: 'Pug',
          imagePath: '/images/puppy5.jpg',
        },
        {
          id: 88806,
          name: 'Bella',
          owner: 'Brianna',
          breed: 'Unknown',
          imagePath: '/images/puppy6.jpg',
        },
        {
          id: 88807,
          name: 'Rocky',
          owner: 'Ricky',
          breed: 'Unknown',
          imagePath: '/images/puppy7.jpg',
        },
        {
          id: 88808,
          name: 'Fido',
          owner: 'Bob',
          breed: 'Unknown',
          imagePath: '/images/puppy8.jpg',
        },
        {
          id: 88809,
          name: 'Pugsley McPuggle',
          owner: 'Unknown',
          breed: 'Pug',
          imagePath:
            'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pug_in_Tallinn.JPG',
        },
      ])
    )
