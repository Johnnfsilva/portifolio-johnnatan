
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendCodeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SendCodeRequest = await req.json();
    
    // Gerar código de 6 dígitos
    const code = Math.random().toString().slice(2, 8);
    
    // Calcular tempo de expiração (15 minutos)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
    
    // Criar cliente Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Invalidar códigos anteriores do mesmo email
    await supabase
      .from("admin_auth_codes")
      .update({ used: true })
      .eq("email", email)
      .eq("used", false);

    // Inserir novo código
    const { error: insertError } = await supabase
      .from("admin_auth_codes")
      .insert({
        email,
        code,
        expires_at: expiresAt.toISOString(),
      });

    if (insertError) {
      throw insertError;
    }

    // Enviar email
    const emailResponse = await resend.emails.send({
      from: "Admin <onboarding@resend.dev>",
      to: [email],
      subject: "Código de Acesso - Painel Administrativo",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Código de Acesso</h1>
          <p>Seu código de acesso ao painel administrativo é:</p>
          <div style="background: #f4f4f4; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px;">
            <h2 style="color: #2563eb; font-size: 32px; margin: 0; letter-spacing: 8px;">${code}</h2>
          </div>
          <p style="color: #666;">Este código expira em 15 minutos.</p>
          <p style="color: #666;">Se você não solicitou este código, pode ignorar este email.</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Código enviado com sucesso" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-admin-code function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
