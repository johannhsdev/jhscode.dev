/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url(../img/background.png)',
        'home-mobile': 'url(../img/about-mobile.png)',
        'home-table': 'url(../img/about-table.png)',
        'about-screen': 'url(../img/background-about.png)',
        'skills-screen': 'url(../img/background-skills.png)',
        'courses-screen': 'url(../img/background-courses.png)',
        'portfolio-screen': 'url(../img/background-portfolio.png)',
        'blog-screen': 'url(../img/background-blogs.png)',
        'contact-screen': 'url(../img/background-contact.png)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
