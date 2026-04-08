// 1. Proje verilerini tutan dizi (Zorunlu: En az 5 proje [cite: 13])
// Tüm değişkenler Türkçe ve anlamlıdır[cite: 25, 32].
const projeListesi = [
    {
        baslik: "Hava Durumu Uygulaması",
        kategori: "Web",
        detay: "JavaScript ile anlık hava durumu verisi çeken uygulama.",
        gorsel: "https://via.placeholder.com/300x200"
    },
    {
        baslik: "Yemek Tarifleri Mobil",
        kategori: "Mobil",
        detay: "React Native ile geliştirilmiş tarif rehberi.",
        gorsel: "https://via.placeholder.com/300x200"
    },
    {
        baslik: "E-Ticaret Arayüzü",
        kategori: "Web",
        detay: "Modern alışveriş sitesi tasarımı ve sepet mantığı.",
        gorsel: "https://via.placeholder.com/300x200"
    },
    {
        baslik: "Banka Takip Sistemi",
        kategori: "Yazılım",
        detay: "Gelir-gider tablolarını yöneten finans yazılımı.",
        gorsel: "https://via.placeholder.com/300x200"
    },
    {
        baslik: "Kişisel Blog",
        kategori: "Web",
        detay: "SEO uyumlu, hızlı yüklenen blog altyapısı.",
        gorsel: "https://via.placeholder.com/300x200"
    }
];

const projeKonteyner = document.getElementById("proje-alani");

// 2. Projeleri ekrana basan fonksiyon (Zorunlu: forEach kullanımı [cite: 17, 32])
function projeleriGoster(liste) {
    projeKonteyner.innerHTML = ""; 
    liste.forEach((proje) => {
        // Kartlarda en az 3 farklı veri (Ad, Kategori, Detay) gösterilmektedir.
        const kart = `
            <div class="proje-karti">
                <img src="${proje.gorsel}" alt="${proje.baslik}">
                <h3>${proje.baslik}</h3>
                <p><strong>Kategori:</strong> ${proje.kategori}</p>
                <p>${proje.detay}</p>
            </div>
        `;
        projeKonteyner.innerHTML += kart;
    });
}

// 3. İnteraktif Filtreleme (Zorunlu: filter() metodu ve en az 2 kategori [cite: 19, 32, 35])
function projeleriFiltrele(kategoriIsmi) {
    if (kategoriIsmi === 'hepsi') {
        projeleriGoster(projeListesi); // Tümünü göster butonu 
    } else {
        const filtrelenmisProjeler = projeListesi.filter(p => p.kategori === kategoriIsmi);
        projeleriGoster(filtrelenmisProjeler);
    }
}

// 4. Karanlık/Aydınlık Mod (Zorunlu [cite: 18])
const temaButonu = document.getElementById("tema-degistir");
temaButonu.addEventListener("click", () => {
    document.body.classList.toggle("karanlik-tema");
});

// 5. Görsel Efektler (Zorunlu: En az 2 tane )

// A - Daktilo Efekti (Typewriter)
const metinAlani = document.querySelector(".daktilo-metni");
const kelimeler = ["Geleceğin Yazılımcısı", "Web Tasarımcı", "Problem Çözücü"];
let kelimeIndex = 0;
let harfIndex = 0;

function daktiloYaz() {
    if (harfIndex < kelimeler[kelimeIndex].length) {
        metinAlani.textContent += kelimeler[kelimeIndex].charAt(harfIndex);
        harfIndex++;
        setTimeout(daktiloYaz, 150);
    } else {
        setTimeout(sil, 2000);
    }
}

function sil() {
    if (harfIndex > 0) {
        metinAlani.textContent = kelimeler[kelimeIndex].substring(0, harfIndex - 1);
        harfIndex--;
        setTimeout(sil, 100);
    } else {
        kelimeIndex = (kelimeIndex + 1) % kelimeler.length;
        setTimeout(daktiloYaz, 500);
    }
}

// B - İnteraktif Yetenek Barları (Skill Bars)
function yetenekCubuklariniDoldur() {
    const cubuklar = document.querySelectorAll(".cubuk-doluluk");
    cubuklar.forEach(cubuk => {
        const yuzde = cubuk.getAttribute("data-yuzde");
        cubuk.style.width = yuzde + "%";
    });
}

// Sayfa yüklendiğinde çalışacaklar
window.onload = () => {
    projeleriGoster(projeListesi);
    daktiloYaz();
    yetenekCubuklariniDoldur();
};