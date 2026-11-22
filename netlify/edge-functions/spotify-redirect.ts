const SPOTIFY_URL = "https://open.spotify.com/track/6zlc8woncpNRYhOBQUgMuT?si=YZuPs3W_R8qEb3d00TwemA&utm_source=copy-link";

export default async (request: Request, context: any) => {
  const ua = request.headers.get("user-agent") || "";
  const isPreviewBot =
    /WhatsApp|facebookexternalhit|Facebot|Twitterbot|TelegramBot|Slackbot|Discordbot|LinkedInBot|Pinterest/i.test(ua);

  if (isPreviewBot) {
    const origin = new URL(request.url).origin;
    const html = `<!doctype html><html><head><meta charset="utf-8">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Still On Fire — Family and Friends">
      <meta property="og:description" content="A special birthday song for Steven.">
      <meta property="og:image" content="${origin}/cover.jpg">
      <meta property="og:image:alt" content="Still On Fire — Family and Friends">
      <meta name="twitter:card" content="summary_large_image">
      </head><body>Still On Fire</body></html>`;
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" }
    });
  }

  return Response.redirect(SPOTIFY_URL, 302);
};
