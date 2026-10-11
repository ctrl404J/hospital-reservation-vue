<template>
    <div class="payments-container">
        <div class="payments-title-area">
            <div>
                <h2>진료수납</h2>
                <p id="payments-title-sub">진료비와 미수납 내역을 확인하고 환자의 수납을 처리하세요.</p>
            </div>
            <el-button size="large" :icon="Download" id="export-ledger">장부 내보내기</el-button>
        </div>
        <StatsCard />
        <div class="payments-input-container">
            <div class="payments-search-area">
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
                <div class="payments-input-area">
                    <el-input v-model="input4" size="large" class="responsive-input" placeholder="환자명 또는 환자번호 검색">
                    <template #prefix>
                        <el-icon class="el-input__icon"><search /></el-icon>
                    </template>
                    </el-input>
                </div>
                <el-button size="large" type="primary">검색</el-button>
                <el-button size="large" :icon="RefreshLeft">초기화</el-button>
            </div>
        </div>
        <div class="payments-contents-container">
            <div class="payments-board-area">
                <div class="payments-status-area">
                    <div class="payments-status">
                        <strong>수납대상 내역</strong>
                        <el-tag
                            round
                            style="
                            background-color: #ecf5ff;
                            border-color: #ecf5ff;
                            color: #409eff;
                            font-weight: 500;
                            margin-left: 12px;
                            "
                        >
                        <strong>6건</strong>
                        </el-tag>
                    </div>
                    <div id="medical-status-notice">10. 07.  · 진료시간순</div>
                </div>
                <Dashboard />
                <div class="pagination-area">
                    <div id="dashboard-summary-info">현재 7명 표시 · 전체대기 6명 / 진료중 1명 </div>
                    <el-pagination class="pagination" layout="prev, pager, next" :total="100" />
                </div>
            </div>
            <div class="payments-notice-container">
                <div class="payments-notice-header">
                    <strong>진료비 상세 및 수납</strong>
                    <div class="flex gap-2 mt-4">
                        <el-tag
                            round
                            style="
                            background-color: #fdf5e6;
                            border-color: #fdf5e6;
                            color: #8b5a2b;
                            font-weight: 500;
                            "
                        >
                            미수납
                        </el-tag>
                    </div>
                </div>
                <div class="payments-notice-body">
                    <div class="payer-header-box">
                        <h3 id="payer-name"><strong>홍길동</strong></h3>
                        <div class="payer-info">환자번호 2026-0101 · 정형외과 / 김닥터</div>
                        <div class="payer-info">진료일 2026. 10. 07. (수) 09:30</div>
                    </div>

                    <div class="medical-items-headr">
                        <span class="label">진료항몽</span>
                        <span class="value">금액</span>
                    </div>
                    <div class="medical-items-body">
                        <div class="medical-items-row">
                            <span class="label">진찰료</span>
                            <span class="value">25,000원</span>
                        </div>
                        <div class="medical-items-row">
                            <span class="label">영상검사료</span>
                            <span class="value">40,000원</span>
                        </div>
                        <div class="medical-items-row">
                            <span class="label">처치료</span>
                            <span class="value">20,000원</span>
                        </div>
                    </div>
                    
                    <div class="total-amount">
                        <strong>총진료비</strong><span>150,000원</span>
                    </div>
                        <div class="payment-detail-box">
                            <div class="payment-detail-row">
                                <span class="label">보험 부담금</span>
                                <span class="value">59500원</span>
                            </div>
                            <div class="payment-detail-row">
                                <span class="label">본인부담금</span>
                                <span class="value">25500원</span>
                            </div>
                            <div class="payment-detail-row">
                                <span class="label">기수납액</span>
                                <span class="value">0원</span>
                            </div>
                        </div>
                        <div class="unpaid-box">
                            <span class="label">미수납 잔액</span>
                            <span class="value"><strong>35500원</strong></span>
                        </div>
                    
                    <div>
                        <strong>결제 방법</strong>
                        <div class="payments-button-group">
                            <el-button type="primary" size="large" plain>신용카드</el-button>
                            <el-button type="primary" size="large" plain>현금</el-button>
                            <el-button type="primary" size="large" plain>계좌이체</el-button>
                        </div>
                    </div>
                    <div class="total-amount-box">
                        <div class="label">수납 예정금액</div>
                        <el-input v-model="totalAmount" size="large" class="total-amount-input"/>
                    </div>
                    <div>
                        <el-button size="large" :icon="SwitchButton" type="primary" id="total-amount-button">25500원 수납 처리</el-button>
                    </div>
                    <br>
                    <div id="payment-notice-text">수납 후 잔액 0원 · 영수증 발급 가능</div>
                </div>
            </div>
        </div>
        <div class="dashboard-warning-area">
            <el-icon><InfoFilled /></el-icon> 
            <div> 환자정보는 진료목적에 한해 열람해 주세요.</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Download, RefreshLeft, Search, InfoFilled } from '@element-plus/icons-vue';
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
];

