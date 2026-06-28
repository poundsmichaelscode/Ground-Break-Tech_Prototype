import { EntityManager } from "@/components/modules/entity-manager";
import { contracts } from "@/data/mock";
export default function ContractsPage(){ return <EntityManager title="Contracts" description="Manage signed agreements, milestones, payment schedules, deliverables, attachments, and digital signatures." type="contract" initialItems={contracts}/>; }
