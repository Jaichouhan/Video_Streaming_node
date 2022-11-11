const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  const range = req.header.range;
  const videoPath =
    "./Online-Class-Funny-WhatsApp-status-Tom-And-Jerry-Cartoon-Video-Status.mp4";
  const videoSize = fs.statSync(videoPath).size;
  const chunkSize = 1 * 1e6;
  const start = Number.range(range.replace(/\D/g, ""));

  const end = Math.min(start + chunkSize, videoSize - 1);

  const contentLength = end - start + 1;
  const header = {
    "Content-range": `bytes${start} - ${end}/${vdie}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-type": "video/mp4",
  };
  res.writeHead(206, header);
  const stream = fs.createWriteStream(videoPath, { start, end });
  stream.pipe(res);
});

app.listen(4050, () => {
  console.log(`http://localhost:${4050}`);
});
