// ───────────────────────────────────────────────────────────────
//  Сайтын бүх текст энд байна. Текст засахдаа зөвхөн энэ файлыг засна.
//  All site copy lives here. Each string is { mn, en }.
//  "\n" = мөр шилжүүлэх (line break).
// ───────────────────────────────────────────────────────────────

export const nav = {
  links: [
    { href: '#about', label: { mn: 'Бидний тухай', en: 'About' } },
    { href: '#products', label: { mn: 'Бүтээгдэхүүн', en: 'Products' } },
    { href: '#oyutolgoi', label: { mn: 'Оюу Толгой', en: 'Oyu Tolgoi' } },
    { href: '#partners', label: { mn: 'Түншүүд', en: 'Partners' } },
  ],
  contact: { mn: 'Холбогдох', en: 'Contact' },
};

export const hero = {
  eyebrow: { mn: '2008 оноос · Улаанбаатар, Монгол', en: 'Since 2008 · Ulaanbaatar, Mongolia' },
  // Гарчгийн мөр бүр; сүүлийн мөр улаан өнгөтэй.
  title: {
    mn: ['Зүгээр нэг', 'баг биш —', 'бид бол Ateam.'],
    en: ['Not just', 'any team —', 'we are the Ateam.'],
  },
  lead: {
    mn: 'Монгол Улсын уул уурхай, барилгын салбарт дэлхийн түвшний үйлдвэрлэлийн бүтээгдэхүүн, шийдлийг нийлүүлдэг импортлогч компани.',
    en: "An importing company delivering world-class industrial products and solutions to Mongolia's mining and construction industries.",
  },
  primaryCta: { mn: 'Бүтээгдэхүүн үзэх', en: 'Explore products' },
  secondaryCta: { mn: 'Бидний тухай', en: 'About us' },
  badge: { ring: 'NOT JUST ANY TEAM · WE ARE THE ATEAM ·', small: 'SINCE', year: '2008' },
  stats: [
    { prefix: '', value: 16, suffix: '+', label: { mn: 'жил тасралтгүй\nүйл ажиллагаа', en: 'years of continuous\noperations' } },
    { prefix: 'TOP ', value: 20, suffix: '', label: { mn: 'Оюу Толгойн\nнийлүүлэгч', en: 'Oyu Tolgoi\nsupplier' } },
    { prefix: '', value: 6, suffix: '', label: { mn: 'дэлхийн брэндийн\nалбан ёсны дистрибьютор', en: 'global brands —\nofficial distributor' } },
  ],
};

// Хоёр налуу гүйдэг тууз (hero-ийн доор)
export const ribbons = {
  brands: ['Climax', 'Camfil', '3M', 'Frico', 'Steel Blue', 'Safety Whips'],
  categories: {
    mn: ['Аж үйлдвэр', 'Аюулгүй ажиллагаа', 'Электроник', 'Цахилгаан, холбоо', 'Орчны хяналт', 'Үйлдвэрийн шүүлтүүр'],
    en: ['Industry', 'Safety & Security', 'Electronics', 'Electrical & Communications', 'Environmental Control', 'Industrial Filtration'],
  },
};

