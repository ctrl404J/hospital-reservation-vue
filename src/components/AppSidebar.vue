<template>
  <div class="side-menu-container">
    <el-row class="tac">
      <el-col :span="24">
        <h5 class="menu-group-title">진료관리</h5>
        <el-menu default-active="2" class="menu">
          <el-menu-item index="1">
            <el-icon><DataBoard /></el-icon>
            <span>대시보드</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><User /></el-icon>
            <span>환자목록</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><Calendar /></el-icon>
            <span>의사일정</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><CreditCard /></el-icon>
            <span>진료수납</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="side-info-container">
      <div class="sideInfo-title">
        <el-icon><QuestionFilled /></el-icon> 사용 안내 및 문의</div>
      <div class="side-info-box">
        <div class="side-info-content">
          <div>• 전산망 정상 운영중</div>
          <div class="side-info-sub">환자 개인정보를 안전하게 보호합니다.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/appSidebar.css';
import {
  DataBoard,
  User,
  Calendar,
  CreditCard,
  QuestionFilled
} from '@element-plus/icons-vue'
</script>
