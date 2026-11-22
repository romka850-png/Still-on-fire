
const SPOTIFY_URL = "https://open.spotify.com/track/6zlc8woncpNRYhOBQUgMuT?si=YZuPs3W_R8qEb3d00TwemA&utm_source=copy-link";

export default async (request: Request) => {
  const url = new URL(request.url);
  const ua = request.headers.get("user-agent") || "";

  if (url.pathname === "/cover.jpg") {
    return fetch(new URL("/cover.jpg", url.origin));
  }

  const isPreviewBot = /WhatsApp|facebookexternalhit|Facebot|Twitterbot|TelegramBot|Slackbot|Discordbot|LinkedInBot|Pinterest/i.test(ua);

  if (isPreviewBot) {
    const html = `<!doctype html><html><head>
      <meta charset="utf-8">
      <meta property="og:title" content="Still On Fire — Friends and Family">
      <meta property="og:description" content="A special birthday song for Steven">
      <meta property="og:image" content="${url.origin}/cover.jpg">
      <meta property="og:image:width" content="1254">
      <meta property="og:image:height" content="1254">
    </head><body>Still On Fire</body></html>`;
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }

  return Response.redirect(SPOTIFY_URL, 302);
};
