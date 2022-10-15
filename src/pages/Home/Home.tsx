import { WavyLink } from "react-wavy-transitions";

export const Home = () => {
  return (
    <div className='home'>
      <nav>
        <div className="link-containers">
          <WavyLink to="/bottenviken" color="#006eff">
            Bottenviken
          </WavyLink>
        </div>
        <div className="link-containers">
          <WavyLink to="/bottenhavet" color="#006eff">
            Bottenhavet
          </WavyLink>
        </div>
      </nav>
    </div>
  )
}
