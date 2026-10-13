# Ateam landing page (React + Vite)

## Ажиллуулах

```bash
npm install      # анх нэг удаа
npm run dev      # http://localhost:5173
npm run build    # dist/ хавтсанд бэлэн сайт гаргана
```

## Юуг хаана засах вэ

| Засах зүйл | Файл |
|---|---|
| **Бүх текст (MN / EN)** | `src/content.js` |
| Анхны хэл, хөдөлгөөн унтраах, курсор | `src/config.js` |
| Өнгө, фонт, зай (design tokens) | `src/styles/global.css` → `:root` |
| Хэсгүүдийн дараалал | `src/App.jsx` |
| Тухайн хэсгийн бүтэц / загвар | `src/components/<Хэсэг>.jsx` + `.css` |
| Зураг | `src/assets/images/` |

## Бүтэц

```
src/
├─ content.js          ← бүх текст энд
├─ config.js           ← тохиргоо
├─ i18n.jsx            ← хэл солих: useLang() → { t, lang, toggleLang }
├─ App.jsx             ← хуудасны хэсгүүд
├─ components/
│  ├─ Nav              ← цэс, MN/EN товч
│  ├─ Hero             ← гарчиг, зураг, 16+ / TOP 20 / 6 тоо
│  ├─ Ribbons          ← гүйдэг хоёр налуу тууз
│  ├─ About            ← 01 Бидний тухай
│  ├─ Advantages       ← 02 Давуу тал (6 карт)
│  ├─ Products         ← 03 Бүтээгдэхүүн
│  ├─ OyuTolgoi        ← 04 Оюу Толгой
│  ├─ Partners         ← 05 Түншүүд
│  ├─ Contact          ← 06 Холбоо барих + үнийн санал форм
│  └─ Footer
├─ motion/             ← хөдөлгөөн (ихэвчлэн засах шаардлагагүй)
│  ├─ Reveal.jsx       ← <Reveal type="up|photo|wipe|slash">, <RevealLine>
│  ├─ CountUp.jsx      ← 0-ээс тоолох тоо
│  ├─ Magnetic.jsx     ← хулгана руу татагддаг товч
│  ├─ Cursor.jsx       ← дугуй курсор
│  └─ useScrollEffects.js ← parallax, marquee, progress bar, data-* attribute-ууд
└─ styles/
   ├─ global.css       ← өнгө, фонт, нийтлэг класс
   └─ fonts.css        ← Unbounded, Manrope, JetBrains Mono (локал)
```

## Жишээ

**Текст засах** — `src/content.js`:
```js
lead: { mn: 'Шинэ текст…', en: 'New text…' },
```

**Шинэ бүтээгдэхүүн нэмэх** — `products.items` массивт нэг мөр нэмнэ:
```js
{ name: { mn: 'Шинэ ангилал', en: 'New category' }, brands: 'BRAND · TYPE' },
```

**Компонент дотор текст харуулах:**
```jsx
const { t } = useLang();
<p>{t(about.statement)}</p>
```

## Анхаарах

- Контакт форм одоогоор зөвхөн "Баярлалаа" гэж харуулдаг. Жинхэнэ илгээлт хийхийн тулд `Contact.jsx` дахь `handleSubmit` доторх `TODO`-г backend эсвэл и-мэйл үйлчилгээгээр солино.
- Зургууд нь PNG, 1.5 MB орчим хэмжээтэй. Сайтаа нийтлэхээс өмнө WebP руу хөрвүүлэхийг зөвлөж байна.
