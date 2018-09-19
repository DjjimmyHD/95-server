
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('g90_students').del()
    .then(function () {
      // Inserts seed entries
      return knex('g90_students').insert([
        {
          firstName: 'R.J.',
          lastName: 'Kirkhope',
          photo: 'https://cf.ltkcdn.net/small-pets/images/orig/200801-2121x1414-goldfish2.jpg',
          hometownLat: '32.715738',
          hometownLong: '-117.161084',
          prevOccupation: 'Stuntman',
          block_id: 1
        },
        {
          firstName: 'Josh',
          lastName: 'Bardlsey',
          photo: 'http://www.yourpurebredpuppy.com/dogbreeds/photos-RS/sheltiesf2.jpg',
          hometownLat: '39.548079',
          hometownLong: '-104.973933',
          prevOccupation: 'Valet',
          block_id: 1
        },
        {
          firstName: 'Mark',
          lastName: 'Newcomb',
          photo: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12194915/French-Bulldog-on-White-14.jpg',
          hometownLat: '38.879178',
          hometownLong: '-99.326770',
          prevOccupation: 'Developer',
          block_id: 1
        },
        {
          firstName: 'Matthew',
          lastName: 'Riach',
          photo: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-19.jpg',
          hometownLat: '53.408371',
          hometownLong: '-2.991573',
          prevOccupation: 'Road map salesman',
          block_id: 1
        },
        {
          firstName: 'Levi',
          lastName: 'Boenish',
          photo: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-4.jpg',
          hometownLat: '40.014986',
          hometownLong: '-105.270546',
          prevOccupation: 'Manager',
          block_id: 1
        },
        {
          firstName: 'Tom',
          lastName: 'Clukies',
          photo: 'https://i.ytimg.com/vi/dwO06H-IF80/hqdefault.jpg',
          hometownLat: '39.548079',
          hometownLong: '-104.973933',
          prevOccupation: 'Outdoorsman',
          block_id: 1
        },
        {
          firstName: 'William',
          lastName: 'Kirkhope',
          photo: 'https://i.pinimg.com/736x/21/25/c0/2125c0d98eb7b290e5903355ac0f8e6b--christmas-trees-christmas-cats.jpg',
          hometownLat: '32.715738',
          hometownLong: '-117.161084',
          prevOccupation: 'Personal Trainer',
          block_id: 1
        },
        {
          firstName: 'Josh',
          lastName: 'Levy',
          photo: 'https://westiegifts.com/11472-large_default/bandana-westie-greetings-card.jpg',
          hometownLat: '-26.204103',
          hometownLong: '28.047305',
          prevOccupation: 'Lesser Developer',
          block_id: 1
        },
        {
          firstName: 'Ben',
          lastName: 'Austin',
          photo: 'http://www.sheepadoodles.org/uploads/8/2/1/7/82172392/3675770.jpg?603',
          hometownLat: '39.739236',
          hometownLong: '-104.990251',
          prevOccupation: 'Social Work',
          block_id: 1
        },
        {
          firstName: 'Natalie',
          lastName: 'Todd',
          photo: 'https://laughingsquid.com/wp-content/uploads/2016/01/cat-banana.png',
          hometownLat: '61.218056',
          hometownLong: '-149.900278',
          prevOccupation: 'Technical Recruiter',
          block_id: 1
        },
        {
          firstName: 'Eldon',
          lastName: 'Dahlin',
          photo: 'http://www.dogwallpapers.net/wallpapers/cute-rottweiler-dog-photo.jpg',
          hometownLat: '37.404094',
          hometownLong: '-120.850474',
          prevOccupation: 'Customer Service Rep',
          block_id: 1
        },
        {
          firstName: 'Tiffany',
          lastName: 'Ricks',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj4X16RkoIqAFunD36VIldA-y8qr3GH13oe7i_Ao88zE6R_u3Aw',
          hometownLat: '33.4942',
          hometownLong: '111.9261',
          prevOccupation: 'CNA',
          block_id: 1
        },
        {
          firstName: 'George',
          lastName: 'Chios',
          photo: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224425/Shiba-Inu-Care.jpg',
          hometownLat: '39.522455',
          hometownLong: '-76.444740',
          prevOccupation: 'Audio Engineer',
          block_id: 1
        },
        {
          firstName: 'Danny',
          lastName: 'Pifer',
          photo: 'https://i.kym-cdn.com/photos/images/original/000/823/256/8f5.jpg',
          hometownLat: '37.7749',
          hometownLong: '122.4194',
          prevOccupation: 'QA Tester',
          block_id: 1
        },
        {
          firstName: 'Kimberly',
          lastName: 'Hermosillo',
          photo: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-22.jpg',
          hometownLat: '39.739236',
          hometownLong: '-104.990251',
          prevOccupation: 'Student',
          block_id: 1
        },
        {
          firstName: 'Austin',
          lastName: 'Loveless',
          photo: 'https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg',
          hometownLat: '30.367420',
          hometownLong: '-89.092816',
          prevOccupation: 'Navy',
          block_id: 1
        },
        {
          firstName: 'Jeff',
          lastName: 'Strunk',
          photo: 'https://i.pinimg.com/originals/fc/ea/9a/fcea9a5369ebbdca95dca1c0aa1e1a51.jpg',
          hometownLat: '39.122562',
          hometownLong: '-84.135768',
          prevOccupation: 'Financial Consultant',
          block_id: 1
        },
        {
          firstName: 'Ciaran',
          lastName: 'Guha-Gilford',
          photo: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-5.jpg',
          hometownLat: '38.9876',
          hometownLong: '76.8205',
          prevOccupation: 'Lab Rat',
          block_id: 1
        },
        {
          firstName: 'Michael',
          lastName: 'Coons',
          photo: 'https://i.huffpost.com/gen/3754046/original.jpg',
          hometownLat: '41.079273',
          hometownLong: '85.139351',
          prevOccupation: 'Director of Information Technology',
          block_id: 1
        },
        {
          firstName: 'Josh',
          lastName: 'Robbs',
          photo: 'https://images.pexels.com/photos/137049/pexels-photo-137049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
          hometownLat: '37.122366',
          hometownLong: '-76.345777',
          prevOccupation: 'Editorial Assistant',
          block_id: 1
        },
        {
          firstName: 'Belinda',
          lastName: 'Galiano',
          photo: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-14.jpg',
          hometownLat: '8.569824',
          hometownLong: '-71.180499',
          prevOccupation: 'Classical Pianist',
          block_id: 1
        },
        {
          firstName: 'Thomas',
          lastName: 'Lee',
          photo: 'https://i.ytimg.com/vi/OqQPv78AMw0/maxresdefault.jpg',
          hometownLat: '38.878487',
          hometownLong: '-104.869766',
          prevOccupation: 'Manager of Strange People',
          block_id: 1
        },
        {
          firstName: 'Ryan',
          lastName: 'McCrory',
          photo: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-1.jpg',
          hometownLat: '39.739236',
          hometownLong: '-104.990251',
          prevOccupation: 'US Army',
          block_id: 1
        },
        {
          firstName: 'Matthew',
          lastName: 'Huston',
          photo: 'https://buzzsharer.com/wp-content/uploads/2015/11/cute-bengal-cat-lying1.jpg',
          hometownLat: '39.613319',
          hometownLong: '-105.016647',
          prevOccupation: 'Valet',
          block_id: 1
        }
      ])
    })
};
