import React, { useState, useEffect } from "react"
import { PromptContainer, BtnWrapper, Warn } from "./style"
import { Button } from "components/atoms/button"
import styled from "styled-components"

const Input = styled.input``

const PromptAction = ({
  onClick,
  closePrompt,
  setPromptState,
  loadDelete,
  placeHolder,
  textName,
}) => {
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setPromptState(state => ({ ...state, inputValue: inputValue }))
  }, [inputValue])

  return (
    <PromptContainer>
      <h3>Are you sure?</h3>
      <p>
        Confirm that you want delete this {textName} permanently by typing its{" "}
        {placeHolder}
      </p>
      <Input
        type="text"
        placeholder={placeHolder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        prompt="center"
      />
      <Warn>Check the value carefully.</Warn>
      <BtnWrapper>
        <Button
          spinnerOn={loadDelete ? true : false}
          onClick={onClick}
          bgColor="warning"
        >
          Confirm
        </Button>
        <Button bgColor="secondary" onClick={closePrompt}>
          Cancel
        </Button>
      </BtnWrapper>
    </PromptContainer>
  )
}

export default PromptAction
