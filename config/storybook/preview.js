import "../../src/assets/styles/global.css";
import "../../src/assets/styles/spacing.css";

export const decorators = [
    (story) => ({
        components: { story },
        template: '<div class="container"><story /></div>',
    }),
];
