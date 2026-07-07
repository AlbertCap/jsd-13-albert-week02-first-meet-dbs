//nested field
use("sample_mflix");


//db.theaters.find();
//db.theaters.find({"location.address.state": "AL"});
//db.theaters.find({"location.address.state": "AL"}).count();

/* Example
 {
  _id: ObjectId('59a47286cfa9a3a73e51e72f'),
  theaterId: NumberInt('1004'),
  location: {
    address: {
      street1: '5072 Pinnacle Sq',
      city: 'Birmingham',
      state: 'AL',
      zipcode: '35235'
    },
    geo: {
      type: 'Point',
      coordinates: [
        Double('-86.642662'),
        Double('33.605438')
      ]
    }
  }
}
*/

//db.theaters.find({"location.address.city": "La Quinta"});
//db.theaters.find({"location.address.city": "La Quinta"}).count();

/*  Example
{
  _id: ObjectId('59a47286cfa9a3a73e51e73d'),
  theaterId: NumberInt('1020'),
  location: {
    address: {
      street1: '79220 Hwy 111',
      city: 'La Quinta',
      state: 'CA',
      zipcode: '92253'
    },
    geo: {
      type: 'Point',
      coordinates: [
        Double('-116.28111'),
        Double('33.709164')
      ]
    }
  }
}*/


//Nested Fields Results
//state AL = 19
//City La Quinta = 1