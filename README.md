# FirebaseProject1

## Description

This project demonstrates an application that interacts with an API, consisting of two main parts:

1. **web**: A web-based interface for user interaction, requiring a modern browser to run. Requires a `.env` file for configuration (see `example.env` for reference).
2. **server**: An internal server that processes data received from external sources via the API. Requires a `.env` file for configuration (see `example.env` for reference).

### Workflow:

- Install all necessary modules and components.
- Start server.
- Open the `web` in your browser.
- Once successfully set up, the user will be able to interact with a list of countries and view information about each country.

---

## Installation

Follow these steps to set up and run the project:

1. Clone the Repository

```bash
git clone https://github.com/AnatoliiFesenko/countryApp
```

2. Install NPM packages (for server)

```bash
   cd server
   npm install
```

3. Create .env file and add yuor PORT number for server (for example file example.env)

```bash
    PORT=your-server-port
```

4. Build server

```bash
   npm run build
```

5. Run server

```bash
   npm start
```

6. Install NPM packages (for web)

```bash
   cd web
   npm install
```

7. Create .env file and add yuor PORT number for web (for example file example.env)

```bash
    VITE_API_PORT=your-server-port
```

8. Run web

```bash
   npm run dev
```
