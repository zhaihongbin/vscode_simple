/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { URI, UriComponents } from '../../../../base/common/uri.js';
import { ITextModel } from '../../../../editor/common/model.js';
import { ITextModelContentProvider } from '../../../../editor/common/services/resolverService.js';
import { CodeDataTransfers } from '../../../../platform/dnd/browser/dnd.js';
import { IWorkbenchContribution } from '../../../common/contributions.js';

export interface SCMHistoryItemTransferData {
	readonly name: string;
	readonly resource: UriComponents;
	readonly historyItem: unknown;
}

export function extractSCMHistoryItemDropData(e: DragEvent): SCMHistoryItemTransferData[] | undefined {
	if (!e.dataTransfer?.types.includes(CodeDataTransfers.SCM_HISTORY_ITEM)) {
		return undefined;
	}

	const data = e.dataTransfer?.getData(CodeDataTransfers.SCM_HISTORY_ITEM);
	if (!data) {
		return undefined;
	}

	return JSON.parse(data) as SCMHistoryItemTransferData[];
}

export class SCMHistoryItemContextContribution implements IWorkbenchContribution {
	static readonly ID = 'workbench.contrib.chat.scmHistoryItemContextContribution';
}

export interface ScmHistoryItemChangeRangeUriFields {
	readonly repositoryId: string;
	readonly start: string;
	readonly end: string;
}

export class SCMHistoryItemChangeRangeContentProvider implements ITextModelContentProvider {
	static readonly scheme = 'scm-history-item-change-range';

	async provideTextContent(_resource: URI): Promise<ITextModel | null> {
		return null;
	}
}
