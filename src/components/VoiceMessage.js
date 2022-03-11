import { Howl, Howler } from "howler";
import welcome from "../sounds/Welcome message.m4a";

function VoiceMessage() {
    
    const sound = new Howl({ src: welcome });
    Howler.volume(0.5)
    sound.play();

    return <></>
}

export default VoiceMessage;
