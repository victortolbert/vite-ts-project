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

    <div>
      <div id="PaymentForm_271_579_0" class="form payment-form">
        <div class="form-section">
          <div>
            <div class="w50">
              <div class="form-field">
                <label>Adjuster Name&nbsp;*</label>
                <label
                  id="FormField_AdjusterName_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Adjuster name is required</label>
                <input
                  id="FormField_AdjusterName_271_579_0"
                  placeholder="Type adjuster name"
                  type="text"
                  name="adjusterName"
                />
              </div>
              <div class="form-field">
                <label>Company Name</label>
                <label
                  id="FormField_CompanyName_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                ></label>
                <input
                  id="FormField_CompanyName_271_579_0"
                  placeholder="Type Company Name"
                  type="text"
                  name="companyName"
                />
              </div>
              <div class="form-field">
                <label>Email Address&nbsp;*</label>
                <label
                  id="FormField_Email_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Please enter a valid email</label>
                <input
                  id="FormField_Email_271_579_0"
                  placeholder="Type email address"
                  type="text"
                  name="email"
                />
              </div>
              <div class="form-field">
                <label>Phone Number&nbsp;*</label>
                <label
                  id="FormField_Phone_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Please enter a valid phone number</label>
                <input
                  id="FormField_Phone_271_579_0"
                  placeholder="Type phone number"
                  type="text"
                  name="phoneNumber"
                  data-mask="(000) 000-0000"
                  autocomplete="off"
                  maxlength="14"
                />
              </div>
              <div class="form-field">
                <label>Invoice Number&nbsp;*</label>
                <label
                  id="FormField_Invoice_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Invoice number is required</label>
                <input
                  id="FormField_Invoice_271_579_0"
                  placeholder="Type invoice number"
                  type="text"
                  name="invoiceNumber"
                />
                <div
                  class="form-field-caption"
                >* if paying multiple invoices, separate numbers with comma(s)</div>
              </div>
              <div class="form-field">
                <label>Claim Number&nbsp;*</label>
                <label
                  id="FormField_Claim_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Claim number is required</label>
                <input
                  id="FormField_Claim_271_579_0"
                  placeholder="Type Claim Number"
                  type="text"
                  name="claimNumber"
                />
                <div
                  class="form-field-caption"
                >* if paying multiple claims, separate numbers with comma(s)</div>
              </div>
            </div>
            <div class="w50">
              <div class="form-field">
                <label>Cardholder Name&nbsp;*</label>
                <label
                  id="FormField_BillingName_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Cardholder name is required</label>
                <input
                  id="FormField_BillingName_271_579_0"
                  placeholder="Type cardholder name"
                  type="text"
                  name="billingName"
                />
              </div>
              <div class="form-field">
                <label>Cardholder Address Line 1&nbsp;*</label>
                <label
                  id="FormField_BillingAddress1_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Cardholder address is required</label>
                <input
                  id="FormField_BillingAddress1_271_579_0"
                  placeholder="Type cardholder address line 1"
                  type="text"
                  name="billingAddress1"
                />
              </div>
              <div class="form-field">
                <label>Cardholder Address Line 2</label>
                <label
                  id="FormField_BillingAddress2_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                ></label>
                <input
                  id="FormField_BillingAddress2_271_579_0"
                  placeholder="Type cardholder address line 2"
                  type="text"
                  name="billingAddress2"
                />
              </div>
              <div class="form-field">
                <label>Cardholder City&nbsp;*</label>
                <label
                  id="FormField_BillingCity_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Cardholder city is required</label>
                <input
                  id="FormField_BillingCity_271_579_0"
                  placeholder="Type cardholder city"
                  type="text"
                  name="billingCity"
                />
              </div>
              <div class="form-field">
                <label>Cardholder State&nbsp;*</label>
                <label
                  id="FormField_BillingState_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Cardholder state is required</label>
                <select
                  id="FormField_BillingState_271_579_0"
                  name="billingState"
                  class="no-ddslick select2-hidden-accessible"
                  style="width: 100%;"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option value="-1">Select cardholder state</option>
                  <option value="AL">AL - ALABAMA</option>
                  <option value="AZ">AZ - ARIZONA</option>
                  <option value="AR">AR - ARKANSAS</option>
                  <option value="CA">CA - CALIFORNIA</option>
                  <option value="CO">CO - COLORADO</option>
                  <option value="CT">CT - CONNECTICUT</option>
                  <option value="DE">DE - DELAWARE</option>
                  <option value="DC">DC - DISTRICT OF COLUMBIA</option>
                  <option value="FL">FL - FLORIDA</option>
                  <option value="GA">GA - GEORGIA</option>
                  <option value="ID">ID - IDAHO</option>
                  <option value="IL">IL - ILLINOIS</option>
                  <option value="IN">IN - INDIANA</option>
                  <option value="IA">IA - IOWA</option>
                  <option value="KS">KS - KANSAS</option>
                  <option value="KY">KY - KENTUCKY</option>
                  <option value="LA">LA - LOUISIANA</option>
                  <option value="ME">ME - MAINE</option>
                  <option value="MD">MD - MARYLAND</option>
                  <option value="MA">MA - MASSACHUSETTS</option>
                  <option value="MI">MI - MICHIGAN</option>
                  <option value="MN">MN - MINNESOTA</option>
                  <option value="MS">MS - MISSISSIPPI</option>
                  <option value="MO">MO - MISSOURI</option>
                  <option value="MT">MT - MONTANA</option>
                  <option value="NE">NE - NEBRASKA</option>
                  <option value="NV">NV - NEVADA</option>
                  <option value="NH">NH - NEW HAMPSHIRE</option>
                  <option value="NJ">NJ - NEW JERSEY</option>
                  <option value="NM">NM - NEW MEXICO</option>
                  <option value="NY">NY - NEW YORK</option>
                  <option value="NC">NC - NORTH CAROLINA</option>
                  <option value="ND">ND - NORTH DAKOTA</option>
                  <option value="OH">OH - OHIO</option>
                  <option value="OK">OK - OKLAHOMA</option>
                  <option value="OR">OR - OREGON</option>
                  <option value="PA">PA - PENNSYLVANIA</option>
                  <option value="RI">RI - RHODE ISLAND</option>
                  <option value="SC">SC - SOUTH CAROLINA</option>
                  <option value="SD">SD - SOUTH DAKOTA</option>
                  <option value="TN">TN - TENNESSEE</option>
                  <option value="TX">TX - TEXAS</option>
                  <option value="UT">UT - UTAH</option>
                  <option value="VT">VT - VERMONT</option>
                  <option value="VA">VA - VIRGINIA</option>
                  <option value="WA">WA - WASHINGTON</option>
                  <option value="WV">WV - WEST VIRGINIA</option>
                  <option value="WI">WI - WISCONSIN</option>
                  <option value="WY">WY - WYOMING</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  style="width: 100%;"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-labelledby="select2-FormField_BillingState_271_579_0-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-FormField_BillingState_271_579_0-container"
                        title="Select cardholder state"
                      >Select cardholder state</span>
                      <span class="select2-selection__arrow" role="presentation">
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div class="form-field">
                <label>Cardholder Zip&nbsp;*</label>
                <label
                  id="FormField_BillingZip_271_579_0_ErrorMsg"
                  class="error"
                  style="display:none;"
                >Please enter a valid zip code</label>
                <input
                  id="FormField_BillingZip_271_579_0"
                  placeholder="Type cardholder zip"
                  type="text"
                  name="billingZip"
                  data-mask="00000"
                  autocomplete="off"
                  maxlength="5"
                />
              </div>
            </div>
          </div>
          <div>
            <label>Notes / Comments</label>
            <label id="FormField_Message_271_579_0_ErrorMsg" class="error" style="display:none;"></label>
            <textarea id="FormField_Message_271_579_0" placeholder="Type comments" name="comments"></textarea>
          </div>
        </div>

        <div class="form-section">
          <div class="w50">
            <div class="form-field">
              <label>Card Number&nbsp;*</label>
              <label
                id="FormField_CardNumber_271_579_0_ErrorMsg"
                class="error"
                style="display:none;"
              >Please enter a valid card number</label>
              <input
                id="FormField_CardNumber_271_579_0"
                placeholder="Type card number"
                type="text"
                name="cardNumber"
                data-mask="0000000000000009999"
                autocomplete="off"
                maxlength="19"
              />
            </div>
            <div class="form-field card-type-preview mobile">
              <label>Card Type</label>
              <div
                id="dnn_ctr579_ViewItem_CardTypePreviewMobile"
                class="type-container"
                style="background-image: url('../Portals/_default/Skins/Bfm/images/cc/visa-mastercard-amex-discover.png');"
                data-valid-cards="visa-mastercard-amex-discover"
              >
                <div></div>
              </div>
            </div>
            <div class="form-field">
              <div class="w50 small">
                <label>Expiration Month&nbsp;*</label>
                <label
                  id="FormField_ExpirationMonth_271_579_0_ErrorMsg"
                  class="error bottom"
                  style="display:none;"
                >Expiration month is required</label>
                <div
                  id="FormField_ExpirationMonth_271_579_0"
                  class="dd-container"
                  style="width: 100%;"
                >
                  <div class="dd-select" style="width: 100%; background: rgb(255, 255, 255);">
                    <input
                      class="dd-selected-value"
                      type="hidden"
                      name="expirationMonth"
                      value="-1"
                    />
                    <a class="dd-selected">
                      <label class="dd-selected-text">Expiration Month</label>
                    </a>
                    <span class="dd-pointer dd-pointer-down"></span>
                  </div>
                  <ul class="dd-options dd-click-off-close" style="width: 100%; display: none;">
                    <li>
                      <a class="dd-option dd-option-selected">
                        <input class="dd-option-value" type="hidden" value="-1" />
                        <label class="dd-option-text">Expiration Month</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="01" />
                        <label class="dd-option-text">01 - January</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="02" />
                        <label class="dd-option-text">02 - February</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="03" />
                        <label class="dd-option-text">03 - March</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="04" />
                        <label class="dd-option-text">04 - April</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="05" />
                        <label class="dd-option-text">05 - May</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="06" />
                        <label class="dd-option-text">06 - June</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="07" />
                        <label class="dd-option-text">07 - July</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="08" />
                        <label class="dd-option-text">08 - August</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="09" />
                        <label class="dd-option-text">09 - September</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="10" />
                        <label class="dd-option-text">10 - October</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="11" />
                        <label class="dd-option-text">11 - November</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="12" />
                        <label class="dd-option-text">12 - December</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w50 small">
                <label>Expiration Year&nbsp;*</label>
                <label
                  id="FormField_ExpirationYear_271_579_0_ErrorMsg"
                  class="error bottom"
                  style="display:none;"
                >Expiration year is required</label>
                <div
                  id="FormField_ExpirationYear_271_579_0"
                  class="dd-container"
                  style="width: 100%;"
                >
                  <div class="dd-select" style="width: 100%; background: rgb(255, 255, 255);">
                    <input class="dd-selected-value" type="hidden" name="expirationYear" value="-1" />
                    <a class="dd-selected">
                      <label class="dd-selected-text">Expiration Year</label>
                    </a>
                    <span class="dd-pointer dd-pointer-down"></span>
                  </div>
                  <ul class="dd-options dd-click-off-close" style="width: 100%; display: none;">
                    <li>
                      <a class="dd-option dd-option-selected">
                        <input class="dd-option-value" type="hidden" value="-1" />
                        <label class="dd-option-text">Expiration Year</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="22" />
                        <label class="dd-option-text">2022</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="23" />
                        <label class="dd-option-text">2023</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="24" />
                        <label class="dd-option-text">2024</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="25" />
                        <label class="dd-option-text">2025</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="26" />
                        <label class="dd-option-text">2026</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="27" />
                        <label class="dd-option-text">2027</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="28" />
                        <label class="dd-option-text">2028</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="29" />
                        <label class="dd-option-text">2029</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="30" />
                        <label class="dd-option-text">2030</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="31" />
                        <label class="dd-option-text">2031</label>
                      </a>
                    </li>
                    <li>
                      <a class="dd-option">
                        <input class="dd-option-value" type="hidden" value="32" />
                        <label class="dd-option-text">2032</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="form-field">
              <label>
                <a href="#" class="show-cv-helper" id="show-cv-helper">CVC / CVV2 / CID&nbsp;*</a>
              </label>
              <label
                id="FormField_CV_271_579_0_ErrorMsg"
                class="error"
                style="display:none;"
              >Please enter a valid CVC</label>
              <input
                id="FormField_CV_271_579_0"
                placeholder="Type CVC"
                type="text"
                name="cv"
                data-mask="0009"
                autocomplete="off"
                maxlength="4"
              />
            </div>
          </div>
          <div class="w50">
            <div class="form-field card-type-preview desktop">
              <label>Card Type</label>
              <div
                id="dnn_ctr579_ViewItem_CardTypePreviewDesktop"
                class="type-container"
                style="background-image: url('../Portals/_default/Skins/Bfm/images/cc/visa-mastercard-amex-discover.png');"
                data-valid-cards="visa-mastercard-amex-discover"
              >
                <div></div>
              </div>
            </div>
            <div class="form-field">
              <label>Payment Amount&nbsp;*</label>
              <label
                id="FormField_Amount_271_579_0_ErrorMsg"
                class="error"
                style="display:none;"
              >Payment amount is required</label>
              <input
                id="FormField_Amount_271_579_0"
                placeholder="Type payment amount"
                type="text"
                name="paymentAmount"
              />
            </div>
          </div>
        </div>

        <div class="mobile-table">
          <table align="center" width="100%">
            <tbody>
              <tr>
                <td align="center">
                  <input type="checkbox" id="terms_271_579_0" /> I accept the
                  <a href="Terms.html" target="_blank">
                    <u>Terms and Conditions</u>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <button
                    id="FormSubmitButton_271_579_0"
                    class="button submit"
                    data-label="Submit"
                    disabled
                  >Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- button id="FormSubmitButton_271_579_0" class="button submit" data-label="Submit">Submit</button>-->
        <div class="message"></div>
        <input
          type="hidden"
          id="cu-tk_271_579_0"
          value="qADVANAA0wDLAMkAxwDTAM4AyQDPAN8AwwDOANAAzgDOANMA0ADPANMAzgDKAOAA0ADLAMYAzADQAMYAywDOAA=="
        />
      </div>
    </div>
  </div>
</template>

