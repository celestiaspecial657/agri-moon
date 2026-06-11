export const productionTrend = [
  { month: 'Jan', '2024': 28000, '2025': 32000 },
  { month: 'Feb', '2024': 24000, '2025': 28500 },
  { month: 'Mar', '2024': 31000, '2025': 36000 },
  { month: 'Apr', '2024': 38000, '2025': 42000 },
  { month: 'May', '2024': 35000, '2025': 39500 },
  { month: 'Jun', '2024': 29000, '2025': 33000 },
  { month: 'Jul', '2024': 32000, '2025': 37000 },
  { month: 'Aug', '2024': 40000, '2025': 45682 },
  { month: 'Sep', '2024': 36000, '2025': 41000 },
  { month: 'Oct', '2024': 33000, '2025': 38000 },
  { month: 'Nov', '2024': 30000, '2025': 35000 },
  { month: 'Dec', '2024': 27000, '2025': 31000 },
]

export const cropVariety = [
  { name: 'Inpari 32', value: 35.6, color: '#16a34a' },
  { name: 'Ciherang', value: 26.8, color: '#4ade80' },
  { name: 'Mekongga', value: 15.2, color: '#86efac' },
  { name: 'IR64', value: 12.4, color: '#bbf7d0' },
  { name: 'Others', value: 10.0, color: '#d1fae5' },
]

export const fieldStatus = [
  { name: 'Growing', value: 8921, pct: 71, color: '#16a34a' },
  { name: 'Harvest Ready', value: 2145, pct: 17, color: '#eab308' },
  { name: 'Planted', value: 1154, pct: 9, color: '#3b82f6' },
  { name: 'Fallow', value: 323, pct: 3, color: '#9ca3af' },
]

export const yieldPerHectare = [
  { village: 'Karangampel', yield: 7.2 },
  { village: 'Leles', yield: 6.8 },
  { village: 'Patrol', yield: 6.1 },
  { village: 'Bongas', yield: 5.6 },
  { village: 'Kandanghaur', yield: 4.9 },
]

export const productionByVariety = [
  { variety: 'Inpari 32', ton: 16234 },
  { variety: 'Ciherang', ton: 12247 },
  { variety: 'Mekongga', ton: 6947 },
  { variety: 'IR64', ton: 5662 },
  { variety: 'Others', ton: 4592 },
]

export const waterUsageTrend = [
  { month: 'Jan', usage: 980000 },
  { month: 'Feb', usage: 1050000 },
  { month: 'Mar', usage: 1120000 },
  { month: 'Apr', usage: 1250000 },
  { month: 'May', usage: 1180000 },
  { month: 'Jun', usage: 1090000 },
  { month: 'Jul', usage: 1250000 },
  { month: 'Aug', usage: 1320000 },
]

export const fertilizerTrend = [
  { month: 'Jan', urea: 380, npk: 210, organic: 80 },
  { month: 'Feb', urea: 420, npk: 230, organic: 95 },
  { month: 'Mar', urea: 460, npk: 260, organic: 110 },
  { month: 'Apr', urea: 510, npk: 280, organic: 120 },
  { month: 'May', urea: 490, npk: 265, organic: 115 },
  { month: 'Jun', urea: 440, npk: 245, organic: 100 },
  { month: 'Jul', urea: 470, npk: 255, organic: 108 },
  { month: 'Aug', urea: 500, npk: 270, organic: 112 },
]

