import { PROFILES } from './profiles';

export const BOOKING_TYPES = [
  { value: 'ANALISIS', label: 'Análisis', requiredProfile: PROFILES.VETERINARIO },
  { value: 'CONSULTA', label: 'Consulta general', requiredProfile: PROFILES.VETERINARIO },
  { value: 'VACUNA', label: 'Vacuna', requiredProfile: PROFILES.VETERINARIO },
  { value: 'BAÑO', label: 'Baño', requiredProfile: PROFILES.AUXILIAR },
  { value: 'PELUQUERIA', label: 'Peluquería', requiredProfile: PROFILES.AUXILIAR },
  { value: 'RADIOGRAFIA', label: 'Radiografía', requiredProfile: PROFILES.TECNICO },
  { value: 'RESONANCIA', label: 'Resonancia', requiredProfile: PROFILES.TECNICO },
];