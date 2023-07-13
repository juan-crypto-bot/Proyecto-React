import { Player } from "@lottiefiles/react-lottie-player";

function Loader() {
  return (
    <>
      <Player
        src="https://lottie.host/20f2fe01-65f1-4caa-9c3e-a3a69dba81d4/5KNh1zkUab.json"
        className="player"
        loop
        autoplay
        speed={2.2}
        style={{ width: "50%", height: "auto" }}
      />
    </>
  );
}

export default Loader;