export const fields = [
  { id: 'F-2025-0012', location: 'Desa Karangampel', area: 2.45, owner: 'Ahmad Hidayat', operator: 'Kelompok Tani Maju', variety: 'Inpari 32', plantDate: '12 Mar 2025', harvestDate: '20 Jul 2025', status: 'Growing' },
  { id: 'F-2025-0013', location: 'Desa Tarangkerta', area: 1.80, owner: 'Sri Aminah', operator: 'Mandiri', variety: 'Ciherang', plantDate: '15 Mar 2025', harvestDate: '23 Jul 2025', status: 'Harvest Ready' },
  { id: 'F-2025-0014', location: 'Desa Leles', area: 3.20, owner: 'Budi Santoso', operator: 'KT Sejahtera', variety: 'Mekongga', plantDate: '10 Mar 2025', harvestDate: '18 Jul 2025', status: 'Growing' },
  { id: 'F-2025-0015', location: 'Desa Patrol', area: 2.10, owner: 'Dedi Kurniawan', operator: 'Mandiri', variety: 'IR64', plantDate: '20 Mar 2025', harvestDate: '28 Jul 2025', status: 'Planted' },
  { id: 'F-2025-0016', location: 'Desa Bonges', area: 1.50, owner: 'Eni Nurhayati', operator: 'KT Maju Jaya', variety: 'Inpari 32', plantDate: '08 Mar 2025', harvestDate: '16 Jul 2025', status: 'Fallow' },
  { id: 'F-2025-0017', location: 'Desa Kandanghaur', area: 2.85, owner: 'Rudi Hartono', operator: 'KT Makmur', variety: 'Ciherang', plantDate: '14 Mar 2025', harvestDate: '22 Jul 2025', status: 'Growing' },
  { id: 'F-2025-0018', location: 'Desa Karangampel', area: 1.95, owner: 'Siti Rahayu', operator: 'Mandiri', variety: 'Inpari 32', plantDate: '18 Mar 2025', harvestDate: '26 Jul 2025', status: 'Harvest Ready' },
]

export const farmers = [
  { id: 'F-001', name: 'Ahmad Hidayat', nik: '3209123456780001', phone: '081234567890', village: 'Desa Karangampel', fields: 3, area: 5.8, status: 'Active' },
  { id: 'F-002', name: 'Sri Aminah', nik: '3209123456780002', phone: '081234567891', village: 'Desa Tarangkerta', fields: 2, area: 3.6, status: 'Active' },
  { id: 'F-003', name: 'Budi Santoso', nik: '3209123456780003', phone: '081234567892', village: 'Desa Leles', fields: 4, area: 8.2, status: 'Active' },
  { id: 'F-004', name: 'Dedi Kurniawan', nik: '3209123456780004', phone: '081234567893', village: 'Desa Patrol', fields: 2, area: 4.1, status: 'Active' },
  { id: 'F-005', name: 'Eni Nurhayati', nik: '3209123456780005', phone: '081234567894', village: 'Desa Bonges', fields: 1, area: 1.5, status: 'Inactive' },
  { id: 'F-006', name: 'Rudi Hartono', nik: '3209123456780006', phone: '081234567895', village: 'Desa Kandanghaur', fields: 5, area: 10.3, status: 'Active' },
]

export const harvestRecords = [
  { id: 'H-2025-001', fieldId: 'F-2025-0012', owner: 'Ahmad Hidayat', village: 'Karangampel', variety: 'Inpari 32', area: 2.45, production: 17.15, yield: 7.0, date: '20 Jul 2025', revenue: 85750000 },
  { id: 'H-2025-002', fieldId: 'F-2025-0013', owner: 'Sri Aminah', village: 'Tarangkerta', variety: 'Ciherang', area: 1.80, production: 11.88, yield: 6.6, date: '23 Jul 2025', revenue: 59400000 },
  { id: 'H-2025-003', fieldId: 'F-2025-0014', owner: 'Budi Santoso', village: 'Leles', variety: 'Mekongga', area: 3.20, production: 19.84, yield: 6.2, date: '18 Jul 2025', revenue: 99200000 },
  { id: 'H-2025-004', fieldId: 'F-2025-0017', owner: 'Rudi Hartono', village: 'Kandanghaur', variety: 'Ciherang', area: 2.85, production: 18.24, yield: 6.4, date: '22 Jul 2025', revenue: 91200000 },
]

