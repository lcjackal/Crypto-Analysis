# KRIPTO ANALİZ PROGRAMI

Programın ana görünümü, sol tarafta bir **Slide Bar** ve sağ tarafta bir **Ana Pencere** olarak tasarlanacaktır.

## Slide Bar Detayları

Sol tarafta yer alan **Slide Bar**, programın tüm arayüzünde gezinmeyi sağlayan bir paneldir. Bu bölüm, **Panel**, **İzleme Listesi** ve **Ayarlar** adında üç ana buton içerir. Ayrıca tarama filtrelerini değiştirebileceğimiz bir pencere olarak tasarlanacaktır. Slide Bar, gizlenebilir özellikte olacaktır.

### Slide Bar Filtreleme Seçenekleri
- **Minimum Günlük Hacim (USD)**  
- **Maksimum Günlük Hacim (USD)**  
- **Minimum Beklenen Fiyat Değişimi (%)**  
- **Değişim Fiyat/Zaman Aralığı (USD/t)**  
  *(Bu filtre, kullanıcının belirlediği 15 dakikalık, 4 saatlik, 1 günlük veya 1 haftalık gibi çeşitli zaman dilimlerinde coinlerdeki fiyat dalgalanmalarının yaklaşık süresini belirlemek için kullanılır.)*

**Not**: Program geliştirici ismi **"Jackal"**, Slide Bar’ın altına bir yere yazılacaktır. Bu detay, görsellerde yer almamaktadır ve tasarım aşamasında eklenecektir.

## Ana Pencere Detayları

