import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB3sx6keKwiQtcRQ2aLGIdU4r98HbMg4No",
    libraries: "places" // This is required if you use the Autocomplete plugin
  }
});
