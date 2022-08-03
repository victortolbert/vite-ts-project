<template>
  <div class="card">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur temporibus quae aliquam nobis nam accusantium, minima quam iste magnam autem neque laborum nulla esse cupiditate modi impedit sapiente vero?</p>
  </div>
</template>

<style lang="scss">
.wrap {
  background-image: radial-gradient(circle at top, #222, var(--background));
  display: grid;
  height: 100vh;
  place-items: center;
}

.card {
  background-color: var(--background);
  border: 2px solid lch(100% 0 0 / 0.25);
  border-radius: 16px;
  color: lch(100% 0 0 / 0.85);
  font-size: calc(1rem * var(--base));
  line-height: var(--base);
  max-width: 35ch;
  padding: calc(1rem * var(--base));
}

.card p {
  max-height: calc(4rem * var(--base)); /* Set a cut-off point for the content */
  overflow: hidden; /* Cut off the content */
  position: relative; /* needed for :after */
  color: white;
}

.card p:after {
  color: white;
  content: ""; /* Needed to render the pseudo */
  background-image: linear-gradient(to right, transparent, var(--background) 80%);
  display: block;
  height: calc(1rem * var(--base) + 1px);
  inset-block-end: 0; /* Logical property equivalent to `right: 0` */
  position: absolute;
  width: 100%; /* relative to the .card container */
}
</style>
