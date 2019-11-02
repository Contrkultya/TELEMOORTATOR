const worksModule = {
    firestorePath: 'works',
    firestoreRefType: 'collection', // or 'doc'
    moduleName: 'worksModule',
    statePropName: 'data',
    namespaced: true, // automatically added
  
    // this object is your store module (will be added as '/myModule')
    // you can also add state/getters/mutations/actions
    state: {},
    getters: {        
        getTasks(state){
        return state.works;
    }},
    mutations: {},
    actions: {},
  }
  
  export default worksModule