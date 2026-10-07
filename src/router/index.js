import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PatientsView from '../views/PatientsView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import PaymentView from '../views/PaymentView.vue'

const routes = [
  {path: '/', component :DashboardView},
  {path: '/Patients', component :PatientsView},
  {path: '/Schedules', component :ScheduleView},
  {path: '/Payments', component :PaymentView},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
