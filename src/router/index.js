import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PatientsView from '../views/PatientsView.vue'
import SchedulesView from '../views/SchedulesView.vue'
import PaymentsView from '../views/PaymentsView.vue'

const routes = [
  {path: '/', component :DashboardView},
  {path: '/Patients', component :PatientsView},
  {path: '/Schedules', component :SchedulesView},
  {path: '/Payments', component :PaymentsView},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
