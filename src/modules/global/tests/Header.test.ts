import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils'
import Header from '../components/HeaderLayout.vue'

describe('Header', () => {
    test('When logged in, the logout button is visible', () => {
        const wrapper = mount(Header, {props: {
            loggedIn: true,
        }})

        expect(wrapper.find('button').text()).toBe('Log Out')
    })

    test('When logged out, only the login button is visible', () => {
        const wrapper = mount(Header, {props: {
            loggedIn: false,
        }})

        expect(wrapper.find('button').text()).toBe('Log In')
    })

    test('Loging out outside of the header', async () => {
        const wrapper = mount(Header, {props: {
            loggedIn: true,
        }})

        let button = wrapper.find('button')
        expect(button.text()).toBe('Log Out')

        await wrapper.setProps({loggedIn: false})
        button = wrapper.find('button')
        expect(button.text()).toBe('Log In')
    })

    test('Loging out inside of the header', async () => {
        const wrapper = mount(Header, {props: {
            loggedIn: true,
        }})

        let button = wrapper.find('button')
        expect(button.text()).toBe('Log Out')

        await button.trigger('click')

        button = wrapper.find('button')
        expect(button.text()).toBe('Log In')
    })
})

