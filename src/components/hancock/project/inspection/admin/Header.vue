<template id="pifa-header-template">
    <div id="PifaHeaderTemplate" class="headerContainer">
        <div>
            <img src="/assets/img/Logo.png" />
        </div>
        <div id="AdminTitleWide" class="AdminTitle">
            Property Inspection Form Admin
        </div>
        <div id="AdminTitleShort"  class="AdminTitle">
            PIFA
        </div>
        <div class="form-inline" style="padding-right:10px;">
            <input type="text" v-model="projectNumber" class="form-control" placeholder="Search Project PIFs">&nbsp;
            <button type="button" v-on:click="Search()" class="btn btn-light"> <i class="fas fa-search"></i> Search</button>&nbsp;
              <button type="button" onclick="window.open('/PropertyInspection/Help')" class="btn btn-light"> <i class="fas fa-question-circle"></i> Help</button>&nbsp;
          </div>
    </div>w
</template>

