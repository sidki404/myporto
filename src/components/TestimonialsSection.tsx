'use client';

import { Star } from 'lucide-react';
import { usePreferences } from './Preferences';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Pemilik Toko Pakaian Online',
    project: 'Penjualan Marketplace & Media Sosial',
    quote: 'Tampilan produk menjadi lebih menarik dan alur promosinya lebih terarah. Proses pengerjaan juga komunikatif dan mudah disesuaikan dengan kebutuhan toko.',
    englishRole: 'Online Clothing Store Owner',
    englishProject: 'Marketplace & Social Media Sales',
    englishQuote: 'The products now look more appealing and the promotional flow is more focused. The process was communicative and easy to adapt to the store’s needs.',
  },
  {
    name: 'Siti Rahma',
    role: 'Guru Sekolah Dasar',
    project: 'Media Pembelajaran Interaktif',
    quote: 'Media pembelajarannya sederhana, menarik, dan mudah digunakan oleh siswa. Materi yang sebelumnya terasa monoton sekarang menjadi lebih interaktif.',
    englishRole: 'Elementary School Teacher',
    englishProject: 'Interactive Learning Media',
    englishQuote: 'The learning media is simple, engaging, and easy for students to use. Lessons that previously felt monotonous are now more interactive.',
  },
  {
    name: 'Budi Santoso',
    role: 'Teknisi Komputer',
    project: 'Layanan Servis Komputer & Laptop',
    quote: 'Informasi layanan tersusun rapi sehingga pelanggan lebih mudah memahami jenis servis yang tersedia. Hasilnya terlihat profesional dan dapat diakses dengan baik dari ponsel.',
    englishRole: 'Computer Technician',
    englishProject: 'Computer & Laptop Repair Service',
    englishQuote: 'The service information is well organized, making it easier for customers to understand the available repairs. The result looks professional and works well on mobile devices.',
  },
  {
    name: 'Rina Kusuma',
    role: 'Pemilik Usaha Katering',
    project: 'Menu Sehat & Paket Acara',
    quote: 'Menu dan paket katering dapat ditampilkan dengan lebih jelas dan menggugah selera. Pelanggan kini lebih mudah melihat pilihan dan menghubungi kami untuk memesan.',
    englishRole: 'Catering Business Owner',
    englishProject: 'Healthy Menus & Event Packages',
    englishQuote: 'The catering menus and packages are now presented more clearly and attractively. Customers can easily browse the options and contact us to place an order.',
  },
  {
    name: 'Dimas Saputra',
    role: 'Pengembang Aplikasi',
    project: 'Aplikasi Keuangan UMKM',
    quote: 'Alur pencatatan dibuat ringkas tanpa mengorbankan fungsi penting. Diskusi teknis berjalan lancar dan setiap masukan diterapkan dengan tepat.',
    englishRole: 'Application Developer',
    englishProject: 'Small Business Finance App',
    englishQuote: 'The recording flow was kept concise without sacrificing essential features. Technical discussions went smoothly and every suggestion was implemented accurately.',
  },
  {
    name: 'Nur Aisyah',
    role: 'Penjual Tanaman Hias',
    project: 'Toko Tanaman Hias Online',
    quote: 'Katalog tanaman terlihat bersih dan nyaman dilihat. Pengelompokan produknya memudahkan pelanggan menemukan tanaman yang sesuai untuk rumah mereka.',
    englishRole: 'Ornamental Plant Seller',
    englishProject: 'Online Plant Store',
    englishQuote: 'The plant catalog looks clean and pleasant to browse. Product grouping makes it easier for customers to find plants that suit their homes.',
  },
  {
    name: 'Fajar Ramadhan',
    role: 'Fotografer Lepas',
    project: 'Portofolio Fotografi',
    quote: 'Portofolio saya sekarang terasa lebih profesional tanpa mengalihkan perhatian dari hasil foto. Tampilan galeri cepat, rapi, dan tetap bagus di berbagai ukuran layar.',
    englishRole: 'Freelance Photographer',
    englishProject: 'Photography Portfolio',
    englishQuote: 'My portfolio now feels more professional without distracting from the photographs. The gallery is fast, polished, and looks great across different screen sizes.',
  },
  {
    name: 'Maya Lestari',
    role: 'Pemilik Usaha Kerajinan Tangan',
    project: 'Katalog Produk Kerajinan',
    quote: 'Detail rajutan dan aksesori dapat ditampilkan dengan cantik serta tetap mudah dipahami. Revisi desain ditangani dengan sabar sampai sesuai dengan karakter produk saya.',
    englishRole: 'Handicraft Business Owner',
    englishProject: 'Handicraft Product Catalog',
    englishQuote: 'The knitted products and accessories are presented beautifully while remaining easy to understand. Design revisions were handled patiently until they matched the character of my products.',
  },
  {
    name: 'Reza Maulana',
    role: 'Pemilik Kedai Kopi',
    project: 'Kedai Kopi & Ruang Kerja Bersama',
    quote: 'Konsep kedai dan ruang kerja bersama tersampaikan dengan kuat melalui desainnya. Informasi menu, fasilitas, dan lokasi kini lebih mudah ditemukan pelanggan.',
    englishRole: 'Coffee Shop Owner',
    englishProject: 'Coffee Shop & Coworking Space',
    englishQuote: 'The coffee shop and coworking concept comes through strongly in the design. Customers can now find menu, facility, and location information more easily.',
  },
  {
    name: 'Intan Permata',
    role: 'Konsultan Media Sosial',
    project: 'Promosi Digital UMKM',
    quote: 'Kebutuhan kampanye diterjemahkan menjadi tampilan yang konsisten dan mudah digunakan. Kolaborasinya responsif sehingga proses dari ide hingga publikasi berjalan efisien.',
    englishRole: 'Social Media Consultant',
    englishProject: 'Small Business Digital Promotion',
    englishQuote: 'Campaign requirements were translated into a consistent and easy-to-use experience. The collaboration was responsive, making the process from idea to publication efficient.',
  },
];

