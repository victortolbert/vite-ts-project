import { Component, Prop, Watch, Vue } from "vue-property-decorator";
// TODO: Move to own file.
interface IMapMarker {
    marker: google.maps.Marker;
    info: string;
}

interface IMapMarkerData {
    Position: { Latitude: number, Longitude: number };
    Info: string;
}

@Component({
    template: "#google-map-template",
})
export default class GoogleMapComponent extends Vue {
    @Prop()
    apikey!: string;

    @Prop()
    center!: Array<number>;

    @Prop({ default: [] })
    markers!: Array<Array<number>>;

    @Prop({ default: 6 })
    zoom!: number;

    map: google.maps.Map;
    infoWindow: google.maps.InfoWindow;

    mapsApiLoaded = false;

    _markers: Array<google.maps.Marker>;

    constructor() {
        super();
        this.ApiLoadHandler = this.ApiLoadHandler.bind(this);
        this.CreateMap = this.CreateMap.bind(this);
        this.CreateMarker = this.CreateMarker.bind(this);
        this.MapMarkerClickHandler = this.MapMarkerClickHandler.bind(this)
    }

    mounted() {
        this.CreateMap();
    }

    CreateMap() {
        if (this.markers.length > 0) {
            const mapElement = document.getElementById('map');
            if (this.mapsApiLoaded
                && mapElement
                && this.$props.apikey) {
                this.map = new google.maps.Map(mapElement, {
                    center: { lat: this.$props.center[0], lng: this.$props.center[1] },
                    zoom: this.$props.zoom,
                });
                this._markers = this.$props.markers.map(this.CreateMarker);
            }
        }

        const mapElement = document.getElementById('map');
        if (this.mapsApiLoaded
            && mapElement
            && this.$props.apikey) {
            this.map = this.map ?? new google.maps.Map(mapElement, {
                center: { lat: this.$props.center[0], lng: this.$props.center[1] },
                zoom: this.$props.zoom,
            });
            this.SetMarkers();
        }
    }

    @Watch("markers")
    SetMarkers() {
        if (this._markers?.length) {
            for (let marker of this._markers) {
                marker.setMap(null);
            }
        }
        this._markers = [];
        if (this.markers.length > 0) {
            this._markers = this.$props.markers.map(this.CreateMarker);
        }
        this.infoWindow && this.infoWindow.close();
    }

    ApiLoadHandler() {
        this.mapsApiLoaded = true;
        this.CreateMap();
    }

    created() {
        let script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apikey}`;
        document.body.appendChild(script);
        script.onload = this.ApiLoadHandler;
    }

    CreateMarker(markerData: IMapMarkerData): google.maps.Marker {
        const position = { lat: markerData.Position.Latitude, lng: markerData.Position.Longitude };
        const marker = new google.maps.Marker({ position, map: this.map });
        google.maps.event.addListener(marker, "click", this.MapMarkerClickHandler);
        return marker;
    }

    MapMarkerClickHandler(event: google.maps.IconMouseEvent) {
        this.infoWindow && this.infoWindow.close();
        this.infoWindow = new google.maps.InfoWindow({
            content: this.$props.markers.find((marker: IMapMarkerData) => marker.Position.Latitude === event?.latLng?.lat() && marker.Position.Longitude === event?.latLng?.lng())?.Info,
            position: event?.latLng,
        });
        this.infoWindow.open(this.map);
    }
}