export const about = {
  label: { mn: 'Бидний тухай', en: 'About us' },
  statement: {
    mn: 'Ateam ХХК 2008 онд байгуулагдсан. Орон нутгийн жижиг бизнесээс бүс нутгийн хамгийн том импортлогч компаниудын нэг болж өсөн, дэлхийн томоохон уурхайн төсөл болох Оюу Толгойн шилдэг 20 нийлүүлэгчийн тоонд багтсан.',
    en: "Ateam LLC was established in 2008. From a small local business, we have grown into one of the largest importing companies in the region — and one of the top 20 suppliers to Oyu Tolgoi, one of the world's largest mining projects.",
  },
  facts: [
    { title: { mn: 'Төв оффис', en: 'Headquarters' }, text: { mn: 'Улаанбаатар хот, Хан-Уул дүүрэг, TV5 оффис', en: 'TV5 office, Khan-Uul district, Ulaanbaatar' } },
    { title: { mn: 'Агуулах', en: 'Warehouse' }, text: { mn: 'Гол замын ойролцоо, ачих буулгахад хялбар агуулахын систем', en: 'A warehouse system by a main avenue for easy loading and unloading' } },
    { title: { mn: 'Өсөлтийн стратеги', en: 'Growth strategy' }, text: { mn: 'Оюу Толгойн уурхайгаас ~8 км зайд илүү том агуулах барих', en: 'A larger warehouse ~8 km from the Oyu Tolgoi mine site' } },
  ],
  caption: { mn: 'Ateam баг', en: 'The Ateam' },
  captionPlace: 'Ulaanbaatar · MN',
};

export const advantages = {
  label: { mn: 'Яагаад Ateam', en: 'Why Ateam' },
  title: { mn: 'Бидний давуу тал', en: 'Our advantages' },
  items: [
    { title: { mn: 'Уул уурхайн тэргүүлэх нийлүүлэгч', en: 'Top supplier in mining' }, text: { mn: 'Оюу Толгойн шилдэг 20 нийлүүлэгчийн нэг.', en: "One of Oyu Tolgoi's top 20 suppliers." } },
    { title: { mn: 'Дэлхийн түншлэл', en: 'Global partnerships' }, text: { mn: 'Дэлхийн тэргүүлэх үйлдвэрлэгчдийн албан ёсны дистрибьютор.', en: 'Official distributor for leading global manufacturers.' } },
    { title: { mn: 'Тогтвортой үйл ажиллагаа', en: 'Sustainable operations' }, text: { mn: 'Эрүүл мэнд, аюулгүй байдал, байгаль орчны бодлого бол бидний амжилтын үндэс.', en: 'Health, safety and environmental policy is the basis of our success.' } },
    { title: { mn: 'Өргөн туршлага', en: 'Extensive experience' }, text: { mn: 'Бүрэн үйлчилгээтэй нийлүүлэлтийн 16+ жилийн туршлага.', en: '16+ years of experience in full-service delivery.' } },
    { title: { mn: 'Тогтмол, найдвартай нийлүүлэлт', en: 'Regular & reliable supply' }, text: { mn: 'Үйлдвэрлэгчээс шууд авдаг тул нэгжийн өртөг бага, чанар баталгаатай.', en: 'Bought directly from manufacturers — low unit cost, assured quality.' } },
    { title: { mn: 'Батлагдсан амжилт', en: 'Proven track record' }, text: { mn: 'Орон нутгийн жижиг бизнесээс олон улсын тоглогч болтлоо.', en: 'From a small local business to an international player.' } },
  ],
};

export const products = {
  label: { mn: 'Бүтээгдэхүүн', en: 'Products' },
  title: { mn: ['Салбарт хэрэгтэй', 'бүхэн.'], en: ['Everything', 'industry needs.'] },
  items: [
    { name: { mn: 'Аж үйлдвэр', en: 'Industry' }, brands: 'CLIMAX · PORTABLE MACHINING & WELDING' },
    { name: { mn: 'Аюулгүй ажиллагаа, хамгаалалт', en: 'Safety & Security' }, brands: '3M · STEEL BLUE · SAFETY WHIPS' },
    { name: { mn: 'Электроник', en: 'Electronics' }, brands: 'DISPLAY · ELECTRONICS' },
    { name: { mn: 'Цахилгаан, холбоо', en: 'Electrical & Communications' }, brands: 'POWER · COMMUNICATIONS' },
    { name: { mn: 'Орчны хяналтын шийдэл', en: 'Environmental Control Solutions' }, brands: 'FRICO · CLIMATE CONTROL' },
    { name: { mn: 'Үйлдвэрийн шүүлтүүрийн систем', en: 'Industrial Filtration Systems' }, brands: 'CAMFIL · AIR FILTRATION' },
  ],
};

