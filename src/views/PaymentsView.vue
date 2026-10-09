<template>
    <div class="dashboard-container">
        <div class="dashboard-title-area">
            <div class="dashboard-title-box">
                <h2><el-icon><DataBoard /></el-icon> 진료수납</h2>
                <p id="dashboard-title-sub">진료비와 미수납 내역을 확인하고 환자의 수납을 처리하세요.</p>
            </div>
            <el-button size="large" :icon="Plus" type="primary" id="add-patient">장부 내보내기</el-button>
        </div>

        <StatsCard />

        <div class="dashboard-board-container">
            <div class="dashboard-contents-container">
                <div class="dashboard-search-area">
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
                    <el-select
                        v-model="value"
                        clearable
                        placeholder="수납상태·전체"
                        style="width: 150px"
                        size="large"
                    >
                        <el-option
                        v-for="item in payStateOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                    <div class="dashboard-input-area">
                        <el-input v-model="input4" size="large" class="responsive-input" placeholder="환자명 또는 환자번호 검색">
                        <template #prefix>
                            <el-icon class="el-input__icon"><search /></el-icon>
                        </template>
                        </el-input>
                    </div>
                    <el-button size="large" :icon="Refresh" type="primary">검색</el-button>
                    <el-button size="large" :icon="Refresh">초기화</el-button>
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

        <div class="dashboard-notice-container">
            <div class="daily-notice-box">
                <div>
                    <div>오늘의 일정</div>
                    <p>2026.10.07(수)</p>
                </div>
                <div>
                    <div>김닥터</div>
                    <div>정형외과ㆍ진료실201</div>
                    <div>정상 진료</div>
                </div>
                <hr>
                <div>
                    <div>진료시간ㆍ총8시간</div>
                    <div>오전 외래<span>09:00-12:00</span></div>
                    <div>점심시간<span>12:00-13:00</span></div>
                    <div>오후 외래<span>13:00-18:00</span></div>
                </div>
                <div>
                    <div>예약환자<span>26명</span></div>
                    <div>예약가능<span>16명</span></div>
                    <p>오전 6명ㆍ오후10명 추가 가능</p>
                    <p>일일 예약 정원 42명</p>
                </div>
                <div>
                    휴식 및 진료불가 시간에는<br>
                    신규 예약을 등록할 수 없습니다.
                </div>
                <br>
                <div>
                    <el-button size="large" :icon="SwitchButton" type="primary">25500원 수납 처리</el-button>
                </div>
            </div>
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

const payStateOptions = [
    {
    value: 'Option1',
    label: '수납상태·전체',
  },
  {
    value: 'Option2',
    label: '수납',
  },
  {
    value: 'Option3',
    label: '미납',
  },
]

</script>
<style scoped>
.dashboard-board-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    /* flex: 1; */
    align-items: flex-start;
    border: none;
}

.dashboard-contents-container {
    width: 80%;
    border: 1px solid #ebeef5;
    border-radius: 12px;
}

.dashboard-notice-container {
    margin-left: 25px;
    width: 20%;
    border: 1px solid #ebeef5;
    border-radius: 12px;
    padding: 25px;
    background-color: white;
}


.dashboard-search-area {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background-color: #ffffff;
  padding: 12px 16px;
  border-radius: 8px;
  padding: 15px;
  gap: 8px;
}

.dashboard-input-area {
    flex: 1;
}



</style>