import { useState } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  leftArrow: string;
  rightArrow: string;
};

function Title({ text, leftArrow, rightArrow }: Props) {
  const [index, setIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setIndex((prev) => prev - 1);
  };

  const handleRightArrowClick = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <>
      <span>{text}</span>
      <ArrowWrapper className="arrow">
        <div>
          <Button
          className="prev-btn"
            index={index}
            disabled={index <= 0}
            onClick={handleLeftArrowClick}
          >
            <img src={leftArrow} alt="" />
          </Button>
        </div>
        <div>
          <Button
          className="next-btn"
            disabled={index === 2}
            onClick={handleRightArrowClick}
            index={index}
          >
            <img src={rightArrow} alt="" />
          </Button>
        </div>
      </ArrowWrapper>
    </>
  );
}

const ArrowWrapper = styled.div`
  display: flex;

  & div {
    padding: 0 5px;
  }

  & button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

const Button = styled.button<{ index: number }>`
    &.next-btn{
        opacity: ${(props) => (props.index > 1 ? "0.5" : "1")};
    }
    &.prev-btn{
        opacity: ${(props) => (props.index <= 0 ? "0.5" : "1")};
    }
`;

export default Title;
