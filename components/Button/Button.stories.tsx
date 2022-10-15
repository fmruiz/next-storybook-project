import React from 'react';
import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Controls/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
    children: 'Button',
};
