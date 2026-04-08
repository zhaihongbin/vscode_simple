/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from '../../../../base/common/event.js';
import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import { IExtensionHostDebugService, IOpenExtensionWindowResult } from '../../../../platform/debug/common/extensionHostDebug.js';
import { InstantiationType, registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { IDebugService, State } from '../../debug/common/debug.js';
import { IDebugVisualizerService } from '../../debug/common/debugVisualizers.js';

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
		}
	});
}

class NoAiDebugService {
	declare readonly _serviceBrand: undefined;

	readonly state = State.Inactive;
	readonly initializingOptions = undefined;
	readonly onDidChangeState = Event.None;
	readonly onWillNewSession = Event.None;
	readonly onDidNewSession = Event.None;
	readonly onDidEndSession = Event.None;

	readonly getModel = () => withNoAiFallback({
		getSessions: () => [],
		getSession: (_id: unknown) => undefined,
		getBreakpoints: () => [],
		getFunctionBreakpoints: () => [],
		getDataBreakpoints: () => [],
		getInstructionBreakpoints: () => [],
		getExceptionBreakpoints: () => [],
		onDidChangeBreakpoints: Event.None,
		onDidChangeCallStack: Event.None,
		onDidChangeWatchExpressions: Event.None,
		onDidChangeWatchExpressionValue: Event.None
	});

	readonly getViewModel = () => withNoAiFallback({
		focusedSession: undefined,
		focusedThread: undefined,
		focusedStackFrame: undefined,
		selectedExpression: undefined,
		onDidFocusSession: Event.None,
		onDidFocusThread: Event.None,
		onDidFocusStackFrame: Event.None,
		onDidSelectExpression: Event.None
	});

	readonly getConfigurationManager = () => withNoAiFallback({
		onDidSelectConfiguration: Event.None,
		onDidChangeConfiguration: Event.None,
		onDidChangeLaunch: Event.None,
		onDidChangeDebuggers: Event.None,
		selectedConfiguration: undefined,
		selectedLaunch: undefined,
		selectedName: undefined,
		getAllLaunches: () => [],
		getConfigurationNames: () => [],
		openConfigFile: async () => ({ editor: null, created: false })
	});

	readonly getAdapterManager = () => withNoAiFallback({
		onDidRegisterDebugger: Event.None,
		hasEnabledDebuggers: () => false,
		canSetBreakpointsIn: () => false
	});

	readonly focusStackFrame = async (_focusedStackFrame: unknown, _thread?: unknown, _session?: unknown, _options?: unknown) => undefined;
	readonly canSetBreakpointsIn = (_model: unknown) => false;
	readonly addBreakpoints = async (_uri: unknown, _rawBreakpoints: unknown, _ariaAnnounce?: unknown) => [];
	readonly updateBreakpoints = async (_originalUri: unknown, _data: unknown, _sendOnResourceSaved: unknown) => undefined;
	readonly enableOrDisableBreakpoints = async (_enable: unknown, _breakpoint?: unknown) => undefined;
	readonly setBreakpointsActivated = async (_activated: unknown) => undefined;
	readonly removeBreakpoints = async (_id?: unknown) => undefined;
	readonly addFunctionBreakpoint = (_opts?: unknown, _id?: unknown) => undefined;
	readonly updateFunctionBreakpoint = async (_id: unknown, _update: unknown) => undefined;
	readonly removeFunctionBreakpoints = async (_id?: unknown) => undefined;
	readonly addDataBreakpoint = async (_opts: unknown) => undefined;
	readonly updateDataBreakpoint = async (_id: unknown, _update: unknown) => undefined;
	readonly removeDataBreakpoints = async (_id?: unknown) => undefined;
	readonly addInstructionBreakpoint = async (_opts: unknown) => undefined;
	readonly removeInstructionBreakpoints = async (_instructionReference?: unknown, _offset?: unknown) => undefined;
	readonly setExceptionBreakpointCondition = async (_breakpoint: unknown, _condition: unknown) => undefined;
	readonly sendAllBreakpoints = async (_session: unknown) => undefined;
	readonly setExceptionBreakpointsForSession = async (_session: unknown, _data: unknown) => undefined;
	readonly startDebugging = async (_launch: unknown, _configOrName?: unknown, _options?: unknown) => false;
	readonly restartSession = async (_session: unknown, _restartData?: unknown) => false;
	readonly stopSession = async (_session: unknown, _disconnect?: unknown, _suspend?: unknown) => undefined;
	readonly sourceIsNotAvailable = async (_uri: unknown) => undefined;
	readonly runTo = async (_uri: unknown, _lineNumber: unknown, _column?: unknown) => undefined;
	readonly addWatchExpression = (_name?: unknown) => undefined;
	readonly renameWatchExpression = (_id: unknown, _newName: unknown) => undefined;
	readonly moveWatchExpression = (_id: unknown, _position: unknown) => undefined;
	readonly removeWatchExpressions = (_id?: unknown) => undefined;
	readonly viewMemory = async (_uri: unknown, _range?: unknown, _preserveFocus?: unknown) => undefined;
	readonly loadSource = async (_uri: unknown) => undefined;
	readonly getModelForSelectedSession = async () => undefined;
	readonly registerDebugAdapterFactory = (_debugType: unknown, _debugAdapterFactory: unknown) => Disposable.None;
	readonly unregisterDebugAdapterFactory = (_debugType: unknown) => undefined;
	readonly createWatchExpression = (_name?: unknown) => undefined;
	readonly start = async () => undefined;
	readonly dispose = () => undefined;

	constructor() {
		return withNoAiFallback(this);
	}
}

class NoAiExtensionHostDebugService {
	declare readonly _serviceBrand: undefined;

	readonly onReload = Event.None;
	readonly onClose = Event.None;
	readonly onAttachSession = Event.None;
	readonly onTerminateSession = Event.None;

	readonly reload = (_sessionId: string) => undefined;
	readonly close = (_sessionId: string) => undefined;
	readonly attachSession = (_sessionId: string, _port: number, _subId?: string) => undefined;
	readonly terminateSession = (_sessionId: string, _subId?: string) => undefined;

	readonly openExtensionDevelopmentHostWindow = async (_args: string[], _debugRenderer: boolean): Promise<IOpenExtensionWindowResult> => ({ success: false });
	readonly attachToCurrentWindowRenderer = async (_windowId: number): Promise<IOpenExtensionWindowResult> => ({ success: false });
}

class NoAiDebugVisualizerService {
	declare readonly _serviceBrand: undefined;

	readonly getApplicableFor = async (_expression: unknown, _token: unknown) => ({ object: [], dispose: () => undefined });
	readonly register = (_handle: unknown) => Disposable.None;
	readonly registerTree = (_treeId: string, _handle: unknown) => Disposable.None;
	readonly getVisualizedNodeFor = async (_treeId: string, _expr: unknown) => undefined;
	readonly getVisualizedChildren = async (_session: unknown, _treeId: string, _treeElementId: number) => [];
	readonly editTreeItem = async (_treeId: string, _item: unknown, _newValue: string) => undefined;

	readonly dispose = () => toDisposable(() => undefined);
}

registerSingleton(IDebugService, NoAiDebugService as unknown as ServiceCtor<IDebugService>, InstantiationType.Delayed);
registerSingleton(IExtensionHostDebugService, NoAiExtensionHostDebugService as unknown as ServiceCtor<IExtensionHostDebugService>, InstantiationType.Delayed);
registerSingleton(IDebugVisualizerService, NoAiDebugVisualizerService as unknown as ServiceCtor<IDebugVisualizerService>, InstantiationType.Delayed);
