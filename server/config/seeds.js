const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  //----------Eric Editing Categories----------
  const categories = await Category.insertMany([
    { name: 'Accessories' }, //0
    { name: 'Dresses' },     //1
    { name: 'Jackets' },     //2
    { name: 'Hats' },        //3
    { name: 'Pants' },       //4
    { name: 'Shirts' },      //5
    { name: 'Shoes' },       //6
    { name: 'Socks' },       //7
    { name: 'Shorts' },      //8
    { name: 'Underware' }    //9
  ]);
//----------Eric Editing Categories And Products---------------
  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "70's Socks",
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '70s-socks.jpg',
      category: categories[7]._id,
      price: 2.99,
      size: 'S'
    },
    {
      name: 'Dreamy Socks',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'dreamy-socks.jpg',
      category: categories[7]._id,
      price: 1.99,
      size: 'L'
    },
    {
      name: 'Pilot Hat',
      category: categories[3]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'pilot-hat.jpg',
      price: 7.99,
      size: 'M'
    },
    {
      name: 'Avs Hat',
      category: categories[3]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'Avs-hat.jpg',
      price: 3.99,
      size: 'L'
    },
    {
      name: 'Black Cowboy Hat',
      category: categories[3]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'black-cowboy-hat.jpg',
      price: 14.99,
      size: 'XL'
    },
    {
      name: 'Dark Gray Pants',
      category: categories[4]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'dark-grey-pants.jpg',
      price: 399.99,
      size: 'L'
    },
    {
      name: 'Cargo Pants',
      category: categories[4]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'cargo-pants.jpg',
      price: 199.99,
      size: 'S'
    },
    {
      name: 'Black Shirt',
      category: categories[5]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'black-shirt.jpg',
      price: 9.99,
      size: 'XXL'
    },
    {
      name: 'Plaid Long Sleeve Shirt',
      category: categories[5]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'plaid-long-sleeve-shirt.jpg',
      price: 1.99,
      size: 'XXXL'
    },
    {
      name: 'Black Shorts',
      category: categories[8]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'black-shorts.jpg',
      price: 2.99,
      size: 'M'
    },
    {
      name: 'Black Van Shoes',
      category: categories[6]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'black-van-shoes.jpg',
      price: 7.99,
      size: '12'
    },
    {
      name: 'USA Briefs',
      category: categories[9]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'USA-briefs.jpg',
      price: 9.99,
      size: 'L'
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
