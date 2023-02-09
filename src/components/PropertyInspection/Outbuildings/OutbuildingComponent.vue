<script lang="ts">
import { filter} from 'lodash'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Upload } from '@progress/kendo-vue-upload'
import { AssetType, AssetUploadModel, FieldAsset } from "@/types";


@Component({
  components: {
    Upload,
  },
})
export default class OutbuildingComponent extends Vue {
  @Prop({
    type: Object,
    default() {
      return { name: '' }
    },
  }) readonly outbuilding: any

  // - `data`
  // - `beforeCreate`
  // - `created`
  // - `beforeMount`
  // - `mounted`
  // - `beforeDestroy`
  // - `destroyed`
  // - `beforeUpdate`
  // - `updated`
  // - `activated`
  // - `deactivated`
  // - `render`
  // - `errorCaptured`
  // - `serverPrefetch`


  get isAnotherType() {
    return this.outbuilding.name === 'Other'
  }

  ReturnAssetModel(AssetFieldId: number, assetName: string = ""): AssetUploadModel {
    let assetUploadModel = new AssetUploadModel()

    assetUploadModel.AssetFieldId = AssetFieldId;
    assetUploadModel.AssetTypeId = AssetType.FieldAsset;
    assetUploadModel.CompanyId = this.companyId;
    assetUploadModel.ProjectId = this.projectId;
    assetUploadModel.AssetName = assetName;
    assetUploadModel.PropertyInspectionFormId = this.propertyInspectionFormId;

    return assetUploadModel;
  }

  ReturnFieldAssets(AssetFieldId: number): Array<FieldAsset> {
    let fieldAssets = <Array<FieldAsset>>filter(this.fieldAssets, { AssetFieldId: AssetFieldId });

    if (!fieldAssets) {
      return new Array<FieldAsset>();
    }

    return <Array<FieldAsset>>filter(this.fieldAssets, { AssetFieldId: AssetFieldId });
  }
}
</script>

<template>
  <li>
    <div>
      <div class="mt-4 flex items-center justify-between">
        <select v-model="outbuilding.name">
          <option :value="null" disabled>
            Select Out Building...
          </option>
          <option>Barn</option>
          <option>Shed</option>
          <option>Pool House</option>
          <option>Green House</option>
          <option>Detached Garage</option>
          <option>Other</option>
        </select>

        <div class="flex items-center">
          <label>Is Damaged?</label>

          <div>
            <div class="flex items-center space-x-2">
              <label>Yes</label>
              <input v-model="outbuilding.damaged" type="checkbox" class="">
            </div>
          </div>
        </div>
      </div>

      <div v-if="outbuilding.damaged" class="p-4">
        <div class="flex justify-between">
          <label>Interior Damage Description</label>
          <textarea
            v-model="outbuilding.interiorDamageDescription"
            class="flex-1"
            name=""
            :cols="30"
            :rows="3"
          />
          <upload
            :default-files="[]"
            :batch="false"
            :multiple="true"
            :with-credentials="false"
            save-url="https://demos.telerik.com/kendo-ui/service-v4/upload/save"
            remove-url="https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
          />
        </div>
        <div class="flex justify-between">
          <label>Elevation Damage Description</label>
          <textarea
            v-model="outbuilding.elevationDamageDescription"
            class="flex-1"
            name=""
            :cols="30"
            :rows="3"
          />
          <upload
            :default-files="[]"
            :batch="false"
            :multiple="true"
            :with-credentials="false"
            save-url="https://demos.telerik.com/kendo-ui/service-v4/upload/save"
            remove-url="https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
          />
        </div>
        <div class="flex justify-between">
          <label>Roof Damage Description</label>
          <textarea
            v-model="outbuilding.roofDamageDescription"
            class="flex-1"
            name=""
            :cols="30"
            :rows="3"
          />
          <upload
            :default-files="[]"
            :batch="false"
            :multiple="true"
            :with-credentials="false"
            save-url="https://demos.telerik.com/kendo-ui/service-v4/upload/save"
            remove-url="https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
          />
        </div>
      </div>
    </div>
  </li>
</template>
