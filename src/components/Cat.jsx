import { useEffect, useState } from "react"
import { View, Text, Image, Button } from "react-native"

const catMoods = {
  sadCat: "https://www.pngmart.com/files/22/Sad-Cat-Meme-PNG-HD.png",
  okCat: "https://www.pngmart.com/files/22/Sad-Cat-Meme-Download-PNG-Image.png",
  happyCat: "https://i.imgflip.com/1rpfag.jpg",
}

const Cat = () => {
  const initialMood = catMoods.sadCat

  const [whichCatMood, setWhichCatMood] = useState(initialMood)
  const [count, setCount] = useState(0)

  const updateMood = () => {
    if (count === 0) {
      setWhichCatMood(catMoods.sadCat)
    } else if (count >= 1 && count <= 4) {
      setWhichCatMood(catMoods.okCat)
    } else if (count >= 5) {
      setWhichCatMood(catMoods.happyCat)
    }
  }

  const updateCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    updateMood()
  }, [count])

  const resetMood = () => {
    setCount(0)
    setWhichCatMood(initialMood)
  }

  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 500, textAlign: "center" }}>
        Times petted: {count}
      </Text>
      <Image
        source={{ uri: whichCatMood }}
        style={{ width: 200, height: 200 }}
      />
      <Button title="Pet Cat" onPress={updateCount} />
      <Button title="Reset Mood" onPress={resetMood} />
    </View>
  )
}

export default Cat
