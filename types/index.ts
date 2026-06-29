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

export type Priority = "Low"|"Medium"|"High"|"Critical";
export interface TaskItem { id:string; title:string; description:string; priority:Priority; assignee:string; dueDate:string; project:string; status:"Pending"|"In Progress"|"Review"|"Completed"; progress:number; comments:string[]; attachments:string[]; }
export interface ScheduleEvent { id:string; title:string; type:"Milestone"|"Inspection"|"Delivery"|"Crew"|"Meeting"|"Deadline"; project:string; date:string; time:string; owner:string; status:"Scheduled"|"Confirmed"|"At risk"|"Completed"; reminder:string; }
export interface DailyLog { id:string; date:string; project:string; weather:string; progress:string; crew:string[]; equipment:string[]; materials:string[]; completed:string[]; safety:string; photos:string[]; notes:string; approved:boolean; }
export interface RFI { id:string; number:string; title:string; description:string; project:string; requestedBy:string; assignedTo:string; dueDate:string; priority:Priority; status:"Draft"|"Open"|"Pending Response"|"Answered"|"Closed"; attachments:string[]; responses:{author:string; message:string; time:string}[]; }
export interface TeamMember { id:string; name:string; email:string; phone:string; jobTitle:string; company:string; role:"Administrator"|"Project Manager"|"Contractor"|"Site Supervisor"|"Engineer"|"Architect"|"Homeowner"|"Viewer"; activeProjects:string[]; status:"Active"|"Invited"|"Suspended"; photo:string; }
export interface Drawing { id:string; number:string; title:string; project:string; trade:string; revision:string; uploadedAt:string; size:string; status:"Current"|"Superseded"|"Review"; comments:number; thumbnail:string; }
