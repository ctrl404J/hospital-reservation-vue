<template>
    <div class="patients-container">
        <div class="patients-title-area">
            <div class="title-box">
                <h2><el-icon><UserFilled /></el-icon> 환자목록</h2>
                <p style="color: #8c92a4;">등록된 환자의 기본 정보와 최근 내원 기록을 한눈에 확인하세요.</p>
            </div>
            <el-button size="large" :icon="Plus" type="primary" id="add-patient">환자등록</el-button>
        </div>
        <div class="patients-board-container">
            <div class="patients-search-area">
                <div class="patients-input-container">
                    <el-input v-model="input4" size="large" class="responsive-input" placeholder="환자명, 환자번호 또는 연락처 검색">
                    <template #prefix>
                        <el-icon class="el-input__icon"><search /></el-icon>
                    </template>
                    </el-input>
                </div>

                <el-select
                    v-model="value"
                    clearable
                    placeholder="성별·전체"
                    style="width: 150px"
                    size="large"
                >
                    <el-option
                    v-for="item in genderOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>

                <el-select
                    v-model="value"
                    clearable
                    placeholder="내원여부·전체"
                    style="width: 150px"
                    size="large"
                >
                    <el-option
                    v-for="item in visitOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>

                <el-button size="large" :icon="Refresh" type="primary">검색</el-button>
                <el-button size="large" :icon="Refresh">초기화</el-button>
            </div>
            <div class="treatment-status-area">
                <div class="treatment-status"><strong>전체환자 238명</strong></div>
                <div id="treatment-status-notice">환자번호 내림차순</div>
            </div>

            <Dashboard />

            <div class="pagination-area">
                <div id="patients-summary-info">전체 248명 중 1–10명 표시 </div>
                <el-pagination class="pagination" layout="prev, pager, next" :total="100" />
            </div>
        </div>
        <div class="warning-board">
            <el-icon><InfoFilled /></el-icon> 
            <div> 환자정보는 지료목적에 한해 열람해 주세요.</div>
        </div>
  </div>
</template>

<script setup>
import { Plus, UserFilled, Search, Refresh, InfoFilled } from '@element-plus/icons-vue' 
import Dashboard from '@/components/Dashboard.vue';
import { ref } from 'vue'
const value = ref('')
const genderOptions = [
    {
    value: 'Option1',
    label: '성별·전체',
  },
  {
    value: 'Option2',
    label: '남자',
  },
  {
    value: 'Option3',
    label: '여자',
  },
]
const visitOptions = [
    {
    value: 'Option1',
    label: '내원여부·전체',
  },
  {
    value: 'Option2',
    label: '내원',
  },
  {
    value: 'Option3',
    label: '미내원',
  },
]

</script>
<style scoped>

.patients-board-container {
    border: 1px solid #ebeef5;
    border-radius: 12px 12px 12px 12px;
}

.patients-title-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

#add-patient {
    margin-left: auto;
}

.patients-info-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ebeef5;
    gap: 16px;
}

.info-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ebeef5;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
}

.card-icon {
    margin: 15px;
}

.card-detail {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 40px;
}

.patients-search-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 12px 12px 0 0;
    padding: 15px;
    gap: 12px;
}

.patients-input-container {
    margin: auto;
    /* margin-right: 10px; */
    flex-grow: 1;
}

.treatment-status-area {
    display: flex;
    justify-content: center;
    padding: 13px;
    background-color: #fff;
    border: 1px solid #ebeef5;
}

.treatment-status {
    margin-right: auto;
    margin-left: 15px;
}

#treatment-status-notice {
    color: #8c92a4;
    font-size: 14px;
}

.pagination-area {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  padding: 17px 25px 17px 25px;
  border-radius: 0 0 12px 12px;
}

#patients-summary-info {
    color: #8c92a4;
    font-size: 14px;
}
.pagination {
    margin-left: auto;
}

.warning-board {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1;
    margin-top: 26px;
    color: #606266;
    font-size: 13px;
    gap: 8px;
}
</style>