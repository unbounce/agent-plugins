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

## Issues and feedback

Found a bug or have a suggestion? [Open an issue](../../issues) on this
repository. If the plugin is already installed, you can also just tell your
assistant: the `unbounce-mcp` plugin includes a `submit_feedback` tool that
sends your feedback straight to the team.
