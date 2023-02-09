import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Button as KendoButton } from "@progress/kendo-vue-buttons";
import { Input as KendoInput } from "@progress/kendo-vue-inputs";

@Component({
    template: "#search-field-template",
    components: {
        KendoButton,
        KendoInput,
    }
})
export default class SearchField extends Vue {
    query: string = "";

    @Prop({ required: false, default: "", type: String })
    searchQuery: string;

    mounted() {
        this.query = this.searchQuery;
    }

    clearSearchHandler(event: MouseEvent): void {
        this.query = "";
        this.$emit("search", this.query, event);
    }

    handleKeyPress(event: KeyboardEvent) {
        if (event.key === "Enter" || event.keyCode === 13) {
            this.$emit("search", this.query, event);
        }
    }

    searchHandler(event: MouseEvent) {
        this.$emit("search", this.query, event);
    }

    @Watch("searchQuery")
    onSearchQueryUpdate() {
        this.query = this.searchQuery;
    }
}