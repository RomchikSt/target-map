import styled from "styled-components";

const CheckboxWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  .checkbox__label {
    width: 1.4rem;
    margin-right: calc(1.4rem * 0.45);
    position: relative;
    display: flex;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:before {
      content: " ";
      display: block;
      height: 1.4rem;
      width: 1.4rem;
      position: absolute;
      top: calc(1.4rem * 0.125);
      left: 0;
      background: #f2f2f2;
    }

    &:after {
      content: " ";
      display: block;
      height: 1.4rem;
      width: 1.4rem;
      border: calc(1.4rem * 0.14) solid #000;
      transition: all 0.3s ease-in-out;
      position: absolute;
      top: calc(6rem * 0.125);
      left: 0;
      background: #f2f2f2;

      &:hover,
      &:active {
        border-color: #111111;
      }
    }
  }

  input:checked ~ .checkbox__label:after {
    border-top-style: none;
    border-right-style: none;
    transform: rotate(-45deg);
    height: calc(1.4rem * 0.5);
    border-color: #111111;
  }
`;

type CheckBoxProps = {
  onChange: () => void;
  isChecked: boolean;
};

function CheckBox({ onChange, isChecked }: CheckBoxProps) {
  return (
    <CheckboxWrapper>
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkbox__input"
          onChange={onChange}
          checked={isChecked}
        />
        <span className="checkbox__label"></span>
      </label>
    </CheckboxWrapper>
  );
}

export default CheckBox;
