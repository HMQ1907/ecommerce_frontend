<script setup lang="ts">
import EmployeeStatisticsStatus from '@/components/employees/organisms/EmployeeStatisticsStatus'
import TotalEmployeeInMonth from '@/components/employees/organisms/TotalEmployeeInMonth'
import TotalEmployeeSalaryInMonth from '@/components/employees/organisms/TotalEmployeeSalaryInMonth'

definePageMeta({
  action: 'view',
  resource: 'dashboard',
})
</script>

<template>
  <div class="tw-px-2">
    <div class="tw-pb-2">
      <employee-statistics-status />
    </div>
    <div class="tw-pb-2">
      <total-employee-in-month />
    </div>
    <div>
      <total-employee-salary-in-month />
    </div>
  </div>
</template>
