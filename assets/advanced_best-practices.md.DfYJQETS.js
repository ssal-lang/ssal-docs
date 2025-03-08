import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.C8hRoDJf.js";const h=JSON.parse('{"title":"Best Practices","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/best-practices.md","filePath":"advanced/best-practices.md"}'),t={name:"advanced/best-practices.md"};function i(l,a,c,o,d,u){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h1><p>Follow these guidelines to write maintainable and efficient SSAL scripts.</p><h2 id="script-organization" tabindex="-1">Script Organization <a class="header-anchor" href="#script-organization" aria-label="Permalink to &quot;Script Organization&quot;">​</a></h2><h3 id="_1-use-clear-task-names" tabindex="-1">1. Use Clear Task Names <a class="header-anchor" href="#_1-use-clear-task-names" aria-label="Permalink to &quot;1. Use Clear Task Names&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Good</span></span>
<span class="line"><span>task buildRelease:</span></span>
<span class="line"><span>    run &quot;gcc -O3 main.c&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Avoid</span></span>
<span class="line"><span>task b:</span></span>
<span class="line"><span>    run &quot;gcc -O3 main.c&quot;</span></span></code></pre></div><h3 id="_2-group-related-tasks" tabindex="-1">2. Group Related Tasks <a class="header-anchor" href="#_2-group-related-tasks" aria-label="Permalink to &quot;2. Group Related Tasks&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Build tasks</span></span>
<span class="line"><span>task build:</span></span>
<span class="line"><span>    run &quot;gcc main.c&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>task buildDebug:</span></span>
<span class="line"><span>    run &quot;gcc -g main.c&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>task buildRelease:</span></span>
<span class="line"><span>    run &quot;gcc -O3 main.c&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Test tasks</span></span>
<span class="line"><span>task test:</span></span>
<span class="line"><span>    run &quot;./runtests&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>task testUnit:</span></span>
<span class="line"><span>    run &quot;./runtests unit&quot;</span></span></code></pre></div><h2 id="variable-usage" tabindex="-1">Variable Usage <a class="header-anchor" href="#variable-usage" aria-label="Permalink to &quot;Variable Usage&quot;">​</a></h2><h3 id="_1-define-constants-at-the-top" tabindex="-1">1. Define Constants at the Top <a class="header-anchor" href="#_1-define-constants-at-the-top" aria-label="Permalink to &quot;1. Define Constants at the Top&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var VERSION = &quot;1.0.0&quot;</span></span>
<span class="line"><span>var COMPILER = &quot;gcc&quot;</span></span>
<span class="line"><span>var FLAGS = &quot;-Wall -Werror&quot;</span></span>
<span class="line"><span>var OUTPUT = &quot;app&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>task build:</span></span>
<span class="line"><span>    run &quot;$COMPILER $FLAGS main.c -o $OUTPUT&quot;</span></span></code></pre></div><h3 id="_2-use-descriptive-variable-names" tabindex="-1">2. Use Descriptive Variable Names <a class="header-anchor" href="#_2-use-descriptive-variable-names" aria-label="Permalink to &quot;2. Use Descriptive Variable Names&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Good</span></span>
<span class="line"><span>var BUILD_DIR = &quot;build&quot;</span></span>
<span class="line"><span>var SOURCE_FILES = &quot;src/*.c&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Avoid</span></span>
<span class="line"><span>var dir = &quot;build&quot;</span></span>
<span class="line"><span>var src = &quot;src/*.c&quot;</span></span></code></pre></div><h2 id="task-design" tabindex="-1">Task Design <a class="header-anchor" href="#task-design" aria-label="Permalink to &quot;Task Design&quot;">​</a></h2><h3 id="_1-single-responsibility" tabindex="-1">1. Single Responsibility <a class="header-anchor" href="#_1-single-responsibility" aria-label="Permalink to &quot;1. Single Responsibility&quot;">​</a></h3><p>Each task should do one thing well:</p><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Good</span></span>
<span class="line"><span>task compile:</span></span>
<span class="line"><span>    run &quot;gcc -c main.c&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>task link:</span></span>
<span class="line"><span>    run &quot;gcc main.o -o app&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>task build: compile link</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Avoid</span></span>
<span class="line"><span>task build:</span></span>
<span class="line"><span>    run &quot;gcc -c main.c&quot;</span></span>
<span class="line"><span>    run &quot;gcc main.o -o app&quot;</span></span>
<span class="line"><span>    run &quot;./runtests&quot;</span></span>
<span class="line"><span>    run &quot;./deploy&quot;</span></span></code></pre></div><h3 id="_2-use-task-dependencies" tabindex="-1">2. Use Task Dependencies <a class="header-anchor" href="#_2-use-task-dependencies" aria-label="Permalink to &quot;2. Use Task Dependencies&quot;">​</a></h3><p>Instead of duplicating commands, use task dependencies:</p><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>task deploy:</span></span>
<span class="line"><span>    run &quot;gcc -c main.c&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>task test:</span></span>
<span class="line"><span>    tsk build</span></span>
<span class="line"><span>    run &quot;./runtests&quot;</span></span></code></pre></div><h2 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h2><h3 id="_1-add-status-messages" tabindex="-1">1. Add Status Messages <a class="header-anchor" href="#_1-add-status-messages" aria-label="Permalink to &quot;1. Add Status Messages&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>task build:</span></span>
<span class="line"><span>    ech &quot;Starting build process...&quot;</span></span>
<span class="line"><span>    run &quot;$COMPILER main.c -o $OUTPUT&quot;</span></span>
<span class="line"><span>    ech &quot;Build completed successfully&quot;</span></span></code></pre></div><h3 id="_2-validate-inputs" tabindex="-1">2. Validate Inputs <a class="header-anchor" href="#_2-validate-inputs" aria-label="Permalink to &quot;2. Validate Inputs&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>task build:</span></span>
<span class="line"><span>    ech &quot;Checking prerequisites...&quot;</span></span>
<span class="line"><span>    run &quot;command -v $COMPILER&quot;</span></span>
<span class="line"><span>    ech &quot;Building project...&quot;</span></span>
<span class="line"><span>    run &quot;$COMPILER main.c&quot;</span></span></code></pre></div><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><h3 id="_1-comment-complex-tasks" tabindex="-1">1. Comment Complex Tasks <a class="header-anchor" href="#_1-comment-complex-tasks" aria-label="Permalink to &quot;1. Comment Complex Tasks&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Builds the project with optimization and creates a distribution package</span></span>
<span class="line"><span># Requires: gcc, zip</span></span>
<span class="line"><span># Output: dist/app-{VERSION}.zip</span></span>
<span class="line"><span>task buildDist:</span></span>
<span class="line"><span>    run &quot;$COMPILER -O3 main.c -o $OUTPUT&quot;</span></span>
<span class="line"><span>    run &quot;zip dist/app-$VERSION.zip $OUTPUT&quot;</span></span></code></pre></div><h3 id="_2-document-dependencies" tabindex="-1">2. Document Dependencies <a class="header-anchor" href="#_2-document-dependencies" aria-label="Permalink to &quot;2. Document Dependencies&quot;">​</a></h3><div class="language-ssal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Required environment variables:</span></span>
<span class="line"><span># - API_KEY: The deployment API key</span></span>
<span class="line"><span># - ENV: Target environment (dev/prod)</span></span>
<span class="line"><span>task deploy:</span></span>
<span class="line"><span>    run &quot;./deploy.sh $API_KEY $ENV&quot;</span></span></code></pre></div>`,29)]))}const b=s(t,[["render",i]]);export{h as __pageData,b as default};
