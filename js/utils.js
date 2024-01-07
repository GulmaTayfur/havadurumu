// zaman dilimini kullanarak biçimlendirilmiş bir tarih ve saat bilgisini döndüren
function converTimeStamp(timeStamp, timezone) {
  //zaman dilimini saat cinsinden dönüştürür (saniyeden saate)
  const convertTimeZone = timezone / 3600;
  //yeni bir tarih nesnesini oluştur
  const date = new Date(timeStamp * 1000);
  // tarih ve saat bilgisi için seçenekleri belirler
  const options = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Etc/GMT${convertTimeZone >= 0 ? "-" : "+"}${Math.abs(
      convertTimeZone
    )}`,
    hour12: true,
  };
  //tarihi ve saati kullanıcıya dost bir formatta döndürür
  return date.toLocaleDateString("en-US", options);
}

//ülke kodunu ülke adına çeviren fonskiyon
function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  console.log(regionNames.of(country));
  return regionNames.of(country);
}

export { converTimeStamp, convertCountryCode };

const giris = localStorage.setItem("kullaniciAdi", "gulma");
localStorage.setItem("sifre", "1234");
