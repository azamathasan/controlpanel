<template>
<div class="home">
    <h1>ControlPanel component</h1>
    <hr>
    <div class="container control">
        <div class="dashboard">
                <div class="rack">
                    <div v-for="(device) in rack.devices" :key="device.id" class="device">
                        <Modules 
                            v-for="module in device.modules" 
                            :moduleId="module.id" 
                            :deviceId="device.id" 
                            :key="module.id" 
                            :state="module.state"
                            :clicked="clicked[device.id][module.id]"
                            @moduleClick="moduleClickMethod"
                        ></Modules>
                        <!-- <Modules 
                            v-for="module in device.modules" 
                            :moduleId="module.id" 
                            :deviceId="device.id" 
                            :key="module.id" 
                            :state="module.state"
                            :clicked="this.clicked[device.id][module.id]"
                            :clickedId="this.clickedId"
                            @moduleClick="moduleClickMethod"
                        ></Modules> -->
                        <!-- <Modules 
                            v-for="module in device.modules" 
                            :moduleId="module.id" 
                            :deviceId="device.id" 
                            :key="module.id" 
                            :state="module.state"
                            :clicked="this.clicked[device.id][module.id]"
                            @moduleClick="moduleClickMethod"
                        ></Modules> -->
                        <!-- <Modules 
                            v-for="module in device.modules" 
                            :moduleId="module.id" 
                            :deviceId="device.id" 
                            :key="module.id" 
                            :state="module.state"
                            :clicked="module.clicked"
                            @moduleClick="moduleClickMethod"
                        ></Modules> -->
                        <!-- <div v-for="module in device.modules" :key="module.id" :class="'module module--'+module.state">
                            <div class="module__top">
                                <div class="module__led"></div>
                                <div class="module__led"></div>
                                <div class="module__led"></div>
                                <div class="module__led"></div>
                                <div class="module__led"></div>
                                <div class="module__led"></div>
                            </div>
                            <div class="module__bottom">
                                <div class="module__connector"></div>
                                <div class="module__connector"></div>
                                <div class="module__connector"></div>
                                <div class="module__connector"></div>
                                <div class="module__connector"></div>
                                <div class="module__connector"></div>
                            </div>
                        </div> -->
                    </div>
                </div>
        </div>
        <div class="info">
                <div class="info-top-panel">
                    <div class="info-top-panel__button"></div>
                    <div class="info-top-panel__button"></div>
                    <div class="info-top-panel__button"></div>
                </div>

                <Params 
                    v-if="showParams"
                    :clicked="this.clicked"
                    :clickedId="this.clickedId"
                    @toggleChange="changeParamsMethod"
                ></Params>
                <!-- <Params 
                    v-if="showParams"
                    :clicked="this.clicked"
                    :clickedId="this.clickedId"
                    @toggleChange="changeParamsMethod"
                ></Params> -->
                <!-- <Params 
                    v-if="showParams"
                    :clickedModule="this.clickedModule"
                    @changeParams="changeParamsMethod"
                ></Params> -->

                <!-- <div class="info-params">
                    <div class="info-params__param">
                        <div class="info-params__marker"></div>
                        <div class="info-params__label">Type: switch</div>
                    </div>
                    <div class="info-params__param">
                        <div class="info-params__marker"></div>
                        <div class="info-params__label">IP: 192.168.1.1</div>
                    </div>
                    <div class="info-params__param">
                        <div class="info-params__marker"></div>
                        <div class="info-params__label">Status: on</div>
                    </div>
                    <div class="info-params-toggle custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="info-params-toggle__label custom-control-label" for="customSwitch1">Toggle this switch element</label>
                    </div>
                </div> -->

                <!-- <div class="info-params">
                    <div class="info-params__param">
                        <div class="info-params__marker"></div>
                        <div class="info-params__label">Type: switch</div>
                    </div>
                    <div class="info-params__param">
                        <div class="info-params__marker"></div>
                        <div class="info-params__label">IP: 192.168.1.1</div>
                    </div>
                    <div class="info-params__param">
                        <div class="info-params__marker"></div>
                        <div class="info-params__label">Status: on</div>
                    </div>
                    <div class="info-params-toggle custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="info-params-toggle__label custom-control-label" for="customSwitch1">Toggle this switch element</label>
                    </div>
                </div> -->
                <div class="info-controls">
                    <div class="info-controls__control"></div>
                    <!-- <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
                      </div>
                      <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
                        <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
                      </div> -->
                </div>
            </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

