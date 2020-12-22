(function() {var implementors = {};
implementors["serenity_framework"] = [{"text":"impl Sync for Category","synthetic":true,"types":[]},{"text":"impl Sync for Reason","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Sync for Check&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Sync for CheckBuilder&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CommandId","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Sync for Command&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Sync for CommandBuilder&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Sync for Configuration&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Sync for Context&lt;D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, D, E&gt; Sync for PrefixContext&lt;'a, D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, D, E&gt; Sync for CheckContext&lt;'a, D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for DispatchError","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for Error&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, 'c, D, E&gt; Sync for CommandIterator&lt;'a, 'b, 'c, D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Name, Id, Struct&gt; Sync for IdMap&lt;Name, Id, Struct&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Name: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Struct: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Segments&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Sync for Framework&lt;D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()