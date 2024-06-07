export default defineNuxtConfig({
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/pwa'],
  plugins: [
    { src: '~/plugins/pusher.client.js', mode: 'client' },
  ],
  axios: {
    baseURL: 'http://localhost:8000/api', // Pastikan ini adalah URL yang benar untuk backend API Anda
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' }
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Nuxt 3 App',
      lang: 'en'
    }
  }
});
