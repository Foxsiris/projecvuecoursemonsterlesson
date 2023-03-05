import { createApp } from 'vue'
import { createStore } from 'vuex'
import Auth from "@/store/modules/Auth";

// Create a new store instance.
export default createStore({
    state:{

    },
    mutations: {

    },
    actions: {},
    modules: {
        auth: Auth,
    }
})

