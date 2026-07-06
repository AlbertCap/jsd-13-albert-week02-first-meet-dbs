db.movies.find({ type: "movie", rated: "TV-G" }) หา 2 ขข้อมูล

db.movies.find({ type: "movie", rated: "TV-G" }).count นับจำนวน 2 ข้อมูล


db.comments.find({}) ค้นหาข้อมูลทีเดียวหมด 


db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5")}) ค้นหาทีละข้อมูล
