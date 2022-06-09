import { Meta, Story } from "@storybook/react";
import SearchInput, { SearchInputProps } from "../SearchInput";

export default {
    title: "Components/SearchInput",
    component: SearchInput
} as Meta;

const Template: Story<SearchInputProps> = (args) => {
    return <SearchInput />;
};

export const Base = Template.bind({});
Base.args = {};
