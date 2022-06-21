import * as Font from "expo-font";

export async function init() {
  try {
    await Font.loadAsync({
      Montserrat: require("/Users/evgenii/Desktop/GymApp/assets/fonts/Montserrat/static/Montserrat-Black.ttf"),
    });
    // await DB.delete()
  } catch (e) {
    console.log(e);
  }
}
