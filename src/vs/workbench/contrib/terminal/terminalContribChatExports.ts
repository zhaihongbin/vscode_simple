/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export const MENU_CHAT_TERMINAL_TOOL_PROGRESS = { id: 'chatTerminalToolProgress' } as const;

// No-AI build: provide a lightweight shim so non-chat terminal code can compile
// without importing chat modules.
export const TerminalChatContextKeys: Record<string, unknown> = {};
