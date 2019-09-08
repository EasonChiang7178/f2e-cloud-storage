import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Wrapper, Avatar, InfoWrapper, Name, Role } from "./index.css"

const UserInfo = ({ className, userName, userRole, avatarImageData }) => {
  return (
    <Wrapper className={className}>
      <Avatar fixed={avatarImageData} />

      <InfoWrapper>
        <Name>{userName}</Name>
        <Role>{userRole}</Role>
      </InfoWrapper>
    </Wrapper>
  )
}

UserInfo.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string,
  userRole: PropTypes.string,
  avatarImageData: PropTypes.object
}


const UserInfoContainer = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <UserInfo
      className={className}
      userName="Jennifer"
      userRole="User"
      avatarImageData={data.avatar.childImageSharp.fixed}
    />
  )
}


export default UserInfoContainer
