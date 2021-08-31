import { RahmetBottomSheet, RahmetButton } from "rahmet-ui";

export default {
    title: "UI Components/Bottom Sheet",
    component: RahmetBottomSheet,
    argTypes: {
        name: {
            type: { name: "string", required: true },
            defaultValue: "demo",
            description:
                "The name of the button sheet. Note: must be the same parameter in onOpen()",
        },
        rounded: {
            default: true,
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: true },
            },
            description: "Rounded top corners",
        },
        overlay: {
            default: true,
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: true },
            },
            description: "Background overlay",
        },
        contentPadding: {
            default: true,
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: true },
            },
            description: "Inside content padding",
        },
        shiftMinHeight: {
            default: 70,
            control: {
                type: "number",
            },
            table: {
                defaultValue: { summary: 70 },
            },
            description: "Minimum height to close the bottom sheet by dragging",
        },
        shiftColor: {
            type: String,
            control: "color",
            table: {
                defaultValue: { summary: "#e0e0e0" },
            },
            description: "Color of the sheet shift",
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <button @click="$refs.test.onOpen('demo')">Toggle Bottom Sheet</button>
    <rahmet-bottom-sheet name="demo" ref="test">
        <h1>Bottom Sheet Content</h1>
    </rahmet-bottom-sheet>
</template>

import {RahmetBottomSheet} from "rahmet-ui"

export default {
    ...
    components: {
        RahmetBottomSheet
    },
}
`,
            },
        },
    },
};

const Template = (args) => ({
    components: { RahmetBottomSheet, RahmetButton },
    setup() {
        return { args };
    },
    methods: {
        handleOpenSheet() {
            this.$refs.test.onOpen("demo");
        },
    },
    template: `
    <h1>Bottom Sheet</h1>
    <rahmet-button @click="handleOpenSheet">Toggle Bottom Sheet</rahmet-button>
    
    <rahmet-bottom-sheet v-bind="args" ref="test">
        <h1>Open Bottom Sheet</h1>
    </rahmet-bottom-sheet>`,
});

export const BottomSheet = Template.bind({});
BottomSheet.args = {
    name: "demo",
    rounded: true,
    overlay: true,
    contentPadding: true,
    shiftMinHeight: 70,
};
