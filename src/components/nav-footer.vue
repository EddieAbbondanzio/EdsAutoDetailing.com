<style lang="scss" scoped>
footer {
    height: 128px;
}
</style>

<template>
    <footer
        class="bg-black text-light d-flex flex-column align-items-center justify-content-center"
    >© {{ new Date().getFullYear() }} Ed's Auto Detailing</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MaterialIcon from '@/components/material-icon.vue';

@Component({
    components: {
        MaterialIcon
    }
})
export default class NavFooter extends Vue {}
</script>
