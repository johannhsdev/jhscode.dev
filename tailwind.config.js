/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url(../img/background.png)',
        'home-mobile': 'url(../img/about-mobile.png)',
        'home-table': 'url(../img/about-table.png)',
        'about-screen': 'url(../img/background-about.png)',
        'skills-screen': 'url(../img/background-skills.png)',
        'courses-screen': 'url(../img/background-courses.png)',
        'courses-page': 'url(../img/courses-page.png)',
        'portfolio-screen': 'url(../img/background-portfolio.png)',
        'portfolio-page': 'url(../img/portfolio-page.png)',
        'blog-screen': 'url(../img/background-blogs.png)',
        'blog-page': 'url(../img/blogs-page.png)',
        'contact-screen': 'url(../img/background-contact.png)',
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
