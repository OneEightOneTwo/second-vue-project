<template>
    <div v-if="car_to_address" id="address">
        <div class="top">
            选择收货地址
            <span class="left">&larr;</span>
            <span class="right">新增地址</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            car_to_address:true
        }
    }
}
</script>
<style scoped>
    #address .top{
        width: 100%;
        height: 2.75rem;
        line-height: 2.75rem;
        text-align: center;
        font-size: 1rem;
        padding:0 .9375rem;
    }
    #address .left{
        display: inline-block;
        height: 2.75rem;
        line-height: 2.75rem;
        text-align: center;
        font-size: 1rem;
        float:left;
    }
    #address .left{
        display: inline-block;
        height: 2.75rem;
        line-height: 2.75rem;
        text-align: center;
        font-size: 1rem;
        float:right;
    }
</style>
