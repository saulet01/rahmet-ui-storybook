import { RahmetInput } from "rahmet-ui";

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
    <RahmetInput v-model="value" placeholder="Введите значение" />
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
    template: `
    <div>
        <h1>Input</h1>
        <RahmetInput v-bind="args" />
        <h2 class="mt-10">Props:</h2>
        <div class="card">
            <h3>Disabled:</h3>
            <p class="card__description">Disable the input</p>
            <RahmetInput disabled placeholder="Disabled" />
        </div>
    </div>`,
});

export const Input = Template.bind({});
Input.args = {
    disabled: false,
    placeholder: "Введите значение",
    modelValue: "Тест input",
};
