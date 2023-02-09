<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
const types = {
  warning: "warning",
  primary: "primary",
  danger: "danger",
  success: "success",
};
export default {
  props: {
    size: { type: String, default: "medium" },
    outline: { type: Boolean, default: false },
    branded: { type: Boolean, default: false },
    color: { type: String, default: "primary" },
    rounded: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      const classes = [types[this.color]];
      classes.push(this.outline ? "outline" : "");
      classes.push(this.rounded ? "rounded" : "");
      classes.push(this.size);
      return classes;
    },
  },
};
</script>
