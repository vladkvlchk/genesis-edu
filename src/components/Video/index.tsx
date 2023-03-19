import React from "react";
import ReactPlayer from "react-player";
import { SpeedContext } from "../../App";

import styles from "./Video.module.scss";

const Video: React.FC<any> = ({ url, preview, muted = false, controls = true }) => {
  const speed = React.useContext(SpeedContext)
  const ref = React.useRef(null);

  const focusItself = () => {
    ref.current.focus();
    console.log('focus')
  }

  return (
    <div ref={ref} className={styles.player}>
      <ReactPlayer
        url={url}
        controls={controls}
        playing={true}
        pip={true}
        // light={preview}
        width={"100%"}
        height={"100%"}
        playbackRate={speed.value}
        onPlay={() => focusItself()}
        onStart={() => console.log('start')}
        muted={muted}
      />
    </div>
  );
};

export default Video;
