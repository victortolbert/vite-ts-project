# @designcode/hancock

AvailableServiceTypesController
AvailableServiceTypeProfile
AvailableServiceTypeGridDto

```csharp
@Html.Hidden("exemplarApiUrl", ViewData["ExemplarApiUrl"].ToString())
@Html.Hidden("userId", Convert.ToInt32(ViewData["UserId"]))
@Html.Hidden("roleId", Convert.ToInt32(ViewData["RoleId"]))
@Html.Hidden("RoleName", ViewData["RoleName"])
@Html.Hidden("accessToken", ViewData["AccessToken"] == null
  ? string.Empty
  : ViewData["AccessToken"].ToString()
)
```

# Might not need JQuery anymore

const referenceElement = document.querySelector('#button');
const floatingElement = document.querySelector('#tooltip');

# Review

- [798][] [Story] Legacy - Claim Number Formatting on Webform
- [873][] [Task] Legacy - Insert regular expression into ClaimFormat column record
- [874][] [Task] Legacy - implement claimNumberFormat regular expression
- [875][] [Task] Legacy - Add ClaimFormat field to Company add and edit screens
- [887][] [Bug] Legacy - When choosing a business unit, a Server Error intermittently occurs
- [939][] [Story] CORE - Exemplar UI Retrofit Identify Items

# Next Sprint

- [1130][] Legacy - Remove IsDeleted from AvailableServiceType
- [1131][] Migrations - AvailableServiceType IsDeleted
- [1132][] Legacy - Remove HoverEnabled from CompanyServiceType
- [1133][] Migrations - CompanyServiceType IsHoverEnabled
- [1134][] Legacy - Announcement Author
- [1135][] Migrations Announcement Author

# Sarita's Tickets

- [924][] CORE - Territory Managers multiselect Vue Component
- [925][] CORE - ServiceAreaManager API Endpoint

# Pre-Deployment Plan Checklist

- [ ] Migrations
- [ ] Web Jobs
- [ ] Configuration Values
  - [ ] Add ServiceBus configuration to app service
        `Endpoint=sb://han-prod-servicebus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=/yGVEiLSLOJ8YY+X+Oter0wLMSVuFoErURDz6XL+uiI=`
- [ ] Stored Procedures Changes
- [ ] Scripts
  - [ ] Run attached `spGetAutoSchedulerInspections` script
  - [ ] Run multiple service area script to make sure there are no duplicates. See script Multiples below.
- [ ] Create Hover Service Bus Queue
- [ ] Deploy
  - [ ] Deploy New Hover Web Job
  - [ ] Legacy
  - [ ] Core

## Scripts / Queries

**Multiples**

```sql
SELECT a.name,u.firstname, u.lastname
FROM [user] u
JOIN ServiceAreaTechnician sat ON sat.UserId=u.id
JOIN ServiceArea a ON a.id = sat.ServiceAreaId
WHERE u.id IN (
  SELECT userid
  FROM ServiceAreaTechnician
  GROUP BY userid
  HAVING count(*) > 1
)
```

## Migrations

## Stored Procedures

```scss
// Import only the PanelBar and Grid styles using Node Sass
@import '~@progress/kendo-theme-default/scss/grid/_index.scss';

// or using Dart Sass
@import '~@progress/kendo-theme-default/scss/grid/';
```

# Templates

- PifLayout
- EditTemplate
- DeleteModal
- UnauthorizedModal
- ServiceTechListTemplate
- Asset/CreateCustomAsset
- Asset/CreatePdfHeader
- Authorization/AccessDenied
- Emails/LibtyAssetEmail
- Emails/PdfCompression
- Emails/SendAsset
- Home/Authorization/AccessDenied
- Home/Index
- Home/Error
- Home/Privacy
- Companies/Index
- PropertyInspections/AssetGridDetails
- PropertyInspections/AssetGridHeader
- PropertyInspections/AssetGridIcons
- PropertyInspections/AssetGridMenuTemplate
- PropertyInspections/AssetGridRow
- PropertyInspections/AssetGridSubMenu
- PropertyInspections/AssetGridTemplate
- PropertyInspections/AssetUploadTemplate
- PropertyInspections/AssetViewerModal
- PropertyInspections/AssetViewerTemplate
- PropertyInspections/BaseLayoutTemplate
- PropertyInspections/BooleanCameraWrapperTemplate
- PropertyInspections/BooleanTemplate
- PropertyInspections/BooleanWrapperTemplate
- PropertyInspections/CameraTemplate
- PropertyInspections/CanvasButtonTemplate
- PropertyInspections/CheckboxCameraWrapperTemplate
- PropertyInspections/CheckboxTemplate
- PropertyInspections/CheckboxWrapperTemplate
- PropertyInspections/CreateAssetModal
- PropertyInspections/DeleteAssetModal
- PropertyInspections/DeleteSectionModal
- PropertyInspections/DirectionalCameraWrapperTemplate
- PropertyInspections/DirectionalNumericWrapperTemplate
- PropertyInspections/EditAssetModal
- PropertyInspections/ElevationSectionTemplate
- PropertyInspections/Emails/SendAsset
- PropertyInspections/Help/AssetGrid
- PropertyInspections/Help/AssetGridToolbar
- PropertyInspections/Help/Glossary
- PropertyInspections/Help/HowTo
- PropertyInspections/Help/Index
- PropertyInspections/Help/PifaLayout
- PropertyInspections/Help/Toc
- PropertyInspections/Index
- PropertyInspections/InteriorSectionTemplate
- PropertyInspections/KeyPad
- PropertyInspections/MainSectionTemplate
- PropertyInspections/NumericTemplate
- PropertyInspections/NumericCameraWrapperTemplate
- PropertyInspections/NumericWrapperTemplate
- PropertyInspections/PhotoTemplate
- PropertyInspections/PifaHeaderTemplate
- PropertyInspections/PifFormModal
- PropertyInspections/PifHeader
- PropertyInspections/ProjectDetailsTemplate
- PropertyInspections/RecoverAssetModal
- PropertyInspections/ReportsModal
- PropertyInspections/RoofDamageItemsSectionTemplate
- PropertyInspections/RoofSectionTemplate
- PropertyInspections/SendAssetModal
- PropertyInspections/SliderTemplate
- PropertyInspections/TextboxCameraWrapperTemplate
- PropertyInspections/TextboxTemplate
- PropertyInspections/TextboxWrapperTemplate
- PropertyInspections/Unauthorized
- PropertyInspections/UploadModal
- PropertyInspections/UploadValidationModal

## Exemplar.Api - RESTFul API

- Controllers 1 per table, Attribute-based routing, Authorize, Inherits
  from Base Controller Each injects Automapper, a corresponding repo,
  named after the table as well
- Repositories 1 per table
- Automapper does heavy lifting for creating DTOs when querying Domain Objects
- Mapping profiles (Data Transfer Object / Domain)
  A mapping profile for every table

## Exemplar.Data - Migrations

## Exemplar.Domain - Domain Objects (Entities)

## Exemplar.Dto (Domain)

## Exemplar.Services - Data access, Cloud storage, Exemplar message

## Exemplar.Utilities - Email sender, Date/Time, Redis cache

## Exemplar.Web (Api, Dto, Services)

# Teams

