# VSCode Simple (No-AI)

## 项目目标

本项目基于 VS Code 源码进行精简，交付一个**不包含内置 AI 能力**的可运行版本，同时保留核心开发能力：

1. 保留基础编辑器与工作台能力。
2. 保留 Source Control（Git）。
3. 保留 Extensions（扩展管理与安装）。
4. 移除内置 AI 链路（chat/copilot/mcp/agentHost 等）。

## 当前精简状态（feature/simplification）

1. 已移除/断开内置 AI 主链路与相关贡献注册，构建产物仍执行 no-AI 裁剪流程。
2. 已恢复 SCM/Git、Extensions、Command Palette 等基础工作台能力。
3. 已接入 Open VSX 默认回退配置，支持扩展搜索与安装。
4. 已补齐关键服务注册链路（含 debug/tunnel/rename tracker 等依赖位点），修复启动期 `UNKNOWN service` 导致的界面异常。
5. Debug 功能入口已精简，但通过 no-op 服务保持运行时依赖完整，避免因过度剥离造成启动失败。
6. `release` / `release/*` 分支打包时注入更新地址（GitHub Releases）。
7. 非 `release` 分支（含本地开发构建）默认不注入更新地址，因此不会自动检测更新。

## 开发与交付约定

1. 非 `release` 分支完成开发后，默认执行本地打包验证：`npm run gulp -- vscode-darwin-arm64-min`。
2. 默认仅产出可运行 `.app`，不额外生成 `.zip`（除非明确要求）。
3. 开发完成前至少通过：`npm run precommit`。
