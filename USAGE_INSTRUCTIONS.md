# Recipe App Kullanım Talimatları

## 🚀 Uygulamayı Çalıştırma

### Geliştirme Modu (Development)

1. **Backend Server'ı Başlatın:**

    ```bash
    npm run server
    ```

    Backend server port 5000'de çalışacak.

2. **Frontend'i Başlatın (Yeni Terminal):**

    ```bash
    npm start
    ```

    Frontend port 3000'de çalışacak.

3. **Her İkisini Birlikte Başlatın:**
    ```bash
    npm run dev
    ```

### Production Modu

1. **Build Alın:**

    ```bash
    npm run build
    ```

2. **Production Server'ı Başlatın:**
    ```bash
    npm run server
    ```

## 🔧 Environment Variables

`.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
REACT_APP_APP_ID=your_edamam_app_id
REACT_APP_APP_KEY=your_edamam_app_key
```

**Not:** Eğer environment variables ayarlanmamışsa, uygulama default API anahtarlarını kullanacaktır.

## 📋 Özellikler

-   ✅ CORS sorunu çözüldü (Backend proxy ile)
-   ✅ Debounced search (500ms gecikme)
-   ✅ Loading ve error states
-   ✅ Responsive tasarım
-   ✅ Firebase Authentication
-   ✅ Protected routes
-   ✅ Real-time recipe search

## 🛠️ Teknik Detaylar

-   **Frontend:** React 17, React Router 6, Styled Components, Tailwind CSS
-   **Backend:** Express.js, CORS middleware
-   **API:** Edamam Recipe API
-   **Authentication:** Firebase Auth
-   **State Management:** React Context API

## 🐛 Sorun Giderme

### CORS Hatası

-   Backend server'ın çalıştığından emin olun (port 5000)
-   Frontend'in backend'e bağlanabildiğini kontrol edin

### API Hatası

-   Environment variables'ların doğru ayarlandığını kontrol edin
-   Edamam API anahtarlarının geçerli olduğunu kontrol edin

### Port Çakışması

-   Port 3000 veya 5000 kullanımda ise, farklı portlar kullanın
-   `PORT=3001 npm start` veya `PORT=5001 npm run server`
