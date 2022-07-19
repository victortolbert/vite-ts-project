<script setup lang="ts">
import ProjectInspectionForm from './components/ProjectInspectionForm.vue'
</script>

<template>
  <main>
    <ProjectInspectionForm msg="Vite + Vue" />
  </main>
</template>

<style>
.baseContainer {
    width: 100%;
    background-color: white;
    margin-top: 6px;
    margin-bottom: 6px;
    padding-top: 7px;
    padding-bottom: 7px;
    min-height: 70px;
    border-top: 0px solid gray !important;
    border-right: 0px solid gray !important;
    border-bottom: 2px solid gray !important;
    border-left: 0px solid gray !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.labelContainer {
    color: navy !important;
    font-size: 18px !important;
    font-weight: 600 !important;
    font-family: Calibri !important;
    padding-right: 15px;
    padding-top: 10px;
    padding-left: 10px;
}

.slotContainer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    max-width: 70%;
}
.slotRow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.cbContainer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    padding-right: 20px;
}
.boxLabel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
}

.answered {
    background-color: #F9CF00 !important;
}

.eCheckbox {
    height: 35px !important;
    width: 35px !important;
    background-color: #cccccc;
    padding-right: 5px;
    text-align: center;
    cursor: pointer;
    margin-right: 10px;
    margin: 5px;
    border-radius: 2px 2px 2px 2px;
    border-top: 0.5px solid #0D9BFF !important;
    border-right: 0.5px solid #0D9BFF !important;
    border-bottom: 0.5px solid #0D9BFF !important;
    border-left: 0.5px solid #0D9BFF !important;
}
.choiceText {
    color: black !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    font-family: Calibri !important;
    padding-top: 10px;
}

.flexRowSpaceBetweenNoWrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.icon-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 20px !important;
    padding: 0px !important;
}
</style>
