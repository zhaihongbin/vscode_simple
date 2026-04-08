# VS Code Simple Agents Instructions

本文件用于约束 AI coding agent 在本仓库中的默认行为。

## 目标

本仓库目标是维护一个 **无 AI 内置能力** 的 VS Code 精简发行版，并保持核心可用能力：

1. 保留基础编辑体验与工作台能力。
2. 保留 Git / SCM。
3. 保留扩展系统，并可连接插件市场。
4. 移除内置 AI 相关功能链路（如 chat/copilot/mcp/agentHost 等）。

## 完成标准（必须）

当 agent 判断“开发完成”前，必须至少通过以下校验：

1. `npm run precommit`

如果改动影响打包/运行链路（入口、工作台贡献、扩展系统、构建脚本等），还必须执行：

1. `npm run gulp -- vscode-darwin-arm64-min`

此外，在非 `release` 分支（如 `feature/*`）完成开发后，默认也必须主动执行一次本地打包验证：

1. `npm run gulp -- vscode-darwin-arm64-min`
2. 默认仅产出可运行 `.app` 目录，不额外生成 `.zip` 压缩包（除非用户明确要求）

如校验失败，不得宣告完成，必须继续修复直到通过，或明确说明阻塞原因。

## Git 自动提交规则

在用户未明确禁止的情况下，任务完成且校验通过后，agent 默认自动执行：

1. `git add -A`
2. `git commit -m "<type>(noai): <summary>"`

提交信息建议使用：

1. 功能改动：`feat(noai): ...`
2. 修复：`fix(noai): ...`
3. 文档：`docs(noai): ...`
4. 重构：`refactor(noai): ...`

## 其他

详细架构与编码规范仍参考 [.github/copilot-instructions.md](.github/copilot-instructions.md)。
