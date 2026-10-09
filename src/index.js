export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "SpeakAll AI Gateway"
      });
    }

    return Response.json(
      {
        ok: false,
        message: "SpeakAll AI Gateway is running."
      },
      { status: 404 }
    );
  }
};
