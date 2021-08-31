import { RahmetSpinner } from "rahmet-ui";

export default {
    title: "UI Components/Spinner",
    component: Spinner,
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
                defaultValue: { summary: "#2997ff" },
            },
            description: "The color of the spinner",
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <rahmet-spinner color="#d2324c"></rahmet-spinner>
</template>

import {RahmetSpinner} from "rahmet-ui"

export default {
    ...
    components: {
        RahmetSpinner
    }
}
`,
            },
        },
    },
};

const Template = (args) => ({
    components: { RahmetSpinner },
    setup() {
        return { args };
    },
    template: `
        <div>
            <h1>Spinner</h1>
            <rahmet-spinner v-bind="args">Hello Test Button</rahmet-spinner>
        </div>
    `,
});

export const Spinner = Template.bind({});
Spinner.args = {
    size: "normal",
    color: "#2997ff",
};
