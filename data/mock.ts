import { Activity, Approval, Contract, Invoice, Material, NotificationItem, Project, Proposal, UserProfile } from "@/types";

export const users: Record<string, UserProfile> = {
  admin: { id:"u-admin", name:"Jordan Ellis", email:"admin@groundbreak.tech", role:"admin", plan:"premium", company:"Groundbreak Tech", phone:"+1 (415) 555-0198", address:"88 Mission Street, San Francisco, CA", bio:"Platform administrator overseeing billing, analytics, risk, and construction network operations.", title:"Platform Operations Director" },
  contractor: { id:"u-contractor", name:"Marcus Reed", email:"marcus@atlasbuildco.com", role:"contractor", plan:"premium", company:"Atlas Build Co.", phone:"+1 (512) 555-0142", address:"1901 East 6th Street, Austin, TX", bio:"Luxury residential contractor specializing in custom builds, energy-efficient homes, and modern interiors.", title:"Principal Contractor" },
  buyer: { id:"u-buyer", name:"Avery Johnson", email:"avery@example.com", role:"buyer", plan:"free", company:"Palm Residence", phone:"+1 (512) 555-0128", address:"4221 Lakeway Drive, Austin, TX", bio:"Homeowner tracking the Palm Residence custom build and finish selections.", title:"Homeowner" }
};

export const projects: Project[] = [
  { id:"palm-residence", name:"Palm Residence", client:"Avery Johnson", location:"Austin, TX", status:"On track", progress:68, budget:845000, spent:562400, stage:"Interior finishes", lastSync:"2 min ago", contractor:"Atlas Build Co.", startDate:"2026-02-10", completionDate:"2026-10-30" },
  { id:"cedar-villa", name:"Cedar Villa", client:"Maya Chen", location:"Boulder, CO", status:"Approval needed", progress:44, budget:1120000, spent:418900, stage:"Rough plumbing", lastSync:"14 min ago", contractor:"Northline Homes", startDate:"2026-03-18", completionDate:"2027-01-12" },
  { id:"glass-house", name:"Glass House", client:"Noah Patel", location:"Scottsdale, AZ", status:"At risk", progress:81, budget:1530000, spent:1322000, stage:"Landscaping", lastSync:"1 hr ago", contractor:"Desert Form Studio", startDate:"2025-11-04", completionDate:"2026-08-18" }
];

export const approvals: Approval[] = [
  { id:"a1", title:"Upgrade kitchen island to Calacatta quartz", project:"Palm Residence", requester:"Avery Johnson", amount:12800, status:"Pending", risk:"Medium", timeline:["Request submitted", "Budget impact calculated", "Contractor review pending"] },
  { id:"a2", title:"Switch flooring to wide-plank white oak", project:"Cedar Villa", requester:"Maya Chen", amount:21350, status:"Pending", risk:"High", timeline:["Design change submitted", "Supplier quote attached", "Awaiting contractor approval"] },
  { id:"a3", title:"Approve revised electrical plan", project:"Glass House", requester:"Desert Form Studio", amount:0, status:"Approved", risk:"Low", timeline:["Revision uploaded", "Client notified", "Approved"] }
];

export const activities: Activity[] = [
  { id:"act1", title:"Blueprint v12 uploaded", description:"Structural annotations synced for Palm Residence.", time:"8:42 AM", type:"sync" },
  { id:"act2", title:"Buyer requested upgrade", description:"Kitchen finish change requires contractor approval.", time:"9:17 AM", type:"approval" },
  { id:"act3", title:"Inspection checklist completed", description:"Framing inspection passed with one follow-up note.", time:"10:05 AM", type:"inspection" },
  { id:"act4", title:"Invoice GB-1048 marked paid", description:"$42,500 progress payment received from Avery Johnson.", time:"11:30 AM", type:"payment" }
];

export const materials: Material[] = [
  { id:"m1", name:"White Oak Flooring", category:"Flooring", price:14, stock:"8,400 sq ft", sustainability:"Premium", supplier:"Luxe Timber Supply", leadTime:"9 days" },
  { id:"m2", name:"Calacatta Quartz", category:"Kitchen", price:126, stock:"18 slabs", sustainability:"Premium", supplier:"Stoneworks Direct", leadTime:"12 days" },
  { id:"m3", name:"Matte Black Fixtures", category:"Bath", price:480, stock:"42 sets", sustainability:"Standard", supplier:"Modern Fixtures Co.", leadTime:"5 days" },
  { id:"m4", name:"Low-VOC Paint", category:"Paint", price:68, stock:"230 gallons", sustainability:"Eco", supplier:"EcoCoat Partners", leadTime:"3 days" }
];

