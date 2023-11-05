import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }
  return res.json({});
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  // check if it is editmode, if params.id = ticket._id, it is editmode
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
    // foundTicket is from backend
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;

//next 13.4 routing to this page automatically based on folder structure
// can use squre bracket folder as params.id
// () wonn't set up a router
