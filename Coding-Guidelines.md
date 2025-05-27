KRIPTO ANALİZ PROGRAMI
Program ana görünüm olarak sol taraf Slide bar, Sağ taraf "Ana pencere" olarak tasarlanacak.

Slide Bar Detayları:
Sol Tarafta Slide bar olacak. Bu bölüm programın tüm ara yüzü içerisinde gezinmemizi sağlayan "Panel", "İzleme Listesi" ve "Ayarlar" olarak adlandırılan 3 ana butonu barındıran, tarama filtrelerini değiştirebildiğimiz bir pencere olarak tasarlanacak. Slide bar, gizlenebilir olacak. 

Slide Bar filtreleme seçenekleri;
Minimum Günlük Hacim (USD)
Maksimum Günlük Hacim (USD)
Minimum Beklenen Fiyat Değişimi (%)
Değişim Fiyat/Zaman Aralığı (usd/t) (Bu fitre göndereceğim görsellerde yok. Bu filtrenin amacı kullanıcının belirlediği 15 dakikalık, 4 saatlik,1 günlük veya 1haftalık gibi çeşitli varyasyonlarla coinlerdeki yaşanacak dalgalanmanın yaklaşık süresi ile ilgili filtredir)

Program geliştirici ismi "Jackal" bu panelin altına bir yere yazılacak. Bunun aşağıda vereceğim görsel detaylarında yok. Tasarım aşamasında eklenecek.

Ana Pencere Detayları:

Slide barda seçilen butonun (menünün) gösterileceği pencere burası olacak. Bu pencereyi detaylandırmak gerekirse menü menü adım adım her pencerenin görseli ve menü içindeki barındırdığı özellikler aşağıdaki linkte yer alan görselde  detaylıca verilmiştir. 

Ana Ekran ile ilgili görsel linki: “https://hizliresim.com/9cultce”

Yukarıdaki linkte verilen görsel sol taraftaki slide bar ve sağ taraftaki ana pencere için referans olarak verilmiştir. Yapılmak istenen programın ara yüzü ile ilgili bu dokümanda detaylandırılan yazının temelini oluşturmaktadır. "Yükseliş Radarı" tablosu , "Tespit Edilen Hareketler" tablosu ve "Potansiyel Fırsatlar" tablosu aynen bu isimlerle programa Panel menüsüne entegre edilecektir. Tablo sonunda üstte belirtilen ve tabloda olması istenen kısa yolların açıklamaları görselde belirtilmiştir. Tabloyu gizle/göster seçeneği, Tabloyu csv formatında kaydetme seçeneği, arama yapma seçeneği, tam ekran seçeneği ilgili kısayolların açıklamalarıdır.

Yükseliş Radarı çalışma mantığı ve amacı:

Bu programın amacı, likidesi ve günlük hacmi düşük olan coinlerde ki yaşanacak muhtemel çıkışları önceden tespit ederek, gerçek zamanlı ve doğru veriye ulaşmaktır. Kripto para piyasasını izleyerek yüklü alım yapılması muhtemel coinleri tespit ederek; tahmini ulaşabilecekleri fiyatı belirleyecek bir algoritma geliştirilecektir. Bu algoritmanın mantığı kullanıcının belirlediği fitrelere göre program ana penceresinde (Panel menüsünde) "Yükseliş Radarı", "Tespit Edilen Hareketler" ve "Potansiyel Fırsatlar" tablolarında istenen verinin sağlıklı veri, doğru veri, kaliteli veri, gerçek zamanlı veri, muhtemel en yakın %90 ve üzeri doğru tahmin yapabilmeyi hedeflemektedir.
 
"Yükseliş Radarı" tablosu ile ilgili temel bilgiler:
Yükseliş radarı tablosunda, "# Veri Toplama Yöntemleri" kullanılarak, kripto para piyasaları, web siteleri ve diğer kaynaklardan veri toplanacak. Toplanan veriler "## Temel Göstergeler ve Veri Kaynakları (Gösterge Kodları)" olarak belirtilen veri kaynaklarına göre işlenerek coinler hakkında veri toplanacak.