export const proposals: Proposal[] = [
  { id:"pr1", number:"PROP-2026-018", client:"Avery Johnson", project:"Palm Residence", status:"Viewed", scope:"Interior finishes package: kitchen island, flooring, lighting upgrades, and landscaping allowance.", laborCost:38500, materialCost:74200, tax:9020, discount:2500, total:119220, timeline:"6 weeks", terms:"50% deposit, 40% milestone payment, 10% completion holdback.", createdAt:"2026-06-18" },
  { id:"pr2", number:"PROP-2026-019", client:"Maya Chen", project:"Cedar Villa", status:"Draft", scope:"Rough plumbing adjustment, white oak flooring upgrade, and master bath fixture package.", laborCost:29200, materialCost:64150, tax:7470, discount:0, total:100820, timeline:"4 weeks", terms:"Valid for 14 days. Change orders require written approval.", createdAt:"2026-06-22" },
  { id:"pr3", number:"PROP-2026-020", client:"Noah Patel", project:"Glass House", status:"Accepted", scope:"Landscape package, pool deck stone replacement, and smart irrigation system.", laborCost:44800, materialCost:88200, tax:10640, discount:5000, total:138640, timeline:"5 weeks", terms:"Materials subject to supplier lead times.", createdAt:"2026-06-25" }
];

export const contracts: Contract[] = [
  { id:"c1", number:"CON-1104", client:"Avery Johnson", contractor:"Atlas Build Co.", project:"Palm Residence", status:"Pending", value:845000, milestones:["Foundation", "Framing", "MEP Rough-in", "Interior Finishes", "Final Inspection"], paymentSchedule:"Monthly progress billing with 10% retainage", deliverables:["Approved blueprints", "Finish schedule", "Warranty packet"], attachments:["PalmResidence_Contract.pdf", "FinishSchedule.xlsx"] },
  { id:"c2", number:"CON-1105", client:"Maya Chen", contractor:"Northline Homes", project:"Cedar Villa", status:"Signed", value:1120000, milestones:["Sitework", "Framing", "Mechanical", "Drywall", "Closeout"], paymentSchedule:"Milestone based payments", deliverables:["Construction schedule", "Material spec book"], attachments:["CedarVilla_MasterAgreement.pdf"] }
];

export const invoices: Invoice[] = [
  { id:"i1", number:"GB-1048", client:"Avery Johnson", project:"Palm Residence", status:"Paid", dueDate:"2026-07-05", issuedAt:"2026-06-20", tax:3400, discount:0, total:42500, recentPayment:"Paid by ACH on Jun 25", items:[{description:"Interior finishes labor", quantity:120, unitPrice:185},{description:"Quartz procurement deposit", quantity:1, unitPrice:16900}] },
  { id:"i2", number:"GB-1049", client:"Maya Chen", project:"Cedar Villa", status:"Pending", dueDate:"2026-07-14", issuedAt:"2026-06-24", tax:2600, discount:800, total:34800, items:[{description:"Rough plumbing crew", quantity:90, unitPrice:160},{description:"Fixture allowance", quantity:1, unitPrice:18600}] },
  { id:"i3", number:"GB-1050", client:"Noah Patel", project:"Glass House", status:"Overdue", dueDate:"2026-06-21", issuedAt:"2026-06-01", tax:5100, discount:0, total:68800, items:[{description:"Landscape stone package", quantity:1, unitPrice:37000},{description:"Irrigation installation", quantity:80, unitPrice:210}] }
];

export const notifications: NotificationItem[] = [
  { id:"n1", title:"Approval required", body:"Avery requested a Calacatta quartz upgrade for Palm Residence.", type:"Approval", time:"4 min ago", read:false },
  { id:"n2", title:"Payment received", body:"Invoice GB-1048 was marked paid via ACH.", type:"Payment", time:"1 hr ago", read:false },
  { id:"n3", title:"Offline queue synced", body:"12 field updates synced successfully after reconnection.", type:"System", time:"Today", read:true }
];

export const chartData = [
  { name:"Jan", budget:120000, actual:98000 }, { name:"Feb", budget:145000, actual:151000 }, { name:"Mar", budget:160000, actual:158000 }, { name:"Apr", budget:155000, actual:171000 }, { name:"May", budget:180000, actual:176000 }, { name:"Jun", budget:210000, actual:198000 }
];
