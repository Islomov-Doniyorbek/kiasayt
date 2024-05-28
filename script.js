function exchange___Containers() {
    let c1 = document.querySelector(".container")
    let c2 = document.querySelector(".container2")
    let c3 = document.querySelector(".container3")
    let c4 = document.querySelector(".container4")
    let c5 = document.querySelector(".container5")
    let c6 = document.querySelector(".container6")
    let c7 = document.querySelector(".container7")


    let model = document.querySelectorAll("#model");
    let news = document.querySelectorAll("#buy");
    let head = document.querySelectorAll("#head");
    let map = document.querySelectorAll("#taklif");
    let payments = document.querySelectorAll("#payments");
    let passengers = document.querySelectorAll("#diller");
    let contacts = document.querySelectorAll("#contacts");

    model.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="block"
            c3.style.display="none"
            c4.style.display="none"
            c7.style.display="none"
            c5.style.display="none"
            c6.style.display="none"
        })
    })
    news.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="block"
            c4.style.display="none"
            c7.style.display="none"
            c5.style.display="none"
            c6.style.display="none"
        })
    })
    head.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="block"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            c6.style.display="none"
            c7.style.display="none"
        })
    })
    map.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="block"
            c5.style.display="none"
            c6.style.display="none"
            c7.style.display="none"
        })
    })
    payments.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="block"
            c6.style.display="none"
            c7.style.display="none"
        })
    })
    passengers.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            c6.style.display="block"
            c7.style.display="none"
        })
    })
    contacts.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            c6.style.display="none"
            c7.style.display="block"
        })
    })

    



}
exchange___Containers()


function model() {
    let models = document.querySelectorAll(".models span");
    let sectionIntoImg = document.querySelector(".section img")
    let nomi = document.querySelector(".section .name")
    let costi = document.querySelector(".section .cost")
    let imgs = [
        "./img/sonet.png",
        "./img/carnival.png",
        "./img/seltos.png",
        "./img/k5.png",
        "./img/k8.png",
        "./img/k9.png",
        "./img/ev6.png",
        "./img/ev9.png",
    ]
    let nomlar = [
        "Sonet",
        "Carnival",
        "Seltos",
        "K5",
        "K8",
        "K9",
        "EV6",
        "EV9",
    ]
    let narxlar = [
        "876 500 000",
        "996 400 000",
        "845 200 000",
        "421 500 000",
        "542 300 000",
        "554 500 000",
        "215 800 000",
        "354 400 000",
    ]

    models.forEach((e,i) => {
        sectionIntoImg.style.background = `url(./img/bg4.jpg)`;
        sectionIntoImg.style.backgroundRepeat = "no-repeat";
        sectionIntoImg.style.backgroundSize = "100% 100%";
        e.onclick = () => {
            sectionIntoImg.src = imgs[i];
            nomi.innerHTML = `${nomlar[i]}`;
            costi.innerHTML = `${narxlar[i]} so'mdan`;
            sectionIntoImg.classList.toggle("transition")
        }
    })
}
model()

function taklifBoxes() {
    
    let gridbox = document.querySelector(".gridbox");
    let n = 4;
    let imgs = [
        "./img/sportage.png",
        "./img/carnival.png",
        "./img/ev6.png",
        "./img/kia2.png",
    ]

    let text = [
        "Modelda-K5, Seltos, Sportage, Bongo, Cerato!",
        "Ortiqcha to‘lovlaringiz butun davr mobaynida 0%",
        "Kia Uzbekistandan qulay kredit shartlari",
        "Ortiqcha to‘lovlaringiz butun davr mobaynida 0%",
    ]
    for (let i = 0; i < n; i++) {
        gridbox.innerHTML += `
        <div class="box">
                    <div class="img">
                        <img src="${imgs[i]}" alt="5">
                    </div>
                    <div class="content">
                        ${text[i]}
                    </div>
        </div>
        `
        
    }
}
taklifBoxes()

