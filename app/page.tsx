"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Open tickets",values:[48,51,46,53],suffix:""},{label:"Avg SLA",values:[7.8,8.1,7.4,8.6],suffix:"m"},{label:"86 items",values:[3,4,2,5],suffix:""},{label:"Expo backlog",values:[11,9,13,10],suffix:""},{label:"Delivery share",values:[58,61,55,62],suffix:"%"},{label:"Sites hot",values:[2,3,1,2],suffix:""}];
const ACTIVITY=["Harbor #4821 late +14m","Salmon 86 risk","Runner reassigned Patio","DoorDash pause 12m","Menu sync ×4 sites"];
const ROWS=[{id:"#4818",site:"Harbor Grill",channel:"DoorDash",sla:"11m",items:4,status:"Late"},{id:"#4819",site:"Limes & Ember",channel:"Dine-in",sla:"6m",items:2,status:"Firing"},{id:"#4820",site:"North Oven",channel:"Pickup",sla:"4m",items:3,status:"Expo"},{id:"#4821",site:"Harbor Grill",channel:"Uber",sla:"14m",items:5,status:"Late"},{id:"#4822",site:"Patio Smoke",channel:"Dine-in",sla:"7m",items:6,status:"Firing"},{id:"#4823",site:"Limes & Ember",channel:"Pickup",sla:"3m",items:1,status:"Ready"},{id:"#4824",site:"North Oven",channel:"DoorDash",sla:"9m",items:2,status:"Watch"},{id:"#4825",site:"Harbor Grill",channel:"Dine-in",sla:"5m",items:3,status:"Expo"},{id:"#4826",site:"Patio Smoke",channel:"Uber",sla:"12m",items:4,status:"Late"},{id:"#4827",site:"Limes & Ember",channel:"Dine-in",sla:"8m",items:2,status:"Firing"},{id:"#4828",site:"North Oven",channel:"Pickup",sla:"2m",items:2,status:"Ready"},{id:"#4829",site:"Harbor Grill",channel:"DoorDash",sla:"10m",items:3,status:"Watch"}];
const STATIONS=[{name:"Grill",load:92},{name:"Sauté",load:78},{name:"Expo",load:88},{name:"Pastry",load:41},{name:"Fry",load:70},{name:"Cold",load:55},{name:"Bar",load:63},{name:"Dish",load:48}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>DENSE OPS · SERVICE PEAK</p><h1>Kitchen command</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Maximal dark bridge — SLA heat, station load, and channel throttle.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80" alt="Kitchen"/><div className="cap">OPS FILM · LINE PRESSURE</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+2}/></FadeIn>)}</div>
<div className="split-3">
<section className="panel"><h2>Station load</h2><div className="station-grid">{STATIONS.map(s=><div className="station" key={s.name}><strong>{s.name}</strong>{s.load}%<Meter value={s.load}/></div>)}</div></section>
<section className="panel"><h2>Ticket heat</h2><Heatmap seed={7}/><p className="stencil" style={{marginTop:8}}>Brighter = hotter 5m windows</p></section>
<section className="panel"><h2>Channel throttle</h2><div className="rail-progress">{[["Dine-in",44],["Pickup",22],["DoorDash",61],["Uber",58]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}%</span></div>)}</div></section>
</div>
<div className="grid-2"><section className="panel"><h2>Ticket velocity</h2><TrendArea/></section><section className="panel"><h2>Channel mix</h2><MixBars/></section></div>
<section className="panel"><h2>Live ticket board</h2><FilterTable rows={ROWS} columns={[{key:"id",label:"Ticket"},{key:"site",label:"Site"},{key:"channel",label:"Channel"},{key:"sla",label:"SLA"},{key:"items",label:"Items"},{key:"status",label:"Status"}]} searchKeys={["id","site","channel","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(1);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
