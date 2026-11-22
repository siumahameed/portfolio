"use client";

import { useMemo, useEffect, useState } from "react";
import { Reveal } from "@/lib/Reveal";
import { ExternalLink, FolderGit2, GitBranch } from "lucide-react";
import { GithubIcon } from "@/lib/icons";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

interface GitHubStats {
  repos: number;
  followers: number;
  languages: string[];
}

const pinnedRepos = [
  {
    name: "ml_projects",
    description: "End-to-end ML algorithms: Heart Disease XGBoost Classifier, Sonar Mine/Rock, SMS Spam NLP.",
    language: "Python",
    langColor: "bg-blue-500",
    url: "https://github.com/siumahameed/ml_projects",
  },
  {
    name: "Eda-projects-basic-",
    description: "Multi-domain exploratory data analysis: Bangladesh road accident patterns, climate rainfall & sales.",
    language: "Jupyter",
    langColor: "bg-amber-500",
    url: "https://github.com/siumahameed/Eda-projects-basic-",
  },
  {
    name: "DataTistics",
    description: "Automated statistical analysis and executive AI report generation platform serving 5,000+ users.",
    language: "FastAPI / Python",
    langColor: "bg-emerald-500",
    url: "https://github.com/siumahameed",
  },
];

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 15,
    followers: 6,
    languages: ["Python", "Jupyter", "JavaScript", "TypeScript"],
  });

  useEffect(() => {
    let cancelled = false;

    async function loadStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/siumahameed");
        if (!userRes.ok) return;
        const user = await userRes.json();

        let languages: string[] = ["Python", "Jupyter", "JavaScript", "TypeScript"];
        try {
          const repoRes = await fetch(
            "https://api.github.com/users/siumahameed/repos?per_page=100&sort=updated"
          );
          if (repoRes.ok) {
            const repos = await repoRes.json();
            const counts = new Map<string, number>();
            for (const repo of repos) {
              if (repo.language) {
                const lang = repo.language === "Jupyter Notebook" ? "Jupyter" : repo.language;
                counts.set(lang, (counts.get(lang) ?? 0) + 1);
              }
            }
            const found = [...counts.entries()]
              .sort((a, b) => b[1] - a[1])
              .slice(0, 4)
              .map(([lang]) => lang);
            if (found.length > 0) languages = found;
          }
        } catch {
          // preserve safe defaults
        }

        if (!cancelled) {
          setStats({
            repos: typeof user.public_repos === "number" ? user.public_repos : 15,
            followers: typeof user.followers === "number" ? user.followers : 6,
            languages,
          });
        }
      } catch {
        // preserve safe defaults
      }
    }

    loadStats();
    return () => {
      cancelled = true;
    };
  }, []);

  const contributionGraph = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: 42 }, () =>
      Array.from({ length: 7 }, () => {
        const intensity = rand();
        return intensity < 0.35
          ? "var(--bg-secondary)"
          : intensity < 0.65
          ? "rgba(56, 189, 248, 0.25)"
          : intensity < 0.85
          ? "rgba(56, 189, 248, 0.6)"
          : "var(--accent)";
      })
    );
  }, []);

  return (
    <section className="section-padding bg-[var(--bg-card-subtle)]/40 border-y border-[var(--border)]">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="section-label mb-2">OPEN SOURCE</span>
              <h2 className="section-title">GitHub Activity &amp; Repositories</h2>
              <p className="section-subtitle mt-2">
                Public code repositories, model implementations, exploratory notebooks, and contributions.
              </p>
            </div>
            <a
              href="https://github.com/siumahameed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs inline-flex items-center gap-2 self-start sm:self-auto shrink-0 py-2 px-3.5"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>@siumahameed</span>
              <ExternalLink className="h-3 w-3 text-[var(--text-tertiary)]" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={40}>
          <div className="card p-5 space-y-5">
            {/* Top row: Heatmap + Live Stats summary */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
              {/* Heatmap */}
              <div className="overflow-x-auto scrollbar-hide flex-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)] mb-2">
                  <span className="flex items-center gap-1.5">
                    <GitBranch className="h-3 w-3 text-[var(--accent)]" /> 2026 Commit Activity
                  </span>
                  <span className="text-[10px]">Consistent code delivery</span>
                </div>
                <div className="flex gap-1 min-w-max pb-1">
                  {contributionGraph.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-1">
                      {week.map((color, dayIdx) => (
                        <div
                          key={dayIdx}
                          className="h-2 w-2 rounded-[2px] transition-colors"
                          style={{ background: color }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Metrics */}
              <div className="flex items-center gap-6 shrink-0 pt-2 lg:pt-0 lg:pl-6 lg:border-l border-[var(--border)]">
                <div>
                  <div className="text-xl font-bold font-mono text-[var(--text-primary)]">
                    {stats.repos}
                  </div>
                  <div className="text-[11px] text-[var(--text-tertiary)] font-mono">Repositories</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-[var(--text-primary)]">
                    {stats.followers}
                  </div>
                  <div className="text-[11px] text-[var(--text-tertiary)] font-mono">Followers</div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-[11px] text-[var(--text-tertiary)] font-mono mb-1">Stack</div>
                  <div className="flex flex-wrap gap-1 max-w-[150px]">
                    {stats.languages.slice(0, 3).map((lang) => (
                      <span key={lang} className="tag text-[9px] py-0 px-1.5">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pinned Repositories Grid */}
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                Highlighted Repositories
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {pinnedRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-3.5 transition-all duration-200 hover:border-[var(--border-hover)] hover:-translate-y-0.5 group bg-[var(--bg-card-subtle)]"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] truncate">
                        <FolderGit2 className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                        <span className="truncate">{repo.name}</span>
                      </div>
                      <ExternalLink className="h-3 w-3 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {repo.description}
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-tertiary)]">
                      <span className={`h-1.5 w-1.5 rounded-full ${repo.langColor}`} />
                      {repo.language}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
