import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import logo from "../../src/assets/rahmet.svg";

const theme = create({
    brandTitle: "Рахмет UI Компоненты",
    brandImage: logo,
});

addons.setConfig({
    theme: theme,
});
