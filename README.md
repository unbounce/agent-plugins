# Unbounce agent plugins

The marketplace for **Unbounce's agent plugins**, installable across both the
Claude (`.claude-plugin/`) and the Codex / ChatGPT (`.agents/`) ecosystems.
The marketplace identity is `unbounce`; its first plugin is **`unbounce-mcp`**,
which brings Unbounce landing-page authoring and management to your assistant.

## Plugins

| Plugin | Description | Install |
| --- | --- | --- |
| [`unbounce-mcp`](plugins/unbounce-mcp) | Author and manage Unbounce landing pages through the Unbounce MCP server | `/plugin install unbounce-mcp@unbounce` |

Full tool reference for each plugin lives on the
[docs site](https://unbounce.github.io/agent-plugins/), for example the
[`unbounce-mcp` tool reference](https://unbounce.github.io/agent-plugins/unbounce-mcp/).

Installing is two steps: add the marketplace, then install a plugin from it.
See [Installing](#installing) for the full commands.

## Layout

```
.claude-plugin/marketplace.json   # Claude marketplace aggregate (lists every plugin)
.agents/plugins/marketplace.json  # Codex / ChatGPT marketplace aggregate
plugins/<name>/                   # one directory per plugin
```

## Installing

### Claude Code

```
/plugin marketplace add unbounce/agent-plugins
/plugin install unbounce-mcp@unbounce
```

The first time a tool runs you'll be asked to sign in to Unbounce. An
[Unbounce](https://unbounce.com) account is required.

### Codex / ChatGPT

The plugins here also ship a Codex / ChatGPT manifest (`.agents/plugins/`) and
are designed to be installed from that ecosystem's plugin directory. There,
you'll be asked to sign in to Unbounce at install time rather than on first
tool use.

## Feedback

Found a bug or have a suggestion? With the plugin installed, just tell your
assistant and your feedback goes straight to the team. For example:

- "I want to report a bug in the Unbounce plugin"
- "I'd like to request a feature for the Unbounce plugin"
- "I want to send praise about the Unbounce plugin"
- "Something about the Unbounce plugin confused me and I want to flag it"
- "I'm having trouble signing in to the Unbounce plugin and want to report it"
