import supertest from "supertest";
import app from "./app";

const request = supertest(app);

test("GET /fruits", async () => {
    const response = await request
        .get("/fruits")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual([{ name: "Watermelon" }, { name: "Apple" }]);
});
