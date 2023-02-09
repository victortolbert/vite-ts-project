////import { Component, Prop, Vue } from "vue-property-decorator";
////import {
////    Map as KendoMap,
////    MapLayer as KendoMapLayer,
////    MapMarker as KendoMapMarker,
////    MapInstaller as KendoMapInstaller,
////} from '@progress/kendo-map-vue-wrapper';

////Vue.use(KendoMapInstaller);

////@Component({
////    template: "#map-template",
////    components: {
////        KendoMap,
////        KendoMapLayer,
////        KendoMapMarker,
////        KendoMapInstaller
////    }
////})
////export default class MapComponent extends Vue {
////    @Prop()
////    center!: Array<number>;

////    @Prop({ default: [] })
////    markers!: Array<Array<number>>;

////    @Prop({ default: 6 })
////    zoom!: number;

////    googleMapsApiKey: string;
////    // urltemplate: string;

//////    mounted() {
//////        const mapRef = this.$refs?.mapRef as unknown as kendo.dataviz.ui.Map;
//////        const tileHeight = mapRef.layers.tileSize;
//////        const tileWidth = mapRef.layers.tileSize;
//////         this.urltemplate = `https://maps.googleapis.com/maps/api/staticmap?center=#= center #&zoom=#= zoom #&size=${tileHeight}x${tileWidth}&key=${this.googleMapsApiKey}`
//////    }
////}
