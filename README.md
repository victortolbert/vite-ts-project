# Property Inspection Form Prototype

## Out Buildings

- Limit the Display to 6 (Configurable in the `OutBuildingsComponent`)
- Will have to manually add records to the `MasterAssetField` Table

## Tables

### `MasterOutBuildingType`

|Column                         |                                |
|-------------------------------|--------------------------------|
| `Id`                          | int Identity                   |
| `Name`                        | varchar                        |
| `OtherName`                   | varchar                        |

### `OutBuildings`

|Column                         |                                |
|-------------------------------|--------------------------------|
| `Id`                          | int Identity                   |
| `MasterOutBuildingTypeId`     | FK (MasterOutBuildingType)     |
| `Damaged`                     | bit                            |
| `InteriorDamageDescription`   | varchar(8000) null             |
| `ElevationDamageDescription`  | varchar(8000) null             |
| `RoofDamageDescription`       | varchar(8000) null             |
| `PropertyInspectionFormId`    | Int, FKPropertyInspectionForm) |

### MasterAssetField Entries

- `OutBuilding1Interior`
- `OutBuilding1Eleveation`
- `OutBuilding1Roof`
- `OutBuilding2Interior`
- `OutBuilding2Eleveation`
- `OutBuilding2Roof`
- `OutBuilding3Interior`
- `OutBuilding3Eleveation`
- `OutBuilding3Roof`
- `OutBuilding4Interior`
- `OutBuilding4Eleveation`
- `OutBuilding4Roof`
- `OutBuilding5Interior`
- `OutBuilding5Eleveation`
- `OutBuilding5Roof`
- `OutBuilding6Interior`
- `OutBuilding6Eleveation`
- `OutBuilding6Roof`

## Components

- OutBuildingComponent
- OutBuildingsComponent
- OutBuildingCreateComponent
- OutBuildingListComponent

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
