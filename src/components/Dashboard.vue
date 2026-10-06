<template>
    <div class="responsive-table-wrapper">
        <el-table 
        :data="tableData" 
        height="100%" 
        style="width: 100%" 
        :cell-style="{ padding: '17px 0' }" 
        :header-cell-style="{ backgroundColor: '#F8FAFB', color: '#1F2937', fontWeight: 'bold', padding: '16px 0'}"
        >
            <el-table-column prop="id" label="번호" width="180" />
            <el-table-column prop="patientName" label="환자명" width="180" />
            <el-table-column prop="department" label="진료과" width="180" />
            <el-table-column prop="doctorName" label="담당의" width="180" />
            <el-table-column prop="reservationTime" label="예약시간" />
            <el-table-column prop="status" label="상태" width="180" />
        </el-table>
    </div>
</template>
<script setup>
const tableData = [
  {
    id: '1',
    patientName: 'Tom',
    department: '2016-05-03',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
  {
    id: '2',
    patientName: 'Tom',
    department: '2016-05-02',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
  {
    id: '3',
    patientName: 'Tom',
    department: '2016-05-04',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
  {
    id: '4',
    patientName: 'Tom',
    department: '2016-05-01',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
  {
    id: '5',
    patientName: 'Tom',
    department: '2016-05-08',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
  {
    id: '6',
    patientName: 'Tom',
    department: '2016-05-06',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '진료중',
  },
  {
    id: '7',
    patientName: 'Tom',
    department: '2016-05-07',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
   {
    id: '8',
    patientName: 'Tom',
    department: '2016-05-07',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
   {
    id: '9',
    patientName: 'Tom',
    department: '2016-05-07',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
   {
    id: '10',
    patientName: 'Tom',
    department: '2016-05-07',
    doctorName: '정약용',
    reservationTime: '09:30',
    status: '대기중',
  },
]
</script>
<style scoped>
.responsive-table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

:deep(.el-table .el-table__cell .cell) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
  padding-left: 25px;
}

:deep(.el-table th.el-table__cell) {
  background-color: #F8F9FA !important;
  color: #1F2937 !important;
  font-weight: 600 !important;
}

:deep(.el-table) {
  min-width: 800px; 
}
</style>