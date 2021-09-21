import { RahmetButton, RahmetInput } from "rahmet-ui";

export default {
    title: "UI Components/Toast",
    argTypes: {
        duration: {
            default: 3000,
            control: {
                type: "number",
            },
            table: {
                defaultValue: { summary: 3000 },
            },
            description: "The duration of the toast",
        },
        transition: {
            default: "slide-down",
            control: {
                type: "text",
            },
            description: "The transition name of the toas",
            table: {
                defaultValue: { summary: "slide-down" },
            },
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
// Install globally in 'main.js'
import App from "./App.vue";
import { createApp } from "vue";
import { RahmetToastPlugin } from "rahmet-ui";

const app = createApp(App);
app.use(RahmetToastPlugin);
app.mount("#app");

// Install locally 'Test.vue'
<template>
    <RahmetToast ref="toast" />
    <button @click="handleToast">toggle</button>
</template>

<script>
import { RahmetApp } from "@utils/rahmet-app.js";

export default {
    components: {
        RahmetToast,
    },
    methods: {
        handleToast() {
            this.$refs.toast.add({
                theme: "success",
                title: "title",
                text: "test",
                duration: 2000,
            });        
        }
    },
}
</script>
                `,
            },
        },
    },
};

const Template = (args) => ({
    components: { RahmetButton, RahmetInput },
    setup() {
        console.log(args);
        return { args };
    },
    methods: {
        handleToast(type) {
            this.$toast[type]({
                title: "Title",
                text: "Description",
            });
        },
        handleToastPreview() {
            this.$toast.success({
                title: "Title",
                text: "Description",
                duration: this.args.duration,
            });
        },
        handleToastIcon() {
            this.$toast.warning({
                title: "Title",
                text: "Description",
                icon: require("../assets/logo.png"),
            });
        },
    },
    template: `
    <div>
       <h1>Toast</h1>
       <rahmet-button @click="handleToastPreview" block v-bind="args">Toggle success toast</rahmet-button>

       <h2 class="mt-10">Config:</h2>

       <div class="card">
           <h3>Theme:</h3>
           <p class="card__description">The theme of the toast</p>
           <div class="flex">
               <rahmet-button block @click="handleToast('success')">Success</rahmet-button>
               <rahmet-button block theme="secondary" @click="handleToast('info')">Info</rahmet-button>
               <rahmet-button block theme="warning" @click="handleToast('warning')">Warning</rahmet-button>
               <rahmet-button block theme="error" @click="handleToast('error')">Error</rahmet-button>
           </div>
       </div>

       <div class="card mt-8">
            <h3>Custom icon:</h3>
            <p class="card__description">Set any icon (svg, png, jpg)</p>
            <div class="flex">
                <rahmet-button block @click="handleToastIcon">Toggle toast with custom icon</rahmet-button>
            </div>
        </div>
    </div>`,
});

export const Toast = Template.bind({});
Toast.args = {
    duration: 3000,
    transition: "slide-down",
};
