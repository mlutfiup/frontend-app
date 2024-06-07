import Pusher from 'pusher-js';

export default defineNuxtPlugin((nuxtApp) => {
  const pusher = new Pusher('890ab872f2a45379781f', {
    cluster: 'ap1',
    encrypted: true,
  });

  nuxtApp.provide('pusher', pusher);
});
