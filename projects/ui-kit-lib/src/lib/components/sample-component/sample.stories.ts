import { Meta, Story } from '@storybook/angular';
import { SampleComponent } from './sample.component';

export default {
  title: 'Sample Ui Kit Library/Sample Component',
  component: SampleComponent,
} as Meta;

const Template: Story<SampleComponent> = (args: SampleComponent) => ({
  props: args,
});

export const Sample = Template.bind({});
Sample.args = {
  label: 'Sample Heading',
};
