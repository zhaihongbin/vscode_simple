/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..', '..');
const outputRoots = ['out', 'out-build']
	.map(dir => path.join(repoRoot, dir))
	.filter(dir => fs.existsSync(dir));

const pruneDirectories = [
	'vs/platform/agentHost',
	'vs/platform/mcp',
	'vs/sessions',
	'vs/workbench/contrib/chat',
	'vs/workbench/contrib/inlineChat',
	'vs/workbench/contrib/mcp',
	'vs/workbench/contrib/imageCarousel',
	'vs/workbench/contrib/terminalContrib/chat',
	'vs/workbench/contrib/terminalContrib/chatAgentTools',
	'vs/workbench/services/agentHost',
	'vs/workbench/services/chat',
	'vs/workbench/services/mcp',
	'vs/workbench/services/aiEmbeddingVector',
	'vs/workbench/services/aiRelatedInformation',
	'vs/workbench/services/aiSettingsSearch'
];

const proposalKeywords = /(chat|mcp|languageModel|copilot|agentSessions|ai)/i;

function removeDirectoryIfExists(targetPath) {
	if (!fs.existsSync(targetPath)) {
		return false;
	}

	fs.rmSync(targetPath, { recursive: true, force: true });
	return true;
}

function pruneProposalDts(vscodeDtsDir) {
	if (!fs.existsSync(vscodeDtsDir)) {
		return [];
	}

	const removed = [];
	for (const fileName of fs.readdirSync(vscodeDtsDir)) {
		if (!fileName.startsWith('vscode.proposed.') || !fileName.endsWith('.d.ts')) {
			continue;
		}
		if (!proposalKeywords.test(fileName)) {
			continue;
		}

		const fullPath = path.join(vscodeDtsDir, fileName);
		fs.rmSync(fullPath, { force: true });
		removed.push(fullPath);
	}

	return removed;
}

if (!outputRoots.length) {
	console.log('[no-ai-prune] No output directory found (out/out-build), skipping.');
	process.exit(0);
}

const removedPaths = [];
for (const outputRoot of outputRoots) {
	for (const relativePath of pruneDirectories) {
		const absolutePath = path.join(outputRoot, relativePath);
		if (removeDirectoryIfExists(absolutePath)) {
			removedPaths.push(absolutePath);
		}
	}

	removedPaths.push(...pruneProposalDts(path.join(outputRoot, 'vscode-dts')));
}

if (!removedPaths.length) {
	console.log('[no-ai-prune] Nothing to remove.');
	process.exit(0);
}

for (const removedPath of removedPaths) {
	console.log(`[no-ai-prune] removed ${path.relative(repoRoot, removedPath)}`);
}
