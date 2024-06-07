<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@nuxtjs/auth-next'

const email = ref('')
const password = ref('')
const { login } = useAuth()

const login = async () => {
  await login({
    data: {
      email: email.value,
      password: password.value
    }
  })
}
</script>
