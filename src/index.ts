import { Server } from "./server";

const server = new Server();

server.listen(port => {
  console.log(`==> Run dev started`);
  console.log(`==> Server started`);
  console.log(`==> Server is listening on http://localhost:${port}`);
});
