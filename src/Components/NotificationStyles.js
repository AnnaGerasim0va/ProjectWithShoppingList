import { height, flexbox } from "@material-ui/system";

export const successStyle = {
  NotificationItem: {
    // Override the notification item
    DefaultStyle: {
      // Applied to every notification, regardless of the notification level
      margin: "10px",
      height: "100px",
      fontSize: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }
};
