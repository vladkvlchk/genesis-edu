import React from "react";
import ReactPlayer from "react-player";

import styles from "./Video.module.scss";

const Video: React.FC<any> = ({ url, preview }) => {
  const [playbackRate, setPlaybackRate] = React.useState<number>(1);

  const onSpeedDown = () => {
    if (playbackRate > 0.2) {
      setPlaybackRate(Math.floor((playbackRate - 0.1) * 10) / 10);
    }
  };

  const onSpeedUp = () => {
    if (playbackRate < 3) {
      setPlaybackRate(Math.floor((playbackRate + 0.1) * 10) / 10);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowDown") {
      onSpeedDown();
    } else if (event.key === "ArrowUp") {
      onSpeedUp();
    }
  };

  return (
    <div className={styles.player}>
      <ReactPlayer
        url={url}
        controls={true}
        playing={false}
        pip={true}
        light={preview}
        width={"100%"}
        height={"100%"}
        playbackRate={playbackRate}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Video;
