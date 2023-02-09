import { Component, Prop, Watch,  Vue } from "vue-property-decorator";
import { BModal, BButton } from 'bootstrap-vue'
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import DataAccess from "@ExemplarCommon/DataAccess";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import IPager from "../Interfaces/IPager";

@Component({
    template: "#profile-template",
    components: {
        BModal, BButton, DropdownComponent, PagerToolbar: PagerToolbarComponent
    }
})
export default class AuditLogComponent<AuditLog> extends Vue {
  
    profileModal = {
        data: {} as any,
        open: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true,
        isPreview: false
    };

    // Events
    onHide() {
        this.profileModal.open = false;
        GlobalEventBus.$emit(GlobalEvents.CloseAuditLog);
    }

}

