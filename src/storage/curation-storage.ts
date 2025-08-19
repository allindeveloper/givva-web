import { v4 as uuidv4 } from "uuid";
import type { CreateCurationFormType } from "../types/curation";

const STORAGE_KEY = "curations";

export function initCurations(dummy: CreateCurationFormType[]) {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    const withIds: CreateCurationFormType[] = dummy.map((c) => ({
      ...c,
      id: uuidv4(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(withIds));
    return withIds;
  }
  return JSON.parse(existing) as CreateCurationFormType[];
}

export function addCuration(
  data: CreateCurationFormType,
): CreateCurationFormType {
  const curations = getCurations();
  const newCuration: CreateCurationFormType = { ...data };
  curations.push(newCuration);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(curations));
  return newCuration;
}

export function getCurations(): CreateCurationFormType[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as CreateCurationFormType[]) : [];
}

export function getCurationById(
  id: string,
): CreateCurationFormType | undefined {
  const curations = getCurations();
  return curations.find((c) => c.id === id);
}
