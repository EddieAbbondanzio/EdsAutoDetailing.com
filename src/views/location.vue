<style lang="scss" scoped>
.mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 600px;
}
.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
}
</style>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-6">
                <h1 class="display-4 pb-5 text-center">Location</h1>

                <h2 class="text-muted text-center">
                    396 Brunswick Ave
                    <br>Gardiner, Maine 04345
                </h2>
            </div>
            <div class="col-6">
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe
                            width="600"
                            height="500"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=396%20Brunswick%20Ave%20Gardiner%2C%20Maine%2004345%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                        ></iframe>
                        <a href="https://www.crocothemes.net"></a>
                    </div>
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
