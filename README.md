# PlanIQ - AI-Powered Daily Planning App

## 🚀 Deployment Instructions

### Netlify ile Deploy Etme:

1. **Netlify'e git:** https://netlify.com
2. **"New site from Git"** seç
3. **GitHub repository** bağla (veya dosyaları sürükle-bırak)
4. **Build settings:**
   - Build command: `echo "No build needed"`
   - Publish directory: `.` (root)
5. **Deploy!**

### Vercel ile Deploy Etme:

1. **Vercel'e git:** https://vercel.com
2. **"Import Project"** seç
3. **GitHub repository** bağla
4. **Deploy!**

## 🔧 Local Development

```bash
# Netlify CLI ile
npm install -g netlify-cli
netlify dev

# Veya sadece index.html'i aç
# (AI özellikleri çalışmaz, sadece fallback)
```

## ✨ Features

- 🤖 **AI Restaurant Suggestions** - Gemini AI ile gerçek restoran önerileri
- 🍳 **AI Recipe Suggestions** - Öğün bazlı tarif önerileri
- 📍 **Location-based** - Kullanıcının şehrine özel öneriler
- 🌍 **Global Support** - Dünyanın her yerinden kullanılabilir
- 📱 **Responsive Design** - Mobil uyumlu
- 🌙 **Dark/Light Mode** - Tema desteği

## 🔑 API Keys

Gemini API key'i profil sayfasından eklenebilir veya varsayılan key kullanılır.