Yükseliş radarı tablosunda listelenecek coinler; veri toplama yöntemleri ile tarama yapılırken bulunan coinler olacak.
 
Tablo hücre başlıkları sırayla;
logo sembol, isim, Mevcut Fiyat, Değişim 24% (24 saatlik değişim), Günlük Hacim, Alış Baskısı, Satış Baskısı, Alış/Satış Baskı Oranı,
olarak gösterilecek. Linkteki (https://hizliresim.com/9cultce) görselde bulunmayıp açıklamalarla yapılmak istenen özellikler kodlama aşamasında eklenecek.

"Tespit Edilen Hareketler" tablosu ile ilgili temel bilgiler:
Tespit edilen hareketler tablosu yükseliş radarı tablosunda yer alan coinlerin verilerinin kullanıcının istediği filtreleme seçeneklerine göre süzülmüş listesi olacak. 
Tablo hücre başlıkları sırayla;
logo sembol, isim, Mevcut Fiyat, Hedef fiyat, Potansiyel Değişim (Tahmin algoritmasının ön gördüğü hedef değişim), Günlük Hacim, Alış/Satış Baskı Oranı, Güven Skoru, Tahmini süre (Hedef fiyata ulaşma süresi)



"Potansiyel Fırsatlar" tablosu ile ilgili temel bilgiler:
  
Potansiyel Fırsatlar tablosu ise kullanıcının filtresinde seçmediği ama programın otomatik olarak yakaladı coinlerin listelendiği tablo olacak.
Tablo hücre başlıkları sırayla;
logo sembol, isim, Mevcut Fiyat, Hedef fiyat, Potansiyel Değişim (Tahmin algoritmasının ön gördüğü hedef değişim), Günlük Hacim, Alış/Satış Baskı Oranı, Güven Skoru, Tahmini süre (Hedef fiyata ulaşma süresi)

# Veri Toplama Yöntemleri

Aşağıda 1–22 veri toplama yöntemleri, her birinin kullanım detayları, gerçek-zamanlılık düzeyleri, sağladığı veri türleri ve Temel Gösterge ve Veri Kaynakları listesindeki gösterge kodlarıyla eşleştirmeleri yer almaktadır. Her yöntemin altında ilgili gösterge kodları ve bu kodların açıklamaları bulunmaktadır.

---

## Temel Göstergeler ve Veri Kaynakları (Gösterge Kodları)

* **G1**: Hacim Analizi
* **G2**: Fiyat Değişim Hızı ve Momentum
* **G3**: Order Book & Likidite
* **G4**: Büyük İşlem (Whale) Aktivitesi
* **G5**: Türev Piyasalar & Fonlama Oranları
* **G6**: Sosyal Medya & Haber Akışı
* **G7**: Gerçek Zamanlı Veri Toplama Yöntemleri
* **G8**: Anomali Tespiti & Otomatik Uyarı Sistemleri
* **G9**: Görselleştirme & Dashboard
* **G10**: Wash Trading Tespiti
* **G11**: Spoofing & Layering
* **G12**: Order Book Slippage
* **G13**: Stop Loss Avcılığı & Mikro yapı Saldırıları
* **G14**: Stablecoin Peg & Teminat Şokları
* **G15**: Phishing & Güvenlik Olayı İzleme
* **G16**: Graf Temelli Haber Yayılımı & Zirve Aktörleri Tespiti
* **G17**: İntraday Fiyat Sıçraması & Haber Duygu Analizi
* **G18**: Eşik & EWMA Tabanlı Anomali Modelleri
* **G19**: Piyasa Mikroyapısı Sinyalleri
* **G20**: Borsalar Arası Fiyat Farklılıkları ve Arbitraj
* **G21**: Mempool Dinamikleri
* **G22**: On Chain Aktivite Metrikleri
* **G23**: Türev Piyasalar Göstergeleri
* **G24**: Pump Archetype Sınıflandırması
* **G25**: Sosyal Grup ve Topluluk Metrikleri
* **G26**: Cüzdan Kümeleme & Net Akış Analizi
* **G27**: İleri Seviye Anomali Tespiti Yöntemleri
* **G28**: Haber & Düzenleyici Uyarıları
* **G29**: Davranışsal ve Tarihsel Desen Eşleştirme

---

## 1. CCXT (Unified Exchange APIs)

* **Kullanım**: Python/Node kütüphanesi ile

  ```python
  import ccxt
  exchange = ccxt.binance()
  order\_book = exchange.fetch\_order\_book('BTC/USDT')
  trades = exchange.fetch\_trades('BTC/USDT')
  ```
* **Gerçek-Zamanlı**: Polling veya WebSocket destekli.
* **Sağlanan Veri**: Order book, trade verisi, ticker.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G1**: Hacim Analizi – 24h hacim ve kısa dönem karşılaştırma
* **G2**: Fiyat Değişim Hızı ve Momentum – Yüzde değişim, RSI, Bollinger
* **G3**: Order Book & Likidite – Derinlik, spread
* **G4**: Büyük İşlem Aktivitesi – Whale trade tespiti
* **G7**: Gerçek Zamanlı Veri Toplama – REST/WebSocket stream
* **G8**: Anomali Tespiti & Uyarılar – Rolling z-score, EWMA
* **G12**: Order Book Slippage – Fiyat kayması ölçümü
* **G20**: Borsalar Arası Arbitraj – Fiyat farklılıkları analizi

## 2. CoinMarketCap API

* **Kullanım**: HTTP GET
* **Gerçek-Zamanlı**: Pro plan saniyelik, ücretsiz dakikalık.
* **Sağlanan Veri**: Fiyat, 24h hacim, market cap, yeni listelenen.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G1**: Hacim Analizi – 24h hacim
* **G2**: Fiyat Değişim Hızı ve Momentum – Yüzde değişim (1h/24h/7d)
* **G5**: Türev Piyasalar & Fonlama – Open interest, funding rate
* **G28**: Haber & Düzenleyici Uyarıları – Duyuru ve regülasyon haberleri

## 3. CoinGecko API

* **Kullanım**: Rate-limit olmadan HTTP GET
* **Gerçek-Zamanlı**: Dakikalık.
* **Sağlanan Veri**: Sosyal metrikler, trend coins, community score.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G6**: Sosyal Medya & Haber – Mention hacmi, sentiment
* **G14**: Stablecoin Peg & Teminat – Parite sapmaları analiz

## 4. Blockchain Explorer API

* **Kullanım**: Etherscan/BscScan REST
* **Gerçek-Zamanlı**: Blok gecikmeli.
* **Sağlanan Veri**: Token transfer, holder sayısı, kontrat etkileşimi.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G4**: Büyük İşlem Aktivitesi – On-chain whale transferler
* **G15**: Phishing & Güvenlik – Şüpheli adres hareketleri
* **G22**: On Chain Aktivite – Approve/transfer çağrıları

## 5. The Graph (GraphQL)

* **Kullanım**: Subgraph sorguları
* **Gerçek-Zamanlı**: Blok gecikmeli.
* **Sağlanan Veri**: DEX pair hacmi, likidite, işlem sayısı.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G3**: Order Book & Likidite – DEX likidite ve hacim
* **G19**: Piyasa Mikroyapısı – Trade/order oranı, HFT sinyalleri

## 6. WebSocket Streaming

* **Kullanım**: Borsa WS endpoint’leri
* **Gerçek-Zamanlı**: <100ms.
* **Sağlanan Veri**: Trade ve depth event’leri.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G7**: Gerçek Zamanlı Veri Toplama – Anlık stream verisi
* **G8**: Anomali Tespiti – Z-score anlık hesap
* **G10**: Wash Trading Tespiti – Back-to-back trade pattern

## 7. Scraping & RSS/JSON

* **Kullanım**: BeautifulSoup, feedparser
* **Gerçek-Zamanlı**: Dakikalık polling.
* **Sağlanan Veri**: Haber, sosyal trend.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G6**: Sosyal Medya & Haber – RSS/JSON mention ve duyurular
* **G28**: Haber & Düzenleyici – Yeni listeleme/regülasyon haberleri

## 8. Selenium

* **Kullanım**: Dinamik JS sayfa scraping
* **Gerçek-Zamanlı**: Render \~1–3s.
* **Sağlanan Veri**: Grafik görüntüleri.
* **İlgili Göstergeler ve Kodlar**: G17
* **İlgili Göstergeler ve Veri Kaynakları 
* **G17**: İntraday Fiyat & Duygu – TradingView grafik analizi

## 9. Proxy / VPN

* **Kullanım**: IP rotasyonu
* **Gerçek-Zamanlı**: Evet.
* **Sağlanan Veri**: (Erişim alt yapısı)
* **İlgili Göstergeler ve Veri Kaynakları  —

## 10. Bulk Data Dumps

* **Kullanım**: Kaiko/Nomics CSV/JSON
* **Gerçek-Zamanlı**: Günlük/haftalık.
* **Sağlanan Veri**: Tarihsel tick, order book.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G24**: Pump Archetype – Tarihsel pump desenleri eşleştirme
* **G27**: İleri Anomali – Autoencoder, Isolation Forest

## 11. Mempool İzleme

* **Kullanım**: Node RPC
* **Gerçek-Zamanlı**: <1s.
* **Sağlanan Veri**: Pending tx, gas price.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G21**: Mempool Dinamikleri – On-chain pool sıçramaları, MEV

## 12. Volume Anomaly Detection Module

* **Kullanım**: Z-score, EWMA
* **Gerçek-Zamanlı**: Her tick.
* **Sağlanan Veri**: Hacim anomalisi.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G8**: Anomali Tespiti – Rolling window anomalileri

## 13. Social Media Monitoring

* **Kullanım**: LunarCrush, Santiment API
* **Gerçek-Zamanlı**: Dakikalık.
* **Sağlanan Veri**: Sentiment, mention hacmi.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G6**: Sosyal Medya & Haber – NLP sentiment analizi

## 14. Robots.txt Kontrolü

* **Kullanım**: robotparser
* **Gerçek-Zamanlı**: Scraping öncesi.
* **Sağlanan Veri**: İzin bilgisi.
* **İlgili Göstergeler ve Veri Kaynakları  —

## 15. Exchange Aggregators

* **Kullanım**: CryptoCompare, CoinAPI
* **Gerçek-Zamanlı**: Saniyelik.
* **Sağlanan Veri**: Normalize fiyat, hacim, spread.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G20**: Arbitraj – Borsalar arası fiyat farklılıkları

## 16. DEX Pool Snapshot

* **Kullanım**: On-chain snapshot
* **Gerçek-Zamanlı**: Blok gecikmeli.
* **Sağlanan Veri**: Havuz likidite, token oran.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G3**: Order Book & Likidite – DEX havuz derinliği

## 17. ML & Analytics Framework

* **Kullanım**: Scikit-learn, TensorFlow
* **Gerçek-Zamanlı**: ms.
* **Sağlanan Veri**: Tahmin, anomali.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G27**: İleri Anomali – Makine öğrenmesi tabanlı tespit

## 18. Hybrid RSS/WebSocket

* **Kullanım**: RSS + WS fallback
* **Gerçek-Zamanlı**: WS anlık.
* **Sağlanan Veri**: Haber + trade.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G6**: Sosyal Medya & Haber – RSS mention ve duyurular
* **G7**: Gerçek Zamanlı Veri Toplama – Trade stream fallback

## 19. Covalent API

* **Kullanım**: REST token tx
* **Gerçek-Zamanlı**: Dakika.
* **Sağlanan Veri**: Transfer, balance.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G4**: Büyük İşlem – Whale transfer izleme
* **G22**: On Chain Aktivite – Holder sayısı, balance snapshot

## 20. Dune Analytics

* **Kullanım**: SQL
* **Gerçek-Zamanlı**: \~5–10 dk.
* **Sağlanan Veri**: DEX hacim, likidite.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G5**: Türev Piyasalar – Open interest, funding rate
* **G21**: Mempool Dinamikleri – Mempool sıçramaları

## 21. Nansen API

* **Kullanım**: REST adres verisi
* **Gerçek-Zamanlı**: Dakika.
* **Sağlanan Veri**: Whale transfer, smart money.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G4**: Büyük İşlem – Whale hareketleri
* **G26**: Cüzdan Kümeleme – Smart-money adres kümeleri

## 22. DeFiLlama API

* **Kullanım**: REST TVL
* **Gerçek-Zamanlı**: Dakika.
* **Sağlanan Veri**: TVL, havuz likidite.
* **İlgili Göstergeler ve Veri Kaynakları 
* **G3**: Order Book & Likidite – Havuz derinliği
* **G14**: Stablecoin Peg – Peg sapma analizi

Ayarlar Menüsü Veri sağlayıcıları ile ilgili ayarların yapılacağı görsellere göre kodlama yapılacaktır. Aşağıdaki linklerde yer almayan özellikler kodlama sırasında eklenerek güncellenecektir.
Api Anahtarları Veri Sağlayıcıları görsel: 
Api Anahtarları Borsalar ile ilgili görsel: 
Api Anahtarları Diğer Api ile ilgili görsel: 
Veri Toplama Seçenekleri ile ilgili görsel: 
Tarama ayarları ile ilgili görsel: 

Yukarıdaki üç tablonun da yer aldığı çalışma mantığı bu veri toplama ve işleme mantığına göre ilerleyecek. Ayarlar menüsü yukarıdaki gibi programa entegre edilecek. Görsellerde olamayan yada farklı olan özellikler kodlama sırasında eklenecektir. Yukarıdaki linkler programın ayarlar ara yüzü görselinin referans olarak nasıl olması gerektiği ile ilgilidir. Resimdeki görseller güncellenerek olması gerektiği yapıya göre kodlama yapılarak entegre edilecektir.
Yükseliş Radarı, Tespit Edilen Hareketler ve Potansiyel Fırsatlar Tabloları Algoritmasının oluşturulması (Çalışma Mantığı)

Örnek vererek programın çalışma mantığı hakkında daha detaylı bilgi sahibi olmanı sağlayacağım ve yapılacak program bu mantığa göre planlanarak, kodlanacak. Bu örneklendirmeye göre database oluşturulması gerekiyorsa bunu oluşturup kodlamaya buna uyumlu, bütünleşmiş, hızlı ve sağlıklı çalışmasını sağlayacak şekilde kodlama yap.
Program çalışma mantığını örneklendirmesi
Kullanıcı slide barda fitreleme seçenekleri;
Minimum günlük hacim: 50000 usd, 
Maksimum günlük hacim 1500000 usd, 
Minimum beklenen fiyat değişimi: %25, 
Değişim Fiyat/Zaman Aralığı (usd/t): 2 saat 
…gibi bir seçeneği seçip tarama başlat butonuna bastığı zaman; yukarıda belirtilen tüm Veri Toplama Yöntemleri kullanılarak seçilen fitreleme seçeneklerine göre tarama başlayacak. Tarama yapılırken ## Temel Göstergeler ve Veri Kaynakları (Gösterge Kodları) olarak adlandırdığımız veriler toplanarak bir güven skoru oluşturulacak. Burada önemli olan farklı veri kaynaklarından gelen verinin karşılaştırılarak doğru, güvenli, gerçek zamanlı ve emin olunan veri olması. Bunu yapabilmek içinde farklı veri toplama yöntemlerinden toplana verinin karşılaştırılarak bir algoritma yardımıyla incelenip Hedef Fiyat tahminlerin %90 ve üzerinde doğru %0-5 arası yanlış hesaplama yada sapma yapacak şekilde çalışmasını sağlamak.  **G3**: Order Book & Likidite ye göre bulunan tahmin, diğer veri toplama yöntemiyle toplanan **G2**: Fiyat Değişim Hızı ve Momentum verisine göre karşılaştırılacak. G1-G29 arasında bulunabilen tüm veriler karşılaştırılacak ve en doğru tahmin yapılacak bir algoritma geliştirilecek. Burada taranan coinler "Yükseliş Radarı" tablosunda gösterilirken, kullanıcı filtresinden geçen coinler "Tespit Edilen Hareketler" tablosunda gösterilecek. Fakat program filtreleme seçeneklerinde Değişim Fiyat/Zaman Aralığı filtresi olmadan bulunan coinler "Potansiyel Fırsatlar" tablosunda gösterilecek. Kısacası "Tespit Edilen Hareketler" tablosu kullanıcının belirlediği tüm filtrelere göre bulunan coinleri listelerken "Potansiyel Fırsatlar" tablosunda gösterilecek coinler Değişim Fiyat/Zaman Aralığı filtresi olmadan bulunan coinleri listeleyecek.

Bu tablolardaki diğer bir ayrıntı ve algoritmanın çalışma mantığı ile ilgili önemli konu öngörülen hedef fiyatının tekrar kontrol edilmesi. Yükseliş radarından tespit edilen hareketler tablosuna düşen coinler için kullanıcı ilgisini çeken coinler için check butonu sayesinde işaretleme yaptığında tahmini öngörülen hedef fiyat ve bu fiyata ulaşacağı zaman aralığı tahminlerinde olası bir yeni gelen veriye göre değişme olacaksa fiyat, zaman ve diğer bilgiler güncellenerek, kullanıcının yanıltılması engellenir.

Bu tablolardaki diğer bir ayrıntı ve algoritmanın çalışma mantığı ile ilgili önemli konu yapılan tahminin sapma oranının, hedef fiyatının doğruluğunun geliştirilmesi doğru tahmin yapmanın geliştirilmesi için (makine öğrenimi) yapılacak algoritma. Bu algoritma için geçmiş veriler web siteleri üzerinden çekilerek kullanılabilir, programın kendi yaptığı tahminler database de saklanarak yapılan tahminin hangi yöntemlerle ve hangi veriye dayanarak yapıldığı karşılaştırılarak aradaki farkın neden olduğu sebepler bir sonraki tahminde iyileştirme yapılarak hedefe fiyat ve hedef fiyata ulaşacağı zaman aralığı tahminleri güncellenebilir. Bu bir döngüye bağlanırsa program kullanıldıkça makine öğrenimi ve hedef fiyat analizi, hedef fiyata ulaşacağı zaman aralığı tahminleri mükemmelleştirilebilir. Bu algoritmada db kullanılarak coin hedef zaman tahminlerini etkileyen tüm veriler kaydedilerek daha iyi tahminler yapılması – makine öğrenimi geliştirilecek şekilde kodlama yapılmalıdır. Yüksek veri kalitesine ulaşılacak şekilde program kodlanmalı ve bu algoritma sorunsuz, mükemmel tahmin yapacak, eski ve yeni veriyi kullanarak, kendi yaptığı tahminleri geliştirecek şekilde algoritma üretilmelidir.

Güven skoru mantığı:
Farklı Veri Toplama Yöntemleri kullanılarak, elde edilen verinin, doğru, gerçek zamanlı ve kaliteli veri olduğunun doğrulanması ile oluşturulan bir skor olacak. Şöyle ki Yükseliş radarında CCXT (Unified Exchange APIs) yöntemi ile örnek olarak “xcoin” adında bir coin radara alındıysa, bu xcoin’in Temel Göstergeler ve Veri Kaynakları sonuçları diğer Veri Toplama Yöntemleri ile bulunan sonuçlarla karşılaştırılacak. Tüm Veri Toplama Yöntemlerinin Temel Göstergeler ve Veri Kaynakları (Gösterge Kodları) birebir karşılaştırılarak aynı veri ya da yakınlık olarak %5 veya daha az bir uyum (bu seçenek filtreleme seçeneklerine eklenebilir) varsa kullanıcının filtreleme seçeneğine uyuyorsa “Tespit Edilen Hareketler” tablosunda xcoin listelenecek. Bu filtreleme seçenekleri dışında programın bulduğu coinlerde "Potansiyel Fırsatlar" tablosunda listelenecek.
NOT: Tarama başlat butonu dimamik olacak. Tarama başlata basıldığında buton “Taramayı Durdur” ‘a dönüşecek ve butonun altında “Tarama başlatıldı…” bilgilendirme yazısı çıkacak. “Taramayı Durdur” a basılana kadar tarama devam edecek.

İZLEME LİSTESİ
Bu bölüm mantık olarak takip edilen coinlerin izlendiği ve programın amacına göre tarama yapılarak istenen değerlerin listelendiği bir tabloyu barındıran bir menü.

İZLEME LİSTESİ MENÜSÜ ile ilgili görsel: https://hizliresim.com/qm2lipv

İzleme listesindeki coinler içinde mevcut sistemin çalışma mantığı, algoritması ve diğer özelliklerini kullanarak tarama yaparak değil İzleme listesinde bulunan coinlerin hedef fiyat zaman aralığını tahmin etmeye yönelik bir menü olacak. Burada programın yavaşlamasını ve hatalara yol açmasını engellemek amacı ile ana panelde tarama varken İzleme Listesinde tarama yapılaması engelenecek. Ana paneldeki tarama durdurulduktan sonra İzleme Listesinde tarama başlayacak. Mantık, algoritma, geliştirme seçenekleri yukarıda anlattıklarımla birebir aynı olacak. İzleme listesinde yer alan coinler için zaman aralığı seçmek istemiyorum. Düşüncem şu 24 saat içinde yükselebileceği maksimum fiyat zaman aralığı ve düşeceği maksimum fiyat zaman aralığı tabloda listelenecek. Potansiyel Fırsatlar tablosu çalışma mantığı bu pencereye entegre edilip zaman aralığı gözetmeksizin verilere göre (G1-G29 arasında belirtilen veriler) gün içerisinde düşeceği maksimum fiyat yada çıkacağı maksimum fiyat potansiyel fırsatlar tablosunda hedef fiyat zaman aralığı ve diğer belirteçlerle beraber listelensin.

İzleme Listesine coin eklerken en önemli mantık az bilinen coinlerinde bu listelere ekleyebilirliğini sağlamak. Bunu sağlamak amacı ile aşağıdaki web adreslerinin db si yada ara yüzü kullanılarak bir algoritma geliştirip, mevcut görseli verdiğim linkteki listeyi oluşturabilirsin.

• CoinMarketCap
• Web: https://coinmarketcap.com
• Fiyat, hacim, arz; API ile fiyat/hacim çekme; yeni listelenenler.
• CoinGecko
• Web: https://www.coingecko.com
• Fiyat, market cap, sosyal metrikler; “Recently Added”, trend coin’ler; kapsamlı API.
• DexTools
• Web: https://www.dextools.io
• DEX token takibi (Uniswap, PancakeSwap); likidite, işlem hacmi, hot pairs.
• CoinPaprika
• Web: https://coinpaprika.com
• Proje detayları (whitepaper, ekip), fiyat/hacim, GitHub aktivitesi.
• CryptoRank
• Web: https://cryptorank.io
• ICO/IDO/Launchpad verileri; erken aşama projeler; token sıralama.
• CoinCheckup
• Web: https://coincheckup.com
• Proje analiz skorları; geliştirici aktivitesi; topluluk büyüklüğü.
• LunarCrush
• Web: https://lunarcrush.com
• Sosyal medya duygu ve hacim analizi; Twitter/Reddit/YouTube metrikleri.
• Messari
• Web: https://messari.io
• Derin analiz raporları; on chain metrikler; ücretli dashboard’lar.
• Token Terminal
• Web: https://tokenterminal.com
• Protokol gelirleri, kullanıcı/işlem hacmi; finansal on chain veriler.
• CoinTools / CoinLore / CoinCodex
• Web: https://cointools.io / https://www.coinlore.com / https://coincodex.com
• Hızlı piyasa takibi; liste dışı coin keşfi; günlük kazanan/kaybedenler.
• BitQuery
• Web: https://bitquery.io
• On chain GraphQL sorguları; cüzdan, DEX, token transfer analizleri.
• CryptoMiso
• Web: https://www.cryptomiso.com
• GitHub commit’lerine göre proje sıralaması; geliştirici aktivitesi.
• Nomics
• Web: https://nomics.com
• Fiyat, market cap, hacim; tarihsel veri API’si.
• DefiLlama
• Web: https://defillama.com
• DeFi TVL (Total Value Locked); zincir bazlı sermaye akışları.
• CoinCarp
• Web: https://www.coincarp.com
• Borsa listelemeleri; yeni coin’ler, token dağıtım detayları.
• TradingView (Kripto)
• Web: https://www.tradingview.com/markets/cryptocurrencies/
• Teknik analiz; grafikler, indikatörler; topluluk fikirleri.
• CoinDance
• Web: https://coin.dance
• BTC hash rate, node istatistikleri; zincir temel verileri.
• CryptoSlate
• Web: https://cryptoslate.com
• Haber + proje verileri; ICO/IDO/NFT takibi.
• Glassnode
• Web: https://glassnode.com
• Derin on chain metrikler; zincir üstü likidite, aktiviteler.
• Santiment
• Web: https://app.santiment.net
• Sosyal & on chain analizler; duygu, işlem hacmi, balina aktivitesi.
• IntoTheBlock
• Web: https://intotheblock.com
• Makine öğrenmeli on chain metrikler; büyük işlemler, sahip dağılımı.
• Dune Analytics
• Web: https://dune.com
• Kendi SQL dashboard’larını oluşturma; açık veri görselleştirmeler.
• Nansen
• Web: https://nansen.ai
• Cüzdan etiketleme; fon akış takip; balina transferleri.
• Coin Metrics
• Web: https://coinmetrics.io
• Kurumsal seviye on chain & fiyat verileri; endeksler.
• Flipside Crypto
• Web: https://flipsidecrypto.xyz
• SQL sorguları & dashboard’lar; projelerin canlı verileri.
• Etherscan
• Web: https://etherscan.io
• Ethereum blok gezgini; adres, işlem, kontrat detayları.
• BscScan
• Web: https://bscscan.com
• Binance Smart Chain explorer; benzer Etherscan özellikleri.
• Covalent
• Web: https://www.covalenthq.com
• Unified blockchain API; tüm zincirlerde token/zincir üstü veri.
• Arkham Intelligence
• Web: https://arkhamintelligence.com
• On chain istihbarat; adres ağları, balina aktivitesi.
• CryptoQuant
• Web: https://cryptoquant.com
• Market & on chain göstergeler; borsa rezervleri, akıllı para izleme.
• CryptoCompare
• Web: https://www.cryptocompare.com
• Fiyat, hacim, tarihsel veriler; API ve widget’lar.
• Skew
• Web: https://skew.com
• Türev ürünler analitiği; opsiyon ve vadeli işlem verileri.
• Coin360
• Web: https://coin360.com
• Piyasa ısı haritası; hızlı genel bakış görselleri.
