import React, { ReactNode } from "react";
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
} from "@mantine/core";

// Hooks
import { useAppShell } from "./hooks/useAppShell";

export const Shell = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();

  return (
    <AppShell
      padding={"md"}
      header={
        <Header height={60} p="xs" style={{ display: "flex" }}>
          <Title>{title}</Title>
          {!user ? (
            <Button onClick={() => setUser("Rohan")}>Logins</Button>
          ) : (
            <div>
              {user}-{score}
              <Button onClick={() => setUser(null)}>Logout</Button>
            </div>
          )}
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
