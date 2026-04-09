# Changelog

## [1.1.0](https://github.com/zhaihongbin/vscode_simple/compare/v1.0.1...v1.1.0) (2026-04-09)


### Features

* **noai:** 升级主版本并为非release构建追加dev后缀 ([be2498b](https://github.com/zhaihongbin/vscode_simple/commit/be2498bb4512c08d37642e2537c05bdd1cb2adc5))
* **noai:** 调整主版本到1.999.0以提升扩展兼容性 ([af815c7](https://github.com/zhaihongbin/vscode_simple/commit/af815c7d80cbfb13656d383eff282dbce902f0e9))


### Bug Fixes

* **noai:** 发布流程增加重签与验签步骤 ([b83ec37](https://github.com/zhaihongbin/vscode_simple/commit/b83ec37204e2bbf54024c9b92431d5c300873200))

## [1.0.1](https://github.com/zhaihongbin/vscode_simple/compare/v1.0.0...v1.0.1) (2026-04-08)


### Bug Fixes

* **noai:** trigger release packaging after release-versioning ([ce913f0](https://github.com/zhaihongbin/vscode_simple/commit/ce913f0317d1968230deccc8fc1f1ef7de5ae42f))

## 1.0.0 (2026-04-08)


### Features

* add A/B test for default new session mode ([a188021](https://github.com/zhaihongbin/vscode_simple/commit/a188021d5922f4cd1ed701bed2c2bedb1de03866))
* add A/B test for default new session mode ([74fcb3b](https://github.com/zhaihongbin/vscode_simple/commit/74fcb3b75e4056b756bf8b8ea23c083af8e79adf))
* add ChatHookProvider to chatPromptFiles API ([#307545](https://github.com/zhaihongbin/vscode_simple/issues/307545)) ([d0c21ae](https://github.com/zhaihongbin/vscode_simple/commit/d0c21ae98319ccc4f796b6557b945faa9b72a3af))
* add plugins to chatPromptFiles API ([#307669](https://github.com/zhaihongbin/vscode_simple/issues/307669)) ([44b152c](https://github.com/zhaihongbin/vscode_simple/commit/44b152c72dd917e9e18dce43c0285bbf97fb8d89))
* enhance sidebar functionality with toggle action and unread badge ([3bc76ba](https://github.com/zhaihongbin/vscode_simple/commit/3bc76baebedbad2935205c4e90953f27205dd2fa))
* enhance sidebar toggle accessibility with aria attributes for unread session count ([5915e0f](https://github.com/zhaihongbin/vscode_simple/commit/5915e0ff748c2ab6c046a08ac693e605dfec47bf))
* **noai:** adopt semver release versioning and tag-based packaging ([339a8f0](https://github.com/zhaihongbin/vscode_simple/commit/339a8f06a652f773f49f490334d70784fca01cd0))
* **noai:** 恢复SCM/扩展并接入OpenVSX插件市场 ([eaa78b3](https://github.com/zhaihongbin/vscode_simple/commit/eaa78b3a6ebc05a1b9342bad24991375abe8bb62))
* **noai:** 支持基于 GitHub Release 的更新检查与下载 ([a7fd65e](https://github.com/zhaihongbin/vscode_simple/commit/a7fd65ed4ea7bb71b836e5190b4ae3412267a05e))
* optimize sidebar badge updates with autorun for session state and visibility changes ([4820a09](https://github.com/zhaihongbin/vscode_simple/commit/4820a094b1ebbd1c9c6c6e9670c6795832104d21))
* register agents to launchservices to allow launch from vscode ([#308021](https://github.com/zhaihongbin/vscode_simple/issues/308021)) ([3609a92](https://github.com/zhaihongbin/vscode_simple/commit/3609a92bb0633bb4b8d8c40b2c89fe32c9988530))
* show coverage indicators in minimap ([e9c46ed](https://github.com/zhaihongbin/vscode_simple/commit/e9c46ed6e3221b56521a6f921515da79c9988dc6))
* update sidebar toggle actions and badge behavior for session state changes ([2494659](https://github.com/zhaihongbin/vscode_simple/commit/2494659e6910e46aa595a31cb8cbdc3a0f967684))


### Bug Fixes

* 304202. ([#308128](https://github.com/zhaihongbin/vscode_simple/issues/308128)) ([2ecf037](https://github.com/zhaihongbin/vscode_simple/commit/2ecf0370de6667bc630f8eb3bd8238f68cd009d7))
* 305321 ([#306265](https://github.com/zhaihongbin/vscode_simple/issues/306265)) ([d55c8eb](https://github.com/zhaihongbin/vscode_simple/commit/d55c8eb9f133854f1abe897a484a7a97155d6239))
* 305345 ([#306429](https://github.com/zhaihongbin/vscode_simple/issues/306429)) ([6a7e1b4](https://github.com/zhaihongbin/vscode_simple/commit/6a7e1b4bd33c970a4c5275ab90dbfd6a3cb91aa0)), closes [#305345](https://github.com/zhaihongbin/vscode_simple/issues/305345)
* 307276 ([#307294](https://github.com/zhaihongbin/vscode_simple/issues/307294)) ([b2099b8](https://github.com/zhaihongbin/vscode_simple/commit/b2099b82ac1236b287d39cd8217094755ad2cb2c))
* agent app cleanup post update on windows ([#307387](https://github.com/zhaihongbin/vscode_simple/issues/307387)) ([d597a37](https://github.com/zhaihongbin/vscode_simple/commit/d597a37462ce46d928d0d9609d3b8ceb15b592b0))
* agents launch from cli on windows ([#307846](https://github.com/zhaihongbin/vscode_simple/issues/307846)) ([7d74ce0](https://github.com/zhaihongbin/vscode_simple/commit/7d74ce04e5e37a15afea92acda6a84c7f5535a75))
* Clicking settings link in bool setting description incorrectly toggles the checkbox ([#298074](https://github.com/zhaihongbin/vscode_simple/issues/298074)) ([885fbb6](https://github.com/zhaihongbin/vscode_simple/commit/885fbb64b272b84c6587b9bbc26ec11609b0ed82))
* close window after generating default keybindings ([#307834](https://github.com/zhaihongbin/vscode_simple/issues/307834)) ([12392b3](https://github.com/zhaihongbin/vscode_simple/commit/12392b3cc5ca733fa210216ca1e3b7c690cc7995))
* correct sidebar part visibility event handling in SidebarToggleActionViewItem ([010902a](https://github.com/zhaihongbin/vscode_simple/commit/010902acf0830bac28a86fa157355a512de97764))
* customization provider API rendering bugs and sessions window isolation ([#307745](https://github.com/zhaihongbin/vscode_simple/issues/307745)) ([ec038bf](https://github.com/zhaihongbin/vscode_simple/commit/ec038bfa43a98172fcaf92bc8868ce8ae5fd3517))
* dispose createModelReference ref on stale element in disassemblyView ([7625886](https://github.com/zhaihongbin/vscode_simple/commit/76258864c3a7669bd0254946543fe317959d1960))
* exempt agent instructions from workspace subpath filter ([#307937](https://github.com/zhaihongbin/vscode_simple/issues/307937)) ([6c8fcf1](https://github.com/zhaihongbin/vscode_simple/commit/6c8fcf1806fc53b1a1fb8863973ac55842edeb05))
* guard debugger detach against destroyed WebContents (fixes [#306923](https://github.com/zhaihongbin/vscode_simple/issues/306923)) ([cd49051](https://github.com/zhaihongbin/vscode_simple/commit/cd49051dd2c79e79a54fd51f838dd83caa98f9fd))
* guard debugger detach against destroyed WebContents (fixes [#306923](https://github.com/zhaihongbin/vscode_simple/issues/306923)) ([3151748](https://github.com/zhaihongbin/vscode_simple/commit/3151748fe5b0e820422d372020269ebd77ac459d))
* handle non-Map session options at runtime boundaries ([#307296](https://github.com/zhaihongbin/vscode_simple/issues/307296)) ([0313dd7](https://github.com/zhaihongbin/vscode_simple/commit/0313dd716673e73e57a61ba358e3eb912179e4c4))
* improve test coverage filter quickpick readability ([cc5d7c8](https://github.com/zhaihongbin/vscode_simple/commit/cc5d7c8c7892405f60a33a42e4cac2dae6366496))
* include additional toggles in find input arrow key navigation ([#306559](https://github.com/zhaihongbin/vscode_simple/issues/306559)) ([e1e2920](https://github.com/zhaihongbin/vscode_simple/commit/e1e2920188af64bc157cd83d3105a0c6e3431fce))
* increase minimumWidth for SidebarPart to improve layout consistency ([de250f5](https://github.com/zhaihongbin/vscode_simple/commit/de250f558c5fe02564d002c6314efe0030fcfa37))
* initialize triggeredByBreakpointInput from existing breakpoint data ([6c7c76a](https://github.com/zhaihongbin/vscode_simple/commit/6c7c76a85ad3d92bfc49ac45a79f0b5ab29f8ada)), closes [#305887](https://github.com/zhaihongbin/vscode_simple/issues/305887)
* **noai:** disable update checks for non-release builds ([8354d7d](https://github.com/zhaihongbin/vscode_simple/commit/8354d7dab2b981f6774e8e205a1f7928258bf646))
* **noai:** restore missing workbench service registrations ([05b2563](https://github.com/zhaihongbin/vscode_simple/commit/05b25637913824ae94fcddc4a4f144762b14aaf1))
* **noai:** 恢复SCM扩展链路并补齐AI协议占位 ([0f1cf26](https://github.com/zhaihongbin/vscode_simple/commit/0f1cf2642ad739fd7e11d5c671306e12c78980da))
* **noai:** 恢复命令面板并移除其AI依赖 ([3006f5d](https://github.com/zhaihongbin/vscode_simple/commit/3006f5da624ece2816c417758251769ec5d8f48e))
* **noai:** 恢复扩展宿主调试与终端服务注册 ([acb0662](https://github.com/zhaihongbin/vscode_simple/commit/acb0662bbd0e0e0f659c741ea8ddcaa51b1d38b5))
* preserve 'Wait for Breakpoint' selection when reopening breakpoint widget ([b1b8217](https://github.com/zhaihongbin/vscode_simple/commit/b1b8217bcd0a2980b4ba6a6373de6ecd7897dfb9))
* preserve code block toolbar visibility during chat streaming ([#255290](https://github.com/zhaihongbin/vscode_simple/issues/255290)) ([7c4cbc7](https://github.com/zhaihongbin/vscode_simple/commit/7c4cbc79dc3426294ba6e46c136beb0ed4e5d551))
* preserve code block toolbar visibility during chat streaming ([#307978](https://github.com/zhaihongbin/vscode_simple/issues/307978)) ([7c4cbc7](https://github.com/zhaihongbin/vscode_simple/commit/7c4cbc79dc3426294ba6e46c136beb0ed4e5d551))
* prevent catastrophic regex backtracking in _extractImagesFromOutput ([#307431](https://github.com/zhaihongbin/vscode_simple/issues/307431)) ([ccf5e83](https://github.com/zhaihongbin/vscode_simple/commit/ccf5e83152f3a969a6de8830c3cf334183f36143))
* prevent catastrophic regex backtracking in _extractImagesFromOutput ([#307447](https://github.com/zhaihongbin/vscode_simple/issues/307447)) ([ccf5e83](https://github.com/zhaihongbin/vscode_simple/commit/ccf5e83152f3a969a6de8830c3cf334183f36143))
* Propagate `forceShellIntegration` to remote terminal server ([#300428](https://github.com/zhaihongbin/vscode_simple/issues/300428)) ([8bba066](https://github.com/zhaihongbin/vscode_simple/commit/8bba0669d9596a7d236daeda16feab23d010944f))
* rename hooks button to 'Configure Hooks' in sessions window ([#307541](https://github.com/zhaihongbin/vscode_simple/issues/307541)) ([8c85df1](https://github.com/zhaihongbin/vscode_simple/commit/8c85df126b92b742f00c4d2107f6be50ec8298ac))
* reset chat mode when switching to session with customAgentTarget ([#308010](https://github.com/zhaihongbin/vscode_simple/issues/308010)) ([1178013](https://github.com/zhaihongbin/vscode_simple/commit/1178013b81623c502cf45f79a30eebe1c1e32163))
* restart to update not working on windows ([#307441](https://github.com/zhaihongbin/vscode_simple/issues/307441)) ([1166429](https://github.com/zhaihongbin/vscode_simple/commit/1166429bc9914882c8e4699ca2882032b3962ebb))
* safestorage keychain for renamed agents app ([#307831](https://github.com/zhaihongbin/vscode_simple/issues/307831)) ([b77fb98](https://github.com/zhaihongbin/vscode_simple/commit/b77fb98c08dbf57f61cf9dcf624356656656541b))
* scope editor service in window title to own editor groups container ([#306226](https://github.com/zhaihongbin/vscode_simple/issues/306226)) ([4003d39](https://github.com/zhaihongbin/vscode_simple/commit/4003d390fb8747be92b4e66c280584cf92579d16))
* tls.getCACertificates result for self-signed and server auth ([#307144](https://github.com/zhaihongbin/vscode_simple/issues/307144)) ([015aef6](https://github.com/zhaihongbin/vscode_simple/commit/015aef6054c6a134d347dde4435252345ce0fc3e))
* update macOS icons assets for agents app ([#307389](https://github.com/zhaihongbin/vscode_simple/issues/307389)) ([6026fd9](https://github.com/zhaihongbin/vscode_simple/commit/6026fd987438192ac4860a72f659d87521f3b7ba))


### Performance Improvements

* improve thinking layout thrashing ([#308122](https://github.com/zhaihongbin/vscode_simple/issues/308122)) ([719c62b](https://github.com/zhaihongbin/vscode_simple/commit/719c62b60e8ca37945bca674fc0c9dcbaf8717dd))
