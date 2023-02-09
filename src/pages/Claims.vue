<script>
import { useField, useForm } from 'vee-validate'
import { object, string, number, boolean } from 'yup'
export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ]
    }
  },
  setup() {
    const validationSchema = object({
      category: string().required(),
      title: string().required('A cool title is required').min(3),
      description: string().required(),
      location: string(),
      pets: number(),
      catering: boolean(),
      music: boolean()
    })
    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        pets: 1,
        catering: false,
        music: false
      }
    })
    const { value: category } = useField('category')
    const { value: title } = useField('title')
    const { value: description } = useField('description')
    const { value: location } = useField('location')
    const { value: pets } = useField('pets')
    const { value: catering } = useField('catering')
    const { value: music } = useField('music')
    const submit = handleSubmit(values => {
      console.log('submit', values)
    })
    return {
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      submit,
      errors
    }
  }
}
</script>

<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="submit">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="category"
        :error="errors.category"
      />

      <h3>Name & describe your event</h3>
      <BaseInput label="Title" type="text" v-model="title" :error="errors.title" />

      <BaseInput label="Description" type="text" v-model="description" :error="errors.description" />

      <h3>Where is your event?</h3>
      <BaseInput label="Location" type="text" v-model="location" :error="errors.location" />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        name="pets"
        :options="[
          { value: 1, label: 'Yes' },
          { value: 0, label: 'No' }
        ]"
        v-model="pets"
        :error="errors.pets"
      />

      <h3>Extras</h3>
      <div>
        <BaseCheckbox label="Catering" v-model="catering" :error="errors.catering" />
      </div>

      <div>
        <BaseCheckbox label="Live music" v-model="music" :error="errors.music" />
      </div>

      <div>
        <BaseButton type="submit" class="-fill-gradient" something="else">Submit</BaseButton>
      </div>
    </form>
  </div>

  <div>
    <form
      action="/Claims"
      class="wrapper small form"
      id="claims-form"
      method="post"
      novalidate="novalidate"
    >
      <div
        class="alert alert-info"
        id="info"
        style="background-color: rgb(217, 237, 247); display: none;"
      >
        <strong>Info!</strong>
        <span
          style="margin-left: 13px;"
        >For the optimal experience, please use Chrome as your browser</span>
      </div>
      <div class="form-section">
        <div class="w50">
          <div>
            <label class="required" for="CompanyName" aria-required="true">Carrier</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="CompanyName"
              data-valmsg-replace="true"
            ></span>
            <div
              id="CompanyName"
              class="dd-container"
              tabindex="0"
              autofocus="autofocus"
              style="width: 100%;"
            >
              <div class="dd-select" style="width: 100%; background: rgb(255, 255, 255);">
                <input
                  class="dd-selected-value required"
                  type="hidden"
                  name="CompanyName"
                  data-val-required="The Carrier field is required."
                  data-val="true"
                  value
                  aria-required="true"
                />
                <a class="dd-selected">
                  <label class="dd-selected-text">Select Carrier</label>
                </a>
                <span class="dd-pointer dd-pointer-down"></span>
              </div>
              <ul class="dd-options dd-click-off-close" style="width: 100%;">
                <li>
                  <a class="dd-option dd-option-selected">
                    <label class="dd-option-text">Select Carrier</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="366" />
                    <label class="dd-option-text">AAA / Ace Group</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="302" />
                    <label class="dd-option-text">Allstate</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="331" />
                    <label class="dd-option-text">Allstate - NCT</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="378" />
                    <label class="dd-option-text">American Automobile Association</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="341" />
                    <label class="dd-option-text">American Family</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="464" />
                    <label class="dd-option-text">American Integrity</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="479" />
                    <label class="dd-option-text">American Modern</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="419" />
                    <label class="dd-option-text">American Strategic Insurance</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="310" />
                    <label class="dd-option-text">Amica</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="377" />
                    <label class="dd-option-text">Arbella Mutual Insurance Company</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="311" />
                    <label class="dd-option-text">Assurant</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="344" />
                    <label class="dd-option-text">Auto Owners</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="343" />
                    <label class="dd-option-text">California State Automobile Association</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="314" />
                    <label class="dd-option-text">Capital Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="497" />
                    <label class="dd-option-text">Capstone</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="345" />
                    <label class="dd-option-text">Chubb</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="315" />
                    <label class="dd-option-text">Crawford</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="385" />
                    <label class="dd-option-text">Custard Insurance Adjusters</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="317" />
                    <label class="dd-option-text">Encompass</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="447" />
                    <label class="dd-option-text">Encova Insurance</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="318" />
                    <label class="dd-option-text">Erie</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="320" />
                    <label class="dd-option-text">Farmers</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="359" />
                    <label class="dd-option-text">Farmers - FWS</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="398" />
                    <label class="dd-option-text">Florida Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="498" />
                    <label class="dd-option-text">Foremost</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="355" />
                    <label class="dd-option-text">Hanover</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="439" />
                    <label class="dd-option-text">Home Owners Choice</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="323" />
                    <label class="dd-option-text">Homesite</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="414" />
                    <label class="dd-option-text">Horace Mann</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="877" />
                    <label class="dd-option-text">IMT Insurance</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="326" />
                    <label class="dd-option-text">Kemper</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="422" />
                    <label class="dd-option-text">Liberty - Commercial</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="327" />
                    <label class="dd-option-text">Liberty Mutual</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="328" />
                    <label class="dd-option-text">Midwest Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="492" />
                    <label class="dd-option-text">National General</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="329" />
                    <label class="dd-option-text">Nationwide</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="879" />
                    <label class="dd-option-text">Nationwide Commercial</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="494" />
                    <label class="dd-option-text">New Jersey Manufacturers Insurance</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="332" />
                    <label class="dd-option-text">New York Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="333" />
                    <label class="dd-option-text">North Central Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="334" />
                    <label class="dd-option-text">Northeast Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="384" />
                    <label class="dd-option-text">OTHER CUSTOMER</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="433" />
                    <label class="dd-option-text">QBE</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="748" />
                    <label class="dd-option-text">Rimkus</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="351" />
                    <label class="dd-option-text">Ryze</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="335" />
                    <label class="dd-option-text">Safeco</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="338" />
                    <label class="dd-option-text">Southeast Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="387" />
                    <label class="dd-option-text">Southwest Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="337" />
                    <label class="dd-option-text">State Farm</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="340" />
                    <label class="dd-option-text">Tennessee Farm Bureau</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="322" />
                    <label class="dd-option-text">The Hartford</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="324" />
                    <label class="dd-option-text">Travelers</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="411" />
                    <label class="dd-option-text">United Property &amp; Casualty</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="319" />
                    <label class="dd-option-text">United Services Automobile Association</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="876" />
                    <label class="dd-option-text">Universal</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="316" />
                    <label class="dd-option-text">Utica</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="395" />
                    <label class="dd-option-text">West Central Property</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="495" />
                    <label class="dd-option-text">Western Reserve Group</label>
                  </a>
                </li>
              </ul>
            </div>
            <input type="hidden" id="carrier-366" name="AAA / Ace Group" />
            <input type="hidden" id="carrier-302" name="Allstate" value />
            <input type="hidden" id="carrier-331" name="Allstate - NCT" />
            <input type="hidden" id="carrier-378" name="American Automobile Association" />
            <input type="hidden" id="carrier-341" name="American Family" />
            <input type="hidden" id="carrier-464" name="American Integrity" />
            <input type="hidden" id="carrier-479" name="American Modern" />
            <input type="hidden" id="carrier-419" name="American Strategic Insurance" />
            <input type="hidden" id="carrier-310" name="Amica" />
            <input type="hidden" id="carrier-377" name="Arbella Mutual Insurance Company" />
            <input type="hidden" id="carrier-311" name="Assurant" />
            <input type="hidden" id="carrier-344" name="Auto Owners" />
            <input type="hidden" id="carrier-343" name="California State Automobile Association" />
            <input type="hidden" id="carrier-314" name="Capital Property" />
            <input type="hidden" id="carrier-497" name="Capstone" />
            <input type="hidden" id="carrier-345" name="Chubb" />
            <input type="hidden" id="carrier-315" name="Crawford" />
            <input type="hidden" id="carrier-385" name="Custard Insurance Adjusters" />
            <input type="hidden" id="carrier-317" name="Encompass" />
            <input type="hidden" id="carrier-447" name="Encova Insurance" />
            <input type="hidden" id="carrier-318" name="Erie" value />
            <input type="hidden" id="carrier-320" name="Farmers" value />
            <input type="hidden" id="carrier-359" name="Farmers - FWS" value />
            <input type="hidden" id="carrier-398" name="Florida Property" />
            <input type="hidden" id="carrier-498" name="Foremost" />
            <input type="hidden" id="carrier-355" name="Hanover" />
            <input type="hidden" id="carrier-439" name="Home Owners Choice" />
            <input type="hidden" id="carrier-323" name="Homesite" />
            <input type="hidden" id="carrier-414" name="Horace Mann" />
            <input type="hidden" id="carrier-877" name="IMT Insurance" />
            <input type="hidden" id="carrier-326" name="Kemper" />
            <input type="hidden" id="carrier-422" name="Liberty - Commercial" />
            <input type="hidden" id="carrier-327" name="Liberty Mutual" value />
            <input type="hidden" id="carrier-328" name="Midwest Property" value />
            <input type="hidden" id="carrier-492" name="National General" value />
            <input type="hidden" id="carrier-329" name="Nationwide" value />
            <input type="hidden" id="carrier-879" name="Nationwide Commercial" value />
            <input type="hidden" id="carrier-494" name="New Jersey Manufacturers Insurance" />
            <input type="hidden" id="carrier-332" name="New York Property" />
            <input type="hidden" id="carrier-333" name="North Central Property" />
            <input type="hidden" id="carrier-334" name="Northeast Property" value />
            <input type="hidden" id="carrier-384" name="OTHER CUSTOMER" value />
            <input type="hidden" id="carrier-433" name="QBE" />
            <input type="hidden" id="carrier-748" name="Rimkus" value />
            <input type="hidden" id="carrier-351" name="Ryze" />
            <input type="hidden" id="carrier-335" name="Safeco" value />
            <input type="hidden" id="carrier-338" name="Southeast Property" />
            <input type="hidden" id="carrier-387" name="Southwest Property" />
            <input
              type="hidden"
              id="carrier-337"
              name="State Farm"
              value="37-G187-2M5|^[0-9]{2}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{3}$"
            />
            <input type="hidden" id="carrier-340" name="Tennessee Farm Bureau" />
            <input type="hidden" id="carrier-322" name="The Hartford" />
            <input type="hidden" id="carrier-324" name="Travelers" value />
            <input
              type="hidden"
              id="carrier-411"
              name="United Property &amp; Casualty"
              value="21GA12345678|^[0-9]{2}[a-zA-Z]{2}[0-9]{8}$"
            />
            <input
              type="hidden"
              id="carrier-319"
              name="United Services Automobile Association"
              value="2101GA12345678|^[0-9]{4}[A-Za-z]{2}[0-9]{8}$"
            />
            <input
              type="hidden"
              id="carrier-876"
              name="Universal"
              value="GA21-1234567|^[A-Za-z]{2}[0-9]{2}-[0-9]{7}$"
            />
            <input type="hidden" id="carrier-316" name="Utica" />
            <input type="hidden" id="carrier-395" name="West Central Property" />
            <input type="hidden" id="carrier-495" name="Western Reserve Group" />
          </div>
          <div class="other-company-name" style="display: none;">
            <label
              class="required"
              for="OtherCompanyName"
              aria-required="true"
            >Please enter carrier name</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="OtherCompanyName"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              data-val="true"
              data-val-maxlength="The Please enter carrier name cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              id="OtherCompanyName"
              maxlength="50"
              name="OtherCompanyName"
              placeholder="Type other company name"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label class="required" for="ClaimNumber" aria-required="true">Claim Number</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="ClaimNumber"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              data-val="true"
              data-val-maxlength="The Claim Number cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-required="The Claim Number field is required."
              id="ClaimNumber"
              maxlength="128"
              name="ClaimNumber"
              placeholder="Type claim number (letters, numbers and dashes only)"
              type="text"
              value
              aria-required="true"
            />
            <div id="ClaimFormat-warning" class="hidden" style></div>
          </div>
          <div>
            <label class="required" for="InsuredLastName" aria-required="true">Insured's Last Name</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="InsuredLastName"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              data-val="true"
              data-val-maxlength="The Insured's Last Name cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-required="The Insured's Last Name field is required."
              id="InsuredLastName"
              maxlength="128"
              name="InsuredLastName"
              placeholder="Type insured last name"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label class="required" for="Phone" aria-required="true">Insured's Phone Number</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="Phone"
              data-valmsg-replace="true"
            ></span>
            <input
              class="mask_phone"
              data-val="true"
              data-val-maxlength="The Insured's Phone Number cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-regex="Should be a valid phone number"
              data-val-regex-pattern="^[^_]*$"
              id="Phone"
              name="Phone"
              placeholder="Type phone"
              type="text"
              value
            />
          </div>
        </div>
        <div class="w50">
          <div>
            <label class="required" for="StreetAddress" aria-required="true">Street Address</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="StreetAddress"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              data-val="true"
              data-val-maxlength="The Street Address cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-required="The Street Address field is required."
              id="StreetAddress"
              maxlength="50"
              name="StreetAddress"
              placeholder="Type street address"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label for="Suite">Suite:</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="Suite"
              data-valmsg-replace="true"
            ></span>
            <input
              class
              data-val="true"
              data-val-maxlength="The Suite: cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              id="Suite"
              maxlength="50"
              name="Suite"
              placeholder="Type suite"
              type="text"
              value
            />
          </div>
          <div>
            <label class="required" for="City" aria-required="true">City</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="City"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              data-val="true"
              data-val-maxlength="The City cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-required="The City field is required."
              id="City"
              maxlength="50"
              name="City"
              placeholder="Type city"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label class="required" for="StateID" aria-required="true">State</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="StateID"
              data-valmsg-replace="true"
            ></span>
            <div
              id="StateID"
              class="dd-container"
              tabindex="0"
              autofocus="autofocus"
              style="width: 100%;"
            >
              <div class="dd-select" style="width: 100%; background: rgb(255, 255, 255);">
                <input
                  class="dd-selected-value required"
                  type="hidden"
                  name="StateID"
                  data-val-required="The State field is required."
                  data-val="true"
                  value
                  aria-required="true"
                />
                <a class="dd-selected">
                  <label class="dd-selected-text">Select State</label>
                </a>
                <span class="dd-pointer dd-pointer-down"></span>
              </div>
              <ul class="dd-options dd-click-off-close" style="width: 100%;">
                <li>
                  <a class="dd-option dd-option-selected">
                    <label class="dd-option-text">Select State</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="1" />
                    <label class="dd-option-text">AL</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="2" />
                    <label class="dd-option-text">AK</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="3" />
                    <label class="dd-option-text">AZ</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="4" />
                    <label class="dd-option-text">AR</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="5" />
                    <label class="dd-option-text">CA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="6" />
                    <label class="dd-option-text">CO</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="7" />
                    <label class="dd-option-text">CT</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="8" />
                    <label class="dd-option-text">DE</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="9" />
                    <label class="dd-option-text">DC</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="10" />
                    <label class="dd-option-text">FL</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="11" />
                    <label class="dd-option-text">GA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="12" />
                    <label class="dd-option-text">HI</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="13" />
                    <label class="dd-option-text">ID</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="14" />
                    <label class="dd-option-text">IL</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="15" />
                    <label class="dd-option-text">IN</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="16" />
                    <label class="dd-option-text">IA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="17" />
                    <label class="dd-option-text">KS</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="18" />
                    <label class="dd-option-text">KY</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="19" />
                    <label class="dd-option-text">LA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="20" />
                    <label class="dd-option-text">ME</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="21" />
                    <label class="dd-option-text">MD</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="22" />
                    <label class="dd-option-text">MA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="23" />
                    <label class="dd-option-text">MI</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="24" />
                    <label class="dd-option-text">MN</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="25" />
                    <label class="dd-option-text">MS</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="26" />
                    <label class="dd-option-text">MO</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="27" />
                    <label class="dd-option-text">MT</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="28" />
                    <label class="dd-option-text">NE</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="29" />
                    <label class="dd-option-text">NV</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="30" />
                    <label class="dd-option-text">NH</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="31" />
                    <label class="dd-option-text">NJ</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="32" />
                    <label class="dd-option-text">NM</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="33" />
                    <label class="dd-option-text">NY</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="34" />
                    <label class="dd-option-text">NC</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="35" />
                    <label class="dd-option-text">ND</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="36" />
                    <label class="dd-option-text">OH</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="37" />
                    <label class="dd-option-text">OK</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="38" />
                    <label class="dd-option-text">OR</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="39" />
                    <label class="dd-option-text">PA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="40" />
                    <label class="dd-option-text">RI</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="41" />
                    <label class="dd-option-text">SC</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="42" />
                    <label class="dd-option-text">SD</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="43" />
                    <label class="dd-option-text">TN</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="44" />
                    <label class="dd-option-text">TX</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="45" />
                    <label class="dd-option-text">UT</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="46" />
                    <label class="dd-option-text">VT</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="47" />
                    <label class="dd-option-text">VA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="48" />
                    <label class="dd-option-text">WA</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="49" />
                    <label class="dd-option-text">WV</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="50" />
                    <label class="dd-option-text">WI</label>
                  </a>
                </li>
                <li>
                  <a class="dd-option">
                    <input class="dd-option-value" type="hidden" value="51" />
                    <label class="dd-option-text">WY</label>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <label class="required" for="PostalCode" aria-required="true">Zip</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="PostalCode"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              data-val="true"
              data-val-maxlength="The Zip cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-regex="Invalid Zip"
              data-val-regex-pattern="^\d{5}(-\d{4})?$"
              data-val-required="The Zip field is required."
              id="PostalCode"
              maxlength="50"
              name="PostalCode"
              placeholder="Type zip code"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div id="isAreaCoveredDiv" style="display: none">
            <span class="note" id="isAreaCoveredLabel"></span>
          </div>
        </div>
      </div>
      <div class="form-section" id="serviceTypeConfigSection">
        <div class="w50">
          <div>
            <label
              class="required"
              for="SelectedServiceTypeIds"
              aria-required="true"
            >Service Type(s)</label>
            <div id="loading-service-gif-error" style="display: none; margin-top: 25px;">
              <div style="width: 100%; text-align:center;">
                <span
                  style="font-style: italic; color: #ff1111;"
                >Error retrieving services. Please try again.</span>
              </div>
            </div>
            <span
              class="field-validation-valid error"
              data-valmsg-for="SelectedServiceTypeIds"
              data-valmsg-replace="true"
            ></span>

            <div id="serviceTypesWrapper" style="display: none;">
              <div
                id="ServiceTypeListView"
                data-role="listview"
                class="k-widget k-listview"
                role="listbox"
              ></div>

              <input id="SelectedServiceTypeIds" name="SelectedServiceTypeIds" type="hidden" value />
            </div>
            <div id="loading-service-gif" style="display: none; margin-top: 10px;">
              <div style="width: 100%; text-align:center;">
                <!-- <img src="/Content/img/spin-icon-3.jpg" height="50" width="50" alt="Loading" /> -->
              </div>
              <div style="width: 100%; text-align:center;">
                <span style="font-style: italic;">Loading Service Types</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w50">
          <label class="required" for="CatastrophicEvent" aria-required="true">Catastrophe Event</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="CatastrophicEvent"
            data-valmsg-replace="true"
          ></span>
          <span class="sub-header">Is this claim due to a catastrophe weather event?</span>
          <div class="radio-options horizontal-align">
            <input
              id="claims-form-catastrophicevent-yes"
              name="CatastrophicEvent"
              type="radio"
              value="true"
            />
            <label for="claims-form-catastrophicevent-yes" class="radio-option-label">Yes</label>
            <input
              checked="True"
              id="claims-form-catastrophicevent-no"
              name="CatastrophicEvent"
              type="radio"
              value="false"
            />
            <label for="claims-form-catastrophicevent-no" class="radio-option-label">No</label>
            <input
              id="claims-form-catastrophicevent-unknown"
              name="CatastrophicEvent"
              type="radio"
              value
            />
            <label for="claims-form-catastrophicevent-unknown" class="radio-option-label">Unknown</label>
          </div>
          <label class="required" for="IsReinspect" aria-required="true">Re-Inspect</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="IsReinspect"
            data-valmsg-replace="true"
          ></span>
          <span class="sub-header">Is this claim a re-inspect?</span>
          <div class="radio-options horizontal-align">
            <input
              data-val="true"
              data-val-required="The Re-Inspect field is required."
              id="claims-form-reinspect-yes"
              name="IsReinspect"
              type="radio"
              value="true"
            />
            <label for="claims-form-reinspect-yes" class="radio-option-label">Yes</label>
            <input
              checked="True"
              id="claims-form-reinspect-no"
              name="IsReinspect"
              type="radio"
              value="false"
            />
            <label for="claims-form-reinspect-no" class="radio-option-label">No</label>
          </div>
          <div class="appointment-date-wrapper">
            <label class="required" for="AppointmentDate" aria-required="true">Appointment Date</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="AppointmentDate"
              data-valmsg-replace="true"
            ></span>
            <span class="k-widget k-datepicker k-header required" aria-required="true" style>
              <span class="k-picker-wrap k-state-default">
                <input
                  class="required k-input"
                  data-val="true"
                  data-val-date="The field Appointment Date must be a date."
                  id="AppointmentDate"
                  name="AppointmentDate"
                  placeholder="Choose appointment date"
                  type="text"
                  data-role="datepicker"
                  role="combobox"
                  aria-expanded="false"
                  aria-owns="AppointmentDate_dateview"
                  aria-disabled="false"
                  readonly="readonly"
                  aria-required="true"
                  style="width: 100%;"
                />
                <span
                  unselectable="on"
                  class="k-select"
                  role="button"
                  aria-controls="AppointmentDate_dateview"
                >
                  <span unselectable="on" class="k-icon k-i-calendar">select</span>
                </span>
              </span>
            </span>
          </div>
          <div
            class="today-warning"
            style="display: none"
          >Please contact the office directly at 1-770-569-1669 for same day requests.</div>
          <div class="appointment-date-wrapper">
            <label class="required" for="StartTime" aria-required="true">Start Time</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="StartTime"
              data-valmsg-replace="true"
            ></span>
            <span class="k-widget k-timepicker k-header required" aria-required="true" style>
              <span class="k-picker-wrap k-state-default">
                <input
                  class="required k-input"
                  id="StartTime"
                  name="StartTime"
                  placeholder="Choose start time"
                  type="text"
                  data-role="timepicker"
                  role="combobox"
                  aria-expanded="false"
                  aria-owns="StartTime_timeview"
                  aria-disabled="false"
                  readonly="readonly"
                  aria-required="true"
                  style="width: 100%;"
                />
                <span
                  unselectable="on"
                  class="k-select"
                  role="button"
                  aria-controls="StartTime_timeview"
                >
                  <span unselectable="on" class="k-icon k-i-clock">select</span>
                </span>
              </span>
            </span>
          </div>
          <div class="appointment-date-wrapper">
            <label class="required" for="EndTime" aria-required="true">End Time</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="EndTime"
              data-valmsg-replace="true"
            ></span>
            <span class="k-widget k-timepicker k-header required" aria-required="true" style>
              <span class="k-picker-wrap k-state-default">
                <input
                  class="required k-input"
                  id="EndTime"
                  name="EndTime"
                  placeholder="Choose end time"
                  type="text"
                  data-role="timepicker"
                  role="combobox"
                  aria-expanded="false"
                  aria-owns="EndTime_timeview"
                  aria-disabled="false"
                  readonly="readonly"
                  aria-required="true"
                  style="width: 100%;"
                />
                <span
                  unselectable="on"
                  class="k-select"
                  role="button"
                  aria-controls="EndTime_timeview"
                >
                  <span unselectable="on" class="k-icon k-i-clock">select</span>
                </span>
              </span>
            </span>
          </div>

          <div id="weatherWidget" class="container weatherWidget" style="display: none;">
            <div id="loading-gif" style="display: none;">
              <!-- <img src="/Content/img/loading.gif" alt="Loading" /> -->
              <span>Loading forecast</span>
            </div>
            <div id="loading-error" class="center" style="display: none; ">
              <span>Unable to retrieve weather data</span>
            </div>
            <div class="w65">
              <span class="wSpan" id="weatherCity" style="font-weight: bold;"></span>
              <span class="wSpan" id="weatherForecast"></span>
              <span class="wSpan" id="weatherTemp"></span>
            </div>
            <div class="w35">
              <div id="weatherIcon"></div>
            </div>
          </div>

          <div id="inspectionTypesWrapper" style="display: none;">
            <label class="required" for="InspectionTypes" aria-required="true">Inspection Type</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="InspectionTypes"
              data-valmsg-replace="true"
            ></span>
            <span class="inspectionTypeError error field-validation-error">
              <span>You should select at least one inspection type to save the project.</span>
            </span>
            <div class>
              <span class="sub-header">What type of inspection is this?</span>
              <div class="checkbox-list-item">
                <input
                  data-val="true"
                  data-val-required="The IsSelected field is required."
                  id="InspectionTypes_0__IsSelected"
                  name="InspectionTypes[0].IsSelected"
                  type="checkbox"
                  value="true"
                />
                <input name="InspectionTypes[0].IsSelected" type="hidden" value="false" />
                <label class="checkbox-list-item-label">Wind / Hail</label>
              </div>
              <div class="checkbox-list-item">
                <input
                  data-val="true"
                  data-val-required="The IsSelected field is required."
                  id="InspectionTypes_1__IsSelected"
                  name="InspectionTypes[1].IsSelected"
                  type="checkbox"
                  value="true"
                />
                <input name="InspectionTypes[1].IsSelected" type="hidden" value="false" />
                <label class="checkbox-list-item-label">Winter Peril</label>
              </div>
              <div class="checkbox-list-item">
                <input
                  data-val="true"
                  data-val-required="The IsSelected field is required."
                  id="InspectionTypes_2__IsSelected"
                  name="InspectionTypes[2].IsSelected"
                  type="checkbox"
                  value="true"
                />
                <input name="InspectionTypes[2].IsSelected" type="hidden" value="false" />
                <label class="checkbox-list-item-label">Driving rain / leak detection</label>
              </div>
              <div class="checkbox-list-item">
                <input
                  data-val="true"
                  data-val-required="The IsSelected field is required."
                  id="InspectionTypes_3__IsSelected"
                  name="InspectionTypes[3].IsSelected"
                  type="checkbox"
                  value="true"
                />
                <input name="InspectionTypes[3].IsSelected" type="hidden" value="false" />
                <label class="checkbox-list-item-label">Other</label>
                <input
                  class="otherInspectionInput"
                  id="InspectionTypes_3__OtherDescription"
                  name="InspectionTypes[3].OtherDescription"
                  readonly
                  style="width: 100%;"
                  type="text"
                  value
                />
                <div class id="otherInspectionDescriptionRequired" style="display: none;">
                  <span
                    class="field-validation-error"
                    data-valmsg-for="Other Description"
                    data-valmsg-replace="true"
                  >
                    <span class>The Other Description field is required.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-section">
        <div class="w50">
          <label
            class="block-header"
            for="Adjuster_Contact_Information:"
          >Adjuster Contact Information:</label>
          <div>
            <span class="sub-header">I am an independent adjuster</span>
            <span
              class="field-validation-valid error"
              data-valmsg-for="IsIndependentAdjuster"
              data-valmsg-replace="true"
            ></span>
            <div class="radio-options horizontal-align">
              <input
                data-val="true"
                data-val-required="The I am an independent adjuster field is required."
                id="claims-form-isindepentdentadjuster-yes"
                name="IsIndependentAdjuster"
                type="radio"
                value="True"
              />
              <label for="claims-form-isindepentdentadjuster-yes" class="radio-option-label">Yes</label>
              <input
                checked="checked"
                id="claims-form-isindepentdentadjuster-no"
                name="IsIndependentAdjuster"
                type="radio"
                value="False"
              />
              <label for="claims-form-isindepentdentadjuster-no" class="radio-option-label">No</label>
            </div>
          </div>
          <div>
            <label class="required second-level-label" for="AdjusterName" aria-required="true">Name</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="AdjusterName"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              id="AdjusterName"
              maxlength="128"
              name="AdjusterName"
              placeholder="Type adjuster name"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label
              class="required second-level-label"
              for="AdjusterEmail"
              aria-required="true"
            >Email</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="AdjusterEmail"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required"
              data-val="true"
              data-val-email="The Email field is not a valid e-mail address."
              data-val-maxlength="The Email cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-required="The Email field is required."
              id="AdjusterEmail"
              name="AdjusterEmail"
              placeholder="Type adjuster email"
              type="email"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label
              class="required second-level-label"
              for="AdjusterPhone"
              aria-required="true"
            >Phone</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="AdjusterPhone"
              data-valmsg-replace="true"
            ></span>
            <input
              class="required mask_phone"
              data-val="true"
              data-val-maxlength="The Phone cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-regex="Should be a valid phone number"
              data-val-regex-pattern="^[^_]*$"
              data-val-required="The Phone field is required."
              id="AdjusterPhone"
              name="AdjusterPhone"
              placeholder="Type adjuster phone"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div id="billing-contact-info" class="billing-info" style="display: none;">
            <label
              class="block-header"
              for="Billing_Contact_Information:"
            >Billing Contact Information:</label>
            <div>
              <label
                class="required second-level-label"
                for="BillingContact"
                aria-required="true"
              >Name</label>
              <span
                class="field-validation-valid error"
                data-valmsg-for="BillingContact"
                data-valmsg-replace="true"
              ></span>
              <input
                class="required"
                data-val="true"
                data-val-maxlength="The Name cannot be longer than 100 characters"
                data-val-maxlength-max="100"
                id="BillingContact"
                maxlength="100"
                name="BillingContact"
                placeholder="Type billing contact name"
                type="text"
                value
                aria-required="true"
              />
            </div>
            <div>
              <label
                class="required second-level-label"
                for="BillingEmail"
                aria-required="true"
              >Email</label>
              <span
                class="field-validation-valid error"
                data-valmsg-for="BillingEmail"
                data-valmsg-replace="true"
              ></span>
              <input
                class="required"
                data-val="true"
                data-val-email="The Email field is not a valid e-mail address."
                data-val-maxlength="The Email cannot be longer than 50 characters"
                data-val-maxlength-max="50"
                id="BillingEmail"
                name="BillingEmail"
                placeholder="Type billing contact email"
                type="email"
                value
                aria-required="true"
              />
            </div>
            <div>
              <label
                class="required second-level-label"
                for="BillingPhone"
                aria-required="true"
              >Phone</label>
              <span
                class="field-validation-valid error"
                data-valmsg-for="BillingPhone"
                data-valmsg-replace="true"
              ></span>
              <input
                class="required mask_phone"
                data-val="true"
                data-val-maxlength="The Phone cannot be longer than 50 characters"
                data-val-maxlength-max="50"
                data-val-regex="Should be a valid phone number"
                data-val-regex-pattern="^[^_]*$"
                id="BillingPhone"
                name="BillingPhone"
                placeholder="Type billing contact phone"
                type="text"
                value
                aria-required="true"
              />
            </div>
          </div>
        </div>
        <div class="w50">
          <label for="Notes">Notes</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="Notes"
            data-valmsg-replace="true"
          ></span>
          <textarea
            class
            cols="20"
            data-val="true"
            data-val-maxlength="The Notes cannot be longer than 500 characters"
            data-val-maxlength-max="500"
            id="Notes"
            name="Notes"
            placeholder="Type notes"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div class="additional-claim">
        <input
          data-val="true"
          data-val-required="The Add Additional Claim field is required."
          id="IsAddAdditionalClaim"
          name="IsAddAdditionalClaim"
          type="checkbox"
          value="true"
        />
        <input name="IsAddAdditionalClaim" type="hidden" value="false" />
        <label class="additional-claim-label" for="IsAddAdditionalClaim">Add Additional Claim</label>
      </div>
      <div class="wrapper">
        <button type="submit" class="button" id="edit-submit" name="op">Submit</button>
      </div>
      <div class="message">
        <span class="error"></span>
      </div>
      <!-- end of edit-actions -->
      <input type="hidden" id="hidCompanyId" />
    </form>
  </div>
</template>

