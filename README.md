# healthos-website

موقع تسويقي لعرض ميزات HealthOS، مع أزرار اشتراك حقيقية تُحوّل المستخدم إلى **Nexa** (منصة إدارة الاشتراكات) — بدون أي دفع أو checkout داخل هذا الموقع نفسه (حسب الطلب).

## بنية الموقع

### الصفحات
| الملف | الوصف |
|-------|-------|
| `index.html` | الصفحة الرئيسية |
| `pricing.html` | صفحة التسعير مع 3 باقات |
| `features.html` | صفحة الميزات المتقدمة |
| `blog.html` | صفحة المدونة والمقالات |
| `faq.html` | الأسئلة الشائعة |
| `about.html` | من نحن |
| `contact.html` | نموذج تواصل معنا |
| `privacy.html` | سياسة الخصوصية |
| `terms.html` | الشروط والأحكام |

### التقنيات المستخدمة
- **HTML/CSS/JS** - بدون frameworks أو build tools
- **Google Fonts** - IBM Plex Sans Arabic / Mono
- **Supabase SDK** - لجمع الإيميلات (اختياري)
- **Web Worker** - لتحسين أداء Canvas

## الإعداد

### 1. تفعيل Supabase لجمع الإيميلات
1. أنشئ مشروع على [Supabase](https://supabase.com)
2. أنشئ جدول `newsletter_subscribers`:
   ```sql
   CREATE TABLE newsletter_subscribers (
     id BIGSERIAL PRIMARY KEY,
     email TEXT NOT NULL UNIQUE,
     subscribed_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```
3. افتح `index.html` واستبدل القيم:
   ```js
   const SUPABASE_URL = 'https://xxxx.supabase.co';
   const SUPABASE_KEY = 'مفتاحك-العام';
   ```

### 2. تفعيل Nexa للاشتراكات
عند إطلاق Nexa، افتح أي ملف HTML واستبدل:
```js
var NEXA_LIVE = true;  // من false إلى true
var NEXA_BASE = "https://subscribe.nexa.app/checkout";
```

## النشر على Vercel

```bash
# استيراد الريبو مباشرة
# اختر: Framework Preset = Other (Static)
# Root Directory = /
```

## التطوير المحلي

```bash
# أي خادم ثابت سيفي بالغرض
python -m http.server 8000
# أو
npx serve
```

## الميزات المضافة حديثاً
- ✅ صفحة التسعير مع مقارنة الميزات
- ✅ صفحة المميزات المتقدمة
- ✅ المدونة مع 6 مقالات
- ✅ FAQ تفاعلي مع 15+ سؤال
- ✅ صفحة من نحن
- ✅ نموذج تواصل معنا
- ✅ سياسة الخصوصية والشروط
- ✅ Web Worker لأداء أفضل
- ✅ Lazy loading للصور
- ✅ تصميم متجاوب للجوال
