use("build-day-week-02-jsd13");

db.orders.deleteMany({});

db.orders.insertMany([
  {
    _id: ObjectId("660000000000000000000000"),
    user_id: ObjectId("650000000000000000000078"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000075"),
        name: "นิทานภาพเชิงโต้ตอบ: มดงานผู้ขยันขันแข็ง",
        price: 135,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000039"),
        name: "เกมจำลองเศรษฐกิจชุมชน",
        price: 710,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000055"),
        name: "วิดีโอสอน: แยกแยะความจำเป็นและความต้องการ",
        price: 250,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ วิวัฒน์",
      line1: "78/7 หมู่ 4 ถนนเพ-แกลง",
      line2: "ตำบลแกลง",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21160",
      country: "TH"
    },
    total_price: 1865,
    status: "paid",
    created_at: new Date("2026-05-15T08:12:01.706Z")
  },
  {
    _id: ObjectId("660000000000000000000001"),
    user_id: ObjectId("650000000000000000000046"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000032"),
        name: "บอร์ดเกมหยอดกระปุกหมูทองคำ",
        price: 450,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล รุ่งเรือง",
      line1: "22/22 หมู่ 3 ถนนเทพกระษัตรี",
      line2: "ตำบลรัษฎา",
      district: "เมืองภูเก็ต",
      province: "ภูเก็ต",
      postal_code: "83000",
      country: "TH"
    },
    total_price: 1690,
    status: "completed",
    created_at: new Date("2026-06-13T06:24:53.933Z")
  },
  {
    _id: ObjectId("660000000000000000000002"),
    user_id: ObjectId("650000000000000000000074"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000066"),
        name: "นิทานภาพ: ค่าขนมของช้างน้อย",
        price: 105,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ สุขยิ่ง",
      line1: "55/6 ถนนไทรบุรี",
      line2: "ตำบลบ่อยาง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    total_price: 210,
    status: "pending",
    created_at: new Date("2026-03-26T16:12:31.814Z")
  },
  {
    _id: ObjectId("660000000000000000000003"),
    user_id: ObjectId("650000000000000000000044"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000072"),
        name: "นิทานภาพ: กระรอกน้อยเตรียมเสบียงฤดูหนาว",
        price: 125,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000015"),
        name: "บอร์ดเกมภารกิจพิชิตหนี้",
        price: 650,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000034"),
        name: "บอร์ดเกมรายได้หลายทาง",
        price: 660,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล สุขยิ่ง",
      line1: "99/100 หมู่ 1 ถนนเก้ากิโล",
      line2: "ตำบลสุรศักดิ์",
      district: "ศรีราชา",
      province: "ชลบุรี",
      postal_code: "20110",
      country: "TH"
    },
    total_price: 2735,
    status: "shipped",
    created_at: new Date("2026-02-17T23:19:29.801Z")
  },
  {
    _id: ObjectId("660000000000000000000004"),
    user_id: ObjectId("650000000000000000000065"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000031"),
        name: "บอร์ดเกมกองทุนสัตว์เลี้ยง",
        price: 680,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย ใจเย็น",
      line1: "111 หมู่ 4 ถนนมิตรภาพ",
      line2: "ตำบลจอหอ",
      district: "เมืองนครราชสีมา",
      province: "นครราชสีมา",
      postal_code: "30310",
      country: "TH"
    },
    total_price: 680,
    status: "completed",
    created_at: new Date("2026-04-29T06:25:31.022Z")
  },
  {
    _id: ObjectId("660000000000000000000005"),
    user_id: ObjectId("650000000000000000000042"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000081"),
        name: "วิดีโอสอน: การแบ่งเงิน 3 กระปุก",
        price: 175,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000005"),
        name: "บอร์ดเกมบริหารร้านขนมหวาน",
        price: 620,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล เจริญทรัพย์",
      line1: "55/66 หมู่ 2 ถนนลงหาดบางแสน",
      line2: "ตำบลแสนสุข",
      district: "เมืองชลบุรี",
      province: "ชลบุรี",
      postal_code: "20130",
      country: "TH"
    },
    total_price: 2385,
    status: "pending",
    created_at: new Date("2026-02-17T09:59:23.529Z")
  },
  {
    _id: ObjectId("660000000000000000000006"),
    user_id: ObjectId("650000000000000000000039"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000009"),
        name: "เกมจำลองสหกรณ์โรงเรียน",
        price: 680,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000080"),
        name: "นิทานภาพเชิงโต้ตอบ: หุ่นยนต์บริหารเงิน",
        price: 160,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ งามวงศ์",
      line1: "55/8 ถนนเลียบคลองสาม",
      line2: "ตำบลคลองสาม",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 1680,
    status: "shipped",
    created_at: new Date("2026-03-03T17:47:48.065Z")
  },
  {
    _id: ObjectId("660000000000000000000007"),
    user_id: ObjectId("650000000000000000000093"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000090"),
        name: "นิทานภาพเชิงโต้ตอบ: เจ้าหญิงผู้สร้างแบรนด์",
        price: 150,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000060"),
        name: "อีบุ๊ก: นิทานการเงินก่อนนอน",
        price: 130,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000067"),
        name: "อีบุ๊ก: สอนลูกลงทุนผ่านนิทาน",
        price: 135,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000081"),
        name: "วิดีโอสอน: การแบ่งเงิน 3 กระปุก",
        price: 175,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วีระ ทองดี",
      line1: "44/4 หมู่ 2 ถนนปราณบุรี",
      line2: "ตำบลปราณบุรี",
      district: "ปราณบุรี",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77120",
      country: "TH"
    },
    total_price: 1490,
    status: "paid",
    created_at: new Date("2026-05-17T15:43:58.489Z")
  },
  {
    _id: ObjectId("660000000000000000000008"),
    user_id: ObjectId("650000000000000000000079"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000018"),
        name: "เกมกระดานออมวันละนิด",
        price: 400,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ งามวงศ์",
      line1: "90/8 หมู่ 5 ถนนสุขุมวิท",
      line2: "ตำบลทางเกวียน",
      district: "แกลง",
      province: "ระยอง",
      postal_code: "21110",
      country: "TH"
    },
    total_price: 1200,
    status: "completed",
    created_at: new Date("2026-02-28T22:28:14.180Z")
  },
  {
    _id: ObjectId("660000000000000000000009"),
    user_id: ObjectId("650000000000000000000032"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000082"),
        name: "นิทานภาพ: มนุษย์ต่างดาวเรียนรู้การใช้เงิน",
        price: 120,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000014"),
        name: "บอร์ดเกมโรงงานผลิตเงิน",
        price: 580,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000039"),
        name: "เกมจำลองเศรษฐกิจชุมชน",
        price: 710,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000071"),
        name: "วิดีโอสอน: เคล็ดลับเก็บเงินซื้อของเล่น",
        price: 185,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ เจริญทรัพย์",
      line1: "56/7 หมู่บ้านพฤกษา 12",
      line2: "ตำบลคลองสาม",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 4600,
    status: "completed",
    created_at: new Date("2026-04-04T20:53:42.992Z")
  },
  {
    _id: ObjectId("66000000000000000000000a"),
    user_id: ObjectId("650000000000000000000027"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000025"),
        name: "บอร์ดเกมแบ่งปันและลงทุน",
        price: 550,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000084"),
        name: "วิดีโอสอน: หาเงินด้วยตัวเองวัยเด็ก",
        price: 200,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000026"),
        name: "การ์ดเกมช้อปปิ้งอย่างชาญฉลาด",
        price: 310,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000078"),
        name: "วิดีโอสอน: ดอกเบี้ยคือเวทมนตร์",
        price: 230,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ แซ่ลี้",
      line1: "13/13 ซอยวัดพระเงิน ถนนกาญจนาภิเษก",
      line2: "ตำบลปลายบาง",
      district: "บางกรวย",
      province: "นนทบุรี",
      postal_code: "11130",
      country: "TH"
    },
    total_price: 2620,
    status: "completed",
    created_at: new Date("2026-02-08T06:48:57.059Z")
  },
  {
    _id: ObjectId("66000000000000000000000b"),
    user_id: ObjectId("650000000000000000000014"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000015"),
        name: "บอร์ดเกมภารกิจพิชิตหนี้",
        price: 650,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000086"),
        name: "นิทานภาพ: นกฮูกสอนนับเงิน",
        price: 99,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000016"),
        name: "การ์ดเกมสอนลูกรู้จักเงิน",
        price: 380,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง สุขยิ่ง",
      line1: "55/5 ถนนสันกำแพงสายใหม่",
      line2: "ตำบลสันกำแพง",
      district: "สันกำแพง",
      province: "เชียงใหม่",
      postal_code: "50130",
      country: "TH"
    },
    total_price: 3387,
    status: "paid",
    created_at: new Date("2026-02-16T10:40:40.283Z")
  },
  {
    _id: ObjectId("66000000000000000000000c"),
    user_id: ObjectId("650000000000000000000069"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000071"),
        name: "วิดีโอสอน: เคล็ดลับเก็บเงินซื้อของเล่น",
        price: 185,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000057"),
        name: "นิทานภาพ: หมีน้อยผู้ไม่เคยเก็บเงิน",
        price: 110,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000093"),
        name: "อีบุ๊ก: บทเรียนการเงินจากคุณปู่",
        price: 125,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย งรทัยวงษ์",
      line1: "555 หมู่ 2 ถนนธนะรัชต์",
      line2: "ตำบลหมูสี",
      district: "ปากช่อง",
      province: "นครราชสีมา",
      postal_code: "30130",
      country: "TH"
    },
    total_price: 715,
    status: "paid",
    created_at: new Date("2026-01-15T17:49:39.634Z")
  },
  {
    _id: ObjectId("66000000000000000000000d"),
    user_id: ObjectId("650000000000000000000032"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000003"),
        name: "เกมกระดานพ่อค้าตัวจิ๋ว",
        price: 490,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ เจริญทรัพย์",
      line1: "56/7 หมู่บ้านพฤกษา 12",
      line2: "ตำบลคลองสาม",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 490,
    status: "pending",
    created_at: new Date("2026-02-25T09:09:27.723Z")
  },
  {
    _id: ObjectId("66000000000000000000000e"),
    user_id: ObjectId("650000000000000000000074"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000069"),
        name: "นิทานภาพ: การผจญภัยของเหรียญสิบบาท",
        price: 95,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000036"),
        name: "การ์ดเกมจับฉลากการเงิน",
        price: 320,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000034"),
        name: "บอร์ดเกมรายได้หลายทาง",
        price: 660,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000088"),
        name: "วิดีโอสอน: การบริจาคและการแบ่งปัน",
        price: 180,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ สุขยิ่ง",
      line1: "55/6 ถนนไทรบุรี",
      line2: "ตำบลบ่อยาง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    total_price: 3255,
    status: "pending",
    created_at: new Date("2026-01-14T08:09:00.019Z")
  },
  {
    _id: ObjectId("66000000000000000000000f"),
    user_id: ObjectId("650000000000000000000091"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000096"),
        name: "นิทานภาพ: หมีขาวกับสหกรณ์ขั้วโลก",
        price: 130,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000047"),
        name: "บอร์ดเกมสมุดบัญชีวิเศษ",
        price: 500,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วีระ แจ่มใส",
      line1: "22/2 ซอยหัวหิน 94",
      line2: "ตำบลหัวหิน",
      district: "หัวหิน",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77110",
      country: "TH"
    },
    total_price: 3130,
    status: "shipped",
    created_at: new Date("2026-01-27T04:59:03.588Z")
  },
  {
    _id: ObjectId("660000000000000000000010"),
    user_id: ObjectId("650000000000000000000087"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000008"),
        name: "บอร์ดเกมครอบครัวนักลงทุน",
        price: 800,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000085"),
        name: "นิทานภาพเชิงโต้ตอบ: ค่ายฤดูร้อนนักธุรกิจจิ๋ว",
        price: 165,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา แซ่ลี้",
      line1: "88/9 หมู่ 4 ถนนศรีวิชัย",
      line2: "ตำบลมะขามเตี้ย",
      district: "เมืองสุราษฎร์ธานี",
      province: "สุราษฎร์ธานี",
      postal_code: "84000",
      country: "TH"
    },
    total_price: 1130,
    status: "shipped",
    created_at: new Date("2026-06-07T16:01:38.564Z")
  },
  {
    _id: ObjectId("660000000000000000000011"),
    user_id: ObjectId("650000000000000000000067"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000072"),
        name: "นิทานภาพ: กระรอกน้อยเตรียมเสบียงฤดูหนาว",
        price: 125,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000089"),
        name: "นิทานภาพ: ต้นไม้เงินทองของลิงน้อย",
        price: 115,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย แซ่ลี้",
      line1: "333 หมู่ 6 ถนนสืบศิริ",
      line2: "ตำบลหนองจะบก",
      district: "เมืองนครราชสีมา",
      province: "นครราชสีมา",
      postal_code: "30000",
      country: "TH"
    },
    total_price: 470,
    status: "completed",
    created_at: new Date("2026-02-25T20:55:11.449Z")
  },
  {
    _id: ObjectId("660000000000000000000012"),
    user_id: ObjectId("650000000000000000000043"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000007"),
        name: "เกมกระดานวางแผนการเรียนและการออม",
        price: 550,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000014"),
        name: "บอร์ดเกมโรงงานผลิตเงิน",
        price: 580,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล ทองดี",
      line1: "77/88 ถนนพระยาสัจจา",
      line2: "ตำบลเสม็ด",
      district: "เมืองชลบุรี",
      province: "ชลบุรี",
      postal_code: "20000",
      country: "TH"
    },
    total_price: 5760,
    status: "pending",
    created_at: new Date("2026-06-24T21:14:56.990Z")
  },
  {
    _id: ObjectId("660000000000000000000013"),
    user_id: ObjectId("650000000000000000000098"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000041"),
        name: "บอร์ดเกมครอบครัวมีตังค์",
        price: 600,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000036"),
        name: "การ์ดเกมจับฉลากการเงิน",
        price: 320,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "วีระ วิวัฒน์",
      line1: "44/6 หมู่ 1 ถนนสายเอเชีย",
      line2: "ตำบลคุ้งลาน",
      district: "บางปะอิน",
      province: "พระนครศรีอยุธยา",
      postal_code: "13160",
      country: "TH"
    },
    total_price: 1240,
    status: "pending",
    created_at: new Date("2026-05-16T02:34:37.825Z")
  },
  {
    _id: ObjectId("660000000000000000000014"),
    user_id: ObjectId("650000000000000000000021"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000065"),
        name: "นิทานภาพเชิงโต้ตอบ: มังกรผู้พิทักษ์ขุมทรัพย์",
        price: 145,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ แจ่มใส",
      line1: "88/88 หมู่ 3 ถนนติวานนท์",
      line2: "ตำบลปากเกร็ด",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    total_price: 1080,
    status: "pending",
    created_at: new Date("2026-02-04T12:13:02.761Z")
  },
  {
    _id: ObjectId("660000000000000000000015"),
    user_id: ObjectId("650000000000000000000099"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000005"),
        name: "บอร์ดเกมบริหารร้านขนมหวาน",
        price: 620,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000018"),
        name: "เกมกระดานออมวันละนิด",
        price: 400,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วีระ งามวงศ์",
      line1: "55/7 หมู่ 3 ถนนพหลโยธิน",
      line2: "ตำบลลำตาเสา",
      district: "วังน้อย",
      province: "พระนครศรีอยุธยา",
      postal_code: "13170",
      country: "TH"
    },
    total_price: 1820,
    status: "pending",
    created_at: new Date("2026-04-24T03:24:20.657Z")
  },
  {
    _id: ObjectId("660000000000000000000016"),
    user_id: ObjectId("650000000000000000000012"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000053"),
        name: "อีบุ๊ก: วางแผนการเงินฉบับอนุบาล",
        price: 99,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง เจริญทรัพย์",
      line1: "33/3 ถนนเชียงใหม่-ลำพูน",
      line2: "ตำบลหนองผึ้ง",
      district: "สารภี",
      province: "เชียงใหม่",
      postal_code: "50140",
      country: "TH"
    },
    total_price: 297,
    status: "shipped",
    created_at: new Date("2026-03-05T21:15:55.392Z")
  },
  {
    _id: ObjectId("660000000000000000000017"),
    user_id: ObjectId("650000000000000000000050"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000094"),
        name: "วิดีโอสอน: ลงทุนในความรู้",
        price: 210,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000027"),
        name: "บอร์ดเกมตั้งเป้าหมายทางการเงิน",
        price: 620,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ รักดี",
      line1: "11/2 ถนนสุขุมวิท คลองด่าน",
      line2: "ตำบลคลองด่าน",
      district: "บางบ่อ",
      province: "สมุทรปราการ",
      postal_code: "10550",
      country: "TH"
    },
    total_price: 1660,
    status: "pending",
    created_at: new Date("2026-05-16T10:55:26.538Z")
  },
  {
    _id: ObjectId("660000000000000000000018"),
    user_id: ObjectId("650000000000000000000019"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000042"),
        name: "การ์ดเกมคำนวณเงินทอน",
        price: 340,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000001"),
        name: "บอร์ดเกมเศรษฐีน้อย: สร้างเนื้อสร้างตัว",
        price: 590,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000079"),
        name: "นิทานภาพ: นางฟ้าออมสิน",
        price: 110,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง งามวงศ์",
      line1: "100/1 ถนนช้างคลาน",
      line2: "ตำบลช้างคลาน",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50100",
      country: "TH"
    },
    total_price: 2560,
    status: "completed",
    created_at: new Date("2026-02-07T06:20:11.409Z")
  },
  {
    _id: ObjectId("660000000000000000000019"),
    user_id: ObjectId("650000000000000000000068"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000033"),
        name: "เกมกระดานสร้างนิสัยเศรษฐี",
        price: 720,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย วิวัฒน์",
      line1: "444 หมู่ 1 ถนนสีคิ้ว-ชัยภูมิ",
      line2: "ตำบลสีคิ้ว",
      district: "สีคิ้ว",
      province: "นครราชสีมา",
      postal_code: "30140",
      country: "TH"
    },
    total_price: 2160,
    status: "pending",
    created_at: new Date("2026-06-11T16:22:39.022Z")
  },
  {
    _id: ObjectId("66000000000000000000001a"),
    user_id: ObjectId("650000000000000000000081"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000087"),
        name: "อีบุ๊ก: แบบฝึกหัดการเงินแสนสนุก",
        price: 85,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000046"),
        name: "บอร์ดเกมรถไฟสายการออม",
        price: 590,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000032"),
        name: "บอร์ดเกมหยอดกระปุกหมูทองคำ",
        price: 450,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา แจ่มใส",
      line1: "77/7 ซอยประชาสันติ 1",
      line2: "ตำบลหมากแข้ง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    total_price: 2615,
    status: "pending",
    created_at: new Date("2026-04-28T18:07:14.950Z")
  },
  {
    _id: ObjectId("66000000000000000000001b"),
    user_id: ObjectId("650000000000000000000016"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000061"),
        name: "วิดีโอสอน: การทำบัญชีรายรับรายจ่ายง่ายๆ",
        price: 220,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000082"),
        name: "นิทานภาพ: มนุษย์ต่างดาวเรียนรู้การใช้เงิน",
        price: 120,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000044"),
        name: "บอร์ดเกมเงินงอกเงย",
        price: 540,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง รุ่งเรือง",
      line1: "77 ซอยวัดเกต 1",
      line2: "ถนนเจริญราษฎร์ ตำบลวัดเกต",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50000",
      country: "TH"
    },
    total_price: 2420,
    status: "paid",
    created_at: new Date("2026-07-04T06:52:24.388Z")
  },
  {
    _id: ObjectId("66000000000000000000001c"),
    user_id: ObjectId("650000000000000000000011"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000093"),
        name: "อีบุ๊ก: บทเรียนการเงินจากคุณปู่",
        price: 125,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000044"),
        name: "บอร์ดเกมเงินงอกเงย",
        price: 540,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000078"),
        name: "วิดีโอสอน: ดอกเบี้ยคือเวทมนตร์",
        price: 230,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000059"),
        name: "นิทานภาพเชิงโต้ตอบ: แม่ไก่ออกไข่เป็นทองคำ",
        price: 140,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง แจ่มใส",
      line1: "22 หมู่ 4 ถนนหางดง",
      line2: "ตำบลหนองควาย",
      district: "หางดง",
      province: "เชียงใหม่",
      postal_code: "50230",
      country: "TH"
    },
    total_price: 1425,
    status: "pending",
    created_at: new Date("2026-02-22T08:29:38.303Z")
  },
  {
    _id: ObjectId("66000000000000000000001d"),
    user_id: ObjectId("650000000000000000000035"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000046"),
        name: "บอร์ดเกมรถไฟสายการออม",
        price: 590,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000059"),
        name: "นิทานภาพเชิงโต้ตอบ: แม่ไก่ออกไข่เป็นทองคำ",
        price: 140,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ ใจเย็น",
      line1: "11/4 หมู่ 1 ถนนพหลโยธิน",
      line2: "ตำบลประชาธิปัตย์",
      district: "ธัญบุรี",
      province: "ปทุมธานี",
      postal_code: "12130",
      country: "TH"
    },
    total_price: 4560,
    status: "pending",
    created_at: new Date("2026-04-26T22:28:46.070Z")
  },
  {
    _id: ObjectId("66000000000000000000001e"),
    user_id: ObjectId("650000000000000000000056"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000074"),
        name: "วิดีโอสอน: ความแตกต่างระหว่างบัตรเครดิตและเงินสด",
        price: 210,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000056"),
        name: "อีบุ๊ก: 10 วิธีออมเงินสำหรับเด็กประถม",
        price: 89,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ รุ่งเรือง",
      line1: "77/1 ถนนแพรกษา",
      line2: "ตำบลแพรกษา",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10280",
      country: "TH"
    },
    total_price: 687,
    status: "shipped",
    created_at: new Date("2026-05-29T12:47:09.934Z")
  },
  {
    _id: ObjectId("66000000000000000000001f"),
    user_id: ObjectId("650000000000000000000026"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000051"),
        name: "นิทานภาพ: หมูน้อยกับกระปุกออมสินเวทมนตร์",
        price: 120,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000083"),
        name: "อีบุ๊ก: นิทานสองภาษาเรื่องการประหยัด",
        price: 145,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ รุ่งเรือง",
      line1: "12/12 หมู่บ้านศุภาลัย ถนนชัยพฤกษ์",
      line2: "ตำบลคลองพระอุดม",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    total_price: 410,
    status: "shipped",
    created_at: new Date("2026-05-08T15:49:26.107Z")
  },
  {
    _id: ObjectId("660000000000000000000020"),
    user_id: ObjectId("650000000000000000000003"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000007"),
        name: "เกมกระดานวางแผนการเรียนและการออม",
        price: 550,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "สมชาย ทองดี",
      line1: "99/4 ซอยพัฒนาการ 20",
      line2: "ถนนพัฒนาการ แขวงสวนหลวง",
      district: "สวนหลวง",
      province: "กรุงเทพมหานคร",
      postal_code: "10250",
      country: "TH"
    },
    total_price: 1100,
    status: "shipped",
    created_at: new Date("2026-01-11T05:57:05.393Z")
  },
  {
    _id: ObjectId("660000000000000000000021"),
    user_id: ObjectId("650000000000000000000004"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000054"),
        name: "นิทานภาพเชิงโต้ตอบ: กระต่ายน้อยนักลงทุน",
        price: 150,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "สมชาย สุขยิ่ง",
      line1: "11/5 ซอยเจริญนคร 14",
      line2: "ถนนเจริญนคร แขวงคลองต้นไทร",
      district: "คลองสาน",
      province: "กรุงเทพมหานคร",
      postal_code: "10600",
      country: "TH"
    },
    total_price: 150,
    status: "paid",
    created_at: new Date("2026-05-11T02:37:10.486Z")
  },
  {
    _id: ObjectId("660000000000000000000022"),
    user_id: ObjectId("650000000000000000000005"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000049"),
        name: "บอร์ดเกมภารกิจซื้อบ้าน",
        price: 750,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000044"),
        name: "บอร์ดเกมเงินงอกเงย",
        price: 540,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000063"),
        name: "อีบุ๊ก: คู่มือเศรษฐีน้อยวัยใส",
        price: 160,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000077"),
        name: "อีบุ๊ก: พจนานุกรมการเงินสำหรับเด็ก",
        price: 170,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมชาย ใจเย็น",
      line1: "22/6 ซอยเพชรเกษม 48",
      line2: "ถนนเพชรเกษม แขวงบางหว้า",
      district: "ภาษีเจริญ",
      province: "กรุงเทพมหานคร",
      postal_code: "10160",
      country: "TH"
    },
    total_price: 2870,
    status: "completed",
    created_at: new Date("2026-03-26T13:54:21.727Z")
  },
  {
    _id: ObjectId("660000000000000000000023"),
    user_id: ObjectId("650000000000000000000065"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000023"),
        name: "บอร์ดเกมสวนสนุกนักบริหาร",
        price: 640,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000043"),
        name: "บอร์ดเกมจ่ายภาษีพัฒนาเมือง",
        price: 680,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย ใจเย็น",
      line1: "111 หมู่ 4 ถนนมิตรภาพ",
      line2: "ตำบลจอหอ",
      district: "เมืองนครราชสีมา",
      province: "นครราชสีมา",
      postal_code: "30310",
      country: "TH"
    },
    total_price: 3320,
    status: "shipped",
    created_at: new Date("2026-04-27T23:53:59.772Z")
  },
  {
    _id: ObjectId("660000000000000000000024"),
    user_id: ObjectId("650000000000000000000061"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000059"),
        name: "นิทานภาพเชิงโต้ตอบ: แม่ไก่ออกไข่เป็นทองคำ",
        price: 140,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000001"),
        name: "บอร์ดเกมเศรษฐีน้อย: สร้างเนื้อสร้างตัว",
        price: 590,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย แจ่มใส",
      line1: "34 หมู่ 8 หมู่บ้านศิลา",
      line2: "ตำบลศิลา",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    total_price: 1600,
    status: "paid",
    created_at: new Date("2026-02-06T14:14:59.043Z")
  },
  {
    _id: ObjectId("660000000000000000000025"),
    user_id: ObjectId("650000000000000000000098"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000047"),
        name: "บอร์ดเกมสมุดบัญชีวิเศษ",
        price: 500,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000046"),
        name: "บอร์ดเกมรถไฟสายการออม",
        price: 590,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000039"),
        name: "เกมจำลองเศรษฐกิจชุมชน",
        price: 710,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000075"),
        name: "นิทานภาพเชิงโต้ตอบ: มดงานผู้ขยันขันแข็ง",
        price: 135,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วีระ วิวัฒน์",
      line1: "44/6 หมู่ 1 ถนนสายเอเชีย",
      line2: "ตำบลคุ้งลาน",
      district: "บางปะอิน",
      province: "พระนครศรีอยุธยา",
      postal_code: "13160",
      country: "TH"
    },
    total_price: 2915,
    status: "paid",
    created_at: new Date("2026-03-02T00:22:09.608Z")
  },
  {
    _id: ObjectId("660000000000000000000026"),
    user_id: ObjectId("650000000000000000000043"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000017"),
        name: "บอร์ดเกมฟาร์มแสนสุข: เรียนรู้กำไรขาดทุน",
        price: 750,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000018"),
        name: "เกมกระดานออมวันละนิด",
        price: 400,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000027"),
        name: "บอร์ดเกมตั้งเป้าหมายทางการเงิน",
        price: 620,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล ทองดี",
      line1: "77/88 ถนนพระยาสัจจา",
      line2: "ตำบลเสม็ด",
      district: "เมืองชลบุรี",
      province: "ชลบุรี",
      postal_code: "20000",
      country: "TH"
    },
    total_price: 3010,
    status: "completed",
    created_at: new Date("2026-02-25T06:12:23.399Z")
  },
  {
    _id: ObjectId("660000000000000000000027"),
    user_id: ObjectId("650000000000000000000039"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000091"),
        name: "วิดีโอสอน: ประวัติศาสตร์ของเงิน (แอนิเมชัน)",
        price: 250,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000073"),
        name: "อีบุ๊ก: ภารกิจพิชิตเป้าหมายการเงิน",
        price: 115,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000027"),
        name: "บอร์ดเกมตั้งเป้าหมายทางการเงิน",
        price: 620,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ งามวงศ์",
      line1: "55/8 ถนนเลียบคลองสาม",
      line2: "ตำบลคลองสาม",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 2955,
    status: "completed",
    created_at: new Date("2026-07-02T13:34:46.301Z")
  },
  {
    _id: ObjectId("660000000000000000000028"),
    user_id: ObjectId("650000000000000000000088"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000003"),
        name: "เกมกระดานพ่อค้าตัวจิ๋ว",
        price: 490,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000039"),
        name: "เกมจำลองเศรษฐกิจชุมชน",
        price: 710,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000029"),
        name: "บอร์ดเกมผจญภัยล่าขุมทรัพย์ออมสิน",
        price: 590,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา วิวัฒน์",
      line1: "99/1 หมู่ 3 ถนนพุนพิน-สุราษฎร์",
      line2: "ตำบลท่าข้าม",
      district: "พุนพิน",
      province: "สุราษฎร์ธานี",
      postal_code: "84130",
      country: "TH"
    },
    total_price: 3700,
    status: "paid",
    created_at: new Date("2026-01-19T18:23:38.853Z")
  },
  {
    _id: ObjectId("660000000000000000000029"),
    user_id: ObjectId("650000000000000000000063"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000002"),
        name: "การ์ดเกมออมเงินแสนสนุก",
        price: 350,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000033"),
        name: "เกมกระดานสร้างนิสัยเศรษฐี",
        price: 720,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000095"),
        name: "นิทานภาพเชิงโต้ตอบ: ผจญภัยเกาะโจรสลัดนักออม",
        price: 170,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย ทองดี",
      line1: "78 หมู่ 1 ถนนหน้าเมือง",
      line2: "ตำบลในเมือง",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    total_price: 2680,
    status: "completed",
    created_at: new Date("2026-02-20T06:20:27.271Z")
  },
  {
    _id: ObjectId("66000000000000000000002a"),
    user_id: ObjectId("650000000000000000000014"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000097"),
        name: "อีบุ๊ก: เคล็ดลับการใช้เงินอย่างฉลาด",
        price: 90,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000082"),
        name: "นิทานภาพ: มนุษย์ต่างดาวเรียนรู้การใช้เงิน",
        price: 120,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง สุขยิ่ง",
      line1: "55/5 ถนนสันกำแพงสายใหม่",
      line2: "ตำบลสันกำแพง",
      district: "สันกำแพง",
      province: "เชียงใหม่",
      postal_code: "50130",
      country: "TH"
    },
    total_price: 210,
    status: "shipped",
    created_at: new Date("2026-02-27T01:53:45.000Z")
  },
  {
    _id: ObjectId("66000000000000000000002b"),
    user_id: ObjectId("650000000000000000000054"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000068"),
        name: "วิดีโอสอน: เงินเฟ้อคืออะไร (ฉบับเด็ก)",
        price: 240,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000089"),
        name: "นิทานภาพ: ต้นไม้เงินทองของลิงน้อย",
        price: 115,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000079"),
        name: "นิทานภาพ: นางฟ้าออมสิน",
        price: 110,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ สุขยิ่ง",
      line1: "55/6 หมู่ 1 ซอยวัดคู่สร้าง",
      line2: "ตำบลในคลองบางปลากด",
      district: "พระสมุทรเจดีย์",
      province: "สมุทรปราการ",
      postal_code: "10290",
      country: "TH"
    },
    total_price: 1175,
    status: "completed",
    created_at: new Date("2026-01-17T12:13:26.375Z")
  },
  {
    _id: ObjectId("66000000000000000000002c"),
    user_id: ObjectId("650000000000000000000040"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000094"),
        name: "วิดีโอสอน: ลงทุนในความรู้",
        price: 210,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000015"),
        name: "บอร์ดเกมภารกิจพิชิตหนี้",
        price: 650,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล รักดี",
      line1: "11/22 ถนนสุขุมวิทพัทยา 54",
      line2: "ตำบลหนองปรือ",
      district: "บางละมุง",
      province: "ชลบุรี",
      postal_code: "20150",
      country: "TH"
    },
    total_price: 1510,
    status: "completed",
    created_at: new Date("2026-03-13T15:49:18.031Z")
  },
  {
    _id: ObjectId("66000000000000000000002d"),
    user_id: ObjectId("650000000000000000000064"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000075"),
        name: "นิทานภาพเชิงโต้ตอบ: มดงานผู้ขยันขันแข็ง",
        price: 135,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย สุขยิ่ง",
      line1: "90/2 หมู่ 3 ถนนมะลิวัลย์",
      line2: "ตำบลบ้านทุ่ม",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    total_price: 405,
    status: "completed",
    created_at: new Date("2026-01-20T22:30:59.737Z")
  },
  {
    _id: ObjectId("66000000000000000000002e"),
    user_id: ObjectId("650000000000000000000041"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000026"),
        name: "การ์ดเกมช้อปปิ้งอย่างชาญฉลาด",
        price: 310,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000015"),
        name: "บอร์ดเกมภารกิจพิชิตหนี้",
        price: 650,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล แจ่มใส",
      line1: "33/44 หมู่ 6 ซอยนาเกลือ 12",
      line2: "ตำบลนาเกลือ",
      district: "บางละมุง",
      province: "ชลบุรี",
      postal_code: "20150",
      country: "TH"
    },
    total_price: 2260,
    status: "paid",
    created_at: new Date("2026-06-08T15:57:06.765Z")
  },
  {
    _id: ObjectId("66000000000000000000002f"),
    user_id: ObjectId("650000000000000000000042"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000013"),
        name: "เกมกระดานตลาดนัดวัยซน",
        price: 450,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000084"),
        name: "วิดีโอสอน: หาเงินด้วยตัวเองวัยเด็ก",
        price: 200,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000086"),
        name: "นิทานภาพ: นกฮูกสอนนับเงิน",
        price: 99,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000032"),
        name: "บอร์ดเกมหยอดกระปุกหมูทองคำ",
        price: 450,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล เจริญทรัพย์",
      line1: "55/66 หมู่ 2 ถนนลงหาดบางแสน",
      line2: "ตำบลแสนสุข",
      district: "เมืองชลบุรี",
      province: "ชลบุรี",
      postal_code: "20130",
      country: "TH"
    },
    total_price: 1948,
    status: "pending",
    created_at: new Date("2026-04-08T17:40:54.186Z")
  },
  {
    _id: ObjectId("660000000000000000000030"),
    user_id: ObjectId("650000000000000000000081"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000018"),
        name: "เกมกระดานออมวันละนิด",
        price: 400,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000023"),
        name: "บอร์ดเกมสวนสนุกนักบริหาร",
        price: 640,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000071"),
        name: "วิดีโอสอน: เคล็ดลับเก็บเงินซื้อของเล่น",
        price: 185,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000088"),
        name: "วิดีโอสอน: การบริจาคและการแบ่งปัน",
        price: 180,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา แจ่มใส",
      line1: "77/7 ซอยประชาสันติ 1",
      line2: "ตำบลหมากแข้ง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    total_price: 2355,
    status: "paid",
    created_at: new Date("2026-05-07T04:02:40.529Z")
  },
  {
    _id: ObjectId("660000000000000000000031"),
    user_id: ObjectId("650000000000000000000074"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000085"),
        name: "นิทานภาพเชิงโต้ตอบ: ค่ายฤดูร้อนนักธุรกิจจิ๋ว",
        price: 165,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ สุขยิ่ง",
      line1: "55/6 ถนนไทรบุรี",
      line2: "ตำบลบ่อยาง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    total_price: 165,
    status: "completed",
    created_at: new Date("2026-01-10T12:14:26.378Z")
  },
  {
    _id: ObjectId("660000000000000000000032"),
    user_id: ObjectId("650000000000000000000047"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000006"),
        name: "การ์ดเกมจับคู่รายรับรายจ่าย",
        price: 300,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล แซ่ลี้",
      line1: "33/33 ถนนเจ้าฟ้าตะวันตก",
      line2: "ตำบลฉลอง",
      district: "เมืองภูเก็ต",
      province: "ภูเก็ต",
      postal_code: "83130",
      country: "TH"
    },
    total_price: 900,
    status: "shipped",
    created_at: new Date("2026-04-21T03:33:43.109Z")
  },
  {
    _id: ObjectId("660000000000000000000033"),
    user_id: ObjectId("650000000000000000000090"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000010"),
        name: "บอร์ดเกมเส้นทางเศรษฐีจิ๋ว",
        price: 720,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "วีระ รักดี",
      line1: "11/1 ถนนเพชรเกษม",
      line2: "ตำบลหัวหิน",
      district: "หัวหิน",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77110",
      country: "TH"
    },
    total_price: 720,
    status: "completed",
    created_at: new Date("2026-01-23T13:44:46.926Z")
  },
  {
    _id: ObjectId("660000000000000000000034"),
    user_id: ObjectId("650000000000000000000042"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000028"),
        name: "เกมกระดานนักธุรกิจรุ่นจิ๋ว",
        price: 740,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000062"),
        name: "นิทานภาพ: กบฏขนมหวานกับการออมเงิน",
        price: 115,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000033"),
        name: "เกมกระดานสร้างนิสัยเศรษฐี",
        price: 720,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000059"),
        name: "นิทานภาพเชิงโต้ตอบ: แม่ไก่ออกไข่เป็นทองคำ",
        price: 140,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล เจริญทรัพย์",
      line1: "55/66 หมู่ 2 ถนนลงหาดบางแสน",
      line2: "ตำบลแสนสุข",
      district: "เมืองชลบุรี",
      province: "ชลบุรี",
      postal_code: "20130",
      country: "TH"
    },
    total_price: 3385,
    status: "pending",
    created_at: new Date("2026-04-06T07:07:02.923Z")
  },
  {
    _id: ObjectId("660000000000000000000035"),
    user_id: ObjectId("650000000000000000000026"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000009"),
        name: "เกมจำลองสหกรณ์โรงเรียน",
        price: 680,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000050"),
        name: "เกมกระดานห้างสรรพสินค้าจำลอง",
        price: 630,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000066"),
        name: "นิทานภาพ: ค่าขนมของช้างน้อย",
        price: 105,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ รุ่งเรือง",
      line1: "12/12 หมู่บ้านศุภาลัย ถนนชัยพฤกษ์",
      line2: "ตำบลคลองพระอุดม",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    total_price: 2780,
    status: "pending",
    created_at: new Date("2026-03-16T11:25:48.908Z")
  },
  {
    _id: ObjectId("660000000000000000000036"),
    user_id: ObjectId("650000000000000000000073"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000093"),
        name: "อีบุ๊ก: บทเรียนการเงินจากคุณปู่",
        price: 125,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000013"),
        name: "เกมกระดานตลาดนัดวัยซน",
        price: 450,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000031"),
        name: "บอร์ดเกมกองทุนสัตว์เลี้ยง",
        price: 680,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ ทองดี",
      line1: "44/5 หมู่ 1 ถนนสงขลา-นาทวี",
      line2: "ตำบลเขารูปช้าง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    total_price: 2615,
    status: "shipped",
    created_at: new Date("2026-01-11T20:24:02.811Z")
  },
  {
    _id: ObjectId("660000000000000000000037"),
    user_id: ObjectId("650000000000000000000050"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000091"),
        name: "วิดีโอสอน: ประวัติศาสตร์ของเงิน (แอนิเมชัน)",
        price: 250,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000026"),
        name: "การ์ดเกมช้อปปิ้งอย่างชาญฉลาด",
        price: 310,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000022"),
        name: "เกมจำลองอาชีพในฝันและการสร้างรายได้",
        price: 780,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ รักดี",
      line1: "11/2 ถนนสุขุมวิท คลองด่าน",
      line2: "ตำบลคลองด่าน",
      district: "บางบ่อ",
      province: "สมุทรปราการ",
      postal_code: "10550",
      country: "TH"
    },
    total_price: 2740,
    status: "completed",
    created_at: new Date("2026-03-28T23:03:37.818Z")
  },
  {
    _id: ObjectId("660000000000000000000038"),
    user_id: ObjectId("650000000000000000000055"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000069"),
        name: "นิทานภาพ: การผจญภัยของเหรียญสิบบาท",
        price: 95,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ ใจเย็น",
      line1: "66/9 หมู่ 5 ถนนศรีนครินทร์",
      line2: "ตำบลบางเมือง",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10270",
      country: "TH"
    },
    total_price: 285,
    status: "completed",
    created_at: new Date("2026-01-26T23:25:51.783Z")
  },
  {
    _id: ObjectId("660000000000000000000039"),
    user_id: ObjectId("650000000000000000000009"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000014"),
        name: "บอร์ดเกมโรงงานผลิตเงิน",
        price: 580,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000041"),
        name: "บอร์ดเกมครอบครัวมีตังค์",
        price: 600,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000077"),
        name: "อีบุ๊ก: พจนานุกรมการเงินสำหรับเด็ก",
        price: 170,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000081"),
        name: "วิดีโอสอน: การแบ่งเงิน 3 กระปุก",
        price: 175,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "สมชาย งามวงศ์",
      line1: "66/10 คอนโดทรี ซอยสุขุมวิท 64",
      line2: "ถนนสุขุมวิท แขวงบางจาก",
      district: "พระโขนง",
      province: "กรุงเทพมหานคร",
      postal_code: "10260",
      country: "TH"
    },
    total_price: 3480,
    status: "shipped",
    created_at: new Date("2026-06-05T21:58:59.355Z")
  },
  {
    _id: ObjectId("66000000000000000000003a"),
    user_id: ObjectId("650000000000000000000030"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000033"),
        name: "เกมกระดานสร้างนิสัยเศรษฐี",
        price: 720,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000019"),
        name: "บอร์ดเกมประหยัดพลังงานประหยัดเงิน",
        price: 590,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ รักดี",
      line1: "12/3 ถนนพหลโยธิน คลองหนึ่ง",
      line2: "ตำบลคลองหนึ่ง",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 3340,
    status: "completed",
    created_at: new Date("2026-01-14T22:34:52.510Z")
  },
  {
    _id: ObjectId("66000000000000000000003b"),
    user_id: ObjectId("650000000000000000000095"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000018"),
        name: "เกมกระดานออมวันละนิด",
        price: 400,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วีระ ใจเย็น",
      line1: "11/3 ถนนอู่ทอง",
      line2: "ตำบลหอรัตนไชย",
      district: "พระนครศรีอยุธยา",
      province: "พระนครศรีอยุธยา",
      postal_code: "13000",
      country: "TH"
    },
    total_price: 1200,
    status: "pending",
    created_at: new Date("2026-07-07T16:50:46.733Z")
  },
  {
    _id: ObjectId("66000000000000000000003c"),
    user_id: ObjectId("650000000000000000000051"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000048"),
        name: "การ์ดเกมเงินทองของมีค่า",
        price: 390,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000043"),
        name: "บอร์ดเกมจ่ายภาษีพัฒนาเมือง",
        price: 680,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000019"),
        name: "บอร์ดเกมประหยัดพลังงานประหยัดเงิน",
        price: 590,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ แจ่มใส",
      line1: "22/3 หมู่ 4 ซอยแบริ่ง 58",
      line2: "ตำบลสำโรงเหนือ",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10270",
      country: "TH"
    },
    total_price: 3120,
    status: "pending",
    created_at: new Date("2026-02-26T16:38:20.735Z")
  },
  {
    _id: ObjectId("66000000000000000000003d"),
    user_id: ObjectId("650000000000000000000021"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000018"),
        name: "เกมกระดานออมวันละนิด",
        price: 400,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000057"),
        name: "นิทานภาพ: หมีน้อยผู้ไม่เคยเก็บเงิน",
        price: 110,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000094"),
        name: "วิดีโอสอน: ลงทุนในความรู้",
        price: 210,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000100"),
        name: "นิทานภาพเชิงโต้ตอบ: เมืองเวทมนตร์แห่งการเงิน",
        price: 180,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ แจ่มใส",
      line1: "88/88 หมู่ 3 ถนนติวานนท์",
      line2: "ตำบลปากเกร็ด",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    total_price: 1470,
    status: "pending",
    created_at: new Date("2026-06-25T08:14:26.102Z")
  },
  {
    _id: ObjectId("66000000000000000000003e"),
    user_id: ObjectId("650000000000000000000012"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000099"),
        name: "นิทานภาพ: ครอบครัวเพนกวินนักวางแผน",
        price: 115,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง เจริญทรัพย์",
      line1: "33/3 ถนนเชียงใหม่-ลำพูน",
      line2: "ตำบลหนองผึ้ง",
      district: "สารภี",
      province: "เชียงใหม่",
      postal_code: "50140",
      country: "TH"
    },
    total_price: 345,
    status: "paid",
    created_at: new Date("2026-01-20T08:21:45.297Z")
  },
  {
    _id: ObjectId("66000000000000000000003f"),
    user_id: ObjectId("650000000000000000000057"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000010"),
        name: "บอร์ดเกมเส้นทางเศรษฐีจิ๋ว",
        price: 720,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ แซ่ลี้",
      line1: "88/2 หมู่ 1 ซอยวัดสลุด",
      line2: "ตำบลบางพลีใหญ่",
      district: "บางพลี",
      province: "สมุทรปราการ",
      postal_code: "10540",
      country: "TH"
    },
    total_price: 2160,
    status: "pending",
    created_at: new Date("2026-01-20T05:51:56.437Z")
  },
  {
    _id: ObjectId("660000000000000000000040"),
    user_id: ObjectId("650000000000000000000013"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000068"),
        name: "วิดีโอสอน: เงินเฟ้อคืออะไร (ฉบับเด็ก)",
        price: 240,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000093"),
        name: "อีบุ๊ก: บทเรียนการเงินจากคุณปู่",
        price: 125,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000017"),
        name: "บอร์ดเกมฟาร์มแสนสุข: เรียนรู้กำไรขาดทุน",
        price: 750,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000027"),
        name: "บอร์ดเกมตั้งเป้าหมายทางการเงิน",
        price: 620,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง ทองดี",
      line1: "44 หมู่ 5 ตำบลแม่ริมใต้",
      line2: "ถนนโชตนา",
      district: "แม่ริม",
      province: "เชียงใหม่",
      postal_code: "50180",
      country: "TH"
    },
    total_price: 3345,
    status: "shipped",
    created_at: new Date("2026-01-12T23:33:53.268Z")
  },
  {
    _id: ObjectId("660000000000000000000041"),
    user_id: ObjectId("650000000000000000000056"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000077"),
        name: "อีบุ๊ก: พจนานุกรมการเงินสำหรับเด็ก",
        price: 170,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000089"),
        name: "นิทานภาพ: ต้นไม้เงินทองของลิงน้อย",
        price: 115,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000053"),
        name: "อีบุ๊ก: วางแผนการเงินฉบับอนุบาล",
        price: 99,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ รุ่งเรือง",
      line1: "77/1 ถนนแพรกษา",
      line2: "ตำบลแพรกษา",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10280",
      country: "TH"
    },
    total_price: 752,
    status: "shipped",
    created_at: new Date("2026-06-17T08:36:20.966Z")
  },
  {
    _id: ObjectId("660000000000000000000042"),
    user_id: ObjectId("650000000000000000000055"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000048"),
        name: "การ์ดเกมเงินทองของมีค่า",
        price: 390,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000037"),
        name: "บอร์ดเกมบริหารเวลาและเงินทอง",
        price: 550,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ ใจเย็น",
      line1: "66/9 หมู่ 5 ถนนศรีนครินทร์",
      line2: "ตำบลบางเมือง",
      district: "เมืองสมุทรปราการ",
      province: "สมุทรปราการ",
      postal_code: "10270",
      country: "TH"
    },
    total_price: 2040,
    status: "completed",
    created_at: new Date("2026-01-14T13:19:56.054Z")
  },
  {
    _id: ObjectId("660000000000000000000043"),
    user_id: ObjectId("650000000000000000000067"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000016"),
        name: "การ์ดเกมสอนลูกรู้จักเงิน",
        price: 380,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย แซ่ลี้",
      line1: "333 หมู่ 6 ถนนสืบศิริ",
      line2: "ตำบลหนองจะบก",
      district: "เมืองนครราชสีมา",
      province: "นครราชสีมา",
      postal_code: "30000",
      country: "TH"
    },
    total_price: 1140,
    status: "shipped",
    created_at: new Date("2026-03-17T01:30:18.865Z")
  },
  {
    _id: ObjectId("660000000000000000000044"),
    user_id: ObjectId("650000000000000000000075"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000077"),
        name: "อีบุ๊ก: พจนานุกรมการเงินสำหรับเด็ก",
        price: 170,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000019"),
        name: "บอร์ดเกมประหยัดพลังงานประหยัดเงิน",
        price: 590,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000008"),
        name: "บอร์ดเกมครอบครัวนักลงทุน",
        price: 800,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000061"),
        name: "วิดีโอสอน: การทำบัญชีรายรับรายจ่ายง่ายๆ",
        price: 220,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ ใจเย็น",
      line1: "12/4 ถนนสุขุมวิท",
      line2: "ตำบลเนินพระ",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21000",
      country: "TH"
    },
    total_price: 4310,
    status: "paid",
    created_at: new Date("2026-05-29T21:00:46.733Z")
  },
  {
    _id: ObjectId("660000000000000000000045"),
    user_id: ObjectId("650000000000000000000081"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000048"),
        name: "การ์ดเกมเงินทองของมีค่า",
        price: 390,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000082"),
        name: "นิทานภาพ: มนุษย์ต่างดาวเรียนรู้การใช้เงิน",
        price: 120,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000042"),
        name: "การ์ดเกมคำนวณเงินทอน",
        price: 340,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000022"),
        name: "เกมจำลองอาชีพในฝันและการสร้างรายได้",
        price: 780,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา แจ่มใส",
      line1: "77/7 ซอยประชาสันติ 1",
      line2: "ตำบลหมากแข้ง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    total_price: 3530,
    status: "shipped",
    created_at: new Date("2026-04-13T02:11:14.085Z")
  },
  {
    _id: ObjectId("660000000000000000000046"),
    user_id: ObjectId("650000000000000000000075"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000029"),
        name: "บอร์ดเกมผจญภัยล่าขุมทรัพย์ออมสิน",
        price: 590,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000062"),
        name: "นิทานภาพ: กบฏขนมหวานกับการออมเงิน",
        price: 115,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000048"),
        name: "การ์ดเกมเงินทองของมีค่า",
        price: 390,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ ใจเย็น",
      line1: "12/4 ถนนสุขุมวิท",
      line2: "ตำบลเนินพระ",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21000",
      country: "TH"
    },
    total_price: 2190,
    status: "paid",
    created_at: new Date("2026-05-24T14:36:32.823Z")
  },
  {
    _id: ObjectId("660000000000000000000047"),
    user_id: ObjectId("650000000000000000000073"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000044"),
        name: "บอร์ดเกมเงินงอกเงย",
        price: 540,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000017"),
        name: "บอร์ดเกมฟาร์มแสนสุข: เรียนรู้กำไรขาดทุน",
        price: 750,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ ทองดี",
      line1: "44/5 หมู่ 1 ถนนสงขลา-นาทวี",
      line2: "ตำบลเขารูปช้าง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    total_price: 2790,
    status: "shipped",
    created_at: new Date("2026-05-15T10:01:44.850Z")
  },
  {
    _id: ObjectId("660000000000000000000048"),
    user_id: ObjectId("650000000000000000000093"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000094"),
        name: "วิดีโอสอน: ลงทุนในความรู้",
        price: 210,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000047"),
        name: "บอร์ดเกมสมุดบัญชีวิเศษ",
        price: 500,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "วีระ ทองดี",
      line1: "44/4 หมู่ 2 ถนนปราณบุรี",
      line2: "ตำบลปราณบุรี",
      district: "ปราณบุรี",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77120",
      country: "TH"
    },
    total_price: 1130,
    status: "pending",
    created_at: new Date("2026-03-25T05:37:29.838Z")
  },
  {
    _id: ObjectId("660000000000000000000049"),
    user_id: ObjectId("650000000000000000000090"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000023"),
        name: "บอร์ดเกมสวนสนุกนักบริหาร",
        price: 640,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000052"),
        name: "วิดีโอสอน: เงินมาจากไหน",
        price: 199,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วีระ รักดี",
      line1: "11/1 ถนนเพชรเกษม",
      line2: "ตำบลหัวหิน",
      district: "หัวหิน",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77110",
      country: "TH"
    },
    total_price: 1877,
    status: "paid",
    created_at: new Date("2026-03-26T18:36:26.669Z")
  },
  {
    _id: ObjectId("66000000000000000000004a"),
    user_id: ObjectId("650000000000000000000023"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000044"),
        name: "บอร์ดเกมเงินงอกเงย",
        price: 540,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000086"),
        name: "นิทานภาพ: นกฮูกสอนนับเงิน",
        price: 99,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ ทองดี",
      line1: "99/99 หมู่บ้านเพอร์เฟค ถนนราชพฤกษ์",
      line2: "ตำบลบางรักน้อย",
      district: "เมืองนนทบุรี",
      province: "นนทบุรี",
      postal_code: "11000",
      country: "TH"
    },
    total_price: 1917,
    status: "paid",
    created_at: new Date("2026-06-21T13:12:32.279Z")
  },
  {
    _id: ObjectId("66000000000000000000004b"),
    user_id: ObjectId("650000000000000000000026"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000095"),
        name: "นิทานภาพเชิงโต้ตอบ: ผจญภัยเกาะโจรสลัดนักออม",
        price: 170,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000036"),
        name: "การ์ดเกมจับฉลากการเงิน",
        price: 320,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000096"),
        name: "นิทานภาพ: หมีขาวกับสหกรณ์ขั้วโลก",
        price: 130,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ รุ่งเรือง",
      line1: "12/12 หมู่บ้านศุภาลัย ถนนชัยพฤกษ์",
      line2: "ตำบลคลองพระอุดม",
      district: "ปากเกร็ด",
      province: "นนทบุรี",
      postal_code: "11120",
      country: "TH"
    },
    total_price: 1110,
    status: "paid",
    created_at: new Date("2026-04-05T23:29:33.583Z")
  },
  {
    _id: ObjectId("66000000000000000000004c"),
    user_id: ObjectId("650000000000000000000077"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000021"),
        name: "การ์ดเกมเศรษฐศาสตร์เบื้องต้นวัยจิ๋ว",
        price: 350,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000040"),
        name: "บอร์ดเกมตลาดหุ้นสำหรับเด็ก",
        price: 800,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000093"),
        name: "อีบุ๊ก: บทเรียนการเงินจากคุณปู่",
        price: 125,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ แซ่ลี้",
      line1: "56/6 หมู่ 2 ซอยมาบตาพุด 1",
      line2: "ตำบลมาบตาพุด",
      district: "เมืองระยอง",
      province: "ระยอง",
      postal_code: "21150",
      country: "TH"
    },
    total_price: 3655,
    status: "shipped",
    created_at: new Date("2026-06-15T13:17:18.292Z")
  },
  {
    _id: ObjectId("66000000000000000000004d"),
    user_id: ObjectId("650000000000000000000082"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000090"),
        name: "นิทานภาพเชิงโต้ตอบ: เจ้าหญิงผู้สร้างแบรนด์",
        price: 150,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000054"),
        name: "นิทานภาพเชิงโต้ตอบ: กระต่ายน้อยนักลงทุน",
        price: 150,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000043"),
        name: "บอร์ดเกมจ่ายภาษีพัฒนาเมือง",
        price: 680,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000026"),
        name: "การ์ดเกมช้อปปิ้งอย่างชาญฉลาด",
        price: 310,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา เจริญทรัพย์",
      line1: "88/8 หมู่ 4 ถนนนิตโย",
      line2: "ตำบลหนองบัว",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    total_price: 2430,
    status: "completed",
    created_at: new Date("2026-03-13T06:25:26.028Z")
  },
  {
    _id: ObjectId("66000000000000000000004e"),
    user_id: ObjectId("650000000000000000000025"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000015"),
        name: "บอร์ดเกมภารกิจพิชิตหนี้",
        price: 650,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000097"),
        name: "อีบุ๊ก: เคล็ดลับการใช้เงินอย่างฉลาด",
        price: 90,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000059"),
        name: "นิทานภาพเชิงโต้ตอบ: แม่ไก่ออกไข่เป็นทองคำ",
        price: 140,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ ใจเย็น",
      line1: "11/11 ซอยเรวดี 15",
      line2: "ถนนเรวดี ตำบลตลาดขวัญ",
      district: "เมืองนนทบุรี",
      province: "นนทบุรี",
      postal_code: "11000",
      country: "TH"
    },
    total_price: 1850,
    status: "shipped",
    created_at: new Date("2026-01-24T10:21:34.161Z")
  },
  {
    _id: ObjectId("66000000000000000000004f"),
    user_id: ObjectId("650000000000000000000016"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000030"),
        name: "การ์ดเกมรู้จักธนบัตรและเหรียญ",
        price: 300,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000086"),
        name: "นิทานภาพ: นกฮูกสอนนับเงิน",
        price: 99,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมหญิง รุ่งเรือง",
      line1: "77 ซอยวัดเกต 1",
      line2: "ถนนเจริญราษฎร์ ตำบลวัดเกต",
      district: "เมืองเชียงใหม่",
      province: "เชียงใหม่",
      postal_code: "50000",
      country: "TH"
    },
    total_price: 1387,
    status: "pending",
    created_at: new Date("2026-04-30T16:07:42.357Z")
  },
  {
    _id: ObjectId("660000000000000000000050"),
    user_id: ObjectId("650000000000000000000059"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000038"),
        name: "บอร์ดเกมกอบกู้เมืองด้วยการลงทุน",
        price: 790,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000077"),
        name: "อีบุ๊ก: พจนานุกรมการเงินสำหรับเด็ก",
        price: 170,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000005"),
        name: "บอร์ดเกมบริหารร้านขนมหวาน",
        price: 620,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000042"),
        name: "การ์ดเกมคำนวณเงินทอน",
        price: 340,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ งามวงศ์",
      line1: "101/4 ซอยปู่เจ้าสมิงพราย",
      line2: "ตำบลสำโรงใต้",
      district: "พระประแดง",
      province: "สมุทรปราการ",
      postal_code: "10130",
      country: "TH"
    },
    total_price: 4010,
    status: "shipped",
    created_at: new Date("2026-06-16T05:37:51.539Z")
  },
  {
    _id: ObjectId("660000000000000000000051"),
    user_id: ObjectId("650000000000000000000063"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000017"),
        name: "บอร์ดเกมฟาร์มแสนสุข: เรียนรู้กำไรขาดทุน",
        price: 750,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000042"),
        name: "การ์ดเกมคำนวณเงินทอน",
        price: 340,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000070"),
        name: "นิทานภาพเชิงโต้ตอบ: พ่อค้าน้อยในป่าใหญ่",
        price: 155,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000062"),
        name: "นิทานภาพ: กบฏขนมหวานกับการออมเงิน",
        price: 115,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "อรทัย ทองดี",
      line1: "78 หมู่ 1 ถนนหน้าเมือง",
      line2: "ตำบลในเมือง",
      district: "เมืองขอนแก่น",
      province: "ขอนแก่น",
      postal_code: "40000",
      country: "TH"
    },
    total_price: 2380,
    status: "paid",
    created_at: new Date("2026-03-07T08:36:35.170Z")
  },
  {
    _id: ObjectId("660000000000000000000052"),
    user_id: ObjectId("650000000000000000000037"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000061"),
        name: "วิดีโอสอน: การทำบัญชีรายรับรายจ่ายง่ายๆ",
        price: 220,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000057"),
        name: "นิทานภาพ: หมีน้อยผู้ไม่เคยเก็บเงิน",
        price: 110,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000075"),
        name: "นิทานภาพเชิงโต้ตอบ: มดงานผู้ขยันขันแข็ง",
        price: 135,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ แซ่ลี้",
      line1: "33/6 หมู่ 4 ซอยคลองหลวง 17",
      line2: "ตำบลคลองหนึ่ง",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 795,
    status: "pending",
    created_at: new Date("2026-03-02T03:01:25.880Z")
  },
  {
    _id: ObjectId("660000000000000000000053"),
    user_id: ObjectId("650000000000000000000045"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000011"),
        name: "การ์ดเกมปกป้องเงินออมจากปีศาจฟุ่มเฟือย",
        price: 320,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000056"),
        name: "อีบุ๊ก: 10 วิธีออมเงินสำหรับเด็กประถม",
        price: 89,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล ใจเย็น",
      line1: "11/1 ถนนป่าตอง",
      line2: "ตำบลป่าตอง",
      district: "กะทู้",
      province: "ภูเก็ต",
      postal_code: "83150",
      country: "TH"
    },
    total_price: 587,
    status: "completed",
    created_at: new Date("2026-04-06T03:47:49.355Z")
  },
  {
    _id: ObjectId("660000000000000000000054"),
    user_id: ObjectId("650000000000000000000006"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000070"),
        name: "นิทานภาพเชิงโต้ตอบ: พ่อค้าน้อยในป่าใหญ่",
        price: 155,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000073"),
        name: "อีบุ๊ก: ภารกิจพิชิตเป้าหมายการเงิน",
        price: 115,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000011"),
        name: "การ์ดเกมปกป้องเงินออมจากปีศาจฟุ่มเฟือย",
        price: 320,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมชาย รุ่งเรือง",
      line1: "33/7 หมู่ 1 ซอยรามอินทรา 109",
      line2: "ถนนรามอินทรา แขวงคันนายาว",
      district: "คันนายาว",
      province: "กรุงเทพมหานคร",
      postal_code: "10230",
      country: "TH"
    },
    total_price: 1615,
    status: "completed",
    created_at: new Date("2026-06-08T11:25:26.841Z")
  },
  {
    _id: ObjectId("660000000000000000000055"),
    user_id: ObjectId("650000000000000000000098"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000094"),
        name: "วิดีโอสอน: ลงทุนในความรู้",
        price: 210,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "วีระ วิวัฒน์",
      line1: "44/6 หมู่ 1 ถนนสายเอเชีย",
      line2: "ตำบลคุ้งลาน",
      district: "บางปะอิน",
      province: "พระนครศรีอยุธยา",
      postal_code: "13160",
      country: "TH"
    },
    total_price: 210,
    status: "shipped",
    created_at: new Date("2026-06-25T03:18:50.597Z")
  },
  {
    _id: ObjectId("660000000000000000000056"),
    user_id: ObjectId("650000000000000000000008"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000052"),
        name: "วิดีโอสอน: เงินมาจากไหน",
        price: 199,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000048"),
        name: "การ์ดเกมเงินทองของมีค่า",
        price: 390,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "สมชาย วิวัฒน์",
      line1: "55/9 หมู่บ้านพฤกษา",
      line2: "ถนนลาดพร้าว แขวงวังทองหลาง",
      district: "วังทองหลาง",
      province: "กรุงเทพมหานคร",
      postal_code: "10310",
      country: "TH"
    },
    total_price: 1377,
    status: "paid",
    created_at: new Date("2026-04-19T22:46:33.354Z")
  },
  {
    _id: ObjectId("660000000000000000000057"),
    user_id: ObjectId("650000000000000000000020"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000100"),
        name: "นิทานภาพเชิงโต้ตอบ: เมืองเวทมนตร์แห่งการเงิน",
        price: 180,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000029"),
        name: "บอร์ดเกมผจญภัยล่าขุมทรัพย์ออมสิน",
        price: 590,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000008"),
        name: "บอร์ดเกมครอบครัวนักลงทุน",
        price: 800,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000060"),
        name: "อีบุ๊ก: นิทานการเงินก่อนนอน",
        price: 130,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "วิไลวรรณ รักดี",
      line1: "77/77 ซอยงามวงศ์วาน 25",
      line2: "ถนนงามวงศ์วาน ตำบลบางเขน",
      district: "เมืองนนทบุรี",
      province: "นนทบุรี",
      postal_code: "11000",
      country: "TH"
    },
    total_price: 2910,
    status: "completed",
    created_at: new Date("2026-07-07T09:10:28.470Z")
  },
  {
    _id: ObjectId("660000000000000000000058"),
    user_id: ObjectId("650000000000000000000009"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000082"),
        name: "นิทานภาพ: มนุษย์ต่างดาวเรียนรู้การใช้เงิน",
        price: 120,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "สมชาย งามวงศ์",
      line1: "66/10 คอนโดทรี ซอยสุขุมวิท 64",
      line2: "ถนนสุขุมวิท แขวงบางจาก",
      district: "พระโขนง",
      province: "กรุงเทพมหานคร",
      postal_code: "10260",
      country: "TH"
    },
    total_price: 360,
    status: "completed",
    created_at: new Date("2026-06-08T20:50:21.964Z")
  },
  {
    _id: ObjectId("660000000000000000000059"),
    user_id: ObjectId("650000000000000000000059"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000094"),
        name: "วิดีโอสอน: ลงทุนในความรู้",
        price: 210,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000045"),
        name: "เกมกระดานสร้างวินัยการเงิน",
        price: 420,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000040"),
        name: "บอร์ดเกมตลาดหุ้นสำหรับเด็ก",
        price: 800,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000067"),
        name: "อีบุ๊ก: สอนลูกลงทุนผ่านนิทาน",
        price: 135,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ งามวงศ์",
      line1: "101/4 ซอยปู่เจ้าสมิงพราย",
      line2: "ตำบลสำโรงใต้",
      district: "พระประแดง",
      province: "สมุทรปราการ",
      postal_code: "10130",
      country: "TH"
    },
    total_price: 2825,
    status: "paid",
    created_at: new Date("2026-02-13T10:25:44.387Z")
  },
  {
    _id: ObjectId("66000000000000000000005a"),
    user_id: ObjectId("650000000000000000000037"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000021"),
        name: "การ์ดเกมเศรษฐศาสตร์เบื้องต้นวัยจิ๋ว",
        price: 350,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000065"),
        name: "นิทานภาพเชิงโต้ตอบ: มังกรผู้พิทักษ์ขุมทรัพย์",
        price: 145,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ แซ่ลี้",
      line1: "33/6 หมู่ 4 ซอยคลองหลวง 17",
      line2: "ตำบลคลองหนึ่ง",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 495,
    status: "completed",
    created_at: new Date("2026-04-28T21:15:39.291Z")
  },
  {
    _id: ObjectId("66000000000000000000005b"),
    user_id: ObjectId("650000000000000000000074"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000012"),
        name: "บอร์ดเกมสร้างเมืองด้วยเงินออม",
        price: 790,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000026"),
        name: "การ์ดเกมช้อปปิ้งอย่างชาญฉลาด",
        price: 310,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000062"),
        name: "นิทานภาพ: กบฏขนมหวานกับการออมเงิน",
        price: 115,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000088"),
        name: "วิดีโอสอน: การบริจาคและการแบ่งปัน",
        price: 180,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "จักรพันธ์ สุขยิ่ง",
      line1: "55/6 ถนนไทรบุรี",
      line2: "ตำบลบ่อยาง",
      district: "เมืองสงขลา",
      province: "สงขลา",
      postal_code: "90000",
      country: "TH"
    },
    total_price: 3205,
    status: "completed",
    created_at: new Date("2026-01-11T19:51:26.181Z")
  },
  {
    _id: ObjectId("66000000000000000000005c"),
    user_id: ObjectId("650000000000000000000093"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000017"),
        name: "บอร์ดเกมฟาร์มแสนสุข: เรียนรู้กำไรขาดทุน",
        price: 750,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000039"),
        name: "เกมจำลองเศรษฐกิจชุมชน",
        price: 710,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000055"),
        name: "วิดีโอสอน: แยกแยะความจำเป็นและความต้องการ",
        price: 250,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "วีระ ทองดี",
      line1: "44/4 หมู่ 2 ถนนปราณบุรี",
      line2: "ตำบลปราณบุรี",
      district: "ปราณบุรี",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77120",
      country: "TH"
    },
    total_price: 4880,
    status: "pending",
    created_at: new Date("2026-05-02T19:58:27.451Z")
  },
  {
    _id: ObjectId("66000000000000000000005d"),
    user_id: ObjectId("650000000000000000000083"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000047"),
        name: "บอร์ดเกมสมุดบัญชีวิเศษ",
        price: 500,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000016"),
        name: "การ์ดเกมสอนลูกรู้จักเงิน",
        price: 380,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000034"),
        name: "บอร์ดเกมรายได้หลายทาง",
        price: 660,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000067"),
        name: "อีบุ๊ก: สอนลูกลงทุนผ่านนิทาน",
        price: 135,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา ทองดี",
      line1: "99/9 หมู่ 2 ถนนมิตรภาพ",
      line2: "ตำบลโนนสูง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41330",
      country: "TH"
    },
    total_price: 3875,
    status: "paid",
    created_at: new Date("2026-01-22T14:37:52.446Z")
  },
  {
    _id: ObjectId("66000000000000000000005e"),
    user_id: ObjectId("650000000000000000000039"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000022"),
        name: "เกมจำลองอาชีพในฝันและการสร้างรายได้",
        price: 780,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000027"),
        name: "บอร์ดเกมตั้งเป้าหมายทางการเงิน",
        price: 620,
        qty: 3
      }
    ],
    shipping_address: {
      recipient_name: "กิตติพงษ์ งามวงศ์",
      line1: "55/8 ถนนเลียบคลองสาม",
      line2: "ตำบลคลองสาม",
      district: "คลองหลวง",
      province: "ปทุมธานี",
      postal_code: "12120",
      country: "TH"
    },
    total_price: 4200,
    status: "paid",
    created_at: new Date("2026-07-01T14:50:48.056Z")
  },
  {
    _id: ObjectId("66000000000000000000005f"),
    user_id: ObjectId("650000000000000000000094"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000063"),
        name: "อีบุ๊ก: คู่มือเศรษฐีน้อยวัยใส",
        price: 160,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000038"),
        name: "บอร์ดเกมกอบกู้เมืองด้วยการลงทุน",
        price: 790,
        qty: 2
      }
    ],
    shipping_address: {
      recipient_name: "วีระ สุขยิ่ง",
      line1: "55/5 หมู่ 3 ถนนเพชรเกษม",
      line2: "ตำบลทับสะแก",
      district: "ทับสะแก",
      province: "ประจวบคีรีขันธ์",
      postal_code: "77130",
      country: "TH"
    },
    total_price: 2060,
    status: "pending",
    created_at: new Date("2026-02-22T13:22:16.301Z")
  },
  {
    _id: ObjectId("660000000000000000000060"),
    user_id: ObjectId("650000000000000000000087"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000024"),
        name: "บอร์ดเกมแข่งกันออมเงิน",
        price: 480,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000060"),
        name: "อีบุ๊ก: นิทานการเงินก่อนนอน",
        price: 130,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000016"),
        name: "การ์ดเกมสอนลูกรู้จักเงิน",
        price: 380,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา แซ่ลี้",
      line1: "88/9 หมู่ 4 ถนนศรีวิชัย",
      line2: "ตำบลมะขามเตี้ย",
      district: "เมืองสุราษฎร์ธานี",
      province: "สุราษฎร์ธานี",
      postal_code: "84000",
      country: "TH"
    },
    total_price: 2210,
    status: "paid",
    created_at: new Date("2026-03-27T01:17:41.554Z")
  },
  {
    _id: ObjectId("660000000000000000000061"),
    user_id: ObjectId("650000000000000000000041"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000005"),
        name: "บอร์ดเกมบริหารร้านขนมหวาน",
        price: 620,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000038"),
        name: "บอร์ดเกมกอบกู้เมืองด้วยการลงทุน",
        price: 790,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "นฤมล แจ่มใส",
      line1: "33/44 หมู่ 6 ซอยนาเกลือ 12",
      line2: "ตำบลนาเกลือ",
      district: "บางละมุง",
      province: "ชลบุรี",
      postal_code: "20150",
      country: "TH"
    },
    total_price: 1410,
    status: "completed",
    created_at: new Date("2026-01-11T08:38:22.279Z")
  },
  {
    _id: ObjectId("660000000000000000000062"),
    user_id: ObjectId("650000000000000000000052"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000092"),
        name: "นิทานภาพ: เมื่อของเล่นราคาแพงเกินไป",
        price: 105,
        qty: 2
      },
      {
        product_id: ObjectId("65b000000000000000000055"),
        name: "วิดีโอสอน: แยกแยะความจำเป็นและความต้องการ",
        price: 250,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ประเสริฐ เจริญทรัพย์",
      line1: "33/4 หมู่บ้านลัดดาวัลย์ ถนนศรีนครินทร์",
      line2: "ตำบลบางแก้ว",
      district: "บางพลี",
      province: "สมุทรปราการ",
      postal_code: "10540",
      country: "TH"
    },
    total_price: 460,
    status: "paid",
    created_at: new Date("2026-02-02T01:08:11.826Z")
  },
  {
    _id: ObjectId("660000000000000000000063"),
    user_id: ObjectId("650000000000000000000080"),
    items: [
      {
        product_id: ObjectId("65b000000000000000000092"),
        name: "นิทานภาพ: เมื่อของเล่นราคาแพงเกินไป",
        price: 105,
        qty: 3
      },
      {
        product_id: ObjectId("65b000000000000000000005"),
        name: "บอร์ดเกมบริหารร้านขนมหวาน",
        price: 620,
        qty: 1
      },
      {
        product_id: ObjectId("65b000000000000000000068"),
        name: "วิดีโอสอน: เงินเฟ้อคืออะไร (ฉบับเด็ก)",
        price: 240,
        qty: 1
      }
    ],
    shipping_address: {
      recipient_name: "ธิดา รักดี",
      line1: "66/6 หมู่ 1 ถนนอุดรดุษฎี",
      line2: "ตำบลหมากแข้ง",
      district: "เมืองอุดรธานี",
      province: "อุดรธานี",
      postal_code: "41000",
      country: "TH"
    },
    total_price: 1175,
    status: "paid",
    created_at: new Date("2026-03-11T02:36:40.637Z")
  }
]);

db.orders.find({});
