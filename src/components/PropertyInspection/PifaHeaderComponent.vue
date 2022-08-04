<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { ApiPropertyInspectionFormDetailRoutes } from '@/routes'
import { EventBus, PageBase, PifEvents, ToastrHelper } from '@/types'
import type { ProjectDetails } from '@/types'

@Component({
  template: '#pifa-header-template',
  components: {
  },
})
export default class PifaHeaderComponent extends PageBase<ProjectDetails> {
  @Prop({ required: true, type: String })
    exemplarApiUrl!: string

  constructor() {
    super()
  }

  propertyInspectionFormDetailRoutes!: ApiPropertyInspectionFormDetailRoutes

  // projectNumber: string = <string>$('#projectNumber').val()
  projectNumber = '12344'

  async mounted() {
    this.propertyInspectionFormDetailRoutes = new ApiPropertyInspectionFormDetailRoutes(this.exemplarApiUrl, 'PropertyInspectionFormDetails/')

    if (this.projectNumber.length > 0) {
      EventBus.$emit(PifEvents.SearchPif)
      await this.GetModel(this.propertyInspectionFormDetailRoutes.Get(this.projectNumber), this.GetModelSuccessCallback, this.GetModelErrorCallback)
    }
  }

  async Search() {
    if (this.projectNumber.length > 0) {
      EventBus.$emit(PifEvents.SearchPif)
      await this.GetModel(this.propertyInspectionFormDetailRoutes.Get(this.projectNumber), this.GetModelSuccessCallback, this.GetModelErrorCallback)
    }
    else {
      ToastrHelper.DisplayToastWarning('Please enter a Project Number', 'Project Search')
    }
  }

  GetModelErrorCallback() {
    EventBus.$emit(PifEvents.SearchPifComplete)
  }

  GetModelSuccessCallback(model: ProjectDetails) {
    EventBus.$emit(PifEvents.SearchPifComplete, model)
  }
}
</script>

<template>
  <div id="PifaHeaderTemplate" class="headerContainer">
    <div>
      <img src="~/images/Logo.png">
    </div>
    <div id="AdminTitleWide" class="AdminTitle">
      Property Inspection Form Admin
    </div>
    <div id="AdminTitleShort" class="AdminTitle">
      PIFA
    </div>
    <div class="form-inline flex items-center" style="padding-right:10px;">
      <input
        v-model="projectNumber"
        type="text"
        class="form-control"
        placeholder="Search Project PIFs"
      >&nbsp;
      <button
        type="button"
        class="btn btn-light btnFix items-center"
        @click="Search()"
      >
        <i class="fas fa-search" />
        Search
      </button>&nbsp;
      <button
        type="button"
        class="btn btn-light btnFix items-center"
      >
        <i class="fas fa-question-circle" />
        Help
      </button>&nbsp;
    </div>
  </div>
</template>
