const titles = "I LOVE U :)".split('');
const titleElement = document.getElementById('title');
const pesanElement = document.getElementById('pesan');
let index = 0;

function appendTitle() {
    titleElement.style.fontSize = '4rem';
    titleElement.style.lineHeight = '1.2'; // Tinggi baris lebih rapat
    titleElement.style.transform = 'translateY(-15px)'; // Geser teks ke atas
    if (index < titles.length) {
        const span = document.createElement('span');
        span.textContent = titles[index];
        span.style.setProperty('--delay', `${index * 0.3}s`);
        titleElement.appendChild(span);
        index++;
        setTimeout(appendTitle, 300); // 300ms delay
    } else {
        setTimeout(showMessage, 5000); // 5 detik setelah title selesai
    }
}

function showMessage() {
    titleElement.style.transition = 'opacity 1s ease';
    titleElement.style.opacity = 0;

    setTimeout(() => {
        titleElement.innerHTML = '';
        pesanElement.style.opacity = 1;
        pesanElement.style.fontSize = '1.1rem';
        const message = "Selamat ulang tahun sayang:D, maaf ya sayang aku cuman bisa ngasih stylus doang, cuman itu yang bisa aku kasih:(, maafin aku ya kalo aku udah ngecewain kamu, kamu itu perempuan pertama yang aku cintai:), terima kasih ya sayang karena udah mau menerima ku apa adanya,semoga cita² mu bisa tercapai:D, I Love You sayang:)";
        typeMessage(message);
    }, 1000);
}

function typeMessage(message, i = 0) {
    if (i < message.length) {
        pesanElement.textContent += message[i];
        setTimeout(() => typeMessage(message, i + 1), 200); // Animasi ketik
    }
}

document.addEventListener("DOMContentLoaded", appendTitle);
