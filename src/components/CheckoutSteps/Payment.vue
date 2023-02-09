<script setup>
import { paymentMethods } from '~/assets/shippingData'
import { useCheckoutMachine } from '~/services/useCheckoutMachine'

const { state, send } = useCheckoutMachine()

const agreeToTerm = (event) => {
  send({ type: 'AGREE_TO_TERM', agreeToTerms: event.target.checked })
}

const selectPaymentMethod = (event, id) => {
  event.target.checked && send({ type: 'SELECT_METHOD', paymentMethod: id })
}

const isSelected = (id) => {
  return state.value.context.paymentMethod === id
}
</script>

<template>
  <h2>Payment</h2>

  <section>
    <ul>
      <li :key="method.id" v-for="method in paymentMethods">
        <label class="field -radio" :data-checked="isSelected(method.id)">
          <div>{{ method.description }}</div>

          <input
            type="radio"
            :checked="isSelected(method.id)"
            @change="(event) => selectPaymentMethod(event, method.id)"
          />
        </label>
      </li>
    </ul>

    <div>
      <label class="simple-field">
        <input type="checkbox" :value="state.context.agreeToTerms" @change="agreeToTerm" />

        <span>I agree to the terms and conditions</span>
      </label>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-inline: 10rem;
}
.field {
  --color: rgb(224, 224, 224);
  border: 2px solid var(--color);
  display: grid;
  padding: 1rem;
  margin-bottom: 1rem;
}

.field.-radio {
  grid-template-columns: 1fr 2rem;
  grid-column-gap: 1rem;
}

.field.-radio > input {
  align-self: center;
}

.field.-input {
  padding: 0;
}

.field.-input > div {
  padding: 0.25rem 0.5rem 0;
}

.field.-input > input {
  appearance: none;
  background: transparent;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
}

.field.-input[data-checked] > input {
  border-color: rgb(0, 109, 183);
}

.simple-field {
  margin: 1rem 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}
</style>
