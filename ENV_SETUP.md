# Environment Variables Kurulumu

Bu uygulamanın çalışması için aşağıdaki environment variables'ları ayarlamanız gerekiyor:

## 1. .env Dosyası Oluşturun

Proje kök dizininde `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```
REACT_APP_APP_ID=your_edamam_app_id
REACT_APP_APP_KEY=your_edamam_app_key
REACT_APP_apiKey=your_firebase_api_key
REACT_APP_authDomain=your_firebase_auth_domain
REACT_APP_projectId=your_firebase_project_id
REACT_APP_storageBucket=your_firebase_storage_bucket
REACT_APP_messagingSenderId=your_firebase_messaging_sender_id
REACT_APP_appId=your_firebase_app_id
```

## 2. Edamam API Anahtarları

1. [Edamam Recipe API](https://developer.edamam.com/edamam-recipe-api) sitesine gidin
2. Ücretsiz hesap oluşturun
3. Recipe Search API için uygulama oluşturun
4. Application ID ve Application Key'i alın

## 3. Firebase Yapılandırması

1. [Firebase Console](https://console.firebase.google.com/) gidin
2. Yeni proje oluşturun
3. Authentication'ı etkinleştirin (Email/Password ve Google)
4. Project Settings > General > Your apps > Web app ekleyin
5. Config objesindeki değerleri kopyalayın

## 4. Uygulamayı Çalıştırın

```bash
npm start
```

**Not:** Environment variables'ları ayarlamadan uygulama çalışmayacaktır.
