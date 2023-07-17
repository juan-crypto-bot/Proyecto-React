import { Player } from "@lottiefiles/react-lottie-player";

function Loader() {
  return (
    <>
      <Player
        src="https://lottie.host/3e5cd116-943b-4032-bc26-4ccaa6b89d37/kzUUsqzUaf.json"
        className="player"
        loop
        autoplay
        speed={1}
        style={{ width: "50%", height: "auto" }}
      />
    </>
  );
}

export default Loader;
