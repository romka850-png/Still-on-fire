
const SPOTIFY_URL =
  "https://open.spotify.com/track/6zlc8woncpNRYhOBQUgMuT?si=YZuPs3W_R8qEb3d00TwemA&utm_source=copy-link";

export default async (request: Request) => {
  const url = new URL(request.url);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Still On Fire — Friends and Family</title>
  <meta name="description" content="A special birthday song. Listen on Spotify.">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Still On Fire — Friends and Family">
  <meta property="og:description" content="Tap the cover to listen on Spotify.">
  <meta property="og:image" content="${url.origin}/cover.jpg">
  <meta property="og:image:width" content="1254">
  <meta property="og:image:height" content="1254">
  <meta property="og:image:alt" content="Still On Fire">

  <meta name="twitter:card" content="summary_large_image">

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: #111;
      color: white;
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    a {
      display: block;
      width: 100%;
      max-width: 500px;
      text-decoration: none;
      color: white;
      text-align: center;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 12px;
    }

    p {
      font-size: 17px;
      margin-top: 22px;
    }
  </style>
</head>

<body>
  <a href="${SPOTIFY_URL}">
    <img src="/cover.jpg" alt="Still On Fire — Friends and Family">
    <p>▶ TAP THE COVER TO LISTEN ON SPOTIFY</p>
  </a>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-cache"
    }
  });
};

