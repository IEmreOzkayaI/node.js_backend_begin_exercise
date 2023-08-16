Elbette, işte belirttiğiniz dosyaları içeren içerik:

## İçindekiler

1. [User](#user)
2. [Server.js](#serverjs)
3. [userModel.js](#usermodeljs)
4. [contactModel.js](#contactmodeljs)

## User
Bu bölümde User hakkında detayları bulabilirsiniz.

## Server.js
Bu bölümde Server.js dosyasının işlevi ve amacı hakkında bilgileri bulabilirsiniz.

## userModel.js
Bu bölümde userModel.js dosyasının kullanıcı verilerini yönetmek için ne amaçla kullanıldığını öğrenebilirsiniz.

## contactModel.js
Bu bölümde contactModel.js dosyasının iletişim bilgilerini yönetmek için nasıl kullanıldığına dair bilgileri bulabilirsiniz.

# Server.js
Bu kod dosyası, bir Express.js uygulamasının ana dosyasıdır ve temel olarak sunucu tarafı işlevselliğini sağlar.

---

# Giriş: Genel Tanıtım

Bu bölümde, projenin amacı ve kapsamı hakkında genel bir açıklama bulunmaktadır. Ayrıca, kod dosyasının genel işlevi ve önemi de bu bölümde vurgulanmaktadır. Bu uygulama, bir web sunucusu oluşturmak ve API rotalarını yönlendirmek amacıyla geliştirilmiştir.

---

# Kullanılan Modüller ve Kütüphaneler

Bu bölümde, kullanılan modüllerin ve kütüphanelerin listesi bulunmaktadır. Ayrıca, her bir modül ve kütüphanenin amaçları ve kullanımı da açıklanmaktadır.

- `express`: Bu modül, web uygulamaları ve API'lar oluşturmak için kullanılır. Express uygulaması oluşturmak ve yönlendirmek için kullanılır.
- `errorHandler`: Bu modül, özel hata işleme işlevselliği sağlar. Uygulama içinde meydana gelen hataların yönetimini kolaylaştırır.
- `connectDb`: Bu modül, veritabanına bağlantı kurmak için kullanılır. Veritabanı bağlantısının oluşturulması ve yönetilmesini sağlar.
- `dotenv`: Bu modül, çevresel değişkenlerin yönetimi için kullanılır. Projede kullanılan gizli bilgileri yönetmek için kullanılır.

---

# Değişkenler ve Görevleri

Bu bölümde, kod dosyası içinde tanımlanan değişkenlerin ve sabitlerin listesi yer almaktadır. Her bir değişkenin görevi ve amacı açıklanmıştır.

- `express`: Bu değişken, Express uygulamasını temsil eder. Sunucu ve API yönlendirmeleri için kullanılır.
- `app`: Bu değişken, Express uygulamasının örneğini temsil eder. Uygulama yapılandırması ve rotaları yönlendirmek için kullanılır.
- `port`: Bu değişken, uygulamanın hangi port üzerinden dinleneceğini belirler. Varsayılan olarak 5000 portunu kullanır.
- `errorHandler`: Bu değişken, hata yönetim işlevselliğini temsil eder. Hata yakalama ve işleme için kullanılır.

---

# Fonksiyonlar ve Görevleri

Bu bölümde, kod dosyası içinde tanımlanan fonksiyonların listesi bulunmaktadır. Her bir fonksiyonun görevi, amacı, parametreleri ve geri döndürdüğü değerler açıklanmıştır.

- `connectDb()`: Bu fonksiyon, veritabanına bağlantı kurar. Veritabanı işlemleri için bağlantı oluşturulur.
- `app.listen()`: Bu fonksiyon, uygulamayı belirtilen bir port üzerinden dinlemeye başlar. Kullanıcının isteklerini dinler ve yönlendirir.

---

# Fonksiyon Detayları ve İşleyişi

Bu bölümde, kod dosyası içindeki önemli fonksiyonların ayrıntılı işleyişi ve içerisinde yapılan işlemler açıklanmaktadır.

- `connectDb()`: Bu fonksiyon, MongoDB veritabanına bağlantı oluşturur. Veritabanı bağlantısı, `mongoose` kütüphanesi kullanılarak yapılır.
- `app.listen()`: Bu fonksiyon, belirtilen port üzerinden gelen istekleri dinler. Gelen isteklere yanıt verir ve ilgili rotalara yönlendirir.

---

# Kaynaklar ve Referanslar

Bu bölümde, projenin geliştirilmesinde kullanılan kaynaklar ve referanslar listelenmektedir. Ayrıca, diğer ilgili dokümantasyon ve bağlantılar da bu bölümde paylaşılmıştır.

- `express` resmi belgeleri: [https://expressjs.com/](https://expressjs.com/)
- MongoDB resmi belgeleri: [https://docs.mongodb.com/](https://docs.mongodb.com/)
- `dotenv` resmi belgeleri: [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)
- Diğer ilgili kaynaklar ve dökümantasyonlar.
  
---

# userRoutes.js

Bu kod dosyası, kullanıcı işlemlerini yönetmek için gerekli Express Router ayarlarını ve rotalarını tanımlar.

---

# Giriş: Genel Tanıtım

Bu bölümde, kod dosyasının genel amacı ve kapsamı hakkında genel bir açıklama bulunmaktadır. Bu dosya, kullanıcı kaydı, girişi ve oturum açmış kullanıcının bilgilerini getirmek gibi kullanıcı işlemleri için API rotalarını yönlendirmek amacıyla oluşturulmuştur.

---

# Kullanılan Modüller ve Kütüphaneler

Bu bölümde, kod dosyası içinde kullanılan modüllerin ve kütüphanelerin listesi yer almaktadır. Ayrıca, her bir modül ve kütüphanenin amaçları ve kullanımı da açıklanmaktadır.

- `express`: Bu modül, web uygulamaları ve API'lar oluşturmak için kullanılır. Express Router'ını tanımlamak ve rotaları yönlendirmek için kullanılır.
- `express.Router()`: Bu fonksiyon, Express uygulamasında ayrı bir rota yönetimi oluşturmayı sağlar. API rotalarını gruplamak ve yönlendirmek için kullanılır.
- `userController`: Bu modül, kullanıcı işlemlerini yöneten denetleyici fonksiyonları içerir. Kullanıcı kaydı, girişi ve oturum açmış kullanıcının bilgilerini getirme gibi işlemleri gerçekleştirir.
- `validateTokenHandler`: Bu modül, kullanıcının oturumunun geçerliliğini doğrulayan bir ara yazılımdır. Oturum açmış kullanıcının kimliğini doğrulamak ve güvenliği sağlamak için kullanılır.

---

# Fonksiyonlar ve Görevleri

Bu bölümde, kod dosyası içinde tanımlanan fonksiyonların listesi bulunmaktadır. Her bir fonksiyonun görevi, amacı, parametreleri ve geri döndürdüğü değerler açıklanmıştır.

- `registerUser()`: Bu fonksiyon, yeni bir kullanıcıyı kaydetmek için kullanılır. Kullanıcının kimlik bilgilerini alır ve veritabanına kaydeder.
- `loginUser()`: Bu fonksiyon, kullanıcının oturum açması için kullanılır. Kullanıcının kimlik bilgilerini alır, kimlik doğrulaması yapar ve oturum belirteci (token) döndürür.
- `currentUser()`: Bu fonksiyon, oturum açmış kullanıcının bilgilerini getirmek için kullanılır. Oturum belirteci ile gelen isteği doğrular ve kullanıcı bilgilerini döndürür.

---

# Fonksiyon Detayları ve İşleyişi

Bu bölümde, önemli fonksiyonların ayrıntılı işleyişi ve içerisinde yapılan işlemler açıklanmaktadır.

- `registerUser()`: Bu fonksiyon, gelen istekteki kullanıcı bilgilerini alır. Kimlik doğrulama işlemi yapmadan, şifrelenmiş bir şekilde kullanıcıyı veritabanına kaydeder.
- `loginUser()`: Bu fonksiyon, gelen istekteki kullanıcı bilgilerini alır. Kullanıcının kimlik bilgilerini doğrular, geçerliyse oturum belirteci (token) oluşturur ve döndürür.
- `currentUser()`: Bu fonksiyon, gelen isteğin oturum belirtecini alır. Belirteci doğrular, kullanıcı kimliğini çözümleyip veritabanından ilgili kullanıcı bilgilerini getirir.

---

# Kaynaklar ve Referanslar

Bu bölümde, projenin geliştirilmesinde kullanılan kaynaklar ve referanslar listelenmektedir. Ayrıca, diğer ilgili dokümantasyon ve bağlantılar da bu bölümde paylaşılmıştır.

- Express.js Resmi Belge: [https://expressjs.com/](https://expressjs.com/)
- MongoDB Resmi Belge: [https://docs.mongodb.com/](https://docs.mongodb.com/)
- `jsonwebtoken` Kütüphanesi: [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- Diğer ilgili kaynaklar ve dökümantasyonlar.

---

Elbette, verilen kod parçası için ayrıntılı bir açıklama sağlayabilirim. İşte verilen kodun her bir bölümünü açıklayan dokümantasyon:

---

# contactModel.js

Bu kod dosyası, kişi (contact) işlemlerini yönetmek için gerekli Express Router ayarlarını ve rotalarını tanımlar.

---

# Giriş: Genel Tanıtım

Bu bölümde, kod dosyasının genel amacı ve kapsamı hakkında genel bir açıklama bulunmaktadır. Bu dosya, kişi (contact) verilerini oluşturma, güncelleme, silme ve getirme gibi işlemleri gerçekleştirmek için API rotalarını yönlendirmek amacıyla oluşturulmuştur.

---

# Kullanılan Modüller ve Kütüphaneler

Bu bölümde, kod dosyası içinde kullanılan modüllerin ve kütüphanelerin listesi yer almaktadır. Ayrıca, her bir modül ve kütüphanenin amaçları ve kullanımı da açıklanmaktadır.

- `express`: Bu modül, web uygulamaları ve API'lar oluşturmak için kullanılır. Express Router'ını tanımlamak ve rotaları yönlendirmek için kullanılır.
- `express.Router()`: Bu fonksiyon, Express uygulamasında ayrı bir rota yönetimi oluşturmayı sağlar. API rotalarını gruplamak ve yönlendirmek için kullanılır.
- `contactController`: Bu modül, kişi (contact) işlemlerini yöneten denetleyici fonksiyonları içerir. Kişi oluşturma, güncelleme, silme ve getirme gibi işlemleri gerçekleştirir.
- `validateTokenHandler`: Bu modül, kullanıcının oturumunun geçerliliğini doğrulayan bir ara yazılımdır. Oturum açmış kullanıcının kimliğini doğrulamak ve güvenliği sağlamak için kullanılır.

---

# Rotalar ve İşlevleri

Bu bölümde, kod dosyası içinde tanımlanan rotaların ve bu rotaların hangi işlemleri yönlendirdiğinin açıklaması bulunmaktadır.

- `GET /`: Bu rota, tüm kişi (contact) verilerini getirmek için kullanılır. `getContacts` fonksiyonunu çağırarak tüm kişi verilerini getirir.
- `POST /`: Bu rota, yeni bir kişi (contact) verisi oluşturmak için kullanılır. `createContact` fonksiyonunu çağırarak yeni kişi verisi oluşturur.
- `GET /:id`: Bu rota, belirli bir kişi (contact) verisini ID'ye göre getirmek için kullanılır. `getContactById` fonksiyonunu çağırarak belirli kişi verisini getirir.
- `PUT /:id`: Bu rota, belirli bir kişi (contact) verisini ID'ye göre güncellemek için kullanılır. `updateContactById` fonksiyonunu çağırarak kişi verisini günceller.
- `DELETE /:id`: Bu rota, belirli bir kişi (contact) verisini ID'ye göre silmek için kullanılır. `deleteContactById` fonksiyonunu çağırarak kişi verisini siler.

---

# Middleware

Bu bölümde, `validateTokenHandler` adlı middleware'in kullanımı hakkında açıklamalar bulunmaktadır.

- `validateToken`: Bu middleware, gelen isteğin oturum belirtecinin (token) geçerli olup olmadığını doğrular. Oturum açmış kullanıcının kimliğini doğrulayarak güvenliği sağlar.

---

# Kaynaklar ve Referanslar

Bu bölümde, projenin geliştirilmesinde kullanılan kaynaklar ve referanslar listelenmektedir. Ayrıca, diğer ilgili dokümantasyon ve bağlantılar da bu bölümde paylaşılmıştır.

- Express.js Resmi Belge: [https://expressjs.com/](https://expressjs.com/)
- Diğer ilgili kaynaklar ve dökümantasyonlar.
  
---

# Şema Tanımı: Kullanıcı (userModel.js)

Bu kod, MongoDB üzerinde kullanıcı verilerini depolamak için bir Mongoose şeması (schema) tanımlar. Kullanıcı verileri için gerekli alanları ve doğrulama kurallarını içerir.

- `mongoose`: Bu modül, MongoDB ile etkileşim kurmak için kullanılır. Mongoose, MongoDB'nin nesne veri modellemesi (ODM) kütüphanesidir.

## Alanlar ve Doğrulama Kuralları

- `username`: Kullanıcının kullanıcı adını temsil eder. Alanın türü `String` ve `required` seçeneği ile zorunlu olması gerektiği belirtilir. Kullanıcı adı girilmezse hata mesajı "Please add the user name" döndürülür.
  
- `email`: Kullanıcının e-posta adresini temsil eder. Alanın türü `String` ve `required` seçeneği ile zorunlu olması gerektiği belirtilir. Ayrıca, e-posta adresinin benzersiz (unique) olması gerektiği belirtilir. Aynı e-posta adresi ile birden fazla kullanıcı kaydı yapılmasını önler. Eğer aynı e-posta adresiyle kayıt yapılırsa hata mesajı "Email already exists" döndürülür.
  
- `password`: Kullanıcının şifresini temsil eder. Alanın türü `String` ve `required` seçeneği ile zorunlu olması gerektiği belirtilir. Kullanıcı şifresi girilmezse hata mesajı "Please add the user password" döndürülür.

## Ek Seçenekler

- `{ timeStamps: true }`: Bu seçenek, belirli bir dokümanın oluşturulma ve güncelleme tarihlerini otomatik olarak kaydedecektir. Bu tarihleri `createdAt` ve `updatedAt` alanları olarak saklar. Bu seçenek sayesinde kullanıcıların kayıt ve güncelleme tarihleri otomatik olarak izlenir.

## Model Oluşturma

`mongoose.model("User", userSchema)` ifadesi, `User` adında bir Mongoose modeli oluşturur. Bu model, kullanıcı verilerini temsil eder ve belirtilen `userSchema` şemasına göre oluşturulan dokümanlarla çalışmayı sağlar.

---
Bu kod, kullanıcı verilerini depolamak ve yönetmek için kullanılan bir Mongoose şemasını tanımlar. Kullanıcı adı, e-posta adresi ve şifre gibi temel bilgileri içerir ve bu bilgileri doğrulama kurallarına tabi tutar. Ayrıca, tarih damgaları (timestamps) kullanarak dokümanların oluşturulma ve güncelleme tarihlerini izler.

---

# Şema Tanımı: Kişi (contactUser.js)

Bu kod, MongoDB üzerinde kişi verilerini depolamak için bir Mongoose şeması (schema) tanımlar. Kişi verileri için gerekli alanları ve doğrulama kurallarını içerir.

- `mongoose`: Bu modül, MongoDB ile etkileşim kurmak için kullanılır. Mongoose, MongoDB'nin nesne veri modellemesi (ODM) kütüphanesidir.

## Alanlar ve Doğrulama Kuralları

- `user_id`: Kişinin kullanıcı kimliğini temsil eder. Alanın türü `mongoose.Schema.Types.ObjectId` ve `required` seçeneği ile zorunlu olması gerektiği belirtilir. Bu alan aynı zamanda `ref` seçeneği ile 'User' koleksiyonuna referans yapar, böylece kişi verisi ile kullanıcı verisi arasında ilişki kurulur.
  
- `name`: Kişinin adını temsil eder. Alanın türü `String` ve `required` seçeneği ile zorunlu olması gerektiği belirtilir. Aynı zamanda `trim` seçeneği ile başındaki ve sonundaki boşluklar kaldırılır, `minlength` seçeneği ile en az 3 karakter uzunluğunda olması gerektiği belirtilir.
  
- `email`: Kişinin e-posta adresini temsil eder. Alanın türü `String` ve `required` seçeneği ile zorunlu olması gerektiği belirtilir. Aynı zamanda `trim` seçeneği ile başındaki ve sonundaki boşluklar kaldırılır, `minlength` seçeneği ile en az 3 karakter uzunluğunda olması gerektiği belirtilir.

## Ek Seçenekler

- `{timestamps: true}`: Bu seçenek, belirli bir dokümanın oluşturulma ve güncelleme tarihlerini otomatik olarak kaydedecektir. Bu tarihleri `createdAt` ve `updatedAt` alanları olarak saklar. Bu seçenek sayesinde kişi verilerinin kayıt ve güncelleme tarihleri otomatik olarak izlenir.

## Model Oluşturma

`mongoose.model('Contact', contact)` ifadesi, `Contact` adında bir Mongoose modeli oluşturur. Bu model, kişi verilerini temsil eder ve belirtilen `contactSchema` şemasına göre oluşturulan dokümanlarla çalışmayı sağlar.

---

Bu kod, kişi (contact) verilerini depolamak ve yönetmek için kullanılan bir Mongoose şemasını tanımlar. Kullanıcı kimliği, adı, e-posta adresi gibi temel bilgileri içerir ve bu bilgileri doğrulama kurallarına tabi tutar. Ayrıca, tarih damgaları (timestamps) kullanarak dokümanların oluşturulma ve güncelleme tarihlerini izler. `ref` seçeneği ile 'User' koleksiyonuna yapılan referans, kişi verisi ile kullanıcı verisi arasında ilişki sağlar.

Tabii, aşağıda verilen kod parçası hakkında ayrıntılı bir açıklama bulabilirsiniz:

---

# Middleware: Oturum Doğrulama (validateTokenHandler.js)

Bu kod, kullanıcının oturum belirtecinin (token) geçerliliğini doğrulamak için kullanılan bir Express middleware fonksiyonunu tanımlar.

- `asyncHandler`: Bu modül, asenkron Express işlemlerini yönetmek için kullanılır. İstek işleme fonksiyonları asenkron işlemler içerdiğinde kullanılır.

- `jwt`: Bu modül, JSON Web Token (JWT) işlemleri için kullanılır. Oturum belirteci oluşturma, doğrulama ve çözme gibi işlemleri sağlar.

## Middleware Fonksiyonu

- `validateToken`: Bu fonksiyon, gelen isteğin oturum belirtecinin geçerliliğini doğrular. Fonksiyon asenkron bir işlevdir.

## Fonksiyon İçeriği

1. Oturum Belirteci Kontrolü: İlk olarak, gelen isteğin başlık kısmında `Authorization` başlığını veya `authorization` başlığını kontrol eder. Bu başlık içinde "Bearer" ile başlayan oturum belirteci bulunursa, belirteci ayırarak `token` değişkenine atar.

2. Oturum Belirteci Doğrulama: Oturum belirteci varsa, `jwt.verify()` fonksiyonunu kullanarak oturum belirtecinin doğruluğunu kontrol eder. Eğer belirteç geçerli ise, `decoded` içinde kullanıcı bilgilerini içeren veriyi alır. Eğer belirteç geçerli değilse, hata mesajıyla birlikte 401 Unauthorized durumu döndürür.

3. Kullanıcı Bilgileri: Eğer belirteç geçerli ise, `req.user` nesnesine çözülen kullanıcı bilgilerini atar. Bu sayede diğer middleware veya route işlevleri içinde kullanıcı bilgilerine erişim sağlanır.

4. Belirteç Yoksa Hata: Eğer oturum belirteci yoksa, 401 Unauthorized durumuyla birlikte "Not authorized, no token" hatası döndürür.

## Middleware Sonucu

- Eğer oturum belirteci geçerliyse, `next()` fonksiyonunu çağırarak sonraki işlem adımına geçilir.
- Eğer oturum belirteci yoksa veya geçerli değilse, isteğe 401 Unauthorized durumuyla birlikte ilgili hata mesajı döndürülür.

## Middleware Kullanımı

Bu middleware, özellikle oturum gerektiren rotaların başında kullanılır. Bir rotada `validateToken` middleware'ini eklediğinizde, o rotanın sadece geçerli bir oturum belirteci ile erişilebileceğini sağlamış olursunuz.

---

Bu kod, oturum belirtecinin (token) doğruluğunu kontrol eden bir Express middleware fonksiyonunu tanımlar. Gelen isteklerin oturum durumunu kontrol etmek ve güvenliği sağlamak için kullanılır.

---

# Middleware: Hata İşleyici (errorHandler.js)

Bu kod, Express uygulamasında oluşan hataları yakalayarak uygun hata yanıtlarını oluşturan bir middleware fonksiyonunu tanımlar.

## Modül İçeriği

- `{ constants }`: Bu modül, belirli hata durumlarını temsil eden sabit değerleri içerir. Örneğin, FORBIDDEN, NOT_FOUND, UNAUTHORIZED vb.

## Middleware Fonksiyonu

- `errorHandler`: Bu fonksiyon, Express uygulamasında oluşan hataları yakalar ve uygun hata yanıtlarını oluşturur.

## Fonksiyon İçeriği

1. Durum Kodu (Status Code) Belirleme: İlk olarak, yanıtın durum kodunu belirler. Eğer `res.statusCode` değeri varsa, bu değeri alır. Eğer yoksa, varsayılan olarak 500 (Internal Server Error) durum kodunu kullanır.

2. Durum Koduna Göre Yanıt Oluşturma: Durum koduna göre, `switch` ifadesi içinde uygun hata yanıtını oluşturur. `constants` modülünden gelen sabit değerlere bakarak, her hata durumu için ayrı bir hata yanıtı oluşturur. Yanıtta başlık (title), mesaj (message) ve hata yığını (stackTrace) gibi bilgiler yer alır.

3. Varsayılan Durum: Eğer herhangi bir durum kodu eşleşmezse, konsola "No error all good" mesajını yazdırır. Bu kısım isteğe bağlıdır ve genellikle geliştirme aşamasında hata ayıklama amaçlı kullanılır.

## Middleware Kullanımı

Bu middleware, özellikle route işlevlerinde veya diğer middleware'lerde oluşan hataları yakalamak ve uygun hata yanıtlarını oluşturmak için kullanılır. İsteğin işlenmesi sırasında herhangi bir hata oluştuğunda, bu middleware otomatik olarak devreye girer ve uygun hata yanıtını oluşturur.

---

Bu kod, Express uygulamasında oluşan hataları yakalayarak uygun hata yanıtlarını oluşturan bir middleware fonksiyonunu tanımlar. Hata durumlarına göre farklı hata yanıtları oluşturur ve istemcilere iletilen hata mesajları, başlıklar ve hata yığınları (stack trace) içerir.

---

# Kullanıcı İşlemleri Kontrolcüsü (userController.js)

Bu kod, kullanıcı işlemlerini gerçekleştiren Express route işlevlerini içeren bir kontrolcü (controller) modülünü tanımlar.

- `asyncHandler`: Bu modül, asenkron Express işlemlerini yönetmek için kullanılır. İstek işleme fonksiyonları asenkron işlemler içerdiğinde kullanılır.

- `bcrypt`: Bu modül, parola hashleme ve karşılaştırma işlemleri için kullanılır. Parolaları güvenli bir şekilde depolamak ve karşılaştırmak amacıyla kullanılır.

- `jwt`: Bu modül, JSON Web Token (JWT) işlemleri için kullanılır. Kullanıcı oturum belirtecini oluşturmak için kullanılır.

- `User`: Bu modül, kullanıcı verilerini temsil eden Mongoose modelini içerir. Kullanıcı verileri ile MongoDB ile etkileşime geçmek için kullanılır.

## Kullanıcı Kaydı (registerUser)

Bu fonksiyon, yeni bir kullanıcı kaydı oluşturmak için kullanılır. HTTP POST isteği ile `/api/users/register` rotasında çalışır.

1. İstek Gövdesi: İstek gövdesindeki `username`, `email` ve `password` alanları alınır. Eğer bu alanlar boşsa, 400 Bad Request durumuyla "Please fill all the fields" hatası döndürülür.

2. Kullanıcı Varlık Kontrolü: Verilen e-posta adresiyle bir kullanıcının olup olmadığı kontrol edilir. Eğer kullanıcı mevcutsa, 400 Bad Request durumuyla "User already exists" hatası döndürülür.

3. Parola Hashleme: Verilen parola hashlenerek güvenli bir şekilde depolanır.

4. Kullanıcı Oluşturma: `User.create()` fonksiyonu ile yeni bir kullanıcı kaydı oluşturulur. Başarılı olursa, 201 Created durumuyla kullanıcının `_id` ve `email` alanları döndürülür. Başarısız olursa, 400 Bad Request durumuyla "Invalid user data" hatası döndürülür.

## Kullanıcı Girişi (loginUser)

Bu fonksiyon, kullanıcı girişi yapmak için kullanılır. HTTP POST isteği ile `/api/users/login` rotasında çalışır.

1. İstek Gövdesi: İstek gövdesindeki `email` ve `password` alanları alınır. Eğer bu alanlar boşsa, 400 Bad Request durumuyla "Please fill all the fields" hatası döndürülür.

2. Kullanıcı Kontrolü ve Parola Karşılaştırması: Verilen e-posta adresine sahip bir kullanıcının olup olmadığı kontrol edilir. Eğer kullanıcı mevcutsa ve verilen parola doğruysa, oturum belirteci oluşturulur ve 200 OK durumuyla belirteç yanıt olarak döndürülür. Eğer kullanıcı yoksa veya parola eşleşmiyorsa, 401 Unauthorized durumuyla "Invalid email or password" hatası döndürülür.

## Geçerli Kullanıcıyı Getir (currentUser)

Bu fonksiyon, oturum açmış olan kullanıcının bilgilerini getirmek için kullanılır. HTTP GET isteği ile `/api/users/current` rotasında çalışır.

1. Yanıt: `req.user` nesnesi içinde bulunan kullanıcı bilgileri yanıt olarak döndürülür.

## Kontrolcü İhracı

Bu modül, tanımlanan fonksiyonları ve rotaları diğer dosyalarda kullanabilmek için dışarıya ihraç eder.

---

Bu kod, kullanıcı işlemleri gerçekleştiren kontrolcü (controller) fonksiyonlarını tanımlar. Kullanıcı kaydı, girişi ve geçerli kullanıcının bilgilerini getirme gibi işlemleri yönetir. Bu işlemleri gerçekleştiren fonksiyonlar, ilgili rotalara atanarak Express uygulamanızın istemcilerle etkileşimini sağlar

---

# Kişi İşlemleri Kontrolcüsü (contactController.js)

Bu kod, kişi işlemlerini gerçekleştiren Express route işlevlerini içeren bir kontrolcü (controller) modülünü tanımlar.

- `asyncHandler`: Bu modül, asenkron Express işlemlerini yönetmek için kullanılır. İstek işleme fonksiyonları asenkron işlemler içerdiğinde kullanılır.

- `Contact`: Bu modül, kişi (contact) verilerini temsil eden Mongoose modelini içerir. Kişi verileri ile MongoDB ile etkileşime geçmek için kullanılır.

## Kişi Listesini Getir (getContacts)

Bu fonksiyon, tüm kişi verilerini getirmek için kullanılır. HTTP GET isteği ile `/api/contacts` rotasında çalışır.

1. Kişi Verilerini Getirme: `Contact.find()` fonksiyonu ile veritabanından kullanıcının id'sine ait kişi verileri getirilir.

2. Yanıt: Kişi verileri 200 OK durumuyla yanıt olarak döndürülür.

## Yeni Kişi Oluştur (createContact)

Bu fonksiyon, yeni bir kişi kaydı oluşturmak için kullanılır. HTTP POST isteği ile `/api/contacts` rotasında çalışır.

1. İstek Gövdesi: İstek gövdesindeki `name` ve `email` alanları alınır. Eğer bu alanlar boşsa, 400 Bad Request durumuyla "Please provide name and email" hatası döndürülür.

2. Kişi Oluşturma: `Contact.create()` fonksiyonu ile yeni bir kişi kaydı oluşturulur. Başarılı olursa, 201 Created durumuyla "Create Contact" mesajı döndürülür.

## Kişi Bilgisini Getir (getContactById)

Bu fonksiyon, belirli bir kişi verisini id'sine göre getirmek için kullanılır. HTTP GET isteği ile `/api/contacts/:id` rotasında çalışır.

1. Kişi Verisi Kontrolü: Verilen id'ye sahip bir kişi verisinin olup olmadığı kontrol edilir. Eğer kişi verisi yoksa, 404 Not Found durumuyla "Contact not found" hatası döndürülür.

2. Yanıt: Kişi verisi 200 OK durumuyla yanıt olarak döndürülür.

## Kişi Bilgisini Güncelle (updateContactById)

Bu fonksiyon, belirli bir kişi verisini id'sine göre güncellemek için kullanılır. HTTP PUT isteği ile `/api/contacts/:id` rotasında çalışır.

1. Kişi Verisi Kontrolü: Verilen id'ye sahip bir kişi verisinin olup olmadığı kontrol edilir. Eğer kişi verisi yoksa, 404 Not Found durumuyla "Contact not found" hatası döndürülür.

2. Kullanıcı Yetki Kontrolü: Güncelleme işlemi yapılacak kişi verisinin sahibinin, giriş yapmış kullanıcı olup olmadığı kontrol edilir. Eğer kişi verisinin sahibi değilse, 403 Forbidden durumuyla "User don't have permission to update other user contact" hatası döndürülür.

3. Kişi Bilgisini Güncelleme: `Contact.findByIdAndUpdate()` fonksiyonu ile kişi verisi güncellenir ve güncellenmiş kişi verisi 200 OK durumuyla yanıt olarak döndürülür.

## Kişi Bilgisini Sil (deleteContactById)

Bu fonksiyon, belirli bir kişi verisini id'sine göre silmek için kullanılır. HTTP DELETE isteği ile `/api/contacts/:id` rotasında çalışır.

1. Kullanıcı Yetki Kontrolü: Silme işlemi yapılacak kişi verisinin sahibinin, giriş yapmış kullanıcı olup olmadığı kontrol edilir. Eğer kişi verisinin sahibi değilse, 403 Forbidden durumuyla "User don't have permission to update other user contact" hatası döndürülür.

2. Kişi Verisi Silme: `Contact.findByIdAndRemove()` fonksiyonu ile kişi verisi silinir ve silinen kişi verisi 200 OK durumuyla yanıt olarak döndürülür.

## Kontrolcü İhracı

Bu modül, tanımlanan fonksiyonları diğer dosyalarda kullanabilmek için dışarıya ihraç eder.

---

Bu kod, kişi işlemlerini gerçekleştiren kontrolcü (controller) fonksiyonlarını tanımlar. Kişi verilerini getirme, oluşturma, güncelleme ve silme gibi işlemleri yönetir. Bu işlemleri gerçekleştiren fonksiyonlar, ilgili rotalara atanarak Express uygulamanızın istemcilerle etkileşimini sağlar.

---

# MongoDB Veritabanına Bağlantı (dbConnection.js)

Bu kod, MongoDB veritabanına bağlantı kurmak için kullanılan bir asenkron fonksiyon olan `connectDb`'yi tanımlar.

- `mongoose`: Bu modül, MongoDB ile etkileşim kurmak ve veritabanına bağlanmak için kullanılır.

## Bağlantı Fonksiyonu (connectDb)

Bu fonksiyon, MongoDB veritabanına bağlantı kurmak için kullanılır. Asenkron bir fonksiyon olduğu için `async` anahtar kelimesi kullanılmıştır.

1. Bağlantı Kurma: `mongoose.connect()` fonksiyonu ile MongoDB veritabanına bağlantı kurulur. Bağlantı dizesi `process.env.CONNECTION_STRING` değerini kullanarak alınır.

2. Bağlantı Başarılı: Eğer bağlantı başarılı bir şekilde kurulursa, bağlantı bilgileri konsola yazdırılır. Bağlantı bilgileri, host adresi (`connect.connection.host`) ve veritabanı adı (`connect.connection.name`) olarak yazdırılır.

3. Bağlantı Başarısız: Eğer bağlantı kurma sırasında bir hata oluşursa, hata konsola yazdırılır ve işlem sonlandırılır (`process.exit(1)`).

## Fonksiyon İhracı

Bu modül, `connectDb` fonksiyonunu diğer dosyalarda kullanabilmek için dışarıya ihraç eder.

---

Bu kod, MongoDB veritabanına bağlantı kurma işlemini gerçekleştiren bir asenkron fonksiyonu tanımlar. Bu fonksiyon, MongoDB ile etkileşim kurmak ve veritabanına bağlanmak için kullanılır. Bağlantı başarılıysa bağlantı bilgileri yazdırılır, bağlantı başarısızsa hata konsola yazdırılır ve işlem sonlandırılır. Bu fonksiyon, Express uygulamanızın başlatılmasında veya gerekli olduğu diğer yerlerde kullanılabilir.
