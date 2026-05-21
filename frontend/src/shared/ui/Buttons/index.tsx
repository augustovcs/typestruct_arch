// @ts-ignore
import "./style.css"

type GlowButtonProps = {
  text: string;
  onClick?: () => void;
};

export function GlowButton({text, onClick}: GlowButtonProps) {
  
  return (
    <button className="glow-button" onClick={onClick}>
      <span className="glow-overlay"></span>
      <span className="shine"></span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default GlowButton;