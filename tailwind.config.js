/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1240px',
    },
    colors: {
      blackColor: '#000',
      blackColorDark: '#05060e',
      blackColorLight: '#3a3b42',
      blackColorMiddle: '#212229',
      blueColorLight: '#F2FAFF',
      dangerColor: '#d73a49',
      dangerColorConsole: '#FF3346',
      grayColorF3: '#f3f3f3',
      grayColorE7: '#e7e7ec',
      grayColorDb: '#dbdbdb',
      grayColorC3: '#c3c3c3',
      grayColor98: '#98989a',
      grayColor75: '#757575',
      grayColorCF: '#CFCFCF',
      primaryColorDark: '#133099',
      primaryColorLight: '#3050c1',
      primaryColorMiddle: '#1d3ba8',
      transparent: 'transparent',
      whiteColor: '#fff',
      whiteColorF3: '#F3F3F3',
    },
    container: {
      padding: { center: true, DEFAULT: '2rem', xl: '4rem' },
      center: true,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xs: ['12px', '15px'],
      sm: ['14px', '18px'],
      base: ['16px', '18px'],
      sm2: ['20px', '24px'],
      md: ['24px', '32px'],
      lg: ['32px', '40px'],
      xl: ['40px', '48px'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        md: '10px',
      },
    },
  },
  plugins: [],
};
