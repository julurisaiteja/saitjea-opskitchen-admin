"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">OpsKitchen</p>
        <h1>Alerts</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><div className="alert-list"><div className="alert"><span className="badge">CRIT</span> Harbor Grill SLA breach cluster (4 tickets)</div><div className="alert"><span className="badge">WARN</span> Delivery share &gt;60% at dinner</div><div className="alert"><span className="badge">WARN</span> Salmon portions &lt;40 at Harbor</div><div className="alert"><span className="badge">INFO</span> North Oven recovered expo backlog</div></div></section><section className="panel"><h2>Signal density</h2><Heatmap seed={9}/></section>
    </div>
  );
}
