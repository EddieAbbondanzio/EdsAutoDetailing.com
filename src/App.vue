<style lang="scss">
@import './public/css/styles.scss';
@import './public/css/bootstrap-4.3.1/bootstrap.scss';
</style>

<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

