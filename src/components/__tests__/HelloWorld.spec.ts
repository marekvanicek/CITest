import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
    it('renders properly', () => {
        const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain('Hello Vitest')
    })
    it('test failingg :/', () => {
        const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain('2 + 2 is four brew')
    })
})
