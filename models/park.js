const Park = function (name, ticketPrice, collectionOfDinosaurs, addDinosaur){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
  this.addDinosaur = addDinosaur

}
Park.prototype.add = function(dinosaur) {
   this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.remove = function(dinosaur) {
  const dinoToRemove = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(dinoToRemove, 1);
};

// park.prototype.findMostAttractiveDinosaur = function (){
//   let mostPopDino = this.dinosaurs[0]
//   for(let dinosaur of this.dinosaurs) {
//     if (dinosaur.guestAttractedPerDay >
//     mostPopDino.guestAttractedPerDay){
//       mostPopDino = dinosaur
//     }
//   }
//   return mostPopDino
//   }
//   park.prototype.findBySpecies = function (species) {
//     const dinos = []
//     for (const dinosaur of this.dinosaurs){
//       if(dinosaur.species === species){
//         dinos.push(dinosaur)
//       }
//       return dinos
//     }
//     Park.prototype.calculateAverageVisitorsPerDay = function (){
//       let visitors (){
//         for (const dinosaur of this.dinosaurs){
//           visitors += dinosaur.guestAttractedPerDay
//         }
// return visitors;
//     }
//     Park.
//   }
// }

module.exports = Park;
