import { Activity, Approval, Contract, Invoice, Material, NotificationItem, Project, Proposal, UserProfile, TaskItem, ScheduleEvent, DailyLog, RFI, TeamMember, Drawing } from "@/types";

export const users: Record<string, UserProfile> = {
  admin: { id:"u-admin", name:"Jordan Ellis", email:"admin@groundbreak.tech", role:"admin", plan:"premium", company:"Groundbreak Tech", phone:"+1 (415) 555-0198", address:"88 Mission Street, San Francisco, CA", bio:"Platform administrator responsible for security, billing operations, product analytics, and construction network reliability.", title:"Platform Operations Director" },
  contractor: { id:"u-contractor", name:"Marcus Reed", email:"marcus@atlasbuildco.com", role:"contractor", plan:"premium", company:"Atlas Build Co.", phone:"+1 (512) 555-0142", address:"1901 East 6th Street, Austin, TX", bio:"Luxury residential contractor specializing in custom homes, high-performance envelopes, modern interiors, and owner-led finish selections.", title:"Principal Contractor" },
  buyer: { id:"u-buyer", name:"Avery Johnson", email:"avery@example.com", role:"buyer", plan:"free", company:"Palm Residence", phone:"+1 (512) 555-0128", address:"4221 Lakeway Drive, Austin, TX", bio:"Homeowner tracking the Palm Residence custom build, finish selections, approvals, budget impacts, and construction milestones.", title:"Homeowner" }
};

export const projects: Project[] = [
  { id:"palm-residence", name:"Palm Residence", client:"Avery Johnson", location:"Austin, TX", status:"On track", progress:68, budget:845000, spent:562400, stage:"Interior finishes", lastSync:"2 min ago", contractor:"Atlas Build Co.", startDate:"2026-02-10", completionDate:"2026-10-30" },
  { id:"cedar-villa", name:"Cedar Villa", client:"Maya Chen", location:"Boulder, CO", status:"Approval needed", progress:44, budget:1120000, spent:418900, stage:"Rough plumbing", lastSync:"14 min ago", contractor:"Northline Homes", startDate:"2026-03-18", completionDate:"2027-01-12" },
  { id:"glass-house", name:"Glass House", client:"Noah Patel", location:"Scottsdale, AZ", status:"At risk", progress:81, budget:1530000, spent:1322000, stage:"Landscape closeout", lastSync:"1 hr ago", contractor:"Desert Form Studio", startDate:"2025-11-04", completionDate:"2026-08-18" },
  { id:"harbor-loft", name:"Harbor Loft Remodel", client:"Sofia Martinez", location:"San Diego, CA", status:"Delayed", progress:29, budget:485000, spent:158700, stage:"Steel inspection", lastSync:"31 min ago", contractor:"Coastal Works", startDate:"2026-05-06", completionDate:"2026-12-14" }
];

export const approvals: Approval[] = [
  { id:"a1", title:"Upgrade kitchen island to Calacatta quartz", project:"Palm Residence", requester:"Avery Johnson", amount:12800, status:"Pending", risk:"Medium", timeline:["Request submitted", "Budget impact calculated", "Contractor review pending"] },
  { id:"a2", title:"Switch flooring to wide-plank white oak", project:"Cedar Villa", requester:"Maya Chen", amount:21350, status:"Pending", risk:"High", timeline:["Design change submitted", "Supplier quote attached", "Lead time review required"] },
  { id:"a3", title:"Approve revised electrical plan", project:"Glass House", requester:"Desert Form Studio", amount:0, status:"Approved", risk:"Low", timeline:["Revision uploaded", "Client notified", "Approved"] },
  { id:"a4", title:"Add smart irrigation package", project:"Glass House", requester:"Noah Patel", amount:9400, status:"Rejected", risk:"Medium", timeline:["Requested", "Budget exceeded allowance", "Rejected with comment"] }
];

