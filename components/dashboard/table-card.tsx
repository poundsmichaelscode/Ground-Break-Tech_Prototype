import { ReactNode } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export function TableCard({title, description, children}:{title:string; description:string; children:ReactNode}){return <Card><CardHeader><div><CardTitle>{title}</CardTitle><CardDescription>{description}</CardDescription></div></CardHeader>{children}</Card>}
