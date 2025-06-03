import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

export const avatarDropdownElements = [
  { id: 1, label: "Profil", href: "/profile", icon: FaRegUser },
  { id: 2, label: "Paramètres", href: "/settings", icon: IoSettingsOutline },
  { id: 3, label: "Déconnexion", href: null, icon: CiLogout },
] as const;

export const navLinks = [
  { id: 1, label: "Journées", href: "/days", icon: LuCalendarDays },
  { id: 2, label: "Catégories", href: "/categories", icon: MdOutlineCategory },
  { id: 3, label: "Produits", href: "/products", icon: IoFastFoodOutline },
  { id: 4, label: "Packs", href: "/offers", icon: BiSolidOffer },
  { id: 5, label: "Paiements", href: "/payments", icon: FaHandHoldingUsd },
  { id: 6, label: "Factures", href: "/invoices", icon: LiaFileInvoiceDollarSolid },
] as const;
