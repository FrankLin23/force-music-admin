<template>
  <div class="login-page">
    <q-card class="login-form-content">
      <div class="title">Force Music Admin</div>
      <q-form class="q-gutter-md" @submit="onSubmit(username, password)">
        <q-input
          filled
          label="Username: "
          v-model="username"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please Input Username']"
        />
        <q-input
          filled
          label="Password: "
          v-model="password"
          type="password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please Input Password']"
        />
        <q-toggle v-model="accept" label="Remember Me" />
        <div>
          <q-btn
            class="full-width"
            label="Login"
            type="submit"
            color="primary"
          />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const accept = ref(false);
const username = ref("");
const password = ref("");
const onSubmit = (username: string, password: string) => {};
</script>

<style scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form-content {
  width: 400px;
  padding: 20px;
}
.title {
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
}
</style>
