<style lang="scss" scoped>
</style>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="display-4 pb-5">Contact Us</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6">
                <div class="pb-5 pb-md-0">
                    <a
                        href="tel:2072137547"
                        class="text-dark d-flex flex-column justify-content-center align-items-center text-decoration-none"
                    >
                        <material-icon
                            icon="phone"
                            size="lg"
                            variant="primary"
                            class="p-3 border-dark border rounded-circle mb-4"
                        />
                        <h3>(207)-213-7547</h3>
                    </a>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="col-12 col-md-6">
                <div>
                    <a
                        href="mailto:contact@edsautodetailing.com"
                        class="text-dark d-flex flex-column justify-content-center align-items-center text-decoration-none"
                    >
                        <material-icon
                            icon="email"
                            size="lg"
                            variant="primary"
                            class="p-3 border-dark border rounded-circle mb-4"
                        />
                        <h3>contact@edsautodetailing.com</h3>
                    </a>
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
export default class Contact extends Vue {}
</script>
