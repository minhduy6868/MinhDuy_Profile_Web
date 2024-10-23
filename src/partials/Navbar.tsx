import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo name="Minh Duy's Blog">
          <img
            className="h-80 w-64"
            src="/assets/images/avatar-no-background.png"
            alt="Avatar image"
            loading="lazy"
          />
        </Logo>
      </a>

      <NavMenu>
        <NavMenuItem href="#">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/minhduy6868">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.facebook.com/duy.nguyenminh.56679/">Facebook</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
