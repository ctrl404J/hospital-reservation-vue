<template>
  <div class="stats-dashboard-grid">
    <div class="stats-card">
      <div class="icon-wrapper grey-bg">
        <el-icon :size="20"><Calendar /></el-icon>
      </div>
      <div class="card-info">
        <div class="card-label">오늘 예약</div>
        <div class="card-value-group">
          <span class="card-number">18</span>
          <span class="card-unit">명</span>
          <span class="card-subtext">전체 환자</span>
        </div>
      </div>
    </div>
    <div class="stats-card">
      <div class="icon-wrapper blue-bg">
        <el-icon :size="20" color="#0091ff"><User /></el-icon>
      </div>
      <div class="card-info">
        <div class="card-label">진료 대기</div>
        <div class="card-value-group">
          <span class="card-number text-blue">6</span>
          <span class="card-unit">명</span>
          <span class="card-subtext">현재 대기</span>
        </div>
      </div>
    </div>
    <div class="stats-card">
      <div class="icon-wrapper grey-bg">
        <el-icon :size="20"><Service /></el-icon>
      </div>
      <div class="card-info">
        <div class="card-label">진료 중</div>
        <div class="card-value-group">
          <span class="card-number">2</span>
          <span class="card-unit">명</span>
          <span class="card-subtext">진행 중</span>
        </div>
      </div>
    </div>
    <div class="stats-card">
      <div class="icon-wrapper grey-bg">
        <el-icon :size="20"><CircleCheck /></el-icon>
      </div>
      <div class="card-info">
        <div class="card-label">진료 완료</div>
        <div class="card-value-group">
          <span class="card-number">10</span>
          <span class="card-unit">명</span>
          <span class="card-subtext">오늘 기준</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import '@/assets/styles/statsCard.css';
import {
  User,
  Calendar,
  Service,
  CircleCheck
} from '@element-plus/icons-vue'
</script>
<style scoped>

</style>