"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";

export default function Error() {
  <Alert>
    <TriangleAlert size={16} />
    <AlertTitle>Unexpected error occurred in beautiful application</AlertTitle>
  </Alert>;
}
