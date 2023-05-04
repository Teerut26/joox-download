//create next api
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id: chatId } = req.body;

    

    res.statusCode = 200;
    res.json({ name: "John Doe" });
};
