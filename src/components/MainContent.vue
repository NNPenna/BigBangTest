<script setup>
    import PanelCard from './cards/PanelCard.vue';

    const data = {
        heading: [{
            title : "placeholder_1 white",
            subtitle: "placeholder_2 gray",
            content: "placeholder_2 white"
        },{
            title : "placeholder_1 white",
            subtitle: "placeholder_2 gray",
            content: "placeholder_2 white"
        }],
        liner: ["placeholder_1 white", "placeholder_1 white", "placeholder_1 white", "placeholder_1 white", "placeholder_1 white"],
        full: {
            title : "placeholder_1 white",
            subtitle: "placeholder_2 white",
            content: "placeholder_2 white"
        }
    }
</script>

<template>
    <main>
        <div class="header">
            <div class="title">
                <h1>Painel</h1>
                <h2>As últimas atualizações de Hoje</h2>
            </div>
            <div class="icons">
                <a class="iconHolder">
                    <fa icon="fa-solid fa-magnifying-glass" />
                </a>
                <a class="iconHolder">
                    <fa icon="fa-regular fa-bookmark" />
                </a>
            </div>
        </div>
        <div class="container">
            <div class="grid">
                <PanelCard v-for="(v, k) in data.heading" :key="k" :data="v"/>
            </div>
            <div class="grid">
                <PanelCard :data="data.liner" type="line" />
            </div>
            <div class="grid">
                <PanelCard :data="data.full" type="full"/>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    main{
    width: 100%;
    padding: 35px;
    position: relative;
    flex:1;
    display: flex;
    flex-direction: column;
    background-color: var(--background-white);
    border-right: 1px solid #CFD4D7;
    overflow: scroll;

    .header{
        border:none;
        padding:0px;
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 100%;

        .title{
            flex:1;
        }
        .icons{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size:.7rem;

            .iconHolder{
                display: block;
                margin-left: 10px;
                margin-right: 10px;
                width:40px;
                height:40px;
                font-size:1.3rem;
                border-radius:5px;
                outline: 1px solid #444;
                line-height: 2;
                text-align: center;

                &:hover{
                    outline-width: 2px;
                    cursor: pointer;
                }
            }
        }
        
        h1{
            font-weight: 800;
            font-size: 2rem;
        }
        h2{
            font-size:1rem;
            font-weight: 600;
        }
    }

    .container{
        display: contents;
        .grid{
            display:grid; 
            gap: 20px;
            grid-template-columns: 1fr 1fr;
            margin-top: 10px;
            margin-bottom: 10px;

        }
    }
}
@media screen and (max-width: 768px){
    main{
        overflow: visible;

        .header{
            .icons{
                .iconHolder{
                    height: 30px;
                    width: 30px;
                    font-size:1rem;
                }
            }
        }
        .container{
            .grid{
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
        }
    }
}
@media screen and (max-width: 425px){
    main{
        .header{
            flex-direction: column-reverse;

            .icons{
                justify-content: flex-start;
                margin-bottom: 25px;

                .iconHolder{
                    margin-left:0px;
                    margin-right:15px;
                }
            }
        }
    }
}
</style>