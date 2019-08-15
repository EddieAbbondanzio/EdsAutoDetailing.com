<style lang="scss" scoped>
footer {
    height: 128px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
</style>

<template>
    <footer
        class="bg-black text-light d-flex flex-column align-items-center justify-content-center position-absolute"
    >© {{ new Date().getFullYear() }} Ed's Auto Detailing LLC</footer>
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
