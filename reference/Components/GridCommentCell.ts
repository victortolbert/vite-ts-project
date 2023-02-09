import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Editor as KendoEditor } from '@progress/kendo-editor-vue-wrapper'
import { EditorInstaller } from '@progress/kendo-editor-vue-wrapper'

@Component({
    components: { KendoEditor },
    template: "#grid-comment-cell-template",
    
})
export default class GridCommentCell extends Vue {

    @Prop()
    dataItem: any;

    cellText: string = '';


    handleTextChange(event: Event) {
        const input = event.target as HTMLInputElement;
        this.dataItem.editValues[this.$parent.$props.field] = input.value;
        
    }

    mounted() {
        this.cellText = this.dataItem[this.$parent.$props.field];
    }



    renderCommentText(): string {
        return `<span>${this.dataItem[this.$parent.$props.field]}</span>`
    }
}