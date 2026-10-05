"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">OpsKitchen</p>
        <h1>Menu & 86</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="grid-2"><section className="panel"><h2>86 board</h2>
          <FilterTable rows={[
            {item:"Atlantic salmon",site:"Harbor Grill",left:12,status:"Risk"},
            {item:"Truffle fries",site:"Patio Smoke",left:0,status:"86"},
            {item:"Citrus glaze",site:"Limes & Ember",left:28,status:"OK"},
            {item:"Bone broth",site:"North Oven",left:6,status:"Risk"},
            {item:"Wagyu slider",site:"Harbor Grill",left:9,status:"Risk"},
          ]} columns={[{key:"item",label:"Item"},{key:"site",label:"Site"},{key:"left",label:"Portions"},{key:"status",label:"Status"}]} searchKeys={["item","site","status"]}/>
        </section><section className="panel"><h2>Prep runway</h2><div className="rail-progress">
          {[["Salmon",38],["Fries",0],["Broth",22],["Sliders",45]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}</span></div>)}
        </div></section></div>
    </div>
  );
}
