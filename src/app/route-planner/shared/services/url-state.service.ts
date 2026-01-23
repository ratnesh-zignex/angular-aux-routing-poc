import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlStateService {
  private storageKeyPrefix = 'rp_sel_';

  /**
   * Generates a unique key, saves the selection data to localStorage, and returns the key.
   *
   * Key Generation Logic:
   * 1. Prefix 'rp_sel_': Identifies keys belonging to Route Planner selections.
   * 2. Timestamp 'Date.now()': Ensures uniqueness over time.
   * 3. Random String: Adds entropy to prevent collisions if multiple selections occur simultaneously.
   * Example Key: "rp_sel_1705928347123_x7z9q2w1"
   */
  saveSelection(data: any): string {
    const key = `${this.storageKeyPrefix}${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    localStorage.setItem(key, JSON.stringify(data));
    return key;
  }

  /**
   * Retrieves selection data by key.
   */
  getSelection(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
