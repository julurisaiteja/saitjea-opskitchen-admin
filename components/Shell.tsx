"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Bridge"],["/tickets","Tickets"],["/locations","Locations"],["/menu","Menu"],["/staff","Staff"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"Harbor Grill SLA slipping","a":"Pause DoorDash 12m, pull 2 runners to expo, priority-fire #4821. Recover SLA under 8m."},{"q":"Delivery mix too high","a":"Cap third-party at 45% dinner; push pickup promo on Limes & Ember."},{"q":"Salmon 86 risk","a":"38 covers left — 86 after 19:30 or half-portion; sync KDS + menu boards."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell">
      <aside className="side">
        <div className="brand">Ops<span>Kitchen</span></div>
        <p style={{ fontSize: 10, color: "var(--muted)", margin: "0.35rem 0 0.75rem" }}>Dense Ops Dashboard — dark data maximal</p>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
        <p style={{ marginTop: "1.25rem", fontSize: 10, color: "var(--muted)" }}>LOCAL <LiveClock /> · ⌘K</p>
      </aside>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="OpsKitchen" prompts={PROMPTS} />
    </div>
  );
}
