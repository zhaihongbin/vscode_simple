/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from '../../../base/common/event.js';
import { extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { MainContext } from '../common/extHost.protocol.js';

const noop = () => undefined;

function withNoAiFallback<T extends object>(target: T): T {
	return new Proxy(target, {
		get(obj, prop, receiver) {
			if (Reflect.has(obj, prop)) {
				return Reflect.get(obj, prop, receiver);
			}

			if (typeof prop === 'string' && (prop.startsWith('onDid') || prop.startsWith('onWill'))) {
				return Event.None;
			}

			return noop;
		},
	});
}

@extHostNamedCustomer(MainContext.MainThreadChatAgents2)
export class MainThreadChatAgents2 {

	constructor() {
		return withNoAiFallback(this);
	}

	dispose(): void {
		return;
	}
}