function yangiliklar() {
    let block = document.querySelector(".news");
    let imglar = [
        "https://cdn.kia-motors.uz/uz/uploads/articles/2338/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2337/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2289/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2286/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2287/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2227/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2136/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2131/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2130/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2057/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2050/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2047/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2008/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2005/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/2004/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/1995/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/1794/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/1881/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/1867/article-original.jpg",
        "https://cdn.kia-motors.uz/uz/uploads/articles/1866/article-original.jpg",
    ]
    let contents = [
        "Kia yana ENG ZOʻRlar roʻyxatida: ketma-ket ikkinchi yil Kia «Yil brendi» nominatsiyasini qoʻlga kiritmoqda <br>21 Мая 2024",
        "Kia Sonet krossoverining baʼzi komplektatsiyalari uchun narxlar oʻzgarmoqda <br>15 Мая 2024",
        "Kia O'zbekiston bozoriga Sonet ixcham shahar krossoverini chiqarmoqda <br> 27 Марта 2024",
        "Kia EV9 2024 yildagi ayollar uchun eng zo’r avtomobil deb topildi <br> 11 Марта 2024",
        "O‘zbekistonda yangi Kia Sorentoning sotuvlari boshlandi <br> 27 Февраля 2024",
        "Kia kompaniyasi «What Car? Awards» 2024 tanlovining 4 ta mukofotiga sazovor bo’ldi <br> 1 Февраля 2024",
        "Toshkentda Kia EV9 flagman modelining tantanali taqdimoti bo‘lib o‘tdi. Narxlar ma'lum bo'ldi. <br> 21 Января 2024",
        "Good Design Awards 2023 tanlovida Kia kompaniyasi ikki marotaba g‘oliblikka erishdi <br> 16 Января 2024",
        "Kianing 2023 yil yakunlari bo’yicha sotuvlari natijalari <br> 8 Января 2024",
        "Kia brendi 2023 yilgi O‘zbekiston avtomobil sanoati reytingida birinchi o‘rinni egalladi <br> 30 Ноября 2023",
        "Kia Global Distributors Convention 2023 <br> 16 Октября 2023 ",
        "Kia K9 premium toifasidagi biznes-sedanining O‘zbekistonda sotuvlari boshlangani e’lon qilindi <br> 24 Августа 2023",
        "2023 yil birinchi yarimyilligi natijalari: Kia sotuvlar bo’yicha yangi rekordlar tomon yo‘nalmoqda <br> 5 Июля 2023",
        "Roodellning Kia Go sport va ko'ngilochar tadbiri <br> 7 Июня 2023",
        "Kia brendi “2022-yil brendi” tanlovining g'olibiga aylandi <br> 23 Мая 2023",
        "Kianing O'zbekistondagi ilk to'liq elektr avtomobili! <br> 5 Мая 2023",
        "O'zbekistonda 2023 yilning fevral oyidan yangilangan Kia Seltosning sotuvi boshlanadi <br> 21 Февраля 2023",
        "Kia brendi rasmiy ravishda 2022-yil yakunlariga ko'ra, O'zbekistonda yangi avtomobillarni sotish bo'yicha yetakchilar uchligiga kiritildi. <br> 16 Февраля 2023",
        "Hurmatli Kia avtomobillari xaridorlari va sohiblari! <br> 27 Января 2023",
        "Kia avtomobillarini boshlang‘ich to‘lovsiz xarid qiling! <br>24 Января 2023",
    ]

    for (let i = 0; i < 20; i++) {
        block.innerHTML += `
        <div class="cardCar">
                <div class="imgblock"><img src="${imglar[i]}" alt="k5"></div>
                <h4 class="new">
                    ${contents[i]}
                </h4>
            </div>
        `
        
    }
}
yangiliklar()