export const activities: Activity[] = [
  { id:"act1", title:"Blueprint v12 uploaded", description:"Structural annotations synced for Palm Residence.", time:"8:42 AM", type:"sync" },
  { id:"act2", title:"Buyer requested upgrade", description:"Kitchen finish change requires contractor approval.", time:"9:17 AM", type:"approval" },
  { id:"act3", title:"Inspection checklist completed", description:"Framing inspection passed with one follow-up note.", time:"10:05 AM", type:"inspection" },
  { id:"act4", title:"Invoice GB-1048 marked paid", description:"$42,500 progress payment received from Avery Johnson.", time:"11:30 AM", type:"payment" },
  { id:"act5", title:"Crew note added", description:"Site supervisor flagged cabinet delivery access issue.", time:"12:08 PM", type:"message" }
];

export const materials: Material[] = [
  { id:"m1", name:"White Oak Flooring", category:"Flooring", price:14, stock:"8,400 sq ft", sustainability:"Premium", supplier:"Luxe Timber Supply", leadTime:"9 days" },
  { id:"m2", name:"Calacatta Quartz", category:"Kitchen", price:126, stock:"18 slabs", sustainability:"Premium", supplier:"Stoneworks Direct", leadTime:"12 days" },
  { id:"m3", name:"Matte Black Fixtures", category:"Bath", price:480, stock:"42 sets", sustainability:"Standard", supplier:"Modern Fixtures Co.", leadTime:"5 days" },
  { id:"m4", name:"Low-VOC Paint", category:"Paint", price:68, stock:"230 gallons", sustainability:"Eco", supplier:"EcoCoat Partners", leadTime:"3 days" },
  { id:"m5", name:"Standing Seam Roof Panels", category:"Roof", price:11, stock:"16,000 sq ft", sustainability:"Premium", supplier:"Vertex Metal Supply", leadTime:"14 days" },
  { id:"m6", name:"Energy Star Window Package", category:"Envelope", price:1350, stock:"38 units", sustainability:"Eco", supplier:"Clearline Windows", leadTime:"21 days" }
];

export const proposals: Proposal[] = [
  { id:"pr1", number:"PROP-2026-018", client:"Avery Johnson", project:"Palm Residence", status:"Viewed", scope:"Interior finishes package: kitchen island, flooring, lighting upgrades, and landscaping allowance.", laborCost:38500, materialCost:74200, tax:9020, discount:2500, total:119220, timeline:"6 weeks", terms:"50% deposit, 40% milestone payment, 10% completion holdback.", createdAt:"2026-06-18" },
  { id:"pr2", number:"PROP-2026-019", client:"Maya Chen", project:"Cedar Villa", status:"Draft", scope:"Rough plumbing adjustment, white oak flooring upgrade, and master bath fixture package.", laborCost:29200, materialCost:64150, tax:7470, discount:0, total:100820, timeline:"4 weeks", terms:"Valid for 14 days. Change orders require written approval.", createdAt:"2026-06-22" },
  { id:"pr3", number:"PROP-2026-020", client:"Noah Patel", project:"Glass House", status:"Accepted", scope:"Landscape package, pool deck stone replacement, and smart irrigation system.", laborCost:44800, materialCost:88200, tax:10640, discount:5000, total:138640, timeline:"5 weeks", terms:"Materials subject to supplier lead times.", createdAt:"2026-06-25" },
  { id:"pr4", number:"PROP-2026-021", client:"Sofia Martinez", project:"Harbor Loft Remodel", status:"Sent", scope:"Structural steel revision, coastal-grade window package, and elevator finish allowance.", laborCost:61200, materialCost:99300, tax:12840, discount:3500, total:169840, timeline:"8 weeks", terms:"Proposal expires in 10 days. Engineering review not included.", createdAt:"2026-06-27" }
];

export const contracts: Contract[] = [
  { id:"c1", number:"CON-1104", client:"Avery Johnson", contractor:"Atlas Build Co.", project:"Palm Residence", status:"Pending", value:845000, milestones:["Foundation", "Framing", "MEP Rough-in", "Interior Finishes", "Final Inspection"], paymentSchedule:"Monthly progress billing with 10% retainage", deliverables:["Approved blueprints", "Finish schedule", "Warranty packet"], attachments:["PalmResidence_Contract.pdf", "FinishSchedule.xlsx"] },
  { id:"c2", number:"CON-1105", client:"Maya Chen", contractor:"Northline Homes", project:"Cedar Villa", status:"Signed", value:1120000, milestones:["Sitework", "Framing", "Mechanical", "Drywall", "Closeout"], paymentSchedule:"Milestone based payments", deliverables:["Construction schedule", "Material spec book"], attachments:["CedarVilla_MasterAgreement.pdf"] },
  { id:"c3", number:"CON-1106", client:"Sofia Martinez", contractor:"Coastal Works", project:"Harbor Loft Remodel", status:"Completed", value:485000, milestones:["Demolition", "Steel", "Envelope", "Interior", "Handover"], paymentSchedule:"Deposit plus phase-based draws", deliverables:["Permit package", "Closeout binder", "As-built drawings"], attachments:["HarborLoft_Closeout.pdf"] }
];

