import { activities } from "@/data/mock";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ActivityTimeline() {
  return <Card><CardHeader><div><CardTitle>Live activity</CardTitle><CardDescription>Project events, sync history, and approval movement.</CardDescription></div></CardHeader>
    <div className="space-y-5">{activities.map((a,i)=><div key={a.id} className="flex gap-4"><div className="flex flex-col items-center"><div className="h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-600/10" />{i<activities.length-1 && <div className="mt-2 h-12 w-px bg-border"/>}</div><div><p className="font-bold">{a.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{a.description}</p><p className="mt-1 text-xs font-semibold text-muted-foreground">{a.time}</p></div></div>)}</div>
  </Card>;
}
