import "../../src/assets/styles/global.css";
import "../../src/assets/styles/spacing.css";
import { app } from "@storybook/vue3";
import { RahmetToastPlugin } from "rahmet-ui";

app.use(RahmetToastPlugin);

export const decorators = [
    (story) => ({
        components: { story },
        template: '<div class="container"><story /></div>',
    }),
];
