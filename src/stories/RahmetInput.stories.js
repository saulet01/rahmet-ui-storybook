import {RahmetInput} from "rahmet-ui";

export default {
    title: "UI Components/Input",
    component: Input,
    argTypes: {
        disabled: {
            default: false,
            control: {
                type: "boolean",
            },
            description: "Disable the input",
            table: {
                defaultValue: { summary: false },
            },
        },
        placeholder: {
            default: "Тест input",
            control: {
                type: "text",
            },
            description: "The placeholder of the input",
            table: {
                defaultValue: { summary: "Введите значение" },
            },
        },
        modelValue: {
            default: "Тест input",
            control: {
                type: "text",
            },
            description: "v-model",
            table: {
                type: {
                    summary: "required",
                },
            },
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <rahmet-input v-model="value" placeholder="Введите значение"></rahmet-input>
</template>

import {RahmetInput} from "rahmet-ui"

export default {
    ...
    components: {
        RahmetInput
    }
}
`,
            },
        },
    },
};

const Template = (args) => ({
    components: { RahmetInput },
    setup() {
        return { args };
    },
    template: `<rahmet-input v-bind="args">Hello Test Button</rahmet-input>`,
});

export const Input = Template.bind({});
Input.args = {
    disabled: false,
    placeholder: "Введите значение",
    modelValue: "Тест input",
};
