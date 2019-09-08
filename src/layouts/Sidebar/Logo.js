import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image"

const Logo = ({ className, imageData }) => {
  return (
    <Link to="/" className={className}>
      <Image fixed={imageData.logo.childImageSharp.fixed} />
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  imageData: PropTypes.object.isRequired
}


const LogoContainer = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 127, height: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return <Logo className={className} imageData={data} />
}


export default LogoContainer;
