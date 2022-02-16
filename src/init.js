import * as Font from "expo-font";
import { DB } from "./db";


export async function init() {
  try {
    await DB.init();
    await Font.loadAsync({
      Montserrat: require("/Users/evgenii/Desktop/GymApp/assets/fonts/Montserrat/static/Montserrat-Black.ttf"),
    });
    // await DB.delete()
    console.log("Database create..");
  } catch (e) {
    console.log(e);
  }
}