- Customer Service
- Scheduling Support
- Field Services
- Claim Services
- Estimating Services
- Billing / Collections

# Evolution of a claim through departments

## Customer Service

The claim starts when the adjuster calls in and submits a claim with a representative over the web portal. With all the necessary information (Claim Information, Service Type, Adjuster's Contact Information, and billing information).

Once the claim has been submitted with the assistance of the customer service representative, the claim is then pushed to Exemplar.

Customer support is part of the customer service department. The customer service representatives are required to make outbound calls to insureds on behalf of the insurance carriers, to schedule unaccompanied field inspections.

### Statuses

**Call Queue**

After an unaccompanied inspection (**DI** / **VI** / **ET**) has been confirmed to be in our coverage area, the scheduling team will then push the claim to _Call Queue_. Customer support will reach out to the insured to get a scheduled date and time, considering the tech count as well as the weather.

**Schedule**

The claim has been updated with a requested date / time in Exemplar

## Scheduling Support

Scheduling Support monitors and handles all requests received by carriers, as well as making sure requests are responded to in a timely manner. Scheduling Support ensures claim requests are acceptable to our schedule and if not, guarantees adjusters are informed of any scheduling conflicts. Scheduling Support is in contact with the field managers and technicians, daily, to assist with any field requests and additional adjuster demands.

### Statuses

**Triage**

This is a status used for specific carriers that use XactAnalysis to send their claims to HCC. When the information is transmitted, the project is created. The project must be updated with specific information from the notes provided by the carrier. Information to update is the adjuster name, address comments, service types, and scheduling date.

**Pending**

Once a claim has been added through the website it will automatically go into _Pending_ status in Exemplar where the Scheduling Support will check coverage before accepting.

**Schedule**

For a **Ladder Assist (LA)** or **LAR** they will check the claim with the field manager in order to ensure the claim can be accommodated for the requested date and time. The claim will be pushed to schedule status when the claim has been accepted.

**Call Queue**

For a **Direct Inspect**, **Virtual Inspect**, **Emergency Tarp** or **Tarp Remove**, and **Reset**, Scheduling Support will check the coverage map with the loss address zip code before pushing the claim into _Call Queue_ status.

## Field Services

Our technicians perform inspections on behalf of the adjuster or with the adjuster; here they gather all the required information for the adjusters, and subsequently build rapport with HCC.

### Statuses

**Assigned**

This symbolizes the claim has been assigned to a technician to complete the inspection. Each technician is assigned the night prior to the inspection by the field manager.

**Confirmed**

The tech is required per our contracts with each carrier to call and confirm each one of their next-day appointments with the adjuster/insured. Once the claim appropriate person(s) has been contacted the technician updates the status of the claim to _Confirmed_.

**Working**

When the technician arrives on-site to start inspecting, he/she will update the claim into _Working_ status. Which will therefore symbolize the inspection is being processed or worked on.

## Claim Services

Claims Services ensures that all required documentation is correct and that everything is reviewed and corrected by the Hancock Claims quality checkpoints. Claims Services are also required to ensure that all billing information is correct to confirm and will be received by the appropriate party.

### Statuses

**Review**

Indicates that the claim must be reviewed by our Claim Services team for all the required documentation and quality review checkpoints.

**Complete**

When the claim passes all quality checkpoints and documentation has been sent to the adjuster, it is then pushed to complete where accounting will bill the customer.

## Estimating Services

Predominantly for Allstate, but also for Esurance, Encompass, California State Auto Association, and Liberty Mutual, the Estimating department is responsible for creating and maintaining estimates through Xactimate and Quality Assurance through XactAnalysis because they send their job assignments to Hancock through XactAnalysis. An estimate needs to be generated using our service types in Exemplar so that when the invoices are sent out to the carriers to pay, everything aligns in their primary claims system.

## Billing / Collections

Hancock’s Billing Department pulls a list of complete claims daily in order to build and send the invoices to the appropriate billing contact for each claim.

Hancock’s Collections Department has been put into place to manage and collect any unpaid invoices.

### Statuses

**Billed**

Symbolizes that the claims invoice has been sent to the customer

**Closed**

Lastly, all claims that have been submitted to Hancock is closed. Each closed claim can be located in the _Closed Projects_ tab in the project list.

# 939 Task

A detailed list of all items in the Exemplar CORE production site that use the old UX/UI have been identified and recorded.

- PropertyInspection Modals
- PropertyInspection Reports
- PropertyInspection Pif
- PropertyInspection Pifa

# From Legacy

- AnnouncementList
- CustomerList
- ExternalClaimsList
- FAQList
- InsuranceAdjusterFirmList
- PendingClaimsList
- ProjectList
- ReportList
- ServiceTypeList
- TerritoryList
- UserList
- UserReportList
- CreateProject
- CreateProjectAssignment
- CreateServiceArea
- UpdateRolePermissions
- CreateAnnouncement
- CreateFAQ
- CreateServiceType
- CreateReport
- CreateCustomer
- CreateInsuranceCompany
- CreateBusinessUnit
- CreateServiceTech
- CreateApplicationUser
- CreateInsuranceAdjuster
- CreateUserBulkAssignment

# Packages

| Dependency                                           |                 |               |
| ---------------------------------------------------- | --------------- | ------------- |
| `@antfu/eslint-config`                               |                 | ^0.14.0       |
| `@casl/ability`                                      |                 | ^5.4.3        |
| `@casl/vue`                                          |                 | ^2.1.2        |
| `@fortawesome/fontawesome-pro`                       |                 | ^5.15.4       |
| `@fortawesome/fontawesome-svg-core`                  |                 | ^1.2.36       |
| `@fortawesome/free-brands-svg-icons`                 |                 | ^5.15.4       |
| `@fortawesome/free-regular-svg-icons`                |                 | ^5.15.4       |
| `@fortawesome/free-solid-svg-icons`                  |                 | ^5.15.4       |
| `@fortawesome/pro-duotone-svg-icons`                 |                 | ^5.15.4       |
| `@fortawesome/pro-light-svg-icons`                   |                 | ^5.15.4       |
| `@fortawesome/pro-regular-svg-icons`                 |                 | ^5.15.4       |
| `@fortawesome/pro-solid-svg-icons`                   |                 | ^5.15.4       |
| `@fortawesome/vue-fontawesome`                       |                 | ^3.0.0-5      |
| `@fullcalendar/core`                                 |                 | ^5.10.1       |
| `@fullcalendar/daygrid`                              |                 | ^5.10.1       |
| `@fullcalendar/interaction`                          |                 | ^5.10.1       |
| `@fullcalendar/timegrid`                             |                 | ^5.10.1       |
| `@fullcalendar/vue3`                                 |                 | ^5.10.1       |
| `@headlessui/vue`                                    |                 | ^1.4.2        |
| `@heroicons/vue`                                     |                 | ^1.0.5        |
| `@iconify/json`                                      |                 | ^1.1.444      |
| `@intlify/vite-plugin-vue-i18n`                      |                 | ^3.2.1        |
| [`@oruga-ui/oruga-next`][oruga]                      |                 | 0.4.8         |
| `@popperjs/core`                                     |                 | 2.11.0        |
| `@progress/kendo-data-query`                         | ^1.5.5          | latest        |
| `@progress/kendo-datasource-vue-wrapper`             | ^2021.3.1109    | latest        |
| `@progress/kendo-dateinputs-vue-wrapper`             | 2021.3.1109     | latest        |
| `@progress/kendo-drawing`                            |                 | latest        |
| `@progress/kendo-dropdowns-vue-wrapper`              |                 | latest        |
| `@progress/kendo-dropdowns-vue-wrapper`              | ^2021.1.119 \*  | latest        |
| `@progress/kendo-inputs-vue-wrapper`                 | ^2021.3.1109    | latest        |
| `@progress/kendo-layout-vue-wrapper`                 | ^2021.3.1109    | latest        |
| `@progress/kendo-licensing`                          | ^1.2.1          | latest        |
| `@progress/kendo-theme-bootstrap`                    | ^4.42.0         | latest        |
| `@progress/kendo-theme-default`                      | ^4.42.0         | latest        |
| `@progress/kendo-ui`                                 | ^2021.1.119 \*  | latest        |
| `@progress/kendo-upload-vue-wrapper`                 |                 | latest        |
| `@progress/kendo-upload-vue-wrapper`                 | ^2021.1.119 \*  | latest        |
| `@progress/kendo-vue-animation`                      |                 | latest        |
| `@progress/kendo-vue-buttons`                        |                 | latest        |
| `@progress/kendo-vue-data-tools`                     | ^2.6.3          | latest        |
| `@progress/kendo-vue-dateinputs`                     | ^2.6.3          | latest        |
| `@progress/kendo-vue-dialogs`                        |                 | latest        |
| `@progress/kendo-vue-dropdowns`                      | ^2.6.3          | latest        |
| `@progress/kendo-vue-excel-export`                   |                 | latest        |
| `@progress/kendo-vue-grid`                           | ^2.6.3          | latest        |
| `@progress/kendo-vue-inputs`                         | ^2.6.3          | latest        |
| `@progress/kendo-vue-intl`                           | ^2.6.3          | latest        |
| `@progress/kendo-vue-pdf`                            |                 | latest        |
| `@progress/kendo-vue-popup`                          | ^2.6.3          | latest        |
| `@supabase/supabase-js`                              |                 | ^1.29.1       |
| `@tailwindcss/aspect-ratio`                          |                 | ^0.4.0        |
| `@tailwindcss/forms`                                 |                 | ^0.4.0        |
| `@tailwindcss/line-clamp`                            |                 | ^0.3.0        |
| `@tailwindcss/typography`                            |                 | ^0.5.0        |
| `@testing-library/jest-dom`                          |                 | ^5.16.1       |
| `@types/bootstrap`                                   | 3.3.37          |               |
| `@types/jquery`                                      | 2.0.46          |               |
| `@types/lodash`                                      | ^4.14.177       |               |
| `@types/node`                                        |                 | ^17.0.0       |
| `@types/qs`                                          | ^6.5.1          |               |
| `@types/reflect-metadata`                            | 0.0.5           |               |
| `@types/toastr`                                      | ^2.1.35         |               |
| `@types/vue-select`                                  | ^2.4.0          |               |
| `@vitejs/plugin-vue`                                 |                 | ^2.0.1        |
| `@vue/compiler-sfc`                                  |                 | 3.2.26        |
| `@vue/runtime-dom`                                   |                 | 3.2.26        |
| `@vue/server-renderer`                               |                 | ^3.2.26       |
| `@vue/test-utils`                                    |                 | ^2.0.0-rc.17  |
| `@vueform/multiselect`                               |                 | ^2.3.1        |
| `@vuelidate/core`                                    | ^2.0.0-alpha.32 |               |
| `@vuelidate/validators`                              | ^2.0.0-alpha.25 |               |
| `@vueuse/components`                                 |                 | ^7.4.1        |
| `@vueuse/core`                                       |                 | ^7.4.1        |
| `@vueuse/head`                                       |                 | 0.7.4         |
| `@vueuse/integrations`                               |                 | ^7.4.1        |
| `animate.css`                                        |                 | ^4.1.1        |
| `autoprefixer`                                       | ^7.2.5          | ^10.4.0       |
| `axios`                                              | ^0.21.1         | ^0.24.0       |
| `babel-polyfill`                                     | 6.26.0          |               |
| `bootstrap-icons`                                    |                 | 1.7.2         |
| `bootstrap-vue`                                      | ^2.1.0          |               |
| `bootstrap`                                          | ^4.6.1          | 4.6.1         |
| `canvas-confetti`                                    |                 | ^1.4.0        |
| `cldr-core`                                          |                 | ^40.0.0       |
| `cldr-dates-full`                                    |                 | ^40.0.0       |
| `cldr-numbers-full`                                  |                 | ^40.0.0       |
| `clean-webpack-plugin`                               | ^0.1.19         |
| `color-namer`                                        |                 | ^1.4.0        |
| `concurrently`                                       |                 | ^6.5.0        |
| `critters`                                           |                 | ^0.0.15       |
| `cross-env`                                          |                 | ^7.0.3        |
| `css-loader`                                         | v0.28.11        | ^5.2.7        |
| `cypress`                                            |                 | ^9.1.1        |
| `date-fns`                                           |                 | ^2.28.0       |
| `element-resize-detector`                            |                 | ^1.2.4        |
| `eslint`                                             |                 | ^8.5.0        |
| `expose-loader`                                      | 0.7.5           |
| `extract-text-webpack-plugin`                        | 4.0.0-beta.0    |
| `faker`                                              |                 | 5.5.3         |
| `file-loader`                                        | ^1.1.11         |
| `flexbox`                                            | 0.0.3           |
| `flush-promises`                                     |                 | ^1.0.2        |
| `gsap`                                               |                 | ^3.9.1        |
| `happy-dom`                                          |                 | ^2.25.0       |
| `howler`                                             |                 | ^2.2.3        |
| `https-localhost`                                    |                 | ^4.7.0        |
| `imports-loader`                                     | ^0.8.0          |               |
| `inversify-inject-decorators`                        | 3.1.0           |               |
| `inversify`                                          | 4.3.0           | ^6.0.1        |
| `is-buffer`                                          | ^2.0.5          |
| `izitoast`                                           | ^1.4.0          |
| `jquery`                                             |                 | ^3.6.0        |
| `jquery`                                             | ^3.1.1          |
| `js-yaml`                                            |                 | ^4.1.0        |
| `jsdom`                                              |                 | ^19.0.0       |
| `lodash`                                             | ^4.17.10        |
| `mande`                                              |                 | ^1.0.1        |
| `mini-svg-data-uri`                                  |                 | ^1.4.3        |
| [`mitt`][mitt]                                       |                 | ^3.0.0        |
| `moment`                                             | ^2.24.0         | ^2.29.1       |
| `nprogress`                                          |                 | ^0.2.0        |
| `node-sass` (sass 1.45.0)                            | 4.14.1          |               |
| `pinia`                                              |                 | ^2.0.9        |
| `pnpm`                                               |                 | ^6.24.1       |
| `popper.js`                                          | ^1.14.3         | 1.16.1        |
| `portal-vue`                                         | ^2.1.7          |
| `postcss-import`                                     |                 | ^14.0.2       |
| `postcss-loader`                                     | v2.1.3          | ^4.3.0        |
| `postcss-nesting`                                    |                 | ^10.0.3       |
| `postcss`                                            |                 | ^8.4.5        |
| `precss`                                             | ^3.1.2          |
| `prism-theme-vars`                                   |                 | ^0.2.2        |
| `prismjs`                                            |                 | ^1.25.0       |
| `qs`                                                 |                 |               |
| `reflect-metadata`                                   | 0.1.10          | ^0.1.13       |
| `remark`                                             |                 | ^13.0.0       |
| `rimraf`                                             |                 | ^3.0.2        |
| `sass-loader`                                        | v7.0.3          | ^10.2.0       |
| `sass`                                               | 1.32.13         | 1.32.13       |
| `signature_pad`                                      | ^3.0.0-beta.3   | ^3.0.0-beta.3 |
| `start-server-and-test`                              |                 | ^1.14.0       |
| `style-loader`                                       | 0.21.0          | ^2.0.0        |
| `tailwindcss`                                        |                 | ^3.0.7        |
| `toastr`                                             | ^2.1.4          |               |
| `ts-loader`                                          | 4.3.0           |               |
| `tslint-loader`                                      | 3.6.0           |               |
| `tslint`                                             | 5.9.1           |               |
| `typescript`                                         | ^3.7.7          | ^4.5.4        |
| [`unplugin-auto-import`][unplugin-auto-import]       |                 | ^0.5.3        |
| [`unplugin-icons`][unplugin-icons]                   |                 | ^0.12.23      |
| [`unplugin-vue-components`][unplugin-vue-components] |                 | ^0.17.9       |
| `url-loader`                                         | 1.0.1           |               |
| `uuid`                                               | ^8.3.2          | ^8.3.2        |
| `uuidv4`                                             | ^6.0.0          |
| `v-tooltip`                                          |                 | ^4.0.0-beta.2 |
| `vee-validate`                                       |                 | ^4.5.7        |
| `velocity-animate`                                   |                 | ^1.5.2        |
| `vite-plugin-pages`                                  |                 | ^0.19.5       |
| `vite-plugin-vue-layouts`                            |                 | ^0.5.0        |
| `vite-plugin-windicss`                               |                 | ^1.5.4        |
| `vite`                                               |                 | ^2.7.3        |
| `vitepress`                                          |                 | 0.20.9        |
| `vitest`                                             |                 | ^0.0.97       |
| `vue-api-query`                                      |                 | 1.9.1         |
| `vue-class-component`                                | ^6.2.0          | ^8.0.0-rc.1   |
| `vue-concurrency`                                    |                 | ^2.2.1        |
| `vue-dataset`                                        |                 | ^3.1.0        |
| `vue-demi`                                           |                 | ^0.12.1       |
| `vue-i18n`                                           |                 | ^9.1.9        |
| `vue-loader`                                         | ^15.2.4         |               |
| `vue-notifications`                                  | ^1.0.2          |               |
| `vue-plyr`                                           |                 | ^7.0.0        |
| `vue-promised`                                       |                 | ^2.2.0        |
| `vue-property-decorator`                             | ^6.0.0          | ^10.0.0-rc.3  |
| `vue-router`                                         |                 | ^4.0.12       |
| `vue-select`                                         | ^2.5.1          |               |
| `vue-shortkey`                                       | ^3.1.7          |               |
| `vue-sidebar-menu`                                   | 4.8.1           | ^5.1.2        |
| `vue-template-compiler`                              | ^2.5.16         |               |
| `vue-toasted`                                        | ^1.1.28         |               |
| `vue-toastification`                                 |                 | ^2.0.0-rc.5   |
| `vue`                                                | ^2.6.10         | ^3.2.26       |
| `vuejs-smart-table`                                  |                 | ^1.0.0-beta.5 |
| `vuex`                                               |                 | ^4.0.2        |
| `webpack-bundle-analyzer`                            | 2.11.1          |               |
| `webpack-cli`                                        | 2.0.14          |               |
| `webpack-merge`                                      | 4.1.2           |               |
| `webpack-notifier`                                   | 1.6.0           | 1.15.0        |
| `webpack`                                            | ^4.46.0         | ^5.65.0       |
| `windicss-analysis`                                  | ^0.3.4          | ^0.3.5        |
| `windicss-webpack-plugin`                            | ^1.5.6          |               |
| `windicss`                                           |                 | ^3.4.0        |
| `yup`                                                |                 | ^0.32.11      |
| `@algolia/client-search`                             | ^4.11.0         |
| `@apollo/client`                                     | ^3.5.6          |
| `@iconify-json/carbon`                               | ^1.0.12         |
| `@iconify-json/heroicons-outline`                    | ^1.0.2          |
| `@iconify-json/heroicons-solid`                      | ^1.0.2          |
| `@iconify-json/twemoji`                              | ^1.0.2          |
| `@iconify-json/wi`                                   | ^1.0.1          |
| `@types/markdown-it-link-attributes`                 | ^3.0.1          |
| `@types/marked`                                      | ^4.0.1          |
| `@types/nprogress`                                   | ^0.2.0          |
| `@types/uuid`                                        | ^8.3.3          |
| `@vitejs/plugin-vue-jsx`                             | ^1.3.2          |
| `@vue/apollo-composable`                             | 4.0.0-alpha.16  |
| `a11y-color-tokens`                                  | ^0.5.0          |
| `eslint-plugin-cypress`                              | ^2.12.1         |
| `firebase`                                           | ^8.10.0         |
| `graphql-tag`                                        | ^2.12.6         |
| `graphql`                                            | ^15.8.0         |
| `markdown-it-link-attributes`                        | ^3.0.0          |
| `markdown-it-prism`                                  | ^2.2.1          |
| `marked`                                             | ^4.0.7          |
| `pascalcase`                                         | ^1.0.0          |
| `style-dictionary`                                   | ^3.1.0          |
| `stylelint-8-point-grid`                             | ^2.1.0          |
| `stylelint-config-rational-order`                    | ^0.1.2          |
| `stylelint-config-standard-scss`                     | ^3.0.0          |
| `stylelint-config-standard`                          | ^24.0.0         |
| `stylelint-config-twbs-bootstrap`                    | ^3.0.0          |
| `stylelint-order`                                    | ^5.0.0          |
| `stylelint`                                          | 14.1.0          |
| `vant`                                               | ^3.3.7          |
| `vite-plugin-inspect`                                | ^0.3.11         |
| `vite-plugin-md`                                     | ^0.11.6         |
| `vite-plugin-pwa`                                    | ^0.11.12        |
| `vue-dts-gen`                                        | ^0.3.0          |
| `vue-gtag-next`                                      | ^1.14.0         |
| `vue-json-pretty`                                    | ^2.0.6          |
| `vue-prism-component`                                | ^2.0.0          |
| `vue-tsc`                                            | ^0.29.8         |

[bootstrap-icons]: https://github.com/twbs/icons#usage 'Official open source SVG icon library for Bootstrap.'
[bootstrap4-sass]: https://getbootstrap.com/docs/4.6/getting-started/build-tools/#sass 'Bootstrap 4 Sass'
[canvas-confetti]: https://github.com/catdad/canvas-confetti#demo '🎉 on-demand confetti gun'
[casl]: https://github.com/stalniy/casl#features 'CASL is an isomorphic authorization JavaScript library which restricts what resources a given user is allowed to access'
[color-namer]: https://github.com/colorjs/color-namer#readme "🎨 Give me a color and I'll name it."
[deprecation_warning]: https://github.com/twbs/bootstrap/issues/34051 'Sass deprecation warning: Using / for division is deprecated'
[gsap]: https://github.com/greensock/GSAP#gsap-greensock-animation-platform "GreenSock's GSAP JavaScript animation library (including Draggable)."
[howler]: https://github.com/goldfire/howler.js#description 'Javascript audio library for the modern web.'
[inversify]: https://github.com/inversify/InversifyJS#about 'A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.'
[mande]: https://github.com/posva/mande#usage 'Simple, light and extensible wrapper around fetch with smart defaults'
[migrator]: https://sass-lang.com/documentation/cli/migrator 'Updates your Sass files to help you move on to the latest and greatest version of the language'
[mitt]: https://github.com/developit/mitt#usage '🥊 Tiny 200 byte functional event emitter / pubsub.'
[nprogress]: https://github.com/rstacruz/nprogress#nprogress 'For slim progress bars like on YouTube, Medium, etc'
[oruga]: https://github.com/oruga-ui/oruga#readme 'A lightweight library of UI components for Vue.js without a CSS framework dependency'
[pinia]: https://github.com/vuejs/pinia#pinia '🍍 Intuitive, type safe, light and flexible Store for Vue using the composition api with DevTools support'
[popper]: https://github.com/floating-ui/floating-ui/tree/v2.x 'A low-level toolkit to position floating elements while intelligently keeping them in view. Tooltips, popovers, dropdowns, menus, and more'
[prism-theme-vars]: https://github.com/antfu/prism-theme-vars#readme 'A customizable Prism.js theme using CSS variables'
[prism]: https://github.com/PrismJS/prism#prism 'Lightweight, robust, elegant syntax highlighting.'
[reflect-metadata]: https://github.com/rbuckton/reflect-metadata#metadata-reflection-api 'Prototype for a Metadata Reflection API for ECMAScript'
[remotion]: https://github.com/remotion-dev/remotion 'Create videos programmatically in React'
[sass-migrator]: https://github.com/sass/migrator 'Tool for migrating stylesheets to new Sass versions'
[unplugin-auto-import]: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import 'Auto import APIs on-demand for Vite, Webpack and Rollup'
[unplugin-icons]: https://github.com/antfu/unplugin-icons#unplugin-icons 'Access thousands of icons as components on-demand universally.'
[unplugin-vue-components]: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components '📲 On-demand components auto importing for Vue'
[uuid]: https://github.com/uuidjs/uuid#uuid-- 'Generate RFC-compliant UUIDs in JavaScript'
[v-tooltip]: https://v-tooltip.netlify.app/ '💬 Easy tooltips, popovers, dropdown for Vue'
[vee-validate]: https://github.com/logaretm/vee-validate#features '✅ Form Validation for Vue.js'
[velocity-animate]: https://github.com/julianshapiro/velocity/wiki#velocityjs 'Accelerated JavaScript Animation'
[vite-plugin-pages]: https://github.com/hannoeru/vite-plugin-pages#vite-plugin-pages 'File system based routing for Vue 3 applications using Vite'
[vite-plugin-vue-layouts]: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts 'Router based layout for Vue 3 applications using Vite'
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss#features "Windi CSS for Vite, it's fast! ⚡️"
[vitest]: https://github.com/vitest-dev/vitest#readme 'A blazing fast unit test framework powered by Vite.'
[vue-api-query]: https://robsontenorio.github.io/vue-api-query/ '💎 Elegant and simple way to build requests for REST API'
[vue-class-component]: https://class-component.vuejs.org/ 'ES / TypeScript decorator for class-style Vue components.'
[vue-concurrency]: https://github.com/martinmalinda/vue-concurrency#features 'A library for encapsulating asynchronous operations and managing concurrency for Vue and Composition API.'
[vue-dataset]: https://github.com/kouts/vue-dataset/tree/next#features 'A set of Vue.js components to display datasets (lists) with filtering, paging, and sorting capabilities!'
[vue-demi]: https://github.com/vueuse/vue-demi#usage '🎩 Creates Universal Library for Vue 2 & 3'
[vue-i18n]: https://vue-i18n.intlify.dev/ '🌐 Internationalization plugin for Vue.js'
[vue-promised]: https://github.com/posva/vue-promised#usage '💝 Composable Promises & Promises as components'
[vue-property-decorator]: https://github.com/kaorun343/vue-property-decorator#usage 'Vue.js and Property Decorator'

[windi-analysis]: https://github.com/windicss/windicss-analysis#windi-analysis "An analyser tool for Windi CSS. Browse your utilities usages, have an overview of your design system, identify "bad practices", and more!"
[windicss-webpack-plugin]: https://github.com/windicss/windicss-webpack-plugin#features "🍃 Windi CSS for webpack ⚡"
[vitepress]: https://vitepress.vuejs.org/ "Vite & Vue powered static site generator."

# Auto Imports

| vue 3                |                                              |
| -------------------- | -------------------------------------------- |
| computed             | typeof import('vue')['computed']             |
| createApp            | typeof import('vue')['createApp']            |
| customRef            | typeof import('vue')['customRef']            |
| defineAsyncComponent | typeof import('vue')['defineAsyncComponent'] |
| defineComponent      | typeof import('vue')['defineComponent']      |
| effectScope          | typeof import('vue')['effectScope']          |
| EffectScope          | typeof import('vue')['EffectScope']          |
| getCurrentInstance   | typeof import('vue')['getCurrentInstance']   |
| getCurrentScope      | typeof import('vue')['getCurrentScope']      |
| h                    | typeof import('vue')['h']                    |
| inject               | typeof import('vue')['inject']               |
| isReadonly           | typeof import('vue')['isReadonly']           |
| isRef                | typeof import('vue')['isRef']                |
| markRaw              | typeof import('vue')['markRaw']              |
| nextTick             | typeof import('vue')['nextTick']             |
| onActivated          | typeof import('vue')['onActivated']          |
| onBeforeMount        | typeof import('vue')['onBeforeMount']        |
| onBeforeUnmount      | typeof import('vue')['onBeforeUnmount']      |
| onBeforeUpdate       | typeof import('vue')['onBeforeUpdate']       |
| onDeactivated        | typeof import('vue')['onDeactivated']        |
| onErrorCaptured      | typeof import('vue')['onErrorCaptured']      |
| onMounted            | typeof import('vue')['onMounted']            |
| onRenderTracked      | typeof import('vue')['onRenderTracked']      |
| onRenderTriggered    | typeof import('vue')['onRenderTriggered']    |
| onScopeDispose       | typeof import('vue')['onScopeDispose']       |
| onServerPrefetch     | typeof import('vue')['onServerPrefetch']     |
| onUnmounted          | typeof import('vue')['onUnmounted']          |
| onUpdated            | typeof import('vue')['onUpdated']            |
| provide              | typeof import('vue')['provide']              |
| reactive             | typeof import('vue')['reactive']             |
| readonly             | typeof import('vue')['readonly']             |
| ref                  | typeof import('vue')['ref']                  |
| resolveComponent     | typeof import('vue')['resolveComponent']     |
| shallowReactive      | typeof import('vue')['shallowReactive']      |
| shallowReadonly      | typeof import('vue')['shallowReadonly']      |
| shallowRef           | typeof import('vue')['shallowRef']           |
| toRaw                | typeof import('vue')['toRaw']                |
| toRef                | typeof import('vue')['toRef']                |
| toRefs               | typeof import('vue')['toRefs']               |
| triggerRef           | typeof import('vue')['triggerRef']           |
| unref                | typeof import('vue')['unref']                |
| useAttrs             | typeof import('vue')['useAttrs']             |
| useCssModule         | typeof import('vue')['useCssModule']         |
| useSlots             | typeof import('vue')['useSlots']             |
| watch                | typeof import('vue')['watch']                |
| watchEffect          | typeof import('vue')['watchEffect']          |

| vitest     |                                       |
| ---------- | ------------------------------------- |
| afterAll   | typeof import('vitest')['afterAll']   |
| afterEach  | typeof import('vitest')['afterEach']  |
| assert     | typeof import('vitest')['assert']     |
| beforeAll  | typeof import('vitest')['beforeAll']  |
| beforeEach | typeof import('vitest')['beforeEach'] |
| chai       | typeof import('vitest')['chai']       |
| suite      | typeof import('vitest')['suite']      |
| test       | typeof import('vitest')['test']       |
| vi         | typeof import('vitest')['vi']         |
| vitest     | typeof import('vitest')['vitest']     |

| @vueuse/core            |                                                          |
| ----------------------- | -------------------------------------------------------- |
| asyncComputed           | typeof import('@vueuse/core')['asyncComputed']           |
| autoResetRef            | typeof import('@vueuse/core')['autoResetRef']            |
| biSyncRef               | typeof import('@vueuse/core')['biSyncRef']               |
| computedInject          | typeof import('@vueuse/core')['computedInject']          |
| controlledComputed      | typeof import('@vueuse/core')['controlledComputed']      |
| controlledRef           | typeof import('@vueuse/core')['controlledRef']           |
| createEventHook         | typeof import('@vueuse/core')['createEventHook']         |
| createGlobalState       | typeof import('@vueuse/core')['createGlobalState']       |
| createReactiveFn        | typeof import('@vueuse/core')['createReactiveFn']        |
| createSharedComposable  | typeof import('@vueuse/core')['createSharedComposable']  |
| createUnrefFn           | typeof import('@vueuse/core')['createUnrefFn']           |
| debouncedRef            | typeof import('@vueuse/core')['debouncedRef']            |
| debouncedWatch          | typeof import('@vueuse/core')['debouncedWatch']          |
| eagerComputed           | typeof import('@vueuse/core')['eagerComputed']           |
| extendRef               | typeof import('@vueuse/core')['extendRef']               |
| ignorableWatch          | typeof import('@vueuse/core')['ignorableWatch']          |
| isDefined               | typeof import('@vueuse/core')['isDefined']               |
| makeDestructurable      | typeof import('@vueuse/core')['makeDestructurable']      |
| onClickOutside          | typeof import('@vueuse/core')['onClickOutside']          |
| onKeyStroke             | typeof import('@vueuse/core')['onKeyStroke']             |
| onStartTyping           | typeof import('@vueuse/core')['onStartTyping']           |
| pausableWatch           | typeof import('@vueuse/core')['pausableWatch']           |
| reactify                | typeof import('@vueuse/core')['reactify']                |
| reactifyObject          | typeof import('@vueuse/core')['reactifyObject']          |
| reactivePick            | typeof import('@vueuse/core')['reactivePick']            |
| refDefault              | typeof import('@vueuse/core')['refDefault']              |
| syncRef                 | typeof import('@vueuse/core')['syncRef']                 |
| templateRef             | typeof import('@vueuse/core')['templateRef']             |
| throttledRef            | typeof import('@vueuse/core')['throttledRef']            |
| throttledWatch          | typeof import('@vueuse/core')['throttledWatch']          |
| toReactive              | typeof import('@vueuse/core')['toReactive']              |
| tryOnBeforeUnmount      | typeof import('@vueuse/core')['tryOnBeforeUnmount']      |
| tryOnMounted            | typeof import('@vueuse/core')['tryOnMounted']            |
| tryOnScopeDispose       | typeof import('@vueuse/core')['tryOnScopeDispose']       |
| tryOnUnmounted          | typeof import('@vueuse/core')['tryOnUnmounted']          |
| unrefElement            | typeof import('@vueuse/core')['unrefElement']            |
| until                   | typeof import('@vueuse/core')['until']                   |
| useActiveElement        | typeof import('@vueuse/core')['useActiveElement']        |
| useAsyncQueue           | typeof import('@vueuse/core')['useAsyncQueue']           |
| useAsyncState           | typeof import('@vueuse/core')['useAsyncState']           |
| useBase64               | typeof import('@vueuse/core')['useBase64']               |
| useBattery              | typeof import('@vueuse/core')['useBattery']              |
| useBreakpoints          | typeof import('@vueuse/core')['useBreakpoints']          |
| useBrowserLocation      | typeof import('@vueuse/core')['useBrowserLocation']      |
| useClamp                | typeof import('@vueuse/core')['useClamp']                |
| useClipboard            | typeof import('@vueuse/core')['useClipboard']            |
| useColorMode            | typeof import('@vueuse/core')['useColorMode']            |
| useConfirmDialog        | typeof import('@vueuse/core')['useConfirmDialog']        |
| useCounter              | typeof import('@vueuse/core')['useCounter']              |
| useCssVar               | typeof import('@vueuse/core')['useCssVar']               |
| useCycleList            | typeof import('@vueuse/core')['useCycleList']            |
| useDark                 | typeof import('@vueuse/core')['useDark']                 |
| useDebounce             | typeof import('@vueuse/core')['useDebounce']             |
| useDebouncedRefHistory  | typeof import('@vueuse/core')['useDebouncedRefHistory']  |
| useDebounceFn           | typeof import('@vueuse/core')['useDebounceFn']           |
| useDeviceMotion         | typeof import('@vueuse/core')['useDeviceMotion']         |
| useDeviceOrientation    | typeof import('@vueuse/core')['useDeviceOrientation']    |
| useDevicePixelRatio     | typeof import('@vueuse/core')['useDevicePixelRatio']     |
| useDevicesList          | typeof import('@vueuse/core')['useDevicesList']          |
| useDisplayMedia         | typeof import('@vueuse/core')['useDisplayMedia']         |
| useDocumentVisibility   | typeof import('@vueuse/core')['useDocumentVisibility']   |
| useDraggable            | typeof import('@vueuse/core')['useDraggable']            |
| useElementBounding      | typeof import('@vueuse/core')['useElementBounding']      |
| useElementByPoint       | typeof import('@vueuse/core')['useElementByPoint']       |
| useElementHover         | typeof import('@vueuse/core')['useElementHover']         |
| useElementSize          | typeof import('@vueuse/core')['useElementSize']          |
| useElementVisibility    | typeof import('@vueuse/core')['useElementVisibility']    |
| useEventBus             | typeof import('@vueuse/core')['useEventBus']             |
| useEventListener        | typeof import('@vueuse/core')['useEventListener']        |
| useEventSource          | typeof import('@vueuse/core')['useEventSource']          |
| useEyeDropper           | typeof import('@vueuse/core')['useEyeDropper']           |
| useFavicon              | typeof import('@vueuse/core')['useFavicon']              |
| useFetch                | typeof import('@vueuse/core')['useFetch']                |
| useFocus                | typeof import('@vueuse/core')['useFocus']                |
| useFocusWithin          | typeof import('@vueuse/core')['useFocusWithin']          |
| useFps                  | typeof import('@vueuse/core')['useFps']                  |
| useFullscreen           | typeof import('@vueuse/core')['useFullscreen']           |
| useGeolocation          | typeof import('@vueuse/core')['useGeolocation']          |
| useHead                 | typeof import('@vueuse/head')['useHead']                 |
| useIdle                 | typeof import('@vueuse/core')['useIdle']                 |
| useIntersectionObserver | typeof import('@vueuse/core')['useIntersectionObserver'] |
| useInterval             | typeof import('@vueuse/core')['useInterval']             |
| useIntervalFn           | typeof import('@vueuse/core')['useIntervalFn']           |
| useKeyModifier          | typeof import('@vueuse/core')['useKeyModifier']          |
| useLastChanged          | typeof import('@vueuse/core')['useLastChanged']          |
| useLocalStorage         | typeof import('@vueuse/core')['useLocalStorage']         |
| useMagicKeys            | typeof import('@vueuse/core')['useMagicKeys']            |
| useManualRefHistory     | typeof import('@vueuse/core')['useManualRefHistory']     |
| useMediaControls        | typeof import('@vueuse/core')['useMediaControls']        |
| useMediaQuery           | typeof import('@vueuse/core')['useMediaQuery']           |
| useMemory               | typeof import('@vueuse/core')['useMemory']               |
| useMounted              | typeof import('@vueuse/core')['useMounted']              |
| useMouse                | typeof import('@vueuse/core')['useMouse']                |
| useMouseInElement       | typeof import('@vueuse/core')['useMouseInElement']       |
| useMousePressed         | typeof import('@vueuse/core')['useMousePressed']         |
| useMutationObserver     | typeof import('@vueuse/core')['useMutationObserver']     |
| useNavigatorLanguage    | typeof import('@vueuse/core')['useNavigatorLanguage']    |
| useNetwork              | typeof import('@vueuse/core')['useNetwork']              |
| useNow                  | typeof import('@vueuse/core')['useNow']                  |
| useOnline               | typeof import('@vueuse/core')['useOnline']               |
| usePageLeave            | typeof import('@vueuse/core')['usePageLeave']            |
| useParallax             | typeof import('@vueuse/core')['useParallax']             |
| usePermission           | typeof import('@vueuse/core')['usePermission']           |
| usePointer              | typeof import('@vueuse/core')['usePointer']              |
| usePointerSwipe         | typeof import('@vueuse/core')['usePointerSwipe']         |
| usePreferredColorScheme | typeof import('@vueuse/core')['usePreferredColorScheme'] |
| usePreferredDark        | typeof import('@vueuse/core')['usePreferredDark']        |
| usePreferredLanguages   | typeof import('@vueuse/core')['usePreferredLanguages']   |
| useRafFn                | typeof import('@vueuse/core')['useRafFn']                |
| useRefHistory           | typeof import('@vueuse/core')['useRefHistory']           |
| useResizeObserver       | typeof import('@vueuse/core')['useResizeObserver']       |
| useScreenSafeArea       | typeof import('@vueuse/core')['useScreenSafeArea']       |
| useScriptTag            | typeof import('@vueuse/core')['useScriptTag']            |
| useScroll               | typeof import('@vueuse/core')['useScroll']               |
| useScrollLock           | typeof import('@vueuse/core')['useScrollLock']           |
| useSessionStorage       | typeof import('@vueuse/core')['useSessionStorage']       |
| useShare                | typeof import('@vueuse/core')['useShare']                |
| useSpeechRecognition    | typeof import('@vueuse/core')['useSpeechRecognition']    |
| useSpeechSynthesis      | typeof import('@vueuse/core')['useSpeechSynthesis']      |
| useStorage              | typeof import('@vueuse/core')['useStorage']              |
| useStorageAsync         | typeof import('@vueuse/core')['useStorageAsync']         |
| useSwipe                | typeof import('@vueuse/core')['useSwipe']                |
| useTemplateRefsList     | typeof import('@vueuse/core')['useTemplateRefsList']     |
| useTextSelection        | typeof import('@vueuse/core')['useTextSelection']        |
| useThrottle             | typeof import('@vueuse/core')['useThrottle']             |
| useThrottledRefHistory  | typeof import('@vueuse/core')['useThrottledRefHistory']  |
| useThrottleFn           | typeof import('@vueuse/core')['useThrottleFn']           |
| useTimeAgo              | typeof import('@vueuse/core')['useTimeAgo']              |
| useTimeout              | typeof import('@vueuse/core')['useTimeout']              |
| useTimeoutFn            | typeof import('@vueuse/core')['useTimeoutFn']            |
| useTimestamp            | typeof import('@vueuse/core')['useTimestamp']            |
| useTitle                | typeof import('@vueuse/core')['useTitle']                |
| useToggle               | typeof import('@vueuse/core')['useToggle']               |
| useTransition           | typeof import('@vueuse/core')['useTransition']           |
| useUrlSearchParams      | typeof import('@vueuse/core')['useUrlSearchParams']      |
| useUserMedia            | typeof import('@vueuse/core')['useUserMedia']            |
| useVirtualList          | typeof import('@vueuse/core')['useVirtualList']          |
| useVModel               | typeof import('@vueuse/core')['useVModel']               |
| useVModels              | typeof import('@vueuse/core')['useVModels']              |
| useWakeLock             | typeof import('@vueuse/core')['useWakeLock']             |
| useWebSocket            | typeof import('@vueuse/core')['useWebSocket']            |
| useWebWorker            | typeof import('@vueuse/core')['useWebWorker']            |
| useWebWorkerFn          | typeof import('@vueuse/core')['useWebWorkerFn']          |
| useWindowFocus          | typeof import('@vueuse/core')['useWindowFocus']          |
| useWindowScroll         | typeof import('@vueuse/core')['useWindowScroll']         |
| useWindowSize           | typeof import('@vueuse/core')['useWindowSize']           |
| watchAtMost             | typeof import('@vueuse/core')['watchAtMost']             |
| watchOnce               | typeof import('@vueuse/core')['watchOnce']               |
| watchWithFilter         | typeof import('@vueuse/core')['watchWithFilter']         |
| whenever                | typeof import('@vueuse/core')['whenever']                |

| vue-router |                                          |
| ---------- | ---------------------------------------- |
| useRoute   | typeof import('vue-router')['useRoute']  |
| useRouter  | typeof import('vue-router')['useRouter'] |

# Components

|                                                             |     |
| ----------------------------------------------------------- | --- |
| AppAlert                                                    |     |
| AppBanner                                                   |     |
| AppCookieConsent                                            |     |
| AppFooter                                                   |     |
| AppHeader                                                   |     |
| AppLayout                                                   |     |
| AppLink                                                     |     |
| AppLoadingSpinner                                           |     |
| AppLogo                                                     |     |
| AppNavbar                                                   |     |
| AppSidebar                                                  |     |
| BaseAvatar                                                  |     |
| BaseButton                                                  |     |
| BaseCheckbox                                                |     |
| BaseCounter                                                 |     |
| BaseErrorMessage                                            |     |
| BaseIconOutlined                                            |     |
| BaseIconSolid                                               |     |
| BaseInput                                                   |     |
| BaseRadio                                                   |     |
| BaseRadioGroup                                              |     |
| BaseSelect                                                  |     |
| ClassComponent                                              |     |
| Count                                                       |     |
| Counter                                                     |     |
| DataTable                                                   |     |
| Example                                                     |     |
| ExampleAsyncComponent                                       |     |
| ExampleButton                                               |     |
| ExampleCards                                                |     |
| ExampleCounter                                              |     |
| ExampleForm                                                 |     |
| ExampleHeader                                               |     |
| ExampleInlineGrid                                           |     |
| ExampleSidebar                                              |     |
| ExampleTable                                                |     |
| HancockCounter                                              |     |
| HancockDeleteModal                                          |     |
| HancockEditTemplate                                         |     |
| HancockEmailsSendAsset                                      |     |
| HancockHelp                                                 |     |
| HancockHelpAssetGrid                                        |     |
| HancockHelpAssetGridToolbar                                 |     |
| HancockHelpGlossary                                         |     |
| HancockHelpHowTo                                            |     |
| HancockHelpPifaLayout                                       |     |
| HancockHelpToc                                              |     |
| HancockLayout                                               |     |
| HancockLogo                                                 |     |
| HancockPifLayout                                            |     |
| HancockPropertyInspections                                  |     |
| HancockPropertyInspectionsAssetGridDetails                  |     |
| HancockPropertyInspectionsAssetGridHeader                   |     |
| HancockPropertyInspectionsAssetGridIcons                    |     |
| HancockPropertyInspectionsAssetGridMenuTemplate             |     |
| HancockPropertyInspectionsAssetGridRow                      |     |
| HancockPropertyInspectionsAssetGridSubMenu                  |     |
| HancockPropertyInspectionsAssetGridTemplate                 |     |
| HancockPropertyInspectionsAssetUploadTemplate               |     |
| HancockPropertyInspectionsAssetViewerModal                  |     |
| HancockPropertyInspectionsAssetViewerTemplate               |     |
| HancockPropertyInspectionsBaseLayoutTemplate                |     |
| HancockPropertyInspectionsBooleanCameraWrapperTemplate      |     |
| HancockPropertyInspectionsBooleanTemplate                   |     |
| HancockPropertyInspectionsBooleanWrapperTemplate            |     |
| HancockPropertyInspectionsCameraTemplate                    |     |
| HancockPropertyInspectionsCanvasButtonTemplate              |     |
| HancockPropertyInspectionsCheckboxCameraWrapperTemplate     |     |
| HancockPropertyInspectionsCheckboxTemplate                  |     |
| HancockPropertyInspectionsCheckboxWrapperTemplate           |     |
| HancockPropertyInspectionsCreateAssetModal                  |     |
| HancockPropertyInspectionsDeleteAssetModal                  |     |
| HancockPropertyInspectionsDeleteSectionModal                |     |
| HancockPropertyInspectionsDirectionalCameraWrapperTemplate  |     |
| HancockPropertyInspectionsDirectionalNumericWrapperTemplate |     |
| HancockPropertyInspectionsEditAssetModal                    |     |
| HancockPropertyInspectionsElevationSectionTemplate          |     |
| HancockPropertyInspectionsInteriorSectionTemplate           |     |
| HancockPropertyInspectionsKeyPad                            |     |
| HancockPropertyInspectionsMainSectionTemplate               |     |
| HancockPropertyInspectionsNumericCameraWrapperTemplate      |     |
| HancockPropertyInspectionsNumericTemplate                   |     |
| HancockPropertyInspectionsNumericWrapperTemplate            |     |
| HancockPropertyInspectionsPhotoTemplate                     |     |
| HancockPropertyInspectionsPifaHeaderTemplate                |     |
| HancockPropertyInspectionsPifFormModal                      |     |
| HancockPropertyInspectionsPifHeader                         |     |
| HancockPropertyInspectionsProjectDetailsTemplate            |     |
| HancockPropertyInspectionsRecoverAssetModal                 |     |
| HancockPropertyInspectionsReportsModal                      |     |
| HancockPropertyInspectionsRoofDamageItemsSectionTemplate    |     |
| HancockPropertyInspectionsRoofSectionTemplate               |     |
| HancockPropertyInspectionsSendAssetModal                    |     |
| HancockPropertyInspectionsSliderTemplate                    |     |
| HancockPropertyInspectionsTextboxCameraWrapperTemplate      |     |
| HancockPropertyInspectionsTextboxTemplate                   |     |
| HancockPropertyInspectionsTextboxWrapperTemplate            |     |
| HancockPropertyInspectionsUnauthorized                      |     |
| HancockPropertyInspectionsUploadModal                       |     |
| HancockPropertyInspectionsUploadValidationModal             |     |
| HancockServiceListTemplate                                  |     |
| HancockUnauthorizedModal                                    |     |
| Hello                                                       |     |
| List                                                        |     |
| Log                                                         |     |
| LogoUxLab                                                   |     |
| MessageItem                                                 |     |
| MessageList                                                 |     |
| MessageTable                                                |     |
| MessageTableActions                                         |     |
| MultiActionButton                                           |     |
| PageHeader                                                  |     |
| PageHeaderComponent                                         |     |
| PageTitle                                                   |     |
| PatternLabLogo                                              |     |
| PendingPlaceholder                                          |     |
| ProfileDropdown                                             |     |
| ProfileDropdownButton                                       |     |
| SearchForm                                                  |     |
| SearchHeader                                                |     |
| Sidebar                                                     |     |
| SidebarCloseButton                                          |     |
| SidebarDropdown                                             |     |
| SidebarMenu                                                 |     |
| SidebarOffCanvas                                            |     |
| SidebarSearch                                               |     |
| SidebarToggle                                               |     |
| SlotTesting                                                 |     |
| TableHeader                                                 |     |
| UserAuth                                                    |     |
| UserProfileCard                                             |     |
| UserProfileForm                                             |     |
| VueIcon                                                     |     |

[798]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/798 '[Story] - Legacy - Claim Number Formatting on Webform'
[873]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/873 '[Task] - Legacy - Insert regular expression into ClaimFormat column record'
[874]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/874 '[Task] - Legacy - implement claimNumberFormat regular expression'
[875]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/875 '[Task] - Legacy - Add ClaimFormat field to Company add and edit screens'
[887]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/887 '[Bug] - Legacy - When choosing a business unit, a Server Error intermittently occurs'
[924]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/924 'Territory Managers multiselect Vue Component'
[925]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/925 'Exemplar Core - ServiceAreaManager API Endpoint'
[939]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/939 '[Story] - CORE - Exemplar UI Retrofit Identify Items'
[1130]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1130 'Legacy - Remove IsDeleted from AvailableServiceType'
[1131]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1131 'Migrations - AvailableServiceType IsDeleted'
[1132]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1132 'Legacy - Remove HoverEnabled from CompanyServiceType'
[1133]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1133 'Migrations - CompanyServiceType IsHoverEnabled'
[1134]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1134 'Legacy - Announcement Author'
[1135]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1135 'Migrations Announcement Author'
