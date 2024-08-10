const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household items' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' },
    { name: 'Fashion' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Roasted Peanuts',
      description:
        'PLANTERS honey roasted peanuts,Party Snack, Plant-Based Protein, After School Snack, Sweet and Salty, Salted Nuts, Flavored with Sea Salt and Honey, Quick Snacks for Adults, Kosher, 16oz Jar',
      image: 'roasted-peanuts.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 498
    },
    {
      name: 'Pumpkin Seeds',
      description:
        'Terrasoul Superfoods Organic Pumpkin Seeds, 2 Lbs - Premium Quality, Shelled, Raw, Unsalted',
      image: 'pumpkin-seeds.jpg',
      category: categories[0]._id,
      price: 8.49,
      quantity: 499
    },
    {
      name: 'Orange Soda',
      description:
        'Sunkist Orange Soda, 12 Fl Oz (Pack of 12).BOLD ORANGE TASTE: Beaming with bold, orange flavor, Sunkist always satisfies your thirst',
      image: 'orange-soda.jpg',
      category: categories[0]._id,
      price: 12.29,
      quantity: 500
    },
    {
      name: 'Shells Pasta',
      description:
        'La Moderna Shells Pasta, Noodles, Durum Wheat, Protein, Fiber, Vitamins, 7 Oz.Made from 100% durum wheat, good for your health and full of protein, fiber, and vitamins.Certified kosher, enriched with vitamins, iron and folic acid. Free of GMOs.',
      image: 'shells-pasta.jpg',
      category: categories[0]._id,
      price: 8.99,
      quantity: 250
    },
    {
      name: 'Chicken Soup',
      description:
        'Amazon Fresh, Condensed Low Fat Cream of Chicken Soup, 10.5 Oz (Previously Happy Belly, Packaging May Vary).One 10.5-ounce can of Condensed Low Fat Cream of Chicken Soup.our favorite Happy Belly products are now part of the Amazon Fresh family! Packaging may vary, but the product and quality you love are exactly the same.',
      image: 'chicken-soup.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 350
    },
    {
      name: 'Swiffer Sweeper',
      category: categories[1]._id,
      description:
        'Swiffer Sweeper 2-in-1 Dry + Wet Floor Mopping and Sweeping Kit, Multi-Surface Kit for Floor Cleaning, Kit Includes 1 Sweeper, 14 Dry Sweeping Cloths, 5 Wet Mopping Cloths.',
      image: 'swiffer-sweeper.jpg',
      price: 7.99,
      quantity: 60
    },
    {
      name: 'Bounty Quick',
      category: categories[1]._id,
      description:
        'Bounty Quick Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls.Pack contains 8 Family Rolls of Bounty white Quick Size Paper Towels',
      image: 'bounty-quick.jpg',
      price: 13.99,
      quantity: 50
    },
    {
      name: 'Mixing Bowls',
      category: categories[1]._id,
      description:
        'Mixing Bowls with Airtight Lids Set, 26PCS Stainless Steel Khaki Bowls with Grater Attachments, Non-Slip Bottoms & Kitchen Gadgets Set, Size 7, 4, 2.5, 2.0,1.5, 1QT, Great for Mixing & Serving',
      image: 'mixing-bowls.jpg',
      price: 12.99,
      quantity: 150
    },
    {
      name: 'Magic Bullet Blender',
      category: categories[1]._id,
      description:
        'Magic Bullet Blender, Small, Silver, 11 Piece Set.Included: (1) 250W motor base, (1) cross-blade, (1) tall cup, (1) short cup, (1) party mug, (2) lip rings, (2) Stay-Fresh resealable lids, (1) to-go lid and 10-second recipe guide.',
      image: 'magic-bullet.jpg',
      price: 11.99,
      quantity: 100
    },
    {
      name: 'Ziploc Storage Bags',
      category: categories[1]._id,
      description:
        'Ziploc Quart Food Storage Freezer Bags, Stay Open Design with Stand-Up Bottom, Easy to Fill, 100 Count.Ziploc brand Freezer Bags include a Stay Open Design – they stay open when you want them to, making them really easy to fill, almost like having an extra pair of hands in the kitchen to help you out.',
      image: 'ziploc.jpg',
      price: 12.48,
      quantity: 200
    },
    {
      name: 'TCL 4K LED Smart TV',
      category: categories[2]._id,
      description:
        'TCL 75-Inch Class S5 UHD 4K LED Smart TV with Fire TV (75S551F, 2024 Model), Dolby Vision, HDR PRO+, Dolby Atmos, Alexa Built-in with Voice Remote, Streaming Television',
      image: 'tcl-75.jpg',
      price: 429.99,
      quantity: 15
    },
    {
      name: 'Sony Alpha ZV-E10',
      category: categories[2]._id,
      description:
        'Sony Alpha ZV-E10 - APS-C Interchangeable Lens Mirrorless Vlog Camera Kit - Black',
      image: 'sony-alpha.jpg',
      price: 299.99,
      quantity: 10
    },
    {
      name: 'Camera System',
      category: categories[2]._id,
      description:
        'Enther&MAXHUB Conference Room Camera System,All-in-one Video Conferencing System with 6 Microphones,Ultra HD 4K/1080p/720p, USB Videobar with 8-Meter Voice Pick-up for Small and Medium-Sized Rooms',
      image: 'camera-system.jpg',
      price: 123.99,
      quantity: 30
    },
    {
      name: 'Galaxy Tablet A9+',
      category: categories[2]._id,
      description:
        'SAMSUNG Galaxy Tab A9+ Tablet 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite',
      image: 'samsung-tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Apple Watch SE',
      category: categories[2]._id,
      description:
        'Apple Watch SE (2nd Gen) [GPS + Cellular 40mm] Smartwatch with Starlight Aluminum Case with Starlight Sport Band S/M. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor.',
      image: 'apple-watch.jpg',
      price: 299.99,
      quantity: 20
    },
    {
      name: 'Hillbilly Elegy',
      category: categories[3]._id,
      description:
        'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis Paperback – May 1, 2018.From a former marine and Yale Law School graduate now serving as a U.S. Senator from Ohio and the Republican Vice Presidential candidate for the 2024 election, an incisive account of growing up in a poor Rust Belt town that offers a broader, probing look at the struggles of America\'s white working class.',
      image: 'hillbilly-elegy.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'It Ends with Us',
      category: categories[3]._id,
      description:
        'It Ends with Us: A Novel (1) Paperback – August 2, 2016.From the #1 New York Times bestselling author of It Starts with Us and All Your Perfects, a “brave and heartbreaking novel that digs its claws into you and doesn’t let go, long after you’ve finished it” (Anna Todd, New York Times bestselling author) about a workaholic with a too-good-to-be-true romance who can’t stop thinking about her first love.',
      image: 'it-ends.jpg',
      price: 5.99,
      quantity: 50
    },
    {
      name: 'Atomic Habits',
      category: categories[3]._id,
      description:
        'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – October 16, 2018.No matter your goals, Atomic Habits offers a proven framework for improving--every day.',
      image: 'atomic-habits.jpg',
      price: 9.99,
      quantity: 50
    },
    {
      name: 'Wooden Dashboard',
      category: categories[4]._id,
      description: 'Melissa & Doug Vroom & Zoom Interactive Wooden Dashboard Steering Wheel Pretend Play Driving Toy - FSC Certified',
      image: 'vroom-zoom.jpg',
      price: 15.99,
      quantity: 500
    },
    {
      name: 'Garbage Truck Toy Set',
      category: categories[4]._id,
      description: 'JOYIN Large Friction Powered Garbage Truck Toy Set, Includes Dumpster, Trash Bins, and Learning Cards for Kids',
      image: 'garbage-truck.jpg',
      price: 5.99,
      quantity: 200
    },
    {
      name: 'Disney Princess Toys',
      category: categories[4]._id,
      description:
        'Mattel Disney Princess Toys, Small Doll Party Set with 6 Posable Princess Dolls in Sparkling Clothing & 13 Tea Time Accessories',
      image: 'disney-princess.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Toy Story 4 Stickers',
      category: categories[4]._id,
      description:
        'Ultimate Sticker Book: Disney Pixar Toy Story 4.Dive into adventure and meet exciting new toys, from Forky and Duke Caboom to Officer Giggle McDimples.',
      image: 'toy-sticker.jpg',
      price: 7.99,
      quantity: 200
    },
    {
      name: 'Building Blocks',
      category: categories[4]._id,
      description:
        'UNiPLAY Mix Soft Building Blocks - 36-Piece Set for Infant Early Learning, Cognitive Development, and Toddler Creative Play - Ages 3 Months+',
      image: 'building-blocks.jpg',
      price: 9.99,
      quantity: 420
    },
    {
      name: 'Brown bead Lisa Bag',
      category: categories[5]._id,
      description:
        'Handmade rossbody Lisa bag in brown tone with bead and tassel details. Zipper closure and adjustable strap. Color: Brown with multicolored details.',
      image: 'brown-bag.jpg',
      price: 15.99,
      quantity: 5
    },
    {
      name: 'Cowrie Earrings',
      category: categories[5]._id,
      description:
        'Handmade Cowrie shells have been valued by many African cultures going back centuries, and served multiple purposes. The small shells are both durable and easily portable and have been used for ornamentation including hair or garment accessories and jewelry.',
      image: 'cowrie-earring.jpg',
      price: 25.99,
      quantity: 50
    },
    {
      name: 'Letty Bag',
      category: categories[5]._id,
      description:
        'Marked with beads,this grommet bag can be used as a tote or a large purse. With 6 pockets on the inside and 1 on the outside there are plenty of pockets to store everything.',
      image: 'letty-bag.jpg',
      price: 25.99,
      quantity: 20
    },
    {
      name: 'Mira Bag',
      category: categories[5]._id,
      description:
        'Handmade glovetanned beads · Inside snap pocket · Zip-top closure, fabric lining · Detachable strap with 24cm drop.',
      image: 'mira-bag.jpg',
      price: 15.99,
      quantity: 30
    },
    {
      name: 'Betty Pearls',
      category: categories[5]._id,
      description:
        'This stunning Vivienne Westwood betty pearls bag is perfect for any stylish woman on-the-go. The bag features magnetic stud buttons for easy and secure closure and comes in carefully selected beads.',
      image: 'betty-pearls.jpg',
      price: 25.99,
      quantity: 40
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Juliette',
    lastName: 'Ngum',
    email: 'juliette@gmail.com',
    password: 'chocolate',
    orders: [
      {
        products: [products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Nick',
    lastName: 'Klaus',
    email: 'mikealson@gmail.com',
    password: 'chocolate'
  });

  console.log('users seeded');

  process.exit();
});
