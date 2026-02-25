export type Project ={
  id: string;
  name: string;
  status: "active"|"paused"|"completed";
  hoursLogged: number;
};