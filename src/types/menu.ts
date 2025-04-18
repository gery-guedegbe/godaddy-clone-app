import { IconType } from "react-icons";

export interface MenuItem {
  name: string;
  icon: IconType;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  sections?: MenuSection[];
}
