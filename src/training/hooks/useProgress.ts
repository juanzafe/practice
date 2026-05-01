import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "training-completed-ids";

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function saveCompleted(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(loadCompleted);

  useEffect(() => {
    saveCompleted(completed);
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
