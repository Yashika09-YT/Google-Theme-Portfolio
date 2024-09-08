import { useContext } from "react";
import TitleDesc from "../components/TitleDesc";
import { MapContainer } from "../styles/Map.styled";
import { ThemeContext } from "./_app";

const Map = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <TitleDesc
        title="Yashika's Location"
        desc="Here mentioned location of Yashika."
      />
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/"
          width="100%"
          height="450"
          style={{ border: "0px", ...(darkMode && { filter: "invert(90%)" }) }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </div>
  );
};
export default Map;
