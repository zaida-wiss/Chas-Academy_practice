import "./ProfileCard.css"
import {ProfileCardProps} from "../../types"

export default function ProfileCard({
  name= "namn",
  title="titel",
  description="beskrivning",
  imageUrl="bildlänk"
}:ProfileCardProps) {
  return(
    <section>
      <img
        className="profileImage"
        src={imageUrl}
        alt={`Bild på ${name}`}
        loading= "lazy"
        style={{maxWidth: "200px", height: "auto"}}
        />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
