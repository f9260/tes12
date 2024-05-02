// components/LoopingVideo.js

import styles from '../ekle/stil.module.css'; // CSS dosyasını ekleyin

const LoopingVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="C:\Users\Onur\Desktop\python\nodejs\docs\nextra-docs-template\ekle\introduction.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default LoopingVideo;