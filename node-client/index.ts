import { CommunicationProtocolEnum, DaprClient } from "dapr-client";
import express from "express";

const daprHost = "127.0.0.1"; // Dapr Sidecar Host
// const daprPort = "3500"; // Dapr Sidecar Port of this Example Server
const daprPort = process.env.DAPR_HTTP_PORT ?? '3500';

console.log(daprHost, daprPort);
console.log(process.env);

// HTTP
const client = new DaprClient(
    daprHost,
    daprPort,
    CommunicationProtocolEnum.HTTP
);

const app = express();

app.get("/health", async (_, res) => {
    res.status(200).end();
});

app.get("/save", async (_, res) => {
    try {
        await client.state.save("test-store", [
            { key: "testKey", value: "testValue" },
        ]);
        res.json({ status: "success" });
    } catch (e) {
        console.error(e);
        res.json({ status: "error" });
    }
});

app.get("/get", async (_, res) => {
    try {
        const data = await client.state.get("test-store", "testKey");
        res.json({ status: "success", data });
    } catch (e) {
        console.error(e);
        res.json({ status: "error" });
    }
});

app.listen(3000, () => {
    console.log("runnint on 3000");
});
