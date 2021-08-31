import { action } from "@storybook/addon-actions";

import { RahmetButton } from "rahmet-ui";

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
        borderRadius: {
            default: 4,
            control: {
                type: "number",
            },
            table: {
                defaultValue: { summary: 4 },
            },
            description: "Set border radius",
        },
        fontWeight: {
            default: "500",
            control: {
                type: "text",
            },
            description: "Set font weight",
            table: {
                defaultValue: { summary: "500" },
            },
        },
        click: {
            description: "Event that is emitted when the component is clicked",
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
    template: `
    <div>
        <h1>Button</h1>
        <rahmet-button @click="action" v-bind="args">DEMO BUTTON</rahmet-button>

        <h2 class="mt-10">Props:</h2>

        <div class="card">
            <h3>Theme:</h3>
            <div class="flex">
                <rahmet-button block>Primary (default)</rahmet-button>
                <rahmet-button block theme="secondary">Secondary</rahmet-button>
                <rahmet-button block theme="warning">Warning</rahmet-button>
                <rahmet-button block theme="error">Error</rahmet-button>
            </div>
        </div>

        <div class="card mt-8">
            <h3>Size:</h3>
            <rahmet-button size="small">Small</rahmet-button>
            <rahmet-button class="mx-8">Normal (default)</rahmet-button>
            <rahmet-button size="large">Large</rahmet-button>
        </div>

        <div class="card mt-8">
            <h3>Block:</h3>
            <rahmet-button>Not block (default)</rahmet-button>
            <rahmet-button block class="mt-3">Block</rahmet-button>
        </div>

        <div class="card mt-8">
            <h3>Disabled:</h3>
            <div class="flex">
                <rahmet-button block>Active (default)</rahmet-button>
                <rahmet-button block disabled>Disabled</rahmet-button>
            </div>
        </div>

        <div class="card mt-8">
            <h3>Loading:</h3>
            <rahmet-button loading block>Loading...</rahmet-button>
        </div>
    </div>`,
    methods: { action: action("click") },
});

export const Button = Template.bind({});
Button.args = {
    theme: "primary",
    block: true,
    size: "normal",
    disabled: false,
    loading: false,
    borderRadius: 4,
    fontWeight: "500",
};
