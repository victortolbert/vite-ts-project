import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  template: `<div class="mt-4 field-group sm:mt-0">
        <label class="font-medium text-sm text-gray-700 block">Service Date</label>
        <input
            type="date"
            class="border rounded-md border-gray-300 shadow-sm mt-1 w-full py-2 px-3 block form-control datePicker sm:text-sm sm:w-auto focus:outline-none focus:border-gray-900 focus:ring-gray-900"
            style="width: 250px"
        />
    </div>`,
})
export default class BaseInput extends Vue { }
