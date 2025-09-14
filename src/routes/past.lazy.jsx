import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import getPastOrders from "../api/getPastOrders.js";

export const Route = createLazyFileRoute("/past")({
  component: () => PastOrdersRoute,
});

function PastOrdersRoute() {}
