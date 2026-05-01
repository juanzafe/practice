import { useState, useMemo } from "react";
import { ALL_PROBLEMS } from "../problems";
import { useProgress } from "../hooks/useProgress";
import { ProblemCard } from "../components/ProblemCard";
import type { Category, Difficulty, ProblemType } from "../types";
import "./TrainingPage.css";

type FilterCategory = Category | "all";
type FilterDifficulty = Difficulty | "all";
type FilterStatus = "all" | "pending" | "done";
type FilterType = ProblemType | "all";

export default function TrainingPage() {
  const { isCompleted, markCompleted } = useProgress();

  const [filterCategory, setFilterCategory] = useState<FilterCategory>("all");
  const [filterDifficulty, setFilterDifficulty] = useState<FilterDifficulty>("all");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [filterType, setFilterType] = useState<FilterType>("all");

  const totalProblems = ALL_PROBLEMS.length;
  const completedCount = ALL_PROBLEMS.filter(p => isCompleted(p.id)).length;
  const progressPct = Math.round((completedCount / totalProblems) * 100);

  const filtered = useMemo(() => {
    return ALL_PROBLEMS.filter(p => {
      if (filterCategory !== "all" && p.category !== filterCategory) return false;
      if (filterDifficulty !== "all" && p.difficulty !== filterDifficulty) return false;
      if (filterType !== "all" && p.type !== filterType) return false;
      if (filterStatus === "done" && !isCompleted(p.id)) return false;
      if (filterStatus === "pending" && isCompleted(p.id)) return false;
      return true;
    });
  }, [filterCategory, filterDifficulty, filterStatus, filterType, isCompleted]);

  return (
    <div className="training-page">
      <header className="training-header">
        <div className="training-header__text">
          <h1>Frontend Interview Training</h1>
          <p>TypeScript &amp; React · De cero a dios en 2 meses</p>
        </div>
        <div className="training-header__progress">
          <div className="progress-ring">
            <span className="progress-ring__num">{completedCount}</span>
            <span className="progress-ring__total">/ {totalProblems}</span>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar">
              <div className="progress-bar__fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="progress-bar__label">{progressPct}% completado</span>
          </div>
        </div>
      </header>

      <div className="stats-row">
        {(["easy", "medium", "hard"] as Difficulty[]).map(d => {
          const total = ALL_PROBLEMS.filter(p => p.difficulty === d).length;
          const done = ALL_PROBLEMS.filter(p => p.difficulty === d && isCompleted(p.id)).length;
          const label = { easy: "Fácil", medium: "Medio", hard: "Difícil" }[d];
          return (
            <div key={d} className={`stat-chip stat-chip--${d}`}>
              <span className="stat-chip__label">{label}</span>
              <span className="stat-chip__value">{done}/{total}</span>
            </div>
          );
        })}
      </div>

      <div className="filters">
        <label className="filter-group">
          <span>Categoría</span>
          <select value={filterCategory} onChange={e => setFilterCategory(e.target.value as FilterCategory)}>
            <option value="all">Todas</option>
            <option value="typescript">TypeScript</option>
            <option value="react">React</option>
          </select>
        </label>

        <label className="filter-group">
          <span>Dificultad</span>
          <select value={filterDifficulty} onChange={e => setFilterDifficulty(e.target.value as FilterDifficulty)}>
            <option value="all">Todas</option>
            <option value="easy">Fácil</option>
            <option value="medium">Medio</option>
            <option value="hard">Difícil</option>
          </select>
        </label>

        <label className="filter-group">
          <span>Tipo</span>
          <select value={filterType} onChange={e => setFilterType(e.target.value as FilterType)}>
            <option value="all">Todos</option>
            <option value="multiple-choice">Test</option>
            <option value="fill-in-the-blank">Completar código</option>
            <option value="coding">Ejercicio</option>
          </select>
        </label>

        <label className="filter-group">
          <span>Estado</span>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value as FilterStatus)}>
            <option value="all">Todos</option>
            <option value="pending">Pendientes</option>
            <option value="done">Completados</option>
          </select>
        </label>
      </div>

      <p className="results-count">
        Mostrando <strong>{filtered.length}</strong> problema{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="problem-list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            {filterStatus === "done"
              ? "¡Aún no has completado ninguno con estos filtros. ¡A trabajar!"
              : "No hay problemas con estos filtros."}
          </div>
        ) : (
          filtered.map(problem => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              isCompleted={isCompleted(problem.id)}
              onComplete={markCompleted}
            />
          ))
        )}
      </div>
    </div>
  );
}
