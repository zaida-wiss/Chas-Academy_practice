import Card from "./Card";

export default function InfoCard({ children }) {
  return (
    <Card>
      <div className="info">{children}</div>
    </Card>
  );
}