export const invoices: Invoice[] = [
  { id:"i1", number:"GB-1048", client:"Avery Johnson", project:"Palm Residence", status:"Paid", dueDate:"2026-07-05", issuedAt:"2026-06-20", tax:3400, discount:0, total:42500, recentPayment:"Paid by ACH on Jun 25", items:[{description:"Interior finishes labor", quantity:120, unitPrice:185},{description:"Quartz procurement deposit", quantity:1, unitPrice:16900}] },
  { id:"i2", number:"GB-1049", client:"Maya Chen", project:"Cedar Villa", status:"Pending", dueDate:"2026-07-14", issuedAt:"2026-06-24", tax:2600, discount:800, total:34800, items:[{description:"Rough plumbing crew", quantity:90, unitPrice:160},{description:"Fixture allowance", quantity:1, unitPrice:18600}] },
  { id:"i3", number:"GB-1050", client:"Noah Patel", project:"Glass House", status:"Overdue", dueDate:"2026-06-21", issuedAt:"2026-06-01", tax:5100, discount:0, total:68800, items:[{description:"Landscape stone package", quantity:1, unitPrice:37000},{description:"Irrigation installation", quantity:80, unitPrice:210}] },
  { id:"i4", number:"GB-1051", client:"Sofia Martinez", project:"Harbor Loft Remodel", status:"Pending", dueDate:"2026-07-22", issuedAt:"2026-06-28", tax:2180, discount:0, total:29180, items:[{description:"Structural engineering coordination", quantity:1, unitPrice:11800},{description:"Steel inspection crew", quantity:72, unitPrice:210}] }
];

export const notifications: NotificationItem[] = [
  { id:"n1", title:"Approval required", body:"Avery requested a Calacatta quartz upgrade for Palm Residence.", type:"Approval", time:"4 min ago", read:false },
  { id:"n2", title:"Payment received", body:"Invoice GB-1048 was marked paid via ACH.", type:"Payment", time:"1 hr ago", read:false },
  { id:"n3", title:"Offline queue synced", body:"12 field updates synced successfully after reconnection.", type:"System", time:"Today", read:true },
  { id:"n4", title:"New blueprint comment", body:"Marcus mentioned the kitchen elevation on Sheet A-405.", type:"Message", time:"Today", read:false },
  { id:"n5", title:"Schedule risk", body:"Glass House landscaping is tracking 4 days behind due to supplier delivery.", type:"Project", time:"Yesterday", read:true }
];

export const chartData = [
  { name:"Jan", budget:120000, actual:98000 }, { name:"Feb", budget:145000, actual:151000 }, { name:"Mar", budget:160000, actual:158000 }, { name:"Apr", budget:155000, actual:171000 }, { name:"May", budget:180000, actual:176000 }, { name:"Jun", budget:210000, actual:198000 }
];

export const crews = [
  { name:"Framing crew", lead:"Elena Brooks", project:"Palm Residence", status:"On site", today:"Interior backing and blocking" },
  { name:"MEP coordination", lead:"Caleb Grant", project:"Cedar Villa", status:"Scheduled", today:"Rough plumbing verification" },
  { name:"Landscape team", lead:"Priya Shah", project:"Glass House", status:"At risk", today:"Stone delivery and irrigation trenching" }
];

export const usageStats = [
  { label:"Blueprint uploads", used:42, limit:"Unlimited" },
  { label:"Offline changes synced", used:318, limit:"Unlimited" },
  { label:"Proposal conversions", used:12, limit:"Premium" },
  { label:"Team collaborators", used:27, limit:"Unlimited" }
];


