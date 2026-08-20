import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export interface AuditReportData {
  auditId: string;
  timestamp: string;
  dataSensitivityLevel: number;
  dataSensitivityLabel: string;
  autonomyLevel: number;
  autonomyLabel: string;
  impactRadiusLevel: number;
  impactRadiusLabel: string;
  arsScore: number;
  tierBadge: string;
  tierDescription: string;
  statutoryRequirements: string[];
  deploymentTopology: string;
  recommendedActions: string[];
}

export const generateAuditPdf = (data: AuditReportData) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // --- BRAND HEADER ---
  doc.setFillColor(11, 15, 25); // #0b0f19
  doc.rect(0, 0, 210, 38, "F");

  doc.setFillColor(234, 179, 8); // #eab308 (yellow-500)
  doc.rect(0, 38, 210, 2, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("AZARIAH CONSULT", 14, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(234, 179, 8);
  doc.text("UK SOVEREIGN TECHNICAL SYSTEMS & AI ASSURANCE", 14, 25);

  doc.setFontSize(8);
  doc.setTextColor(156, 163, 175);
  doc.text(`AUDIT REF: ${data.auditId}`, 145, 18);
  doc.text(`GENERATED: ${data.timestamp}`, 145, 24);
  doc.text("STATUS: STATUTORY BASELINE", 145, 30);

  // --- SECTION 1: EXECUTIVE SUMMARY ---
  doc.setFontSize(13);
  doc.setTextColor(17, 24, 39);
  doc.setFont("helvetica", "bold");
  doc.text("1. Algorithmic Risk Assessment (ARS) Executive Summary", 14, 49);

  autoTable(doc, {
    startY: 53,
    head: [["Evaluation Metric", "Assigned Parameter", "Weighted Risk Index"]],
    body: [
      ["Data Sensitivity Classification", data.dataSensitivityLabel, `L${data.dataSensitivityLevel} (Scale 1-4)`],
      ["System Autonomy & Oversight", data.autonomyLabel, `L${data.autonomyLevel} (Scale 1-4)`],
      ["Statutory Blast Radius / Impact", data.impactRadiusLabel, `L${data.impactRadiusLevel} (Scale 1-4)`],
      ["Calculated Algorithmic Score (ARS)", "Formula: Data * (Autonomy + Radius)", `${data.arsScore} / 32 Maximum`],
      ["Statutory Assurance Classification", data.tierBadge, "MANDATORY STATUTORY GOVERNANCE"],
    ],
    theme: "grid",
    headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255], fontStyle: "bold" },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 70 },
      1: { cellWidth: 80 },
      2: { fontStyle: "bold", halign: "center" },
    },
    styles: { fontSize: 8.5, cellPadding: 2.8 },
  });

  // --- SECTION 2: STATUTORY COMPLIANCE BLUEPRINT ---
  const currentY = (doc as any).lastAutoTable.finalY + 10;

  doc.setFontSize(13);
  doc.setTextColor(17, 24, 39);
  doc.setFont("helvetica", "bold");
  doc.text("2. Statutory Framework Compliance & Assurance Scope", 14, currentY);

  const statutoryRows = data.statutoryRequirements.map((req, idx) => [
    `ST-${(idx + 1).toString().padStart(2, "0")}`,
    req,
    "Mandatory Pre-Deployment Signoff",
  ]);

  autoTable(doc, {
    startY: currentY + 4,
    head: [["Code", "Statutory Framework Requirement", "Assurance Gate"]],
    body: statutoryRows,
    theme: "striped",
    headStyles: { fillColor: [234, 179, 8], textColor: [0, 0, 0], fontStyle: "bold" },
    columnStyles: {
      0: { fontStyle: "bold", halign: "center", cellWidth: 20 },
      1: { cellWidth: 120 },
      2: { halign: "center" },
    },
    styles: { fontSize: 8.5, cellPadding: 2.5 },
  });

  // --- SECTION 3: TECHNICAL ARCHITECTURE ---
  const topologyY = (doc as any).lastAutoTable.finalY + 10;

  doc.setFontSize(13);
  doc.setTextColor(17, 24, 39);
  doc.setFont("helvetica", "bold");
  doc.text("3. Target Operating Model & Sovereign Topology", 14, topologyY);

  autoTable(doc, {
    startY: topologyY + 4,
    head: [["Technical Domain", "Mandatory Architecture Specification"]],
    body: [
      ["Cloud Enclave", data.deploymentTopology],
      ["Data Ingestion Buffer", "Sub-50ms In-Flight Hardware-Isolated NER Token Redaction (Article 9 UK GDPR)."],
      ["Clinical / Decision Gateways", "Deterministic JSON Schema validation with auditable cryptographic sign-off logs."],
      ["Continuous Monitoring", "Automated drift telemetry with automated kill-switch failover mechanisms."],
    ],
    theme: "grid",
    headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255] },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 50 },
      1: { cellWidth: 130 },
    },
    styles: { fontSize: 8.5, cellPadding: 2.8 },
  });

  // --- FOOTER ---
  const footerY = 275;
  doc.setFillColor(243, 244, 246);
  doc.rect(0, footerY - 5, 210, 27, "F");

  doc.setFontSize(7.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(75, 85, 99);
  doc.text("AZARIAH CONSULT LTD | UK SOVEREIGN ASSURANCE & AI COMPLIANCE", 14, footerY);

  doc.setFont("helvetica", "normal");
  doc.text("Automated statutory risk scoping engineered under NHS DCB0129, ATRS Tier-2, and ISO/IEC 42001.", 14, footerY + 4);
  doc.text("For technical validation, architectures, and signed Hazard Logs, schedule an assurance discovery session.", 14, footerY + 8);
  doc.setTextColor(202, 138, 4);
  doc.text("Portal: https://azariah-ai-governance.vercel.app", 14, footerY + 12);

  doc.save(`Azariah-Consult-Audit-Report-${data.auditId}.pdf`);
};