function diler() {
    let adres = [
        "Kia Sergeli",
        "Kia Yakkasaroy",
        "Kia Rohat",
        "Kia Kokcha",
        "Kia Andijan",
        "Kia Denov",
        "Kia Buxoro",
        "Kia Kokand",
        "Kia Samarqand Adm-Aster",
        "Kia Farg'ona",
        "Kia Termiz",
        "Kia Qibray",
        "Kia Jizzakh",
        "Kia Samarqand",
        "Kia Navoi",
        "Kia Urgench",
        "Kia Qarshi",
        "Kia Nukus",
        "Kia Kamashi",
        "Kia Sirdaryo",
        "Kia Namangan",
    ]
    let manzil = [
        "Manzil: 111503, Toshkent sh., Sergeli tumani, A.Navoiy massivi, TKAD Ish vaqti: пн. - вс.: 9:00 - 20:00",
        "Manzil: 10022, Toshkent sh., Yakkasaroy tumani, koʻch. Kichik xalqa yo‘li (Kichik halqa yo‘li), 70A Ish vaqti: пн. - вс.: 9:00 - 12:00",
        "Manzil: 100083, Toshkent, Bektemir tumani, Nurafshon MFY, Toshkent halqa avtomobil yo’li ko’chasi Ish vaqti: dush. - yaksh.: 9:00 - 20:00",
        "Manzil:10022, Toshkent sh. Beshqayrog‘och, 44a uy Ish vaqti: пн. - вс.: 9:00 - 20:00",
        "Manzil: 171003, Andijon, Jalabek KFY, S. Ashurov massivi     Ish vaqti: пн. - вс.: 9:00 - 20:00",
        "Manzil: 190100, Denov tumani, Lochin mahallasi, Xumo ko‘chasi     Ish vaqti: пн. - вс.: 9:00 - 19:00",
        "Manzil: 200100, Buxoro, A380, Gazli shossesi     Ish vaqti: пн. - вс.: 9:00 - 19:00",
        "Manzil: 150700 Qo'qon shahri, Movarounnahr ko'chasi, 94-uy Ish vaqti: пн. - вс.: 9:00 - 20:00",
        "Manzil: 180100, Samarqand. Rasadhona MSG, chupon ota massivi, 50A     Ish vaqti: du. - ya.: 9:00 - 20:00",
        "Manzil: 150100, Farg'ona, ko'ch. Aeroport 310A Ish vaqti: пн. - вс.: 9:00 - 19:00",
        "Manzil: 190100, Termiz, Saxovat mahallasi, ko'ch. Shimoliy Darvoza, 17 k Ish vaqti: пн. - вс.: 8:00 - 20:00",
        "Manzil:111200, Toshkent viloyati, Qibray tumani, Navoiy ko'chasi, 82 Ish vaqti: пн. - вс.: 9:00 - 20:00",
        "Manzil: 130100, Jizzax, I. Karimov, 1 Ish vaqti: пн. - вс.: 9:00 - 19:00",
        "Manzil: 140100, Samarqand shahri, ko'ch. Mirzo Ulug'bek 49A Ish vaqti: пн. - сб.: 9:00 - 19:00. Вск.: 09.00-18.00.",
        "Manzil: 210100, Navoiy shahri, ko'ch. Memorlar, 3-bino Ish vaqti: пн. - вс.: 9:00 - 20:00",
        "Manzil: 220100, Urganch, st. Sanoatchilar 25 Ish vaqti: пн. - вс.: 9:00 - 19:00",
        "Manzil: 180100, Qarshi, Gungon MFY, st. Jayxun, 30 yosh Ish vaqti: пн. - вс.: 8:00 - 20:00",
        "Manzil: 230200, Qoraqalpog 'iston Respublikasi, Nukus shahri, Beruni ko' chasi Ish vaqti: пн. - вс.: 9:00 - 19:00",
        "Manzil: 180500, Qashqadaryo viloyati, Qamashi sh. Qamashi, 55A Ish vaqti: пн. - вс.: 8:00 - 20:00",
        "Manzil: 120100, Gulistan, Ulugobod MFY, ul. Beruniy shox 74-uy Ish vaqti: dush. - yaksh.: 9:00 - 19:00",
        "Manzil: 160100, Namangan, Kurashxona MFY, Q.Mamarasulov ko‘chasi, 10-uy Ish vaqti: dush. - yaksh.: 9:00 - 20:00",
    ]
    let list = document.querySelector(".manzillar");
    for (let i = 0; i < adres.length; i++) {
        
        list.innerHTML += `
            <li>
                <div class="adres">${adres[i]}</div>
                <div class="manzil">${manzil[i]}</div>
                <div class="tel">&phone;&nbsp;&nbsp;1333</div>
            </li>
        `
        
    }
}
diler()
// window.addEventListener("scroll", counter)