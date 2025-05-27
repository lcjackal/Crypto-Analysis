# Kripto Analiz Programı

## Proje Hakkında
Kripto Analiz Programı, kripto para piyasalarını analiz etmek ve kullanıcıların potansiyel yatırım fırsatlarını belirlemelerine yardımcı olmak amacıyla geliştirilmiş bir uygulamadır. Program, kullanıcıların belirlediği filtreleme kriterlerine göre verileri toplayarak, "Yükseliş Radarı", "Tespit Edilen Hareketler" ve "Potansiyel Fırsatlar" tablolarını oluşturarak, kripto paraların fiyat hareketlerini analiz eder.

## Amaç
Bu programın temel amacı, likiditesi ve günlük hacmi düşük olan kripto paraların potansiyel çıkışlarını önceden tespit etmek ve kullanıcıya gerçek zamanlı, doğru ve güvenilir veriler sunmaktır. Kullanıcılar, belirledikleri filtreleme seçeneklerine göre kripto paraları analiz edebilir ve yatırım kararlarını daha bilinçli bir şekilde verebilirler.

## Çalışma Yapısı
Program, aşağıdaki ana bileşenlerden oluşmaktadır:

- **Ana Uygulama (app.ts)**: Uygulamanın giriş noktasıdır. Bileşenleri entegre eder ve yönlendirme işlemlerini yönetir.
- **Bileşenler**:
  - **Sidebar**: Kullanıcıların menü seçenekleri arasında geçiş yapmasını sağlar.
  - **MainPanel**: Seçilen menüye göre ana içeriği dinamik olarak gösterir.
  - **Watchlist**: Kullanıcıların takip etmek istedikleri kripto paraları yönetir.
  - **Settings**: Kullanıcı ayarlarını yapılandırmak için bir arayüz sunar.
  - **Tablolar**: Farklı analiz tablolarını gösterir (Yükseliş Radarı, Tespit Edilen Hareketler, Potansiyel Fırsatlar).

## Algoritmalar
Program, aşağıdaki algoritmaları kullanarak verileri işler:

1. **Veri Toplama**: Farklı kaynaklardan (API'ler, web scraping vb.) veri toplayarak, kullanıcı tarafından belirlenen filtreleme kriterlerine göre analiz yapar.
2. **Güven Skoru Hesaplama**: Toplanan verilerin doğruluğunu ve güvenilirliğini değerlendirmek için farklı veri toplama yöntemlerinden elde edilen sonuçları karşılaştırır.
3. **Tahmin Algoritması**: Makine öğrenimi teknikleri kullanarak, geçmiş verilere dayanarak kripto paraların gelecekteki fiyat hareketlerini tahmin eder.
4. **Filtreleme ve Sıralama**: Kullanıcı tarafından belirlenen kriterlere göre verileri filtreler ve sıralar.

## Kurulum ve Kullanım
1. **Gereksinimler**: Node.js ve npm yüklü olmalıdır.
2. **Kurulum**:
   - Proje dizinine gidin.
   - `npm install` komutunu çalıştırarak bağımlılıkları yükleyin.
3. **Çalıştırma**:
   - `npm start` komutunu kullanarak uygulamayı başlatın.

## Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz, lütfen bir pull request oluşturun veya sorunları bildirin. Her türlü katkı ve geri bildirim memnuniyetle karşılanacaktır.

## Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için lütfen LICENSE dosyasını kontrol edin.