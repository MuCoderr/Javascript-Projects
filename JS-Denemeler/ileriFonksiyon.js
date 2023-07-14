var selamFonksiyonu = function selam(){
    console.log("merhaba");
}

selamFonksiyonu();

const selamFonksiyonu2 = () =>{
    console.log("merhaba2");
    console.log("Birşey");
}

selamFonksiyonu2();

const selamFonksiyonu3 = (mesaj) =>{
    console.log(mesaj);
}

selamFonksiyonu3("Mehaba Dünya");

var topla = (sayi1,sayi2) =>{
    return sayi1 +sayi2;
}

let toplam = topla(3,4);

console.log(toplam);