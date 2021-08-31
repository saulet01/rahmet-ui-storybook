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
        absolute: {
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: false },
            },
            description: "Absolute centered vertically and horizontally",
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <RahmetSpinner color="#d2324c" />
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
            <RahmetSpinner v-bind="args" />

            <h2 class="mt-10">Props:</h2>
            <div class="card">
                <h3>Size:</h3>
                <div class="flex justify-space-around items-center">
                    <div class="mx-auto">
                        <RahmetSpinner size="small" />
                        <p>Small</p>
                    </div>
                    <div class="mx-auto">
                        <RahmetSpinner />
                        <p>Medium (default)</p>
                    </div>
                    <div class="mx-auto">
                        <RahmetSpinner size="large" />
                        <p>Large</p>
                    </div>
                </div>
            </div>
            <div class="card mt-8">
                <h3>Color:</h3>
                <div class="flex justify-space-around items-center">
                    <div class="mx-auto">
                        <RahmetSpinner color="#ffcc30" />
                        <p class="text-bold" style="color: #ffcc30">#ffcc30</p>
                    </div>
                    <div class="mx-auto">
                        <RahmetSpinner color="#cc4747" />
                        <p class="text-bold" style="color: #cc4747">#cc4747</p>
                    </div>
                    <div class="mx-auto">
                        <RahmetSpinner color="#53A451" />
                        <p class="text-bold" style="color: #53A451">#53A451</p>
                    </div>
                </div>
            </div>
        </div>
    `,
});

export const Spinner = Template.bind({});
Spinner.args = {
    size: "normal",
    color: "#2997ff",
    absolute: false,
};
