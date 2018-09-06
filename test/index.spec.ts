import { mount, createLocalVue } from '@vue/test-utils'
import LazyComponents from '../src/index'
import Node from './fixtures/Node.vue'

describe('lazyComponents option', () => {
  let localVue: ReturnType<typeof createLocalVue>
  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(LazyComponents)
  })

  it('allows lazyComponents option', () => {
    const wrapper = mount(Node, {
      localVue,
      propsData: {
        value: ['foo', ['bar', 'baz']]
      }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
<ul>
  <li>
    <p>foo</p>
  </li>
  <li>
    <ul>
      <li>
        <p>bar</p>
      </li>
      <li>
        <p>baz</p>
      </li>
    </ul>
  </li>
</ul>
`)
  })

  it('does not overwrite already existing component', () => {
    const Foo = {
      render(h: Function) {
        return h('div', 'foo')
      }
    }

    const LazyFoo = {
      render(h: Function) {
        return h('div', 'lazy-foo')
      }
    }

    const Root = {
      components: {
        Foo
      },

      lazyComponents: () => ({
        Foo: LazyFoo
      }),

      render(h: Function) {
        return h('Foo')
      }
    }

    const wrapper = mount(Root, {
      localVue
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`<div>foo</div>`)
  })
})
