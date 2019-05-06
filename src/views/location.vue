<style lang="scss" scoped>
.embedded-map {
    overflow: hidden;
    background: none !important;
    width: 100%;

    > iframe {
        width: 100%;
        height: 100%;
        min-height: 360px;
    }
}
</style>

<template>
    <div class="container py-3 py-lg-5">
        <div class="row">
            <div class="col-12 col-lg-6 text-center pb-3 pb-lg-0">
                <div class="d-flex flex-row align-items-center justify-content-center pb-3">
                    <material-icon icon="location_on" variant="primary" size="xl" class="pr-3"/>
                    <h1 class="display-4 text-center mb-0">Location</h1>
                </div>

                <p class="pb-3" style="font-size: 1.25em;">
                    Detailing will be performed at
                    <a
                        href="http://gardinercarandtruckwash.com/"
                    >Gardiner Car And Truck Wash</a>
                </p>

                <h2 class="text-muted d-inline-block mb-0 text-center d-inline-block">
                    <a
                        class="text-muted"
                        href="https://maps.google.com/maps?ll=44.210822,-69.784445&z=13&t=m&hl=en-US&gl=US&mapclient=embed&daddr=396%20Brunswick%20Ave%20Gardiner%2C%20ME%2004345@44.2108223,-69.7844448"
                    >
                        <span class="text-dark pb-3">Gardiner Car And Truck Wash</span>
                        <br>396 Brunswick Ave
                        <br>Gardiner, Maine 04345
                    </a>
                </h2>
            </div>
            <div class="col-12 col-lg-6">
                <div class="embedded-map">
                    <iframe
                        src="https://maps.google.com/maps?q=396%20Brunswick%20Ave%20Gardiner%2C%20Maine%2004345%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    ></iframe>
                </div>
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
export default class Location extends Vue {}
</script>
