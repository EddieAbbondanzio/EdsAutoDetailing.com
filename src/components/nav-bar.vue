<style lang="scss" scoped>
.navbar-brand {
    img {
        height: 64px;
    }
}
</style>

<template>
    <b-navbar
        type="light"
        variant="light"
        toggleable="sm"
        class="border-bottom border-muted py-3 d-flex justify-content-between"
    >
        <!-- Logo and Name -->
        <b-navbar-brand href="#">
            <img alt="Vue logo" src="../assets/logo.png">
            <h2 class="d-none d-sm-inline-block align-middle my-0 ml-3">Ed's Auto Detailing</h2>
            <h4 class="d-inline-block d-sm-none align-middle my-0 ml-3">Ed's Auto Detailing</h4>
        </b-navbar-brand>

        <!-- Nav Links -->
        <div>
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/services">Services</b-nav-item>
                    <b-nav-item to="/location">Location</b-nav-item>
                    <b-nav-item to="/contact">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>

        <!-- Contact Info -->
        <div>
            <div class="d-flex flex-row justify-content-left py-1">
                <material-icon icon="phone" variant="black" class="pr-2"/>
                <h5 class="text-muted">(207)-213-7547</h5>
            </div>
            <div class="d-flex flex-row justify-content-left py-1">
                <material-icon icon="email" variant="black" class="pr-2"/>
                <h5 class="text-muted">contact@edsautodetailing.com</h5>
            </div>
        </div>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MaterialIcon from '@/components/material-icon.vue';

@Component({
    components: {
        MaterialIcon
    }
})
export default class NavBar extends Vue {}
</script>
