import { useState } from "react";
import { Container } from "./styles.js"
import { Button } from "../../components/button"
import { FaTree, FaFire, FaWind   } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import treeSoundFile from "../../assets/forestSound.wav"
import fireSoundFile from "../../assets/campfire-1.mp3"
import windSoundFile from "../../assets/wind-gust-01.mp3"
import wavesSoundFile from "../../assets/ocean-wave-1.mp3"
const treeSound = new Audio(treeSoundFile)
const fireSound = new Audio(fireSoundFile)
const windSound = new Audio(windSoundFile)
const wavesSound = new Audio(wavesSoundFile)
treeSound.loop = true
fireSound.loop = true
windSound.loop = true
wavesSound.loop = true

export function Controls() {

  const [forestSoundOn, setForestSoundOn] = useState("")
  const [fireSoundOn, setFireSoundOn] = useState("")
  const [windSoundOn, setWindSoundOn] = useState("")
  const [wavesSoundOn, setWavesSoundOn] = useState("")
  

  function toggleForest() {
    if(!treeSound.paused){
      setForestSoundOn("")
      treeSound.pause()
      return
    }
    setForestSoundOn("soundOn")
    treeSound.play();
  }

  function toggleFire() {
    if(!fireSound.paused){
      setFireSoundOn("")
      fireSound.pause()
      return
    }
    setFireSoundOn("soundOn")
    fireSound.play();
  } 
  
  function toggleWind() {
    if(!windSound.paused){
      setWindSoundOn("")
      windSound.pause()
      return
    }
    setWindSoundOn("soundOn")
    windSound.play();
  }
  
  function toggleWaves() {
    if(!wavesSound.paused){
      setWavesSoundOn("")
      wavesSound.pause()
      return
    }
    setWavesSoundOn("soundOn")
    wavesSound.play();
  }

  function wavesVolume() {
    wavesSound.volume = 0.1
  }
  

  return (
    <Container>
      <Button icon={FaTree} onClick={toggleForest} className={forestSoundOn} />
      <Button icon={FaFire} onClick={toggleFire} className={fireSoundOn} />
      <Button icon={FaWind} onClick={toggleWind} className={windSoundOn} />
      <Button icon={LuWaves} onClick={toggleWaves} className={wavesSoundOn} />
    </Container>
  )
}