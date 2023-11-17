<script setup>
    const props =defineProps({
        data: Object
    })

    const notf = props.data?.notf?.toString() 

    console.log(notf)
</script>

<template>
    <li>
        <a :class="[['navLink'], [data?.active ? 'active' : ''], [data?.notf ? 'notf' : '']]" href="#">
            <div :class="[['navText']]" >
                {{ data.name }}
            </div>
            <fa :icon="'fa-'+data.icon" class="icons"/>
        </a>
    </li>
</template>
<style lang="scss">
.icons{
    display: none;
}

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
            counter-set: notf v-bind(notf);
            content: counter(notf);
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

@media screen and (max-width: 768px){
    .icons{
    display: block;
    margin-left: auto;
    margin-right:auto;
    }
    .navText{
        display: none;
    }
    .navLink{
        padding: 15px 10px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    li{
        a{
            &.notf::after{
                right: .3rem;
                top:.2rem;
            }
        }
    }
}
</style>