import Modules from './Module.vue';
import Params from './Params.vue';

export default {
//   name: 'ControlPanel',
  data() {
      return {
          name: 'ControlPanel',
          params: {
                showParams: false,
                // clickedModule: {state, moduleId, deviceId}
            },
          clicked: [],
          clickedId: [],
        //   methods: moduleClickMethod
      }
  },
  props: {
    //   params: ['showParams'=false,'clickedModule']
    // msg: String
  },
  components: {
      Modules, Params
  },
  beforeMount(){
      let devices=this.rack.devices;
      let clicked=[];
    devices.forEach(function(device){
        let modules=device.modules;
        clicked[device.id]=[];
        modules.forEach(function(module){
            clicked[device.id][module.id]='';
        });
    });
    // this.clicked=clicked;
    this.clicked=this.clicked.concat(clicked);
    // this.clicked[null]=[];
    // this.clicked[null][null]=null;
    // console.log('******this.clicked[null][null]*****: '+this.clicked[null][null]);
  },
  mounted(){
      console.log('rack: '+this.rack);
  },
  computed: {
      ...mapState({
          rack: state => state.rack,
    // ...
  }),
  showParams: function() {
      return this.params.showParams;
  },
  },
  methods: {
      moduleClickMethod (event){
          console.log('moduleClick event: '+event);
          console.log('this.clicked: '+this.clicked);
        if((this.clickedId).length)
            {
                this.clicked[this.clickedId[0]][this.clickedId[1]]='';
                // this.rack.devices[this.clicked[0]].modules[this.clicked[1]].clicked='';
                // this.rack.devices[this.clicked[0]].modules[this.clicked[1]].clicked='';
                // this.slicked[event[0]][event[1]]=clicked
            }
        // this.rack.devices[event[0]].modules[event[1]].clicked='clicked';
        this.clicked[event[0]][event[1]]='clicked';
        this.clickedId[0]=event[0];
        this.clickedId[1]=event[1];
        // this.clicked=event;
        this.params.showParams=true;
      },
      changeParamsMethod (event){
          console.log('changeParamsMethod event: '+event);
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

/* body, .home {
    background-color: #29303A;
} */

h1 {
    /* color: white; */
    color: #58647E;
    text-decoration: underline #E12768;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* ___VARS____ */
$standby_color: #626D81;
$work_color: #0092FF;
$error_color: #E12768;
/* ___END VARS___ */

/* body {
    background-color: #29303A;
} */

.container.control {
    display: flex;
    flex-direction: row;
    min-height: 480px;
    // padding: 0 10%;
    // padding: 0;
}


/*********__LEFT PANEL (INFO)__*********/
.dashboard {
    width: 100%;
    min-width: 518px;
    height: 100%;
    padding: 25px;

    // flex-shrink: 1;
}

.rack {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 2px solid #E12768;
    padding: 15px 5px;
}

/*********__DEVICE__*********/
.device {
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    height: 100%;
    background-color: #3E4756;
    /* padding: 5% 5%; */
    /* margin: 5%; */
    margin: 10px 20px;
}

/*********__MODULE__*********/
/* .module {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
} */

.module{
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 100%; */
    /* height: 80px; */
    margin: 2%;
    /* border-width: 3px; */
    outline-width: 1px;
    outline-style: solid;
    padding: 5px;
    cursor: pointer;
}
.module.clicked{
    outline-width: 4px;
    /* opacity: 0.5; */
}
.module:hover{
    outline-width: 4px;
    opacity: 0.5;
}

.module__top, .module__bottom {
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    width: auto;
    justify-content: space-around;
    background-color: #3E4756;
}

.module__led {
    width: 100%;
    /* width: 20px; */
    // margin: 2% 0;
    /* height: 25%; */
    height: 3px;
    margin: 3px 2px 5px 2px;
    background-color: #3E4756;



}

.module__connector {
    /* border: 3px solid ; */
    border-style: solid;
    /* border-width: 3px; */
    background-color: none;

    /* width: 100%; */
    /* height: 50px; */
    /* height: 20px; */
    // margin: 2px;
    margin: 1px;
    border-width: 2px;

    width: 100%;
    height: 100%;
    min-height: 8px;
    /* width: 20px;
    height: 17px; */
}

/* @media screen and (min-width: 1200px) {
    .module__led {
        width: 20px;
        height: 5px;
    }
    .module__connector {
        width: 20px;
        height: 17px;
        border-width: 3px;
    }
} */
// @media screen and (min-width: 992px) and (max-width: 1200px) {
/* @media screen and (min-width: 1200px) {
    .module__led {
        width: 15px;
        height: 4px;
    }
    .module__connector {
        width: 15px;
        height: 12px;
        border-width: 2px;
    }
} */
// @media screen and (min-width: 992px) and (max-width: 992px) {
// @media screen and (max-width: 992px) {
@media screen and (min-width: 1200px) {
    .module__led {
       /*  width: 10px;
        height: 3px; */
    }
    .module__connector {
        // width: 10px;
        // height: 8px;
        // border-width: 1px;
    }
}

.module--standby {
    // border-color: $standby_color;
    outline-color: $standby_color;
    .module__top {
        background-color: $standby_color;
    }
    .module__connector {
        border-color: $standby_color;
    }
}

.module--work {
    // border-color: $work_color;
    outline-color: $work_color;
    .module__top {
        background-color: $work_color;
    }
    .module__connector {
        border-color: $work_color;
    }
}

.module--error {
    // border-color: $error_color;
    outline-color: $error_color;
    .module__top {
        background-color: $error_color;
    }
    .module__connector {
        border-color: $error_color;
    }
}
/*********END __LEFT PANEL (INFO)__*********/




/*********__RIGHT PANEL (INFO)__*********/
.info {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 100%; */

    // flex-shrink: 3;

    border: 2px solid #E12768;
    border-radius: 10px;
}

.info-top-panel {
    display: flex;
    flex-direction: row;
    justify-content: start;
}
.info-top-panel__button{
    /* width: 5px;
    height: 5px; */
    width: 12px;
    height: 12px;
    border-radius: 5px;
    background-color: #E12768;
    /* margin-left: 5px; */
    margin-top: 16px;
    margin-left: 16px;
}

.info-params, .info-controls{
    display: flex;
    flex-direction: column;
    color: white;

    height: 100%;
    width: 100%;
    justify-content: center;
    padding-left: 20%;
}
.info-params__param{
    display: flex;
    align-items: center;
    flex-direction: row;
}
.info-params__marker{
    width: 12px;
    height: 12px;
    border-radius: 5px;
    /* background-color: #E12768; */
    border: 1px solid #E12768;
    /* margin-left: 5px; */
    /* margin-top: 16px; */
    margin-left: 16px;
    margin-right: 16px;
}
.switch{
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
}
.info-params-toggle {
    margin-left: 8px;
    /* display: flex;
    align-content: start;
    margin-top: 1rem; */
}
.info-params-toggle__label.custom-control-label::before{
    background-color: #42495B;
}
.info-params-toggle__label.custom-control-input:checked~.custom-control-label::before{
    border-color: $work_color;
    background-color: $work_color;
}
.info-params-toggle.custom-switch .custom-control-input:checked~.custom-control-label::after{
    background-color: #626D81;
}
</style>
