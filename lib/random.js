let seed = 0;
const seedRandom = function(min=0, max=1) {
    max = max || 1;
    min = min || 0;
 
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280.0;
 
    return min + rnd * (max - min)
 };

 const setSeed = function(seedn=0){
  seed=seedn
 }

exports.setSeed=setSeed
exports.random=seedRandom