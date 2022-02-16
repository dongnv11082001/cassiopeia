
type Props = {
  text: string;
  leftArrow: string;
  rightArrow: string;
};

function Title({ text, leftArrow, rightArrow }: Props) {
  return (
    <>
      <span>{text}</span>
      <div className="arrow">
        <img src={leftArrow} alt="" />
        <img src={rightArrow} alt="" />
      </div>
    </>
  );
}

export default Title;
