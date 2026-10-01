import { Collapse, Modal, Popover, Tooltip } from 'bootstrap';
import { getElementsByQueryGenerator } from './util';

// Each init function sets up the matching data-bs-toggle elements under `container`
// (the whole document by default). getOrCreateInstance makes them safe to call again,
// e.g. after htmx swaps content in: elements already set up keep their instance.

export function initTooltips(container: Document | HTMLElement = document) {
  for (const tooltip of getElementsByQueryGenerator(
    '[data-bs-toggle="tooltip"]',
    container
  )) {
    Tooltip.getOrCreateInstance(tooltip, { container: 'body' });
  }
}

export function initPopovers(container: Document | HTMLElement = document) {
  for (const popover of getElementsByQueryGenerator(
    '[data-bs-toggle="popover"]',
    container
  )) {
    Popover.getOrCreateInstance(popover);
  }
}

export function initCollapse(container: Document | HTMLElement = document) {
  for (const toggle of getElementsByQueryGenerator(
    '[data-bs-toggle="collapse"]',
    container
  )) {
    // The Collapse instance belongs on the panel the toggle controls, not the toggle.
    // toggle: false, so setting one up doesn't open or close it.
    const selector =
      toggle.getAttribute('data-bs-target') ?? toggle.getAttribute('href');
    if (!selector || selector === '#') {
      continue;
    }
    for (const panel of getElementsByQueryGenerator(selector)) {
      Collapse.getOrCreateInstance(panel, { toggle: false });
    }
  }
}

export function initBootstrap(): void {
  for (const func of [initTooltips, initPopovers]) {
    func();
  }
}

type ElementOrSelector = Element | string;

function resolve(target: ElementOrSelector): Element | null {
  return typeof target === 'string' ? document.querySelector(target) : target;
}

/** Show a modal from script, e.g. after validating a form. */
export function showModal(target: ElementOrSelector): void {
  const el = resolve(target);
  if (el) {
    Modal.getOrCreateInstance(el).show();
  }
}

/** Hide a modal from script, e.g. after an AJAX save. */
export function hideModal(target: ElementOrSelector): void {
  const el = resolve(target);
  if (el) {
    Modal.getInstance(el)?.hide();
  }
}

/** Show a popover from script, e.g. one created with trigger: 'manual'. */
export function showPopover(target: ElementOrSelector): void {
  const el = resolve(target);
  if (el) {
    Popover.getOrCreateInstance(el).show();
  }
}

/** Hide a popover from script. */
export function hidePopover(target: ElementOrSelector): void {
  const el = resolve(target);
  if (el) {
    Popover.getInstance(el)?.hide();
  }
}
