export type Role = "admin" | "contractor" | "buyer";
export type Plan = "free" | "premium";

export interface UserProfile { id:string; name:string; email:string; role:Role; plan:Plan; company:string; phone:string; address:string; bio:string; title:string; avatar?:string; }
export interface Project { id:string; name:string; client:string; location:string; status:"On track"|"At risk"|"Delayed"|"Approval needed"; progress:number; budget:number; spent:number; stage:string; lastSync:string; contractor:string; startDate:string; completionDate:string; }
export interface Approval { id:string; title:string; project:string; requester:string; amount:number; status:"Pending"|"Approved"|"Rejected"; risk:"Low"|"Medium"|"High"; timeline:string[]; }
export interface Activity { id:string; title:string; description:string; time:string; type:"approval"|"message"|"sync"|"budget"|"inspection"|"payment"; }
export interface Material { id:string; name:string; category:string; price:number; stock:string; sustainability:"Standard"|"Premium"|"Eco"; supplier:string; leadTime:string; }
export interface Proposal { id:string; number:string; client:string; project:string; status:"Draft"|"Sent"|"Viewed"|"Accepted"|"Rejected"|"Expired"; scope:string; laborCost:number; materialCost:number; tax:number; discount:number; total:number; timeline:string; terms:string; createdAt:string; }
export interface Contract { id:string; number:string; client:string; contractor:string; project:string; status:"Signed"|"Pending"|"Completed"|"Cancelled"; value:number; milestones:string[]; paymentSchedule:string; deliverables:string[]; attachments:string[]; }
export interface InvoiceItem { description:string; quantity:number; unitPrice:number; }
export interface Invoice { id:string; number:string; client:string; project:string; status:"Paid"|"Pending"|"Overdue"|"Cancelled"; dueDate:string; issuedAt:string; items:InvoiceItem[]; tax:number; discount:number; total:number; recentPayment?:string; }
export interface NotificationItem { id:string; title:string; body:string; type:"Approval"|"Payment"|"System"|"Message"|"Project"; time:string; read:boolean; }
