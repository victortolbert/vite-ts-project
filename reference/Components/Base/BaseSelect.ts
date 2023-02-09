import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `<div class="field-group" style="min-width: 120px">
        <label
            for="country"
            class="font-medium text-sm text-gray-700 block whitespace-nowrap"
        >Service Area</label>

        <select
            id="service-area"
            name="ServiceArea"
            class="bg-white border rounded-md border-gray-300 shadow-sm mt-1 w-full py-2 px-3 block sm:text-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500"
        >
            <option>Select Service Area...</option>
            <option>Off Rotation</option>
            <option>Seattle</option>
            <option>Baton Rouge</option>
            <option>Birmingham</option>
            <option>Fayetteville</option>
            <option>Fort Smith</option>
            <option>Hattiesburg</option>
            <option>Huntsville</option>
            <option>Jackson</option>
            <option>Little Rock</option>
            <option>Mobile</option>
            <option>Monroe</option>
            <option>Montgomery</option>
            <option>New Orleans</option>
            <option>Shreveport</option>
            <option>Ft. Lauderdale</option>
            <option>Jacksonville</option>
            <option>Melbourne</option>
            <option>Miami</option>
            <option>Naples</option>
            <option>Orlando</option>
            <option>Pensacola</option>
            <option>Tallahassee</option>
            <option>Tampa</option>
            <option>Atlanta</option>
            <option>Augusta</option>
            <option>Central GA</option>
            <option>Columbus</option>
            <option>Savannah</option>
            <option>Test</option>
            <option>Valdosta</option>
            <option>Billings</option>
            <option>Cheyenne</option>
            <option>Colorado Springs</option>
            <option>Denver</option>
            <option>Do Not Use</option>
            <option>Fort Collins</option>
            <option>Los Angeles</option>
            <option>Sacramento</option>
            <option>Amarillo</option>
            <option>Austin</option>
            <option>Dallas/Ft.Worth</option>
            <option>El Paso</option>
            <option>Houston</option>
            <option>Lubbock</option>
            <option>Midland</option>
            <option>OKC</option>
            <option>Phoenix</option>
            <option>Rio Grande</option>
            <option>San Antonio</option>
            <option>Tulsa</option>
            <option>Tyler/Longview</option>
            <option>Wichita Falls</option>
        </select>
  </div>`,
})
export default class BaseSelect extends Vue { }
