import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const CardCarousel2 = () => (
   
  
      <Section 
      title={
        <>
          List mini <GradientText>Projects</GradientText>
        </>
      }
      >
       <div>
       <Project name='Hello' description='Aloooo' 
        img={{ src: '/assets/images/addfolder.png', alt: 'Project Maps' }}
        link=''
        category
        />
       </div>

      
     

      </Section>

        );  

export {CardCarousel2};
