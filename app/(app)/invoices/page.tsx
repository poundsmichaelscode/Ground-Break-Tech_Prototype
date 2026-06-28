import { EntityManager } from "@/components/modules/entity-manager";
import { FeatureLock } from "@/components/feature-lock";
import { invoices } from "@/data/mock";
export default function InvoicesPage(){ return <FeatureLock feature="invoice management"><EntityManager title="Invoice Management" description="Create invoices, edit line items, send invoices, download PDFs, mark paid, track overdue balances, and view payment history." type="invoice" initialItems={invoices}/></FeatureLock>; }
