import { createStore } from 'vuex'

export default createStore({
  state: {
    rack: {
      devices: [
        { 
          id: 0,
          modules: [
            {
              id: 0,
              type: "rack",
              ip: "192.168.1.1",
              state: "work",
              clicked: ''
            },
            {
              id: 1,
              type: "rack",
              ip: "192.168.1.2",
              state: "work",
              clicked: ''
            },
            {
              id: 2,
              type: "rack",
              ip: "192.168.1.3",
              state: "error",
              clicked: ''
            },
            {
              id: 3,
              type: "rack",
              ip: "192.168.1.4",
              state: "standby",
              clicked: ''
            }
          ]
        },
        { 
          id: 1,
          modules: [
            {
              id: 0,
              type: "rack",
              ip: "192.168.2.1",
              state: "work",
              clicked: ''
            },
            {
              id: 1,
              type: "rack",
              ip: "192.168.2.2",
              state: "work",
              clicked: ''
            },
            {
              id: 2,
              type: "rack",
              ip: "192.168.2.3",
              state: "error",
              clicked: ''
            },
            {
              id: 3,
              type: "rack",
              ip: "192.168.2.4",
              state: "standby",
              clicked: ''
            }
          ]
        },
        { 
          id: 2,
          modules: [
            {
              id: 0,
              type: "rack",
              ip: "192.168.3.1",
              state: "work",
              clicked: ''
            },
            {
              id: 1,
              type: "rack",
              ip: "192.168.3.2",
              state: "work",
              clicked: ''
            },
            {
              id: 2,
              type: "rack",
              ip: "192.168.3.3",
              state: "error",
              clicked: ''
            },
            {
              id: 3,
              type: "rack",
              ip: "192.168.3.4",
              state: "standby",
              clicked: ''
            }
          ]
        },
        { 
          id: 3,
          modules: [
            {
              id: 0,
              type: "rack",
              ip: "192.168.4.1",
              state: "work",
              clicked: ''
            },
            {
              id: 1,
              type: "rack",
              ip: "192.168.4.2",
              state: "work",
              clicked: ''
            },
            {
              id: 2,
              type: "rack",
              ip: "192.168.4.3",
              state: "error",
              clicked: ''
            },
            {
              id: 3,
              type: "rack",
              ip: "192.168.4.4",
              state: "standby",
              clicked: ''
            }
          ]
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
