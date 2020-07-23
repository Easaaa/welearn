import styled from "styled-components"

export const ProfileContainer = styled.section`
  max-width: 1000px;
  margin: var(--space-md) auto;
  padding: var(--space-xl) 0;
  background-color: var(--darkCleanBlack);
  border-radius: 10px;

  header {
    max-width: 760px;
    margin: 0 auto;
  }

  h3  {
    color: var(--orange);
  }

  h5 {
    font-weight: 400;
  }

  form {
    padding: var(--space-md);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--space-md);
    max-width: 800px;
    margin: 0 auto;

    label {
      font-weight: 600;
      position: relative;
      height: 67px;

      i {
        position: absolute;
        width: 15px;
        height: 15px;
        top: 50%;
        margin-top: 4px;
        right: 20px;
      }
    }

    input {
      background-color: var(--cleanBlack);
      border: none;
      color: var(--main-white);
      height: 45px;
      width: 100%;
      border-radius: 10px;
      padding: 0 var(--space-md);
      font-weight: 300;
    }
  }
`
