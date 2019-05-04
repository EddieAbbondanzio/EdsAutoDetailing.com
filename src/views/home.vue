<style lang="scss" scoped>
.cropped-hero {
    height: 720px;
    overflow-y: hidden;

    img {
        width: 100%;
    }

    > div {
        position: absolute;
        top: 25%;
        left: 10%;
        right: 60%;
        bottom: 25%;
        border-left-width: 16px !important;

        p {
            font-size: 1.25em;
        }
    }
}
</style>

<template>
    <div>
        <!-- Hero -->
        <div class="cropped-hero position-relative">
            <img src="@/assets/gtr.jpg">

            <div
                class="d-flex flex-column justify-content-between bg-light-transparent p-3 border-left border-dark"
            >
                <div>
                    <h2 class="text-dark font-weight-bold display-4 mb-0">We Care</h2>
                    <h1 class="text-dark font-weight-bold display-3">For Your Car</h1>

                    <p>Our attention to detail is second to none. We'll bring your car back to life and make it look and feel brand new.</p>
                </div>

                <div class="pb-3 text-center">
                    <router-link to="services">
                        <b-btn variant="outline-dark" size="lg" class="mr-2">Services</b-btn>
                    </router-link>
                    <router-link to="contact">
                        <b-btn variant="warning" size="lg" class="ml-2">Contact Us</b-btn>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- Blurb about who we are -->
        <div class="bg-light py-5 d-flex flex-column align-items-center">
            <div class="w-50 pb-5">
                <h1 class="display-3 text-center mb-3">What We Offer</h1>

                <p style="font-size: 1.25em;" class="pb-3">
                    Specializing in all things detailing we know how to make your car shine like new. From interior to exterior we can do it all. Detailing helps
                    keeps your car in it's best condition and protects it from wear and tear to help keep the resell value high.
                </p>

                <div class="container">
                    <div class="row">
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Machine Buffing and Polishing
                        </div>
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Hand Waxing
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Carpet Vacuum and Shampoo
                        </div>
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Scratch & Swirl Removal
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Salt And Dirt Stain Removal
                        </div>
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Leather Treatment
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Paint Tar & Contaminate Removal
                        </div>
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Vinyl & Plastic Cleaning
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Brake Dust Removal
                        </div>
                        <div class="col-6 d-flex flex-row py-1">
                            <material-icon
                                icon="check_circle_outline"
                                variant="success"
                                class="pr-2"
                            />Tire Shine
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white py-5 d-flex flex-column align-items-center">
            <div class="container py-5">
                <div class="row">
                    <div class="offset-1 col-10 offset-lg-2 col-lg-8 py-3">
                        <img src="@/assets/exterior_acura.jpg" class="w-100">
                    </div>
                </div>
                <div class="row">
                    <div class="offset-1 col-10 offset-lg-2 col-lg-8 py-3">
                        <img src="@/assets/exterior_jeep.jpg" class="w-100">
                    </div>
                </div>
                <div class="row">
                    <div class="offset-1 col-10 offset-lg-2 col-lg-8 py-3">
                        <img src="@/assets/exterior_civic.jpg" class="w-100">
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 bg-light text-dark text-center">
            <h2 class="pb-3">Schedule an Appointment With Us</h2>
            <div>
                <a
                    href="tel:2072137547"
                    class="text-dark d-flex flex-row justify-content-center align-items-center"
                >
                    <material-icon icon="phone" size="lg" variant="primary" class="pr-2"/>
                    <h3>(207)-213-7547</h3>
                </a>
            </div>
            <div>
                <a
                    href="mailto:contact@edsautodetailing.com"
                    class="text-dark d-flex flex-row justify-content-center align-items-center"
                >
                    <material-icon
                        icon="email"
                        size="lg"
                        variant="primary"
                        class="pr-2 text-decoration-none"
                    />
                    <h3>contact@edsautodetailing.com</h3>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MaterialIcon from '@/components/material-icon.vue';

@Component({
    components: {
        MaterialIcon
    }
})
export default class Home extends Vue {}
</script>
