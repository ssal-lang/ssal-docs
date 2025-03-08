import{_ as a,c as n,o as i,ag as t}from"./chunks/framework.C8hRoDJf.js";const u=JSON.parse('{"title":"Troubleshooting","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/troubleshooting.md","filePath":"advanced/troubleshooting.md"}'),e={name:"advanced/troubleshooting.md"};function l(o,s,p,h,r,d){return i(),n("div",null,s[0]||(s[0]=[t(`<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h1><p>This guide helps you diagnose and fix common issues when working with SSAL.</p><h2 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-label="Permalink to &quot;Common Issues&quot;">​</a></h2><h3 id="command-not-found" tabindex="-1">Command Not Found <a class="header-anchor" href="#command-not-found" aria-label="Permalink to &quot;Command Not Found&quot;">​</a></h3><p><strong>Problem:</strong></p><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Error: Command &#39;ssal&#39; not found</span></span></code></pre></div><p><strong>Solutions:</strong></p><ol><li>Verify installation:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssal</span></span></code></pre></div><ol start="2"><li>Check PATH:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PATH</span></span></code></pre></div><ol start="3"><li>Reinstall:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssal</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssal</span></span></code></pre></div><h3 id="task-execution-failures" tabindex="-1">Task Execution Failures <a class="header-anchor" href="#task-execution-failures" aria-label="Permalink to &quot;Task Execution Failures&quot;">​</a></h3><p><strong>Problem:</strong> Task fails without clear error message</p><p><strong>Solutions:</strong></p><ol><li>Add debug output:</li></ol><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>task build:</span></span>
<span class="line"><span>    ech &quot;Starting build...&quot;</span></span>
<span class="line"><span>    ech &quot;Using compiler: $COMPILER&quot;</span></span>
<span class="line"><span>    run &quot;$COMPILER main.c&quot;</span></span></code></pre></div><ol start="2"><li>Check variable values:</li></ol><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>task debug:</span></span>
<span class="line"><span>    ech &quot;COMPILER=$COMPILER&quot;</span></span>
<span class="line"><span>    ech &quot;FLAGS=$FLAGS&quot;</span></span>
<span class="line"><span>    ech &quot;OUTPUT=$OUTPUT&quot;</span></span></code></pre></div><h3 id="cross-platform-issues" tabindex="-1">Cross-Platform Issues <a class="header-anchor" href="#cross-platform-issues" aria-label="Permalink to &quot;Cross-Platform Issues&quot;">​</a></h3><p><strong>Problem:</strong> Script works on one OS but fails on another</p><p><strong>Solutions:</strong></p><ol><li>Use platform-agnostic paths:</li></ol><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Good</span></span>
<span class="line"><span>var OUTPUT = &quot;build/app&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Avoid</span></span>
<span class="line"><span>var OUTPUT = &quot;build\\\\app&quot;</span></span></code></pre></div>`,25)]))}const g=a(e,[["render",l]]);export{u as __pageData,g as default};
