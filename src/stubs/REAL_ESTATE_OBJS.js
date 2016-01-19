global.REAL_ESTATE_OBJS = [
  {
    id: 0,
    name: 'Apartment',
    type: 'apartment',
    city: 'Espoo',
    country: 'Finland',
    total_area: 81.5, 
    actions:{action: [{type:'selling',price: 200000,images:{image: [{id:0,description:'hole'},{id:1,description:'kitchen'},{id:2,description:'hole'},{id:3,description:'hole'},{id:4,description:'kitchen'},{id:5,description:'kitchen'},{id:6,description:'bathroom'},{id:7,description:'WC'},{id:8,description:'entrance'},{id:9,description:'entrance'}]}},{type:'rent',price: 1000,images:{image: [{id:0,description:'hole'},{id:1,description:'kitchen'},{id:2,description:'hole'},{id:3,description:'hole'},{id:4,description:'kitchen'},{id:5,description:'kitchen'},{id:6,description:'bathroom'},{id:7,description:'WC'},{id:8,description:'entrance'},{id:9,description:'entrance'}]}}]},  
    announcements: [
      {
        id: 0,
        title: 'No class tomorrow',
        body: 'There is no class tomorrow, please do not show up'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'Build a router',
        body: 'It will be easy, seriously, like 2 hours, 100 lines of code, no biggie',
        grade: 'N/A'
      }
    ]

  },

  {
    id: 1,
    name: 'Apartment',
    type: 'apartment',
    city: 'Saint Petersburg',
    country: 'Russia',
    total_area: 56, 
    actions:{action: [{type:'selling',price: 150000,images:{image: [{id:0,description:'hole'},{id:1,description:'kitchen'},{id:2,description:'hole'}]}},{type:'rent',price: 800,images:{image: [{id:0,description:'hole'},{id:1,description:'kitchen'},{id:2,description:'hole'}]}}]},      
    announcements: [
      {
        id: 0,
        title: 'Final exam next wednesday',
        body: 'You had better prepare'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'PropTypes',
        body: 'They aren\'t for you.',
        grade: '80%'
      },
      {
        id: 1,
        title: 'Iterating and Cloning Children',
        body: 'You can totally do it.',
        grade: '95%'
      }
    ]
  }
]
