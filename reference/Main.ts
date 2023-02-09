import Vue from "Vue";
import app from "./Application";
import { decorate, injectable } from "inversify";

import PortalVue from 'portal-vue'
//import Toasted from 'vue-toasted';

import "windi.css";
import BaseAvatar from "@ExemplarComponents/Base/BaseAvatar";
import BaseBox from "@ExemplarComponents/Base/BaseBox";
import BaseButton from "@ExemplarComponents/Base/BaseButton";
import BaseCard from "@ExemplarComponents/Base/BaseCard";
import BaseDateInput from "@ExemplarComponents/Base/BaseDateInput";
import BaseIconOutlined from "@ExemplarComponents/Base/BaseIconOutlined";
import BaseIconSolid from "@ExemplarComponents/Base/BaseIconSolid";
import BaseLogo from "@ExemplarComponents/Base/BaseLogo";
import BaseSelect from "@ExemplarComponents/Base/BaseSelect";
import BaseStatusIndicator from "@ExemplarComponents/Base/BaseStatusIndicator";
import PageBackLink from "@ExemplarComponents/Page/PageBackLink";
import PageBreadcrumb from "@ExemplarComponents/Page/PageBreadcrumb";
import PageHeader from "@ExemplarComponents/Page/PageHeader";
import PageLoadingIndicator from "@ExemplarComponents/Page/PageLoadingIndicator";
import PageSubtitle from "@ExemplarComponents/Page/PageSubtitle";
import PageTitle from "@ExemplarComponents/Page/PageTitle";
import SectionHeader from "@ExemplarComponents/Section/SectionHeader";
import SectionSubtitle from "@ExemplarComponents/Section/SectionSubtitle";
import SectionTitle from "@ExemplarComponents/Section/SectionTitle";
import SideMenuSearchComponent from "../../Views/Shared/LayoutComponents/SideMenuSearchComponent";

Vue.component('base-avatar', BaseAvatar);
Vue.component('base-box', BaseBox);
Vue.component('base-button', BaseButton);
Vue.component('base-card', BaseCard);
Vue.component('base-date-input', BaseDateInput)
Vue.component('base-icon-outlined', BaseIconOutlined);
Vue.component('base-icon-solid', BaseIconSolid);
Vue.component('base-logo', BaseLogo);
Vue.component('base-select', BaseSelect);
Vue.component('base-status-indicator', BaseStatusIndicator);
Vue.component('page-back-link', PageBackLink);
Vue.component('page-breadcrumb', PageBreadcrumb);
Vue.component('page-header', PageHeader);
Vue.component('page-loading-indicator', PageLoadingIndicator);
Vue.component('page-subtitle', PageSubtitle);
Vue.component('page-title', PageTitle);
Vue.component('section-header', SectionHeader);
Vue.component('section-subtitle', SectionSubtitle);
Vue.component('section-title', SectionTitle);
Vue.component('side-menu-search', SideMenuSearchComponent);

Vue.use(PortalVue);
//Vue.use(Toasted);


/*
    Allows using a Vue component with Exemplar implemientation of application.ts and page components
*/
decorate(injectable(), Vue);

(window as any).openModals = false;

// Create an instance of our client-side application on the window object, so it's available outside of the bundle.
// This needs to get created immediately when the bundle loads.
(<any>window).Exemplar = app;
