# ShopFlow

ShopFlow is a multi-vendor e-commerce marketplace built with
Next.js. It follows familiar Laravel concepts while teaching their equivalents
in the Next.js and TypeScript ecosystem.

## Project idea

ShopFlow supports three user roles:

- **Customer:** browse approved products, search and filter the catalog, manage
  a cart, complete checkout, and view orders.
- **Vendor:** create and manage products, follow their approval status, receive
  orders, and get real-time sale notifications.
- **Admin:** review products, approve or reject submissions, and monitor
  marketplace statistics.

Planned features include role-based authentication, product moderation, Stripe
checkout, durable background jobs, real-time notifications, and AI-generated
product descriptions.

## Technology

Currently installed:

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- npm

Planned as the relevant roadmap phases are reached:

- shadcn/ui for reusable interface components
- Prisma with MySQL for data and migrations
- Auth.js for authentication and roles
- Zustand for the shopping cart
- Stripe for checkout
- A durable job service for background work
- Pusher (or a similar provider) for real-time notifications
- An AI provider for product-description generation

## Requirements

- Node.js 20.9 or newer
- npm
- Git
- Laragon with MySQL (required beginning with the database phase)

## Local setup

Clone the repository and enter its directory:

```powershell
git clone https://github.com/Talhasahi/shopflow.git
cd shopflow
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Open <http://localhost:3000>. The terminal may also display a network address,
such as `http://10.0.0.18:3000`, which lets another device on the same local
network open the application while the development server is running.

Edit `app/page.tsx` to change the homepage. Next.js automatically refreshes the
browser when saved files change.

## Environment variables

Environment variables are not required for the current starter phase. Database,
authentication, payments, jobs, and external services will add variables later.

When that happens:

1. Store local secrets in `.env`.
2. Document placeholder names in `.env.example`.
3. Never commit `.env`, passwords, tokens, or API keys.

## Available commands

```powershell
npm run dev      # Start the development server
npm run lint     # Check code quality
npm run build    # Create a production build
npm run start    # Run the completed production build
```

## Learning roadmap

Development is divided into small phases in [`TODO.txt`](./TODO.txt). Complete
one checkbox at a time, test its checkpoint, commit the working change, and then
continue. The roadmap also explains Next.js concepts using Laravel comparisons.

## Current status

The project foundation is running locally and is connected to GitHub. The next
steps are to initialize shadcn/ui and begin building reusable UI components.
