<template>
    <div>
        <nav-bar/>

        <router-view></router-view>

        <nav-footer/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './nav-bar.vue';
import NavFooter from './nav-footer.vue';
@Component({
    components: {
        NavBar,
        NavFooter
    }
})
export default class MasterPage extends Vue {}
</script>