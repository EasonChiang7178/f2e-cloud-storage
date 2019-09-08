import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "./GlobalStyles";

import Content from "./Content";
import Searchbar from "./Searchbar";
import { PageContainer, Sidebar, ContentContainer } from "./index.css";

const Layout = ({ children }) => (
  <>
    <GlobalStyles />

    <PageContainer>
      <Sidebar />

      <ContentContainer>
        <Searchbar />

        <Content>
          {children}
        </Content>
      </ContentContainer>
    </PageContainer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
