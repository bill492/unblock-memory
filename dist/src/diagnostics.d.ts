import { RetrievalTelemetry } from "./retrieval-telemetry.js";
type Whisperer = "skill" | "memory";
type Outcome = "missing_key" | "typesafe_disabled" | "no_candidates" | "rejected" | "cooldown" | "emitted" | "failed" | "timed_out" | "cancelled" | "unavailable" | "payload_limit" | "redundancy_unavailable" | "recall_not_needed" | "queries_generated" | "judge_candidate_failed" | "input_too_large";
/** Process-local, content-free and bounded. Agent IDs are keys, never included in snapshots. */
export declare class WhispererDiagnostics {
    #private;
    static shared(): WhispererDiagnostics;
    record(agentId: string, whisperer: Whisperer, outcome: Outcome): void;
    measureMemory(agentId: string, observation: Parameters<RetrievalTelemetry["record"]>[1]): void;
    measureSearch(agentId: string, observation: Parameters<RetrievalTelemetry["record"]>[1]): void;
    snapshot(agentId: string): {
        skill: {
            cancelled?: number | undefined;
            unavailable?: number | undefined;
            rejected?: number | undefined;
            failed?: number | undefined;
            timed_out?: number | undefined;
            missing_key?: number | undefined;
            typesafe_disabled?: number | undefined;
            no_candidates?: number | undefined;
            cooldown?: number | undefined;
            emitted?: number | undefined;
            payload_limit?: number | undefined;
            redundancy_unavailable?: number | undefined;
            recall_not_needed?: number | undefined;
            queries_generated?: number | undefined;
            judge_candidate_failed?: number | undefined;
            input_too_large?: number | undefined;
        };
        memory: {
            cancelled?: number | undefined;
            unavailable?: number | undefined;
            rejected?: number | undefined;
            failed?: number | undefined;
            timed_out?: number | undefined;
            missing_key?: number | undefined;
            typesafe_disabled?: number | undefined;
            no_candidates?: number | undefined;
            cooldown?: number | undefined;
            emitted?: number | undefined;
            payload_limit?: number | undefined;
            redundancy_unavailable?: number | undefined;
            recall_not_needed?: number | undefined;
            queries_generated?: number | undefined;
            judge_candidate_failed?: number | undefined;
            input_too_large?: number | undefined;
        };
        telemetry: {
            scope: string;
            operations: {
                [k: string]: {
                    calls: number;
                    outcomes: {
                        ok?: number | undefined;
                        cancelled?: number | undefined;
                        partial?: number | undefined;
                        skipped?: number | undefined;
                        failed?: number | undefined;
                        empty?: number | undefined;
                        timed_out?: number | undefined;
                    };
                    slowestRecent: {
                        outcome: "ok" | "cancelled" | "partial" | "skipped" | "failed" | "empty" | "timed_out";
                        setupMs?: number | undefined;
                        queueWaitMs?: number | undefined;
                        metadataMs?: number | undefined;
                        storeSetupMs?: number | undefined;
                        bm25Ms?: number | undefined;
                        vectorMs?: number | undefined;
                        vectorIndexCheckMs?: number | undefined;
                        vectorScopeMs?: number | undefined;
                        embeddingMs?: number | undefined;
                        vectorScanMs?: number | undefined;
                        hydrationMs?: number | undefined;
                        vectorMappingMs?: number | undefined;
                        vectorOtherMs?: number | undefined;
                        passageMs?: number | undefined;
                        candidatePrepMs?: number | undefined;
                        retrievalOtherMs?: number | undefined;
                        otherMs?: number | undefined;
                        retrievalMs?: number | undefined;
                        judgeMs?: number | undefined;
                        metadataReloads?: number | undefined;
                        vectorScanAttempts?: number | undefined;
                        elapsedMs?: number | undefined;
                        gateMs?: number | undefined;
                        generationMs?: number | undefined;
                        candidates?: number | undefined;
                        eligible?: number | undefined;
                        results?: number | undefined;
                        contextChars?: number | undefined;
                    }[];
                    measurements: {
                        [k: string]: {
                            total: number;
                            samples: number;
                            recentSamples: number;
                            p50: number | null;
                            p95: number | null;
                        };
                    };
                };
            };
        };
        scope: string;
    };
}
export {};