export const projectImages: Record<string,string> = {
  "palm-residence":"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "cedar-villa":"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  "glass-house":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "harbor-loft":"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
};

export const tasks: TaskItem[] = [
  { id:"t1", title:"Confirm kitchen cabinet shop drawings", description:"Review cabinet elevations against Sheet A-405 before fabrication release.", priority:"Critical", assignee:"Elena Brooks", dueDate:"2026-07-02", project:"Palm Residence", status:"Review", progress:82, comments:["Owner selected walnut finish.","Waiting for appliance cut-sheet."], attachments:["A-405 Kitchen Elevation.pdf"] },
  { id:"t2", title:"Schedule rough plumbing inspection", description:"Coordinate city inspection after pressure test and before insulation crew arrives.", priority:"High", assignee:"Caleb Grant", dueDate:"2026-07-05", project:"Cedar Villa", status:"In Progress", progress:55, comments:["Permit portal request submitted."], attachments:["InspectionChecklist.docx"] },
  { id:"t3", title:"Validate landscape stone delivery", description:"Confirm quantity, truck access, staging area, and delivery window with supplier.", priority:"Medium", assignee:"Priya Shah", dueDate:"2026-07-08", project:"Glass House", status:"Pending", progress:15, comments:[], attachments:["StoneQuote.pdf"] },
  { id:"t4", title:"Close steel inspection punch item", description:"Upload engineer response and mark the field correction complete.", priority:"High", assignee:"Marcus Reed", dueDate:"2026-07-01", project:"Harbor Loft Remodel", status:"Completed", progress:100, comments:["Inspector accepted field photo."], attachments:["SteelPunchPhoto.jpg"] },
  { id:"t5", title:"Finalize low-VOC paint schedule", description:"Match finish selections to approved rooms and update budget allowance.", priority:"Low", assignee:"Sofia Ortiz", dueDate:"2026-07-12", project:"Palm Residence", status:"Pending", progress:25, comments:["Homeowner prefers warm white palette."], attachments:[] }
];

export const scheduleEvents: ScheduleEvent[] = [
  { id:"s1", title:"Palm Residence finish walkthrough", type:"Meeting", project:"Palm Residence", date:"2026-07-01", time:"09:00", owner:"Marcus Reed", status:"Confirmed", reminder:"30 min before" },
  { id:"s2", title:"Cedar Villa plumbing inspection", type:"Inspection", project:"Cedar Villa", date:"2026-07-05", time:"13:30", owner:"Caleb Grant", status:"Scheduled", reminder:"1 day before" },
  { id:"s3", title:"Glass House stone delivery", type:"Delivery", project:"Glass House", date:"2026-07-08", time:"07:00", owner:"Priya Shah", status:"At risk", reminder:"2 hours before" },
  { id:"s4", title:"Harbor Loft steel sign-off", type:"Milestone", project:"Harbor Loft Remodel", date:"2026-07-03", time:"15:00", owner:"Elena Brooks", status:"Completed", reminder:"None" },
  { id:"s5", title:"Weekly crew planning", type:"Crew", project:"Portfolio", date:"2026-07-06", time:"08:00", owner:"Marcus Reed", status:"Confirmed", reminder:"15 min before" }
];

export const dailyLogs: DailyLog[] = [
  { id:"dl1", date:"2026-06-28", project:"Palm Residence", weather:"Clear, 84°F, light wind", progress:"Interior finish carpentry reached 68% completion.", crew:["Finish carpenters x4","Site supervisor","Electrician x1"], equipment:["Laser level","Table saw","Material lift"], materials:["Walnut cabinet fronts","Low-VOC primer","LED trim kits"], completed:["Kitchen island backing","Primary closet shelving","Electrical trim verification"], safety:"No incidents. PPE compliance verified.", photos:["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"], notes:"Owner requested photo update of kitchen island before countertop template.", approved:true },
  { id:"dl2", date:"2026-06-27", project:"Cedar Villa", weather:"Cloudy, 71°F", progress:"Rough plumbing lines pressure-tested successfully.", crew:["Plumbers x3","Project manager"], equipment:["Pressure tester","Pipe threader"], materials:["PEX tubing","Copper fittings"], completed:["Primary bath supply lines","Laundry drain rough-in"], safety:"One near-miss reported and documented; no injury.", photos:["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80"], notes:"Inspection request submitted for July 5.", approved:false }
];

