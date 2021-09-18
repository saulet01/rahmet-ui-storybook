import { RahmetBackdrop, RahmetButton } from "rahmet-ui";

export default {
    title: "UI Components/Backdrop",
    component: RahmetBackdrop,
    argTypes: {
        size: {
            options: ["small", "normal", "large"],
            control: { type: "radio" },
            description: "The size of the spinner",
            table: {
                defaultValue: { summary: "normal" },
            },
        },
        color: {
            type: String,
            control: "color",
            table: {
                defaultValue: { summary: "#ffffff" },
            },
            description: "The color of the spinner",
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <button @click="$refs.backdrop.onOpen()">Toggle Backdrop</button>
    <RahmetBackdrop ref="backdrop" />
</template>

import {RahmetBackdrop} from "rahmet-ui"

export default {
    ...
    components: {
        RahmetBackdrop
    },
}
`,
            },
        },
    },
};

const Template = (args) => ({
    components: { RahmetBackdrop, RahmetButton },
    setup() {
        return { args };
    },
    methods: {
        handleToggleBackdrop() {
            this.$refs.backdrop.onOpen();

            setTimeout(() => {
                this.$refs.backdrop.onHide();
            }, 2000);
        },
    },
    template: `
    <h1>Backdrop</h1>
    <rahmet-button block @click="handleToggleBackdrop">Toggle Backdrop</rahmet-button>
    
    <RahmetBackdrop ref="backdrop" v-bind="args" />
    `,
});

export const Backdrop = Template.bind({});
Backdrop.args = {
    size: "normal",
    color: "#ffffff",
};
