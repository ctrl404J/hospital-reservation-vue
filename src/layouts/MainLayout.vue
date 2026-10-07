<template>
  <div class="common-layout">
    <el-container class="common-container">
      <el-header class="common-header"><AppHeader /></el-header>
      <el-container>
        <el-aside><AppSidebar /></el-aside>
        <el-main class="common-main"><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import '@/assets/styles/mainLayout.css';
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';
</script>
<style scoped>

</style>