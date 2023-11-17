<script setup>
    import MenuButton from './MenuButton.vue';

    const menus = [
        {
            name: "Painel",
            notf: 0,
            active: false,
            icon: "table-columns"
        },
        {
            name: "Projetos",
            notf: 0,
            active: false,
            icon: "folder"
        },
        {
            name: "Leads",
            notf: 0,
            active: false,
            icon: "user"
        },
        {
            name: "Campanhas",
            notf: 0,
            active: false,
            icon: "rectangle-ad"
        },
        {
            name: "Notificações",
            notf: 2,
            active: false,
            icon: "comment"
        }
    ]
    
</script>

<template>
    <header>
        <div class="logoContainer">
            <img src="logo.png" alt="BigDashboard logo" >
            <h2 class="headerTitle">BigDashboard</h2>
        </div>
        <nav>
            <ul>
                <MenuButton v-for="(v, k) in menus" :key="k" :data="v"/>
            </ul>
        </nav>
        <div class="userInfo">
            <div class="profilePicture"></div>
            <p class="userName">Usuário de Teste</p>
            <p class="userMail">teste@teste.com.br</p>
        </div>
    </header>
</template>

<style lang="scss">
header{
    width: fit-content;
    max-width: 300px;
    flex:1;
    padding: 35px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--background-white);
    border-right: 1px solid #CFD4D7;

    .logoContainer{
        display: flex;
        align-items: center;

        margin-bottom: 55px;
        img{
            margin-right:15px;
            width: 40px;
            height: auto;
        }

        h2{
            font-size: 1.15rem;
            font-weight: 700;
            color:black
        }
    }

    nav{
        flex:1;

        ul {
            padding:0px;
            list-style:none;

        }
    }

    .userInfo{
        text-align: center;

        .profilePicture{
            display: block;
            width: 50px;
            height: 50px;
            background-color:#aaa;
            border-radius:100%;
            margin-bottom: 15px;
            margin-left: auto;
            margin-right: auto;
        }

        .userName{
            color:#444;
            font-size:.9rem;
            font-weight: 700;
        }
        .userMail{
            color:#444;
            font-size: .7rem;
            font-weight: 500;
        }
    }
}
@media screen and (max-width: 768px){
    header{
        max-width: 70px;
        padding:5px;

        .logoContainer{

            margin-bottom: 20px;
            margin-top: 10px;

            img{
                margin-right: auto;
                width:40px;
                text-align: center;
                margin-left: auto;
            }
            h2{
                display: none;
            }
        }

        .userInfo{
            .profilePicture{
                width: 40px;
                height: 40px;
            }
            .userName{
                display: none;
            }
            .userMail{
                display: none;
            }
        }
    }
}

</style>