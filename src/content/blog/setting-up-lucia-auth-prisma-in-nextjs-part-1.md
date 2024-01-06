---
author: Kudakwashe Mupeni
pubDatetime: 2024-01-05T15:57:52.737Z
title: Setting up Lucia Auth, Prisma in NextJS
slug: setting-up-lucia-auth-prisma-in-nextjs-part-1
featured: true
draft: false
ogImage: https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png
tags:
  - prisma
  - nextjs
  - security
description: A step by step tutorial for setting up a NextJS app with auth.
---

# Setting Up Prisma

Prisma Installation and Configuration
Prisma is an excellent ORM tool that simplifies database interactions. Let's set it up for our Next.js application:

Install Prisma CLI:

Start by installing the Prisma CLI as a development dependency:

```bash
Copy code
npm install prisma -D
```

Initialize Prisma:

Use the Prisma CLI to initialize Prisma for your project:

```bash
Copy code
npx prisma init
```

This command will prompt you to set up your database. Choose PostgreSQL as your database and provide the necessary connection details.

## Define Prisma Models

Now, let's create a simple user model using Prisma. In your project directory, navigate to the prisma folder and create a new file named schema.prisma. Define the user model as follows:

```prisma
Copy code
// prisma/schema.prisma

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

generator client {
provider = "prisma-client-js"
}

model User {
id Int @id @default(autoincrement())
email String @unique
password String
// Add more fields as needed (e.g., name, role, etc.)
}
```

## Running Prisma Migrations

After defining your models, generate the Prisma client and apply migrations to create the corresponding tables in your PostgreSQL database:

Generate Prisma Client:

Run the following command to generate the Prisma client:

```bash
Copy code
npx prisma generate
```

Apply Migrations:

To create the tables in your database based on the defined models, run:

```bash
Copy code
npx prisma migrate dev --name init
```

This will create the necessary tables, including the User table based on the defined schema.

Using Prisma in Your Next.js App
Now that Prisma is set up, you can use the generated Prisma client in your Next.js application to interact with your database. For instance, you can create, read, update, and delete users:

```javascript
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    res.status(201).json(user);
  } else if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
```

Ensure you import prisma from the appropriate location in your Next.js application to perform database operations.

# Conclusion

You've now successfully set up Prisma in your Next.js application, defined a user model, and integrated it with a PostgreSQL database. You can use the Prisma client to perform various database operations within your Next.js app.

Refer to Prisma's documentation for more advanced usage, such as relations between models, data seeding, and advanced queries.
