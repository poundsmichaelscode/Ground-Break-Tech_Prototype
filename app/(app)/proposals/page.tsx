import { EntityManager } from "@/components/modules/entity-manager";
import { FeatureLock } from "@/components/feature-lock";
import { proposals } from "@/data/mock";
export default function ProposalsPage(){ return <FeatureLock feature="proposal management"><EntityManager title="Proposal Management" description="Create, preview, send, duplicate, delete, and convert client proposals into construction contracts." type="proposal" initialItems={proposals}/></FeatureLock>; }
