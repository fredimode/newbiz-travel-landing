# New Biz Travel — Landing

Landing de transicion para New Biz Travel mientras se desarrolla la web definitiva.

## Stack

- Next.js 16 + TypeScript + Tailwind CSS
- Nodemailer + SMTP Gmail para envio de consultas
- Deploy en Vercel

## Setup local

1. `npm install`
2. `cp .env.example .env.local` y completar:
   - `SMTP_USER`, `SMTP_PASS` (App Password de Google Workspace)
   - `EMAIL_TO` (destinatario de consultas)
   - `NEXT_PUBLIC_SITE_URL`
3. `npm run dev`

## Estructura

- `src/app/` — paginas (home, /privacidad, /terminos, /cookies, /gracias)
- `src/components/` — Navbar, Hero, DestinoCard, ConsultaModal, Footer, etc.
- `src/lib/destinos.ts` — catalogo de 6 destinos (editable)
- `src/lib/tipos-viaje.ts` — 4 tipos de viaje (editable)
- `src/lib/send-email.ts` — wrapper de nodemailer (server-only)
- `src/app/api/consultas/route.ts` — endpoint del formulario

## Email setup

Esta landing manda consultas a traves de Nodemailer + SMTP Gmail.

Necesitas:
1. Una cuenta de Google Workspace con 2FA activado (tipicamente info@)
2. Generar una App Password en myaccount.google.com/apppasswords
3. Configurar las env vars:
   - `SMTP_USER`: la cuenta de email
   - `SMTP_PASS`: la App Password de 16 chars
   - `EMAIL_TO`: donde llegan las consultas (puede ser la misma cuenta)

En desarrollo local: copia `.env.example` a `.env.local` y completalo.
En produccion: configurar en Vercel > Settings > Environment Variables.

## Notas

- Paginas legales (`/privacidad`, `/terminos`, `/cookies`) son indexables
- Resto del sitio tiene `noindex` (es transitoria para compliance Stripe)
- Imagenes de destinos en `public/destinos/`
- CUIT 30-71173463-1 y Legajo EVyT 14764 visibles en footer (requerido por ley)

## Migrar a la web real

Cuando se reemplace por la web definitiva:
1. Cambiar DNS para apuntar al proyecto real
2. Las consultas del historico se pueden buscar en info@newbiztravel.com.ar
3. La pagina `/gracias` tiene url params, mantener compatibilidad si se quiere preservar links historicos