export const plantingSeasons = [
  { id: 'PS-001', fieldId: 'F-2025-0012', owner: 'Ahmad Hidayat', village: 'Karangampel', variety: 'Inpari 32', area: 2.45, plantDate: '2025-03-12', harvestDate: '2025-07-20', status: 'Growing', progress: 72 },
  { id: 'PS-002', fieldId: 'F-2025-0013', owner: 'Sri Aminah', village: 'Tarangkerta', variety: 'Ciherang', area: 1.80, plantDate: '2025-03-15', harvestDate: '2025-07-23', status: 'Harvest Ready', progress: 95 },
  { id: 'PS-003', fieldId: 'F-2025-0014', owner: 'Budi Santoso', village: 'Leles', variety: 'Mekongga', area: 3.20, plantDate: '2025-03-10', harvestDate: '2025-07-18', status: 'Growing', progress: 68 },
  { id: 'PS-004', fieldId: 'F-2025-0015', owner: 'Dedi Kurniawan', village: 'Patrol', variety: 'IR64', area: 2.10, plantDate: '2025-03-20', harvestDate: '2025-07-28', status: 'Planted', progress: 15 },
  { id: 'PS-005', fieldId: 'F-2025-0016', owner: 'Eni Nurhayati', village: 'Bonges', variety: 'Inpari 32', area: 1.50, plantDate: '2025-03-08', harvestDate: '2025-07-16', status: 'Harvested', progress: 100 },
  { id: 'PS-006', fieldId: 'F-2025-0017', owner: 'Rudi Hartono', village: 'Kandanghaur', variety: 'Ciherang', area: 2.85, plantDate: '2025-03-14', harvestDate: '2025-07-22', status: 'Growing', progress: 70 },
]

export const fertilizerRecords = [
  { id: 'FR-001', fieldId: 'F-2025-0012', owner: 'Ahmad Hidayat', village: 'Karangampel', urea: 122.5, npk: 73.5, organic: 24.5, totalCost: 3062500, costPerHa: 1250000, efficiency: 92 },
  { id: 'FR-002', fieldId: 'F-2025-0013', owner: 'Sri Aminah', village: 'Tarangkerta', urea: 90.0, npk: 54.0, organic: 18.0, totalCost: 2250000, costPerHa: 1250000, efficiency: 88 },
  { id: 'FR-003', fieldId: 'F-2025-0014', owner: 'Budi Santoso', village: 'Leles', urea: 160.0, npk: 96.0, organic: 32.0, totalCost: 4000000, costPerHa: 1250000, efficiency: 95 },
  { id: 'FR-004', fieldId: 'F-2025-0015', owner: 'Dedi Kurniawan', village: 'Patrol', urea: 105.0, npk: 63.0, organic: 21.0, totalCost: 2625000, costPerHa: 1250000, efficiency: 85 },
]

export const irrigationData = [
  { id: 'IR-001', fieldId: 'F-2025-0012', source: 'Irigasi Primer Karangampel', pump: 'Pump P-03', waterReq: 12250, waterUsed: 11800, electricCost: 590000, efficiency: 96 },
  { id: 'IR-002', fieldId: 'F-2025-0013', source: 'Irigasi Sekunder', pump: 'Pump P-07', waterReq: 9000, waterUsed: 8700, electricCost: 435000, efficiency: 97 },
  { id: 'IR-003', fieldId: 'F-2025-0014', source: 'Irigasi Primer Leles', pump: 'Pump P-01', waterReq: 16000, waterUsed: 15200, electricCost: 760000, efficiency: 95 },
]

export const aiMessages = [
  { role: 'assistant', content: 'Selamat datang di AgriMoon AI Insights. Saya siap membantu analisis data pertanian Anda. Tanyakan apa saja tentang produktivitas lahan, rekomendasi pupuk, prediksi panen, atau anomali yang terdeteksi.' },
]

export const aiInsights = [
  { type: 'anomaly', title: 'Anomaly Detected', desc: 'Field F-2025-0034 di Desa Leles — Yield dropped 35% compared to last season', color: 'red' },
  { type: 'prediction', title: 'Prediction', desc: 'Total production in Season B 2025 — Estimated 48,300 – 51,300 ton', color: 'blue' },
  { type: 'recommendation', title: 'Recommendation', desc: 'Increase NPK usage in 12 fields — Based on soil nutrient analysis', color: 'green' },
]
