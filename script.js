// 1. Proje verilerini tutan dizi (Zorunlu: En az 5 proje)
// Doğa dostu temaya uygun içeriklerle güncellendi.
const projeListesi = [
    {
        baslik: "Yeşil Şehir Haritası",
        kategori: "Web",
        detay: "Şehirdeki geri dönüşüm noktalarını ve parkları gösteren interaktif harita.",
        gorsel: "https://images.unsplash.com/photo-1518005020250-5803612467d1?auto=format&fit=crop&w=400"
    },
    {
        baslik: "Karbon Ayak İzi Hesaplayıcı",
        kategori: "Mobil",
        detay: "Günlük aktivitelerin doğaya etkisini hesaplayan React Native uygulaması.",
        gorsel: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=400"
    },
    {
        baslik: "Sürdürülebilir E-Ticaret",
        kategori: "Web",
        detay: "Sadece çevre dostu ürünlerin satıldığı modern bir arayüz çalışması.",
        gorsel: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400"
    },
    {
        baslik: "Güneş Paneli Takip Sistemi",
        kategori: "Yazılım",
        detay: "Panellerden gelen enerji verilerini anlık olarak grafiklere döken yazılım.",
        gorsel: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=400"
    },
    {
        baslik: "Doğa Blogu",
        kategori: "Web",
        detay: "Sıfır atık yaşam tarzını teşvik eden, SEO uyumlu blog altyapısı.",
        gorsel: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400"
    }
];

const projeKonteyner = document.getElementById("proje-alani");

// 2. Projeleri ekrana basan fonksiyon (Zorunlu: forEach kullanımı)
function projeleriGoster(liste) {
    if (!projeKonteyner) return; // Hata yönetimi
    projeKonteyner.innerHTML = ""; 
    liste.forEach((proje) => {
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

// 3. İnteraktif Filtreleme (Zorunlu: filter() metodu)
function projeleriFiltrele(kategoriIsmi) {
    if (kategoriIsmi === 'hepsi') {
        projeleriGoster(projeListesi);
    } else {
        const filtrelenmisProjeler = projeListesi.filter(p => p.kategori === kategoriIsmi);
        projeleriGoster(filtrelenmisProjeler);
    }
}

// 4. Karanlık/Aydınlık Mod (Zorunlu)
const temaButonu = document.getElementById("tema-degistir");
if (temaButonu) {
    temaButonu.addEventListener("click", () => {
        document.body.classList.toggle("karanlik-tema");
    });
}

// 5. Görsel Efektler (Zorunlu: En az 2 tane)

// A - Daktilo Efekti
const metinAlani = document.querySelector(".daktilo-metni");
const kelimeler = ["Doğa Dostu Yazılımcı", "Sürdürülebilir Çözümler", "Yeşil Kod Geliştiricisi"];
let kelimeIndex = 0;
let harfIndex = 0;

function daktiloYaz() {
    if (metinAlani) {
        if (harfIndex < kelimeler[kelimeIndex].length) {
            metinAlani.textContent += kelimeler[kelimeIndex].charAt(harfIndex);
            harfIndex++;
            setTimeout(daktiloYaz, 150);
        } else {
            setTimeout(sil, 2000);
        }
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

// B - İnteraktif Yetenek Barları
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