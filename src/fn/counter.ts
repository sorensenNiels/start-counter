import * as fs from "node:fs";
import { createServerFn } from "@tanstack/react-start";

const filePath = "data/count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
  );
}

const getCount = createServerFn({ method: "GET" }).handler(() => {
  return readCount();
});

const updateCount = createServerFn({ method: "POST" })
  .validator((addBy: number) => addBy)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export { getCount, updateCount };
