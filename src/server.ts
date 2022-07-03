import { app } from ".";

const door = 3333;
app.listen(door, () =>
  console.log(
    `\nAPI URL: http://localhost:${door}
    \nSwagger: http://localhost:${door}/api-docs`
  )
);
