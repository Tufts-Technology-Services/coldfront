// SPDX-FileCopyrightText: (C) ColdFront Authors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { initDataTable } from './dataTable';
import { initPopovers, initTooltips } from './bs';

function initDepedencies(event: Event): void {
  initDataTable();
  // Popovers and tooltips in the swapped-in content (existing ones are left as they are)
  const root = event.target instanceof HTMLElement ? event.target : document;
  initPopovers(root);
  initTooltips(root);
}

/**
 * Hook into HTMX's event system to reinitialize specific native event listeners when HTMX swaps
 * elements.
 */
export function initHtmx(): void {
  document.addEventListener('htmx:afterSettle', initDepedencies);
}
