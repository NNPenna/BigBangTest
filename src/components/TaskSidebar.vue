<script setup>
    import PanelCard from './cards/PanelCard.vue';
    
    const data = {
        tasks: [
            {
                title : "placeholder_1 white",
                subtitle: "placeholder_2 gray",
                content: "placeholder_2 white",
            },{
                title : "placeholder_1 white",
                subtitle: "placeholder_2 gray",
                content: "placeholder_2 white"
            },{
                title : "placeholder_1 white",
                subtitle: "placeholder_2 gray",
                content: "placeholder_2 white"
            }
        ],
        last: {
            title : "placeholder_1 white",
            subtitle: "placeholder_2 white",
            content: "placeholder_2 white"
        }
    }
</script>

<template>
    <aside>
            <div class="content">
                <h2>Tarefas de Hoje</h2>
                    <PanelCard v-for="(v, k) in data.tasks" :key="k" :data="v"/>
                <h2>Projeto recente</h2>
                    <PanelCard :data="data.last"/>
            </div>
        </aside>
</template>

<style scoped lang="scss">
aside{

    background-color:#fff;
    max-width:320px;
    flex:1;
    padding: 35px;
    overflow: auto;

    h2{
        color:#222;
        font-size:1.3rem;
        font-weight: 700;
        margin-bottom:30px;
    }

    .panelCard{
        height: 200px;
        margin-bottom:20px;
    }
}
@media screen and (max-width: 768px){
    aside{
        overflow: visible;
        max-width: 100%;
        .collapseButon{
            content: "<";
            position: absolute;
            left: -19px;
            width: 20px;
            top: 50%;
            z-index: 10;
            padding: 5px;
            border-radius: 0 15px 15px 0;
            background-color: var(--background-white);
            border: 1px solid #CFD4D7;
            border-left:none;
        }
    }
}
</style>