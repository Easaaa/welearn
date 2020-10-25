import styled from "styled-components"

export const ToggleContainer = styled.button`
  background-color: var(--primary800);
  border: none;
  font-size: var(--font-4);
  width: 150px;
  height: 45px;
  border-radius: 10px;
  color: var(--secondary800);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;

  box-shadow: var(--shadow-xs);

  ${({ active }) =>
    active &&
    `
 
    box-shadow: var(--shadow-xs);
  `}

  svg {
    margin-right: var(--space-xs);
  }
`

// export const Switch = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 50px;
//   height: 28px;

//   input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//     outline: none;
//   }

//   .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     box-shadow: var(--shadow-lightBlack);
//     transition: 0.4s;
//     outline: none;
//   }

//   ${({ filterState }) =>
//     filterState === false
//       ? `.slider:before { box-shadow: var(--shadow-lightBlack)} `
//       : `.slider:before { box-shadow: var(--shadow-lightBlack-inset)}`}

//   .slider:before {
//     position: absolute;
//     content: "";
//     height: 20px;
//     width: 20px;
//     left: 4px;
//     bottom: 4px;
//     -webkit-transition: 0.4s;
//     transition: 200ms;
//   }

//   input:checked + .slider {
//     box-shadow: var(--shadow-lightBlack-inset);
//   }

//   input:checked + .slider:before {
//     transform: translateX(20px);
//   }

//   /* Rounded sliders */
//   .slider.round {
//     border-radius: 10px;
//   }

//   .slider.round:before {
//     border-radius: 10px;
//   }
// `
