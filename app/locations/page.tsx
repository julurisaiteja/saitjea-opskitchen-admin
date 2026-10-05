"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">OpsKitchen</p>
        <h1>Locations</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"site":"Harbor Grill","covers":182,"sla":"9.2m","late":5,"util":"94%","status":"Hot"},{"site":"Limes & Ember","covers":144,"sla":"6.1m","late":1,"util":"78%","status":"Stable"},{"site":"North Oven","covers":121,"sla":"7.4m","late":2,"util":"81%","status":"Watch"},{"site":"Patio Smoke","covers":98,"sla":"8.8m","late":3,"util":"88%","status":"Hot"}]} columns={[{"key":"site","label":"Site"},{"key":"covers","label":"Covers"},{"key":"sla","label":"SLA"},{"key":"late","label":"Late"},{"key":"util","label":"Util"},{"key":"status","label":"Status"}]} searchKeys={["site","covers","sla","late","util","status"]} />
</section><section className="panel"><h2>Cover density</h2><Heatmap seed={3}/></section>
    </div>
  );
}
