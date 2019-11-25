<template>
    <div>
        <img :src="imgs[value]" class="zypc_icon" :style="{height: size,width: size}">   
    </div>
</template>

<script>

export default {
    data() {
        return {
            imgs:{
        
            }
        }
    },
    props: ['type','size'],
    computed: {
        value: function(){
            this.imgs[this.type] = require(`@/assets/zypcIcon/${this.type}.png`)
            return this.type;
        }
    }
}
</script>

<style lang="">
.zypc_icon {
    width: 15px;
    height: 15px;
}
</style>