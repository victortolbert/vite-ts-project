<script setup>
import { useCheckoutMachine } from '~/services/useCheckoutMachine'

const { state, send } = useCheckoutMachine()

const updateEmail = (event) => {
  send({
    type: 'ADD_EMAIL',
    email: event.target.value
  })
}

const updatePhone = (event) => {
  send({
    type: 'ADD_PHONE',
    phone: event.target.value
  })
}
</script>

<template>
  <h2>Billing Information</h2>

  <strong>Enter contact details</strong>

  <label class="field -input">
    <div>Email</div>

    <input
      type="text"
      placeholder="someone@example.com"
      :value="state.context.billing.email"
      @change="updateEmail"
    />
  </label>

  <label class="field -input">
    <div>Mobile number</div>

    <input
      type="text"
      placeholder="555-1234"
      :value="state.context.billing.phone"
      @change="updatePhone"
    />
  </label>
</template>
