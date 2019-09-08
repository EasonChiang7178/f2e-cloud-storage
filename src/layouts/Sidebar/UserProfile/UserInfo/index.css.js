import styled from "styled-components"
import Image from "gatsby-image"

export const Wrapper = styled.div`
  display: flex;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Avatar} + & {
    margin-left: 15px;
  }
`

export const Name = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  font-family: "PT Sans";
`

export const Role = styled.div`
  font-size: 18px;
  font-family: "PT Sans";

  ${Name} + & {
    margin-top: 4px;
  }
`
