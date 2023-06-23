function getStatusColor(status: string) {
  switch (status) {
    case "confirmed":
      return "lime.300";
    case "pendingConfirmation":
      return "orange.500";
    case "pendigPayment":
      return "orange.500";
    case "cancelled":
      return "red.600";
    default:
      return "lime.300";
  }
}

export { getStatusColor };
