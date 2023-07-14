// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0];

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.length; i++){
//     alert(tumElemanlar[i].innerHTML);
// }


// var classElemanlari = document.getElementsByClassName("intro1");
// alert(classElemanlari[0].innerHTML);

// var queryElmanlari = document.querySelectorAll("p.intro1");
// alert(queryElmanlari.length);

// var isimElemanları = document.getElementsByName("musteriAdi");
// alert(isimElemanları[0].value);

// var mücahit = document.getElementById("mücahit").addEventListener("click",rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("div1").style.color = "red";
//     var isimElemanlari = document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value = "Derin"
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba JavaScript")
baslik.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(baslik,p2)

alert("P2 siliniyor");
div1.removeChild(p2);

alert("Değiştiriliyor");
var p1 = document.getElementById("p1");
div1.replaceChild(baslik,p1);