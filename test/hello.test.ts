import { mount } from '@vue/test-utils'
import Hello from '../src/components/Hello.vue'

test.skip('mount component', async () => {
  expect(Hello).toBeTruthy()

  const wrapper = mount(Hello, {
    propsData: {
      count: 4,
    },
  })

  expect(wrapper.text()).toContain('4 x 2 = 8')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('button').trigger('click')
  await nextTick()

  expect(wrapper.text()).toContain('4 x 3 = 12')

  await wrapper.get('button').trigger('click')
  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 5 = 20')
  expect(wrapper.html()).toMatchSnapshot()
})
