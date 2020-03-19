/* eslint-disable import/no-extraneous-dependencies */
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */
import ProjectCard from '../components/Cards/ProjectCard';

export default {
  title: 'Cards',
  decorators: [withKnobs],
};

export const projectCard = () => ({
  render() {
    return (
      <ProjectCard
        title={text('Title', 'Card Title')}
        description={text('Description', 'Card Description')}
      />
    );
  },
});
