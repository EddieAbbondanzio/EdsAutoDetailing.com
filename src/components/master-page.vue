<template>
    <div class="page-content">
        <nav-bar/>

        <div class="py-3 py-lg-5">
            <router-view></router-view>
        </div>

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