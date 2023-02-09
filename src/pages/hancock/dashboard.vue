<template>
  <page-wrapper>{{ statuses }}</page-wrapper>
</template>

<script setup>
const statuses = [{
  status: 'Triage',
  quantity: '444',
},
{
  status: 'Call Queue',
  quantity: '325',
},
{
  status: 'Schedule',
  quantity: '1390',
},
{
  status: 'Assigned',
  quantity: '2556',
},
{
  status: 'Confirmed',
  quantity: '767',
},
{
  status: 'Working',
  quantity: '80',
},
{
  status: 'Review',
  quantity: '269',
},
{
  status: 'Complete',
  quantity: '53',
},
{
  status: 'Billed',
  quantity: '824',
},
{
  status: 'Closed',
  quantity: '324',
},
{
  status: 'Hold',
  quantity: '71',
},
{
  status: 'Pending',
  quantity: '462',
},
{
  status: 'TOTAL',
  quantity: '7565',
}]
</script>
