type UserCardProps = {
  name: string;
  email: string;
  age: number;
  isActive?: boolean;
};

export default function UserCard ({
    name,
    email,
    age,
    isActive = true,
  }: UserCardProps) {
  return (
    <div
      style= {{
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          opacity: isActive ? 1: 0.5,
        }}
      >
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{age}</p>
        <p>{isActive ? "Aktiv" : "inaktiv"}</p>

    </div>
  );
  }