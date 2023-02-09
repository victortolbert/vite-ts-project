import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    template: `<button @click="$store.commit('ui/OPEN_OVERLAY')">
        <slot>Details</slot>
        <portal v-if="$store.state.ui.overlayIsOpen" to="overlays">
            <detail :show="$store.state.ui.overlayIsOpen" @close="$store.commit('ui/CLOSE_OVERLAY')" />
        </portal>
    </button>`,
})
export default class DetailButton extends Vue {

}
