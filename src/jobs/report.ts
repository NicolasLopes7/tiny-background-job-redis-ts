import Queue from "bull";
import { client } from "../database";

export const reportQueue = new Queue("Report Queue", process.env.REDIS_URL!);

reportQueue.process(async (job, done) => {
  const orders = await client.order.findMany({ where: {} });

  const ordersByDay = orders.reduce(
    (acc, order) => ({
      ...acc,
      [order.createdAt.toDateString()]: [
        //@ts-ignore
        ...(acc[order.createdAt.toDateString()] || []),
        order,
      ],
    }),
    {}
  );

  console.log(ordersByDay);
  //send the report by email

  done();
});
