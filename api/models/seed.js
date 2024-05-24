const Room = require('./Room')

Room.create([
  // Level 8
  {
    name: 'Room 1',
    floor: '8',
    capacity: 18,
    price: 100,
    assets: {
      pcLab: true
    }
  },
  {
    name: 'Room 2',
    floor: '8',
    capacity: 18,
    price: 110,
    assets: {
      projector: true
    }
  },
  {
    name: 'Room 3',
    floor: '8',
    capacity: 18,
    price: 120,
    assets: {
      projector: true,
      opWalls: true
    }
  },
  {
    name: 'Room 4',
    floor: '8',
    capacity: 24,
    price: 130
  },
  {
    name: 'Room 5',
    floor: '8',
    capacity: 18,
    price: 140,
    assets: {
      opWalls: true
    }
  },
  // Level 13
  {
    name: 'Room 1',
    floor: '13',
    capacity: 20,
    price: 100,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'Room 2',
    floor: '13',
    capacity: 20,
    price: 110,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'Room 3',
    floor: '13',
    capacity: 20,
    price: 120,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'Room 4',
    floor: '13',
    capacity: 20,
    price: 130,
    assets: {
      projector: true,
      opWalls: true
    }
  },
  {
    name: 'Room 5',
    floor: '13',
    capacity: 20,
    price: 140,
    assets: {
      projector: true
    }
  }
])
  .then((rooms) => {
    console.log(`Created ${rooms.length} rooms.`)
  })
  .catch((error) => {
    console.error(error)
  })