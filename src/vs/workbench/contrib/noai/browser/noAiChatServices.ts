/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from '../../../../base/common/event.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { InstantiationType, registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { IAgentSessionsService } from '../../chat/browser/agentSessions/agentSessionsService.js';
import { IChatContextPickService } from '../../chat/browser/attachments/chatContextPickService.js';
import { IChatWidgetService } from '../../chat/browser/chat.js';
import { IChatService } from '../../chat/common/chatService/chatService.js';
import { IChatAgentService } from '../../chat/common/participants/chatAgents.js';
import { ILanguageModelToolsService } from '../../chat/common/tools/languageModelToolsService.js';

const AI_DISABLED_ERROR = 'AI features are disabled in this noai build.';

type ServiceCtor<T> = new (...args: never[]) => T;
type UnknownFn = (...args: unknown[]) => unknown;

const noop: UnknownFn = () => undefined;

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

class NoAiChatService {
	declare readonly _serviceBrand: undefined;

	readonly isEnabled = (_location: unknown) => false;
	readonly getSession = (_sessionId: unknown) => undefined;
	readonly getOrRestoreSession = async (_sessionId: unknown) => undefined;
	readonly startSession = async (_location: unknown, _token?: unknown) => {
		throw new Error(AI_DISABLED_ERROR);
	};
	readonly sendRequest = async (_sessionId: unknown, _request: unknown, _options?: unknown, _token?: unknown) => {
		throw new Error(AI_DISABLED_ERROR);
	};

	constructor() {
		return withNoAiFallback(this);
	}
}

class NoAiChatAgentService {
	declare readonly _serviceBrand: undefined;

	readonly hasToolsAgent = false;
	readonly getAgents = () => [];
	readonly getActivatedAgents = () => [];
	readonly getAgent = (_id: unknown) => undefined;
	readonly getDefaultAgent = (_location: unknown, _mode?: unknown) => undefined;
	readonly getContributedDefaultAgent = (_location: unknown, _mode?: unknown) => undefined;
	readonly hasChatParticipantDetectionProviders = () => false;
	readonly detectAgentOrCommand = async (_request: unknown, _history: unknown, _data: unknown, _token: unknown) => undefined;
	readonly invokeAgent = async (_id: unknown, _request: unknown, _progress: unknown, _history: unknown, _token: unknown) => {
		throw new Error(AI_DISABLED_ERROR);
	};

	constructor() {
		return withNoAiFallback(this);
	}
}

class NoAiLanguageModelToolsService {
	declare readonly _serviceBrand: undefined;

	private readonly _emptyToolSet = {
		addTool: (_tool: unknown) => Disposable.None,
		dispose: () => undefined,
	};

	readonly vscodeToolSet = this._emptyToolSet;
	readonly executeToolSet = this._emptyToolSet;
	readonly readToolSet = this._emptyToolSet;
	readonly agentToolSet = this._emptyToolSet;
	readonly onDidChangeTools = Event.None;
	readonly onDidPrepareToolCallBecomeUnresponsive = Event.None;
	readonly onDidInvokeTool = Event.None;
	readonly getTools = (_options?: unknown) => [];
	readonly getAllToolsIncludingDisabled = () => [];
	readonly getToolSet = (_key: unknown) => this._emptyToolSet;
	readonly getToolSetByName = (_name: unknown) => this._emptyToolSet;
	readonly createToolSet = (_source: unknown, _id: unknown, _referenceName: unknown, _options?: unknown) => this._emptyToolSet;
	readonly getTool = (_id: unknown) => undefined;
	readonly getToolByName = (_name: unknown) => undefined;
	readonly getToolByFullReferenceName = (_name: unknown) => undefined;
	readonly getFullReferenceNames = () => [];
	readonly getDeprecatedFullReferenceNames = () => new Map<string, Set<string>>();
	readonly toToolAndToolSetEnablementMap = (_names: readonly string[], _model: unknown) => ({ tools: [], toolSets: [] });
	readonly toFullReferenceNames = (_map: unknown) => [];
	readonly toToolReferences = (_variableReferences: readonly unknown[]) => [];
	readonly toolSets = { read: () => [] };
	readonly invokeTool = async (_invocation: unknown, _countTokens: unknown, _token: unknown) => {
		throw new Error(AI_DISABLED_ERROR);
	};
	readonly registerTool = (_data: unknown, _impl: unknown) => Disposable.None;
	readonly registerToolImplementation = (_id: unknown, _impl: unknown) => Disposable.None;
	readonly registerToolData = (_data: unknown) => Disposable.None;
	readonly beginToolCall = (_options: unknown) => undefined;
	readonly updateToolStream = async (_toolCallId: string, _partialInput: unknown, _token: unknown) => undefined;
	readonly cancelToolCallsForRequest = (_requestId: string) => undefined;
	readonly flushToolUpdates = () => undefined;
	readonly getToolSetsForModel = (_model: unknown, _reader?: unknown) => [];
	readonly getFullReferenceName = (_tool: unknown, _toolSet?: unknown) => '';
	readonly observeTools = (_model: unknown) => ({ read: () => [] });

	constructor() {
		return withNoAiFallback(this);
	}
}

class NoAiChatContextPickService {
	declare readonly _serviceBrand: undefined;

	readonly items: Iterable<unknown> = [];

	registerChatContextItem(_item: unknown) {
		return Disposable.None;
	}
}

class NoAiChatWidgetService {
	declare readonly _serviceBrand: undefined;

	readonly lastFocusedWidget = undefined;
	readonly onDidAddWidget = Event.None;
	readonly onDidBackgroundSession = Event.None;
	readonly onDidChangeFocusedWidget = Event.None;
	readonly onDidChangeFocusedSession = Event.None;

	readonly reveal = async (_widget: unknown, _preserveFocus?: boolean) => false;
	readonly revealWidget = async (_preserveFocus?: boolean) => undefined;
	readonly getAllWidgets = () => [];
	readonly getWidgetByInputUri = (_uri: unknown) => undefined;
	readonly openSession = async (_sessionResource: unknown, _target?: unknown, _options?: unknown) => undefined;
	readonly getWidgetBySessionResource = (_sessionResource: unknown) => undefined;
	readonly getWidgetsByLocations = (_location: unknown) => [];
	readonly register = (_newWidget: unknown) => Disposable.None;
}

class NoAiAgentSessionsService {
	declare readonly _serviceBrand: undefined;

	readonly model = {
		resolve: async (_target: unknown) => undefined,
		getSession: (_resource: unknown) => undefined,
		onDidChangeSessionArchivedState: Event.None,
	};

	readonly onDidChangeSessionArchivedState = Event.None;
	readonly getSession = (_resource: unknown) => undefined;
}

registerSingleton(IChatService, NoAiChatService as unknown as ServiceCtor<IChatService>, InstantiationType.Delayed);
registerSingleton(IChatAgentService, NoAiChatAgentService as unknown as ServiceCtor<IChatAgentService>, InstantiationType.Delayed);
registerSingleton(ILanguageModelToolsService, NoAiLanguageModelToolsService as unknown as ServiceCtor<ILanguageModelToolsService>, InstantiationType.Delayed);
registerSingleton(IChatContextPickService, NoAiChatContextPickService as unknown as ServiceCtor<IChatContextPickService>, InstantiationType.Delayed);
registerSingleton(IChatWidgetService, NoAiChatWidgetService as unknown as ServiceCtor<IChatWidgetService>, InstantiationType.Delayed);
registerSingleton(IAgentSessionsService, NoAiAgentSessionsService as unknown as ServiceCtor<IAgentSessionsService>, InstantiationType.Delayed);
