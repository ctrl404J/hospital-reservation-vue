<template>
    <div class="schedules-container">
        <div class="schedules-title-area">
            <div class="title-box">
                <h2><el-icon><Calendar /></el-icon> 의사일정</h2>
                <p style="color: #8c92a4;">등록된 환자의 기본 정보와 최근 내원 기록을 한눈에 확인하세요.</p>
            </div>
            <el-button size="large" :icon="Plus" type="primary" id="add-patient">환자등록</el-button>
        </div>
        
        <div class="schedules-board-container">
            <div>
                <FullCalendar :options="calendarOptions" />
                <!-- ★ -->
                 <!-- 2. Element Plus 다이얼로그 모달 창 -->
                    <el-dialog
                    v-model="dialogVisible"
                    title="새 일정 추가"
                    width="400px"
                    :before-close="handleBeforeClose"
                    >
                    <el-form label-position="top">
                        <el-form-item label="일정 내용">
                        <el-input 
                            v-model="eventTitle" 
                            placeholder="일정 내용을 입력하세요" 
                            clearable
                            @keyup.enter="handleSaveEvent" 
                        />
                        </el-form-item>
                        <el-form-item label="선택된 시간">
                        <p class="selected-time-text">{{ formattedTimeRange }}</p>
                        </el-form-item>
                    </el-form>

                    <template #footer>
                        <div class="dialog-footer">
                        <el-button @click="handleCancel">취소</el-button>
                        <el-button type="primary" :disabled="!eventTitle.trim()" @click="handleSaveEvent">
                            저장
                        </el-button>
                        </div>
                    </template>
                    </el-dialog>
                <!-- ★ -->
            </div>

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
                    <el-button size="large" :icon="SwitchButton">선택일 일정 수정</el-button>
                </div>
            </div>
        </div>
        <div class="warning-board">
            <el-icon><InfoFilled /></el-icon> 
            <div> 일정 변경 전 담당 의료진과 확인해 주세요.</div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue' 
import { Plus, Calendar, InfoFilled } from '@element-plus/icons-vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

// 캘린더 인스턴스 조작을 위한 ref
const fullCalendarRef = ref(null)

// 다이얼로그 및 입력 필드 상태 관리
const dialogVisible = ref(false)
const eventTitle = ref('')
const selectedRange = ref(null)

// 선택 영역과 데이터를 일괄 초기화하는 함수
const clearSelection = () => {
  eventTitle.value = ''
  selectedRange.value = null
  if (fullCalendarRef.value) {
    const calendarApi = fullCalendarRef.value.getApi()
    calendarApi.unselect() // 캘린더 화면의 파란 음영 제거
  }
}

// 선택된 시간 포맷팅 (다이얼로그 노출용)
const formattedTimeRange = computed(() => {
  if (!selectedRange.value) return ''
  const start = selectedRange.value.start.replace('T', ' ').substring(0, 16)
  const end = selectedRange.value.end.replace('T', ' ').substring(0, 16)
  return `${start} ~ ${end}`
})

// 모달 바깥쪽을 클릭하거나 우상단 X 버튼을 누를 때 호출
const handleBeforeClose = (done) => {
  clearSelection()
  done()
}

// 취소 버튼 클릭 시
const handleCancel = () => {
  dialogVisible.value = false
  clearSelection()
}

// 저장 버튼 클릭 시 (일정 추가 완료 후 선택 해제)
const handleSaveEvent = () => {
  if (!eventTitle.value.trim() || !selectedRange.value) return

  // 기존 events 배열에 새 일정 밀어넣기
  calendarOptions.value.events.push({
    title: eventTitle.value.trim(),
    start: selectedRange.value.start,
    end: selectedRange.value.end
  })

  dialogVisible.value = false
  clearSelection()
}

const calendarOptions = ref({
  plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: 'timeGridWeek',
  locale: 'ko',
  height: 'auto', 

  selectable: true,
  selectMirror: true, 
  
  // 💡 모달이나 외부를 눌러도 파란색 드래그 선택 영역이 풀리지 않도록 방지
  unselectAuto: false, 

  // 영역을 드래그했을 때 실행
  select: (selectionInfo) => {
    selectedRange.value = {
      start: selectionInfo.startStr,
      end: selectionInfo.endStr
    }
  },

  // 다른 빈 칸을 새로 드래그했을 때 기존 데이터를 비워줌
  unselect: () => {
    // 내부 상태 변화는 공통 함수에서 처리하므로 비워둡니다.
  },

  slotLabelFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  },
  slotMinTime: '09:00:00',
  slotMaxTime: '18:00:00',
  allDaySlot: false,

  headerToolbar: {
    left: 'add today prev,next title',
    center: '',
    right: 'timeGridWeek,timeGridDay,listWeek'
  },

  customButtons: {
    add: {
      text: 'Add Event',
      click: () => {
        // 드래그 선택 영역이 없을 때만 경고 알림
        if (!selectedRange.value) {
          alert('먼저 캘린더에서 등록할 시간대를 드래그하여 선택해주세요!')
          return
        }
        // 선택 영역이 있다면 그대로 유지한 채 모달 오픈
        dialogVisible.value = true
      }
    }
  },

  events: [
    { title: '출근', start: '2026-10-07T09:00:00', end: '2026-10-07T18:00:00' }
  ]
})
</script>
<style scoped>
.schedules-title-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

#add-patient {
    margin-left: auto;
}

.schedules-board-container {
    display: flex;
    flex-direction: row;
    /* align-items: center; -> 달력과 카드의 높이가 다르면 어색할 수 있으므로 상단 정렬(stretch나 flex-start)을 추천합니다 */
    align-items: flex-start; 
    gap: 20px; /* 달력과 카드 사이의 간격 */
    width: 100%;
}

/* 1. 달력이 들어있는 첫 번째 div */
.schedules-board-container > div:first-child {
    flex: 1; /* 남은 가로 공간을 최대한 차지하도록 설정 */
    min-width: 0; /* flex 자식 요소의 찌그러짐 방지 */
}

/* 2. 카드가 들어있는 두 번째 div */
.schedules-board-container > div:last-child {
    flex-shrink: 0; /* 카드가 지정된 크기(480px)보다 줄어들지 않도록 고정 */
    width: 11%;
    background-color: white;
}

.daily-notice-box {
    padding: 25px;
    border: 1px solid #ebeef5;
    border-radius: 15px 15px 15px 15px;
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