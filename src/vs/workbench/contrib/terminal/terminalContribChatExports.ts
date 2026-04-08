/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export const MENU_CHAT_TERMINAL_TOOL_PROGRESS = { id: 'chatTerminalToolProgress' } as const;

interface IContextKeyServiceLike {
	createKey<T>(key: string, defaultValue: T): unknown;
}

// No-AI build: provide context key shims with safe defaults so any accidental
// chat/terminal progress module evaluation will not crash workbench startup.
function createContextKeyShim<T>(key: string, defaultValue: T) {
	return {
		key,
		defaultValue,
		bindTo(target: IContextKeyServiceLike): unknown {
			return target.createKey(key, defaultValue);
		},
		isEqualTo(_value: T): undefined {
			return undefined;
		},
	};
}

export namespace TerminalChatContextKeys {
	export const chatToolCanContinueInBackground = createContextKeyShim<boolean>('chatTerminalToolCanContinueInBackground', false);
	export const chatToolIsHiddenTerminal = createContextKeyShim<boolean>('chatTerminalToolIsHiddenTerminal', false);
	export const chatToolHasInstance = createContextKeyShim<boolean>('chatTerminalToolHasInstance', false);
	export const chatToolOutputExpanded = createContextKeyShim<boolean>('chatTerminalToolOutputExpanded', false);
	export const chatToolHasOutput = createContextKeyShim<boolean>('chatTerminalToolHasOutput', false);
	export const chatToolUsesCollapsible = createContextKeyShim<boolean>('chatTerminalToolUsesCollapsible', false);
}
