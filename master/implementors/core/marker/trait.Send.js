(function() {var implementors = {};
implementors["serenity_framework"] = [{"text":"impl Send for Reason","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for Check&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for CheckBuilder&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl Send for CommandId","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for Command&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for CommandBuilder&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for Configuration&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for Context&lt;D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, D, E&gt; Send for PrefixContext&lt;'a, D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, D, E&gt; Send for CheckContext&lt;'a, D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DispatchError","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for Error&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for GroupId","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for Group&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for GroupBuilder&lt;D, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Name, Id, Struct&gt; Send for IdMap&lt;Name, Id, Struct&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Name: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Struct: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Segments&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;D, E&gt; Send for Framework&lt;D, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()