function Cards({ hidden = false, id = true }: { hidden?: boolean; id?: boolean }) {
  return (
    <div className="testimonial-group" aria-hidden={hidden || undefined}>
      {testimonials.map((item) => (
        <figure key={item.name} className="w-[320px] shrink-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:w-[390px]">
          <div className="flex gap-1 text-amber-400" aria-label={id ? '5 dari 5 bintang' : '5 out of 5 stars'}>
            {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={17} fill="currentColor" aria-hidden="true" />)}
          </div>
          <blockquote className="mt-4 min-h-32 text-sm leading-7 text-slate-600">“{id ? item.quote : item.englishQuote}”</blockquote>
          <figcaption className="mt-5 border-t border-slate-100 pt-4">
            <strong className="block text-sm text-slate-950">{item.name}</strong>
            <span className="mt-1 block text-xs text-slate-500">{id ? item.role : item.englishRole}</span>
            <span className="mt-1 block text-xs font-semibold text-[#6D5DE6]">{id ? item.project : item.englishProject}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';

  return (
    <section className="overflow-hidden bg-white py-24 [content-visibility:auto] [contain-intrinsic-size:auto_600px]" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="section-label">{id ? 'Testimoni Klien' : 'Client Testimonials'}</p>
        <h2 id="testimonials-title" className="section-title">{id ? 'Apa Kata Mereka?' : 'What Do They Say?'}</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">{id ? 'Kepercayaan klien adalah prioritas utama saya dalam setiap proyek.' : 'Client trust is my highest priority in every project.'}</p>
      </div>
      <div className="testimonial-loop mt-12 overflow-hidden">
        <div className="testimonial-track"><Cards id={id} /><Cards id={id} hidden /></div>
      </div>
    </section>
  );
}
