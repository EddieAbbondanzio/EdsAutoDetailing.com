<style lang="scss" scoped>
p,
li {
    font-size: 1.25em;
}

li {
    display: flex;
    flex: row;
    align-items: center;
    padding-top: 2px;
    padding-bottom: 2px;

    i {
        padding-right: 8px;
    }
}
</style>

<template>
    <div class="container py-3 py-lg-5">
        <!-- Header -->
        <div class="row">
            <div class="col-12 text-center pb-3 pb-lg-5">
                <div class="d-flex flex-row align-items-center justify-content-center pb-3">
                    <h1 class="display-4 text-center">Services</h1>
                </div>
                <div
                    class="alert alert-info d-flex flex-row align-items-center justify-content-center"
                >
                    <i class="material-icons pr-3">info</i>
                    Please note that all prices are for reasonably unclean vehicles. Issues such as dog hair, salt stains, and oxidization will be subject to additional fees between $20 to $80.
                </div>
            </div>
        </div>

        <!-- The Works -->
        <div class="row pb-5">
            <div class="col-12">
                <div>
                    <h2 class="text-muted">
                        <span class="font-weight-bold text-dark pr-2">Full Detail</span>Starts at $250
                    </h2>
                </div>

                <div class="text-dark">
                    <p
                        class="service-description"
                    >A comprehensive inside and out detail that cleans, enhances, and protects your vehicle. Designed for vehicles in average condition, but can be extended via add-ons to address more severe issues.</p>

                    <ul class="list-unstyled">
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Tires and rims cleaned
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Wheel wells cleaned
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Paint decontaminated
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Hand washed
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Hand dried
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Machine polished and waxed
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Exterior windows cleaned
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Tires shined
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Interior vacuumed
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Carpets, upholstery, headliner, and floor mats spot treated
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Vinyl, and plastics cleaned and protected
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Leather cleaned and protected
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Interior windows cleaned
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Door jams cleaned
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Interior Deep Clean -->
        <div class="row pb-5">
            <div class="col-12">
                <div>
                    <h2 class="text-muted">
                        <span class="font-weight-bold text-dark pr-2">Interior Detail</span>Starts at $150
                    </h2>
                </div>

                <div class="text-dark">
                    <p
                        class="service-description"
                    >Vacuum, shampoo cloth, and carpet, clean leather, vinyl, plastic, and windows.</p>

                    <ul class="list-unstyled">
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Interior vacuumed
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Carpets, upholstery, headliner, and floor mats spot treated
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Vinyl, and plastics cleaned and protected
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Leather cleaned and protected
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Interior windows cleaned
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Exterior Buff & Wax -->
        <div class="row pb-5">
            <div class="col-12">
                <div>
                    <h2 class="text-muted">
                        <span class="font-weight-bold text-dark pr-2">Exterior Detail</span>Starts at $150
                    </h2>
                </div>

                <div class="text-dark">
                    <p
                        class="service-description"
                    >A thorough exterior detail designed to clean, enhance, and protect. Perfect for vehicles with light wear, but more severe issues such as sap/pitch, fallout, and more can be fixed via add-ons.</p>

                    <ul class="list-unstyled">
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Tires and rims cleaned
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Wheel wells cleaned
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Paint decontaminated
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Hand washed
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Hand dried
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Machine polished and waxed
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Exterior windows cleaned
                        </li>
                        <li>
                            <material-icon icon="check_circle_outline" variant="success" />Tires shined
                        </li>
                    </ul>
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
export default class Services extends Vue {}
</script>
