// TopNumber.tsx
import { useEffect, useState } from "react";
import { Paper, Button, Title } from "@mantine/core";
import { useAppShell } from "ui";
import { jsx, jsxs } from "react/jsx-runtime";
var pickNumber = () => Math.ceil(Math.random() * 10) + 2;
var TopNumber = () => {
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
  if (!user)
    return null;
  return /* @__PURE__ */ jsxs(Paper, { shadow: "sm", radius: "md", p: "md", m: "10", withBorder: true, children: [
    /* @__PURE__ */ jsx(Title, { children: " Top Number !!!" }),
    playing && /* @__PURE__ */ jsxs(
      Button,
      {
        mt: "md",
        variant: "outline",
        color: "violet",
        size: "xl",
        fullWidth: true,
        onClick: () => {
          addToScore(currentValue);
          setCurrentValue(0);
          setPlaying(false);
        },
        children: [
          currentValue,
          " - Take it"
        ]
      }
    ),
    !playing && /* @__PURE__ */ jsx(
      Button,
      {
        mt: "md",
        size: "x1",
        fullWidth: true,
        onClick: () => {
          setPlaying(true);
          setTopNumber(pickNumber());
        },
        children: "Play"
      }
    )
  ] });
};

// CardPicker.tsx
import { useState as useState2 } from "react";
import { Box, Paper as Paper2, Text, Button as Button2, Title as Title2 } from "@mantine/core";
import { shuffle } from "lodash";
import { useAppShell as useAppShell2 } from "ui";

// constants.ts
var OPTIONS = [10, 5, 2, -1, -2];

// CardPicker.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CardPicker = () => {
  const [cards, setCards] = useState2(shuffle(OPTIONS));
  const [played, setPlayed] = useState2(null);
  const { addToScore, user } = useAppShell2();
  if (!user)
    return null;
  return /* @__PURE__ */ jsxs2(Paper2, { shadow: "sm", radius: "md", p: "md", m: "10", withBorder: true, children: [
    /* @__PURE__ */ jsx2(Title2, { children: "Card Picker!!!" }),
    /* @__PURE__ */ jsx2(
      Box,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gridGap: "1rem"
        },
        children: cards.map((card, index) => /* @__PURE__ */ jsx2(
          Box,
          {
            p: 5,
            sx: {
              borderRadius: 15,
              height: 200,
              border: "5px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: played !== null ? index === played ? "#ccc" : "white" : "black"
            },
            onClick: () => {
              addToScore(card);
              setPlayed(index);
            },
            children: played !== null && /* @__PURE__ */ jsx2(Text, { sx: { fontSize: "40pt" }, children: card })
          },
          index
        ))
      }
    ),
    played !== null && /* @__PURE__ */ jsx2(
      Button2,
      {
        mt: "md",
        size: "lg",
        fullWidth: true,
        onClick: () => {
          setCards(shuffle(OPTIONS));
          setPlayed(null);
        },
        children: "Play Again"
      }
    )
  ] });
};
export {
  CardPicker,
  TopNumber
};
