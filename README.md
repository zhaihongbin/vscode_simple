# VSCode Simple (No-AI)

## 项目目标

本项目基于 VS Code 源码进行功能简化，目标是产出一个 **不包含内置 AI 能力** 的可用版本，同时保留常用开发能力：

1. 保留基础编辑器与工作台能力。
2. 保留 Source Control（Git）。
3. 保留 Extensions（扩展管理与安装）。
4. 移除内置 AI 相关模块与链路（chat/copilot/mcp/agentHost 等）。

## 已完成改动

截至当前分支，已完成以下核心改造：

1. 恢复并打通 SCM/Git 与 Extensions 的工作台贡献加载链路。
2. 恢复 extension host 关键入口，修复 `No source control providers registered` 问题链路。
3. 移除并断开多处 AI 相关 main thread / contribution 注册。
4. 保持 no-AI 产物裁剪流程（构建后移除 AI 相关输出目录与提案定义）。
5. 为扩展市场补充默认可用配置（Open VSX 回退）。
6. 调整 Open VSX 场景下签名校验策略，确保扩展可搜索、可安装。
7. 完成本地打包验证（`vscode-darwin-arm64-min`）与扩展安装实测。
