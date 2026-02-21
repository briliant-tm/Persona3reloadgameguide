import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./app/layout";
import Home from "./app/page";
import CombatPage from "./app/combat/page";
import FusionPage from "./app/fusion/page";
import FloorsPage from "./app/floors/page";
import StoryPage from "./app/story/page";
import ClassroomPage from "./app/classroom/page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "combat", Component: CombatPage },
      { path: "fusion", Component: FusionPage },
      { path: "floors", Component: FloorsPage },
      { path: "story", Component: StoryPage },
      { path: "classroom", Component: ClassroomPage },
    ],
  },
]);
