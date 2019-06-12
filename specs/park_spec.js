const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
  park = new Park('jurassicPark', 20, [])
  dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
  dinosaur2 = new Dinosaur('baryonyx', 'herbivore', 40)
});

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'jurassicPark');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

    it('should have a collection of dinosaurs', function(){
      const actual = park.collectionOfDinosaurs;
      assert.deepStrictEqual(actual, [])
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.add(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.add('t-rex');
    park.add('baryonyx');
    park.remove('baryonyx');
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['baryonyx'])
  });


//   it('should be able to find the dinosaur that attracts the most visitors', function(){
//     park.add(trex1)
//     const actual = park.mostPopularDinosaur
//     assert.strictEqual(actual, t-rex)
//   });
//
//   it('should be able to find all dinosaurs of a particular species');
// , function(){
// 
}


  it('should be able to remove all dinosaurs of a particular species');

});
