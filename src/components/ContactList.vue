<script>
export default {
  props: ['contacts'],
}
</script>

<template>
  <div class="card">
    <h1 class="text-2xl font-bold mb-6">
      Your Contacts
    </h1>
    <div>
      <div v-for="contact in contacts" :key="contact.id" class="flex items-center spaced-y-6">
        <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
        <div>
          <div class="font-bold">
            {{ contact.name.first }} {{ contact.name.last }}
          </div>
          <div class="text-grey-dark">
            {{ contact.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-list {
  border-top-width: 1px;
  border-color: #f1f5f8;
}
.contact-list-item {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem;
  border-bottom-width: 1px;
  border-color: #f1f5f8;
}
.contact-list-item.draggable-source--is-dragging {
  background-color: #f1f5f8;
}
.contact-list-item.draggable-source--is-dragging > * {
  opacity: 0;
}
.contact-list-contact {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.contact-list-avatar {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  display: block;
  margin-right: 0.5rem;
}
.contact-list-name {
  font-weight: 700;
}
.contact-list-email {
  color: #8795a1;
}
.contact-list-handle {
  margin-left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  cursor: move;
  color: #b8c2cc;
}
.contact-list-handle:hover {
  color: #3d4852;
}
</style>
