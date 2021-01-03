//! Configuration of the framework.

use crate::category::Category;
use crate::command::{CommandConstructor, CommandId, CommandMap};
use crate::context::PrefixContext;
use crate::DefaultData;

use serenity::futures::future::BoxFuture;
use serenity::model::channel::Message;
use serenity::model::id::UserId;

use std::fmt;

/// The definition of the dynamic prefix hook.
pub type DynamicPrefix<D> =
    for<'a> fn(ctx: PrefixContext<'_, D>, msg: &'a Message) -> BoxFuture<'a, Option<usize>>;

/// The configuration of the framework.
#[non_exhaustive]
pub struct Configuration<D = DefaultData> {
    /// A list of static prefixes.
    pub prefixes: Vec<String>,
    /// A function to dynamically parse the prefix.
    pub dynamic_prefix: Option<DynamicPrefix<D>>,
    /// A boolean indicating whether casing of the letters in static prefixes,
    /// or command names does not matter.
    pub case_insensitive: bool,
    /// A boolean indicating whether the prefix is not necessary in direct messages.
    pub no_dm_prefix: bool,
    /// A user id of the bot that is used to compare mentions in prefix position.
    ///
    /// If filled, this allows for invoking commands by mentioning the bot.
    pub on_mention: Option<String>,
    /// A list of [`Category`]s.
    ///
    /// [`Category`]: crate::category::Category
    pub categories: Vec<Category>,
    /// An [`IdMap`] containing all [`Command`]s.
    ///
    /// [`IdMap`]: crate::utils::IdMap
    /// [`Command`]: crate::command::Command
    pub commands: CommandMap<D>,
}

impl<D> Clone for Configuration<D> {
    fn clone(&self) -> Self {
        Self {
            prefixes: self.prefixes.clone(),
            dynamic_prefix: self.dynamic_prefix,
            case_insensitive: self.case_insensitive,
            no_dm_prefix: self.no_dm_prefix,
            on_mention: self.on_mention.clone(),
            categories: self.categories.clone(),
            commands: self.commands.clone(),
        }
    }
}

impl<D> Default for Configuration<D> {
    fn default() -> Self {
        Self {
            prefixes: Vec::default(),
            dynamic_prefix: None,
            case_insensitive: false,
            no_dm_prefix: false,
            on_mention: None,
            categories: Vec::default(),
            commands: CommandMap::default(),
        }
    }
}

impl<D> Configuration<D> {
    /// Creates a new instance of the framework configuration.
    pub fn new() -> Self {
        Self::default()
    }

    /// Assigns a prefix to this configuration.
    ///
    /// The prefix is added to the [`prefixes`] list.
    ///
    /// [`prefixes`]: Self::prefix
    pub fn prefix<I>(&mut self, prefix: I) -> &mut Self
    where
        I: Into<String>,
    {
        self.prefixes.push(prefix.into());
        self
    }

    /// Assigns a function to dynamically parse the prefix.
    pub fn dynamic_prefix(&mut self, prefix: DynamicPrefix<D>) -> &mut Self {
        self.dynamic_prefix = Some(prefix);
        self
    }

    /// Assigns a boolean indicating whether the casing of letters in static prefixes,
    /// or command names does not matter.
    pub fn case_insensitive(&mut self, b: bool) -> &mut Self {
        self.case_insensitive = b;

        self
    }

    /// Assigns a boolean indicating whether the prefix is not necessary in
    /// direct messages.
    pub fn no_dm_prefix(&mut self, b: bool) -> &mut Self {
        self.no_dm_prefix = b;
        self
    }

    /// Assigns a user id of the bot that will allow for mentions in prefix position.
    pub fn on_mention<I>(&mut self, id: I) -> &mut Self
    where
        I: Into<UserId>,
    {
        self.on_mention = Some(id.into().to_string());
        self
    }

    /// Assigns a category to this configuration.
    ///
    /// The category is added to the [`categories`] list. Additionally,
    /// all of its commands [are added][cmd] to the [`commands`] map
    ///
    /// [`categories`]: Self::categories
    /// [`commands`]: Self::commands
    /// [cmd]: Self::command
    pub fn category<I>(&mut self, name: I, cmds: &[CommandConstructor<D>]) -> &mut Self
    where
        I: Into<String>,
    {
        let mut commands = Vec::with_capacity(cmds.len());

        for cmd in cmds {
            self.command(*cmd);
            commands.push(CommandId::from(*cmd));
        }

        self.categories.push(Category {
            name: name.into(),
            commands,
        });

        self
    }

    /// Assigns a command to this configuration.
    ///
    /// The command is added to the [`commands`] map.
    ///
    /// [`commands`]: Self::commands
    pub fn command(&mut self, command: CommandConstructor<D>) -> &mut Self {
        let id = CommandId::from(command);

        // Avoid instantiating the command if the map already contains it.
        if self.commands.contains_id(id) {
            return self;
        }

        let mut command = command();
        command.id = id;

        for name in &command.names {
            let name = if self.case_insensitive {
                name.to_lowercase()
            } else {
                name.clone()
            };

            self.commands.insert_name(name, command.id);
        }

        for id in &command.subcommands {
            let ctor: CommandConstructor<D> = id.into_constructor();
            self.command(ctor);
        }

        self.commands.insert(command.id, command);

        self
    }
}

impl<D> fmt::Debug for Configuration<D> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("Configuration")
            .field("prefixes", &self.prefixes)
            .field("dynamic_prefix", &"<fn>")
            .field("case_insensitive", &self.case_insensitive)
            .field("no_dm_prefix", &self.no_dm_prefix)
            .field("on_mention", &self.on_mention)
            .field("categories", &self.categories)
            .field("commands", &self.commands)
            .finish()
    }
}