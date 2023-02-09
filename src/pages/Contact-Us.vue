<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <label>Select a category</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" class="field" />

      <label>Description</label>
      <input v-model="event.description" type="text" placeholder="Description" class="field" />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" class="field" />

      <h3>Are pets allowed?</h3>
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets" />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input type="checkbox" v-model="event.extras.catering" class="field" />
        <label>Catering</label>
      </div>

      <div>
        <input type="checkbox" v-model="event.extras.music" class="field" />
        <label>Live music</label>
      </div>

      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>

  <div>
    <form id="ContactUsForm_197_505_0" class="form">
      <div>
        <label>Type of inquiry&nbsp;*</label>
        <div id="FormField_TypeOfInquiry_197_505_0" class="dd-container">
          <div class="dd-select">
            <input class="dd-selected-value" type="hidden" value="0" />
            <a class="dd-selected">
              <label class="dd-selected-text">Deployment Request</label>
            </a>
            <span class="dd-pointer dd-pointer-down dd-pointer-up"></span>
          </div>
          <ul class="dd-options dd-click-off-close" style="width: 100%; display: block;">
            <li>
              <a class="dd-option dd-option-selected">
                <input class="dd-option-value" type="hidden" value="0" />
                <label class="dd-option-text">Deployment Request</label>
              </a>
            </li>
            <li>
              <a class="dd-option">
                <input class="dd-option-value" type="hidden" value="1" />
                <label class="dd-option-text">Employment Opportunity</label>
              </a>
            </li>
            <li>
              <a class="dd-option">
                <input class="dd-option-value" type="hidden" value="2" />
                <label class="dd-option-text">Testimonial</label>
              </a>
            </li>
            <li>
              <a class="dd-option">
                <input class="dd-option-value" type="hidden" value="3" />
                <label class="dd-option-text">Customer Suggestions &amp; Feedback</label>
              </a>
            </li>
            <li>
              <a class="dd-option">
                <input class="dd-option-value" type="hidden" value="4" />
                <label class="dd-option-text">Service Offering</label>
              </a>
            </li>
            <li>
              <a class="dd-option">
                <input class="dd-option-value" type="hidden" value="5" />
                <label class="dd-option-text">Other</label>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="w50">
          <label>Your Name&nbsp;*</label>
          <label
            id="FormField_Name_197_505_0_ErrorMsg"
            class="error"
            style="display:none;"
          >Please enter a valid name</label>
          <input
            id="FormField_Name_197_505_0"
            placeholder="Type your message here"
            type="text"
            name="name"
          />
        </div>
        <div class="w50">
          <label>Your Email&nbsp;*</label>
          <label
            id="FormField_Email_197_505_0_ErrorMsg"
            class="error"
            style="display:none;"
          >Please enter a valid email</label>
          <input
            id="FormField_Email_197_505_0"
            placeholder="Type your email address"
            type="email"
            name="email"
          />
        </div>
      </div>
      <div>
        <label>Message&nbsp;*</label>
        <label
          id="FormField_Message_197_505_0_ErrorMsg"
          class="error"
          style="display:none;"
        >Please enter a valid message</label>
        <textarea id="FormField_Message_197_505_0" placeholder="Type your message here"></textarea>
      </div>
      <button id="FormSubmitButton_197_505_0" class="button submit">Send Message</button>
      <div class="message">
        <span
          id="ThankYouMessage_197_505_0"
          style="display:none;"
        >We have received your message and will respond as soon as possible.</span>
        <span id="BusyMessage_197_505_0" class="error" style="display:none;">Our Server is too busy.</span>
      </div>
      <input
        type="hidden"
        id="cu-tk_197_505_0"
        value="qADVANAA0wDLANAAywDTAM8AxwDJAN8AwwDOANAAzgDOANMA0ADPANMAzgDKAOAA0ADLAMYAzQDKAMYAzADOAA=="
      />
    </form>
  </div>
</template>

<script>
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
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  }
}
</script>
