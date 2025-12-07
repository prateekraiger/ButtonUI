import React from "react";

export interface ButtonItem {
  id: string;
  name: string;
  category: "fluid" | "3d" | "interaction" | "typography" | "aesthetic";
  component: React.FC<any>;
  code: string;
}
