<template>
  <div>
    <h1>Chat Room</h1>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message.text }}</li>
    </ul>
  </div>
</template>

<script setup>
import Pusher from 'pusher-js';
import { ref, onMounted } from 'vue';

const messages = ref([]);

onMounted(() => {
  const pusher = new Pusher('890ab872f2a45379781f', {
    cluster: 'ap1'
  });

  const channel = pusher.subscribe('private-chat.1'); // Channel ID bisa dinamis
  channel.bind('App\\Events\\MessageSent', function(data) {
    messages.value.push(data.chat);
  });
});
</script>
