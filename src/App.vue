<template>
    <rahmet-button>Test</rahmet-button>
    <rahmet-spinner></rahmet-spinner>
    <rahmet-input></rahmet-input>
</template>

<script>
import {RahmetButton, RahmetSpinner, RahmetInput} from "rahmet-ui";
export default {
    name: "App",
    components: {
        RahmetButton,
        RahmetSpinner,
        RahmetInput
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
