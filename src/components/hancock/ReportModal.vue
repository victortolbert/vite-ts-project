<template>
  <b-modal
    id="reportModal"
    v-model="reportModal.open"
    header-class="card-header"
    :no-close-on-backdrop="reportModal.noCloseOnBackdrop"
    :no-close-on-esc="reportModal.noCloseOnEsc"
    size="md"
  >
    <div slot="modal-title">
      <span>Available Reports</span>
    </div>
    <div class="NoAssetsContainer" v-if="reportModal.showReportPrompt && reportExists">
      <p>
        Creating this report will soft delete any previously
        <br />created report and photo form. Do you wish to continue?
      </p>
      <div>
        <button type="button" v-on:click="onReportsContinue()" class="btn btn-warning btn-sm">
          <i class="fas fa-plus-circle"></i> Continue
        </button>
      </div>
    </div>

    <div v-if="!reportModal.showReportPrompt">
      <div v-if="reportModal.isHic" class="ModalReportContainer">
        <div>
          <span>HIC Form</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(12, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(12)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>
      <div v-if="reportModal.isAllState" class="ModalReportContainer">
        <div>
          Allstate Ladder Assist
          <span>(LA Allstate)</span>
          <br />
          <span>Ladder Assist Report Download for Allstate claims</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(0, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(0)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div v-if="reportModal.isAllState" class="ModalReportContainer">
        <div>
          Allstate Virtual Inspection
          <span>(Allstate VI)</span>
          <br />
          <span>Report Download for Allstate Ladder Assist claims.</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(1, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(1)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div v-if="!reportModal.isAllState" class="ModalReportContainer">
        <div>
          Ladder Assist - Other
          <span>(LA Other)</span>
          <br />
          <span>Used by all carriers except Allstate for Ladder Assist Inspection.</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(2, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(2)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          Direct Inspection - Shingles
          <span>(DI Shingles)</span>
          <br />
          <span>Direct Inspect for shingled roof.</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(3, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(3)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          Direct Inspection – No Brittleness Test
          <span>(DI No BT)</span>
          <br />
          <span>
            Direct Inspection Report with no brittleness test performed.
            <br />(STFRM, AMFAM,AUTO,ESUR,FARM,GRANGE,HMSTE,
            <br />UPC,WEST,ASI,STATEAUTO,NATWD,FEDNAT)
          </span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(4, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(4)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          Direct Inspection – Asphalt Roof
          <span>(DI EPDM)</span>
          <br />
          <span>Direct Inspection Report performed on an EPDM roof (typically flat roof).</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(5, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(5)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          Direct Inspection - Tile
          <span>(DI Tile)</span>
          <br />
          <span>Direct Inspection Report performed on a tile roof.</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(6, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(6)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          DI - Bituminous Membranes
          <span>(DI Bituminous Membranes)</span>
          <br />
          <span>Another type of asphalt Direct Inspection on Mod Bit roofing (typically flat roof).</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(7, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(7)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          Direct Inspection - Metal
          <span>(DI Metal)</span>
          <br />
          <span>Direct Inspection Report performed on a metal roof.</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(8, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(8)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          Direct Inspection - Wood
          <span>(DI Wood)</span>
          <br />
          <span>Direct Inspection on wood roof (typically wood shake roof).</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(9, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(9)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          DI - CA State Auto Association
          <span>(DI CSAA PA-MD-NJ)</span>
          <br />
          <span>Direct Inspect for AAA Insurance for states of PA-MD-NJ only.</span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(10, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(10)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>

      <div class="ModalReportContainer">
        <div>
          Direct Inspection No Test Squares
          <span>(DI RPT NO Test Squares)</span>
          <br />
          <span>
            Direct Inspection with no test squares. This is for carriers Tennessee
            <br />Farm Bureau, Mississippi Farm Bureau and Erie Insurance.
          </span>
        </div>
        <div class="ModalReportButtonContainer">
          <button
            type="button"
            v-on:click="onReportSelected(11, true)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Preview
          </button>&nbsp;&nbsp;
          <button
            type="button"
            v-on:click="onReportSelected(11)"
            class="btn btn-warning btn-sm"
          >
            <i class="fas fa-plus-circle"></i> Create
          </button>
        </div>
      </div>
    </div>
    <div slot="modal-footer">
      <div>
        <b-button variant="primary" v-on:click="reportModal.open = false">Cancel</b-button>
      </div>
    </div>
  </b-modal>
</template>
