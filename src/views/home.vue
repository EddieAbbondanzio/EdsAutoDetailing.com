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
        // opacity: 0.8;
        border-left-width: 8px !important;

        p {
            font-size: 1.25em;
        }
    }
}
</style>



<template>
    <div>
        <nav-bar/>
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
                    <b-btn variant="outline-dark" size="lg" class="mr-2">Services</b-btn>
                    <b-btn variant="warning" size="lg" class="ml-2">Contact Us</b-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/nav-bar.vue';

@Component({
    components: {
        NavBar
    }
})
export default class Home extends Vue {}
</script>
