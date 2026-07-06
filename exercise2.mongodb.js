use("sample_mflix");

//db.movies.find({ type: 'movie', rated: 'TV-G'});
db.movies.find({ type: 'movie', rated: 'TV-G'}).count();