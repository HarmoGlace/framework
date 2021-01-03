var searchIndex = JSON.parse('{\
"command_attr":{"doc":"","i":[[23,"command","command_attr","",null,null],[23,"check","","",null,null],[23,"hook","","",null,null]],"p":[]},\
"serenity_framework":{"doc":"The official command framework for Serenity bots.","i":[[0,"argument","serenity_framework","Utilities for parsing command arguments.",null,null],[4,"ArgumentError","serenity_framework::argument","Error that might have occured when trying to parse an …",null,null],[13,"Missing","","Required argument is missing.",0,null],[13,"Argument","","Parsing the argument failed.",0,null],[5,"required_argument","","Takes a single segment from a list of segments and parses …",null,[[["argumentsegments",3]],[["result",4],["argumenterror",4]]]],[5,"optional_argument","","Tries to take a single segment from a list of segments …",null,[[["argumentsegments",3]],[["argumenterror",4],["option",4],["result",4]]]],[5,"variadic_arguments","","Tries to parse many arguments from a list of segments.",null,[[["argumentsegments",3]],[["result",4],["argumenterror",4],["vec",3]]]],[0,"category","serenity_framework","A list of separate, but related commands.",null,null],[3,"Category","serenity_framework::category","Grouping of independent commands with a related theme.",null,null],[12,"name","","Name of the category.",1,null],[12,"commands","","<code>Command</code>s pertaining to this category.",1,null],[0,"check","serenity_framework","Functions and types relating to checks.",null,null],[4,"Reason","serenity_framework::check","The reason describing why a check failed.",null,null],[13,"Unknown","","There is no information.",2,null],[13,"User","","Information for the user.",2,null],[13,"Log","","Information for logging purposes.",2,null],[13,"UserAndLog","","Information both for the user and logging purposes.",2,null],[12,"user","serenity_framework::check::Reason","Information for the user.",3,null],[12,"log","","Information for logging purposes.",3,null],[6,"CheckResult","serenity_framework::check","The result type of a check function",null,null],[6,"CheckFn","","The definition of a check function.",null,null],[6,"CheckConstructor","","A constructor of the [<code>Check</code>] type provided by the …",null,null],[3,"Check","","Data relating to a check.",null,null],[12,"name","","Name of the check.",4,null],[12,"function","","The function of this check.",4,null],[12,"check_in_help","","A boolean indicating whether the check can apply in help …",4,null],[12,"display_in_help","","A boolean indicating whether the check can be displayed …",4,null],[11,"builder","","Constructs a builder that will be used to create a check …",4,[[],["checkbuilder",3]]],[3,"CheckBuilder","","A builder type for creating a [<code>Check</code>] from scratch.",null,null],[11,"new","","Constructs a new instance of the builder.",5,[[]]],[11,"function","","Assigns the function to this function.",5,[[["checkfn",6]]]],[11,"check_in_help","","Assigns the indicator to this function.",5,[[]]],[11,"display_in_help","","Assigns the indicator to this function.",5,[[]]],[11,"build","","Complete building a check.",5,[[],["check",3]]],[0,"command","serenity_framework","Functions and types relating to commands.",null,null],[6,"StringHook","serenity_framework::command","A function to dynamically create a string.",null,null],[6,"StringsHook","","A function to dynamically create a list of strings.",null,null],[6,"CommandMap","","<code>IdMap</code> for storing commands.",null,null],[6,"CommandResult","","The result type of a command function.",null,null],[6,"CommandFn","","The definition of a command function.",null,null],[6,"CommandConstructor","","A constructor of the [<code>Command</code>] type provided by the …",null,null],[3,"CommandId","","A unique identifier of a [<code>Command</code>] stored in the […",null,null],[11,"into_usize","","Converts the identifier to its internal representation.",6,[[]]],[3,"Command","","Data surrounding a command.",null,null],[12,"id","","The identifier of this command.",7,null],[12,"function","","The function of this command.",7,null],[12,"names","","The names of this command by which it can be invoked.",7,null],[12,"subcommands","","The subcommands belonging to this command.",7,null],[12,"description","","A string describing this command.",7,null],[12,"dynamic_description","","A function to dynamically describe this command.",7,null],[12,"usage","","A string to express usage of this command.",7,null],[12,"dynamic_usage","","A function to dynamically express usage of this command.",7,null],[12,"examples","","A list of strings demonstrating usage of this command.",7,null],[12,"dynamic_examples","","A function to dynamically demonstrate usage of this …",7,null],[12,"help_available","","A boolean to indicate whether the command can be shown in …",7,null],[12,"check","","A function that allows/denies access to this command.",7,null],[11,"builder","","Constructs a builder that will be used to create a …",7,[[],["commandbuilder",3]]],[3,"CommandBuilder","","A builder type for creating a [<code>Command</code>] from scratch.",null,null],[11,"new","","Constructs a new instance of the builder.",8,[[]]],[11,"name","","Assigns a name to this command.",8,[[]]],[11,"function","","Assigns the function to this command.",8,[[["commandfn",6]]]],[11,"subcommand","","Assigns a subcommand to this command.",8,[[["commandconstructor",6]]]],[11,"description","","Assigns a static description to this command.",8,[[]]],[11,"dynamic_description","","Assigns a function to dynamically create a description to …",8,[[["stringhook",6]]]],[11,"usage","","Assigns a static usage to this command.",8,[[]]],[11,"dynamic_usage","","Assigns a function to dynamically create a usage to this …",8,[[["stringhook",6]]]],[11,"example","","Assigns a static example of usage to this command.",8,[[]]],[11,"dynamic_examples","","Assigns a function to dynamically create a list of …",8,[[["stringshook",6]]]],[11,"check","","Assigns a <code>check</code> function to this command.",8,[[["checkconstructor",6]]]],[11,"build","","Complete building a command.",8,[[],["command",3]]],[0,"configuration","serenity_framework","Configuration of the framework.",null,null],[6,"DynamicPrefix","serenity_framework::configuration","The definition of the dynamic prefix hook.",null,null],[3,"Configuration","","The configuration of the framework.",null,null],[12,"prefixes","","A list of static prefixes.",9,null],[12,"dynamic_prefix","","A function to dynamically parse the prefix.",9,null],[12,"case_insensitive","","A boolean indicating whether casing of the letters in …",9,null],[12,"no_dm_prefix","","A boolean indicating whether the prefix is not necessary …",9,null],[12,"on_mention","","A user id of the bot that is used to compare mentions in …",9,null],[12,"categories","","A list of <code>Category</code>s.",9,null],[12,"commands","","An <code>IdMap</code> containing all <code>Command</code>s.",9,null],[11,"new","","Creates a new instance of the framework configuration.",9,[[]]],[11,"prefix","","Assigns a prefix to this configuration.",9,[[]]],[11,"dynamic_prefix","","Assigns a function to dynamically parse the prefix.",9,[[["dynamicprefix",6]]]],[11,"case_insensitive","","Assigns a boolean indicating whether the casing of …",9,[[]]],[11,"no_dm_prefix","","Assigns a boolean indicating whether the prefix is not …",9,[[]]],[11,"on_mention","","Assigns a user id of the bot that will allow for mentions …",9,[[]]],[11,"category","","Assigns a category to this configuration.",9,[[]]],[11,"command","","Assigns a command to this configuration.",9,[[["commandconstructor",6]]]],[0,"context","serenity_framework","Data provided in different <em>contexts</em>.",null,null],[3,"Context","serenity_framework::context","The final context type.",null,null],[12,"data","","User data.",10,null],[12,"conf","","Framework configuration.",10,null],[12,"serenity_ctx","","Serenity\'s context type.",10,null],[12,"command_id","","The identifier of the command.",10,null],[12,"prefix","","The prefix that was used to invoke this command.",10,null],[12,"args","","The arguments of the command.",10,null],[3,"PrefixContext","","The prefix context.",null,null],[12,"data","","User data.",11,null],[12,"conf","","Framework configuration.",11,null],[12,"serenity_ctx","","Serenity\'s context type.",11,null],[3,"CheckContext","","The check context.",null,null],[12,"data","","User data.",12,null],[12,"conf","","Framework configuration.",12,null],[12,"serenity_ctx","","Serenity\'s context type.",12,null],[12,"command_id","","The identifier of the command that is being checked upon.",12,null],[0,"error","serenity_framework","Defines error types used by the framework.",null,null],[4,"DispatchError","serenity_framework::error","An error describing why <code>dispatch</code>ing failed.",null,null],[13,"NormalMessage","","The message does not contain a command invocation.",13,null],[13,"PrefixOnly","","The message only contains a prefix. Contains the prefix.",13,null],[13,"InvalidCommandName","","The message contains a name not belonging to any command.",13,null],[13,"CheckFailed","","A check failed. Contains its name and the reasoning why …",13,null],[4,"Error","","Returned when the call of <code>dispatch</code> fails.",null,null],[13,"Dispatch","","Failed to dispatch a command.",14,null],[13,"User","","A command returned an error.",14,null],[0,"parse","serenity_framework","Utilities to parse the prefix and command out of a …",null,null],[5,"mention","serenity_framework::parse","Parses a mention from the message.",null,[[],["option",4]]],[5,"dynamic_prefix","","Parses a prefix from the message dynamically using the …",null,[[["prefixcontext",3],["message",3]]]],[5,"static_prefix","","Parses a prefix from the message statically from a list …",null,[[],["option",4]]],[5,"content","","Returns the content of the message after parsing a prefix.",null,[[["configuration",3],["message",3],["arc",3],["serenitycontext",3]]]],[3,"CommandIterator","","Command parsing iterator.",null,null],[5,"commands","","Creates a command parsing iterator.",null,[[["segments",3],["configuration",3]],["commanditerator",3]]],[0,"prelude","serenity_framework","A series of re-exports to simplify usage of the framework.",null,null],[0,"utils","","A set of abstraction utilities used by the framework to …",null,null],[0,"id_map","serenity_framework::utils","An Identifier Map. An abstraction for structures who may …",null,null],[3,"IdMap","serenity_framework::utils::id_map","An Identifier Map. An abstraction for structures who may …",null,null],[11,"new","","Creates a new <code>IdMap</code> instance.",15,[[]]],[11,"len_names","","Returns the total number of names stored.",15,[[]]],[11,"len","","Returns the total number of structures stored.",15,[[]]],[11,"is_empty","","Returns a boolean indicating that the map is empty.",15,[[]]],[11,"iter_names","","Returns an iterator over all names stored in the map.",15,[[],["keys",3]]],[11,"iter_ids","","Returns an iterator over all identifiers stored in the …",15,[[],["values",3]]],[11,"iter","","Returns an iterator over all structures and their assigned…",15,[[],["iter",3]]],[11,"iter_mut","","Returns a mutable iterator over all structures and their …",15,[[],["itermut",3]]],[11,"insert_name","","Assigns a name to an identifier.",15,[[],["option",4]]],[11,"get_id","","Retrieves an identifier based on a name.",15,[[],["option",4]]],[11,"get_by_name","","Retrieves a structure based on an identifier.",15,[[],["option",4]]],[11,"get_by_name_mut","","Retrieves a structure based on an identifier.",15,[[],["option",4]]],[11,"get_pair","","Retrieves both an identifier and its structure based on a …",15,[[],["option",4]]],[11,"contains","","Returns a boolean indicating that a structure exists …",15,[[]]],[11,"contains_id","","Returns a boolean indicating that a structure exists …",15,[[]]],[11,"insert","","Assigns a structure to an identifier.",15,[[],["option",4]]],[11,"get","","Retrieves a structure based on an identifier.",15,[[],["option",4]]],[11,"get_mut","","Retrieves a structure based on an identifier.",15,[[],["option",4]]],[0,"segments","serenity_framework::utils","Functions and types for handling <em>segments</em>.",null,null],[5,"segment_index","serenity_framework::utils::segments","Returns the index to the end of a segment in the source.",null,[[]]],[5,"segment","","Returns a segment of the source.",null,[[],["option",4]]],[5,"segment_split","","Returns a segment and the rest of the source after the …",null,[[],["option",4]]],[3,"Segments","","An iterator type that splits a string into segments using …",null,null],[11,"new","","Creates a <code>Segments</code> instance.",16,[[]]],[11,"source","","Returns the source string from which segments are …",16,[[]]],[11,"set_source","","Sets the new source string from which segments are …",16,[[]]],[11,"delimiter","","Returns the delimiter string that is used to determine …",16,[[]]],[11,"case_insensitive","","Returns the boolean that determines whether to ignore …",16,[[]]],[11,"is_empty","","Returns a boolean indicating that the source string is …",16,[[]]],[5,"quoted_segment_split","","Returns a quoted segment and the rest of the source.",null,[[],["option",4]]],[5,"quoted_segment","","Returns a quoted segment of the source.",null,[[],["option",4]]],[5,"argument_segment_split","","Returns an argument segment and the rest of the source.",null,[[],["option",4]]],[5,"argument_segment","","Returns an argument segment of the source.",null,[[],["option",4]]],[3,"ArgumentSegments","","An iterator type that splits a string into argument …",null,null],[11,"new","","Creates a new <code>ArgumentSegments</code> instance.",17,[[]]],[11,"source","","Returns the source string from which segments are …",17,[[]]],[11,"set_source","","Sets the new source string from which segments are …",17,[[]]],[11,"delimiter","","Returns the delimiter string that is used to determine …",17,[[]]],[11,"is_empty","","Returns a boolean indicating that the source string is …",17,[[]]],[6,"DefaultData","serenity_framework","The default type for user data when it is unspecified.",null,null],[6,"DefaultError","","The default type for command errors when it is …",null,null],[3,"Framework","","The core of the framework.",null,null],[12,"conf","","Configuration of the framework that dictates its …",18,null],[12,"data","","User data that is accessable in every command and …",18,null],[11,"new","","Creates a new instanstiation of the framework using a …",18,[[["configuration",3]]]],[11,"with_data","","Creates new instanstiation of the framework using a given …",18,[[["configuration",3]]]],[11,"with_arc_data","","Creates new instanstiation of the framework using a given …",18,[[["arc",3],["configuration",3],["rwlock",3]]]],[11,"dispatch","","Dispatches a command.",18,[[["message",3],["serenitycontext",3]]]],[11,"dispatch_with_hook","","Dispatches a command with a hook.",18,[[["message",3],["serenitycontext",3]]]],[11,"from","serenity_framework::argument","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","serenity_framework::category","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","serenity_framework::check","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","serenity_framework::command","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"equivalent","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","serenity_framework::configuration","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","serenity_framework::context","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","serenity_framework::error","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"vzip","","",14,[[]]],[11,"from","serenity_framework::parse","",19,[[]]],[11,"into","","",19,[[]]],[11,"into_iter","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"vzip","","",19,[[]]],[11,"from","serenity_framework::utils::id_map","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"from","serenity_framework::utils::segments","",16,[[]]],[11,"into","","",16,[[]]],[11,"into_iter","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"vzip","","",16,[[]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"into_iter","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"vzip","","",17,[[]]],[11,"from","serenity_framework","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"vzip","","",18,[[]]],[11,"as_ref","serenity_framework::context","",10,[[],["http",3]]],[11,"as_ref","","",10,[[],["cache",3]]],[11,"as_ref","","",11,[[],["http",3]]],[11,"as_ref","","",11,[[],["cache",3]]],[11,"as_ref","","",12,[[],["http",3]]],[11,"as_ref","","",12,[[],["cache",3]]],[11,"from","serenity_framework::command","",6,[[["commandconstructor",6]]]],[11,"from","serenity_framework::error","",14,[[["dispatcherror",4]]]],[11,"into_iter","serenity_framework::utils::id_map","",15,[[]]],[11,"next","serenity_framework::parse","",19,[[],["option",4]]],[11,"next","serenity_framework::utils::segments","",16,[[],["option",4]]],[11,"next","","",17,[[],["option",4]]],[11,"clone","serenity_framework::category","",1,[[],["category",3]]],[11,"clone","serenity_framework::check","",2,[[],["reason",4]]],[11,"clone","","",4,[[]]],[11,"clone","","",5,[[]]],[11,"clone","serenity_framework::command","",6,[[],["commandid",3]]],[11,"clone","","",7,[[]]],[11,"clone","","",8,[[]]],[11,"clone","serenity_framework::configuration","",9,[[]]],[11,"clone","serenity_framework::context","",10,[[]]],[11,"clone","","",11,[[]]],[11,"clone","","",12,[[]]],[11,"clone","serenity_framework::error","",13,[[],["dispatcherror",4]]],[11,"clone","","",14,[[],["error",4]]],[11,"clone","serenity_framework::utils::id_map","",15,[[],["idmap",3]]],[11,"clone","serenity_framework::utils::segments","",16,[[],["segments",3]]],[11,"clone","","",17,[[],["argumentsegments",3]]],[11,"clone","serenity_framework","",18,[[],["framework",3]]],[11,"default","serenity_framework::category","",1,[[],["category",3]]],[11,"default","serenity_framework::check","",4,[[]]],[11,"default","","",5,[[]]],[11,"default","serenity_framework::command","",7,[[]]],[11,"default","","",8,[[]]],[11,"default","serenity_framework::configuration","",9,[[]]],[11,"default","serenity_framework::utils::id_map","",15,[[]]],[11,"cmp","serenity_framework::command","",6,[[["commandid",3]],["ordering",4]]],[11,"eq","","",6,[[["commandid",3]]]],[11,"ne","","",6,[[["commandid",3]]]],[11,"partial_cmp","","",6,[[["commandid",3]],[["option",4],["ordering",4]]]],[11,"lt","","",6,[[["commandid",3]]]],[11,"le","","",6,[[["commandid",3]]]],[11,"gt","","",6,[[["commandid",3]]]],[11,"ge","","",6,[[["commandid",3]]]],[11,"fmt","serenity_framework::argument","",0,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::category","",1,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::check","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::command","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::configuration","",9,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::error","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::utils::id_map","",15,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::utils::segments","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::argument","",0,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::check","",2,[[["formatter",3]],["result",6]]],[11,"fmt","serenity_framework::error","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"index","serenity_framework::utils::id_map","",15,[[]]],[11,"index_mut","","",15,[[]]],[11,"hash","serenity_framework::command","",6,[[]]],[11,"source","serenity_framework::argument","",0,[[],[["option",4],["stderror",8]]]],[11,"source","serenity_framework::error","",14,[[],[["option",4],["stderror",8]]]],[11,"http","serenity_framework::context","",10,[[],["http",3]]],[11,"cache","","",10,[[],[["option",4],["arc",3]]]],[11,"http","","",11,[[],["http",3]]],[11,"cache","","",11,[[],[["option",4],["arc",3]]]],[11,"http","","",12,[[],["http",3]]],[11,"cache","","",12,[[],[["option",4],["arc",3]]]]],"p":[[4,"ArgumentError"],[3,"Category"],[4,"Reason"],[13,"UserAndLog"],[3,"Check"],[3,"CheckBuilder"],[3,"CommandId"],[3,"Command"],[3,"CommandBuilder"],[3,"Configuration"],[3,"Context"],[3,"PrefixContext"],[3,"CheckContext"],[4,"DispatchError"],[4,"Error"],[3,"IdMap"],[3,"Segments"],[3,"ArgumentSegments"],[3,"Framework"],[3,"CommandIterator"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);