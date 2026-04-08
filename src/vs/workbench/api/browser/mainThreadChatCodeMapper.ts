/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { MainContext } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadCodeMapper)
export class MainThreadChatCodemapper {

	dispose(): void {
		return;
	}

	$registerCodeMapperProvider(_handle: number, _displayName: string): void {
		return;
	}

	$unregisterCodeMapperProvider(_handle: number): void {
		return;
	}

	async $handleProgress(_requestId: string, _data: unknown): Promise<void> {
		return;
	}
}
