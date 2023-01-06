import { Story, Meta } from '@storybook/angular/types-6-0';
import { ComboBoxComponent } from 'src/app/combo-box/combo-box.component';

export default {
  title: 'Combo-Box',
  component: ComboBoxComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ComboBoxComponent> = (args: ComboBoxComponent) => ({
  props: args,
});

export const combobox = Template.bind({});
combobox.args = {
    flag: false,
    inputItem: 'ju',
    listHidden: true,
    selectedIndex: -1,
    showError: false,
    filteredList: 
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//   flag: true,
//   aValue: 4,
//   bValue: 3,
//   btnName: 'Multiplication of two numbers',
};

// export const Addition = Template.bind({});
// Addition.args = {
//   flag: false,
//   aValue: 4,
//   bValue: 3,
//   btnName: 'Addition of two numbers',
// };

// export const Subtraction = Template.bind({});
// Subtraction.args = {
//   flag: undefined,
//   aValue: 4,
//   bValue: 3,
//   btnName: 'Subtraction of two numbers'
// }