<template>
  <div class="page">
    <div class="error-code">404</div>
    <div class="tips">Sorry, Page Could Not Found</div>
    <div class="action-area">
      <q-btn
        color="primary"
        label="Back"
        @click="
          () => {
            router.back();
          }
        "
      />
      <q-btn
        color="primary"
        outline
        label="Home"
        @click="
          () => {
            router.push('/');
          }
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-code {
  font-size: 300px;
  line-height: 350px;
}
.tips {
  color: #999999;
  margin-bottom: 40px;
}
.action-area {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
</style>
