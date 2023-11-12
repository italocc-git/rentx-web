export type ImagesCarType = {
  id: string
  name: string
  url: string
}
type SpecificationsCarType = {
  id: string
  name: string
  description: string
  iconName: string
}

export interface CarsType {
  id?: string | number
  available?: boolean
  description: string
  name: string
  fuelType: 'gasoline' | 'hybrid' | 'energy'
  transmission: 'automatic' | 'manual'
  dailyRate: string
  brand: string
  carImages: ImagesCarType[]
  carSpecifications: SpecificationsCarType[]
}
