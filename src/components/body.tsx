import React, { ReactNode } from "react"

import styled from "@emotion/styled"

const BodyContainer = styled.div({
  flexGrow: 0,
  flexShrink: 0,
})

interface BodyProps {
  children: ReactNode
}

const Body = ({ children }: BodyProps) => (
  <BodyContainer>
    {children}
  </BodyContainer>
)

export default Body
