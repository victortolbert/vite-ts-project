import Vue from "Vue";
import { Component, Prop } from "vue-property-decorator";
import { ProjectDetails } from "../../ViewModels/ProjectDetails";

@Component({
    template: "#project-details-template",
    components: {}
})

export default class ProjectDetailsComponent extends Vue {
    @Prop({ required: false, type: Object })
    model!: ProjectDetails;

    constructor() {
        super();
    }
}
