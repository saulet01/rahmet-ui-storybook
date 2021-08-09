import { action } from "@storybook/addon-actions";

import {RahmetButton} from "rahmet-ui";

export default {
    title: "UI Components/Button",
    component: Button,
    argTypes: {
        theme: {
            options: ["primary", "warning", "error"],
            control: { type: "radio" },
            description: "The theme of the button",
            table: {
                defaultValue: { summary: "primary" },
            },
        },
        block: {
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: false },
            },
            description: "Extend the full available width",
        },
        size: {
            options: ["small", "normal", "large"],
            control: { type: "radio" },
            description: "The size of the button",
            table: {
                defaultValue: { summary: "normal" },
            },
        },
        disabled: {
            default: false,
            control: {
                type: "boolean",
            },
            description: "Disable the button",
            table: {
                defaultValue: { summary: false },
            },
        },
        loading: {
            default: false,
            control: {
                type: "boolean",
            },
            description: "Show loader",
            table: {
                defaultValue: { summary: false },
            },
        },
        click: {
            description:
                "Event that is emitted when the component is clicked",
            table: {
                type: {
                    summary: "Events",
                },
                category: "Events",
            },
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <rahmet-button>Test Rahmet Button</rahmet-button>
</template>

import {RahmetButton} from "rahmet-ui"

export default {
    ...
    components: {
        RahmetButton
    }
}
`,
            },
        },
    },
};

const Template = (args) => ({
    components: { RahmetButton },
    setup() {
        return { args };
    },
    template: `<rahmet-button @click="action" v-bind="args">Hello Test Button</rahmet-button>`,
    methods: { action: action("click") },
});

export const Button = Template.bind({});
Button.args = {
    theme: "primary",
    block: false,
    size: "normal",
    disabled: false,
    loading: false,
};
