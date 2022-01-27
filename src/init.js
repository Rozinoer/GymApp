import { DB } from "./db";

export async function init() {
  try {
    await DB.init();
    // await DB.delete()
    console.log("Database started..");
  } catch (e) {
    console.log(e);
  }
}
