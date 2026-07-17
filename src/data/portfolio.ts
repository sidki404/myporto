export const SKILLS = [
  { name: 'HTML & CSS', icon: '/icons/html5.svg' },
  { name: 'Golang', icon: '/icons/go.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Backend Dev', icon: '/icons/laravel.svg' },
  { name: 'SA-MP Scripting', icon: '/icons/code.svg' },
  { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
];

export const PROJECTS = [
  {
    title: 'MotionGen',
    type: 'Laravel Project',
    description: 'Platform pembuatan gambar dan video berbasis AI dengan showcase publik, paket layanan, studio terproteksi, dan program afiliasi.',
    image: '/projects/motiongen.png',
    url: 'https://motiongen.my.id/',
    stack: ['Laravel', 'Livewire', 'MySQL'],
  },
  {
    title: 'MotionAPI',
    type: 'Golang Project',
    description: 'API terpadu untuk workflow generasi gambar dan video AI, dengan autentikasi Bearer token, status generasi, serta pengelolaan API key dan penggunaan.',
    image: '/projects/motionapi.png',
    url: 'https://api.motiongen.my.id/',
    stack: ['Golang', 'REST API', 'MySQL'],
  },
];
