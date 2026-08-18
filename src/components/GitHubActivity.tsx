"use client";

import { useMemo, useEffect, useState } from "react";
import { Reveal } from "@/lib/Reveal";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/lib/icons";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

interface GitHubStats {
  repos: number | null;
  followers: number | null;
  languages: string[];
}

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: null,
    followers: null,
    languages: [],
  });

  useEffect(() => {
    let cancelled = false;

    async function loadStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/siumahameed");
        if (!userRes.ok) throw new Error("GitHub API error");
        const user = await userRes.json();

        let languages: string[] = [];
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
            languages = [...counts.entries()]
              .sort((a, b) => b[1] - a[1])
              .slice(0, 4)
              .map(([lang]) => lang);
          }
        } catch {
          // languages stay empty on failure
        }

        if (!cancelled) {
          setStats({
            repos: typeof user.public_repos === "number" ? user.public_repos : null,
            followers: typeof user.followers === "number" ? user.followers : null,
            languages,
          });
        }
      } catch {
        if (!cancelled) {
          setStats({ repos: null, followers: null, languages: [] });
        }
      }
    }

    loadStats();
    return () => {
      cancelled = true;
    };
  }, []);

  const contributionGraph = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: 52 }, (_, week) =>
      Array.from({ length: 7 }, (_, day) => {
        const intensity = rand();
        return intensity < 0.3
          ? "var(--bg-secondary)"
          : intensity < 0.6
          ? "var(--accent-subtle)"
          : intensity < 0.8
          ? "color-mix(in srgb, var(--accent) 40%, transparent)"
          : "var(--accent)";
      })
    );
  }, []);

  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="section-label mb-3">OPEN SOURCE</p>
          <h2 className="section-title">GitHub Activity</h2>
        </Reveal>

        <Reveal delay={50} className="mt-10">
          <div className="card">
            <div className="mb-6 overflow-x-auto scrollbar-hide">
              <p className="text-xs font-mono text-[var(--text-tertiary)] mb-3">
                CONTRIBUTION ACTIVITY &middot; ILLUSTRATIVE
              </p>
              <div className="flex gap-1 min-w-max">
                {contributionGraph.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {week.map((color, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="h-2.5 w-2.5 rounded-[2px]"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Live stats from GitHub API */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[var(--border)] pt-6">
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)] font-heading">
                  {stats.repos ?? "—"}
                </p>
                <p className="text-xs text-[var(--text-tertiary)]">Public Repositories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)] font-heading">
                  {stats.followers ?? "—"}
                </p>
                <p className="text-xs text-[var(--text-tertiary)]">Followers</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs text-[var(--text-tertiary)] mb-1">Top Languages</p>
                <div className="flex flex-wrap gap-1">
                  {stats.languages.length > 0 ? (
                    stats.languages.map((lang) => (
                      <span key={lang} className="tag text-[10px]">{lang}</span>
                    ))
                  ) : (
                    <span className="text-xs text-[var(--text-tertiary)]">—</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/siumahameed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                View GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}