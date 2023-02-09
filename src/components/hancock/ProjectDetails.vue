<template id="project-details-template">
  <div style="width:20%;">
    <div id="ProjectDetails" v-if="model" style="width:98%;">
      <div class="pifDetailsContainer">
        <div class="pifDetailContainer">
          <span>Project Number:</span>
          <br />
          <span class="pifClaimDetail">{{ model.ProjectNumber }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Claim Number:</span>
          <br />
          <span class="pifClaimDetail">{{ model.ClaimNumber }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Company:</span>
          <br />
          <span class="pifClaimDetail">{{ model.CompanyName }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Insured Name:</span>
          <br />
          <span class="pifClaimDetail">{{ model.InsuredName }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Insured Primary Phone:</span>
          <br />
          <span class="pifClaimDetail">{{ model.InsuredPrimaryPhone }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Insured Primary Email:</span>
          <br />
          <span class="pifClaimDetail">{{ model.InsuredEmail }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Address:</span>
          <br />
          <span class="pifClaimDetail">
            {{ model.StreetAddress1 }}
            <br />
            {{ model.City }}, {{ model.State }} {{ model.PostalCode }}
          </span>
        </div>

        <div class="pifDetailContainer">
          <span>Adjuster:</span>
          <br />
          <span class="pifClaimDetail">{{ model.Adjuster }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Adjuster Email:</span>
          <br />
          <span class="pifClaimDetail">{{ model.AdjusterEmail }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Technician:</span>
          <br />
          <span class="pifClaimDetail">{{ model.TechnicianName }}</span>
        </div>

        <div class="pifDetailContainer">
          <span>Technician Phone:</span>
          <br />
          <span class="pifClaimDetail">{{ model.TechnicianPhone }}</span>
        </div>
      </div>
      <div
        class="noRecords"
        v-if="model.ProjectId > 0 && !model.PropertyInspectionForms"
      >No Property Inspection Forms found for Project Number {{ model.projectNumber }}. Click the New PIF button to add one now.</div>
    </div>
  </div>
</template>
