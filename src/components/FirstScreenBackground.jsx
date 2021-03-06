import React from "react";

import { smokeMp4, smokeWebM } from "../assets/media";

const Background = () => {
  return (
    <div className="bg__video">
      <video autoPlay muted loop>
        <source
          src={smokeMp4}
          type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'"
        />
        <source src={smokeWebM} type="video/webm; codecs='vp8, vorbis'" />
        Тег video не поддерживается вашим браузером.
        <a href="../assets/media/video.mp4">Скачайте видео</a>.
      </video>
    </div>
  );
};

export default Background;
