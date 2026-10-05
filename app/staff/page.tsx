"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">OpsKitchen</p>
        <h1>Staff & stations</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"name":"M. Ortiz","role":"Expo","site":"Harbor Grill","hours":"5.2h","load":"High","status":"Active"},{"name":"J. Park","role":"Line","site":"Limes & Ember","hours":"3.1h","load":"Med","status":"Active"},{"name":"A. Cole","role":"Runner","site":"Patio Smoke","hours":"6.4h","load":"Low","status":"Break"},{"name":"R. Singh","role":"Grill","site":"North Oven","hours":"4.0h","load":"High","status":"Active"},{"name":"L. Cho","role":"Sauté","site":"Harbor Grill","hours":"2.8h","load":"Med","status":"Active"}]} columns={[{"key":"name","label":"Name"},{"key":"role","label":"Role"},{"key":"site","label":"Site"},{"key":"hours","label":"Hours"},{"key":"load","label":"Load"},{"key":"status","label":"Status"}]} searchKeys={["name","role","site","hours","load","status"]} />
</section>
    </div>
  );
}
