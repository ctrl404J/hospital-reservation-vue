<template>
    <div class="header-container">
        <div class="header-title">
            <h2>🏥 제네럴 헬스케어 전산망</h2>
        </div>
        <div class="reception-btn">
            <el-button size="small">원무관리</el-button>
        </div>
        <el-space class="header-info-box" :size="10" spacer="|">
            <div class="logout-aria">
                <div>김민정님</div>
                <div>원무팀 • 관리자</div>
            </div>
            <div class="logout-aria">
                <el-button size="large" :icon="SwitchButton">로그아웃</el-button>
            </div>
        </el-space>
    </div>
</template>

<script setup>
import '@/assets/styles/appHeader.css';
import { SwitchButton } from '@element-plus/icons-vue';
</script>