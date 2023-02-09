import { Component, Prop, Vue } from "vue-property-decorator";
import { TabSection } from "@ExemplarViewModels/TabSection";

@Component({
    template: "#section-tab-template"
})

export default class SectionTabComponent extends Vue {
    @Prop({ required: true, type: String })
    newViewModelTitle: string;

    @Prop({ required: true, type: Array })
    tabSections: TabSection[];

    @Prop({ required: true, type: Boolean })
    isNewModel: boolean;

    constructor() {
        super();
    }

    setTabStatus(activeTab: string): Array<TabSection> {
        for (let i = 0; i < this.tabSections.length; i++)
            if (this.tabSections[i].tabName == activeTab) {
                if (!this.tabSections[i].hasData) {

                    this.tabSections[i].setDataCallBack?.();
                    this.tabSections[i].hasData = true;
                }
                this.tabSections[i].isActive = true;

            }
            else {
                this.tabSections[i].isActive = false;
            }
        return this.tabSections;
    }

    onTabSelect(e: any) {
        var tabClicked = $(e.item).find('> .k-link').text();
        this.tabSections = this.setTabStatus(tabClicked.trim());
        this.$emit("tabchange");
    }
}