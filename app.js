let turkceDogru, turkceyanlis=0;
let natematikDogru, matematikYanlis=0;
let sosyalDogru, sosyalYanlis=0;
let fenDogru, fenYanlis=0;
let puan=0;
let okulPuani=0;

let yeniSatir = "\r\n";
let mesaj = "Tyt Puan Hesaplama Uygulamasına Hoşgeldiniz"+yeniSatir+"1-Puan Hesapla" +yeniSatir+"2-Çıkış Yap";

alert(mesaj);

let secim = prompt(mesaj);

switch(secim){
    case "1":

        okulPuani = Number(prompt("OKul puanınızı giriniz"));
        turkceDogru = Number(prompt("Türkçe doğru sayısı"));
        turkceYanlis = Number(prompt("Türkçe Yanlış Sayısı"));
        

        matematikDogru = Number(prompt("Matematik doğru sayısı"));
        matematikYanlis = Number(prompt("Matematik Yanlış Sayısı"));

        sosyalDogru = Number(prompt("Sosyal doğru sayısı"));
        sosyalYanlis = Number(prompt("Sosyal Yanlış Sayısı"));

        fenDogru = Number(prompt("Fen doğru sayısı"));
        fenYanlis = Number(prompt("Fen Yanlış Sayısı"));

        let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
        let yanlisSayisi = turkceyanlis+matematikYanlis+sosyalYanlis+fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4)
        puan = (kalanDogruSayisi*4) + 100 + okulPuani;
        alert("Tyt Puanınız :" + puan);
            break;

    case "2":
        alert("Uygulamadan çıkış yapıldı...");
        break;

    

}