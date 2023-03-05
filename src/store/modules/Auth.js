import authApi from '@/api/auth'

const state = {
    isSubmiting:false,
}

const mutations = {
    registerStart(state){
        state.isSubmiting = true;
    },
    registerSuccess(state){
        state.isSubmiting = false;
    },
    registerFail(state){
        state.isSubmiting = false;
    }
}

const actions = {
    register(contex,credintials){
        contex.commit('registerStart');
        return new Promise(resolve => {
            authApi.register(credintials).then(response =>{
                contex.commit('registerSuccess',response.data.user)
                resolve(response.data.user)
            })
                .catch(result=>{
                    contex.commit('registerFail',result.response.data.errors)
                })
        })
    }
}


export default {
    state,
    mutations,
    actions
}