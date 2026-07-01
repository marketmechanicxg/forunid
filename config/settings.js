/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "0907";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Alnida";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Back to December",             // ← GANTI JUDUL LAGU
    artist: "Taylor Swift",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "i never told you enough how much that smile meant to me. i should have." },
  { file: "img2.jpeg", caption: "you gave me so much, and i'm sorry i didn't always show that i noticed." },
  { file: "img3.jpeg", caption: "every moment with you deserved more care than i gave it. i know that now." },
  { file: "img4.jpeg", caption: "i found something rare in you. i'm sorry i didn't protect it the way i should have." },
  { file: "img5.jpeg", caption: "you made everything better just by being you. i'm sorry i made things harder than they had to be." },
  { file: "img6.jpeg", caption: "you were always the safest place i knew. i'm sorry i didn't make you feel that safe in return." },
  { file: "img7.jpeg", caption: "if i could go back, i'd choose to do so many things differently. i'd choose to be better." },
  { file: "img8.jpeg", caption: "still the person i think about when i wonder where i went wrong. i'm sorry." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"hai, apa kabar? uda cukup lama sejak kita berjalan di jalan yg berbeda. ga ada lagi pesan yg saling kita kirim, ga ada lagi cerita yg kita bagi seperti dulu, ga ada lagi kebiasaan kecil yang dulu selalu kita lakuin tanpa sadar. awalnya aku kira semua ini bakal terasa biasa aja seiring berjalannya waktu, tapi ternyata engga. namamu masih sering muncul di pikiranku tanpa alasan. kadang cuma gara-gara denger lagu tertentu, lewat tempat yang pernah kita datengin, atau bahkan hal-hal kecil yang tiba-tiba ngingetin aku sama kamu. aku ga tau sekarang hidupmu seperti apa, mungkin sekarang semuanya udah jauh lebih baik. maybe ada seseorang yg menemanimu, mendengarkan ceritamu, dan membuatmu tersenyum setiap hari. kalau memang begitu, aku harap dia bisa menjagamu lebih baik daripada aku dulu. aku bener-bener berharap kamu mendapatkan semua kebahagiaan yang pantas kamu miliki.",
"jujur aja, sampai hari ini aku masih sering merindukanmu. bukan karna aku ga bisa melupakan, tapi karna kenangan yang pernah kita buat terlalu indah untuk hilang begitu aja. masih banyak momen yang tanpa sadar aku inget, mulai dari obrolan sederhana, candaan yang mungkin sekarang udah ga lucu lagi buat orang lain, sampai hal-hal kecil yang dulu terasa biasa tapi sekarang justru jadi yang paling aku rindukan. kadang aku bertanya-tanya, apakah aku pernah terlintas di pikiranmu seperti kamu yg masih sering hadir di mimpiku???. apakah kamu juga pernah berhenti sebentar hanya karena tiba-tiba ada sesuatu yang ngingetin kamu sama aku? atau mungkin semua itu udah benar-benar selesai buat kamu. aku ga pernah tau jawabannya, dan mungkin memang ga akan pernah tau.",
"terima kasih uda perna menjadi bagian dari hidupku. terima kasih untuk semua tawa, perhatian, rasa nyaman, dan semua pelajaran yang pernah kamu kasih. kamu mungkin ga sadar, tapi banyak hal dalam diriku yang berubah setelah mengenal kamu. aku belajar tentang sayang, belajar tentang kehilangan, belajar tentang menghargai seseorang sebelum semuanya terlambat. meski akhirnya kita ga berjalan sampai tujuan yg sama, aku tetap bersyukur pernah mengenalmu. aku ga pernah menganggap semua yang pernah kita lewati sia-sia, karena semua itu akan selalu jadi bagian dari cerita yang paling berharga dalam hidupku. kalau boleh jujur, mungkin akan selalu ada bagian kecil di hatiku yang nyimpen cerita tentang kamu, bukan untuk menghalangi langkahku ke depan, tapi sebagai pengingat kalau aku pernah mencintai seseorang dengan begitu tulus.",
"jaga dirimu baik-baik ya. semoga semua hal baik selalu datang kepadamu. semoga langkahmu selalu dipermudah, semua impian yang sedang kamu perjuangkan bisa tercapai satu per satu, dan semoga kamu selalu dipertemukan dengan orang-orang yang tulus menyayangimu. kalau suatu saat nanti kamu sedang bahagia, aku harap senyumanmu tetap seindah yang dulu pernah aku lihat. dan jika suatu hari nanti semesta memang mengizinkan, mungkin kita akan dipertemukan kembali dalam versi yang lebih baik dari sebelumnya. mungkin bukan untuk mengulang cerita yang sama, tapi sekadar saling menyapa dan tersenyum, sambil menyadari bahwa kita pernah menjadi bagian yang sangat berarti dalam hidup masing-masing. Sampai saat itu tiba, aku akan tetap mendoakanmu dari jauh. Terima kasih untuk semuanya. 🤍"
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "where it all started",
    text:  "that exact moment when everything felt right, and i wish i had held onto that feeling instead of letting it slip.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the days i took for granted",
    text:  "just you, me, and those small simple moments that i didn't realize meant everything until they were gone.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "the storms i caused",
    text:  "we had our rough patches, and too many of them started with me. i'm sorry for every storm i brought into something that deserved to stay calm.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "what i should have been",
    text:  "you were the brightest part of my whole journey. i'm sorry i didn't always act like i knew that.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "i hope this year brings you the kind of calm you never quite got when you were with me. you deserve that peace." },
  { icon: "shell",   text: "i hope your days stay bright and your nights stay peaceful — the kind of quiet that heals, not the kind that hurts." },
  { icon: "star",    text: "may every little wish of yours slowly come true, right when you need it most. you've waited long enough for good things." },
  { icon: "compass", text: "wherever this year takes you, i hope you find people who show up the way you always deserved — consistently, and without making you wonder." },
  { icon: "anchor",  text: "stay grounded. stay whole. and please keep being exactly who you are — you never needed to change for anyone, especially not for me." },
  { icon: "heart",   text: "i'm sorry — genuinely. here's to you having a year full of moments that actually feel good, ones you'll want to keep forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "685895253762";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "hey, i just opened this. i don't really know what to say yet, but i read it. ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);