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
                    Painel
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
        <container>
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
        </container>
    </main>
    <aside>
        <h2>Tarefas de Hoje</h2>
        <div class="taskCard">
            <div class="placeholder_1 white"></div>
        </div>
    </aside>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;

}
</style>
