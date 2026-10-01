// SPDX-FileCopyrightText: (C) ColdFront Authors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import './scss/coldfront.scss';
import 'bootstrap';
import 'htmx.org';
import { initDateSelector } from './dateSelector';
import { initSelect2 } from './select2';
import { initForm } from './form';
import { initDataTable } from './dataTable';
import { initCharts } from './charts';
import { initHtmx } from './htmx';
import {
  initBootstrap,
  initCollapse,
  initPopovers,
  initTooltips,
  showModal,
  hideModal,
  showPopover,
  hidePopover,
} from './bs';
import { getCookie } from './util';
import jQuery from 'jquery';
import { initStorageHistoryChart } from './charts/storageAllocationHistoryChart';
import 'chartjs-adapter-date-fns';

// Helpers for page and plugin scripts, which can't import from this bundle
Object.assign(window, {
  getCookie: function (name: string) {
    return getCookie(name);
  },
  $: jQuery,
  jQuery,
  coldfront: {
    initStorageHistoryChart,
    initPopovers,
    initTooltips,
    initCollapse,
    showModal,
    hideModal,
    showPopover,
    hidePopover,
  },
});

function initDocument(): void {
  for (const init of [
    initDateSelector,
    initSelect2,
    initForm,
    initDataTable,
    initBootstrap,
    initCharts,
    initHtmx,
  ]) {
    init();
  }
}
if (document.readyState !== 'loading') {
  initDocument();
} else {
  document.addEventListener('DOMContentLoaded', initDocument);
}
