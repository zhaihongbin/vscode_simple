/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { MainContext } from '../common/extHost.protocol.js';

const LANGUAGE_MODELS_DISABLED_ERROR = 'Language model APIs are disabled in this noai build.';

@extHostNamedCustomer(MainContext.MainThreadLanguageModels)
export class MainThreadLanguageModels {

	dispose(): void {
		return;
	}

	$registerLanguageModelProvider(_vendor: string): void {
		return;
	}

	$onLMProviderChange(_vendor: string): void {
		return;
	}

	$unregisterProvider(_vendor: string): void {
		return;
	}

	async $tryStartChatRequest(_extension: unknown, _modelIdentifier: string, _requestId: number, _messages: unknown, _options: {}, _token: unknown): Promise<void> {
		throw new Error(LANGUAGE_MODELS_DISABLED_ERROR);
	}

	async $reportResponsePart(_requestId: number, _chunk: unknown): Promise<void> {
		return;
	}

	async $reportResponseDone(_requestId: number, _error: unknown): Promise<void> {
		return;
	}

	async $selectChatModels(_selector: unknown): Promise<string[]> {
		return [];
	}

	async $countTokens(_modelId: string, _value: string | unknown, _token: unknown): Promise<number> {
		return 0;
	}

	async $fileIsIgnored(_uri: unknown, _token: unknown): Promise<boolean> {
		return false;
	}

	$registerFileIgnoreProvider(_handle: number): void {
		return;
	}

	$unregisterFileIgnoreProvider(_handle: number): void {
		return;
	}
}
