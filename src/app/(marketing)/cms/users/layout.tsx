import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management & Access Control",
  description:
    "Role-based access control for your charging network. Manage operators, site managers, and drivers with granular permissions and audit trails.",
  keywords: ["user management", "access control", "role-based permissions", "operator management", "audit trail"],
  openGraph: {
    title: "User Management & Access Control",
    description: "Role-based access control for your charging network. Manage operators, site managers, and drivers with granular permissions and audit trails.",
    url: "/cms/users",
  },
  twitter: {
    title: "User Management & Access Control",
    description: "Role-based access control for your charging network. Manage operators, site managers, and drivers with granular permissions and audit trails.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
