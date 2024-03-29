import React from "react";
import { Link } from "gatsby";
import { Seo } from "../../components/Seo";
import styled from "styled-components";

const StyledSection = styled.section`
  margin: 6rem 2rem;
  color: #004530;
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const SubmittedPage = () => {
  return (
    <StyledSection>
      <Seo title="Спасибо за заказ!| Mallakto" />
      <h1>Ваш заказ был успешно отправлен!</h1>
      <StyledParagraph>Мы свяжемся с вами в ближайшее время.</StyledParagraph>
      <Link to="/"> На главную </Link>
    </StyledSection>
  );
};

export default SubmittedPage;
