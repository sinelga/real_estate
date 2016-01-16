global.REAL_ESTATE_OBJS = [
  {
    id: 0,
    name: 'Apartment N 1',
    type: 'apartment',   
    actions:{action: [{type:'selling'},{type:'rent'}]},
    images:{image: [{id:0,description:'hole'},{id:1,description:'kitchen'},{id:2,description:'hole'}]},
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
    name: 'Apartment N 2',
    type: 'apartment',
    actions:{action: [{type:'selling'},{type:'rent'}]},  
    images:{image: [{id:0,description:'hole'},{id:1,description:'kitchen'},{id:2,description:'hole'}]},
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
