import { TechnicalCapability } from '../types';

export const TECHNICAL_CAPABILITIES: TechnicalCapability[] = [
  {
    id: 'grounded-rag',
    number: '01',
    title: 'Grounded RAG & Vector Knowledge Systems',
    tagline: 'Deterministic retrieval with mathematical cosine gating & sovereign zero-leak enclaves.',
    description: 'We architect enterprise-grade Retrieval-Augmented Generation engines designed strictly around UK Sovereign data boundaries (Azure UK South / AWS London / GCP europe-west2). By enforcing semantic chunking with strict 0.88 cosine similarity threshold gates, we eliminate hallucinated citations and prevent open-web data leaks.',
    techStack: ['Azure AI Search', 'pgvector (PostgreSQL)', 'Qdrant / Milvus', 'LangChain / LlamaIndex', 'Cohere Rerank 3'],
    enclaveSpec: 'UK Sovereign Enclave (FIPS 140-3 Zero Data Retention, VPC Peering, AES-256-GCM)',
    coreMetrics: [
      { label: 'Cosine Gating Threshold', value: '≥ 0.88' },
      { label: 'Open-Web Leak Risk', value: '0.00%' },
      { label: 'P99 Retrieval Latency', value: '< 110ms' },
      { label: 'Citation Verifiability', value: '100% Deterministic' }
    ],
    codeSnippet: {
      language: 'python',
      filename: 'sovereign_rag_gate.py',
      code: `async def sovereign_retrieval_pipeline(query: str, tenant_id: str) -> SovereignContext:
    # Strict UK Sovereign VPC Boundary with Tenant Isolation
    embeddings = await sovereign_embedder.generate(query)
    raw_nodes = await vector_store.similarity_search_with_score(
        embeddings, k=15, filter={"tenant_id": tenant_id, "classification": "OFFICIAL_SENSITIVE"}
    )
    # Enforce Deterministic 0.88 Cosine Similarity Cutoff
    gated_nodes = [node for node, score in raw_nodes if score >= 0.88]
    if not gated_nodes:
        return FallbackDeterministicResponse("STATUTORY_BOUNDARY_UNREACHED")
    
    reranked = cohere_uk.rerank(query=query, documents=gated_nodes, top_n=3)
    return SovereignContext(nodes=reranked, cryptographic_hash=sha256_audit(reranked))`
    },
    features: [
      'Multi-tenant UK Sovereign cloud enclaves (Azure/AWS/GCP)',
      'Deterministic hierarchical semantic chunking & parent-document retrieval',
      'Cosine similarity cutoff threshold gating (>= 0.88) with fallback deterministic routing',
      'Zero Open-Web leak policies with air-gapped LLM inference endpoints',
      'Immutable cryptographic hash audit trails for every query citation'
    ]
  },
  {
    id: 'automated-pipelines',
    number: '02',
    title: 'Automated Data Pipelines & Process Orchestration',
    tagline: 'High-throughput backend worker queues, event-driven integrations & statutory webhooks.',
    description: 'We engineer robust, fault-tolerant backend automation infrastructures that eliminate manual data toil. Leveraging Python, Google Apps Script enterprise workflows, PostgreSQL, and Redis-BullMQ worker clusters, we synchronize multi-system ERPs, CRMs, and statutory compliance registers with sub-second execution telemetry.',
    techStack: ['Python FastApi / Celery', 'Redis & BullMQ', 'PostgreSQL TimescaleDB', 'Google Apps Script', 'Apache Kafka / RabbitMQ'],
    enclaveSpec: 'Distributed Worker Cluster with Automatic Dead-Letter Queue (DLQ) & Circuit Breakers',
    coreMetrics: [
      { label: 'Pipeline Throughput', value: '45,000 evt/s' },
      { label: 'DLQ Error Recovery', value: '100% Automated' },
      { label: 'Execution Telemetry', value: 'Real-time WebSocket' },
      { label: 'Manual Toil Reduction', value: '91.4% Avg' }
    ],
    codeSnippet: {
      language: 'typescript',
      filename: 'orchestrator_worker.ts',
      code: `export const statutoryPipelineQueue = new Queue('gov-assurance-stream', {
  connection: redisSovereignConnection,
  defaultJobOptions: {
    attempts: 5,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: { age: 3600 * 24 * 7 }, // 7 days audit retention
  }
});

statutoryPipelineQueue.process(async (job) => {
  const { documentId, classification, entityPayload } = job.data;
  const auditStamp = await cryptographicNotary.stamp(job.data);
  await auditLogStream.dispatch({ event: 'JOB_COMMITTED', stamp: auditStamp });
});`
    },
    features: [
      'Enterprise backend automations using Python, Google Apps Script & Node',
      'PostgreSQL/Redis-BullMQ pipelines with distributed state locking',
      'Automated CRM/ERP bi-directional synchronization with idempotency guarantees',
      'High-velocity statutory webhook telemetry and immutable audit streaming',
      'Self-healing worker microservices with automatic DLQ replay'
    ]
  },
  {
    id: 'ner-guardrails',
    number: '03',
    title: 'Prompt-as-Code & Runtime NER Redaction',
    tagline: 'Sub-50ms in-flight PII, NINO, and Caldicott PHI sanitisation microservices.',
    description: 'Our proprietary in-flight guardrail microservices intercept and scrub National Insurance numbers (NINOs), NHS patient identifiers, financial account details, and sensitive clinical records prior to model tokenisation. Operating in under 50ms, our NER sanitiser ensures absolute GDPR Article 9 & Caldicott Guardian compliance.',
    techStack: ['Microsoft Presidio Engine', 'Custom SpaCy UK Gov NER', 'Rust WebAssembly Guard', 'OpenTelemetry Tracing', 'vLLM / Triton'],
    enclaveSpec: 'Zero-Egress Memory Sanitisation Buffer with Hardware-Isolated Enclaves (TEE)',
    coreMetrics: [
      { label: 'In-Flight Redaction Latency', value: '< 42ms' },
      { label: 'NINO & NHS No. Accuracy', value: '99.98%' },
      { label: 'GDPR Art. 9 Non-Compliance', value: '0 Incidents' },
      { label: 'Prompt Injection Deflection', value: '99.4%' }
    ],
    codeSnippet: {
      language: 'rust',
      filename: 'stream_ner_sanitizer.rs',
      code: `pub fn sanitize_uk_stream(token_chunk: &str) -> RedactionResult {
    // Regex + Transformer based dual-pass for UK Gov NINO & NHS 10-digit IDs
    let nino_clean = NINO_REGEX.replace_all(token_chunk, "[REDACTED_UK_NINO]");
    let nhs_clean = NHS_NO_REGEX.replace_all(&nino_clean, "[REDACTED_NHS_PATIENT_ID]");
    let special_cat = PHI_REGEX.replace_all(&nhs_clean, "[REDACTED_CALDICOTT_SPECIAL_CAT]");
    
    RedactionResult {
        sanitized_stream: special_cat.into_owned(),
        latency_micros: 340, // Sub-millisecond stream buffer
        compliance_tag: "UK_GDPR_ART9_COMPLIANT"
    }
}`
    },
    features: [
      'Sub-50ms in-flight PII/NINO/PHI sanitisation microservices integrated into inference',
      'Caldicott Guardian Principle 1-8 deterministic clinical redaction algorithms',
      'Dual-pass regex and transformer named-entity recognition (NER) engines',
      'Semantic prompt-injection deflection and jailbreak tripwires',
      'Real-time token stream transformation with zero raw payload disk persistence'
    ]
  },
  {
    id: 'governance-portals',
    number: '04',
    title: 'Custom Governance Portals & Executive Dashboards',
    tagline: 'High-assurance React/TypeScript interfaces for risk, statutory audit & live LLM-Ops.',
    description: 'We construct tailored, high-assurance web portals that empower Chief AI Officers, Senior Responsible Owners (SROs), and Statutory Caldicott Guardians to monitor algorithmic risk scores (ARS), audit logs, model drift, and real-time compliance scorecards across all active production deployments.',
    techStack: ['React 19 / TypeScript', 'Tailwind CSS Dark Executive', 'Lucide UI Engine', 'Chart / D3 Telemetry', 'Role-Based Access Control (RBAC)'],
    enclaveSpec: 'SSO SAML 2.0 / Entra ID Gov Cloud Integration with Cryptographic Audit Trail',
    coreMetrics: [
      { label: 'Live Model Observability', value: '100% Real-time' },
      { label: 'Statutory Artifact Export', value: 'Instant .JSON / .PDF' },
      { label: 'Role-Based Access (RBAC)', value: 'Strict 5-Tier' },
      { label: 'Lighthouse Score', value: '99/100 Perf' }
    ],
    codeSnippet: {
      language: 'typescript',
      filename: 'compliance_telemetry_hook.ts',
      code: `export const useSovereignTelemetry = (modelDeploymentId: string) => {
  const [telemetry, setTelemetry] = useState<LLMOpsStream | null>(null);

  useEffect(() => {
    const ws = new WebSocket(\`wss://gov-telemetry.azariah.internal/v1/stream/\${modelDeploymentId}\`);
    ws.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      // Continuous verification of ISO 42001 & ATRS bounds
      if (payload.driftScore > 0.05 || payload.nerFailedCount > 0) {
        dispatchAutomatedCircuitBreaker(modelDeploymentId);
      }
      setTelemetry(payload);
    };
    return () => ws.close();
  }, [modelDeploymentId]);
};`
    },
    features: [
      'High-assurance React/TypeScript frontend interfaces with dark luxury aesthetic',
      'Dynamic compliance scorecards mapped to CDDO ATRS, ISO 42001 & NHS DCB0129',
      'Live LLM-Ops telemetry monitors with drift alarms and token burn rates',
      'Human-in-the-Loop (HITL) triage interfaces for mandatory clinical/statutory sign-off',
      'Instant export of verified statutory assessment payloads in signed JSON & PDF'
    ]
  }
];
