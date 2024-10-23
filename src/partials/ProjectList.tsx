import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1 - Music app"
        description="Use cubit to state manement, restfull APi, using firebase and realtime "
        link="/"
        img={{
          src: '/assets/images/addfolder.png',
          alt: 'Music app',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Flutter</Tags>
            <Tags color={ColorTags.LIME}>Firebase</Tags>
            <Tags color={ColorTags.SKY}>Dart</Tags>
          </>
        }
      />
      <Project
        name="Project 1 - Cooking tutorial web"
        description="Use vue - fe, lavarel - be"
        link="/"
        img={{
          src: '/assets/images/addfolder.png',
          alt: 'Cooking tutorial web',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Vue</Tags>
            <Tags color={ColorTags.LIME}>lavarel</Tags>
            <Tags color={ColorTags.SKY}>MySql</Tags>
          </>
        }
      />
      <Project
        name="Project 2 - Love App"
        description="This appp is help the couple have more happy and never forget memory day "
        link="/"
        img={{ src: '/assets/images/addfolder.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Flutter</Tags>
            <Tags color={ColorTags.EMERALD}>Firebase</Tags>
            <Tags color={ColorTags.YELLOW}>Springboot</Tags>
          </>
        }
      />
      <Project
        name="Fix bug Asap - VJ technologies "
        description="State management is GetX - flutter"
        link="/"
        img={{ src: '/assets/images/addfolder.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Flutter</Tags>
            <Tags color={ColorTags.INDIGO}>Firebase</Tags>
            <Tags color={ColorTags.ROSE}>native code</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
