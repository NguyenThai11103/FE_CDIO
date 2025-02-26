import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/Admin/index.vue'
import Client from './Layout/Wrapper/Client/index.vue'
import Blank from './Layout/Wrapper/Blank/index.vue'
import QuanAn from './Layout/Wrapper/QuanAn/index.vue'
import Shipper from './layout/wrapper/Shipper/index.vue'
import Auth from './layout/wrapper/Auth/index.vue'
import Toaster from "@meforma/vue-toaster";
const app = createApp(App)

app.use(router)
app.use(Toaster, {
    position: "top-right"
});
app.component("default-layout", Default);
app.component("client-layout", Client);
app.component("quan_an-layout", QuanAn);
app.component("blank-layout", Blank);
app.component("shipper-layout", Shipper);
app.component("auth-layout", Auth);
app.mount("#app")