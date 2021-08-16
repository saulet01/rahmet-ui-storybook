import { RahmetBottomSheet, RahmetButton } from "rahmet-ui";

export default {
    title: "UI Components/Bottom Sheet",
    component: RahmetBottomSheet,
    argTypes: {
        name: {
            type: { name: "string", required: true },
            defaultValue: "demo",
            description:
                "name of the bottom sheet, must be the same as argument on calling the function onOpen()",
        },
        rounded: {
            default: true,
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: true },
            },
            description: "Rounded corners of bottom sheet content",
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
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <button @click="$refs.test.onOpen('demo')">Toggle Bottom Sheet</button>
    <rahmet-bottom-sheet name="demo" ref="test">
        <h1>Open Bottom Sheet</h1>
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
};
