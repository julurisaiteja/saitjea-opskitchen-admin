"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">OpsKitchen</p>
        <h1>Ticket triage</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="stat-cards">
        <div className="stat-card"><h3>Late cluster</h3><b>4</b><Meter value={72} label="Harbor Grill"/></div>
        <div className="stat-card"><h3>Avg fire time</h3><b>6.4m</b><Spark seed={4}/></div>
        <div className="stat-card"><h3>Recovery ETA</h3><b>12m</b><Meter value={55}/></div>
      </div><section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"#4821","site":"Harbor Grill","channel":"Uber","sla":"14m","owner":"Expo A","status":"Late"},{"id":"#4818","site":"Harbor Grill","channel":"DoorDash","sla":"11m","owner":"Expo A","status":"Late"},{"id":"#4826","site":"Patio Smoke","channel":"Uber","sla":"12m","owner":"Expo B","status":"Late"},{"id":"#4824","site":"North Oven","channel":"DoorDash","sla":"9m","owner":"Expo B","status":"Watch"},{"id":"#4819","site":"Limes & Ember","channel":"Dine-in","sla":"6m","owner":"Line 2","status":"Firing"},{"id":"#4820","site":"North Oven","channel":"Pickup","sla":"4m","owner":"Expo B","status":"Expo"}]} columns={[{"key":"id","label":"Ticket"},{"key":"site","label":"Site"},{"key":"channel","label":"Channel"},{"key":"sla","label":"SLA"},{"key":"owner","label":"Owner"},{"key":"status","label":"Status"}]} searchKeys={["id","site","channel","sla","owner","status"]} />
</section>
    </div>
  );
}
