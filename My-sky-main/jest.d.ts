/**
 * Jest Global Type Definitions
 * このファイルは@types/jestがインストールされていない場合の代替として機能します
 * @format
 */

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const test: (name: string, fn: () => void | Promise<void>) => void;
declare const beforeEach: (fn: () => void | Promise<void>) => void;
declare const afterEach: (fn: () => void | Promise<void>) => void;
declare const beforeAll: (fn: () => void | Promise<void>) => void;
declare const afterAll: (fn: () => void | Promise<void>) => void;

interface Matchers<R = void> {
  toBe(expected: any): R;
  toEqual(expected: any): R;
  toBeDefined(): R;
  toBeUndefined(): R;
  toBeNull(): R;
  toBeTruthy(): R;
  toBeFalsy(): R;
  toContain(expected: any): R;
  toHaveLength(expected: number): R;
  toBeGreaterThan(expected: number): R;
  toBeGreaterThanOrEqual(expected: number): R;
  toBeLessThan(expected: number): R;
  toBeLessThanOrEqual(expected: number): R;
  toHaveBeenCalled(): R;
  toHaveBeenCalledWith(...args: any[]): R;
  not: Matchers<R>;
}

declare function expect<T = any>(actual: T): Matchers<void>;

declare namespace jest {
  function fn(implementation?: (...args: any[]) => any): any;
  function mock(moduleName: string, factory?: () => any, options?: any): any;
  function spyOn(object: any, method: string): any;
  function clearAllMocks(): void;
  function resetAllMocks(): void;
  function restoreAllMocks(): void;
}
