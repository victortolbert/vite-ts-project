<script>
// normal <script>, executed in module scope (only once)
// runSideEffectOnce()

// declare additional options
export default {
  inheritAttrs: false,
}
</script>

<script setup>
// executed in setup() scope (for each instance)
import { ref } from 'vue'
import FooBar from '@/components/FooBar.vue'

const props = defineProps({
  foo: String,
})

const emit = defineEmits(['change', 'delete'])

const vMyDirective = {
  beforeMount: (el) => {
    // do something with the element
    console.log({ el })
  }
}

const a = 1
const b = ref(2)

defineExpose({
  a,
  b,
})
// const post = await fetch('https:/api.victortolbert.com/posts/1').then(r => r.json())
</script>

<script>

</script>

<template>
  <div>
    <h1 v-my-directive>
      This is a Heading
    </h1>

    <FooBar />

    <h2>$slots</h2>
    <pre>
      {{ $slots }}
    </pre>

    <h2>$attrs</h2>
    <pre>{{ $attrs }}</pre>
    <!-- {{ post }} -->

    <slot />
  </div>
</template>
