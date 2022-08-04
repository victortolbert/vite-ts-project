# UI Patterns and Component Factory

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [Vite 3.0](https://vitejs.dev/)
- [Vue 2.7](https://blog.vuejs.org/posts/vue-2-7-naruto.html)
- [Class][1] ([Vue Property Decorator][2]), [Options][3], and [Composition][4] ([Script Setup][5]) component APIs

[1]: https://class-component.vuejs.org/
[2]: https://github.com/kaorun343/vue-property-decorator#readme
[3]: https://vuejs.org/api/options-state.html
[4]: https://vuejs.org/api/composition-api-setup.html
[5]: https://vuejs.org/api/sfc-script-setup.html#basic-syntax

## Vue 2.7

Despite Vue 3 now being the default version, we understand that there are still many users who have to stay on Vue 2 due to dependency compatibility, browser support requirements, or simply not enough bandwidth to upgrade. In Vue 2.7, we have backported some of the most important features from Vue 3 so that Vue 2 users can benefit from them as well.

[Read More](https://blog.vuejs.org/posts/vue-2-7-naruto.html)

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
