<template>
    <!-- <div :class="'module module--'+state" @click="$emit('moduleClick', $event.target.click)"> -->
    <!-- <div :class="'module module--'+state" @click="$emit('moduleClick', $event.target)"> -->
    <!-- <div v-if="checkClickedId" :class="moduleClassClicked" @click="$emit('moduleClick', returnIds )">
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
    <div :class="moduleClass" @click="$emit('moduleClick', returnIds )">
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
        </div>
</template>

<script>
export default {
    props: ['state', 'moduleId', 'deviceId', 'clicked'],
    setup() {
    },
    data() {
      return {
          name: 'ControlPanel',
          returnIds: [this.deviceId,this.moduleId],
        //   clicked: '',
        //   methods: moduleClickMethod
      }
    },
    computed: {
        checkClickedId: function(){
            return (this.clickedId[0]&&this.clickedId[1]);
        },
        /* moduleClassClicked: function(){
            // console.log('this.state+this.clicked:'+this.state+' '+this.clicked);
            if((this.clickedId).length)
                {
                    console.log('(this.clickedId).length: '+(this.clickedId).length);
                    return 'module module--'+this.state+' '+this.clicked[this.clickedId[0]][this.clickedId[1]];
                }
                // return 'module module--'+this.state+' '+this.clicked[null][null]
        }, */
        moduleClass: function(){
            console.log('********this.clicked: '+this.clicked);
            return 'module module--'+this.state+' '+this.clicked;
        }
        // clicked
    },
    mounted(){
        console.log('this.moduleId in Module.vue: '+this.moduleId);
        console.log('this.deviceId in Module.vue: '+this.deviceId);
        // this.clicked='clicked';
    },
    unmounted(){
        // this.clicked='';
    }
}
</script>