import React, { useEffect, useState } from "react";
import { Paper, Button, Title } from "@mantine/core";

import { useAppShell } from "ui";

const pickNumber = () => Math.ceil(Math.random() * 10) + 2;

export const TopNumber = () => {
  const [topNumber, setTopNumber] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  const { addToScore, user } = useAppShell();

  useEffect(() => {
    if (playing) {
      const timer = setTimeout(() => {
        if (currentValue < topNumber) {
          setCurrentValue(currentValue + 1);
        } else {
          addToScore(-1);
          setCurrentValue(0);
          setPlaying(false);
        }

        return () => clearTimeout(timer);
      }, 500);
    }
  }, [playing, topNumber, currentValue, addToScore]);

  if (!user) return null;

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title> Top Number !!!</Title>
      {playing && (
        <Button
          mt="md"
          variant="outline"
          color="violet"
          size="xl"
          fullWidth
          onClick={() => {
            addToScore(currentValue);
            setCurrentValue(0);
            setPlaying(false);
          }}
        >
          {currentValue} - Take it
        </Button>
      )}

      {!playing && (
        <Button
          mt="md"
          size="x1"
          fullWidth
          onClick={() => {
            setPlaying(true);
            setTopNumber(pickNumber());
          }}
        >
          Play
        </Button>
      )}
    </Paper>
  );
};
