import Appp from "./Appp.js";
import AppHeader from "./components/AppHeader.js";
import AppNav from "./components/AppNav.js";
import AppView from "./components/AppView.js";
import BookComponent from "./components/BookComponent.js";


const app = Vue.createApp({});
app.component("Appp", Appp);
app.component("AppHeader", AppHeader);
app.component("AppNav", AppNav);
app.component("AppView", AppView);
app.component("BookComponent", BookComponent);
app.mount("#appp");