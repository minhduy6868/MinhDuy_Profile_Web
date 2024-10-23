import { Section } from 'astro-boilerplate-components';

const Sponsors = () => (
  <Section title="Language, framework and tool">
   
    <img src="https://skillicons.dev/icons?i=java,dart,flutter,vue,react " />
    <div className='mb-5'></div>
    <img src="https://skillicons.dev/icons?i=mysql,firebase,postgres" />
    <div className='mb-5'></div>
    <img src="https://skillicons.dev/icons?i=github,gitlab,figma,postman,linux" />
  </Section>
);

export { Sponsors };
