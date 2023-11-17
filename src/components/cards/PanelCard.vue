<script setup>
    defineProps({
        data: Object,
        type: String
    })

</script>

<template> 
    <div :class="[['panelCard'], [type]]">
        <div v-for="(v, k) in data" :key="k" :class="v"></div>
    </div>
</template>

<style scoped lang="scss">
.panelCard{
    background-color: #D9D9D9;
    height: 230px;
    width:100%;
    border-radius: 10px;
    padding: 20px;

    &.line{
        height: fit-content;
        display: flex;
        flex-direction: row;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    &.full{
        grid-column-end: 3;
        grid-column-start: 1;
        height: 500px;
    }

    .placeholder_1{
        height: 20px;
        width: 100px;
        border-radius:10px;
        margin-bottom:10px;
        margin-right: 10px;

        &.white{
            background-color: #fff;
        }
    }
    .placeholder_2{
        height: 20px;
        width: 185px;
        border-radius:10px;
        margin-bottom:10px;

        &.white{
            background-color: #fff;
        }
        &.gray{
            background-color: #EEF3F6;
        }
    }
}
@media screen and (max-width: 768px){
    .panelCard{

        .placeholder_2, .placeholder_1{
            max-width: 100%;
        }
        &.line,&.full{
            grid-column-end: auto;
        }        

        &.line{
            flex-wrap: wrap;
        }
    }
}
</style>
