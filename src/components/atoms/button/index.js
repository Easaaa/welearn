import React from "react"
import { Btn, SpinnerContainer } from "./style"

export const Button = ({
  spinnerOn,
  children,
  type,
  width,
  height,
  onClick,
  bgColor,
  color,
}) => {
  return (
    <Btn
      type={type ? type : "submit"}
      width={width ? width : null}
      height={height ? height : null}
      bgColor={bgColor ? bgColor : null}
      color={color ? color : null}
      onClick={onClick}
    >
      {spinnerOn === true ? (
        <SpinnerContainer>
          <div></div>
        </SpinnerContainer>
      ) : (
        children
      )}
    </Btn>
  )
}
