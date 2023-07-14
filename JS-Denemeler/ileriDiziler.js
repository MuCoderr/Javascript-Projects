const dizi = [1,2,3,4];
console.log(dizi);

const kareDizisi = []

dizi.forEach(sayi =>{   // foreach tüm elemanları gezmek için kullanılır.
    kareDizisi.push(sayi*sayi);
});

console.log(kareDizisi);

//map:  yeni bir dizi ortaya çıkarırız.

const mapDizi = dizi.map(sayi => sayi * 3);

console.log(mapDizi);

//filter

const filtreliDizi = dizi.filter(sayi => sayi>2);
console.log(filtreliDizi);

//reduce

const toplam = dizi.reduce((acc,sayi)=>{   
    return acc + sayi;
});
console.log(toplam);