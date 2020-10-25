import React from "react"
import Skeleton from "react-loading-skeleton"
import { CardContainer } from "./style"

const skelStyle = {
  borderRadius: "10px",
  backgroundImage:
    "linear-gradient(90deg, rgb(0, 4, 19), rgb(5, 12, 30), rgb(0, 4, 19))",
  backgroundColor: "var(--primary800)",
  margin: "0 auto",
}

const skelStyleDarker = {
  borderRadius: "10px",
  backgroundImage:
    "linear-gradient(90deg, rgb(5, 12, 30), rgb(8, 19, 48), rgb(5, 12, 30))",
  backgroundColor: "var(--primary800)",
}

export const SkeletonCard = ({ count }) => (
  <CardContainer>
    <h1>
      <Skeleton height={50} width={100} style={skelStyleDarker} />
    </h1>
    <Skeleton height={"95%"} width={"95%"} style={skelStyle} />
    {/* <h3>
      <Skeleton height={50} width={100} style={skelStyle} />
      <Skeleton height={15} width={70} style={skelStyle} />
    </h3>
    <div>
      <Skeleton height={10} width={100} style={skelStyle} />
      <Skeleton height={20} width={15} style={skelStyle} />
    </div> */}
  </CardContainer>
)
