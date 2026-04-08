/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { MainContext } from '../common/extHost.protocol.js';

const EMBEDDINGS_DISABLED_ERROR = 'Embeddings APIs are disabled in this noai build.';

@extHostNamedCustomer(MainContext.MainThreadEmbeddings)
export class MainThreadEmbeddings {

	dispose(): void {
		return;
	}

	$registerEmbeddingProvider(_handle: number, _identifier: string): void {
		return;
	}

	$unregisterEmbeddingProvider(_handle: number): void {
		return;
	}

	async $computeEmbeddings(_embeddingsModel: string, _input: string[], _token: unknown): Promise<{ values: number[] }[]> {
		throw new Error(EMBEDDINGS_DISABLED_ERROR);
	}
}
