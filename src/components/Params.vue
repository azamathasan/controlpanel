<template>
    <div class="info-params">
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
                        <div class="info-params__label">State: {{state}}</div>
                    </div>
                    <!-- <ul>
                        <li class="info-params__param">
                            Type: switch
                        </li>
                        <li class="info-params__param">
                            IP: 192.168.1.1
                        </li>
                        <li class="info-params__param">
                            Status: on
                        </li>
                    </ul> -->
                    <div class="switch">
                        <div>on</div>
                        <div class="info-params-toggle custom-control custom-switch">
                            <input 
                                type="checkbox" 
                                class="custom-control-input" 
                                id="customSwitch1"
                                :checked="checked"
                                @change="toggleChange"
                            >
                            <label class="info-params-toggle__label custom-control-label" for="customSwitch1"></label>
                            <!-- <label class="info-params-toggle__label custom-control-label" for="customSwitch1">Toggle this switch element</label> -->
                        </div>
                        <div>off</div>
                    </div>
                </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: ['clicked', 'clickedId'],
    // props: ['module'],
    setup() {
    },
    data() {
        return {
            name: 'Params',
        }
    },
    mounted(){
        console.log('Params.vue mounted!');
    },
    computed: {
        ...mapState({
          rack: state => state.rack,
          }),
        checked: function(){
            if(this.rack.devices[this.clickedId[0]].modules[this.clickedId[1]].state=='work')
                return true
            else
                return false;
        },
        state: function(){
            // return this.rack.devices[this.clicked[0]].modules[this.clicked[1]].state;
            return this.rack.devices[this.clickedId[0]].modules[this.clickedId[1]].state
        },
    },
    methods: {
        toggleChange () {
            console.log('toggleChange: '+this.rack.devices[this.clickedId[0]].modules[this.clickedId[1]].id);
            if(this.rack.devices[this.clickedId[0]].modules[this.clickedId[1]].state=='work')
                this.rack.devices[this.clickedId[0]].modules[this.clickedId[1]].state='standby'
            else
                this.rack.devices[this.clickedId[0]].modules[this.clickedId[1]].state='work';
        }
    },
    
}
</script>