export const rfis: RFI[] = [
  { id:"rfi1", number:"RFI-042", title:"Clarify kitchen soffit height", description:"Sheet A-405 conflicts with reflected ceiling plan around the island lighting pocket.", project:"Palm Residence", requestedBy:"Marcus Reed", assignedTo:"Northstar Architecture", dueDate:"2026-07-03", priority:"High", status:"Pending Response", attachments:["A-405.pdf","RCP-201.pdf"], responses:[{author:"Marcus Reed", message:"Please confirm final soffit height before cabinet release.", time:"Today 8:15 AM"}] },
  { id:"rfi2", number:"RFI-043", title:"Structural steel connection detail", description:"Field crew needs clarification on weld callout at gridline C/4.", project:"Harbor Loft Remodel", requestedBy:"Elena Brooks", assignedTo:"Vector Engineering", dueDate:"2026-07-01", priority:"Critical", status:"Open", attachments:["S-203 Markup.pdf"], responses:[] },
  { id:"rfi3", number:"RFI-039", title:"Landscape drainage slope", description:"Confirm minimum slope from pool deck to east planting bed.", project:"Glass House", requestedBy:"Priya Shah", assignedTo:"Desert Form Studio", dueDate:"2026-06-25", priority:"Medium", status:"Answered", attachments:["L-110.pdf"], responses:[{author:"Desert Form Studio", message:"Use 1.5% fall toward linear drain per revised sketch.", time:"Jun 24"}] }
];

export const teamMembers: TeamMember[] = [
  { id:"tm1", name:"Marcus Reed", email:"marcus@atlasbuildco.com", phone:"+1 (512) 555-0142", jobTitle:"Principal Contractor", company:"Atlas Build Co.", role:"Contractor", activeProjects:["Palm Residence","Cedar Villa"], status:"Active", photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
  { id:"tm2", name:"Elena Brooks", email:"elena@atlasbuildco.com", phone:"+1 (512) 555-0173", jobTitle:"Site Supervisor", company:"Atlas Build Co.", role:"Site Supervisor", activeProjects:["Palm Residence","Harbor Loft Remodel"], status:"Active", photo:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
  { id:"tm3", name:"Caleb Grant", email:"caleb@northlinehomes.com", phone:"+1 (303) 555-0184", jobTitle:"MEP Coordinator", company:"Northline Homes", role:"Engineer", activeProjects:["Cedar Villa"], status:"Active", photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
  { id:"tm4", name:"Avery Johnson", email:"avery@example.com", phone:"+1 (512) 555-0128", jobTitle:"Homeowner", company:"Palm Residence", role:"Homeowner", activeProjects:["Palm Residence"], status:"Active", photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
  { id:"tm5", name:"Nora Whitaker", email:"nora@northstararch.com", phone:"+1 (415) 555-0160", jobTitle:"Project Architect", company:"Northstar Architecture", role:"Architect", activeProjects:["Palm Residence","Glass House"], status:"Invited", photo:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80" }
];

export const drawings: Drawing[] = [
  { id:"d1", number:"A-101", title:"Floor Plan - Level 1", project:"Palm Residence", trade:"Architecture", revision:"Rev 12", uploadedAt:"2026-06-28", size:"8.4 MB", status:"Current", comments:14, thumbnail:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80" },
  { id:"d2", number:"A-405", title:"Kitchen Interior Elevations", project:"Palm Residence", trade:"Interiors", revision:"Rev 09", uploadedAt:"2026-06-26", size:"5.1 MB", status:"Review", comments:8, thumbnail:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=80" },
  { id:"d3", number:"S-203", title:"Steel Connection Details", project:"Harbor Loft Remodel", trade:"Structural", revision:"Rev 04", uploadedAt:"2026-06-24", size:"11.2 MB", status:"Current", comments:5, thumbnail:"https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=700&q=80" },
  { id:"d4", number:"L-110", title:"Landscape Drainage Plan", project:"Glass House", trade:"Landscape", revision:"Rev 07", uploadedAt:"2026-06-21", size:"6.7 MB", status:"Superseded", comments:2, thumbnail:"https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=700&q=80" }
];
