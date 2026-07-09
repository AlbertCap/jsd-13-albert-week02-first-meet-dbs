use("build-day-week-02-jsd13");

db.users.deleteMany({});

db.users.insertMany([
  {
    _id: ObjectId("650000000000000000000000"),
    name: "สมชาย รักดี",
    email: "somchai.rakdee@example.com",
    address: {
      recipient_name: "สมชาย รักดี",
      line1: "123/1 หมู่บ้านสุขสันต์ ซอยลาดพร้าว 15",
      line2: "ถนนลาดพร้าว แขวงจอมพล",
      district: "จตุจักร",
      province: "กรุงเทพมหานคร",
      postal_code: "10900",
      country: "TH"
    },
    phone_number: "0810000000"
  },
  {
    _id: ObjectId("650000000000000000000001"),
    name: "สมชาย แจ่มใส",
    email: "somchai.j@example.com",
    address: {
      recipient_name: "สมชาย แจ่มใส",
      line1: "45/2 คอนโดเอ บล็อค 1",
      line2: "ถนนพหลโยธิน แขวงสามเสนใน",
      district: "พญาไท",
      province: "กรุงเทพมหานคร",
      postal_code: "10400",
      country: "TH"
    },
    phone_number: "0810000001"
  },
  {
    _id: ObjectId("650000000000000000000002"),
    name: "สมชาย เจริญทรัพย์",
    email: "somchai.c@example.com",
    address: {
      recipient_name: "สมชาย เจริญทรัพย์",
      line1: "88/3 หมู่บ้านสิริ",
      line2: "ถนนบางนา-ตราด แขวงบางนาใต้",
      district: "บางนา",
      province: "กรุงเทพมหานคร",
      postal_code: "10260",
      country: "TH"
    },
    phone_number: "0810000002"
  },
  {
    _id: ObjectId("650000000000000000000003"),
    name: "สมชาย ทองดี",
    email: "somchai.t@example.com",
    address: {
      recipient_name: "สมชาย ทองดี",
      line1: "99/4 ซอยพัฒนาการ 20",
      line2: "ถนนพัฒนาการ แขวงสวนหลวง",
      district: "สวนหลวง",
      province: "กรุงเทพมหานคร",
      postal_code: "10250",
      country: "TH"
    },
    phone_number: "0810000003"
  },
  {
    _id: ObjectId("650000000000000000000004"),
    name: "สมชาย สุขยิ่ง",
    email: "somchai.s@example.com",
    address: {
      recipient_name: "สมชาย สุขยิ่ง",
      line1: "11/5 ซอยเจริญนคร 14",
      line2: "ถนนเจริญนคร แขวงคลองต้นไทร",
      district: "คลองสาน",
      province: "กรุงเทพมหานคร",
      postal_code: "10600",
      country: "TH"
    },
    phone_number: "0810000004"
  },
  {
    _id: ObjectId("650000000000000000000005"),
    name: "สมชาย ใจเย็น",
    email: "somchai.jai@example.com",
    address: {
      recipient_name: "สมชาย ใจเย็น",
      line1: "22/6 ซอยเพชรเกษม 48",
      line2: "ถนนเพชรเกษม แขวงบางหว้า",
      district: "ภาษีเจริญ",
      province: "กรุงเทพมหานคร",
      postal_code: "10160",
      country: "TH"
    },
    phone_number: "0810000005"
  },
  {
    _id: ObjectId("650000000000000000000006"),
    name: "สมชาย รุ่งเรือง",
    email: "somchai.r2@example.com",
    address: {
      recipient_name: "สมชาย รุ่งเรือง",
      line1: "33/7 หมู่ 1 ซอยรามอินทรา 109",
      line2: "ถนนรามอินทรา แขวงคันนายาว",
      district: "คันนายาว",
      province: "กรุงเทพมหานคร",
      postal_code: "10230",
      country: "TH"
    },
    phone_number: "0810000006"
  },
  {
    _id: ObjectId("650000000000000000000007"),
    name: "สมชาย แซ่ลี้",
    email: "somchai.l@example.com",
    address: {
      recipient_name: "สมชาย แซ่ลี้",
      line1: "44/8 ซอยจรัญสนิทวงศ์ 75",
      line2: "ถนนจรัญสนิทวงศ์ แขวงบางพลัด",
      district: "บางพลัด",
      province: "กรุงเทพมหานคร",
      postal_code: "10700",
      country: "TH"
    },
    phone_number: "0810000007"
  },
  {
    _id: ObjectId("650000000000000000000008"),
    name: "สมชาย วิวัฒน์",
    email: "somchai.w@example.com",
    address: {
      recipient_name: "สมชาย วิวัฒน์",
      line1: "55/9 หมู่บ้านพฤกษา",
      line2: "ถนนลาดพร้าว แขวงวังทองหลาง",
      district: "วังทองหลาง",
      province: "กรุงเทพมหานคร",
      postal_code: "10310",
      country: "TH"
    },
    phone_number: "0810000008"
  },
  {
    _id: ObjectId("650000000000000000000009"),
    name: "สมชาย งามวงศ์",
    email: "somchai.n@example.com",
    address: {
      recipient_name: "สมชาย งามวงศ์",
      line1: "66/10 คอนโดทรี ซอยสุขุมวิท 64",
      line2: "ถนนสุขุมวิท แขวงบางจาก",
      district: "พระโขนง",
      province: "กรุงเทพมหานคร",
      postal_code: "10260",
      country: "TH"
    },
    phone_number: "0810000009"
  },
  {
    _id: ObjectId("650000000000000000000010"),
    name: "สมหญิง รักดี",
    email: "somying.rakdee@example.com",
    address: {
      recipient_name: "สมหญิง รักดี",
      line1: "11 ถนนนิมมานเหมินท์",
      line2: "ตำบลสุเทพ",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50200",
      country: "TH"
    },
    phone_number: "0810000010"
  },
  {
    _id: ObjectId("650000000000000000000011"),
    name: "สมหญิง แจ่มใส",
    email: "somying.j@example.com",
    address: {
      recipient_name: "สมหญิง แจ่มใส",
      line1: "22 หมู่ 4 ถนนหางดง",
      line2: "ตำบลหนองควาย",
      district: "หางดง",
      province: "เชียงใหม่",
      postal_code: "50230",
      country: "TH"
    },
    phone_number: "0810000011"
  },
  {
    _id: ObjectId("650000000000000000000012"),
    name: "สมหญิง เจริญทรัพย์",
    email: "somying.c@example.com",
    address: {
      recipient_name: "สมหญิง เจริญทรัพย์",
      line1: "33/3 ถนนเชียงใหม่-ลำพูน",
      line2: "ตำบลหนองผึ้ง",
      district: "สารภี",
      province: "เชียงใหม่",
      postal_code: "50140",
      country: "TH"
    },
    phone_number: "0810000012"
  },
  {
    _id: ObjectId("650000000000000000000013"),
    name: "สมหญิง ทองดี",
    email: "somying.t@example.com",
    address: {
      recipient_name: "สมหญิง ทองดี",
      line1: "44 หมู่ 5 ตำบลแม่ริมใต้",
      line2: "ถนนโชตนา",
      district: "แม่ริม",
      province: "เชียงใหม่",
      postal_code: "50180",
      country: "TH"
    },
    phone_number: "0810000013"
  },
  {
    _id: ObjectId("650000000000000000000014"),
    name: "สมหญิง สุขยิ่ง",
    email: "somying.s@example.com",
    address: {
      recipient_name: "สมหญิง สุขยิ่ง",
      line1: "55/5 ถนนสันกำแพงสายใหม่",
      line2: "ตำบลสันกำแพง",
      district: "สันกำแพง",
      province: "เชียงใหม่",
      postal_code: "50130",
      country: "TH"
    },
    phone_number: "0810000014"
  },
  {
    _id: ObjectId("650000000000000000000015"),
    name: "สมหญิง ใจเย็น",
    email: "somying.jai@example.com",
    address: {
      recipient_name: "สมหญิง ใจเย็น",
      line1: "66 หมู่บ้านลานนา ถนนช้างเผือก",
      line2: "ตำบลช้างเผือก",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50300",
      country: "TH"
    },
    phone_number: "0810000015"
  },
  {
    _id: ObjectId("650000000000000000000016"),
    name: "สมหญิง รุ่งเรือง",
    email: "somying.r@example.com",
    address: {
      recipient_name: "สมหญิง รุ่งเรือง",
      line1: "77 ซอยวัดเกต 1",
      line2: "ถนนเจริญราษฎร์ ตำบลวัดเกต",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50000",
      country: "TH"
    },
    phone_number: "0810000016"
  },
  {
    _id: ObjectId("650000000000000000000017"),
    name: "สมหญิง แซ่ลี้",
    email: "somying.l@example.com",
    address: {
      recipient_name: "สมหญิง แซ่ลี้",
      line1: "88 ถนนวงแหวนรอบกลาง",
      line2: "ตำบลป่าแดด",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50100",
      country: "TH"
    },
    phone_number: "0810000017"
  },
  {
    _id: ObjectId("650000000000000000000018"),
    name: "สมหญิง วิวัฒน์",
    email: "somying.w@example.com",
    address: {
      recipient_name: "สมหญิง วิวัฒน์",
      line1: "99 หมู่ 3 ตำบลแม่เหียะ",
      line2: "ถนนเชียงใหม่-หางดง",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50100",
      country: "TH"
    },
    phone_number: "0810000018"
  },
  {
    _id: ObjectId("650000000000000000000019"),
    name: "สมหญิง งามวงศ์",
    email: "somying.n@example.com",
    address: {
      recipient_name: "สมหญิง งามวงศ์",
      line1: "100/1 ถนนช้างคลาน",
      line2: "ตำบลช้างคลาน",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50100",
      country: "TH"
    },
    phone_number: "0810000019"
  },
  {
    _id: ObjectId("650000000000000000000020"),
    name: "วิไลวรรณ รักดี",
    email: "wilaiwan.r@example.com",
    address: {
      recipient_name: "วิไลวรรณ รักดี",
      line1: "77/77 ซอยงามวงศ์วาน 25",
      line2: "ถนนงามวงศ์วาน ตำบลบางเขน",
      district: "เมืองนนทบุรี",
      province: "นนทบุรี",
      postal_code: "11000",
      country: "TH"
    },
    phone_number: "0810000020"
  },
  {
    _id: ObjectId("650000000000000000000021"),
    name: "วิไลวรรณ แจ่มใส",
    email: "wilaiwan.j@example.com",
    address: {
      recipient_name: "วิไลวรรณ แจ่มใส",
      line1: "88/88 หมู่ 3 ถนนติวานนท์",
      line2: "ตำบลปากเกร็ด",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    phone_number: "0810000021"
  },
  {
    _id: ObjectId("650000000000000000000022"),
    name: "วิไลวรรณ เจริญทรัพย์",
    email: "wilaiwan.c@example.com",
    address: {
      recipient_name: "วิไลวรรณ เจริญทรัพย์",
      line1: "66/66 หมู่บ้านรัตนาธิเบศร์",
      line2: "ถนนรัตนาธิเบศร์ ตำบลบางรักพัฒนา",
      district: "บางบัวทอง",
      province: "นนทบุรี",
      postal_code: "11110",
      country: "TH"
    },
    phone_number: "0810000022"
  },
  {
    _id: ObjectId("650000000000000000000023"),
    name: "วิไลวรรณ ทองดี",
    email: "wilaiwan.t@example.com",
    address: {
      recipient_name: "วิไลวรรณ ทองดี",
      line1: "99/99 หมู่บ้านเพอร์เฟค ถนนราชพฤกษ์",
      line2: "ตำบลบางรักน้อย",
      district: "เมืองนนทบุรี",
      province: "นนทบุรี",
      postal_code: "11000",
      country: "TH"
    },
    phone_number: "0810000023"
  },
  {
    _id: ObjectId("650000000000000000000024"),
    name: "วิไลวรรณ สุขยิ่ง",
    email: "wilaiwan.s@example.com",
    address: {
      recipient_name: "วิไลวรรณ สุขยิ่ง",
      line1: "10/10 หมู่ 5 ถนนนครอินทร์",
      line2: "ตำบลบางขุนกอง",
      district: "บางกรวย",
      province: "นนทบุรี",
      postal_code: "11130",
      country: "TH"
    },
    phone_number: "0810000024"
  },
  {
    _id: ObjectId("650000000000000000000025"),
    name: "วิไลวรรณ ใจเย็น",
    email: "wilaiwan.jai@example.com",
    address: {
      recipient_name: "วิไลวรรณ ใจเย็น",
      line1: "11/11 ซอยเรวดี 15",
      line2: "ถนนเรวดี ตำบลตลาดขวัญ",
      district: "เมืองนนทบุรี",
      province: "นนทบุรี",
      postal_code: "11000",
      country: "TH"
    },
    phone_number: "0810000025"
  },
  {
    _id: ObjectId("650000000000000000000026"),
    name: "วิไลวรรณ รุ่งเรือง",
    email: "wilaiwan.r2@example.com",
    address: {
      recipient_name: "วิไลวรรณ รุ่งเรือง",
      line1: "12/12 หมู่บ้านศุภาลัย ถนนชัยพฤกษ์",
      line2: "ตำบลคลองพระอุดม",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    phone_number: "0810000026"
  },
  {
    _id: ObjectId("650000000000000000000027"),
    name: "วิไลวรรณ แซ่ลี้",
    email: "wilaiwan.l@example.com",
    address: {
      recipient_name: "วิไลวรรณ แซ่ลี้",
      line1: "13/13 ซอยวัดพระเงิน ถนนกาญจนาภิเษก",
      line2: "ตำบลปลายบาง",
      district: "บางกรวย",
      province: "นนทบุรี",
      postal_code: "11130",
      country: "TH"
    },
    phone_number: "0810000027"
  },
  {
    _id: ObjectId("650000000000000000000028"),
    name: "วิไลวรรณ วิวัฒน์",
    email: "wilaiwan.w@example.com",
    address: {
      recipient_name: "วิไลวรรณ วิวัฒน์",
      line1: "14/14 หมู่บ้านพฤกษา ถนนบางกรวย-ไทรน้อย",
      line2: "ตำบลไทรน้อย",
      district: "ไทรน้อย",
      province: "นนทบุรี",
      postal_code: "11150",
      country: "TH"
    },
    phone_number: "0810000028"
  },
  {
    _id: ObjectId("650000000000000000000029"),
    name: "วิไลวรรณ งามวงศ์",
    email: "wilaiwan.n@example.com",
    address: {
      recipient_name: "วิไลวรรณ งามวงศ์",
      line1: "15/15 หมู่ 2 ถนนราชพฤกษ์",
      line2: "ตำบลอ้อมเกร็ด",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    phone_number: "0810000029"
  },
  {
    _id: ObjectId("650000000000000000000030"),
    name: "กิตติพงษ์ รักดี",
    email: "kittipong.r@example.com",
    address: {
      recipient_name: "กิตติพงษ์ รักดี",
      line1: "12/3 ถนนพหลโยธิน คลองหนึ่ง",
      line2: "ตำบลคลองหนึ่ง",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    phone_number: "0810000030"
  },
  {
    _id: ObjectId("650000000000000000000031"),
    name: "กิตติพงษ์ แจ่มใส",
    email: "kittipong.j@example.com",
    address: {
      recipient_name: "กิตติพงษ์ แจ่มใส",
      line1: "34/5 หมู่ 6 ถนนรังสิต-นครนายก",
      line2: "ตำบลบึงยี่โถ",
      district: "ธัญบุรี",
      province: "ปทุมธานี",
      postal_code: "12130",
      country: "TH"
    },
    phone_number: "0810000031"
  },
  {
    _id: ObjectId("650000000000000000000032"),
    name: "กิตติพงษ์ เจริญทรัพย์",
    email: "kittipong.c@example.com",
    address: {
      recipient_name: "กิตติพงษ์ เจริญทรัพย์",
      line1: "56/7 หมู่บ้านพฤกษา 12",
      line2: "ตำบลคลองสาม",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    phone_number: "0810000032"
  },
  {
    _id: ObjectId("650000000000000000000033"),
    name: "กิตติพงษ์ ทองดี",
    email: "kittipong.t@example.com",
    address: {
      recipient_name: "กิตติพงษ์ ทองดี",
      line1: "78/9 ซอยลำลูกกา 11",
      line2: "ตำบลคูคต",
      district: "ลำลูกกา",
      province: "ปทุมธานี",
      postal_code: "12130",
      country: "TH"
    },
    phone_number: "0810000033"
  },
  {
    _id: ObjectId("650000000000000000000034"),
    name: "กิตติพงษ์ สุขยิ่ง",
    email: "kittipong.s@example.com",
    address: {
      recipient_name: "กิตติพงษ์ สุขยิ่ง",
      line1: "90/1 หมู่ 2 ถนนปทุม-สามโคก",
      line2: "ตำบลบางปรอก",
      district: "เมืองปทุมธานี",
      province: "ปทุมธานี",
      postal_code: "12000",
      country: "TH"
    },
    phone_number: "0810000034"
  },
  {
    _id: ObjectId("650000000000000000000035"),
    name: "กิตติพงษ์ ใจเย็น",
    email: "kittipong.jai@example.com",
    address: {
      recipient_name: "กิตติพงษ์ ใจเย็น",
      line1: "11/4 หมู่ 1 ถนนพหลโยธิน",
      line2: "ตำบลประชาธิปัตย์",
      district: "ธัญบุรี",
      province: "ปทุมธานี",
      postal_code: "12130",
      country: "TH"
    },
    phone_number: "0810000035"
  },
  {
    _id: ObjectId("650000000000000000000036"),
    name: "กิตติพงษ์ รุ่งเรือง",
    email: "kittipong.r2@example.com",
    address: {
      recipient_name: "กิตติพงษ์ รุ่งเรือง",
      line1: "22/5 หมู่บ้านลุมพินี ถนนรังสิต-ปทุมธานี",
      line2: "ตำบลบางพูน",
      district: "เมืองปทุมธานี",
      province: "ปทุมธานี",
      postal_code: "12000",
      country: "TH"
    },
    phone_number: "0810000036"
  },
  {
    _id: ObjectId("650000000000000000000037"),
    name: "กิตติพงษ์ แซ่ลี้",
    email: "kittipong.l@example.com",
    address: {
      recipient_name: "กิตติพงษ์ แซ่ลี้",
      line1: "33/6 หมู่ 4 ซอยคลองหลวง 17",
      line2: "ตำบลคลองหนึ่ง",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    phone_number: "0810000037"
  },
  {
    _id: ObjectId("650000000000000000000038"),
    name: "กิตติพงษ์ วิวัฒน์",
    email: "kittipong.w@example.com",
    address: {
      recipient_name: "กิตติพงษ์ วิวัฒน์",
      line1: "44/7 หมู่ 2 ถนนลำลูกกา คลอง 4",
      line2: "ตำบลลาดสวาย",
      district: "ลำลูกกา",
      province: "ปทุมธานี",
      postal_code: "12150",
      country: "TH"
    },
    phone_number: "0810000038"
  },
  {
    _id: ObjectId("650000000000000000000039"),
    name: "กิตติพงษ์ งามวงศ์",
    email: "kittipong.n@example.com",
    address: {
      recipient_name: "กิตติพงษ์ งามวงศ์",
      line1: "55/8 ถนนเลียบคลองสาม",
      line2: "ตำบลคลองสาม",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    phone_number: "0810000039"
  },
  {
    _id: ObjectId("650000000000000000000040"),
    name: "นฤมล รักดี",
    email: "narumon.r@example.com",
    address: {
      recipient_name: "นฤมล รักดี",
      line1: "11/22 ถนนสุขุมวิทพัทยา 54",
      line2: "ตำบลหนองปรือ",
      district: "บางละมุง",
      province: "ชลบุรี",
      postal_code: "20150",
      country: "TH"
    },
    phone_number: "0810000040"
  },
  {
    _id: ObjectId("650000000000000000000041"),
    name: "นฤมล แจ่มใส",
    email: "narumon.j@example.com",
    address: {
      recipient_name: "นฤมล แจ่มใส",
      line1: "33/44 หมู่ 6 ซอยนาเกลือ 12",
      line2: "ตำบลนาเกลือ",
      district: "บางละมุง",
      province: "ชลบุรี",
      postal_code: "20150",
      country: "TH"
    },
    phone_number: "0810000041"
  },
  {
    _id: ObjectId("650000000000000000000042"),
    name: "นฤมล เจริญทรัพย์",
    email: "narumon.c@example.com",
    address: {
      recipient_name: "นฤมล เจริญทรัพย์",
      line1: "55/66 หมู่ 2 ถนนลงหาดบางแสน",
      line2: "ตำบลแสนสุข",
      district: "เมืองชลบุรี",
      province: "ชลบุรี",
      postal_code: "20130",
      country: "TH"
    },
    phone_number: "0810000042"
  },
  {
    _id: ObjectId("650000000000000000000043"),
    name: "นฤมล ทองดี",
    email: "narumon.t@example.com",
    address: {
      recipient_name: "นฤมล ทองดี",
      line1: "77/88 ถนนพระยาสัจจา",
      line2: "ตำบลเสม็ด",
      district: "เมืองชลบุรี",
      province: "ชลบุรี",
      postal_code: "20000",
      country: "TH"
    },
    phone_number: "0810000043"
  },
  {
    _id: ObjectId("650000000000000000000044"),
    name: "นฤมล สุขยิ่ง",
    email: "narumon.s@example.com",
    address: {
      recipient_name: "นฤมล สุขยิ่ง",
      line1: "99/100 หมู่ 1 ถนนเก้ากิโล",
      line2: "ตำบลสุรศักดิ์",
      district: "ศรีราชา",
      province: "ชลบุรี",
      postal_code: "20110",
      country: "TH"
    },
    phone_number: "0810000044"
  },
  {
    _id: ObjectId("650000000000000000000045"),
    name: "นฤมล ใจเย็น",
    email: "narumon.jai@example.com",
    address: {
      recipient_name: "นฤมล ใจเย็น",
      line1: "11/1 ถนนป่าตอง",
      line2: "ตำบลป่าตอง",
      district: "กะทู้",
      province: "ภูเก็ต",
      postal_code: "83150",
      country: "TH"
    },
    phone_number: "0810000045"
  },
  {
    _id: ObjectId("650000000000000000000046"),
    name: "นฤมล รุ่งเรือง",
    email: "narumon.r2@example.com",
    address: {
      recipient_name: "นฤมล รุ่งเรือง",
      line1: "22/22 หมู่ 3 ถนนเทพกระษัตรี",
      line2: "ตำบลรัษฎา",
      district: "เมืองภูเก็ต",
      province: "ภูเก็ต",
      postal_code: "83000",
      country: "TH"
    },
    phone_number: "0810000046"
  },
  {
    _id: ObjectId("650000000000000000000047"),
    name: "นฤมล แซ่ลี้",
    email: "narumon.l@example.com",
    address: {
      recipient_name: "นฤมล แซ่ลี้",
      line1: "33/33 ถนนเจ้าฟ้าตะวันตก",
      line2: "ตำบลฉลอง",
      district: "เมืองภูเก็ต",
      province: "ภูเก็ต",
      postal_code: "83130",
      country: "TH"
    },
    phone_number: "0810000047"
  },
  {
    _id: ObjectId("650000000000000000000048"),
    name: "นฤมล วิวัฒน์",
    email: "narumon.w@example.com",
    address: {
      recipient_name: "นฤมล วิวัฒน์",
      line1: "44/44 หมู่ 5 ถนนวิเศษ",
      line2: "ตำบลราไวย์",
      district: "เมืองภูเก็ต",
      province: "ภูเก็ต",
      postal_code: "83130",
      country: "TH"
    },
    phone_number: "0810000048"
  },
  {
    _id: ObjectId("650000000000000000000049"),
    name: "นฤมล งามวงศ์",
    email: "narumon.n@example.com",
    address: {
      recipient_name: "นฤมล งามวงศ์",
      line1: "55/55 หมู่ 1 ถนนเชิงทะเล",
      line2: "ตำบลเชิงทะเล",
      district: "ถลาง",
      province: "ภูเก็ต",
      postal_code: "83110",
      country: "TH"
    },
    phone_number: "0810000049"
  },
  {
    _id: ObjectId("650000000000000000000050"),
    name: "ประเสริฐ รักดี",
    email: "prasert.r@example.com",
    address: {
      recipient_name: "ประเสริฐ รักดี",
      line1: "11/2 ถนนสุขุมวิท คลองด่าน",
      line2: "ตำบลคลองด่าน",
      district: "บางบ่อ",
      province: "สมุทรปราการ",
      postal_code: "10550",
      country: "TH"
    },
    phone_number: "0810000050"
  },
  {
    _id: ObjectId("650000000000000000000051"),
    name: "ประเสริฐ แจ่มใส",
    email: "prasert.j@example.com",
    address: {
      recipient_name: "ประเสริฐ แจ่มใส",
      line1: "22/3 หมู่ 4 ซอยแบริ่ง 58",
      line2: "ตำบลสำโรงเหนือ",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10270",
      country: "TH"
    },
    phone_number: "0810000051"
  },
  {
    _id: ObjectId("650000000000000000000052"),
    name: "ประเสริฐ เจริญทรัพย์",
    email: "prasert.c@example.com",
    address: {
      recipient_name: "ประเสริฐ เจริญทรัพย์",
      line1: "33/4 หมู่บ้านลัดดาวัลย์ ถนนศรีนครินทร์",
      line2: "ตำบลบางแก้ว",
      district: "บางพลี",
      province: "สมุทรปราการ",
      postal_code: "10540",
      country: "TH"
    },
    phone_number: "0810000052"
  },
  {
    _id: ObjectId("650000000000000000000053"),
    name: "ประเสริฐ ทองดี",
    email: "prasert.t@example.com",
    address: {
      recipient_name: "ประเสริฐ ทองดี",
      line1: "44/5 หมู่ 6 ถนนเทพารักษ์",
      line2: "ตำบลเทพารักษ์",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10270",
      country: "TH"
    },
    phone_number: "0810000053"
  },
  {
    _id: ObjectId("650000000000000000000054"),
    name: "ประเสริฐ สุขยิ่ง",
    email: "prasert.s@example.com",
    address: {
      recipient_name: "ประเสริฐ สุขยิ่ง",
      line1: "55/6 หมู่ 1 ซอยวัดคู่สร้าง",
      line2: "ตำบลในคลองบางปลากด",
      district: "พระสมุทรเจดีย์",
      province: "สมุทรปราการ",
      postal_code: "10290",
      country: "TH"
    },
    phone_number: "0810000054"
  },
  {
    _id: ObjectId("650000000000000000000055"),
    name: "ประเสริฐ ใจเย็น",
    email: "prasert.jai@example.com",
    address: {
      recipient_name: "ประเสริฐ ใจเย็น",
      line1: "66/9 หมู่ 5 ถนนศรีนครินทร์",
      line2: "ตำบลบางเมือง",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10270",
      country: "TH"
    },
    phone_number: "0810000055"
  },
  {
    _id: ObjectId("650000000000000000000056"),
    name: "ประเสริฐ รุ่งเรือง",
    email: "prasert.r2@example.com",
    address: {
      recipient_name: "ประเสริฐ รุ่งเรือง",
      line1: "77/1 ถนนแพรกษา",
      line2: "ตำบลแพรกษา",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10280",
      country: "TH"
    },
    phone_number: "0810000056"
  },
  {
    _id: ObjectId("650000000000000000000057"),
    name: "ประเสริฐ แซ่ลี้",
    email: "prasert.l@example.com",
    address: {
      recipient_name: "ประเสริฐ แซ่ลี้",
      line1: "88/2 หมู่ 1 ซอยวัดสลุด",
      line2: "ตำบลบางพลีใหญ่",
      district: "บางพลี",
      province: "สมุทรปราการ",
      postal_code: "10540",
      country: "TH"
    },
    phone_number: "0810000057"
  },
  {
    _id: ObjectId("650000000000000000000058"),
    name: "ประเสริฐ วิวัฒน์",
    email: "prasert.w@example.com",
    address: {
      recipient_name: "ประเสริฐ วิวัฒน์",
      line1: "99/3 หมู่ 3 ถนนเทพารักษ์ กม. 15",
      line2: "ตำบลบางปลา",
      district: "บางพลี",
      province: "สมุทรปราการ",
      postal_code: "10540",
      country: "TH"
    },
    phone_number: "0810000058"
  },
  {
    _id: ObjectId("650000000000000000000059"),
    name: "ประเสริฐ งามวงศ์",
    email: "prasert.n@example.com",
    address: {
      recipient_name: "ประเสริฐ งามวงศ์",
      line1: "101/4 ซอยปู่เจ้าสมิงพราย",
      line2: "ตำบลสำโรงใต้",
      district: "พระประแดง",
      province: "สมุทรปราการ",
      postal_code: "10130",
      country: "TH"
    },
    phone_number: "0810000059"
  },
  {
    _id: ObjectId("650000000000000000000060"),
    name: "อรทัย รักดี",
    email: "orathai.r@example.com",
    address: {
      recipient_name: "อรทัย รักดี",
      line1: "12/1 หมู่ 2 ถนนศรีจันทร์",
      line2: "ตำบลในเมือง",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    phone_number: "0810000060"
  },
  {
    _id: ObjectId("650000000000000000000061"),
    name: "อรทัย แจ่มใส",
    email: "orathai.j@example.com",
    address: {
      recipient_name: "อรทัย แจ่มใส",
      line1: "34 หมู่ 8 หมู่บ้านศิลา",
      line2: "ตำบลศิลา",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    phone_number: "0810000061"
  },
  {
    _id: ObjectId("650000000000000000000062"),
    name: "อรทัย เจริญทรัพย์",
    email: "orathai.c@example.com",
    address: {
      recipient_name: "อรทัย เจริญทรัพย์",
      line1: "56/7 ซอยมิตรภาพ 4",
      line2: "ถนนมิตรภาพ ตำบลเก่า",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    phone_number: "0810000062"
  },
  {
    _id: ObjectId("650000000000000000000063"),
    name: "อรทัย ทองดี",
    email: "orathai.t@example.com",
    address: {
      recipient_name: "อรทัย ทองดี",
      line1: "78 หมู่ 1 ถนนหน้าเมือง",
      line2: "ตำบลในเมือง",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    phone_number: "0810000063"
  },
  {
    _id: ObjectId("650000000000000000000064"),
    name: "อรทัย สุขยิ่ง",
    email: "orathai.s@example.com",
    address: {
      recipient_name: "อรทัย สุขยิ่ง",
      line1: "90/2 หมู่ 3 ถนนมะลิวัลย์",
      line2: "ตำบลบ้านทุ่ม",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    phone_number: "0810000064"
  },
  {
    _id: ObjectId("650000000000000000000065"),
    name: "อรทัย ใจเย็น",
    email: "orathai.jai@example.com",
    address: {
      recipient_name: "อรทัย ใจเย็น",
      line1: "111 หมู่ 4 ถนนมิตรภาพ",
      line2: "ตำบลจอหอ",
      district: "เมืองนครราชสีมา",
      province: "นครราชสีมา",
      postal_code: "30310",
      country: "TH"
    },
    phone_number: "0810000065"
  },
  {
    _id: ObjectId("650000000000000000000066"),
    name: "อรทัย รุ่งเรือง",
    email: "orathai.r2@example.com",
    address: {
      recipient_name: "อรทัย รุ่งเรือง",
      line1: "222 หมู่ 5 ซอยสุรนารายณ์ 15",
      line2: "ตำบลในเมือง",
      district: "เมืองนครราชสีมา",
      province: "นครราชสีมา",
      postal_code: "30000",
      country: "TH"
    },
    phone_number: "0810000066"
  },
  {
    _id: ObjectId("650000000000000000000067"),
    name: "อรทัย แซ่ลี้",
    email: "orathai.l@example.com",
    address: {
      recipient_name: "อรทัย แซ่ลี้",
      line1: "333 หมู่ 6 ถนนสืบศิริ",
      line2: "ตำบลหนองจะบก",
      district: "เมืองนครราชสีมา",
      province: "นครราชสีมา",
      postal_code: "30000",
      country: "TH"
    },
    phone_number: "0810000067"
  },
  {
    _id: ObjectId("650000000000000000000068"),
    name: "อรทัย วิวัฒน์",
    email: "orathai.w@example.com",
    address: {
      recipient_name: "อรทัย วิวัฒน์",
      line1: "444 หมู่ 1 ถนนสีคิ้ว-ชัยภูมิ",
      line2: "ตำบลสีคิ้ว",
      district: "สีคิ้ว",
      province: "นครราชสีมา",
      postal_code: "30140",
      country: "TH"
    },
    phone_number: "0810000068"
  },
  {
    _id: ObjectId("650000000000000000000069"),
    name: "อรทัย งามวงศ์",
    email: "orathai.n@example.com",
    address: {
      recipient_name: "อรทัย งรทัยวงษ์",
      line1: "555 หมู่ 2 ถนนธนะรัชต์",
      line2: "ตำบลหมูสี",
      district: "ปากช่อง",
      province: "นครราชสีมา",
      postal_code: "30130",
      country: "TH"
    },
    phone_number: "0810000069"
  },
  {
    _id: ObjectId("650000000000000000000070"),
    name: "จักรพันธ์ รักดี",
    email: "jakkapan.r@example.com",
    address: {
      recipient_name: "จักรพันธ์ รักดี",
      line1: "11/2 ถนนเพชรเกษม",
      line2: "ตำบลหาดใหญ่",
      district: "หาดใหญ่",
      province: "สงขลา",
      postal_code: "90110",
      country: "TH"
    },
    phone_number: "0810000070"
  },
  {
    _id: ObjectId("650000000000000000000071"),
    name: "จักรพันธ์ แจ่มใส",
    email: "jakkapan.j@example.com",
    address: {
      recipient_name: "จักรพันธ์ แจ่มใส",
      line1: "22/3 ซอยทุ่งเสา 2",
      line2: "ตำบลหาดใหญ่",
      district: "หาดใหญ่",
      province: "สงขลา",
      postal_code: "90110",
      country: "TH"
    },
    phone_number: "0810000071"
  },
  {
    _id: ObjectId("650000000000000000000072"),
    name: "จักรพันธ์ เจริญทรัพย์",
    email: "jakkapan.c@example.com",
    address: {
      recipient_name: "จักรพันธ์ เจริญทรัพย์",
      line1: "33/4 หมู่ 3 ถนนกาญจนวณิชย์",
      line2: "ตำบลคอหงส์",
      district: "หาดใหญ่",
      province: "สงขลา",
      postal_code: "90110",
      country: "TH"
    },
    phone_number: "0810000072"
  },
  {
    _id: ObjectId("650000000000000000000073"),
    name: "จักรพันธ์ ทองดี",
    email: "jakkapan.t@example.com",
    address: {
      recipient_name: "จักรพันธ์ ทองดี",
      line1: "44/5 หมู่ 1 ถนนสงขลา-นาทวี",
      line2: "ตำบลเขารูปช้าง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    phone_number: "0810000073"
  },
  {
    _id: ObjectId("650000000000000000000074"),
    name: "จักรพันธ์ สุขยิ่ง",
    email: "jakkapan.s@example.com",
    address: {
      recipient_name: "จักรพันธ์ สุขยิ่ง",
      line1: "55/6 ถนนไทรบุรี",
      line2: "ตำบลบ่อยาง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    phone_number: "0810000074"
  },
  {
    _id: ObjectId("650000000000000000000075"),
    name: "จักรพันธ์ ใจเย็น",
    email: "jakkapan.jai@example.com",
    address: {
      recipient_name: "จักรพันธ์ ใจเย็น",
      line1: "12/4 ถนนสุขุมวิท",
      line2: "ตำบลเนินพระ",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21000",
      country: "TH"
    },
    phone_number: "0810000075"
  },
  {
    _id: ObjectId("650000000000000000000076"),
    name: "จักรพันธ์ รุ่งเรือง",
    email: "jakkapan.r2@example.com",
    address: {
      recipient_name: "จักรพันธ์ รุ่งเรือง",
      line1: "34/5 หมู่ 6 ถนนสาย 36",
      line2: "ตำบลทับมา",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21000",
      country: "TH"
    },
    phone_number: "0810000076"
  },
  {
    _id: ObjectId("650000000000000000000077"),
    name: "จักรพันธ์ แซ่ลี้",
    email: "jakkapan.l@example.com",
    address: {
      recipient_name: "จักรพันธ์ แซ่ลี้",
      line1: "56/6 หมู่ 2 ซอยมาบตาพุด 1",
      line2: "ตำบลมาบตาพุด",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21150",
      country: "TH"
    },
    phone_number: "0810000077"
  },
  {
    _id: ObjectId("650000000000000000000078"),
    name: "จักรพันธ์ วิวัฒน์",
    email: "jakkapan.w@example.com",
    address: {
      recipient_name: "จักรพันธ์ วิวัฒน์",
      line1: "78/7 หมู่ 4 ถนนเพ-แกลง",
      line2: "ตำบลแกลง",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21160",
      country: "TH"
    },
    phone_number: "0810000078"
  },
  {
    _id: ObjectId("650000000000000000000079"),
    name: "จักรพันธ์ งามวงศ์",
    email: "jakkapan.n@example.com",
    address: {
      recipient_name: "จักรพันธ์ งามวงศ์",
      line1: "90/8 หมู่ 5 ถนนสุขุมวิท",
      line2: "ตำบลทางเกวียน",
      district: "แกลง",
      province: "ระยอง",
      postal_code: "21110",
      country: "TH"
    },
    phone_number: "0810000079"
  },
  {
    _id: ObjectId("650000000000000000000080"),
    name: "ธิดา รักดี",
    email: "thida.r@example.com",
    address: {
      recipient_name: "ธิดา รักดี",
      line1: "66/6 หมู่ 1 ถนนอุดรดุษฎี",
      line2: "ตำบลหมากแข้ง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    phone_number: "0810000080"
  },
  {
    _id: ObjectId("650000000000000000000081"),
    name: "ธิดา แจ่มใส",
    email: "thida.j@example.com",
    address: {
      recipient_name: "ธิดา แจ่มใส",
      line1: "77/7 ซอยประชาสันติ 1",
      line2: "ตำบลหมากแข้ง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    phone_number: "0810000081"
  },
  {
    _id: ObjectId("650000000000000000000082"),
    name: "ธิดา เจริญทรัพย์",
    email: "thida.c@example.com",
    address: {
      recipient_name: "ธิดา เจริญทรัพย์",
      line1: "88/8 หมู่ 4 ถนนนิตโย",
      line2: "ตำบลหนองบัว",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    phone_number: "0810000082"
  },
  {
    _id: ObjectId("650000000000000000000083"),
    name: "ธิดา ทองดี",
    email: "thida.t@example.com",
    address: {
      recipient_name: "ธิดา ทองดี",
      line1: "99/9 หมู่ 2 ถนนมิตรภาพ",
      line2: "ตำบลโนนสูง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41330",
      country: "TH"
    },
    phone_number: "0810000083"
  },
  {
    _id: ObjectId("650000000000000000000084"),
    name: "ธิดา สุขยิ่ง",
    email: "thida.s@example.com",
    address: {
      recipient_name: "ธิดา สุขยิ่ง",
      line1: "101/1 ถนนอุดร-หนองคาย",
      line2: "ตำบลหมูม่น",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    phone_number: "0810000084"
  },
  {
    _id: ObjectId("650000000000000000000085"),
    name: "ธิดา ใจเย็น",
    email: "thida.jai@example.com",
    address: {
      recipient_name: "ธิดา ใจเย็น",
      line1: "66/7 หมู่ 2 ถนนตลาดใหม่",
      line2: "ตำบลตลาด",
      district: "เมืองสุราษฎร์ธานี",
      province: "สุราษฎร์ธานี",
      postal_code: "84000",
      country: "TH"
    },
    phone_number: "0810000085"
  },
  {
    _id: ObjectId("650000000000000000000086"),
    name: "ธิดา รุ่งเรือง",
    email: "thida.r2@example.com",
    address: {
      recipient_name: "ธิดา รุ่งเรือง",
      line1: "77/8 ซอยชนเกษม 14",
      line2: "ตำบลมะขามเตี้ย",
      district: "เมืองสุราษฎร์ธานี",
      province: "สุราษฎร์ธานี",
      postal_code: "84000",
      country: "TH"
    },
    phone_number: "0810000086"
  },
  {
    _id: ObjectId("650000000000000000000087"),
    name: "ธิดา แซ่ลี้",
    email: "thida.l@example.com",
    address: {
      recipient_name: "ธิดา แซ่ลี้",
      line1: "88/9 หมู่ 4 ถนนศรีวิชัย",
      line2: "ตำบลมะขามเตี้ย",
      district: "เมืองสุราษฎร์ธานี",
      province: "สุราษฎร์ธานี",
      postal_code: "84000",
      country: "TH"
    },
    phone_number: "0810000087"
  },
  {
    _id: ObjectId("650000000000000000000088"),
    name: "ธิดา วิวัฒน์",
    email: "thida.w@example.com",
    address: {
      recipient_name: "ธิดา วิวัฒน์",
      line1: "99/1 หมู่ 3 ถนนพุนพิน-สุราษฎร์",
      line2: "ตำบลท่าข้าม",
      district: "พุนพิน",
      province: "สุราษฎร์ธานี",
      postal_code: "84130",
      country: "TH"
    },
    phone_number: "0810000088"
  },
  {
    _id: ObjectId("650000000000000000000089"),
    name: "ธิดา งามวงศ์",
    email: "thida.n@example.com",
    address: {
      recipient_name: "ธิดา งามวงศ์",
      line1: "10/2 ถนนหน้าทอน",
      line2: "ตำบลอ่างทอง",
      district: "เกาะสมุย",
      province: "สุราษฎร์ธานี",
      postal_code: "84140",
      country: "TH"
    },
    phone_number: "0810000089"
  },
  {
    _id: ObjectId("650000000000000000000090"),
    name: "วีระ รักดี",
    email: "weera.r@example.com",
    address: {
      recipient_name: "วีระ รักดี",
      line1: "11/1 ถนนเพชรเกษม",
      line2: "ตำบลหัวหิน",
      district: "หัวหิน",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77110",
      country: "TH"
    },
    phone_number: "0810000090"
  },
  {
    _id: ObjectId("650000000000000000000091"),
    name: "วีระ แจ่มใส",
    email: "weera.j@example.com",
    address: {
      recipient_name: "วีระ แจ่มใส",
      line1: "22/2 ซอยหัวหิน 94",
      line2: "ตำบลหัวหิน",
      district: "หัวหิน",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77110",
      country: "TH"
    },
    phone_number: "0810000091"
  },
  {
    _id: ObjectId("650000000000000000000092"),
    name: "วีระ เจริญทรัพย์",
    email: "weera.c@example.com",
    address: {
      recipient_name: "วีระ เจริญทรัพย์",
      line1: "33/3 หมู่ 1 ถนนประจวบคีรีขันธ์",
      line2: "ตำบลประจวบ",
      district: "เมืองประจวบคีรีขันธ์",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77000",
      country: "TH"
    },
    phone_number: "0810000092"
  },
  {
    _id: ObjectId("650000000000000000000093"),
    name: "วีระ ทองดี",
    email: "weera.t@example.com",
    address: {
      recipient_name: "วีระ ทองดี",
      line1: "44/4 หมู่ 2 ถนนปราณบุรี",
      line2: "ตำบลปราณบุรี",
      district: "ปราณบุรี",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77120",
      country: "TH"
    },
    phone_number: "0810000093"
  },
  {
    _id: ObjectId("650000000000000000000094"),
    name: "วีระ สุขยิ่ง",
    email: "weera.s@example.com",
    address: {
      recipient_name: "วีระ สุขยิ่ง",
      line1: "55/5 หมู่ 3 ถนนเพชรเกษม",
      line2: "ตำบลทับสะแก",
      district: "ทับสะแก",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77130",
      country: "TH"
    },
    phone_number: "0810000094"
  },
  {
    _id: ObjectId("650000000000000000000095"),
    name: "วีระ ใจเย็น",
    email: "weera.jai@example.com",
    address: {
      recipient_name: "วีระ ใจเย็น",
      line1: "11/3 ถนนอู่ทอง",
      line2: "ตำบลหอรัตนไชย",
      district: "พระนครศรีอยุธยา",
      province: "พระนครศรีอยุธยา",
      postal_code: "13000",
      country: "TH"
    },
    phone_number: "0810000095"
  },
  {
    _id: ObjectId("650000000000000000000096"),
    name: "วีระ รุ่งเรือง",
    email: "weera.r2@example.com",
    address: {
      recipient_name: "วีระ รุ่งเรือง",
      line1: "22/4 หมู่ 2 ถนนโรจนะ",
      line2: "ตำบลไผ่ลิง",
      district: "พระนครศรีอยุธยา",
      province: "พระนครศรีอยุธยา",
      postal_code: "13000",
      country: "TH"
    },
    phone_number: "0810000096"
  },
  {
    _id: ObjectId("650000000000000000000097"),
    name: "วีระ แซ่ลี้",
    email: "weera.l@example.com",
    address: {
      recipient_name: "วีระ แซ่ลี้",
      line1: "33/5 หมู่ 5 ซอยวัดใหญ่ชัยมงคล",
      line2: "ตำบลคลองสวนพลู",
      district: "พระนครศรีอยุธยา",
      province: "พระนครศรีอยุธยา",
      postal_code: "13000",
      country: "TH"
    },
    phone_number: "0810000097"
  },
  {
    _id: ObjectId("650000000000000000000098"),
    name: "วีระ วิวัฒน์",
    email: "weera.w@example.com",
    address: {
      recipient_name: "วีระ วิวัฒน์",
      line1: "44/6 หมู่ 1 ถนนสายเอเชีย",
      line2: "ตำบลคุ้งลาน",
      district: "บางปะอิน",
      province: "พระนครศรีอยุธยา",
      postal_code: "13160",
      country: "TH"
    },
    phone_number: "0810000098"
  },
  {
    _id: ObjectId("650000000000000000000099"),
    name: "วีระ งามวงศ์",
    email: "weera.n@example.com",
    address: {
      recipient_name: "วีระ งามวงศ์",
      line1: "55/7 หมู่ 3 ถนนพหลโยธิน",
      line2: "ตำบลลำตาเสา",
      district: "วังน้อย",
      province: "พระนครศรีอยุธยา",
      postal_code: "13170",
      country: "TH"
    },
    phone_number: "0810000099"
  }
]);

db.users.find({});