import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import Hotel from "../models/hotel";

const router = express.Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.find({
      ".userId": req.userId
    });

    const hotelBookings: { hotelName: string; bookings: any[] }[] = [];
    
    hotels.forEach((hotel) => {
      const hotelName = hotel.name;
      const bookings = hotel.bookings.map((booking) => {
        if (booking.userId === req.userId) {
          return booking;
        }
      }).filter(Boolean);

      hotelBookings.push({ hotelName, bookings });
    });

    res.status(200).send(hotelBookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to fetch hotel bookings" });
  }
});

export default router;