const totalAmount = ref("25500원");

</script>
<style scoped>
.payments-title-area {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

#export-ledger {
    margin-left: auto;
}

#payments-title-sub {
    color: #616E80;
}

.payments-input-container {
    border: 1px solid #ebeef5;
    border-radius:12px;
    padding: 15px;
    background-color: #ffffff;
}

.payments-search-area {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ffffff;
    border-radius: 12px;
    padding-right: 12px;
    gap: 12px;
    flex: 1;
}

.payments-input-area {
    margin-left: auto;
    width: 30%;
}

.payments-status-area {
    display: flex;
    justify-content: center;
    padding: 13px;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 12px 12px 0 0;
}

.payments-status {
    margin-right: auto;
    margin-left: 15px;
}

.payments-contents-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    margin-top: 26px;
}

.payments-board-area {
    width: 80%;
    border: 1px solid #ebeef5;
    border-radius:12px 12px 12px 12px;
    background-color: #ffffff;
}

.payments-notice-container {
    margin-left: 25px;
    width: 20%;
    border: 1px solid #ebeef5;
    border-radius: 12px;
    /* padding: 25px; */
    background-color: white;
}

.payments-notice-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px 15px 25px;
    border-bottom: 1px solid #ebeef5;
}

.payments-notice-body {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    padding: 5px 25px 25px 25px;
}

#payer-name {
    margin: 0;
    padding: 10px 10px 0 0;
}

.payer-header-box {
    display: flex;
    flex-direction: column;
}

.payer-info {
    font-size: 13px;
    color: #596474;
    margin-top: 6px;
}

.medical-items-headr {
    display: flex;
    justify-content: space-between;
    background-color: #F7F9FB;
    margin-top: 20px;
    margin-bottom: 12px;
    color: #596474;
}

.medical-items-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.medical-items-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E2E8F0;
}

.medical-items-row .label {
    color: #596474;
}

.total-amount {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 12px;
}

.payment-detail-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.payment-detail-row {
    display: flex;
    justify-content: space-between;
}

.payment-detail-row .label {
    color: #596474;
}

.unpaid-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ECF5FF;
    margin: 20px 0 20px 0;
    padding: 15px;
    color: #409EFF;
    border-radius: 10px;
}

.unpaid-box .value {
    font-size: 20px;
}


.payments-input-area {
    flex: 1;
}

.payments-button-group {
    display: flex;
    width: 100%;
    gap: 8px;
    margin-top: 8px;
}

.payments-button-group button.el-button {
    flex: 1;
}

.total-amount-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.total-amount-box .label {
    color: #596474;
}

.total-amount-box .total-amount-input {
    width: 180px;
}

.total-amount-input :deep(.el-input__wrapper input) {
  text-align: right;
}

#total-amount-button {
    width: 100%;
    margin-top: 20px;
    flex: 1;
}

#payment-notice-text {
    color: #596474;
    font-size: 13px;
}

</style>