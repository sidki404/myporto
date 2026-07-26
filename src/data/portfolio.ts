export const SKILLS = [
  { name: 'HTML & CSS', icon: '/icons/html5.svg' },
  { name: 'Golang', icon: '/icons/go.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Laravel', icon: '/icons/laravel.svg' },
  // { name: 'SA-MP Scripting', icon: '/icons/code.svg' },
  { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
];

export const PROJECTS = [
  {
    title: 'MotionGen',
    type: 'Laravel Project',
    description: 'Aplikasi Laravel untuk membuat gambar dan video dengan AI. Di dalamnya ada galeri publik, pilihan paket, studio khusus pengguna, dan program afiliasi.',
    image: '/projects/motiongen.png',
    url: 'https://motiongen.my.id/',
    stack: ['Laravel', 'Livewire', 'MySQL'],
  },
  {
    title: 'MotionAPI',
    type: 'Golang Project',
    description: 'REST API berbasis Go untuk proses pembuatan gambar dan video AI. API ini menangani Bearer token, status proses, API key, dan pencatatan penggunaan.',
    image: '/projects/motionapi.png',
    url: 'https://api.motiongen.my.id/',
    stack: ['Golang', 'REST API', 'MySQL'],
  },
];
