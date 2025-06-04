import GraphemeSplitter from 'grapheme-splitter'; // npm i grapheme-splitter
import { TypeAnimation } from "react-type-animation";

const splitter = new GraphemeSplitter();

const TypingAnim = () => {
    return (
    <TypeAnimation
  splitter={(str) => splitter.splitGraphemes(str)}
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Chat with your own AI',
    1000,
    'Built with OpenAI 🤖',
    1000,
    'Your Own CUSTOMIZED CHATGPT 🦾',
    2000,
    'Search up ANYTHING your heart desires 🔥',
    1500,
  ]}
  speed={50}
  style={{ 
    fontSize: '60px', 
    color:"white", 
    display: "inline-block", 
    textShadow:"px 1px 20px #000" }}
  repeat={Infinity}
/>
    );
};



export default TypingAnim;