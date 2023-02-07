import Prodacts from "../../Prodacts/Prodacts"

export default function Favorite() {
  return (
    <Prodacts 
      nameTitle="Favorite products"
      bottonStatue={ false }
      bottonTitleStatue={ true }
      displayNumber={ 8 }
      pagination={ true }
    />
  )
}