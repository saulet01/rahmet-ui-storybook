import "../../src/assets/global.css";
// import { addDecorator } from "@storybook/vue3";

// addDecorator(() => "<div class='container'><story /></div>");

export const decorators = [
    (story) => ({
        components: { story },
        template: '<div class="container"><story /></div>',
    }),
];
