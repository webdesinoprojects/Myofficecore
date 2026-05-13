import { Resend } from "resend";

type FormBody = {
  name?: string;
  email?: string;
  phone?: string;
  queryType?: string;
  message?: string;
};

type RequestContext = {
  request: Request;
  env: {
    RESEND_API_KEY: string;
    TO_SEND: string;
  };
};

export async function onRequestPost({ request, env }: RequestContext) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > 1000) {
    return new Response(JSON.stringify({ message: "Details too large" }), {
      status: 413,
    });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ message: "Invalid content type" }), {
      status: 415,
    });
  }

  let body: FormBody;
  try {
    body = (await request.json()) as FormBody;
  } catch {
    return new Response(JSON.stringify({ message: "Invalid JSON body" }), {
      status: 400,
    });
  }

  if (!body.name || body.name.length > 50) {
    return new Response(JSON.stringify({ message: "Name too long" }), {
      status: 400,
    });
  }

  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return new Response(JSON.stringify({ message: "Invalid email" }), {
      status: 400,
    });
  }

  if (body.message && body.message.length > 200) {
    return new Response(JSON.stringify({ message: "Message too long" }), {
      status: 400,
    });
  }

  const resend = new Resend(env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      to: env.TO_SEND,
      from: "onboarding@resend.dev",
      subject: `New Enquiry from ${body.name}`,
      html: `<p>Hey MyCoreOffice, You have a new enquiry:</p>
       <p> Name: ${body.name}</p>
       <p> Email: ${body.email}</p>
        <p>Phone:${body.phone ?? ""}</p>
       <p> Query:${body.queryType ?? ""}</p>
      <p>  Message: ${body.message ?? ""}</p>
        `,
    });

    return new Response(JSON.stringify({ ok: true, message: "good" }));
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Failed to send email",
      }),
      { status: 500 }
    );
  }
}
