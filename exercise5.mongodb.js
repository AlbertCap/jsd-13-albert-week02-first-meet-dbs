//Greater & Less Than
use("sample_mflix");


//db.movies.find().sort( { runtime: -1}).limit(5);

//db.movies.find({ runtime: {$lt: 60}}).sort( { runtime: -1}).limit(5);;

//db.movies.find({ year: 1965}).limit(3); 
//เฉลย db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3)


//db.movies.find({year: {$gte: 1990, $lte: 2000}}).count();
//result = 4139
//เฉลย db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count()

