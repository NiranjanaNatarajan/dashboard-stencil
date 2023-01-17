import { Story, Meta } from '@storybook/angular/types-6-0';
import { DragDropComponent } from 'src/app/drag-drop/drag-drop.component';

export default {
    title: 'Drag&Drop',
    component: DragDropComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<DragDropComponent> = (args: DragDropComponent) => ({
    props: args,
});

export const BoxOne = Template.bind({});
BoxOne.args = {
    header: 'Number One',
    header1: 'Number Two',
    color: 'blue',
};
export const BoxTwo = Template.bind({});
BoxTwo.args = {
    header: 'Number One',
    header1: 'Number Two',
    color: 'green',
};