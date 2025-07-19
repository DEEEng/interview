import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as p}from"./app-dYBD6_MA.js";const e={};function c(o,n){return p(),a("div",null,n[0]||(n[0]=[t(`<p><img src="http://mdrs.yuanjin.tech/img/20210618161125.png" alt="image-20210618161125894"></p><h1 id="消除回调" tabindex="-1"><a class="header-anchor" href="#消除回调"><span>消除回调</span></a></h1><p>有了Promise，异步任务就有了一种统一的处理方式</p><p>有了统一的处理方式，ES官方就可以对其进一步优化</p><p>ES7推出了两个关键字<code>async</code>和<code>await</code>，用于更加优雅的表达Promise</p><h2 id="async" tabindex="-1"><a class="header-anchor" href="#async"><span>async</span></a></h2><p>async关键字用于修饰函数，被它修饰的函数，一定返回Promise</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 该函数的返回值是Promise完成后的数据</span>
<span class="token punctuation">}</span>

<span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { 1 }</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 若返回的是Promise，则method得到的Promise状态和其一致</span>
<span class="token punctuation">}</span>

<span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { 1 }</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 若执行过程报错，则任务是rejected</span>
<span class="token punctuation">}</span>

<span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { &lt;rejected&gt; Error(1) }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="await" tabindex="-1"><a class="header-anchor" href="#await"><span>await</span></a></h2><p><code>await</code>关键字表示等待某个Promise完成，<strong>它必须用于<code>async</code>函数中</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span>

<span class="token comment">// 上面的函数等同于</span>
<span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>await</code>也可以等待其他数据</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 等同于 await Promise.resolve(1)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要针对失败的任务进行处理，可以使用<code>try-catch</code>语法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这句代码将抛出异常</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出： 失败 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="邓哥表白的完美解决方案" tabindex="-1"><a class="header-anchor" href="#邓哥表白的完美解决方案"><span>邓哥表白的完美解决方案</span></a></h1><p>邓哥的女神可不是只有4位，而是40位！</p><p>为了更加方便的编写表白代码，邓哥决定把这40位女神放到一个数组中，然后利用async和await轻松完成代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 女神的名字数组</span>
<span class="token keyword">const</span> beautyGirls <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;梁平&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;邱杰&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;王超&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;冯秀兰&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;赖军&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;顾强&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;戴敏&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;吕涛&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;冯静&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;蔡明&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;廖磊&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;冯洋&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;韩杰&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;江涛&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;文艳&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;杜秀英&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;丁艳&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;邓静&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;江刚&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;乔刚&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;史平&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;康娜&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;袁磊&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;龙秀英&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;姚静&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;潘娜&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;萧磊&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;邵勇&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;李芳&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;谭芳&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;夏秀英&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;程娜&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;武杰&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;崔军&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;廖勇&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;崔强&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;康秀英&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;余磊&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;邵勇&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;贺涛&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 向某位女生发送一则表白短信</span>
<span class="token comment">// name: 女神的姓名</span>
<span class="token keyword">function</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 模拟 发送表白短信</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">邓哥 -&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">：最近有谣言说我喜欢你，我要澄清一下，那不是谣言😘</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">等待</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">回复......</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 模拟 女神回复需要一段时间</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 模拟 有10%的几率成功</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 成功，调用 onFuffiled，并传递女神的回复</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -&gt; 邓哥：我是九，你是三，除了你还是你😘</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 失败，调用 onRejected，并传递女神的回复</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -&gt; 邓哥：你是个好人😜</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 批量表白的程序</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">proposal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> isSuccess <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> girl <span class="token keyword">of</span> beautyGirls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> reply <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span>girl<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;表白成功!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      isSuccess <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>reply<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;表白失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSuccess<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;邓哥注定孤独一生&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">proposal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const u=s(e,[["render",c],["__file","04_async和await笔记.html.vue"]]),k=JSON.parse('{"path":"/interview/Promise/04_async%E5%92%8Cawait%E7%AC%94%E8%AE%B0.html","title":"消除回调","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"async","slug":"async","link":"#async","children":[]},{"level":2,"title":"await","slug":"await","link":"#await","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.31,"words":694},"filePathRelative":"interview/Promise/04_async和await笔记.md"}');export{u as comp,k as data};
