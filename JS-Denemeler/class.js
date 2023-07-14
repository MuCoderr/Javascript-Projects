class Personel{
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet(){
        console.log(`Personel Kaydedildi : ${this.ad}`);
    }
}

const personel = new Personel("Mücahit","Yasin");
personel.kaydet(); 

personel.ad = "Engin";
console.log(personel.ad);