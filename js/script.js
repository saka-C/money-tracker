
let selectedDescribe = null;

function selectRadioButton(id, describeElement) {
    const radioButton = document.getElementById(id);
    if (radioButton) {
        if (selectedDescribe) {
            selectedDescribe.classList.remove('checked');
        }
        selectedDescribe = describeElement;
        radioButton.click();
        describeElement.classList.add('checked');

    }
}

function goBack() {
    window.history.back(); // Fungsi untuk kembali ke halaman sebelumnya
}

<<<<<<< HEAD

// scrolled
// ================
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
})
=======
const btnPopup = document.getElementById('popupBtn');
const walletPopup = document.querySelector('.wallet-popup');



btnPopup.addEventListener("click", (e) => {
    walletPopup.classList.add("show");
    e.preventDefault();
});

function closeBtn(){
    walletPopup.classList.remove("show");
}
>>>>>>> c42e142aaba0b6cc77a9f3a878fad1ec04e47c73
