import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
   
     <HeroAvatar
      title={
        <>
           <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&vCenter=true&width=500&color=black&height=70&duration=4000&lines=Hi+There!+👋;+I'm+MinhDuyy+-+MobileDev;" />
        </>
      }
      description={
        <>
         I'm  {' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Minh Duy
          </a>{' '}
          - Mobile developer from Da Nang - VietNam. {' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Flutter famework 
          </a>{' '}
          is a favorite framework - it's cross platform
        </>
      }
      avatar={
        <img
          className="h-150 w-100"
          src="/assets/images/minhduyfullanime.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.facebook.com/duy.nguyenminh.56679/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
