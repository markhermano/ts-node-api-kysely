# Typescript Node API using Kysely Query Builder

## Copy env file
Setup your environment variables first.

```bash
cp .env.sample .env
```

## Running Migrations
Before running the app, we need to run migrations first to set the database up.

```bash
npm run migration:run
```

## Running the app
After running the migrations, you can run the app with this command.

```bash
npm run dev
```

## Testing the app
You can use any Rest API Client that you prefer:
- Postman
- Insomnia
- HTTPie
- Thunder Client
- etc.