export const oyuTolgoi = {
  label: { mn: 'Итгэлцэл', en: 'Trust' },
  headline: { mn: 'Оюу Толгойн шилдэг 20 нийлүүлэгчийн нэг', en: "One of Oyu Tolgoi's top 20 suppliers" },
  body: {
    mn: 'Өмнөговь аймагт орших Оюу Толгой нь дэлхийн хамгийн том зэс, алтны ордуудын нэг бөгөөд хамгийн орчин үеийн, аюулгүй, тогтвортой уурхайнуудын нэг. Бид түүний найдвартай нийлүүлэлтийн гинжин хэлхээний нэг хэсэг.',
    en: "Oyu Tolgoi, in Mongolia's Umnugovi province, is one of the largest known copper and gold deposits in the world — and one of the most modern, safe and sustainable operations. We are part of its secure, in-country supply chain.",
  },
  distanceLabel: { mn: 'Уурхайн талбайгаас шинэ агуулах хүртэлх төлөвлөсөн зай', en: 'Planned distance from the mine site to our new warehouse' },
  region: { mn: 'Өмнөговь', en: 'Umnugovi' },
  regionLabel: { mn: 'Дэлхийн түвшний уурхайн төсөл', en: 'A world-class mining project' },
};

export const partners = {
  label: { mn: 'Түншүүд', en: 'Partners' },
  title: { mn: ['Албан ёсны', 'дистрибьютор.'], en: ['Official', 'distributor of.'] },
  items: [
    { name: 'Climax', field: 'MACHINING · WELDING' },
    { name: 'Camfil', field: 'AIR FILTRATION' },
    { name: '3M', field: 'SAFETY · INDUSTRIAL' },
    { name: 'Frico', field: 'CLIMATE CONTROL' },
    { name: 'Steel Blue', field: 'SAFETY FOOTWEAR' },
    { name: 'Safety Whips', field: 'HOSE SAFETY' },
  ],
};

export const contact = {
  label: { mn: 'Холбоо барих', en: 'Contact' },
  title: { mn: ['Хамтдаа', 'ажиллая.'], en: ["Let's work", 'together.'] },
  phoneMain: { display: '+976 7011-4000', href: 'tel:+97670114000' },
  email: 'sales@ateam.mn',
  phones: '+976 9400 8741\n+213-283-8077',
  address: {
    mn: 'Хан-Уул дүүрэг, 2-р хороо, TV5 оффис, 7 давхар, Улаанбаатар',
    en: 'Khan-Uul district, 2nd khoroo, TV5 office, 7th floor, Ulaanbaatar',
  },
  web: { display: 'www.ateam.mn', href: 'https://www.ateam.mn' },
  labels: {
    email: { mn: 'И-мэйл', en: 'Email' },
    phone: { mn: 'Утас', en: 'Phone' },
    address: { mn: 'Хаяг', en: 'Address' },
    web: { mn: 'Web', en: 'Web' },
  },
  form: {
    title: { mn: 'Үнийн санал авах', en: 'Request a quote' },
    name: { mn: 'Таны нэр', en: 'Your name' },
    phone: { mn: 'Утас эсвэл и-мэйл', en: 'Phone or email' },
    message: { mn: 'Ямар бүтээгдэхүүн хэрэгтэй вэ?', en: 'What products do you need?' },
    send: { mn: 'Илгээх', en: 'Send' },
    thanks: { mn: 'Баярлалаа! Бид удахгүй холбогдоно.', en: "Thank you! We'll be in touch soon." },
  },
};

export const footer = {
  tagline: { mn: 'Зүгээр нэг баг биш — бид бол Ateam.', en: 'Not just any team, we are the Ateam.' },
  backToTop: { mn: 'Дээш буцах', en: 'Back to top' },
  copyright: '© 2026 ATEAM LLC',
  place: 'ULAANBAATAR, MONGOLIA',
};
