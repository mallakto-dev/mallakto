<template>
  <footer>
    <LogoBox />
    <address>
      <ContactDetails />
    </address>
    <SocialLinks />
  </footer>
</template>

<style scoped>
 footer {
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  background-color: rgb(244 185 169 / 35%);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
 }

 address {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 60%;
  text-align: center;
  line-height: 1.5;
  font-style: normal;

  & a {
    text-decoration: none;
    color: #004530;
    cursor: pointer;
  }

  & a:visited {
    color: #004530;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
}
</style>