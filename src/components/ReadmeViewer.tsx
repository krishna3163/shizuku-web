import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  BookOpen, 
  RefreshCw, 
  ExternalLink, 
  GitPullRequest, 
  Check, 
  Copy, 
  FileCode, 
  Flame, 
  Clock, 
  Workflow, 
  Github
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DEFAULT_README } from '../data/defaultReadme';

interface ReadmeViewerProps {
  onCopyText: (text: string, label: string) => void;
}

type ReadmeSource = 'repo' | 'official';

export const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ onCopyText }) => {
  const [source, setSource] = useState<ReadmeSource>('repo');
  const [content, setContent] = useState<string>(DEFAULT_README);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSynced, setLastSynced] = useState<Date>(new Date());
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const urls: Record<ReadmeSource, { raw: string; edit: string; title: string; repo: string }> = {
    repo: {
      raw: 'https://raw.githubusercontent.com/krishna3163/shizuku-web/main/README.md',
      edit: 'https://github.com/krishna3163/shizuku-web/edit/main/README.md',
      title: 'krishna3163/shizuku-web (This Repo)',
      repo: 'https://github.com/krishna3163/shizuku-web'
    },
    official: {
      raw: 'https://raw.githubusercontent.com/RikkaApps/Shizuku/master/README.md',
      edit: 'https://github.com/RikkaApps/Shizuku/blob/master/README.md',
      title: 'RikkaApps/Shizuku (Official Framework)',
      repo: 'https://github.com/RikkaApps/Shizuku'
    }
  };

  const fetchReadme = useCallback(async (selectedSource: ReadmeSource, forceRefresh = false) => {
    setIsLoading(true);
    setError(null);
    try {
      const targetUrl = forceRefresh 
        ? `${urls[selectedSource].raw}?t=${Date.now()}` 
        : urls[selectedSource].raw;
      
      const response = await fetch(targetUrl, {
        headers: {
          'Accept': 'text/plain',
        },
        cache: forceRefresh ? 'no-cache' : 'default'
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch (${response.status} ${response.statusText})`);
      }

      const text = await response.text();
      setContent(text);
      setLastSynced(new Date());

      if (forceRefresh) {
        confetti({
          particleCount: 40,
          spread: 55,
          origin: { y: 0.8 },
          colors: ['#ffd000', '#f5a623', '#1d1b16']
        });
      }
    } catch (err: any) {
      console.warn('Could not fetch remote README, keeping current version:', err);
      setError(err?.message || 'Failed to sync with GitHub');
      if (selectedSource === 'repo' && !content) {
        setContent(DEFAULT_README);
      }
    } finally {
      setIsLoading(false);
    }
  }, [content]);

  // Initial fetch on mount or when source changes
  useEffect(() => {
    fetchReadme(source, false);
  }, [source]);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    onCopyText(content, 'Complete README Markdown');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="readme" className="py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#1d1b16] bg-[#fcfaf6] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffd000] border-2 border-[#1d1b16] px-3 py-1 rounded-md text-xs font-mono font-bold shadow-brutal-sm mb-3">
              <Workflow className="w-3.5 h-3.5" />
              AUTO-SYNCED DOCS WORKFLOW
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1d1b16]">
              Project README & Documentation
            </h2>
            <p className="text-base text-[#666053] mt-2 max-w-2xl font-medium">
              Live-synced in real-time from GitHub. Any changes made to <code className="bg-[#f0ebe1] px-1.5 py-0.5 rounded text-xs font-mono border border-[#1d1b16]">README.md</code> automatically reflect right here via GitHub CI/CD & live fetch.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => fetchReadme(source, true)}
              disabled={isLoading}
              className="posthog-btn-white px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2 disabled:opacity-50"
              title="Force re-fetch raw markdown from GitHub"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#f5a623]' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Now'}</span>
            </button>

            <button
              onClick={handleCopyAll}
              className="posthog-btn-white px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2"
              title="Copy markdown text"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copied' : 'Copy MD'}</span>
            </button>

            <a
              href={urls[source].edit}
              target="_blank"
              rel="noreferrer"
              className="posthog-btn-yellow px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2"
              title="Edit on GitHub to trigger auto-workflow"
            >
              <GitPullRequest className="w-3.5 h-3.5" />
              <span>Edit on GitHub</span>
            </a>
          </div>
        </div>

        {/* Sync Status Banner */}
        <div className="bg-[#fff9d9] border-2 border-[#1d1b16] rounded-xl p-4 mb-6 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[#1d1b16]">
              <span className="font-bold">Sync Status:</span>
              <span className="bg-[#ffffff] px-2 py-0.5 rounded border border-[#1d1b16] font-semibold text-green-700">
                ACTIVE
              </span>
              <span className="text-[#666053]">
                • Last synced: {lastSynced.toLocaleTimeString()}
              </span>
              {error && (
                <span className="text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-300">
                  (Using local cache: {error})
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#666053]">Source:</span>
            <div className="inline-flex rounded-lg border-2 border-[#1d1b16] bg-[#fcfaf6] p-0.5">
              <button
                onClick={() => setSource('repo')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
                  source === 'repo' 
                    ? 'bg-[#ffd000] text-[#1d1b16]' 
                    : 'text-[#666053] hover:text-[#1d1b16]'
                }`}
              >
                krishna3163/shizuku-web
              </button>
              <button
                onClick={() => setSource('official')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
                  source === 'official' 
                    ? 'bg-[#ffd000] text-[#1d1b16]' 
                    : 'text-[#666053] hover:text-[#1d1b16]'
                }`}
              >
                Official Shizuku
              </button>
            </div>
          </div>
        </div>

        {/* Documentation Content Box */}
        <div className="bg-[#ffffff] border-2 border-[#1d1b16] rounded-2xl shadow-brutal overflow-hidden">
          
          {/* Top Bar styled like a code editor tab */}
          <div className="bg-[#f4f0e6] border-b-2 border-[#1d1b16] px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#1d1b16]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#1d1b16]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1d1b16]" />
              </div>
              <div className="h-4 w-px bg-[#d5cdbd] mx-1" />
              <div className="flex items-center gap-2 bg-[#ffffff] border border-[#1d1b16] px-3 py-1 rounded-md text-xs font-mono font-bold shadow-brutal-sm">
                <FileCode className="w-3.5 h-3.5 text-[#f5a623]" />
                <span>README.md</span>
                <span className="text-[10px] text-[#8c8270] font-normal">({urls[source].title})</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/krishna3163/shizuku-web/actions"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#666053] hover:text-[#1d1b16] transition-colors"
              >
                <Workflow className="w-3.5 h-3.5 text-blue-600" />
                <span>GitHub Actions CI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={urls[source].repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs font-mono font-bold text-[#1d1b16] hover:text-[#f5a623]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* Markdown Rendered Content */}
          <div className="p-6 sm:p-10 prose prose-neutral max-w-none 
            prose-headings:font-black prose-headings:text-[#1d1b16] prose-headings:tracking-tight
            prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:border-b-2 prose-h1:border-[#1d1b16] prose-h1:pb-3 prose-h1:mt-2
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:border-b prose-h2:border-[#e2ded6] prose-h2:pb-2 prose-h2:mt-8
            prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6
            prose-p:text-[#332f27] prose-p:leading-relaxed
            prose-a:text-[#f5a623] prose-a:font-bold hover:prose-a:text-[#1d1b16] prose-a:underline prose-a:underline-offset-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#ffd000] prose-blockquote:bg-[#fffbe6] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:text-[#423d33] prose-blockquote:italic
            prose-code:font-mono prose-code:text-xs prose-code:bg-[#f4f0e6] prose-code:text-[#1d1b16] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-[#d5cdbd]
            prose-pre:bg-[#1d1b16] prose-pre:text-[#fcfaf6] prose-pre:border-2 prose-pre:border-[#1d1b16] prose-pre:rounded-xl prose-pre:shadow-brutal-sm
            prose-li:text-[#332f27]
            prose-table:border-collapse prose-table:border-2 prose-table:border-[#1d1b16] prose-table:my-6
            prose-th:bg-[#fff3b0] prose-th:border-2 prose-th:border-[#1d1b16] prose-th:p-3 prose-th:font-bold prose-th:text-[#1d1b16]
            prose-td:border prose-td:border-[#1d1b16] prose-td:p-3 prose-td:text-sm
            prose-hr:border-t-2 prose-hr:border-[#1d1b16] prose-hr:my-8">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                pre: ({ children, ...props }) => (
                  <div className="relative group my-4">
                    <pre {...props} className="bg-[#1d1b16] text-[#fcfaf6] p-4 rounded-xl font-mono text-xs overflow-x-auto border-2 border-[#1d1b16] shadow-brutal-sm">
                      {children}
                    </pre>
                  </div>
                ),
                table: ({ children, ...props }) => (
                  <div className="overflow-x-auto my-6">
                    <table {...props} className="w-full text-left border-collapse border-2 border-[#1d1b16] shadow-brutal-sm">
                      {children}
                    </table>
                  </div>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* Bottom Card Footer */}
          <div className="bg-[#fcfaf6] border-t-2 border-[#1d1b16] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#666053]">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#f5a623]" />
              <span>CI/CD Workflow: Triggered on git push & GitHub README edits</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={urls[source].repo}
                target="_blank" 
                rel="noreferrer"
                className="font-bold text-[#1d1b16] hover:underline flex items-center gap-1"
              >
                <span>Star on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