Ana Pencere, Slide Bar’da seçilen menülerin (Panel, İzleme Listesi, Ayarlar) içeriğini gösteren bölümdür. Arayüz detayları, aşağıdaki görselde belirtilmiştir:  
[**Ana Ekran Görseli**](https://hizliresim.com/9cultce)

Bu görsel, Slide Bar ve Ana Pencere için referans olarak kullanılmıştır ve programın arayüz tasarımının temelini oluşturur. Görselde yer alan **"Yükseliş Radarı"**, **"Tespit Edilen Hareketler"** ve **"Potansiyel Fırsatlar"** tabloları, aynen bu isimlerle **Panel** menüsüne entegre edilecektir. Tabloların üst kısmında belirtilen kısayollar (Tabloyu gizle/göster, CSV formatında kaydetme, arama yapma, tam ekran) görselde açıklanmıştır ve programa eklenecektir.

### Yükseliş Radarı Çalışma Mantığı ve Amacı

Programın amacı, likiditesi ve günlük hacmi düşük olan coinlerdeki muhtemel fiyat çıkışlarını önceden tespit ederek gerçek zamanlı ve doğru verilere ulaşmaktır. Kripto para piyasasını izleyerek yüklü alım yapılması muhtemel coinleri tespit edecek ve tahmini ulaşabilecekleri fiyatı belirleyecek bir algoritma geliştirilecektir. Algoritma, kullanıcının belirlediği filtrelere göre **Yükseliş Radarı**, **Tespit Edilen Hareketler** ve **Potansiyel Fırsatlar** tablolarında sağlıklı, doğru, kaliteli ve gerçek zamanlı veriler sunmayı hedefler. Tahminlerin **%90 ve üzeri doğruluk** oranına ulaşması amaçlanmaktadır.

### Yükseliş Radarı Tablosu
**Yükseliş Radarı**, veri toplama yöntemleriyle tarama yapılırken bulunan coinleri listeler. Veriler, **Veri Toplama Yöntemleri** ve **Temel Göstergeler ve Veri Kaynakları (Gösterge Kodları)** kullanılarak işlenir.

**Tablo Hücre Başlıkları**:
- Logo Sembol
- İsim
- Mevcut Fiyat
- Değişim 24% (24 saatlik değişim)
- Günlük Hacim
- Alış Baskısı
- Satış Baskısı
- Alış/Satış Baskı Oranı

**Not**: Görselde yer almayan özellikler, kodlama aşamasında eklenecektir.

### Tespit Edilen Hareketler Tablosu
Bu tablo, **Yükseliş Radarı**’nda yer alan coinlerin, kullanıcının belirlediği filtreleme seçeneklerine göre süzülmüş listesini içerir.

**Tablo Hücre Başlıkları**:
- Logo Sembol
- İsim
- Mevcut Fiyat
- Hedef Fiyat
- Potansiyel Değişim (Tahmin algoritmasının öngördüğü hedef değişim)
- Günlük Hacim
- Alış/Satış Baskı Oranı
- Güven Skoru
- Tahmini Süre (Hedef fiyata ulaşma süresi)

### Potansiyel Fırsatlar Tablosu
Bu tablo, kullanıcının filtrelerinde seçmediği ancak programın otomatik olarak tespit ettiği coinleri listeler.

**Tablo Hücre Başlıkları**:
- Logo Sembol
- İsim
- Mevcut Fiyat
- Hedef Fiyat
- Potansiyel Değişim (Tahmin algoritmasının öngördüğü hedef değişim)
- Günlük Hacim
- Alış/Satış Baskı Oranı
- Güven Skoru
- Tahmini Süre (Hedef fiyata ulaşma süresi)

## Veri Toplama Yöntemleri

Aşağıda, 1–22 numaralı veri toplama yöntemleri, kullanım detayları, gerçek zamanlılık düzeyleri, sağladığı veri türleri ve **Temel Göstergeler ve Veri Kaynakları (Gösterge Kodları)** ile eşleştirmeleri yer almaktadır.

### Temel Göstergeler ve Veri Kaynakları (Gösterge Kodları)
- **G1**: Hacim Analizi
- **G2**: Fiyat Değişim Hızı ve Momentum
- **G3**: Order Book & Likidite
- **G4**: Büyük İşlem (Whale) Aktivitesi
- **G5**: Türev Piyasalar & Fonlama Oranları
- **G6**: Sosyal Medya & Haber Akışı
- **G7**: Gerçek Zamanlı Veri Toplama Yöntemleri
- **G8**: Anomali Tespiti & Otomatik Uyarı Sistemleri
- **G9**: Görselleştirme & Dashboard
- **G10**: Wash Trading Tespiti
- **G11**: Spoofing & Layering
- **G12**: Order Book Slippage
- **G13**: Stop Loss Avcılığı & Mikro Yapı Saldırıları
- **G14**: Stablecoin Peg & Teminat Şokları
- **G15**: Phishing & Güvenlik Olayı İzleme
- **G16**: Graf Temelli Haber Yayılımı & Zirve Aktörleri Tespiti
- **G17**: İntraday Fiyat Sıçraması & Haber Duygu Analizi
- **G18**: Eşik & EWMA Tabanlı Anomali Modelleri
- **G19**: Piyasa Mikroyapısı Sinyalleri
- **G20**: Borsalar Arası Fiyat Farklılıkları ve Arbitraj
- **G21**: Mempool Dinamikleri
- **G22**: On Chain Aktivite Metrikleri
- **G23**: Türev Piyasalar Göstergeleri
- **G24**: Pump Archetype Sınıflandırması
- **G25**: Sosyal Grup ve Topluluk Metrikleri
- **G26**: Cüzdan Kümeleme & Net Akış Analizi
- **G27**: İleri Seviye Anomali Tespiti Yöntemleri
- **G28**: Haber & Düzenleyici Uyarıları
- **G29**: Davranışsal ve Tarihsel Desen Eşleştirme

### 1. CCXT (Unified Exchange APIs)
- **Kullanım**:
  ```python
  import ccxt
  exchange = ccxt.binance()
  order_book = exchange.fetch_order_book('BTC/USDT')
  trades = exchange.fetch_trades('BTC/USDT')
  ```
- **Gerçek-Zamanlı**: Polling veya WebSocket destekli.
- **Sağlanan Veri**: Order book, trade verisi, ticker.
- **İlgili Göstergeler**:
  - **G1**: Hacim Analizi – 24h hacim ve kısa dönem karşılaştırma
  - **G2**: Fiyat Değişim Hızı ve Momentum – Yüzde değişim, RSI, Bollinger
  - **G3**: Order Book & Likidite – Derinlik, spread
  - **G4**: Büyük İşlem Aktivitesi – Whale trade tespiti
  - **G7**: Gerçek Zamanlı Veri Toplama – REST/WebSocket stream
  - **G8**: Anomali Tespiti & Uyarılar – Rolling z-score, EWMA
  - **G12**: Order Book Slippage – Fiyat kayması ölçümü
  - **G20**: Borsalar Arası Arbitraj – Fiyat farklılıkları analizi

### 2. CoinMarketCap API
- **Kullanım**: HTTP GET
- **Gerçek-Zamanlı**: Pro plan saniyelik, ücretsiz dakikalık.
- **Sağlanan Veri**: Fiyat, 24h hacim, market cap, yeni listelenen.
- **İlgili Göstergeler**:
  - **G1**: Hacim Analizi – 24h hacim
  - **G2**: Fiyat Değişim Hızı ve Momentum – Yüzde değişim (1h/24h/7d)
  - **G5**: Türev Piyasalar & Fonlama – Open interest, funding rate
  - **G28**: Haber & Düzenleyici Uyarıları – Duyuru ve regülasyon haberleri

### 3. CoinGecko API
- **Kullanım**: Rate-limit olmadan HTTP GET
- **Gerçek-Zamanlı**: Dakikalık.
- **Sağlanan Veri**: Sosyal metrikler, trend coinler, community score.
- **İlgili Göstergeler**:
  - **G6**: Sosyal Medya & Haber – Mention hacmi, sentiment
  - **G14**: Stablecoin Peg & Teminat – Parite sapmaları analiz

### 4. Blockchain Explorer API
- **Kullanım**: Etherscan/BscScan REST
- **Gerçek-Zamanlı**: Blok gecikmeli.
- **Sağlanan Veri**: Token transfer, holder sayısı, kontrat etkileşimi.
- **İlgili Göstergeler**:
  - **G4**: Büyük İşlem Aktivitesi – On-chain whale transferler
  - **G15**: Phishing & Güvenlik – Şüpheli adres hareketleri
  - **G22**: On Chain Aktivite – Approve/transfer çağrıları

### 5. The Graph (GraphQL)
- **Kullanım**: Subgraph sorguları
- **Gerçek-Zamanlı**: Blok gecikmeli.
- **Sağlanan Veri**: DEX pair hacmi, likidite, işlem sayısı.
- **İlgili Göstergeler**:
  - **G3**: Order Book & Likidite – DEX likidite ve hacim
  - **G19**: Piyasa Mikroyapısı – Trade/order oranı, HFT sinyalleri

### 6. WebSocket Streaming
- **Kullanım**: Borsa WS endpoint’leri
- **Gerçek-Zamanlı**: <100ms.
- **Sağlanan Veri**: Trade ve depth event’leri.
- **İlgili Göstergeler**:
  - **G7**: Gerçek Zamanlı Veri Toplama – Anlık stream verisi
  - **G8**: Anomali Tespiti – Z-score anlık hesap
  - **G10**: Wash Trading Tespiti – Back-to-back trade pattern

### 7. Scraping & RSS/JSON
- **Kullanım**: BeautifulSoup, feedparser
- **Gerçek-Zamanlı**: Dakikalık polling.
- **Sağlanan Veri**: Haber, sosyal trend.
- **İlgili Göstergeler**:
  - **G6**: Sosyal Medya & Haber – RSS/JSON mention ve duyurular
  - **G28**: Haber & Düzenleyici – Yeni listeleme/regülasyon haberleri

### 8. Selenium
- **Kullanım**: Dinamik JS sayfa scraping
- **Gerçek-Zamanlı**: Render ~1–3s.
- **Sağlanan Veri**: Grafik görüntüleri.
- **İlgili Göstergeler**:
  - **G17**: İntraday Fiyat & Duygu – TradingView grafik analizi

### 9. Proxy / VPN
- **Kullanım**: IP rotasyonu
- **Gerçek-Zamanlı**: Evet.
- **Sağlanan Veri**: (Erişim altyapısı)
- **İlgili Göstergeler**: —

### 10. Bulk Data Dumps
- **Kullanım**: Kaiko/Nomics CSV/JSON
- **Gerçek-Zamanlı**: Günlük/haftalık.
- **Sağlanan Veri**: Tarihsel tick, order book.
- **İlgili Göstergeler**:
  - **G24**: Pump Archetype – Tarihsel pump desenleri eşleştirme
  - **G27**: İleri Anomali – Autoencoder, Isolation Forest

### 11. Mempool İzleme
- **Kullanım**: Node RPC
- **Gerçek-Zamanlı**: <1s.
- **Sağlanan Veri**: Pending tx, gas price.
- **İlgili Göstergeler**:
  - **G21**: Mempool Dinamikleri – On-chain pool sıçramaları, MEV

### 12. Volume Anomaly Detection Module
- **Kullanım**: Z-score, EWMA
- **Gerçek-Zamanlı**: Her tick.
- **Sağlanan Veri**: Hacim anomalisi.
- **İlgili Göstergeler**:
  - **G8**: Anomali Tespiti – Rolling window anomalileri

### 13. Social Media Monitoring
- **Kullanım**: LunarCrush, Santiment API
- **Gerçek-Zamanlı**: Dakikalık.
- **Sağlanan Veri**: Sentiment, mention hacmi.
- **İlgili Göstergeler**:
  - **G6**: Sosyal Medya & Haber – NLP sentiment analizi

### 14. Robots.txt Kontrolü
- **Kullanım**: robotparser
- **Gerçek-Zamanlı**: Scraping öncesi.
- **Sa