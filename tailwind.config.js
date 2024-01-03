/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url(../img/background.webp)',
        'home-mobile': 'url(../img/about-mobile.webp)',
        'home-table': 'url(../img/about-table.webp)',
        'about-screen': 'url(../img/background-about.webp)',
        'skills-screen': 'url(../img/background-skills.webp)',
        'courses-screen': 'url(../img/background-courses.webp)',
        'courses-page': 'url(../img/courses-page.webp)',
        'portfolio-screen': 'url(../img/background-portfolio.webp)',
        'portfolio-page': 'url(../img/portfolio-page.webp)',
        'blog-screen': 'url(../img/background-blogs.webp)',
        'blog-page': 'url(../img/blogs-page.webp)',
        'contact-screen': 'url(../img/background-contact.webp)',
      },

      backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#10afef',
				'secondary': '#2c2d50',
			}),

      textColor:{
				'primary': '#10afef',
				'secondary': '#2c2d50',
			},
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
};
