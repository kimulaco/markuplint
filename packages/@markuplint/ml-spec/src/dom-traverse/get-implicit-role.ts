import type { ARIAVersion, ComputedRole, MLMLSpec } from '../types';

import { getImplicitRole as _getImplicitRole } from '../specs/get-implicit-role';
import { getRoleSpec } from '../specs/get-role-spec';
import { resolveNamespace } from '../utils/resolve-namespace';

export function getImplicitRole(specs: Readonly<MLMLSpec>, el: Element, version: ARIAVersion): ComputedRole {
	const implicitRole = getImplicitRoleName(el, version, specs);
	if (implicitRole === false) {
		// No Corresponding Role
		return {
			el,
			role: null,
		};
	}
	const { namespaceURI } = resolveNamespace(el.localName, el.namespaceURI);
	const spec = getRoleSpec(specs, implicitRole, namespaceURI, version);
	if (!spec) {
		return {
			el,
			role: null,
			errorType: 'IMPLICIT_ROLE_NAMESPACE_ERROR',
		};
	}
	return {
		el,
		role: {
			...spec,
			isImplicit: true,
		},
	};
}

export function getImplicitRoleName(el: Element, version: ARIAVersion, specs: Readonly<MLMLSpec>) {
	return _getImplicitRole(specs, el.localName, el.namespaceURI, version, el.matches.bind(el));
}