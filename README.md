# View (UI) component patterns

> Node.js 14.18+ / 16+ is now required.

## Vue 2.7

Despite Vue 3 now being the default version, we understand that there are still many users who have to stay on Vue 2 due to dependency compatibility, browser support requirements, or simply not enough bandwidth to upgrade. In Vue 2.7, we have backported some of the most important features from Vue 3 so that Vue 2 users can benefit from them as well.

[Read More](https://blog.vuejs.org/posts/vue-2-7-naruto.html)

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [Vite 3.0](https://vitejs.dev/)
- [Vue 2.7](https://blog.vuejs.org/posts/vue-2-7-naruto.html)
  - [Composition API][4] with [`<script setup>`][5] conveniences
  - [Options API][3]
  - [Class Component API][1] with [Vue Property Decorator][2]

[1]: https://class-component.vuejs.org/
[2]: https://github.com/kaorun343/vue-property-decorator#readme
[3]: https://vuejs.org/api/options-state.html
[4]: https://vuejs.org/api/composition-api-setup.html
[5]: https://vuejs.org/api/sfc-script-setup.html#basic-syntax

## Options API

### Options: State

- `data`
- `props`
- `computed`
- `methods`
- `watch`
- `emits`
- `expose`

### Options: Rendering

- `template`
- `render`
- `compilerOptions`

### Options: Lifecycle

- `beforeCreate`
- `created`
- `beforeMount`
- `mounted`
- `beforeUpdate`
- `updated`
- `beforeUnmount`
- `unmounted`
- `errorCaptured`
- `renderTracked`
- `renderTriggered`
- `activated`
- `deactivated`
- `serverPrefetch`

### Options: Composition

- `provide`
- `inject`
- `mixins`
- `extends`

### Options: Misc

- `name`
- `inheritAttrs`
- `components`
- `directives`

### Component Instance

- `$data`
- `$props`
- `$el`
- `$options`
- `$parent`
- `$root`
- `$slots`
- `$refs`
- `$attrs`
- `$watch()`
- `$emit()`
- `$forceUpdate()`
- `$nextTick()`

## Composition API

### setup()

- Basic Usage
- Accessing Props
- Setup Context
- Usage with Render Functions

### Reactivity: Core

- `ref()`
- `computed()`
- `reactive()`
- `readonly()`
- `watchEffect()`
- `watchPostEffect()`
- `watchSyncEffect()`
- `watch()`

### Reactivity: Utilities

- `isRef()`
- `unref()`
- `toRef()`
- `toRefs()`
- `isProxy()`
- `isReactive()`
- `isReadonly()`

### Reactivity: Advanced

- `shallowRef()`
- `triggerRef()`
- `customRef()`
- `shallowReactive()`
- `shallowReadonly()`
- `toRaw()`
- `markRaw()`
- `effectScope()`
- `getCurrentScope()`
- `onScopeDispose()`
- `Lifecycle Hooks`
- `onMounted()`
- `onUpdated()`
- `onUnmounted()`
- `onBeforeMount()`
- `onBeforeUpdate()`
- `onBeforeUnmount()`
- `onErrorCaptured()`
- `onRenderTracked()`
- `onRenderTriggered()`
- `onActivated()`
- `onDeactivated()`
- `onServerPrefetch()`

### Dependency Injection

- `provide()`
- `inject()`

### Examples

Scoped slots are easily one of Vue's most powerful features, but can be a bit tricky to wrap your head around.

For most components you'll use templates to construct your HTML, but Vue also supports building a component's HTML using render functions.

implement a drastically different layout, without rewriting any of the component logic.

Scoped slots are ideal for customizing how a component looks, but it still makes sense to use configuration to customize a component's behavior. In this lesson we'll add a configuration prop to our renderless component to change its functionality.

Renderless components create a lot of work for the consumer compared to a traditional component that combines presentation and behavior in one unit. Learn how to create opinionated wrapper components that ease the burden on the consumer while still providing the flexibility of renderless components when needed.

#### AccordionView

There are certain types of components that have multiple related pieces, like tabs and tab panels, or items in an accordion list.
Learn how to use Vue's `provide` and `inject` features to make it possible for these related components to communicate without forcing
the consumer to wire everything up manually.

#### Controlled Sortable List

- Patterns: controlled, renderless, external library wrapper

#### Controlled Search Select

- a robust search select component built by applying the principles covered in Advanced Vue Component Design course
- Integrated [Popper.js]() so that the dropdown position reacts intelligently to the size and scroll position of the viewport
- Made it possible to close the search select by clicking outside of it
- Implemented this behavior from scratch as its own renderless component, not using an existing directive-based library
- Added comprehensive keyboard navigation to the search select, including handling things like scrolling highlighted items into view
- Made it a controlled component, pushing the state into the parent
- Made the filtering logic controllable from the outside
- Made sure that the search is focused when the component is opened and that the trigger is re-focused when the component closes
- Added filtering support to the search select, working through all of the edge cases to make sure it behaves intuitively

## Class Component API and Vue Property Decorator Reference

### `@Component([options])`

- **Arguments**
  - `{Object} [options]`

A decorator to define class style components. You can pass [Vue component options](https://v2.vuejs.org/v2/api/#Options-Data) via the optional 1st argument.

See also: [Class Component](../guide/class-component.md)

### `Component.registerHooks(hooks)`

- **Arguments**
  - `{Array} hooks`

Registers method names that class components handles them as hooks.

See [Additional Hooks](../guide/additional-hooks.md) for more details.

### `createDecorator(callback)`

- **Arguments**
  - `{Function} callback`
- **Return**
  - `{Function}`

Creates a new decorator which class components process.

See [Custom Decorators](../guide/custom-decorators.md) for more details.

### Built-in Hook Methods

The followings are built-in hook names that class components treat as special methods.

- `data`
- `beforeCreate`
- `created`
- `beforeMount`
- `mounted`
- `beforeDestroy`
- `destroyed`
- `beforeUpdate`
- `updated`
- `activated`
- `deactivated`
- `render`
- `errorCaptured`
- `serverPrefetch`

They will not be registered as component methods but (lifecycle) hooks. You should avoid these reserved names when your properties or methods are not supposed to be such hooks.

See also: [Hooks](../guide/class-component.md#Hooks)

### Built-in Hook Method Types

Only available in TypeScript. It enables built-in hooks methods auto-complete once you import it:

```ts
import 'vue-class-component/hooks'
```

## Class Component

`@Component` decorator makes your class a Vue component:

```js
import Vue from 'vue'
import Component from 'vue-class-component'

// HelloWorld class will be a Vue component
@Component
export default class HelloWorld extends Vue {}
```

### Data

Initial `data` can be declared as class properties:

```vue
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component data
  message = 'Hello World!'
}
</script>

<template>
  <div>{{ message }}</div>
</template>
```

The above component renders `Hello World!` in the `<div>` element as `message` is component data.

Note that if the initial value is `undefined`, the class property will not be reactive which means the changes for the properties will not be detected:

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // `message` will not be reactive value
  message = undefined
}
```

To avoid this, you can use `null` value or use `data` hook instead:

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // `message` will be reactive with `null` value
  message = null

  // See Hooks section for details about `data` hook inside class.
  data() {
    return {
      // `hello` will be reactive as it is declared via `data` hook.
      hello: undefined
    }
  }
}
```

### Methods

Components `methods` can be declared directly as class prototype methods:

```vue
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component method
  hello() {
    console.log('Hello World!')
  }
}
</script>

<template>
  <button @click="hello">
    Click
  </button>
</template>
```

### Computed Properties

Computed properties can be declared as class property getter / setter:

```vue
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return `${this.firstName} ${this.lastName}`
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
}
</script>

<template>
  <input v-model="name">
</template>
```

### Hooks

`data`, `render` and all Vue lifecycle hooks can be directly declared as class prototype methods as well, but you cannot invoke them on the instance itself. When declaring custom methods, you should avoid these reserved names.

```jsx
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // Declare render function
  render() {
    return <div>Hello World!</div>
  }
}
```

### Other Options

For all other options, pass them to the decorator function:

```vue
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import OtherComponent from './OtherComponent.vue'

@Component({
  // Specify `components` option.
  // See Vue.js docs for all available options:
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    OtherComponent
  }
})
export default class HelloWorld extends Vue {}
</script>

<template>
  <OtherComponent />
</template>
```

## Usage

There are several decorators and 1 function (Mixin):

- [`@Prop`](#Prop)
- [`@PropSync`](#PropSync)
- [`@Model`](#Model)
- [`@ModelSync`](#ModelSync)
- [`@Watch`](#Watch)
- [`@Provide`](#Provide)
- [`@Inject`](#Provide)
- [`@ProvideReactive`](#ProvideReactive)
- [`@InjectReactive`](#ProvideReactive)
- [`@Emit`](#Emit)
- [`@Ref`](#Ref)
- [`@VModel`](#VModel)
- `@Component` (**provided by** [vue-class-component](https://github.com/vuejs/vue-class-component))
- `Mixins` (the helper function named `mixins` **provided by** [vue-class-component](https://github.com/vuejs/vue-class-component))

### <a id="Prop"></a> `@Prop(options: (PropOptions | Constructor[] | Constructor) = {})` decorator

```ts
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
```

is equivalent to

```js
export default {
  props: {
    propA: {
      type: Number,
    },
    propB: {
      default: 'default value',
    },
    propC: {
      type: [String, Boolean],
    },
  },
}
```

#### If you'd like to set `type` property of each prop value from its type definition, you can use [reflect-metadata](https://github.com/rbuckton/reflect-metadata).

1. Set `emitDecoratorMetadata` to `true`.
2. Import `reflect-metadata` **before** importing `vue-property-decorator` (importing `reflect-metadata` is needed just once.)

```ts
import 'reflect-metadata'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  @Prop() age!: number
}
```

#### Each prop's default value need to be defined as same as the example code shown in above.

It's **not** supported to define each `default` property like `@Prop() prop = 'default value'` .

### <a id="PropSync"></a> `@PropSync(propName: string, options: (PropOptions | Constructor[] | Constructor) = {})` decorator

```ts
import { Component, PropSync, Vue } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}
```

is equivalent to

```js
export default {
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    syncedName: {
      get() {
        return this.name
      },
      set(value) {
        this.$emit('update:name', value)
      },
    },
  },
}
```

[`@PropSync`](#PropSync) works like [`@Prop`](#Prop) besides the fact that it takes the propName as an argument of the decorator, and also creates a computed getter and setter behind the scenes. This way you can interface with the property as if it was a regular data property whilst making it as easy as appending the `.sync` modifier in the parent component.

### <a id="Model"></a> `@Model(event?: string, options: (PropOptions | Constructor[] | Constructor) = {})` decorator

```ts
import { Component, Model, Vue } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Model('change', { type: Boolean }) readonly checked!: boolean
}
```

is equivalent to

```js
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
    },
  },
}
```

`@Model` property can also set `type` property from its type definition via `reflect-metadata` .

### <a id="ModelSync"></a> `@ModelSync(propName: string, event?: string, options: (PropOptions | Constructor[] | Constructor) = {})` decorator

```ts
import { Component, ModelSync, Vue } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @ModelSync('checked', 'change', { type: Boolean })
  readonly checkedValue!: boolean
}
```

is equivalent to

```js
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
    },
  },
  computed: {
    checkedValue: {
      get() {
        return this.checked
      },
      set(value) {
        this.$emit('change', value)
      },
    },
  },
}
```

`@ModelSync` property can also set `type` property from its type definition via `reflect-metadata` .

### <a id="Watch"></a> `@Watch(path: string, options: WatchOptions = {})` decorator

```ts
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch('person')
  onPersonChanged2(val: Person, oldVal: Person) {}

  @Watch('person')
  @Watch('child')
  onPersonAndChildChanged() {}
}
```

is equivalent to

```js
export default {
  watch: {
    child: [
      {
        handler: 'onChildChanged',
        immediate: false,
        deep: false,
      },
      {
        handler: 'onPersonAndChildChanged',
        immediate: false,
        deep: false,
      },
    ],
    person: [
      {
        handler: 'onPersonChanged1',
        immediate: true,
        deep: true,
      },
      {
        handler: 'onPersonChanged2',
        immediate: false,
        deep: false,
      },
      {
        handler: 'onPersonAndChildChanged',
        immediate: false,
        deep: false,
      },
    ],
  },
  methods: {
    onChildChanged(val, oldVal) {},
    onPersonChanged1(val, oldVal) {},
    onPersonChanged2(val, oldVal) {},
    onPersonAndChildChanged() {},
  },
}
```

### <a id="Provide"></a> `@Provide(key?: string | symbol)` / `@Inject(options?: { from?: InjectKey, default?: any } | InjectKey)` decorator

```ts
import { Component, Inject, Provide, Vue } from 'vue-property-decorator'

const symbol = Symbol('baz')

@Component
export class MyComponent extends Vue {
  @Inject() readonly foo!: string
  @Inject('bar') readonly bar!: string
  @Inject({ from: 'optional', default: 'default' }) readonly optional!: string
  @Inject(symbol) readonly baz!: string

  @Provide() foo = 'foo'
  @Provide('bar') baz = 'bar'
}
```

is equivalent to

```js
const symbol = Symbol('baz')

export const MyComponent = Vue.extend({
  inject: {
    foo: 'foo',
    bar: 'bar',
    optional: { from: 'optional', default: 'default' },
    baz: symbol,
  },
  provide() {
    return {
      foo: this.foo,
      bar: this.baz,
    }
  },
  data() {
    return {
      foo: 'foo',
      baz: 'bar',
    }
  },
})
```

### <a id="ProvideReactive"></a> `@ProvideReactive(key?: string | symbol)` / `@InjectReactive(options?: { from?: InjectKey, default?: any } | InjectKey)` decorator

These decorators are reactive version of `@Provide` and `@Inject`. If a provided value is modified by parent component, then the child component can catch this modification.

```ts
const key = Symbol()
@Component
class ParentComponent extends Vue {
  @ProvideReactive() one = 'value'
  @ProvideReactive(key) two = 'value'
}

@Component
class ChildComponent extends Vue {
  @InjectReactive() one!: string
  @InjectReactive(key) two!: string
}
```

### <a id="Emit"></a> `@Emit(event?: string)` decorator

The functions decorated by `@Emit` `$emit` their return value followed by their original arguments. If the return value is a promise, it is resolved before being emitted.

If the name of the event is not supplied via the `event` argument, the function name is used instead. In that case, the camelCase name will be converted to kebab-case.

```ts
import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  count = 0

  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }

  @Emit()
  onInputChange(e) {
    return e.target.value
  }

  @Emit()
  promise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
```

is equivalent to

```js
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    addToCount(n) {
      this.count += n
      this.$emit('add-to-count', n)
    },
    resetCount() {
      this.count = 0
      this.$emit('reset')
    },
    returnValue() {
      this.$emit('return-value', 10)
    },
    onInputChange(e) {
      this.$emit('on-input-change', e.target.value, e)
    },
    promise() {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      })

      promise.then((value) => {
        this.$emit('promise', value)
      })
    },
  },
}
```

### <a id="Ref"></a> `@Ref(refKey?: string)` decorator

```ts
import { Component, Ref, Vue } from 'vue-property-decorator'

import type AnotherComponent from '@/path/to/another-component.vue'

@Component
export default class YourComponent extends Vue {
  @Ref() readonly anotherComponent!: AnotherComponent
  @Ref('aButton') readonly button!: HTMLButtonElement
}
```

is equivalent to

```js
export default {
  computed() {
    anotherComponent: {
      cache: false,
      get() {
        return this.$refs.anotherComponent as AnotherComponent
      }
    },
    button: {
      cache: false,
      get() {
        return this.$refs.aButton as HTMLButtonElement
      }
    }
  }
}
```

### <a id="VModel"></a> `@VModel(propsArgs?: PropOptions)` decorator

```ts
import { Component, VModel, Vue } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @VModel({ type: String }) name!: string
}
```

is equivalent to

```js
export default {
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    name: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
```
