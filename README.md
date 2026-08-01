# healthos-website

موقع تسويقي لعرض ميزات HealthOS، مع أزرار اشتراك حقيقية تُحوّل المستخدم إلى **Nexa** (منصة إدارة الاشتراكات) — بدون أي دفع أو checkout داخل هذا الموقع نفسه (حسب الطلب).

## قبل الرفع — خطوتين

**1. حالة Nexa الحالية (غير مُطلق بعد):**
كل أزرار الاشتراك ("اشترك الآن"، "ابدأ تجربة مجانية"، "ابدأ الآن") حاليًا تفتح نافذة "قريبًا" بدل ما تودّي لرابط ميت — تجمع بريد الزائر لحد ما Nexa يُطلق. ما فيه أي باك اند مربوط فعليًا بنموذج البريد هذا (لازم تربطه بخدمة زي Mailchimp/Resend أو جدول Supabase).

**2. بمجرد إطلاق Nexa فعليًا:**
افتح `index.html` ودوّر على هذا الجزء بالأعلى داخل `<script>`:
```js
var NEXA_LIVE = false;                                    // ← غيّرها إلى true
var NEXA_BASE = "https://subscribe.nexa.app/checkout";    // ← وحط رابط Nexa الحقيقي
```
بمجرد `NEXA_LIVE = true`، كل الأزرار تتحول تلقائيًا لتوديك مباشرة لـ Nexa (مع `?plan=...` حسب الباقة) بدل نافذة "قريبًا".

## رفعه على GitHub (healthos-website)

```bash
git clone https://github.com/<username>/healthos-website.git
cd healthos-website
# انسخ index.html هنا
git add .
git commit -m "HealthOS marketing site"
git push origin main
```

## النشر على Vercel

- استيراد الريبو مباشرة، بدون أي Framework Preset (Static/Other) — الموقع HTML خام بدون خطوة بناء.
- Root Directory = جذر الريبو (طالما `index.html` بجذره مباشرة).

## بنية الموقع

- ملف واحد (`index.html`) — CSS و JS مضمّنة، بدون أي خطوة تثبيت أو بناء.
- الخطوط عبر Google Fonts CDN (IBM Plex Sans Arabic / Mono) — نفس خطوط تطبيق HealthOS نفسه، بدل Inter (لأن المحتوى عربي RTL حقيقي).
- **لا يوجد GSAP أو أي مكتبة حركة خارجية** — كل الحركة عبر IntersectionObserver + requestAnimationFrame + Canvas API فقط، بنفس روح المرجع التقني.
- خلفية "جوّية" (atmosphere) عبر Canvas تستجيب للسكرول (lerp-smoothed) بدل الفيديو المرجعي — لأنه ما فيه أصل فيديو مرخّص لنا نستخدمه.
- نظام زجاجي (glassmorphism) حقيقي: `backdrop-filter: blur()` + حدود شفافة بيضاء، أزرار أساسية بيضاء/أسود، والذهبي (لون HealthOS) محصور بلمسات صغيرة فقط (الأرقام، الشارات، الكيكر) — لا تعبئات كبيرة.
- المحتوى يعكس ميزات HealthOS الفعلية المبنية فقط (لا ميزات وهمية).
