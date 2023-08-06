// hooks/useAppShell.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
var useAppShell = create()(
  persist(
    (set) => ({
      user: null,
      score: 0,
      setUser: (user) => set(() => ({ user })),
      addToScore: (amount) => set((state) => ({ score: state.score + amount }))
    }),
    { name: "app-shell" }
  )
);

// Shell.tsx
import {
  AppShell,
  Header,
  Title,
  Button,
  useMantineTheme
} from "@mantine/core";
import { jsx, jsxs } from "react/jsx-runtime";
var Shell = ({
  title,
  children
}) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  return /* @__PURE__ */ jsx(
    AppShell,
    {
      padding: "md",
      header: /* @__PURE__ */ jsxs(Header, { height: 60, p: "xs", style: { display: "flex" }, children: [
        /* @__PURE__ */ jsx(Title, { children: title }),
        !user ? /* @__PURE__ */ jsx(Button, { onClick: () => setUser("Rohan"), children: "Logins" }) : /* @__PURE__ */ jsxs("div", { children: [
          user,
          "-",
          score,
          /* @__PURE__ */ jsx(Button, { onClick: () => setUser(null), children: "Logout" })
        ] })
      ] }),
      children
    }
  );
};
export {
  Shell,
  useAppShell
};
