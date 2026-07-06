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