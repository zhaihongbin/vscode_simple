/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { MainContext } from '../common/extHost.protocol.js';

const LANGUAGE_MODEL_TOOLS_DISABLED_ERROR = 'Language model tools APIs are disabled in this noai build.';

@extHostNamedCustomer(MainContext.MainThreadLanguageModelTools)
export class MainThreadLanguageModelTools {

	dispose(): void {
		return;
	}

	async $getTools(): Promise<unknown[]> {
		return [];
	}

	$acceptToolProgress(_callId: string, _progress: unknown): void {
		return;
	}

	async $invokeTool(_dto: unknown, _token?: unknown): Promise<unknown> {
		throw new Error(LANGUAGE_MODEL_TOOLS_DISABLED_ERROR);
	}

	async $countTokensForInvocation(_callId: string, _input: string, _token: unknown): Promise<number> {
		return 0;
	}

	$registerTool(_id: string, _hasHandleToolStream: boolean): void {
		return;
	}

	$registerToolWithDefinition(_extensionId: unknown, _definition: unknown, _hasHandleToolStream: boolean): void {
		return;
	}

	$unregisterTool(_name: string): void {
		return;
	}
}
