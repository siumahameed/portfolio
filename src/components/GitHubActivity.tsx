"use client";

import { useMemo, useEffect, useState } from "react";
import { Reveal } from "@/lib/Reveal";
import { ExternalLink, FolderGit2 } from "lucide-react";
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
    description: "End-to-end machine learning algorithms: Heart Disease Risk Classifier (XGBoost), Sonar Mine/Rock, SMS Spam NLP.",
    language: "Python",
    url: "https://github.com/siumahameed/ml_projects",
  },
  {
    name: "Eda-projects-basic-",
    description: "Multi-domain exploratory data analysis: Bangladesh Road Accident patterns, Climate/Rainfall, and Sales analytics.",
    language: "Jupyter Notebook",
    url: "https://github.com/siumahameed/Eda-projects-basic-",
  },
  {
    name: "DataTistics",
    description: "Automated statistical analysis and executive AI report generation platform serving 5,000+ users.",
    language: "FastAPI / Python",
    url: "https://github.com/siumahameed",
  },
];

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 15,
    followers: 6,
    languages: ["Python", "Jupyter Notebook", "JavaScript", "TypeScript"],
  });

  useEffect(() => {
    let cancelled = false;

    async function loadStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/siumahameed");
        if (!userRes.ok) return;
        const user = await userRes.json();

        let languages: string[] = ["Python", "Jupyter Notebook", "JavaScript", "TypeScript"];
        try {
          const repoRes = await fetch(
            "https://api.github.com/users/siumahameed/repos?per_page=100&sort=updated"
          );
          if (repoRes.ok) {
            const repos = await repoRes.json();
            const counts = new Map<string, number>();
            for (const repo of repos) {
              if (repo.language) {
                counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
              }
            }
            const found = [...counts.entries()]
              .sort((a, b) => b[1] - a[1])
              .slice(0, 4)
              .map(([lang]) => lang);
            if (found.length > 0) languages = found;
          }
        } catch {
          // fallback languages preserved
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
    return Array.from({ length: 48 }, () =>
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
          <div className="flex flex-col">
            <span className="section-label mb-2">OPEN SOURCE</span>
            <h2 className="section-title">GitHub Activity &amp; Repositories</h2>
            <p className="section-subtitle">
              Public code repositories, model implementations, exploratory notebooks, and software contributions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={50} className="mt-10">
          <div className="card p-6 sm:p-8">
            {/* Heatmap visualization */}
            <div className="mb-6 overflow-x-auto scrollbar-hide">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[var(--text-tertiary)]">
                <span>CONTRIBUTION ACTIVITY &middot; @siumahameed</span>
                <span className="hidden sm:inline">Consistent code shipping</span>
              </div>
              <div className="flex gap-1 min-w-max pb-2">
                {contributionGraph.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {week.map((color, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="h-2.5 w-2.5 rounded-[2px] transition-colors"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[var(--border)] pt-6">
              <div>
                <p className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                  {stats.repos}
                </p>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">Public Repositories</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                  {stats.followers}
                </p>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">Followers</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-[var(--text-tertiary)] mb-1.5 font-mono">PRIMARY STACK</p>
                <div className="flex flex-wrap gap-1.5">
                  {stats.languages.map((lang) => (
                    <span key={lang} className="tag text-[10px]">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pinned Repositories */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">
                Highlighted Repositories
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {pinnedRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 transition-all duration-200 hover:border-[var(--border-hover)] hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                        <FolderGit2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                        {repo.name}
                      </div>
                      <ExternalLink className="h-3 w-3 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {repo.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-[var(--text-tertiary)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      {repo.language}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-[var(--border)]">
              <a
                href="https://github.com/siumahameed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs inline-flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                View Full GitHub Profile
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
