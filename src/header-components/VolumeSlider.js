import VolumeBtn from '../images/VolumeBtn.png';

export default function VolumeSlider() {
  return (
    <div>
        <img src={VolumeBtn}/>
        <input type="range" min="0" max="100" value="50" step="1"/>
    </div>
  );
}
