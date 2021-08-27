import { RahmetModal, RahmetButton } from "rahmet-ui";

export default {
    title: "UI Components/Modal",
    component: RahmetModal,
    argTypes: {
        rounded: {
            default: true,
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: true },
            },
            description: "Rounded corners",
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

        confirmable: {
            default: false,
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: false },
            },
            description: "Whether to disable close event by clicking outside of the modal",
        },

        width: {
            default: 328,
            control: {
                type: "number",
            },
            table: {
                defaultValue: { summary: 328 },
            },
            description: "Max width of the modal",
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <button @click="$refs.modal.onOpen()">Toggle Modal</button>
    <rahmet-modal ref="modal">
        <h1>Modal Content</h1>
    </rahmet-modal>
</template>

import {RahmetModal} from "rahmet-ui"

export default {
    ...
    components: {
        RahmetModal
    },
}
`,
            },
        },
    },
};

const Template = (args) => ({
    components: { RahmetModal, RahmetButton },
    setup() {
        return { args };
    },
    methods: {
        handleOpenModal() {
            this.$refs.modal.onOpen();
        },
    },
    template: `
    <rahmet-button @click="handleOpenModal">Toggle Modal</rahmet-button>
    
    <rahmet-modal v-bind="args" ref="modal">
        <h1>Modal Content</h1>
    </rahmet-modal>`,
});

export const Modal = Template.bind({});
Modal.args = {
    rounded: true,
    contentPadding: true,
    confirmable: false,
    width: 328,
};
