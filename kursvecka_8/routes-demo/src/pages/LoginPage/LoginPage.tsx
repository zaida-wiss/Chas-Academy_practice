import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../auth/authContext";

// Typ för redirect-state
 type RedirectState = {
   from?: { pathname: string; search?: string };
 };

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as RedirectState | null;
  const redirectTo = state?.from ? `${state.from.pathname}${state.from.search ?? ""}` : "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await auth.login({ email, password });
    if (ok) {
      navigate(redirectTo, { replace: true });
    }
  };

  return (
    <section>
      <h1>Login page</h1>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "300px" }}>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </section>
  );
}