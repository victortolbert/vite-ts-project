<template>
  <section class="example-section">
    <div class="container">
      <h3 class="title">
        Title
      </h3>
      <h4 class="subtitle">
        Subtitle
      </h4>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// #1e3050 dark:section-bg
// #071b3e dark:section-container-bg
// #f0f1f3 dark:section-text-color
// #61697b dark:section-subtitle-color

.example-section {
  padding: 20px;
  background: #1e3050;
  color: #f0f1f3;
  border-radius: 4px;
  margin-bottom: 20px;
}
.example-section .container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #071b3e;
}
.example-section .subtitle {
  color: #61697b;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
}
</style>
