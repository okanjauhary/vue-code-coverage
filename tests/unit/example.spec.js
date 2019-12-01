import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld)
  it('Register is component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('count is initially 1', () => {
    expect(wrapper.vm.count).toBe(1)
  })

  it('Button is present', () => {
    expect(wrapper.contains('button')).toBeTruthy()
  })

  it('count is increment 1 was button clicked', () => {
    const expected = 1
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(2)
  })
})
