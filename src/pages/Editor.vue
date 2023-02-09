<script setup>
import { MyEditor } from '~/components/VueEditor'

const markdown = `
# Milkdown Test
## Blockquote
> Milkdown is an editor.
## Marks Paragraph
Hello, ***milkdown* nice \`to\` meet *you***!
There should be a line break before this.
---
## Image and Link
**Of course you can add image! ![cat](https://images.news18.com/ibnlive/uploads/2021/06/1623900306_untitled-design-2021-06-17t085747.057.png "kitty")**
Your *[link is here](https://bing.com "bing")*, have a look.
## Lists
* list item 1
    1. is this the real life
    2. is this just fantasy
* list item 2
    * sub list item 1
        some explain
    * sub list item 2
* list item 3

## Code
\`\`\`javascript
const milkdown = new Milkdown();
milkdown.create();
\`\`\`
---

Now you can play!
`;
</script>

<template>
  <div>
    <my-editor :markdown="markdown" />
  </div>
</template>

<style>
.my-quote {
  border-left: 4px solid #000;
  padding-left: 20px;
}

.heading1 {
  font-size: 48px;
}

.heading2 {
  font-size: 36px;
}

.heading3 {
  font-size: 24px;
}
</style>
