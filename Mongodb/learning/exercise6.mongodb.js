use("sample_mflix");

//db.movies.find({released: { $gte:ISODate("1950-01-01T00:00:00Z"), $lt:ISODate("1971-01-01T00:00:00Z")}, countries: "USA"}).sort({released: 1});
/*เฉลย db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})
 */


//db.movies.find({genres: { $in: ["Drama","History"]}, released: { $gte: ISODate("1970-01-01T00:00:00Z")}}).sort({released: 1}).count();
//result = 11164
/*เฉลย
db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count()
*/


//db.movies.find({cast: "Roy L. McCardell"}).count();
//result = 1

//db.movies.find({directors: "Hal Roach"}).count();
//result = 3

//db.movies.find({directors: "Hal Roach"}).sort({released: -1}).limit(1);
/* {
  _id: ObjectId('573a1391f29313caabcd71f5'),
  plot: 'A young man, unaccustomed to children, must accompany a young girl on a train trip.',
  genres: [
    'Comedy',
    'Short'
  ],
  runtime: NumberInt('35'),
  rated: 'PASSED',
  cast: [
    'Harold Lloyd',
    'Mildred Davis',
    'Anna Mae Bilson'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BYjgzYzY1NjEtYWQxZS00ZjA4LWJlYmQtYzRjNTg3NjUwNDRlXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
  title: 'Now or Never',
  fullplot: 'Mary is looking after a young child whose parents have little time for her. So, when Mary travels home to meet her childhood sweetheart, she takes the child with her. Meanwhile, her boyfriend has a mishap on the road, and is tricked out of his money by a tramp. When the tramp then hitches a ride on a train, the boyfriend does so as well. At the station, he meets Mary and the child, and they plan to re-board the train together. But difficulties arise when Mary sees her boss boarding the same train - and there is also the problem that her boyfriend doesn\'t have a ticket.',
  languages: [
    'English'
  ],
  released: ISODate('1921-03-27T00:00:00.000Z'),
  directors: [
    'Fred C. Newmeyer',
    'Hal Roach'
  ],
  writers: [
    'H.M. Walker (titles)',
    'Sam Taylor (scenario)'
  ],
  awards: {
    wins: NumberInt('0'),
    nominations: NumberInt('1'),
    text: '1 nomination.'
  },
  lastupdated: '2015-06-25 00:02:16.613000000',
  year: NumberInt('1921'),
  imdb: {
    rating: Double('6.8'),
    votes: NumberInt('489'),
    id: NumberInt('12512')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('3.8'),
      numReviews: NumberInt('3')
    },
    lastUpdated: ISODate('2015-07-16T17:59:55.000Z')
  },
  num_mflix_comments: NumberInt('0')
}*/
/*เฉลย db.movies.find({ directors: { $in: ["Hal Roach"] } }); */

//db.movies.find({"awards.wins": {$gt: 2}, directors: "Hal Roach"});
//result = 0
/*เฉลย*

db.movies.find(
{ 
directors: { $in: ["Hal Roach"] } 
}, 
{
title: 1, 
"awards.wins": 1, 
_id: 0 
}
);
*/