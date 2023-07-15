// Sayfa tamamen yüklendiğinde çalışacak kodlar için DOMContentLoaded olayı dinlenir.
document.addEventListener("DOMContentLoaded", () => {
  // Nesneleri tanımlama
  let list = document.querySelector("#list");
  let todoList = localStorage.getItem("todolist");
  const toasts = document.querySelectorAll("#liveToast");
  const addBtn = document.querySelector("#liveToastBtn");

  // Eğer local storage'da bir todo listesi varsa, liste elementinin içeriği bu değerle doldurulur
  if (todoList) {
    list.innerHTML = JSON.parse(todoList);
  }

  function newElement() {
    let task = document.querySelector("#task").value.trim();

    // Task değeri boş ise toast mesajı gösterilir
    if (!task) {
      $(toasts[1]).toast("show");
      return;
    }

    // Yeni liste öğesi oluşturulur
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
    $(toasts[0]).toast("show");

    // task input alanını temizler
    document.querySelector("#task").value = "";

    // Liste öğesine tıklama olayı dinleyicisi eklenir, "checked" sınıfını değiştirir ve todo listesini günceller
    li.addEventListener("click", () => {
      if (li.classList.contains("checked")) li.classList.remove("checked");
      else li.classList.add("checked");
      localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
    });

    // Silme butonu oluşturulur ve liste öğesini kaldırmak için bir olay dinleyicisi eklenir
    const delspan = document.createElement("span");
    delspan.innerHTML = "&times;";
    delspan.classList.add("close");
    delspan.addEventListener("click", () => {
      removeElement(li);
    });
    // Silme butonu liste öğesine eklenir ve liste öğesi listeye eklenir
    li.appendChild(delspan);

    // Todo listesini günceller
    localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
  }

  // Bir liste öğesini kaldırmak için kullanılan fonksiyon, liste öğesini kaldırır ve todo listesini günceller
  function removeElement(li) {
    li.remove();
    localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
  }

  // Enter tuşuna basıldığında yeni bir liste öğesi oluşturmak için input alanına bir olay dinleyicisi eklenir
  document.querySelector("#task").addEventListener("keypress", event => {
    if (event.key === "Enter") {
      newElement();
    }
  });

  // Her liste öğesi için tıklama olayına bir olay dinleyicisi eklenir, "checked" sınıfını değiştirir ve todo listesini günceller
  document.querySelectorAll("#list li").forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("checked")) item.classList.remove("checked");
      else item.classList.add("checked");
      localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
    });
  });

  // Her silme butonu için tıklama olayına bir olay dinleyicisi eklenir, ilgili liste öğesini kaldırır ve todo listesini günceller
  document.querySelectorAll("#list span").forEach(item => {
    let li = item.parentNode;
    item.addEventListener("click", () => {
      removeElement(li);
    });
  });

  // Ekle butonuna tıklama olayına dinleyicisi eklenir, yeni bir liste öğesi oluşturur
  addBtn.addEventListener("click", newElement);
});
