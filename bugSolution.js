```javascript
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero.svg')",
      }
    },
  },
  plugins: [],
}

//In your component
<div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-lg">
  This is some text.
</div>
```