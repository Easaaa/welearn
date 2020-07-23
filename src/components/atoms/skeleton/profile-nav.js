import React from "react"
import Skeleton from "react-loading-skeleton"
import { SkeletonContainerNavProfile } from "./style"

const skelStyle = {
  borderRadius: "10px",
  backgroundImage: "linear-gradient( 90deg,#2e2f3e,#2a2c38,#2e2f3e )",
  backgroundColor: "var(--darkCleanBlack)",
}

export const SkeletonProfileNav = ({ count }) => (
  <SkeletonContainerNavProfile>
    <div>
      <Skeleton circle={true} height={50} width={50} style={skelStyle} />
    </div>
    <div>
      <Skeleton height={15} width={80} style={skelStyle} />
      <Skeleton height={10} width={40} style={skelStyle} />
    </div>
  </SkeletonContainerNavProfile>
)
