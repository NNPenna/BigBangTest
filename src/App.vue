<script setup>
</script>

<template>
    <header>
        <div class="logoContainer">
            <img src="logo.png" alt="BigDashboard logo" >
            <h2 class="headerTitle">BigDashboard</h2>
        </div>
        <nav>
            <ul>
                <li>
                    <a class="navLink active" href="#">
                        Painel
                    </a>
                </li>
                <li>
                    <a class="navLink notf" href="#">
                        Projetos
                    </a>
                </li>
            </ul>
        </nav>
        <div class="userInfo">
            <div class="profilePicture"></div>
            <p class="userName">Usuário de Teste</p>
            <p class="userMail">teste@teste.com.br</p>
        </div>
    </header>
    <main>
        <header>
            <div>
                <h1>Painel</h1>
                <h2>As últimas atualizações de Hoje</h2>
            </div>
            <div>
                <div class="iconHolder">
                    <fa icon="fa-solid fa-magnifying-glass" />
                </div>
                <div class="iconHolder">
                    <fa icon="fa-regular fa-bookmark" />
                </div>
            </div>
        </header>
        <div class="container">
            <div class="grid">
                <div class="panelCard">
                    <div class="placeholder_1 white"></div>
                    <div class="placeholder_2 gray"></div>
                    <div class="placeholder_2 white"></div>
                </div>
                <div class="panelCard">
                    <div class="placeholder_1 white"></div>
                    <div class="placeholder_2 gray"></div>
                    <div class="placeholder_2 white"></div>
                </div>
            </div>
            <div class="grid">
                <div class="lineCard">
                    <div class="placeholder_1 white"></div>
                    <div class="placeholder_1 white"></div>
                    <div class="placeholder_1 white"></div>
                    <div class="placeholder_1 white"></div>
                    <div class="placeholder_1 white"></div>
                </div>
            </div>
            <div class="grid">
                <div class="panelCard full">

                </div>
            </div>
        </div>
    </main>
    <aside>
        <h2>Tarefas de Hoje</h2>
        <div class="taskCard">
            <div class="placeholder_1 white"></div>
        </div>
    </aside>
</template>

<style scoped lang="scss">
header{
    width: fit-content;
    max-width: 300px;
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

            li{
                margin-bottom: 15px;

                a{
                    text-decoration:none;
                    width:100%;
                    color: #222;
                    font-weight: 800;
                    font-size: 0.9rem;
                    text-align: left;
                    display:block;
                    padding:10px 25px;
                    border-radius:30px;

                    &.active, &:hover{
                        background-color:#444;
                        color: white
                    }

                    &.notf::after{
                        content: '1';
                        position: absolute;
                        right: 1rem;
                        top:.7rem;
                        width:20px;
                        height: 20px;
                        font-size:.8rem;
                        text-align: center;
                        vertical-align: middle;
                        margin: 0px!important;
                        color: #222;
                        border-radius: 100%;
                        background-color: greenyellow
                    }
                }
            }
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
main{
    width: 100%;
    padding: 35px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--background-white);
    border-right: 1px solid #CFD4D7;

    header{
        border:none;
        padding:0px;
    }
}
</style>
