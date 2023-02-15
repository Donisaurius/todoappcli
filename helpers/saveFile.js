import fs from "fs";

const file = "./db/data.json";
export const saveFile = (data) => {
  fs.writeFileSync(file, data);
};

export const readDb = () => {
  if (!fs.existsSync(file)) return null;

  const info = fs.readFileSync(file, { encoding: "utf-8" });

  return JSON.parse(info);
};
