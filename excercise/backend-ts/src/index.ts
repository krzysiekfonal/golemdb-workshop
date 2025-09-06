//Bun automatically loads .env files, no need for dotenv package
//import dotenv from "dotenv";
//https://bun.sh/guides/runtime/set-env

//Hono is a web framework similar to Express
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import jsLogger, { type ILogger } from "js-logger";

// Configure logger for convenience
jsLogger.useDefaults();
jsLogger.setLevel(jsLogger.DEBUG);
jsLogger.setHandler(
  jsLogger.createDefaultHandler({
    formatter: function (messages, context) {
      // prefix each log message with a timestamp.
      messages.unshift(`[${new Date().toISOString()} ${context.level.name}]`);
    },
  }),
);
const log: ILogger = jsLogger.get("myLogger");

// Create web server using Hono
const app = new Hono();

interface DiceThrow {
  dice: number[];
  sum: number;
}

// In-memory storage for dice throws
//@todo Replace with Golem DB to practice Golem DB integration
const data: DiceThrow[] = [];

app.get("/", (c) => {
  log.debug("Root endpoint called");
  return c.text("Hello on Golem DB Workshop!");
});

app.get("/api/v1/me", async (c) => {
  log.debug("Requested player name:", process.env.PLAYER_NAME || "default");
  return c.json(process.env.PLAYER_NAME || "default");
});

app.get("/api/v1/throws", async (c) => {
  log.debug("Returning throws:", data);
  return c.json(data);
});

app.post("/api/v1/throws", async (c) => {
  log.debug("Received request to roll dice...");
  const roll = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 6) + 1,
  );
  const diceThrow: DiceThrow = {
    dice: roll,
    sum: roll.reduce((a, b) => a + b, 0),
  };
  data.push(diceThrow);
  log.debug("Dice rolled:", diceThrow);
  return c.json(diceThrow);
});

async function initBeforeServerStarts() {
  log.info("Connecting to Golem DB client...");
  // Fill your initialization code here
}

initBeforeServerStarts()
  .then(() => {
    // Start the server on port 8000, if you change, fix also in frontend
    const port = 8000;
    log.info(`Starting server at http://localhost:${port}`);

    //you can use Bun's native server, but this one is compatible with node also
    serve({
      port,
      fetch: app.fetch,
    });
  })
  .catch((e) => {
    log.error(e);
    process.exit(1);
  });
