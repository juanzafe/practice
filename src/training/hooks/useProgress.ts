import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "training-completed-ids";
const API = "/api/progress";

function loadFromStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

async function loadFromFile(): Promise<string[]> {
  try {
    const res = await fetch(API);
    if (!res.ok) return [];
    return (await res.json()) as string[];
  } catch {
    return [];
  }
}

async function saveToFile(ids: string[]): Promise<void> {
  try {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ids),
    });
  } catch {
    // Dev server no disponible, continúa con localStorage
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(
    () => new Set(loadFromStorage())
  );

  // Al montar, sincroniza con el archivo del repo (fuente de verdad)
  useEffect(() => {
    loadFromFile().then(ids => {
      if (ids.length > 0) {
        setCompleted(prev => new Set([...prev, ...ids]));
      }
    });
  }, []);

  // Persiste en localStorage Y en el archivo del repo en cada cambio
  useEffect(() => {
    const ids = [...completed];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    saveToFile(ids);
  }, [completed]);

  const markCompleted = useCallback((id: string) => {
    setCompleted(prev => new Set([...prev, id]));
  }, []);

  const markIncomplete = useCallback((id: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (id: string) => completed.has(id),
    [completed]
  );

  return { completed, markCompleted, markIncomplete, isCompleted };
}
