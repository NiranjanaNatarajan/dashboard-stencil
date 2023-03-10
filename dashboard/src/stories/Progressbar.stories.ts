import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProgressBarComponent } from '../app/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Angular Material/Progressbar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule],
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const Determinate = Template.bind({});
Determinate.args = {
  mode: 'determinate',
  value: 35,
  color: 'primary',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  mode: 'indeterminate',
  color: "accent"
};

export const Buffer = Template.bind({});
Buffer.args = {
  mode: 'buffer',
  value: 35,
  bufferValue: 65,
  color: "warn"
};

export const Query = Template.bind({});
Query.args = {
  mode: 'query',
  color: "warn"
};