db.comments.find({}) ค้นหาข้อมูลทีเดียวหมด 
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5")}) ค้นหาทีละข้อมูล

db.movies.find({ type: "movie", rated: "TV-G" }) หา 2 ข้อมูล
db.movies.find({ type: "movie", rated: "TV-G" }).count() นับจำนวน 2 ข้อมูล

db.theaters.find({"location.address.state": "AL"}); หา Document ซ้อน Document
db.theaters.find({"location.address.state": "AL"}).count(); นับจำนวน Document ซ้อน Document


db.movies.find({ plot: { $regex: "^A convent girl" }}); ใช้ regex ค้นหาคำที่ขึ้นต้นด้วย A convent girl (^ คือขึ้นต้นด้วย) 
db.movies.find({ plot: { $regex: "word", $options: "i"}}); ค้นหาคำ word โดยไม่สนใจตัวพิมพ์ใหญ่หรือเล็ก (i คือ ignore case)
db.movies.find({ plot: { $regex: "^pattern", $options: "i"}}); ค้นหาคำ pattern โดยไม่สนใจตัวพิมพ์ใหญ่หรือเล็ก และต้องขึ้นต้นด้วย pattern
db.movies.find({ plot: { $regex: "pattern.$", $options: "i"}}); ค้นหาคำ pattern โดยไม่สนใจตัวพิมพ์ใหญ่หรือเล็ก และต้องลงท้ายด้วย pattern
db.movies.find({ plot: { $regex: "^pattern.$", $options: "i"}}); ค้นหาคำ pattern โดยไม่สนใจตัวพิมพ์ใหญ่หรือเล็ก และต้องขึ้นต้นด้วย pattern และลงท้ายด้วย pattern



//db.theaters.find({ theaterId: {$gt: 1500}}); Filter มากกว่า
//db.theaters.find({ theaterId: {$lte: 1003}}); Filter น้อยกว่าหรือเท่ากับ
//db.theaters.find({ theaterId: {$eq: 101}}); Filter เท่ากับ
//db.theaters.find({ theaterId: {$gt: 1500}}).limit(5); Filter + Limit ว่าเอาข้อมูลกี่ Document
//db.theaters.find({ theaterId: {$gt: 1500}}).sort( { "location.address.zipcode": 1}) //Sort 1 จะเรียงน้อยไปมากแต่ถ้า -1 มากไปน้อย