import Card from "./Card";

export default function WarningCard({ children }) {
  return (
    <Card>
      <div className="warning">⚠️ {children}</div>
    </Card>
  );
}