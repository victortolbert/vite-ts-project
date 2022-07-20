<script setup>
import PropertyInspectionView from './components/PropertyInspectionView.vue'
</script>

<template>
  <main class="w-full">
    <PropertyInspectionView />
  </main>
</template>

<style>
@keyframes spinner {
    to {transform: rotate(360deg);}
}

.is-loading { color: transparent; }

.is-loading:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: spinner .6s linear infinite;
}

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
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
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
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    max-width: 70%;
}
.slotRow {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}
.cbContainer {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: middle;
    padding-right: 20px;
}
.boxLabel {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
.icon-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px !important;
    padding: 0px !important;
}
</style>
