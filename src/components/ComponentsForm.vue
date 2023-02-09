<script>
import { useField, useForm } from 'vee-validate'
import { object, string, number, boolean } from 'yup'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ]
    }
  },
  setup() {
    const validationSchema = object({
      category: string().required(),
      title: string().required('A cool title is required').min(3),
      description: string().required(),
      location: string(),
      pets: number(),
      catering: boolean(),
      music: boolean()
    })
    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        pets: 1,
        catering: false,
        music: false
      }
    })
    const { value: category } = useField('category')
    const { value: title } = useField('title')
    const { value: description } = useField('description')
    const { value: location } = useField('location')
    const { value: pets } = useField('pets')
    const { value: catering } = useField('catering')
    const { value: music } = useField('music')

    const submit = handleSubmit(values => {
      console.log('submit', values)
    })

    return {
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      submit,
      errors
    }
  }
}
</script>

<template>
  <div>
    <h3>Create an Event</h3>
    <form @submit.prevent="submit">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="category"
        :error="errors.category"
      />
      <div>
        <section class="mt-8">
          <h4 class="text-lg font-bold">Name & describe your event</h4>
          <div class="mt-4">
            <BaseInput label="Title" type="text" v-model="title" :error="errors.title" />
          </div>
          <div class="mt-4">
            <BaseInput
              label="Description"
              type="text"
              v-model="description"
              :error="errors.description"
            />
          </div>
        </section>

        <section class="mt-8">
          <h4 class="text-lg font-bold">Where is your event?</h4>
          <div class="mt-4">
            <BaseInput label="Location" type="text" v-model="location" :error="errors.location" />
          </div>
        </section>

        <section class="mt-8">
          <h4 class="text-lg font-bold">Are pets allowed?</h4>
          <div class="mt-4">
            <BaseRadioGroup
              name="pets"
              :options="[
                { value: 1, label: 'Yes' },
                { value: 0, label: 'No' }
              ]"
              v-model="pets"
              :error="errors.pets"
            />
          </div>
        </section>
        <section>
          <h4 class="text-lg font-bold">Extras</h4>
          <div>
            <BaseCheckbox label="Catering" v-model="catering" :error="errors.catering" />
          </div>
          <div>
            <BaseCheckbox label="Live music" v-model="music" :error="errors.music" />
          </div>
        </section>
      </div>

      <div>
        <BaseButton type="submit" class="-fill-gradient" something="else">Submit</BaseButton>
      </div>
    </form>
  </div>
</template>

