<template>
    <div class="dashboard-container">
        <div class="dashboard-title-area">
            <div class="dashboard-title-box">
                <h2><el-icon><DataBoard /></el-icon> 오늘의 환자 진료 대기장부</h2>
                <p id="dashboard-title-sub">오늘 예약한 환자의 진료 대기 현황을 한눈에 확인하세요.</p>
            </div>
            <el-button size="large" :icon="Plus" type="primary" id="add-patient">환자등록</el-button>
        </div>

        <StatsCard />
        <div class="dashboard-board-container">
            <div class="dashboard-search-area">
                <div class="date-selector-container">
                    <el-date-picker
                    v-model="selectedDate"
                    type="date"
                    placeholder="날짜 선택"
                    format="YYYY. MM. DD. (ddd)"
                    value-format="YYYY-MM-DD"
                    :clearable="false"
                    size="large"
                    class="custom-date-picker"
                    />
                    <el-button class="today-btn" size="small" @click="moveToToday" style="margin-left: 10px;">오늘</el-button>
                </div>
                <div class="dashboard-input-container">
                    <el-input v-model="input4" size="large" class="responsive-input" placeholder="환자명 또는 환자번호 검색">
                    <template #prefix>
                        <el-icon class="el-input__icon"><search /></el-icon>
                    </template>
                    </el-input>
                </div>
                <el-button size="large" :icon="Refresh">새로고침</el-button>
            </div>
            <div class="treatment-status-area">
                <div class="treatment-status"><strong>진료현황 6명</strong></div>
                <div id="treatment-status-notice">일부 환자의 상태를 예약시간순으로 표시합니다.</div>
            </div>
            <Dashboard />
            <div class="pagination-area">
                <div id="dashboard-summary-info">현재 7명 표시 · 전체대기 6명 / 진료중 1명 </div>
                <el-pagination class="pagination" layout="prev, pager, next" :total="100" />
            </div>
        </div>
        <div class="dashboard-warning-area">
            <el-icon><InfoFilled /></el-icon> 
            <div> 환자정보는 지료목적에 한해 열람해 주세요.</div>
        </div>
  </div>
</template>

<script setup>
import '@/assets/styles/dashboardView.css';
import { Plus, DataBoard, Search, Refresh, InfoFilled } from '@element-plus/icons-vue'
import StatsCard from '@/components/StatsCard.vue';
import Dashboard from '@/components/Dashboard.vue';
</script>